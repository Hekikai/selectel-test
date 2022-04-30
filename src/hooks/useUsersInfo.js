import {ref} from "vue";
import UsersService from "@/services/models/users.service";

export const useUsersInfo = () => {
    const users = ref(null);
    const usersService = new UsersService();

    const loadUsers = () => {
        usersService.getInfo().then(res => {
            users.value = res;
            console.log(res);
        })
    }

    return {
        users, loadUsers
    }
}