import React from 'react';
import './App.css';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0}
    
  }

  handleClick(value){
    this.setState({count:this.state.count + parseInt(value)})
  }
  
  render() {
    const list =[
      {value:"1"},
      {value:"2"},
      {value:"3"},
      {value:"4"},
      {value:"5"},
      {value:"6"},
      {value:"7"},
      {value:"8"},
      {value:"9"}
    ]
    return (
      <div>
        <h1>
          {this.state.count}
          
        </h1>

        {list.map((listItem)=>{
          return(
            <button onClick = {()=>{this.handleClick(listItem.value)}}><Button number = {listItem.value}/></button>
          )
        })}
        
        
        
      </div>
    );
  }
}

export default App;
