import React from 'react'
import ReactDom from 'react-dom'

export default class Output extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		if (this.props.name && this.props.surname && this.props.birthDay && 
			this.props.birthMonth!=="Select Month" && this.props.country!=="Select your country" 
			&& this.props.birthYear) 
		{
			if (this.props.monthNames.indexOf(this.props.birthMonth) < new Date().getMonth() 
				|| (this.props.monthNames.indexOf(this.props.birthMonth) === new Date().getMonth() 
				&& this.props.birthDay < new Date().getDate()))
			{
				var year = new Date().getFullYear() + 1
				var age= year - this.props.birthYear
				return(
					<p className="output">Hello {this.props.name} {this.props.surname} from {this.props.country}, on {this.props.birthMonth} {this.props.birthDay} you will be {age} years old</p>
				)
			}
			else{
				var year = new Date().getFullYear()
				var age = year - this.props.birthYear
				return(
					<p className="output">Hello {this.props.name} {this.props.surname} from {this.props.country}, on {this.props.birthMonth} {this.props.birthDay} you will be {age} years old</p>
				)	
			}
		}
		else{
			return(
				<p className="complete">Please complete all fields to receive an output</p>
			)
		}
	}
}