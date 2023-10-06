const inputTask = document.querySelector("#task"); // id de mon input
const btnAddTask = document.querySelector(".add-task"); // class de button
const addList = document.querySelector("#task-list");

function addTask() {
  const valueInput = inputTask.value; // assigne la valeur de mon input à la variable valueInput NB: Value récupere toujours une valeur
  inputTask.value = ""; //permet de reinitialiser la valeur de l'input
  addList.innerHTML += `<li>  
  <p>${valueInput}</p>
  <div>
  <button class='done'>Done</button>
  <button class='delete'>Delete</button>
  </div>
  </li>`;
} // addList.innerHTML nous permet d'additioner les elements notre liste , attention le signe juste = permet d'ajouter et remplacer si on change de mots alors aue le signe += permet d'ajouter les mots sans effacer les precedents.
function deleteOrCompleteTask(event) {
  const btnClickedClass = event.target.classList; // permet de cibler le bouton
  const listItem = event.target.closest("li"); // permet de cibler les element li

  if (btnClickedClass[0] === "done") {
    listItem.firstElementChild.classList.add("completed"); // permet d'ajouter une classe au 1 enfant de ("div") qui est ("li")
    event.target.textContent = "Undo"; // permet d'afficher ("Undo") une fois qu'on a supprimer ("done")
    btnClickedClass.remove("done"); // permet de supprimer le bouton ("done")
    btnClickedClass.add("undo"); // permet d'ajouter ("undo")
  } else if (btnClickedClass[0] === "undo") {
    listItem.firstElementChild.classList.remove("completed"); /// permet de supprimer une classe au 1 enfant de ("div") qui est ("li")
    event.target.textContent = "Done";
    btnClickedClass.remove("undo");
    btnClickedClass.add("done");
  } else if (btnClickedClass[0] === "delete") {
    const confirmation = confirm(
      "Etes vous sur de vouloir supprimer cette tache?"
    ); // la fonction "CONFIRM" permet rappeler a l'utilisateur s'il veut ou non continuer sa tache

    if (confirmation) {
      listItem.remove();
    } // si c'est oui listItem doit supprimer
  }
}

btnAddTask.addEventListener("click", addTask); // cette fonction nous permet d'ajouter le contenu de ce qu'on a ecrit quand on click sur le bouton.
addList.addEventListener("click", deleteOrCompleteTask);
