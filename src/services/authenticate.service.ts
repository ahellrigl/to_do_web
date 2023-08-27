import authApi from "@/tools/authenticate/auth";

export default class AuthenticateService{
    
    LogInUser(username: string, password: string){
        return authApi.post(`https://localhost:7008/api/Authenticate/${username}/${password}`)
                      .then(res => res.data);
    }  
 
}