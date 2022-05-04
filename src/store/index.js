import {createStore} from "vuex";
import {usersAndPostsModule} from "@/store/usersAndPostsModule";

export default createStore({
    modules: {
        usersModule: usersAndPostsModule
    }
})