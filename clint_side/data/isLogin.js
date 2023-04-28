export const isLogin = {
    set changeState(state) {
        this.state = state;
    },
    state: false,
    token: "",
    set changeToken(uid) {
        this.token = uid;
    },
    userData: {},
    set changeUserData(userData) {
        this.userData = userData;
    }
};