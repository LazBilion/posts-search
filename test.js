import { selectElement } from "./helper/helper";
import { userTemplate } from "./User-data-template";
import { photoTemplate } from "./User-post-photo-template";
import { postTemplate } from "./User-post-data-template";

const LINKS = {
  USER_LINK: "https://jsonplaceholder.typicode.com/users/",
  POST_LINK: "https://jsonplaceholder.typicode.com/posts?userId=",
  PHOTOS_LINK: "https://jsonplaceholder.typicode.com/photos?id="
};

function renderHTML(selectElement, className, template){
  return selectElement(className).insertAdjacentHTML("afterend", template);
}



function getAllData(userId) {
  Promise.all([
    fetch(`${LINKS.USER_LINK}${userId}`).then(userData => userData.json()),
    fetch(`${LINKS.POST_LINK}${userId}`).then(userData => userData.json())
  ])
  .then(userData => {
    let userInfo, postsInfo;
    [userInfo, postsInfo] = userData;
    postsInfo.forEach((postsInfo) =>{
      fetch(`${LINKS.PHOTOS_LINK}${postsInfo.id}`)
      .then(userData => userData.json())
      .then(postsPhotos => displayAll(userInfo, postsInfo, postsPhotos))
    })
  })
}

function displayAll(userInformation, postInformation, photoInformation) {
  renderHTML(selectElement, ".search-input", userTemplate(userInformation));
  renderHTML(selectElement, "#user-info", postTemplate(postInformation));
  renderHTML(selectElement, "#user-info", photoTemplate(photoInformation));
}

export {
  getAllData
};
