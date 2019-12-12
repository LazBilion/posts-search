import { selectElement, renderHTML } from "../helper/helper";
import { userTemplate } from "../HTML-Templates/User-data-template";
import { photoTemplate } from "../HTML-Templates/User-post-photo-template";
import { postTemplate } from "../HTML-Templates/User-post-data-template";

function displayAll(userInformation, postInformation, photoInformation) {
  renderHTML("#posts-container", "afterbegin", userTemplate(userInformation));
  renderHTML("#user-info", "afterend",postTemplate(postInformation));
  renderHTML("#user-info", "afterend",photoTemplate(photoInformation));
}

function clearPosts(whatToClear){
  let parentElement = selectElement(whatToClear);
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}


export { displayAll, clearPosts };
