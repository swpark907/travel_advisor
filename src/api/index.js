import axios from 'axios';

class Advisor {
  constructor() {
    this.advisor = axios.create({
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY
      }
    })
  }

  async getPlacesData (sw, ne, type) {
    const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
    }
    try {
      const {data: {data}} = await this.advisor.get(URL, options);
      return data;
    } catch(error){
      console.log(error);
    }
  }
}

export default Advisor;

// const getPalcesData = async() => {
//   try{
//     const response = await axios.get();
//   } catch(error) {

//   }
// }