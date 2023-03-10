function addTask()
{
    const taskTitle = document.querySelector('#task-title').value

    if( taskTitle )
    {
        const template = document.querySelector('.template')

        const newTask = template.cloneNode(true)

        newTask.querySelector('.task-title').textContent = taskTitle

        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        const list = document.querySelector('#task-list')

        list.appendChild(newTask)

        document.querySelector('#task-title').value = ''

        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this)
        })

        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            doneTask(this)
        })

    } else {
        alert('Voce não inseriu  nenhuma tarefa!')
    }
}

let removeTask = (task) => 
{
    task.parentNode.remove(true)
}

let doneTask = (task) =>
{
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle('done')
}

const btn = document.querySelector('#add-btn')

btn.addEventListener("click", function(event)
{
    event.preventDefault()

    addTask()
})

btn.addEventListener("keyup", function(event)
{
    event.preventDefault()

    if( event.key === "Enter" )
        addTask()
})
