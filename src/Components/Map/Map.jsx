import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'


const Map = ({setCoordinates, setBounds, place, setChildClicked, coordinates}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng:e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onGoogleApiLoaded={(e) => {
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {place?.map((place, i) => ( // GoogleMapReact 안에 div의 좌표를 설정하면 지도 위에 표시
          <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
              >
                {
                  !isDesktop ? (
                    <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                  ) : (
                    <Paper elevation={3} className={classes.paper}>
                      <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                        {place.name}
                      </Typography>
                      <img 
                          className={classes.pointer}
                          src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                          alt={place.name}
                      />
                      <Rating size="small" value={Number(place.rating)} readOnly />
                    </Paper>
                  )
                }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

