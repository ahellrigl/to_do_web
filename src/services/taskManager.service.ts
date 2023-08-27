import authApi from "@/tools/authenticate/auth";

export default class TasksManagerService{

     
    get_tasks_all(){
        return authApi.get(`${import.meta.env.VITE_BASE_URL}/dashboard/inventory/xls_process`)
                      .then(res => res.data);
    }  
 
}