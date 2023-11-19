function getTask() {
  var task = document.getElementById("input-box").value;
  return task;
}

var taskArray = [];

function putTaskInArray(taskToAdd) {
  taskArray.push(taskToAdd);
  return taskArray;
}

function displayTasks(Array) {
  var emptyTask = " ";
  var s = 1;
  for (let i of Array) {
    emptyTask += s + ")" + " " + i + "<br>";
    s++;
  }
  document.getElementById("displayed-tasks").innerHTML = emptyTask;
}

function addTask() {
  var taskToAdd = getTask();
  var taskArraytoDisplay = putTaskInArray(taskToAdd);
  displayTasks(taskArraytoDisplay);
}
function deleteTask() {
  var numberOfTaskToDelete = parseInt(
    document.getElementById("taskToBeDeleted").value
  );
  deleteTaskFromArray(taskArray, numberOfTaskToDelete);
  alert("Task Deleted successfully");
}
function deleteTaskFromArray(taskArray, numberOfTaskToDelete) {
  taskArray.splice(numberOfTaskToDelete - 1, 1);
  displayTasks(taskArray);
}
