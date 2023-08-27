<template>
    <div class="flex align-items-center justify-content-center flex-wrap" style="padding-top: 10%;">
        <div class="surface-card p-4 shadow-2 border-round m-2">
            <div class="text-center mb-5">
                <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            </div>
            <div>
                <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                <InputText id="email1" type="text" v-model="username" class="w-full mb-3"  />
                <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                <InputText id="password1" type="password" v-model="password" class="w-full mb-3" />
                <Button label="Sign In" icon="pi pi-user" @click="LogInUser()" class="w-full"></Button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

const user = ref({
    username: '',
    password: ''
});



// import { ref } from 'vue';
// import auth from '@/tools/authenticate/auth';
import router from '@/router';
import AuthenticateService from '@/services/authenticate.service'
import { useStoreApp } from '@/store/useStoreApp';
import { userInfoModel } from '../../models/user.model';
import jwtDecode from "jwt-decode";

const username = ref('');
const password = ref('');
const authenticateService = ref(new AuthenticateService());
const storeApp = useStoreApp();

const LogInUser = async () => {

    const token = await authenticateService.value.LogInUser(username.value, password.value);
    if (token != null) {
        // Redirect to the protected route
        storeApp.user = jwtDecode<userInfoModel>(token);
        router.push('/tasksManager');
    }
};

// const login = async () => {
//     const token = await auth.login(username.value, password.value);
//     if (token != null) {
//         // Redirect to the protected route
//         router.push('/tasksManager');
//     }
// };
</script>@/store/useStoreApp