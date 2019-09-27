import { makeStyles } from '@material-ui/core/styles';
import city from 'assets/images/cave.jpg';


export default makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  leftSide: {
    backgroundImage: `url(${city})`,
    backgroundSize: 'cover',
    flex:'0 0 50%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  rightSide: {
    flex:'0 0 50%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flex:'0 0 100%',
    },
  },
  formWrapper: {
    padding: theme.spacing(5,15),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5),
    },
  },
  logo: {
    maxWidth: '100%',
    width: '320px',
    display: 'flex',
    margin: '0 auto 32px',
    objectFit: 'contain',
  }
}));
