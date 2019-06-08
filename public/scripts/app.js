"use strict";

console.log("APP JS - INIT");

// JSX
var template = React.createElement(
    "section",
    { id: "reactSection", "class": "textSection" },
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "h2",
        null,
        "My Second Title with React and JSX"
    ),
    React.createElement(
        "p",
        null,
        "Yeap! write code with JSX its good! React its realy cool, i can do it"
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
