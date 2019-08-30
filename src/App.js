import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component{
	add1(){
		this.props.onAdd1()
	}
	add2(){
		this.props.onAdd2()
	}
	add1IfOdd(){
		this.props.onAdd3()
	}
	add1After2Sec(){
		this.props.onAdd4()
	}
	
	render(){
		return (
		  <div>
	你点击了<span id="value">{this.props.value}</span>次  
	<div id="">
		<button id="add1" onClick={()=>this.add1()}>+1</button>  
    <button id="add2" onClick={()=>this.add2()}>+2</button>
		<button id="add1IfOdd" onClick={()=>this.add1IfOdd()} type="button">如果是单数就+1</button>
		<button id="add1After2Sec" onClick={()=>this.add1After2Sec()} type="button">两秒钟后+1</button>
	</div>
</div>
		)
	}
}








//function App() {
//  return (
//    <div className="App">
//      你好
//    </div>
//  );
//}

export default App;
