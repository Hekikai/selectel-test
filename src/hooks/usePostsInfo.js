import {ref} from "vue";
import PostsService from "@/services/models/posts.service";

export const usePostsInfo = () => {
    const posts = ref(null);
    const postsService = new PostsService();

    const loadPosts = () => {
        postsService.getInfo().then(res => {
            posts.value = res;
            console.log(res);
        })
    }

    return {
        posts, loadPosts
    }
}