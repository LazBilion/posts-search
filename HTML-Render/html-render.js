import { selectElement, renderHTML } from "../helper/helper";
import { userTemplate } from "../HTML-Templates/User-data-template";
import { photoTemplate } from "../HTML-Templates/User-post-photo-template";
import { postTemplate } from "../HTML-Templates/User-post-data-template";

function displayAll(userInformation, postInformation, photoInformation) {
  renderHTML(selectElement, ".search-input", userTemplate(userInformation));
  renderHTML(selectElement, "#user-info", postTemplate(postInformation));
  renderHTML(selectElement, "#user-info", photoTemplate(photoInformation));
}

export { displayAll };
