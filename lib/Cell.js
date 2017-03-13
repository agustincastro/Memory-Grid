
class Cell extends React.Component {
  active(){
    return this.props.activeCells.indexOf(this.props.id) >= 0;
  }

  render(){
    let className = "cell";
    if(this.props.gameState === "memorize" && this.active()){
      className += " active";
    }

    return(
        <div className={className}>
          {/*this.props.id*/}
        </div>
    );

  }

}

export default Cell;
