
const quotes = [
{
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
},
{
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
},
{
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;






















