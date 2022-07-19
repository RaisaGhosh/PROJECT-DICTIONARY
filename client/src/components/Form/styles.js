
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    fontFamily : '-apple-system',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    paddingLeft : "10px"
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor : "#1A374D",
  },
  buttonClear: {
    marginBottom: 10,
    backgroundColor : "#C65D7B",
  },
}));