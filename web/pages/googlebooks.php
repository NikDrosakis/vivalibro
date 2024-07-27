    <script>
        async function fetchBookInfo(isbn) {
            const apiKey = 'AIzaSyDNAIWEszhKEjT6E5fpT8OZjIJrPY_zRI8';
            const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.totalItems > 0) {
                    return data.items[0].volumeInfo;
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
                    <p>Authors: ${bookInfo.authors ? bookInfo.authors.join(', ') : 'N/A'}</p>
                    <p>Publisher: ${bookInfo.publisher ? bookInfo.publisher : 'N/A'}</p>
                    <p>Published Date: ${bookInfo.publishedDate ? bookInfo.publishedDate : 'N/A'}</p>
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
		
		
		
		
		//fetch isbn 
		
		async function fetchISBN(title, author) {
            const apiKey = 'AIzaSyDNAIWEszhKEjT6E5fpT8OZjIJrPY_zRI8';
            const query = `${title}+inauthor:${author}`;
            const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.totalItems > 0) {
                    return data.items[0].volumeInfo.industryIdentifiers;
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

            const isbnInfo = await fetchISBN(titleInput, authorInput);
            if (isbnInfo) {
                document.getElementById('isbnInfo').innerHTML = `
                    <h2>ISBN Information</h2>
                    ${isbnInfo.map(info => `<p>${info.type}: ${info.identifier}</p>`).join('')}
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
	
	
	
</body>
</html>









