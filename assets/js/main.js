const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    // Add more quotes here
];

var previousQuote = -1;

function getNewQuote() {
    var randomQuote;
    do {
        randomQuote = Math.floor(Math.random() * quotes.length);
    } while (randomQuote === previousQuote);

    previousQuote = randomQuote;

    const quote = quotes[randomQuote];
    document.getElementById("quote").textContent = `"${quote.quote}"`;
    document.getElementById("author").textContent = `-- ${quote.author}`;
}