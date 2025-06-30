import axios from "axios";

const API=axios.create({
    baseURL: "/api/v1/auth",
    withCredentials:true
})

class AuthService {
    async createUser({fullname, email, password}){
        try {
            const response = await API.post("/register", {fullname, email, password});
            if(response.data){
                this.loginUser({email, password})
            }else{
                return response.data;
            }
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || "Registration failed");
        }
    }

    async loginUser({email, password}){
        try {
            const response = await API.post("/login", {email, password});
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || "Login failed");
        }
    }

    async onboardUser({fullname, bio, nativeLanguage, learningLanguage, location}){
        try {
            const response = await API.post("/onboard", {fullname, bio, nativeLanguage, learningLanguage, location});
            if(response.data){  
            return response.data;
            }else{
                return null;
            }
        }   catch (error) {
            throw new Error(error.response?.data?.message || "Onboarding failed");
        } 
     }
    async logoutUser(){
        try {
            const response = await API.post("/logout");
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || "Logout failed");
        }
    }

    async getUserDetails(){
        try {
            const response = await API.get("/getcurrentuser");
            if(response.data){
                return response.data;
            }else{
                return null;
            }
        } catch (error) {
            throw new Error(error.response?.data?.message || "Failed to fetch user details");
        }
    }
}
const authService = new AuthService();
export default authService;