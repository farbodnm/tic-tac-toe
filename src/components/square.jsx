import {Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  gameButton: {
    fontSize: '20px',
    height: '64px',
    fontweight: 'bold',
    borderColor: '#12121266',
    maxwidth: '90px',
    maxHeight: '90px',
    minWidth: '90px',
    minHeight: '90px',
    '@media(max-Width: 550px)' : {
      maxwidth: '70px',
      maxHeight: '70px',
      minWidth: '70px',
      minHeight: '70px'
    },
    '@media(max-Width: 420px)' : {
      maxwidth: '50px',
      maxHeight: '50px',
      minWidth: '50px',
      minHeight: '50px'
    },
    '&:hover' : {
      borderColor: '#121212cc',
    }
  },
});

function Square(props) { 
  const classes = useStyles();
    return (
      <Button
        className={classes.gameButton}
        onClick={props.onClick}
        variant="outlined"
        color="primary"
      >
        {props.value}
      </Button>
    )
  }
  
export default Square;