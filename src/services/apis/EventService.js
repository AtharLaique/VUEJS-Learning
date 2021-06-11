import api from './Axios';

export default {
    getEvents () {
        return api.get('/posts');
    },
    getEvent(id) {
        if (!id) {
          return
        }
        return api.get(`/posts/${id}`)
    }
}