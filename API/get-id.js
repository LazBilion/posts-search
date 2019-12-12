import { selectElement } from "../helper/helper";

function getUserId() {
  return selectElement("#user-id").value;
}

export { getUserId };
