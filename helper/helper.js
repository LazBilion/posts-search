export const selectElement = (queryElement) => document.querySelector(queryElement);

export const LINKS = {
    USER_LINK: "https://jsonplaceholder.typicode.com/users/",
    POST_LINK: "https://jsonplaceholder.typicode.com/posts?userId=",
    PHOTOS_LINK: "https://jsonplaceholder.typicode.com/photos?id="
  };

function renderHTML(className, whereTo,template){
    return selectElement(className).insertAdjacentHTML(whereTo, template);
  }

export {renderHTML};