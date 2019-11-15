import "./styles.css";
import * as testing from "../test"

window.addEventListener("keydown", (e)=>{
    switch (e.which || e.keyCode){
        case 13:
            testing.getUserInformation(testing.getApi(testing.getUserId()));
            break;
    }
})