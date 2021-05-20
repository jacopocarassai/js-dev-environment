import { createUI } from "./load-ui";
import { errorHandler } from "./error-handler";

const app = document.getElementById("app");

async function getUser(page, view) {
  app.innerHTML = "<div class='loader'></div>";
  try {
    await fetch(
      "https://randomuser.me/api/?page=" +
        page +
        "&results=" +
        view +
        "&seed=hashtagyou"
    )
      .then((response) => response.json())
      .then((data) => {
        app.innerHTML = "";
        loadUser(data.results, createUI);
      });
  } catch (err) {
    errorHandler(err);
  }
}

function loadUser(users, callback) {
  for (var i = 0; i < users.length; i++) {
    app.innerHTML += `<div class="user user-${i}">
    <p class="user-header"><b>${users[i].name.title}</b> ${users[i].name.first} ${users[i].name.last}</p>
    <div class="user-info-box">
    <div class="user-picture" style="flex:1;">
    <img src="${users[i].picture.large}"/></div>
    <div class="user-info" style="flex:3">
    <span class="user-name">Full name: ${users[i].name.first} ${users[i].name.last}</span>
    <span class="user-address">Address: <a href="https://www.google.com/maps/search/?api=1&query=${users[i].location.coordinates.longitude},${users[i].location.coordinates.latitude}" target="_blank">${users[i].location.street.name}, ${users[i].location.street.number} - ${users[i].location.postcode} ${users[i].location.state}</a></span>
    <span class="user-email">Email: ${users[i].email}</span>
    <span class="user-phone">Phone: ${users[i].phone}</span>
    </div>
    <div class="user-map" style="flex:1;"><iframe
    width="350"
    height="200"
    frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAWiCVFVqY2sTi3nFqYD7I2bOCpfgsbeAk&q=${users[i].location.coordinates.latitude},${users[i].location.coordinates.longitude}" allowfullscreen>
  </iframe></div>
  <div class="actions"><a href="tel:${users[i].phone}" class="btn">CALL</a><a href="mailto:${users[i].email}" class="btn">EMAIL</a></div>
    </div>
    </div>`;
  }
  callback();
}
export { getUser };
