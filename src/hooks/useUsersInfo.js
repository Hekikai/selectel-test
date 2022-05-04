import {ref, reactive} from "vue";
import usersService from "@/services/models/users.service";

export const useUsersInfo = () => {
    const usersAndTheirPosts = ref(new Map());
    const options = ref([]);

    const loadUsers = () => {
        return usersService.getInfo().then(res => {
            res.forEach(async (user) => {
                options.value.push({
                    value: user.name
                })
                usersAndTheirPosts.value.set(user, await usersService.getPostsByUser(user.id));
            })
        })
    }

    return {
        users: usersAndTheirPosts, loadUsers, options
    }
}