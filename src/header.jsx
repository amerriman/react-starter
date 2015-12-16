var React = require('react');

module.exports = React.createClass({
  //here you set the initial state of input below (because it's 'text' like the input type below) so you have to have the event handler onChange or you can't type in the field
  getInitialState: function(){
    return {
      text: ''
    }
  },
  render: function(){
    // console.log(this.props);
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        className="form-control"
        type="text" />
        <span className="input-group-btn">
          <button
            onClick={this.handleClick}
            className="btn btn-success"
            type="button">
            ADD
          </button>
        </span>
      </div>
  },
  //this resets the state of text to the value of the input
  handleInputChange: function(event){
    this.setState({text: event.target.value});
  },
  handleClick: function(){
    // console.log(this.state.text);
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });
    this.setState({text: ''});
  }
});
