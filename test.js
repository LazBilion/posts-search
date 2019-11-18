import { selectElement } from "./helper/helper";
import { userTemplate } from "./User-data-template";
import { photoTemplate } from "./User-post-photo-template";
import { postTemplate } from "./User-post-data-template";

function getUserLink(getUserId) {
  const USER_LINK = `https://jsonplaceholder.typicode.com/users/${getUserId}`;
  return USER_LINK;
}

function getPostLink(getUserId) {
  const POST_LINK = `https://jsonplaceholder.typicode.com/posts?userId=${getUserId}`;
  return POST_LINK;
}

function getPhotoLink(postId) {
  const PHOTOS_LINK = `https://jsonplaceholder.typicode.com/photos?id=${postId}`;
  return PHOTOS_LINK;
}

function getUserInformation(userLink) {
  fetch(userLink)
    .then(serverUserData => {
      return serverUserData.json();
    })
    .then(parsedUserData =>
      selectElement(".search-input").insertAdjacentHTML(
        "afterend",
        userTemplate(parsedUserData)
      )
    );
}

function getUserPost(postLink) {
  fetch(postLink)
    .then(serverPostData => {
      return serverPostData.json();
    })
    .then(parsedPostData => {
      selectElement("#user-info").insertAdjacentHTML(
        "afterend",
        postTemplate(parsedPostData[0])
      );
      fetch(getPhotoLink(parsedPostData[0].id))
        .then(serverPhotoData => {
          return serverPhotoData.json();
        })
        .then(parsedPhotoData =>
          selectElement("#user-info").insertAdjacentHTML(
            "afterend",
            photoTemplate(parsedPhotoData[0])
          )
        );
    });
}

export {
  getUserLink,
  getUserInformation,
  getPhotoLink,
  getPostLink,
  getUserPost
};
