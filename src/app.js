
var appRoot = document.getElementById('app');

// set variables to 'header page'
var app = {
    title: "Indecision App",
    subtitle: "Blá Blá Blá",
    options: ['One', 'Two']
};
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <ol>
            <li>Item onde</li>
            <li>Item two</li>
        </ol>
    </div>
);

// object like Json comes
var user = {
    name: "Caio Alves",
    age: 29
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
};

var templateTwo = (
    <div>
        <h1>User Name: {user.name ? user.name : "anonymous"}</h1>
        <p>Age: { ( user.age && user.age >= 29 )   && user.age}</p>
        {getLocation(user.location)}
    </div>
);




ReactDOM.render(template, appRoot);