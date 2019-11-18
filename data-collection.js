import { LINKS } from "./helper/helper";
import {displayAll} from "./HTML-Render/html-render"

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
      .then(postsPhotos => postsPhotos.json())
      .then(postsPhotos => displayAll(userInfo, postsInfo, postsPhotos))
    })
  })
  .catch((err) =>{
    alert(err);
  })
}

export {
  getAllData
};
