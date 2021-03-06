import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: "rgb(249, 249, 197)",
    fontFamily : '-apple-system'
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')] : {
    mainContainer: {
      flexDirection: "column-reverse",
    }
  }
}));