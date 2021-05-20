import "core-js/stable";
import "regenerator-runtime/runtime";
import { loadNav } from "./components/load-ui";
import { getUser } from "./components/read-user";
import "../styles/index.scss";

//REMOVE THIS COMMENT TO TRY ERROR HANDLER
//import { errorHandler } from "./components/error-handler";

getUser(1, 5);

loadNav();

// REMOVE COMMENT TO SEE ERROR HANDLER AFTER 2 SECONDS
/*
setTimeout(() => {
  errorHandler("Error auto");
}, 2000);
*/
