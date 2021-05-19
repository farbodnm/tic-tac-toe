import {Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  gameButton: {
    fontSize: '20px',
    height: '64px',
    fontweight: 'bold',
    borderColor: '#12121266',
    maxwidth: '100px',
    maxHeight: '100px',
    minWidth: '100px',
    minHeight: '100px',
    '@media(max-Width: 320px)' : {
      maxwidth: '90px',
      maxHeight: '90px',
      minWidth: '90px',
      minHeight: '90px'
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