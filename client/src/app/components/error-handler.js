import { getUser } from "./read-user";
import { loadNav } from "./load-ui";

const app = document.getElementById("app");

function errorHandler(message) {
  app.innerHTML = `<div class="error">${message}</div>
                      <button style="display: block; margin: 0 auto;" class="btn" id="reload">Try again</button>`;
  document.getElementById("reload").addEventListener("click", function () {
    getUser(1, 5);
    loadNav();
  });
}

export { errorHandler };
