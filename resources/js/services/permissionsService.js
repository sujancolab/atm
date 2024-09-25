import axios from 'axios';

export const getPermissions = async () => {
    try {
        const response = await axios.get('/api/permissions');
        return response.data;
    } catch (error) {
        console.error('Error fetching permissions:', error);
        throw error;
    }
};