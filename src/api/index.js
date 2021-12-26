import { TheatersRounded } from '@material-ui/icons';
import axios from 'axios';

class Advisor {
  constructor() {
    this.advisor = axios.create({
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'a37675185amsh9d74389b0180fe4p1572e2jsn4a1ad266730d'
      }
    })
  }

  async getRestaurantsData (sw, ne) {
    const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
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

  async getHotelsData(sw, ne) {
    const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'
    const options = {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        hotel_class: '1,2,3,4,5',
      },
    }
    try{
      const {data: {data}} = await this.advisor.get(URL, options)
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