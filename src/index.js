import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-txt").value;
  document.getElementById("add-txt").value = "";

  createItem(inputText);
};

const deleteIncompleteList = (btnElement) => {
  const deleteTarget = btnElement.parentNode.parentNode;
  document.getElementById("incomplete-list").removeChild(deleteTarget);
  console.log("OK");
};

const createItem = (text) => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "list-row";

  const div = document.createElement("div");
  div.innerText = text;
  div.className = "list";
  parentDiv.appendChild(div);
  console.log(parentDiv);

  const conpleteBtn = document.createElement("button");
  conpleteBtn.innerText = "完了";
  conpleteBtn.addEventListener("click", () => {
    deleteIncompleteList(conpleteBtn);
    const addTarget = conpleteBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const div = document.createElement("div");
    div.innerText = text;
    div.className = "list";
    addTarget.appendChild(div);

    const returnBtn = document.createElement("button");
    returnBtn.innerText = "戻す";
    returnBtn.addEventListener("click", () => {
      const deleteTarget = returnBtn.parentNode;
      document
        .getElementById("complete-list")
        .removeChild(deleteTarget.parentNode);

      const text = deleteTarget.firstElementChild.innerText;
      createItem(text);
    });
    addTarget.appendChild(returnBtn);
    const li = document.createElement("li");
    li.appendChild(addTarget);
    document.getElementById("complete-list").appendChild(li);
  });
  parentDiv.appendChild(conpleteBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    deleteIncompleteList(deleteBtn);
  });
  parentDiv.appendChild(deleteBtn);

  const li = document.createElement("li");
  li.appendChild(parentDiv);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
