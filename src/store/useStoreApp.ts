import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { taskModel } from '@/models/task.model';
import { userInfoModel, userModel } from '@/models/user.model';


export const useStoreApp = defineStore('useStoreApp', () => {

    // const showStep_01 = ref<boolean>(true);
  
    const user = ref<userInfoModel>({ id: 0, username: "", name: "", password:"", token:"" });
    const tasks = [] as taskModel[];

    return {
        // State
        user,
        tasks,
        // Getters
        //squareCount: computed( () => count.value * count.value ),
     
        // Actions
        // initialization() {
        // this.user =  { id: 0, username: "", name: "", password:"", token:"" }; 
        // this.tasks = [] as taskModel[];
        // },

    }
});