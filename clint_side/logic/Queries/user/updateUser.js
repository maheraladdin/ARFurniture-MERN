import axios from "axios";
import {isLogin} from "../../../data/isLogin";
import domain from "../../../data/domain";

const updateUser = (username,email,password,image) => {
    (async () => {
        return await axios.put(`${domain}/api/Users/${isLogin.userData._id}`, {
            username,
            email,
            password,
            image
        }, {
            headers: {
                "x-auth-token": isLogin.token,
            }
        })
            .then(res => res.data)
            .then(data => {
                isLogin.changeUserData = data.userData;
            })
            .catch(err => console.log(err));
    })();
}

export default updateUser;
