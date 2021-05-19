import React from 'react';
import Square from './square';
import O from './svgs/o.jsx';
import X from './svgs/x.jsx';

class Board extends React.Component {
    renderSquare(i) {
      switch (this.props.squares[i]) {
        case 'O':
          return (
            <Square
              value={<O />}
              onClick={() => this.props.onClick(i)}
            />
          )
        case 'X':
          return (
            <Square
              value={<X />}
              onClick={() => this.props.onClick(i)}
            />
          )
        default:
          return (
            <Square
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
            />
          );
      }
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default Board;