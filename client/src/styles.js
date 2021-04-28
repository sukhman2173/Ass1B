import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
      },
      heading: {
        color: 'Black',
      },
      image: {
        marginRight: '10px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection:"column-reverse"
        }
      }
}));