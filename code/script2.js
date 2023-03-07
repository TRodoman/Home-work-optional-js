// Задача 2
// Вам потрібно написати програму, яка буде працювати з подіями. Ваша програма
// повинна відслідковувати події кліків на сторінці та зберігати координати місця,
// де було здійснено клік. Після того, як буде здійснено 10 кліків, програма повинна
// показати користувачу список всіх координат, де були здійснені кліки.

// Для виконання цієї задачі вам потрібно використати обробники подій. Ви можете використати
// метод addEventListener() для відслідковування подій кліків миші на сторінці. Після кожного
// кліку на сторінці, вам потрібно зберігати координати місця, де було здійснено клік, у масив.
// Якщо кількість кліків досягне 10, вам потрібно вивести на сторінку список всіх координат з масиву.

window.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("down");

  let countArr = [];
  let newArr;

  div.onmousedown = function (e) {
    if (!e) e = event;

    this.innerHTML = `Координаты X:  ${e.clientX} Y : ${e.clientY}`;
    let count = {
      x: e.clientX,
      y: e.clientY,
    };

    countArr.push(count);
    console.log(countArr);

    if (countArr.length === 10 || countArr.length === 20 || countArr.length === 30 || countArr.length === 40 || countArr.length === 50) {
      newArr = countArr;
      console.log(newArr);
      return show(newArr);
    }
  };

  function show(newArr = []) {
    const tbody = document.querySelector("tbody");

    tbody.innerHTML = "";

    const listNew = newArr.map(({ x, y }, i) => {
      return {
        id: i + 1,
        clientX: x,
        clientY: y,
      };
    });

    listNew.forEach(({ id, clientX, clientY }) => {
      tbody.insertAdjacentHTML(
        "beforeend",
        `
                <tr>
                <td>${id}</td>
                <td>${clientX}</td>
                <td>${clientY}</td>
                </tr>
                `
      );
    });
  }
  
  show();

});
