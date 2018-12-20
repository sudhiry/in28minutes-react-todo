import axios from 'axios';

class Services {

    asyncexecuteHelloWorldBeanService() {
        return axios.get('http://in28minutes-restful-web-services.cfapps.io/hello-world-bean');
    }

    executeHelloWorldServiceWithPathVariable(name) {
        return axios.get(`http://in28minutes-restful-web-services.cfapps.io/hello-world/path-variable/${name}`);
    }

    retrieveAllTodos(username) {
        return axios.get(`http://in28minutes-restful-web-services.cfapps.io/users/${username}/todos`);
    }

    deleteTodo(username, id) {
        return axios.delete(`http://in28minutes-restful-web-services.cfapps.io/users/${username}/todos/${id}`);
    }

    retrieveTodo(username, id) {
        return axios.get(`http://in28minutes-restful-web-services.cfapps.io/users/${username}/todos/${id}`);
    }

    updateTodo(username, id, todo) {
        return axios.put(`http://in28minutes-restful-web-services.cfapps.io/users/${username}/todos/${id}`, todo);
    }

    createTodo(username, todo) {
        return axios.post(`http://in28minutes-restful-web-services.cfapps.io/users/${username}/todos`, todo);
    }
}

export default new Services();