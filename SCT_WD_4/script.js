document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskName = document.getElementById("taskName").value.trim();
    const taskDateTime = document.getElementById("taskDateTime").value;

    if (!taskName) {
        alert("Please enter a task name!");
        return;
    }

    const task = {
        name: taskName,
        dateTime: taskDateTime,
        completed: false
    };

    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("taskName").value = "";
    document.getElementById("taskDateTime").value = "";
    loadTasks();
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = getTasks();

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        li.innerHTML = `
            <span>
                ${task.name} 
                <small>${task.dateTime ? "📅 " + task.dateTime : ""}</small>
            </span>
            <div class="task-actions">
                <button onclick="toggleComplete(${index})">✔</button>
                <button onclick="editTask(${index})">✏</button>
                <button onclick="deleteTask(${index})">🗑</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleComplete(index) {
    let tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function editTask(index) {
    let tasks = getTasks();
    const newName = prompt("Edit Task", tasks[index].name);
    if (newName !== null) {
        tasks[index].name = newName.trim();
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}

function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}
