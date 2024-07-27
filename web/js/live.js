document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const captureButton = document.getElementById('capture');
    const output = document.getElementById('output');
    const context = canvas.getContext('2d');
    const constraints = {
        video: {
            facingMode: 'environment',
            width: { ideal: 1080 },
            height: { ideal: 1920  }
        }
    };
    navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error accessing the camera: ', error);
        });

    // Load the COCO-SSD model
    let model;
    cocoSsd.load().then((loadedModel) => {
        model = loadedModel;
    });

    // Capture a frame and perform image recognition
    captureButton.addEventListener('click', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Perform object detection
        model.detect(canvas).then(predictions => {
            output.innerHTML = '';
            const bookPredictions = predictions.filter(prediction => prediction.class === 'book');
            if (bookPredictions.length > 0) {
                const book = bookPredictions[0];
                context.strokeStyle = 'red';
                context.lineWidth = 2;
                context.strokeRect(book.bbox[0], book.bbox[1], book.bbox[2], book.bbox[3]);

                // Extract the book region and perform OCR
                const bookCanvas = document.createElement('canvas');
                const bookContext = bookCanvas.getContext('2d');
                bookCanvas.width = book.bbox[2];
                bookCanvas.height = book.bbox[3];
                bookContext.drawImage(canvas, book.bbox[0], book.bbox[1], book.bbox[2], book.bbox[3], 0, 0, book.bbox[2], book.bbox[3]);

                Tesseract.recognize(
                    bookCanvas,
                    'eng',
                    {
                        logger: m => console.log(m)
                    }
                ).then(({ data: { text } }) => {
                    const searchText = text.replace(/\s+/g, ' ').trim();
                    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchText)}`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.items && data.items.length > 0) {
                                const bookInfo = data.items[0].volumeInfo;
                                const title = bookInfo.title || 'No title found';
                                const authors = bookInfo.authors ? bookInfo.authors.join(', ') : 'No authors found';
                                const description = bookInfo.description || 'No description found';

                                output.innerHTML = `<h2>${title}</h2><p>by ${authors}</p><p>${description}</p>`;
                            } else {
                                output.innerHTML = '<p>No book metadata found.</p>';
                            }
                        });
                });
            } else {
                output.innerHTML = '<p>No book detected.</p>';
            }
        });
    });

});
