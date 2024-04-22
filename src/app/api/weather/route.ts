
import axios from 'axios';

export async function GET(req: Request) {
     try {
         const apiKey = process.env.SECRET_WEATHER_KEY;
         const searchParams = new URL(req.url).searchParams;
         const city = searchParams.get('city');

         console.log('city:', city);

         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);

         console.log('Axios response:', response.data);

         return (
            Response.json(response.data)
         )   
        

        if (response.status !== 200) {
         throw new Error('Failed to fetch weather data');
         }

     } catch (error) {
         console.error('Error fetching data:', error);
         Response.json({ error: 'Internal server error' });
     }
};
