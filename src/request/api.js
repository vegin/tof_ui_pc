import axios from './http';

const base = {
    baseUrl:'http://jsonplaceholder.typicode.com'
}

const api = {
    testAddress(){
        return axios.get(`${base.baseUrl}/users`);
    },
    testTodo(params){
        return axios.get(`${base.baseUrl}/todos`,{
            params:params
        })
    }
}

export default api;