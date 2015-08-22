var React = require('react');
var Feeditem = require('./Feeditem');
var StyleSheet = require('react-style');

var Feed = React.createClass({

  render: function() {
    var phoArray = [];
    // var nameArray = [];
    // var tagsArray = [];
    var lonArray = [];
    var latArray = [];
    // this for loop goes into the data Array and finds particular info we are after
    // It then stores all of this in array in sequence of Picture,User,Tags
    for(var i=0; i<this.props.data.length; i++){
      if(this.props.data[i].location !== null){
        // pushes in picture url and sends to feedItem
          phoArray.push(<Feeditem pictures={this.props.data[i].images.low_resolution.url}/>);
        // adds in Username
          phoArray.push("USERNAME= ");
          phoArray.push(this.props.data[i].user.username);
          phoArray.push(<br/>);
        // checks if tags are there
      if(this.props.data[i].tags.length > 0){
           phoArray.push("TAGS=");
      }
       // loops through tags array and pushes eash one into phoArray
      var tagsArray = (this.props.data[i].tags);
      for(var x =0; x < tagsArray.length; x++){
        phoArray.push(", ");
        phoArray.push(tagsArray[x]);
        }
        // pushes in longitude and lattitude
        lonArray.push(this.props.data[i].location.longitude);
        latArray.push(this.props.data[i].location.latitude);

      }
    }
          console.log("phoArray", phoArray);
          // console.log("latArray", latArray);

    return (
          <div >
            {phoArray}
          </div>
    );

  }
});


module.exports = Feed;