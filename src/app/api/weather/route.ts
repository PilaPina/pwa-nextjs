import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
     try {
         const apiKey = process.env.SECRET_WEATHER_KEY;
         const city = req.query.city;

         console.log('apiKey:', apiKey);
         console.log('city:', city);

         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);

         console.log('Axios response:', response);

            
        res.status(200).json(response.data);

        if (response.status !== 200) {
         throw new Error('Failed to fetch weather data');
         }

     } catch (error) {
         console.error('Error fetching data:', error);
         res.status(500).json({ error: 'Internal server error' });
     }
};




// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// export const config = {
//   api: {
//     bodyParser: true,
//   },
// };

// export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//         const apiKey = process.env.SECRET_WEATHER_KEY;   //this is the required key by weather api
//         const city = req.query.city;                    // this is the required q by the weather api

//         console.log('apiKey:', apiKey); // trying to see if it posts the api 
//         console.log('city:', city); // trying to post city

//         if (!city) {
//             res.status(400).json({ error: 'City is required' });
//             return;
//         }

//         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);

//         console.log('Axios response:', response)

//         if (response.status !== 200) {
//             throw new Error('Failed to fetch weather data');
//         }

//         res.status(200).json(response.data);

//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };



// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const apiKey = process.env.SECRET_WEATHER_KEY;
//         const city = req.query.city;

//         console.log('apiKey:', apiKey);
//         console.log('city:', city);

//         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);

//         console.log('Axios response:', response);

            
//        res.status(200).json(response.data);

//        if (response.status !== 200) {
//         throw new Error('Failed to fetch weather data');
//         }

//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };










// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === "GET") {
//         try {
//         const apiKey = '6b658739d4fd49d5adf191540242104';
//         const city = req.query.city;

//         const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)

//         const data = await response.json();

//         res.status(200).json(data);

//         } catch (error) {

//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//         }
//     }
//     else {
//         res.setHeader("Allow", ["GET"]);
//         res.status(405).end(`Method ${req.method} is not allowed`);
//     }
// };