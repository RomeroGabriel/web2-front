export const Auth = () => {
    let token = localStorage.getItem("token");
    return token ? true : false;
}
