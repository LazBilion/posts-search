import {userTemplate} from "./User-data-template";
import {photoTemplate} from "./User-post-photo-template";
import {postTemplate} from "./User-post-data-template";
import {getUserId} from "./API/get-id"


function getApi(getUserId){
    var API = `https://jsonplaceholder.typicode.com/users/${getUserId}`;
    console.log(API);
    return API;
}

function getUserInformation(API){
    fetch(API).then(serverUserData => {
        return serverUserData.json()
    })
    .then(parsedUserData => {
        console.log(parsedUserData);
        document.querySelector(".search-input").insertAdjacentHTML("afterend", userTemplate(parsedUserData));
    })
}

function getPhotoApi(getUserId){
    var photoApi = `https://jsonplaceholder.typicode.com/photos?albumId=${getUserId}`;
    return photoApi;
}

function getUserPhoto(photoApi){
    fetch(photoApi).then(serverPhotoData => {
        return serverPhotoData.json();
    })
    .then (parsedPhotoData => {
        document.getElementById("user-info").insertAdjacentHTML("afterend", photoTemplate(parsedPhotoData[0]));
    })
}

function getPostApi(getUserId){
    var postApi = `https://jsonplaceholder.typicode.com/posts?userId=${getUserId}`;
    return postApi;
}

function getUserPost(postApi){
    fetch(postApi).then(serverPostData => {
        return serverPostData.json();
    })
    .then (parsedPostData => {
        document.querySelector(".photo").insertAdjacentHTML("afterend", postTemplate(parsedPostData[0]));
    })
}

export {getUserId, getApi, getUserInformation,getUserPhoto, getPhotoApi, getPostApi, getUserPost};

