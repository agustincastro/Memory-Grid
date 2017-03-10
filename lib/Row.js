
class Row extends React.Component {
  render(){
    return(
      <div className="row">
        // this.props.children is a special structure
        //that holds one or more elements, in this case has the cell components
        {this.props.children}
      </div>
    );
  }
}

export default Row;
