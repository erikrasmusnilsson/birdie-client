import axios from 'axios';

export const ADDRESS = "138.197.188.108:3000";

export default axios.create({
    baseURL: `http://${ADDRESS}/api`
});