import "./styles.css";
import * as allData from "../data-collection";
import { getUserId} from "../API/get-id";
import {clearPosts} from "../HTML-Render/html-render";

window.addEventListener("keydown", e => {
  switch (e.which || e.keyCode) {
    case 13:
      clearPosts("#posts-container"); 
      allData.getAllData(getUserId());
      break;
  }
});
