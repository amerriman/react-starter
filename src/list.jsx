var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
  render: function() {
    //You'll get an empty object first, then the object that contains the data from Firebase
    // console.log(this.props.items);
    return <ul>
      {this.renderList()}
    </ul>
  },
  renderList: function(){
    if (this.props.items['.value']=== null){
      return <h4>
        Add a TODO to get started!
      </h4>
    } else {
      var children = [];

      for (var key in this.props.items){
        if (key !== '.key'){
          children.push(
            <ListItem />
          )
        }
      }
      return children;
    }
  }
})

//the for-in loop is saying go through each key in this.props.items, but we don't want the .key one, so just ignore it, and push the other things into the child array - basically just push the todo list stuff in there.

//When you push into an array, it knows to treat each item as its own thing
