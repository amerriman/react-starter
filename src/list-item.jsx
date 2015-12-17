var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://todo-firebase-amm.firebaseio.com/';


module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  componentWillMount: function(){
    this.fb = new Firebase(rootUrl + "items/" + this.props.item.key)
  },
  render: function() {
    console.log(this.props.item)
    return <div className="input-group">
      <span className="input-group-addon">
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.handleDoneChange}/>
      </span>
      <input type="text"
        className="form-control"
        disabled={this.state.done}
        value={this.state.text}
        onChange={this.handleTextChange}/>
      <span className="input-group-btn">
        {this.changeButtons()}
        <button
          className="btn btn-danger"
          onClick={this.handleDeleteClick}>
          Delete
        </button>
      </span>
    </div>
  },
  changeButtons: function(){
    if (!this.state.textChanged){
      //always return null in off case or it freaks out the render
      return null;
    } else {
      return [
        <button
          className="btn btn-success"

          >SAVE
        </button>,
        <button
          className="btn btn-default"
          >
          UNDO
        </button>
      ]
    }
  },
  handleDoneChange: function(event){
    var update = {done: event.target.checked};
    this.setState(update);
    this.fb.update(update);
  },
  handleDeleteClick: function(){
    this.fb.remove();
  },
  handleTextChange: function(event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    })
  }
})
