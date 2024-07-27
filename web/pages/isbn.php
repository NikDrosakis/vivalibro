    <script>
        async function fetchBookInfo(isbn) {
            const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data[`ISBN:${isbn}`]) {
                    return data[`ISBN:${isbn}`];
                } else {
                    console.log('No book found for this ISBN');
                    return null;
                }
            } catch (error) {
                console.error('Error fetching book info:', error);
                return null;
            }
        }

        async function lookupISBN() {
            const isbnInput = document.getElementById('isbnInput').value;
            if (!isValidISBN(isbnInput)) {
                alert('Invalid ISBN');
                return;
            }
            const bookInfo = await fetchBookInfo(isbnInput);
            if (bookInfo) {
                document.getElementById('bookInfo').innerHTML = `
                    <h2>${bookInfo.title}</h2>
                    <p>Authors: ${bookInfo.authors ? bookInfo.authors.map(a => a.name).join(', ') : 'N/A'}</p>
                    <p>Publisher: ${bookInfo.publishers ? bookInfo.publishers.map(p => p.name).join(', ') : 'N/A'}</p>
                    <p>Published Date: ${bookInfo.publish_date ? bookInfo.publish_date : 'N/A'}</p>
                `;
            } else {
                document.getElementById('bookInfo').innerHTML = '<p>No book found for this ISBN</p>';
            }
        }

        function isValidISBN(isbn) {
            isbn = isbn.replace(/[\s-]+/g, ''); // Remove spaces and hyphens
            if (isbn.length === 10) {
                return isValidISBN10(isbn);
            } else if (isbn.length === 13) {
                return isValidISBN13(isbn);
            }
            return false;
        }

        function isValidISBN10(isbn) {
            if (!/^\d{9}[\dX]$/.test(isbn)) return false;
            let sum = 0;
            for (let i = 0; i < 9; i++) {
                sum += (i + 1) * parseInt(isbn.charAt(i));
            }
            sum += 10 * (isbn.charAt(9) === 'X' ? 10 : parseInt(isbn.charAt(9)));
            return sum % 11 === 0;
        }

        function isValidISBN13(isbn) {
            if (!/^\d{13}$/.test(isbn)) return false;
            let sum = 0;
            for (let i = 0; i < 12; i++) {
                sum += parseInt(isbn.charAt(i)) * (i % 2 === 0 ? 1 : 3);
            }
            return (sum + parseInt(isbn.charAt(12))) % 10 === 0;
        }
		
		
		//find isbn 
		
		        async function fetchISBN(title, author) {
            const query = `${title} ${author}`;
            const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.numFound > 0) {
                    const book = data.docs[0];
                    return book.isbn;
                } else {
                    console.log('No book found for this query');
                    return null;
                }
            } catch (error) {
                console.error('Error fetching book info:', error);
                return null;
            }
        }

        async function lookupISBN() {
            const titleInput = document.getElementById('titleInput').value;
            const authorInput = document.getElementById('authorInput').value;

            if (!titleInput || !authorInput) {
                alert('Please enter both title and author');
                return;
            }

            const isbnList = await fetchISBN(titleInput, authorInput);
            if (isbnList) {
                document.getElementById('isbnInfo').innerHTML = `
                    <h2>ISBN Information</h2>
                    ${isbnList.map(isbn => `<p>${isbn}</p>`).join('')}
                `;
            } else {
                document.getElementById('isbnInfo').innerHTML = '<p>No book found for this query</p>';
            }
        }
		
    </script>
</head>
<body>
    <div>
        <label for="isbnInput">Enter ISBN:</label>
        <input type="text" id="isbnInput">
        <button onclick="lookupISBN()">Lookup</button>
    </div>
    <div id="bookInfo"></div>

    <div>
        <label for="titleInput">Enter Book Title:</label>
        <input type="text" id="titleInput">
    </div>
    <div>
        <label for="authorInput">Enter Book Author:</label>
        <input type="text" id="authorInput">
    </div>
    <button onclick="lookupISBN()">Lookup ISBN</button>
    <div id="isbnInfo"></div>
