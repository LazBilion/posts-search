import {selectElement} from "../helper/helper"

function getUserId(){
    let userId = selectElement("#user-id").value;
    return userId;
}

export {getUserId};