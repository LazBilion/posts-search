import "./styles.css";
import * as allData from "../data-collection";
import { getUserId} from "../API/get-id";

window.addEventListener("keydown", e => {
  switch (e.which || e.keyCode) {
    case 13:
      allData.getAllData(getUserId());
      break;
  }
});
