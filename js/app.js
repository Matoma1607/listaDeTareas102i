function agregarTarea() {
  const tareaInput = document.getElementById("tareaInput");
  const tarea = tareaInput.value;
  const taskList = document.getElementById("taskList");

  if (tarea !== "") {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = tarea;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "float-end");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    tareaInput.value = "";
  }
}
