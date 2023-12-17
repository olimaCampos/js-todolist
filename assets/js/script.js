let items = [
  {
    id: Date.now(),
    content: "Pagar internet",
    checked: false,
  },
  {
    id: Date.now()+1,
    content: "Ir al Supermercado",
    checked: false,
  },
  {
    id: Date.now()+2,
    content: "Ir a la Feria",
    checked: false,
  }
];

document.getElementById("addButton").addEventListener("click", () => {
  const inputField = document.getElementById("inputField");
  const inputValue = inputField.value.trim();
  if (inputValue !== "") {
    const newItem = {
      id: Date.now(),
      content: inputValue,
      checked: false,
    };
    items.push(newItem);
    inputField.value = "";
    inputField.focus();
    renderList();
    updateCounters();
  }
});

const listBody = document.getElementById("listBody");
function renderList() {
  const listBody = document.getElementById('listBody');
  listBody.innerHTML = '';

  items.forEach(item => {
    const row = document.createElement('tr');
    row.classList.add('listItem');

    const idCell = document.createElement('td');
    idCell.textContent = item.id;

    const contentCell = document.createElement('td');
    contentCell.textContent = item.content;

    const optionsCell = document.createElement('td');
    optionsCell.classList.add('options');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = item.checked;
    checkBox.classList.add('checkBox');
    checkBox.addEventListener('change', () => {
      item.checked = checkBox.checked;
      updateCounters();
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-ban"></i>';
    deleteButton.addEventListener('click', () => {
      deleteItem(item.id);
      updateCounters();
    });

    optionsCell.appendChild(checkBox);
    optionsCell.appendChild(deleteButton);

    row.appendChild(idCell);
    row.appendChild(contentCell);
    row.appendChild(optionsCell);

    listBody.appendChild(row);
  });
}

function deleteItem(id) {
  items = items.filter((items) => items.id !== id);
  renderList();
}

function updateCounters() {
  const totalItems = items.length;
  const checkedItems = items.filter(item => item.checked).length;

  document.querySelector(".totalCounter").textContent = `Total: ${totalItems}`;
  document.querySelector(".checkedCounter").textContent = `Realizadas: ${checkedItems}`;
}

document.querySelector(".totalCounter").textContent = `Total: 0`;
  document.querySelector(".checkedCounter").textContent = `Realizadas: 0`;

renderList();
