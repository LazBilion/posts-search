import {SELECT_ELEMENT} from "../helper/helper"

function getUserId(){
    let userId = SELECT_ELEMENT("#user-id").value;
    return userId;
}

export {getUserId};