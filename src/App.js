import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import {connect} from 'react-redux';

class App extends Component{
	
	render(){
		return (
		  <div>
	你点击了<span id="value">{this.props.n}</span>次  
	<div id="">
		<button id="add1" onClick={()=>this.props.add1()}>+1</button>  
    <button id="add2" onClick={()=>this.props.add2()}>+2</button>
	</div>
</div>
		)
	}
}


function mapStateToProps(state){
	return {
		n: state.n
	}
}

function mapDispatchToProps(dispatch){
	return {
		add1:()=>{   
			dispatch({type:'add', payload: 1})
		},
		add2:()=>{   
			dispatch({type:'add', payload: 2})
		}
	}
}





//function App() {
//  return (
//    <div className="App">
//      你好
//    </div>
//  );
//}

export default connect( mapStateToProps,mapDispatchToProps)(App);
