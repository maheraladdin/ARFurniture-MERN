import {isLogin} from "../../data/isLogin";
import domain from "../../data/domain";

// register user
const signUpUser = (username,email, password) => {
    fetch(`${domain}/api/users/signup`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
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
};

export default signUpUser;
