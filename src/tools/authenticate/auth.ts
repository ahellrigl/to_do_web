import axios from 'axios';

 const authApi = axios.create({

     baseURL: 'https://localhost:7008/api'
})


authApi.interceptors.request.use(
  request => {
    const access_token = localStorage.getItem('access_token');

    request.headers["Accept"] = "application/json";
    request.headers["Content-Type"] = "application/json";

    if(access_token){
      request.headers["Authorization"] = "Bearer " + access_token;
    }

    return request;
  }, 
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);


// const auth = {
//   async login(username: string, password: string): Promise<string | null> {
//     try {
      
//       const response = await axios.post(`${authApi.defaults.baseURL}/Authenticate/${username}/${password}`);
//       const token = response.data.access_token;

//       localStorage.setItem('token', token);
//       return token;
//     } catch (error) {
//       console.error('Login error:', error);
//       return null;
//     }
//   },
  
//   logout(): void {
//     localStorage.removeItem('token');
//   },
  
//   isAuthenticated(): boolean {
//     return !!localStorage.getItem('token');
//   },
// };

export default authApi;