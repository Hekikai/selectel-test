class BasicService {
    PATH = 'https://jsonplaceholder.typicode.com/';

    getInfo() {
        return fetch(this.PATH).then(response => response.json())
    }
}

export default BasicService;