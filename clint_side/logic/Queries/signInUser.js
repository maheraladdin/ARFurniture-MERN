import {isLogin} from "../../data/isLogin";
import domain from "../../data/domain";
import axios from "axios";
// sign in user
const LoginUser = (email, password) => {
    (async () => {
        return await axios.post(`${domain}/api/Users/login`, {
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
}

export default LoginUser;