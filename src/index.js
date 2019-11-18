import "./styles.css";
import * as testing from "../test";
import { getUserId } from "../API/get-id";

window.addEventListener("keydown", e => {
  switch (e.which || e.keyCode) {
    case 13:
      testing.getUserInformation(testing.getUserLink(getUserId()));
      testing.getUserPost(testing.getPostLink(getUserId()));
      break;
  }
});
