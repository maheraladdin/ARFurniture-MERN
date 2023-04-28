import {isLogin} from "../../data/isLogin";
// sign out user
export const signOutUser = () => {
    isLogin.changeState = false;
    isLogin.changeToken = "";
    isLogin.changeUserData = {};
}