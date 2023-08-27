import { ref, computed, onMounted } from 'vue';
import { useStoreApp } from '@/store/useStoreApp';

const storeApp = useStoreApp();
const dialogNewTask = ref(false);

const menu = ref();

const items = ref([
    {
        label: 'New task',
        icon: 'pi pi-fw pi-plus',
         command: () => dialogNewTask.value = true
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);


const toggle = (event : MouseEvent) => {
    menu.value.toggle(event);
};


const useTasksManager = () => {


    return {
        //Properties
       
        dialogNewTask,
        items,
        menu,
        storeApp,
        // onclick,

        //Getters

        //Methods 
        toggle
     
    }
}


export default useTasksManager;