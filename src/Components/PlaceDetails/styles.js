import { makeStyles } from '@material-ui/core/styles';
// import { ScatterPlotTwoTone } from '@material-ui/icons';

export default makeStyles((theme) => ({
  card : {
    padding: theme.spacing(1,2),
    marginBottom: theme.spacing(2),
    borderRadius: '4px',
    boxShadow: '0px 1px 8px 0px rgba(0,0,0,1)',
    cursor: 'pointer',
    transition: 'transform 150ms ease-in',
    '&:hover': {
      transform: 'translate(-2px, -2px)'
    }
  },
  cardName: {
    marginBottom: theme.spacing(1), 
    padding: theme.spacing(1,0),
    fontSize: '30px',
  },
  cardPhoto: {
    width: '100%',
  },
  cardRating: {
    marginBottom: theme.spacing(1),
  },
  cardAddress: {
    // marginBottom: theme.spacing(1),
  },
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  
}));