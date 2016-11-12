import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Calculator extends Component {
	constructor() {
		super();
		this.calc = this.calc.bind(this);
		this.clearAll = this.clearAll.bind(this);
	}

	
	calc(op) {
		let output;
	  const input1 = this.refs.firstNumber.value;
	  const input2 = this.refs.secondNumber.value;
	  const num1 = parseFloat(input1.value);
	  const num2 = parseFloat(input2.value);

	  switch(op) {
	    case '+':
	     output = (num1 + num2);
	     break;
	    case '-':
	      output = (num1 - num2);
	      break;
	    case '*':
	      output = (num1 * num2);
	      break;
	    case '/':
	      if (isNaN(num2)) {
	        alert("Can't divide by 0");
	      } else {
	        output = (num1 / num2);
	      }
	      break;
	  }

	  const msg = num1 + ' ' + event.target.innerHTML + ' ' + num2 + " = " + output;
	  this.refs.output.innerHTML = msg;
	  input1.value = output;
	  input2.value = '';
	}

	clearAll() {
	 this.refs.firstNumber.value = '';
	 this.refs.secondNumber.value = '';
	 this.refs.ouput.value = 0;

	}

	render() {
		return(
			<div className='container'>
			  <input type='number' ref='firstNumber' />
			  <hr />
			  <input required type='number' ref='secondNumber' />
			  <hr />
			  <div className='buttonRow'>
			    <button onClick={this.calc()}>+</button>
			    <button onClick={this.calc()}>-</button>
			    <button onClick={this.calc()}>*</button>
			    <button onClick={this.calc()}>/</button>
			    <button onClick={this.clearAll()}>clr</button>
			  </div>
			  <h4 ref='output'></h4>
			</div>
		);
	};
}