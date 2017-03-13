import Row from "./Row";
import Cell from "./Cell";
import Footer from "./Footer"
import _ from "lodash" //Library used to easily pick random elements from an array

class Game extends React.Component{
  constructor(props){
    super(props);

    this.matrix = [];
    for (let r = 0; r < this.props.rows; r++){
      let row = [];
      for (let c = 0; c< this.props.columns; c++){
        // I came up with a unique id for every cell by concatenating the row and cell number
        row.push(`${r}${c}`);
      }
      this.matrix.push(row);
    }

    let flatMatrix = _.flatten(this.matrix);
    this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);

    this.state = {
      gameState : "ready",
      wrongGuesses: [],
      correctGuesses: []
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({gameState : "memorize"}, () => {
        setTimeout( () => this.setState({gameState : "recall"}), 2000 );
      });
    }, 2000 );

  }

  //Function passed down to the cell component to record correct or
  //incorrect guesses and modify the game's state
  recordGuess({cellId, userGuessIsCorrect}){
    let { wrongGuesses, correctGuesses } = this.state;
    if(userGuessIsCorrect){
      correctGuesses.push(cellId);
    }else{
      wrongGuesses.push(cellId);
    }
    this.setState({correctGuesses, wrongGuesses});
  }

  render(){
    return(
      <div className='grid'>
      {this.matrix.map((row, r1) => (
        <Row key={r1}>
        {row.map(cellId => <Cell key={cellId} id={cellId}
                            activeCells={this.activeCells}
                            recordGuess={this.recordGuess.bind(this)}
                            {...this.state} /> )}
          </Row>
        )
      )}
      <Footer {...this.state} activeCellsCount={this.props.activeCellsCount} />
      </div>
    );
  }

}

export default Game;
