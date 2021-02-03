// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button


// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//Clear a task
taskList.addEventListener('click',removeTask);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

//toggle sort button

// Add New  Task Function definition 
function addNewTask(e) {

    
    if (!taskInput.value) 
    {
       taskInput.style.borderColor = "red";
       return;
    }

  // Create an li element when the user adds a task 
  const li = document.createElement('li');
  // Adding a class
  li.className = 'collection-item';
  // Create text node and append it 
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new element for the link 
  const link = document.createElement('a');
  // Add class and the x marker for a 
  link.classList = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //time element for the list
  const time = document.createElement('time');
  time.dateTime = new Date();
  time.className = 'time-stamp';
//   time.innerHTML = time.dateTime;
//   time.style.display = "none";
  // Append link to li
  li.appendChild(link);
  li.appendChild(time)
  // Append to ul 
  taskList.appendChild(li);

  e.preventDefault(); //disable form submission
}



// Clear Task Function definition 
function clearAllTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }


}
// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }

}


// Filter tasks function definition 
function filterTasks(e) {

    let input = document.getElementById("filter");
    let mFilter = input.value.toUpperCase();
    let li = taskList.getElementsByTagName("li");
    let array = Array.from(li);
    array.forEach(list=> {
        let text = list.textContent.toUpperCase();

        if(text.indexOf(mFilter) > -1){
            list.style.display = "block";
        }else{
            list.style.display = "none";
        }
        
    })

}



//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa');   

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

const sortBtn = document.querySelector('.dropdown-trigger');        //sort button
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, sortBtn);

  });

  const sortContent = document.querySelectorAll('.option');
  let ascending = sortContent[0];
  let dscending = sortContent[1];

  ascending.addEventListener('click',ascend);
  dscending.addEventListener('click',dscend);

  function ascend(){
    let li = taskList.getElementsByTagName("li");
    let array = Array.from(li);
    let sorted = array.sort((a, b) => a.children[1].dateTime - b.children[1].dateTime?1:-1);
    taskList.innerHTML ="";
    for (let i = 0; i < sorted.length; i++) {
        taskList.appendChild(sorted[i]);
        
    }
        
    
  }
  function dscend(){
    let li = taskList.getElementsByTagName("li");
    let array = Array.from(li);
    let sorted = array.sort((a, b) => b.children[1].dateTime - a.children[1].dateTime?1:-1);
 
    taskList.innerHTML ="";
    for (let i = 0; i < sorted.length; i++) {
        
        taskList.appendChild(sorted[i]);
        
    }
  }