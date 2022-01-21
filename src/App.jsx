import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import { PlaceSharp } from "@material-ui/icons";
// import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";

const App = ({ advisor }) => {
  const [coordinates, setCoordinates] = useState({});
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [bounds, setBounds] = useState({ sw: "", ne: "" }); // 초기값 설정에 문제 있음, API결제 문제라 예상됨
  const [place, setPlace] = useState([]);
  const [childClicked, setChildClicked] = useState(null); // Map, List 둘다에 쓰이는 state라 App에서 관리
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = place.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    advisor.getPlacesData(bounds.sw, bounds.ne, type).then((data) => {
      setPlace(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }, [coordinates, bounds, type]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            place={filteredPlaces.length ? filteredPlaces : place}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}

          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            place={place}
            setChildClicked={setChildClicked}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
