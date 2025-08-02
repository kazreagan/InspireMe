
    function fetchQuote() {
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');

        // Fade out
        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';

        fetch('/quote')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    quoteText.innerText = `"${data.quote}"`;
                    quoteAuthor.innerText = `- ${data.author}`;
                    // Fade in
                    quoteText.style.opacity = '1';
                    quoteAuthor.style.opacity = '1';
                }, 300);
            });
    }

