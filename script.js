let form = document.getElementById("form")
let toDoContainer = document.getElementById("toDoContainer");
let firstToDo = document.getElementById("firstToDo");
let input = document.getElementById("textInput");

// the end value needs to be put into an array to be displayed 
let todoArr = [];


// adds event listener to form submit button to clarify what the list is waiting for
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // this generates a random number to create a unique id for the list value
    let id = Math.random() * 200000;
    console.log(id)
    // on button click the event listener will produce a new oject 
    // holding the values of a new id, and the actual text of the object
    const todo = new Todo(id, input.value);
    console.log(todo)
    todoArr = [...todoArr, todo];
    console.log(todoArr)
})

// basic constructor object instance
class Todo {
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }
}

