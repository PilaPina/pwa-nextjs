import axios from "axios";



export async function GET(req: Request) {
    try {
    //     const newsKey = process.env.NEWSAPI_KEY;

    //    const sourcesResponse = await newsapi.v2.everything({
    //      q: 'pwa',
    //     category: 'technology',
    //      language: 'en',
    //      country: 'us',
    //     });

    //     const response = await axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=${newsKey}`);
        
    //     return (
    //         Response.json(response.data)
    //     )

     } catch (error) {
       console.error('Error fetching news data:', error);
        throw new Error('Internal server error');
     }
    };