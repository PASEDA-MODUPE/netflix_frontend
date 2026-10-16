import axios from 'axios';

export default axios.create({
    baseURL:'http://52.90.88.68',
    headers: {
        'Content-Type': 'application/json',
    },
});
