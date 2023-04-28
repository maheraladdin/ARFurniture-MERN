import {isLogin} from "../../data/isLogin";
import domain from "../../data/domain";
// sign in user
const LoginUser = (email, password) => {
fetch(`${domain}/api/Users/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
    })
        .then(res => {
            isLogin.changeToken = res.headers.get("x-auth-token");
            return res.json()
        })
        .then(data => {
            isLogin.changeState = data.isLogin;
            isLogin.changeUserData = data.userData;
        })
        .catch(err => console.log(err));
}

export default LoginUser;