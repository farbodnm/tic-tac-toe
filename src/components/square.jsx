import {Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  gameButton: {
    fontSize: '20px',
    height: '64px',
    fontweight: 'bold',
  },
});

function Square(props) { 
  const classes = useStyles();
    return (
      <Button
        className={classes.gameButton}
        onClick={props.onClick}
        variant="outlined"
        color="default"
      >
        {props.value}
      </Button>
    )
  }
  
export default Square;