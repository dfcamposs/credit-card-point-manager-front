import axios from 'axios';

export async function checkUserRegistry(id) {
    try {
        const response = await axios.get(`http://localhost/users/${id}`);

        return response.status === 200 ? true : false;
    } catch {
        return false;
    }

}