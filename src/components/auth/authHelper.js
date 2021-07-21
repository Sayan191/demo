
export const isAuthenticated = () =>{
    let token ="";
    if (typeof window === "undefined"){
        return false
    }
    if (localStorage.getItem("jwtToken")){
        const  listToken = localStorage.getItem("jwtToken").split(" ");
        token =listToken[1]
        console.log(token);
        return token;
    }
    else{
        return false
    }
}