
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './Login'



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        temp:"",selectValue:""

      }
      //this.handle = this.handle.bind(this);
      this.handleDropdownChange = this.handleDropdownChange.bind(this);
        
    }
    handleDropdownChange(e) {
      this.setState({ selectValue: e.target.value });
      //handle(e.target.value);
    
      this.callApi(e.target.value)
        .then(res => {this.setState({ temp: res.main.temp})
        console.log(res.main.temp);
      })
        .catch(err => console.log(err));
        
    }
    
    callApi = async (city) => {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fbb2b31fd3e77c536be64abc677a4d1`
      const response = await fetch(url);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      
      return body;
    };

    render() {

      
        return (
            <div >
              Hi id :{this.props.id} and  password:{this.props.password}
              <br/><br/>
              <select value={this.state.selectValue} onChange={this.handleDropdownChange}>
            <option value = "Mumbai">Mumbai</option>
            <option value = "Pune" > Pune</option>
            <option value = "Delhi">Delhi</option>
         </select>
         {this.state.temp}
            </div>
                
            
        )
    }
    
};

const mapStateToProps = state => {
  return {

    id: state.id,
    password: state.password
  }
}


export default connect(mapStateToProps)(App);
