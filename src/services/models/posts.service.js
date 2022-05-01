import BasicService from "@/services/models/basic.service";

class PostsService extends BasicService {
    PATH = 'https://jsonplaceholder.typicode.com/posts';
}

export default PostsService;