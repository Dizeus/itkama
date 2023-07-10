import axios from "axios";

let custom = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0252aa66-605d-49b3-9165-5e64893fd92a"
    }
})

export let api = {
    getUsers(count, currPage){
        return custom.get(`users?count=${count}&page=${currPage}`,).then((response)=>response.data)
    },

    follow(userId){
        return custom.post(`/follow/${userId}`).then((response)=>response.data)

    },

    unfollow(userId){
        return custom.delete(`/follow/${userId}`).then((response)=>response.data)

    },
    getProfile(userId){
        return custom.get(`profile/${userId}`).then((response)=>response.data)
    },
    getAuthUser(){
        return custom.get(`auth/me`).then((response)=>response.data)
    },
    getUserStatus(userId){
        return custom.get(`/profile/status/${userId}`)
    },
    updateUserStatus(userStatus){
        return custom.put(`/profile/status`, {status: userStatus})
    },
    login(email, password, rememberMe){

        return custom.post('auth/login', {email, password, rememberMe}).then((response)=> {
            console.log(response.data)
            return response.data
        });
    },
    logout(email, password, rememberMe){
        return custom.delete('auth/login').then((response)=>response.data);
    }
}

