import axios from 'axios';

const weatherUrl: string = 'https://api.weatherapi.com/v1';

const axiosInstance = axios.create({ 
    baseURL: weatherUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const fetchData = async (url: string, options = {}) => {
    try {
        const response = await axiosInstance(url, options);
        return response.data;
    } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error('Could not get data');
    }
};
