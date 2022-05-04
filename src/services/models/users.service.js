import BasicService from "@/services/models/basic.service";
import {generateDateFromSpecifiedTime} from "@/utils/generateDateFromSpecifiedTime";

class UsersService extends BasicService {
    PATH = 'https://jsonplaceholder.typicode.com/users';

    getPostsByUser(userId) {
        return fetch(`${this.PATH}/${userId}/posts`)
            .then(res => res.json())
            .then(res => {
                res.forEach((post) => {
                    post.date = generateDateFromSpecifiedTime(new Date(2008, 8, 8), new Date());
                })
                return res;
            })
    }
}

export default UsersService;