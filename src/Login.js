import React from 'react';
import App from './App';
import { BrowserRouter, Link,Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import {addId} from './Redux/action'

class Login extends React.Component {
    constructor(props) {
        super(props);
      this.state={
          id:"",
          password:""

      }
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);

        
    }
    handleChange1(e){
this.setState({id:e.target.value});
    }

    handleChange2(e){
        this.setState({password:e.target.value});
        
    }

    render() {
      
        return (
            <div>
            <form >
            
      
        <input  name="id" type="text" required onChange={this.handleChange1} value={this.state.id} placeholder="Enter username..."></input><br/>
        <input  name="password" type="text" required onChange={this.handleChange2} value={this.state.password} placeholder="Enter username..."></input><br/>
      <Link to="/data"> <button onClick={this.props.onTodoClick(this.state.id,this.state.password)}>Click it</button></Link>
        
    </form>
                <Switch>
                    <Route path='/data'>
                      <App/></Route>
                    
                    
                </Switch>
                </div>
            
        )
    }
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (id,password) => {
      dispatch(addId(id,password))
    }
  }
}
export default connect(null,mapDispatchToProps)(Login)
