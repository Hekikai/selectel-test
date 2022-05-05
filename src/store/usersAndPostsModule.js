import usersService from "@/services/models/users.service";

export const usersAndPostsModule = {
    state: () => {
        return {
            usersAndTheirPosts: [],
            options: [],
            searchNames: [],
            dateFilter: [],
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
        },
        addDateFilter: (state, dateFilter) => {
            state.dateFilter.push(dateFilter);
        },
        deleteDateFilter: state => state.dateFilter.length = 0,
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
        addSearchName({commit}, searchName) {
            commit('setSearchName', searchName)
        },
        deleteSearchName({commit}, searchName) {
            commit('deleteSearchName', searchName)
        },
        addDateFilter({commit}, dateFilter) {
            commit('addDateFilter', dateFilter);
        },
        deleteDateFilter({commit}) {
            commit('deleteDateFilter');
        },
        logTime(context) {
            // toRaw(context.state.dateFilter).forEach((date) => {
            //     console.log(date.$d);
            // })
            // const time = new Date(toRaw(context.state.dateFilter)[0].$d).getTime();
            // console.log(time);
        }
    },
    getters: {

        userPosts: (state) => (id) => {

        },

        searchedUsers: (state, getters) => {
            if (state.dateFilter.length === 0) {
                return getters.searchedUsersByNames;
            }

            if(state.dateFilter.length === 1) {
                const rhs = new Date(state.dateFilter[0].$d).getTime();
                return getters.searchedUsersByNames.filter((usr) => {
                    console.log(usr);
                    // usr.posts = usr.posts.filter((post) => {
                    //     if(new Date(post.date).getTime() >= rhs) {
                    //         return post;
                    //     }
                    //     return false;
                    // })
                    return usr;
                })
            }
            return getters.searchedUsersByNames.filter(() => {

            })
        },

        searchedUsersByNames: state => {
            if (state.searchNames.length === 0) {
                return state.usersAndTheirPosts;
            }
            return state.usersAndTheirPosts.filter((usr) => {
                if (state.searchNames.some((name) => name === usr.user.name)) return usr;
                return false;
            })
        },
        // searchedUsersByDate: (state, getters) => {
        //     console.log(getters);
        // }
    }
}