let toDoList = [];
let toDoApp = true;
while (toDoApp) {
  let menu = Number(
    prompt(
      "1. Lägg till uppgift. \n2. Visa din lista. \n3. Klarmarkera en uppgift. \n4. Ta bort en uppgift. \n5. Avsluta programmet. "
    )
  );

  switch (menu) {
    case 1:
      addTask();
      break;
    case 2:
      showList();
      break;
    case 3:
      completeTask();
      break;
    case 4:
      removeTask();
      break;
    case 5:
      alert("Tack för att du gjort en ToDo-lista :)");
      toDoApp = false;
      break;
    default:
      alert("Gör rätt, skriv en siffra mellan 1-5");
  }

  function addTask() {
    let taskInput = true;
    while (taskInput) {
      let userInput = prompt("Lägg till en ny uppgift:");
      if (userInput === null) {
        taskInput = false;
      } else if (userInput.length < 1) {
        alert("Uppgiften får inte vara tom, försök igen.");
      } else {
        const toDo = {
          description: userInput,
          id: toDoList.length,
          done: false,
        };
        toDoList.push(toDo);
        taskInput = confirm("Vill du fortsätta?");
      }
    }
  }

  // Variabel till showlist för alert ELLER prompt
  function showList() {
    if (toDoList < 1) {
      alert("Det finns inget att visa ännu, lägg till uppgifter först.");
    } else {
      alert(
        toDoList.map((item) => `${item.id}. ${item.description} \n`).join("")
      );
    }
  }

  function completeTask() {
    let taskCompleted = true;
    while (taskCompleted) {
      if (toDoList.length < 1) {
        alert("Det finns inget att klarmarkera, lägg till uppgifter först.");
        taskCompleted = false;
      } else {
        const selectedTask = Number(
          prompt(
            `Vilken uppgift är du klar med?
        ${toDoList
          .map((item) => `\n ${item.id}. ${item.description}`)
          .join("")}`
          )
        );

        if (selectedTask >= toDoList.length) {
          alert("Skriv den tillhörande siffran.");
        } else {
          toDoList[selectedTask].done = true;
          alert(`${toDoList[selectedTask].description} är nu klarmarkerade.`);
          taskCompleted = false;
        }
      }
    }
  }

  //Lös det I DIN EGNA BRANCH (loopar även när den arrayen är tom)

  function removeTask() {
    let taskRemover = true;
    while (taskRemover) {
      if (toDoList.length < 1) {
        alert("Det finns inget att ta bort, lägg till uppgifter först.");
        taskRemover = false;
      } else {
        const selectedTask = Number(
          prompt(
            `Vilken uppgift vill du ta bort?
        ${toDoList
          .map((item) => `\n ${item.id}. ${item.description}`)
          .join("")}`
          )
        );
        if (selectedTask >= toDoList.length) {
          alert("Skriv den tillhörande siffran.");
        } else {
          confirm(
            `Är du säker på att du vill ta bort ${toDoList[selectedTask].description}?`
          );
          if ((confirm = true)) {
            delete toDoList[selectedTask];
            // taskRemover = false;
          } else {
            taskRemover = false;
          }
        }
      }
    }
  }

  // console.log(toDoList);
}
console.log(toDoList);
