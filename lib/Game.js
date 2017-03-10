import Row from "./Row";
import Cell from "./Cell";
import Footer from "./Footer"

class Game extends React.Component{
  render(){
    let matrix = [], row;
    for (let r = 0; r < this.props.rows; r++){
      row = [];
      for (let c = 0; c< this.props.columns; c++){
        // I came up with a unique id for every cell by concatenating the row and cell number
        row.push(`${r}${c}`);
      }
      matrix.push(row);
    }

    return(
      <div className='grid'>
      {matrix.map((row, r1) => (
        <Row key={r1}>
        {row.map(cellId => <Cell key={cellId} id={cellId} /> )}
        </Row>
      )
    )}
    </div>
  );
}
}

export default Game;
