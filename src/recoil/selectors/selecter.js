import { selector } from "recoil";
import axios from "axios";

export const UserListState = selector({
    key : "UserListState",
    get : async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        return data;
    },
    // selector 는 default 필요치 않다.
});