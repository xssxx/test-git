function handleAdd() {
  const taskInput = document.getElementById("task");
  const timeInput = document.getElementById("time");
  const container = document.getElementById("container");

  const task = taskInput.value;
  const time = timeInput.value;

  if (!task || !time) return;

  const card = document.createElement("div");
  const taskDiv = document.createElement("div");
  const timeDiv = document.createElement("div");
  taskDiv.innerHTML = task;
  taskDiv.className = "half";
  timeDiv.innerHTML = time;
  timeDiv.className = "half";

  card.className = "task";
  card.appendChild(taskDiv);
  card.appendChild(timeDiv);

  container.appendChild(card);

  // clear inputs
  taskInput.value = "";
  timeInput.value = "";
}
