import usersService from "@/services/models/users.service";

export const usersAndPostsModule = {
    state: () => {
        return {
            usersAndPosts: new Map(),
            options: [],
            searchNames: [],
            dateFilter: [],
        }
    },

    mutations: {
        setOptions: (state, option) => state.options.push(option),

        setUsersAndPosts: (state, {user, posts}) => state.usersAndPosts.set(user, posts),

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
                    commit('setUsersAndPosts', {
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
        }
    },
    getters: {

        userPosts: state => user => {
            return state.usersAndPosts.get(user)
        },

        searchedUsers: (state, getters) => {
            if (state.dateFilter.length === 0) {
                return getters.searchedUsersByNames;
            }

            if(state.dateFilter.length === 1) {
                const rhs = new Date(state.dateFilter[0].$d).getTime();
                const newMap = new Map();

                getters.searchedUsersByNames.forEach((posts, user) => {
                    const userPosts = getters.userPosts(user).filter((post) => {
                        const postDate = new Date(post.date).getTime();
                        return postDate >= rhs
                            ? post
                            : false;
                    });
                    newMap.set(user,userPosts);
                })
                return newMap;
            }

            if(state.dateFilter.length === 2) {
                const rhs = new Date(state.dateFilter[0].$d).getTime();
                const lhs = new Date(state.dateFilter[1].$d).getTime();
                const newMap = new Map();

                getters.searchedUsersByNames.forEach((posts, user) => {
                    const userPosts = getters.userPosts(user).filter((post) => {
                        const postDate = new Date(post.date).getTime();
                        return (postDate >= rhs && postDate <= lhs)
                            ? post
                            : false;
                    });
                    newMap.set(user,userPosts);
                })
                return newMap;
            }
        },

        searchedUsersByNames: state => {
            if (state.searchNames.length === 0) {
                return state.usersAndPosts;
            }

            const usersToReturn = new Map();
            state.searchNames.forEach((name) => {
                state.usersAndPosts.forEach((posts, user) => {
                    if(user.name === name) {
                        usersToReturn.set(user, posts)
                    }
                })
            })
            return usersToReturn;
        },
    }
}