import {isLogin} from "../../../data/isLogin";
import domain from "../../../data/domain";
import axios from "axios";

// register user
const signUpUser = (username,email, password) => {

    (async () => {
        return await axios.post(`${domain}/api/Users/signup`, {
            username,
            email,
            password
        })
            .then(res => res.data)
            .then(data => {
                isLogin.changeState = data.isLogin;
                isLogin.changeUserData = data.userData;
                isLogin.changeToken = data.token;
            })
            .catch(err => console.log(err));
    })();

};

export default signUpUser;
