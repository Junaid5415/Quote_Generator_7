const apiUrl = 'https://api.quotable.io/Random';
const root = document.querySelector('#root');
const quote = document.querySelector('#root blockquote.middle')
const author = document.querySelector('#root span.bottom') 

const button2 = document.querySelector('#root button:last-child')

const newQuote = document.querySelector('#root button#new')
console.log(newQuote);

async function getData(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    quote.innerHTML = data.content;
    author.innerHTML = data.author
}



newQuote.addEventListener('click', async ()=>{
    const apiUrl = 'https://api.quotable.io/Random';

    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    quote.style.display = 'block';
    author.style.display = 'block';
    button2.style.opacity = '1';
    button2.style.transition =  'opacity 300ms'

    quote.innerHTML = data.content;
    author.innerHTML = data.author
});

console.log(quote.tagName);
quote.addEventListener('click', () => {
    if (quote.tagName.toLowerCase() === 'textarea' || quote.tagName.toLowerCase() === 'input') {
        quote.select();
    } else {
        const range = document.createRange();
        range.selectNodeContents(quote);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
    try {
        document.execCommand('copy');
        alert('Text copied successfully.');
    } catch (err) {
        alert('Unable to copy text:');
    }
});

async function tweet(){
    const quote = document.querySelector('#root blockquote.middle').textContent
    const author = document.querySelector('#root span.bottom').textContent
    window.open(`https://twitter.com/intent/tweet?text=${quote}%20-%20${author}`)
}
