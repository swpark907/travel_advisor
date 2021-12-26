import React, { useEffect, useState } from "react";
import {CssBaseline, Grid} from '@material-ui/core';
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
// import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";

import Advisor from './api/index'

const advisor = new Advisor();

const App = () => {
  const [name, setName] = useState();
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
  const [bounds, setBounds] = useState({ne: {lat: 37.56891243478519, lng: 127.0029724092002},
    sw: {lat: 37.52154769240252, lng: 126.95842628188086}});// 초기값 설정에 문제 있음, API결제 문제라 예상됨
  const [place, setPlace] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, [])
  
  useEffect(() => {
    console.log(coordinates, bounds,'asdfasfsda')
    advisor.getRestaurantsData(bounds.sw, bounds.ne)
    .then((data) => {
      console.log(data);
      setPlace(data);
    })
  }, [coordinates, bounds])

  return(
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List name={name} place={place}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          />
        </Grid>
      </Grid>
      {/* <PlaceDetails/> */}
    </>
  )
}

export default App;