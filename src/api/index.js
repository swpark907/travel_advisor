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

  async getRestaurantsData (lat, lng) {
    const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
    const options = {
      params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
      },
    }
    try {
      const {data: {data}} = await this.advisor.get(URL, options);
      return data;
    } catch(error){
      console.log(error);
    }
  }

  async getHotelsData(lat, lng) {
    const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'
    const options = {
      params: {
        bl_latitude: '11.847676',
        bl_longitude: '108.473209',
        tr_longitude: '109.149359',
        tr_latitude: '12.838442',
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