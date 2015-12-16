var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://todo-firebase-amm.firebaseio.com/';

//COMPONENTS
var Header = require('./header');
var List = require('./list');

var App = React.createClass({
  //this is an empty object because at this point in time we haven't connected the database
  getInitialState: function(){
    return {
      items: {}
    }
  },
  //mixins is similar to injecting in Angular.  This might be getting depricated soon?
  mixins: [ReactFire],
  componentWillMount: function(){
    //connects firebase to component?
    this.fb = new Firebase (rootUrl+'items/');
    //react fire method that binds this.fb to the endpoint so it knows what we're referring to later - the items we add to the list from the firebase database.  We'll only see this if we are dealing with firebase
    this.bindAsObject(this.fb, 'items');
  },
  render: function() {
    // console.log(this.state.items, "This.state.items")
    //note className instead of class
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          Todo List
        </h2>
        <Header itemsStore={this.firebaseRefs.items}/>
        <List items={this.state.items}/>
      </div>
    </div>
    //itemsStore all of the items will be stored in Firebase - it's how we access the datastore
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
//appending inside the .container in index.html
