import BasicService from "@/services/models/basic.service";

class UsersService extends BasicService {
    PATH = 'https://jsonplaceholder.typicode.com/users';
}

export default UsersService;