window.onload = function() {
    showFirstTime();
}
var content = [
    {
        name: 'about',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque expedita, adipisci est non amet ratione voluptate, voluptatem repellat, omnis id possimus nostrum sunt cum animi itaque autem provident dolor!'
    },
    {
        name: 'service',
        description: 'In addition to keeping any additional handlers on an element from being executed, this method also stops the bubbling by implicitly calling event.stopPropagation(). To simply prevent the event from bubbling to ancestor elements but allow other event handlers to execute on the same element, we can use event.stopPropagation() instead.'
    },
    {
        name: 'mission',
        description: 'Similarly, events handled by .delegate() will propagate to the elements to which they are delegated; event handlers bound on any elements below it in the DOM tree will already have been executed by the time the delegated event handler is called. These handlers, therefore, may prevent the delegated handler from triggering by calling event.stopPropagation() or returning false.'
    },
]

const button = document.querySelectorAll('.tab-button button');

const getTabContent = (e) => {
    e.preventDefault();

    const classNam = e.target.className;

    content.map((item) => {
           if ( classNam === item.name ) {
            document.querySelector('.content').innerHTML = 
            `<h2>${item.name}</h2><p>${item.description}</p>`;
           }
    });
}

button.forEach(btn => {
    btn.addEventListener('click', getTabContent);
} );

const count = 0;
function showFirstTime() {
    document.querySelector('.content').innerHTML = 
            `<h2>${content[count].name}</h2><p>${content[count].description}</p>`;
}

