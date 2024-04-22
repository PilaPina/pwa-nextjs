


//  const newsapi = process.env.NEWSAPI_KEY;


//  export const fetchNews = async () => {
//      try {
//         //Fetch from sources
//        const sourcesResponse = await newsapi.v2.sources({
//          q: 'pwa',
//          category: 'technology',
//          language: 'en',
//          country: 'us',
//        });
  
//        // You can process the response as needed
//        const sources = sourcesResponse.sources;
  
//        return sources;
//      } catch (error) {
//        console.error('Error fetching news data:', error);
//        throw new Error('Internal server error');
//      }
//    };