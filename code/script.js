// Задача 1
// Вам потрібно написати програму, яка буде отримувати інформацію з сервера за допомогою
// fetch запиту, а потім виводити цю інформацію на сторінку. Для цього вам потрібно скласти
// запит до API за посиланням https://jsonplaceholder.typicode.com/users,
// який поверне список користувачів у форматі JSON.

// Після того, як ви отримаєте відповідь з сервера, вам потрібно перетворити JSON-об'єкт на масив
// об'єктів за допомогою методу json(), який є частиною об'єкта Response. Далі вам потрібно
// використати цей масив для створення HTML-елементів, які будуть містити інформацію про кожного
// користувача.

// Наприклад, ви можете створити таблицю з наступними стовпцями: ID користувача,
// ім'я, email і номер телефону. Для створення таблиці ви можете використати HTML-елементи
//  <table>, <thead>, <tbody>, <tr> і <td>.

// Крім того, вам потрібно додати обробник помилок для вашого fetch запиту. Якщо запит не вдається,
// програма повинна вивести на сторінку повідомлення про помилку.

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".box_loader").classList.add("show");

  try {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        show(data);
      });
  } catch (error) {
    console.error("Ошибка:", error);
  }

  
  function show(data = []) {
    console.log(data);

    const tbody = document.querySelector("tbody");

    tbody.innerHTML = "";

    const newArr = data.map(({ id, name, email, phone }) => {
      return {
        id: id,
        name: name,
        email: email,
        phone: phone,
      };
    });

    newArr.forEach(({ id, name, email, phone }) => {
      tbody.insertAdjacentHTML(
        "beforeend",
        `
        <tr> 
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        </tr>
        `
      );
    });

    document.querySelector(".box_loader").classList.remove("show");
  }
});
