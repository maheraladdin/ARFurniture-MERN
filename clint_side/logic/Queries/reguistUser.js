import {isLogin} from "../../data/isLogin";
import domain from "../../data/domain";

// register user
const signUpUser = (username,email, password) => {
    fetch(`${domain}/api/Users/signup`,{
        method: "POST",
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
            console.log(data);
            isLogin.changeState = data.isLogin;
            isLogin.changeUserData = data.userData;
        })
        .catch(err => console.log(err));
};

export default signUpUser;
