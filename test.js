import {userTemplate} from "./User-data-template";

function getUserId(){
    let userId = document.getElementById("user-id").value;
    return userId;
}

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

export {getUserId, getApi, getUserInformation};

