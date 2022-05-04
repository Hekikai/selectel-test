import usersService from "@/services/models/users.service";
import {toRaw} from "vue";

export const usersAndPostsModule = {
    state: () => {
        return {
            usersAndTheirPosts: [],
            options: [],
            searchNames: []
        }
    },

    mutations: {
        setOptions: (state, option) => state.options.push(option),
        setUsersAndTheirPosts: (state, userAndPosts) => (
            state.usersAndTheirPosts.push(userAndPosts)
        ),
        setSearchName: (state, searchName) => {
            state.searchNames.push(searchName)
        },
        deleteSearchName: (state, searchName) => {
            const itemIndexToDelete = state.searchNames.findIndex((elem) => elem === searchName);
            state.searchNames.splice(itemIndexToDelete, 1);
        }
    },

    actions: {
        loadUsers({commit}) {
            usersService.getInfo().then(res => {
                res.forEach(async (user) => {
                    commit('setOptions', {
                        value: user.name
                    });
                    commit('setUsersAndTheirPosts', {
                        user,
                        posts: await usersService.getPostsByUser(user.id)
                    })
                })
            })
        },
        logSomething(context) {
            console.log(toRaw(context.state.usersAndTheirPosts).keys());
        },
        addSearchName({commit}, searchName) {
            commit('setSearchName', searchName)
        },
        deleteSearchName({commit}, searchName) {
            commit('deleteSearchName', searchName)
        }
    },
    getters: {
        searchedUsers: state => names => {
            console.log(names);
            if (names.length === 0) {
                return state.usersAndTheirPosts;
            }
            // TODO: link it with filter by name
            return state.usersAndTheirPosts.filter((usr) => {
                if (names.some((name) => name === usr.user.name)) return usr;
                return false;
            })
        }
    }
}