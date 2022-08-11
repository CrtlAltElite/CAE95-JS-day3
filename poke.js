addPokeField()
addSubmitButton()
createPokeTable()

function addPokeField(){
    let input = document.createElement('input');
    input.placeholder="Enter A pokemon name";
    input.name="poke_name";
    input.classList.add("form-control");
    document.body.appendChild(input);
}



function addSubmitButton(){
    let button = document.createElement('button');
    button.innerText = "Submit"
    button.classList.add('form-control', 'btn', 'btn-primary');
    button.addEventListener("click", (event)=>handleSubmit(event))
    document.body.appendChild(button);
}

function handleSubmit(event){
    // stops the click event from bubbling
    event.stopPropagation();
    // prevent page reloads on click
    event.preventDefault();
    console.log("Form was submitted")
    const pokeName=document.getElementsByName("poke_name")[0].value
    console.log(pokeName)
    doAPICall(pokeName);
}

function createPokeTable(){
    let table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    document.body.appendChild(table)

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let tr = document.createElement('tr');
    thead.appendChild(tr)

    let th = document.createElement('th');
    th.innerText="Sprite: ";
    th.scope="col";
    tr.appendChild(th)

    th = document.createElement('th');
    th.innerText="Pokemon Name: ";
    th.scope="col";
    tr.appendChild(th)

    th = document.createElement('th');
    th.innerText="Pokemon Ability: ";
    th.scope="col";
    tr.appendChild(th)

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
}

async function doAPICall(pokeName){
    let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
    console.log(result)
    result=result.data

    let tbody = document.getElementsByTagName('tbody')[0];

    let tr = document.createElement('tr');
    tbody.appendChild(tr)

    th= document.createElement('th');
    th.scope="row";
    th.innerHTML=`<img src=${result.sprites.versions['generation-v']['black-white'].animated.front_shiny} height="50px">`
    tr.appendChild(th)

    td= document.createElement('td')
    td.innerText=result.name
    tr.appendChild(td)

    td= document.createElement('td')
    td.innerText=result.abilities[0].ability.name
    tr.appendChild(td)

}

const mylist = JSON.parse(localStorage.getItem('mylist')) ?? ['Shayne','Katina','Jody', 'Alex']

const setup=()=>{
    const removeButton = document.createElement('button')
    removeButton.innerText = "Remove"
    document.body.appendChild(removeButton)
 
    removeButton.addEventListener('click', (e)=>{   
        const toRemove = document.getElementsByName('item')[0].value;
        const indexToRemove = mylist.indexOf(toRemove);
        if (indexToRemove>=0){
            mylist.splice(indexToRemove,1);
        }
        localStorage.setItem('mylist', JSON.stringify(mylist));
        update()
    })

    const addButton = document.createElement('button')
    addButton.innerText = "Add"
    document.body.appendChild(addButton)
    addButton.addEventListener('click', (e)=>{
         const toAdd = document.getElementsByName('item')[0].value; mylist.push(toAdd);
         localStorage.setItem('mylist', JSON.stringify(mylist));
         update()
        })

    const input = document.createElement('input')
    input.placeholder ="Item"
    input.name="item"
    document.body.appendChild(input)

    const ul = document.createElement('ul')
    for (let o of mylist){
        const li = document.createElement('li')
        li.innerText = o
        ul.appendChild(li)
    }
    document.body.appendChild(ul)   
}

const update=()=>{
    const ul = document.getElementsByTagName('ul')[0]
    ul.innerHTML=''
    for (let o of mylist){
        const li = document.createElement('li')
        li.innerText = o
        ul.appendChild(li)
    }
}

setup()