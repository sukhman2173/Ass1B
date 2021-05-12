import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '5px',
      },
      heading: {
        color: 'black',
      },
      image: {
        padding: '10px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection:"column-reverse"
        }
      }
}));