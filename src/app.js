console.log("APP JS - INIT")

// JSX
var template = <section id="reactSection" class="textSection">
    <h1>Indecision App</h1>
    <h2>My Second Title with React and JSX</h2>
    <p>Yeap! write code with JSX its good! React its realy cool, i can do it</p>
</section>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);