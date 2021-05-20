import { getUser } from "./read-user";

const viewDropdown = document.getElementById("viewperpage"),
  pagination = document.getElementsByClassName("page"),
  nav = document.getElementById("nav");

const navTree = [
  {
    id: 0,
    navTitle: "All contacts",
    link: "#",
  },
  {
    id: 1,
    navTitle: "Add contact",
    link: "#",
  },
];

const paginationTree = [
  {
    id: 0,
    navTitle: "1",
  },
  {
    id: 2,
    navTitle: "2",
  },
  {
    id: 3,
    navTitle: "3",
  },
  {
    id: 4,
    navTitle: "4",
  },
  {
    id: 5,
    navTitle: "5",
  },
];

function loadNav() {
  console.log("LOADING NAV");
  nav.innerHTML = "";
  // LOADS THE NAV TREE
  for (let i = 0; i < navTree.length; i++) {
    nav.innerHTML += `<a href="${navTree[i].link}">${navTree[i].navTitle}</a>`;
  }
  loadPagination();
}

function loadPagination() {
  document.getElementById("pagination").innerHTML = "";
  // LOAD THE PAGINATION
  for (let i = 0; i < paginationTree.length; i++) {
    document.getElementById("pagination").innerHTML += `<li page="${
      paginationTree[i].id
    }" class="page ${paginationTree[i].id == 0 ? "active" : ""}">${
      paginationTree[i].navTitle
    }</li>`;
  }

  // ADD EVENT LISTNER FOR CLICK ON PAGINATION'S BUTTONS
  for (var i = 0; i < pagination.length; i++) {
    (function (index) {
      pagination[index].addEventListener("click", function () {
        document
          .querySelector("#pagination .page.active")
          .classList.remove("active");
        this.classList.add("active");
        let page = parseFloat(pagination[index].getAttribute("page"));
        getUser(page, viewDropdown.value);
      });
    })(i);
  }
}

// CREATE THE UI OF THE APP (for showing users)
function createUI() {
  let usersBoxes = document.getElementsByClassName("user");
  let usersHeader = document.getElementsByClassName("user-header");
  let usersInfo = document.getElementsByClassName("user-info-box");

  for (var j = 0; j < usersBoxes.length; j++) {
    let counter = j;
    usersBoxes[j].addEventListener("click", function () {
      usersInfo[counter].classList.toggle("active");
      usersHeader[counter].classList.toggle("expanded");
    });
  }

  // IF YOU USE THE DROPDOWN, THE USERS GET RELOADED AND THE NAV TOO
  viewDropdown.addEventListener("change", function () {
    getUser(1, viewDropdown.value);
    loadPagination();
  });
}

export { createUI, loadNav };
