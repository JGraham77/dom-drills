document.addEventListener('DOMContentLoaded', function() {
    // Each variable creates a header with subsequential numbers and then a text for each header
    let h1 = document.createElement('h1');
    let headerText = document.createTextNode('This is an h1');

    let h2 = document.createElement('h2');
    let headerTextH2 = document.createTextNode('This is an h2');

    let h3 = document.createElement('h3');
    let headerTextH3 = document.createTextNode('This is an h3');

    let h4 = document.createElement('h4');
    let headerTextH4 = document.createTextNode('This is an h4');

    let h5 = document.createElement('h5');
    let headerTextH5 = document.createTextNode('This is an h5');

    let h6 = document.createElement('h6');
    let headerTextH6 = document.createTextNode('This is an h6');
    
    // Adding the created header to the page
    h1.appendChild(headerText);
    document.body.appendChild(h1);

    h2.appendChild(headerTextH2);
    document.body.appendChild(h2);

    h3.appendChild(headerTextH3);
    document.body.appendChild(h3);

    h4.appendChild(headerTextH4);
    document.body.appendChild(h4);

    h5.appendChild(headerTextH5);
    document.body.appendChild(h5);

    h6.appendChild(headerTextH6);
    document.body.appendChild(h6);

    // An array of colors
    let colors = ['blue', 'red', 'green', 'orange', 'purple', 'yellow', 'black', 'goldenrod'];

    // function to randomly change colors of the text
    function getRandomColor() {
        let myRandomColor = colors[Math.floor(Math.random()*colors.length)];
        return myRandomColor;
    };

    // Changes color of h1 with a double click
    h1.addEventListener('dblclick', function() {
        let myRandomColor = getRandomColor();
        h1.style.color = myRandomColor;
    });
    
    // Changes color of h2 with a double click
    h2.addEventListener('dblclick', function() {
        let myRandomColor = getRandomColor();
        h2.style.color = myRandomColor;
    });

    // Changes color of h3 with a double click
    h3.addEventListener('dblclick', function() {
        let myRandomColor = getRandomColor();
        h3.style.color = myRandomColor;
    });

    // Changes color of h4 with a double click
    h4.addEventListener('dblclick', function() {
        let myRandomColor = getRandomColor();
        h4.style.color = myRandomColor;
    });

    // Changes color of h5 with a double click
    h5.addEventListener('dblclick', function() {
        let myRandomColor = getRandomColor();
        h5.style.color = myRandomColor;
    });

    // Changes color of h6 with a double click
    h6.addEventListener('dblclick', function() {
        let myRandomColor = getRandomColor();
        h6.style.color = myRandomColor;
    });

    let ul = document.createElement('ul');
    body.appendChild('ul');

    let liCount = 0;

    // Function that inserts a list item
    function addToList() {
        liCount++; // Adds +1 to liCount with each iteration
        let li = document.createElement('li');
        let liText = document.createTextNode('This is list item ' + liCount);
        li.appendChild(liText);
        ul.appendChild(li);
    };

    let btn = document.getElementsByClassName('btn');
    btn[0].addEventListener('click', addToList);
        console.log('Here');
});
