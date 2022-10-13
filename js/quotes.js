const quoteList = [
    {
        quote: "I'm selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: '- Marilyn Monroe -'
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: '- Dr. Seuss -'
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: '- Mahatma Gandhi -'
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: '- Robert Frost -'
    },
    {
        quote: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself...'",
        author: '- C.S. Lewis, The Four Loves -'
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: '- Maya Angelou -'
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: '- Elbert Hubbard -'
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: '- Mahatma Gandhi -'
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: '- Ralph Waldo Emerson -'
    },
]

let quotes = function () {
    const quote = document.querySelector('#quote span:first-child');
    const author = document.querySelector('#quote span:last-child');

    const todaysQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

    if (quote !== null && author !== null) {
        quote.innerText = todaysQuote.quote;
        author.innerText = todaysQuote.author;
    }
}

quotes();