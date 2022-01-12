const title = 'My First React Element!';

const desc = 'I just learned how to create a React node and render it into the DOM.';

const header = (
    <header>
        <h1>{ title }</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
   header,
   document.getElementById('root')
);