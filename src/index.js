import "./styles.css";
import * as testing from "../test"

window.addEventListener("keydown", (e)=>{
    switch (e.which || e.keyCode){
        case 13:
            testing.getUserInformation(testing.getApi(testing.getUserId()));
            testing.getUserPhoto(testing.getPhotoApi(testing.getUserId()));
            testing.getUserPost(testing.getPostApi(testing.getUserId()));
            break;
    }
})