import {reactive} from "vue";
import UsersService from "@/services/models/users.service";

export const useUsersInfo = () => {
    const users = reactive(new Map());
    const usersService = new UsersService();

    const loadUsers = () => {
        return usersService.getInfo().then(res => {
            res.forEach(async (user) => {
                users.set(user, await usersService.getPostsByUser(user.id, user));
            })
        })
    }

    return {
        users, loadUsers
    }
}