import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      response:[]
    };
  }

  componentDidMount() {
    const q = 'Bangalore';
    fetch(`http://api.weatherapi.com/v1/current.json?key=35bc0c3bf2ec4e4f905135251201012&q=${q}`)
    .then(response => {
      response.json();
    })    
.then(response => {
	this.setState({
          response : response
  })
})
.catch(err => {
	console.error(err);
});
}

  render (){
    console.log(this.state.response)
    return(
      <div className="App">
        <span>City</span> 
        <input type="text"/>
      </div>)
}
}

export default App; 
