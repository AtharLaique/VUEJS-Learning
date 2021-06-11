import api from './Axios';

export default {
    getEvents () {
        return api.get('/posts');
    }
}