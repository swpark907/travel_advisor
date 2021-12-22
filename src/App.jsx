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
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [place, setPlace] = useState([]);
  
  useEffect(() => {
    console.log('loaded')
    advisor.getHotelsData()
    .then((data) => {
      console.log(data);
      setPlace(data);
    })
  }, [])

  return(
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List name={name}/>
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