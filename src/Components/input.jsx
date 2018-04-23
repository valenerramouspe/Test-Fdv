import React from 'react'
import ReactDOM from 'react-dom'
import Output from './output.jsx'

class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      countries : [],
      months: [],
      name:null, 
      surname: null,
      birthDay: null,
      birthMonth: null,
      birthYear: null,
      currentYear: new Date().getFullYear()
    }
    this.submit=this.submit.bind(this)
  }

  componentWillMount(){
    var url = "https://restcountries.eu/rest/v2/all";
    fetch(url).then((response)=>{
      response.json().then((data)=>{
      var drops = []
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      for (var i = 0; i < data.length; i++) {
        drops.push(data[i].name)
      }
      this.setState({
      countries: drops,
      months: monthNames
      })
      var select = document.getElementById("select");
      var selectMonth = document.getElementById("selectMonth") 
      var options = this.state.countries;

        for(var i = 0; i < options.length; i++) {
          var item = options[i];
          var create = document.createElement("option");
          create.textContent = item;
          create.value = item;
      select.appendChild(create);
    }
    var months = this.state.months
    for(var j = 0; j < months.length; j++) {
          var single = months[j];
          var add = document.createElement("option");
          add.textContent = single;
          add.value = single;
      selectMonth.appendChild(add);
    }
    })
  })
}

  submit(){
    this.setState({
      name:this.refs.name.value,
      surname: this.refs.surname.value,
      birthDay: this.refs.birthDay.value,
      birthMonth: this.refs.birthMonth.value,
      birthYear: this.refs.birthYear.value,
      selectedCountry: this.refs.selectCountry.value
    })
  }
  render(){
    if(this.state.countries.length===0){
      return(
        <p>hola</p>
      )
    }
    else{
    return (
    <div id="pagina">
      <div>
        <form id="formulario">
        <div className="field">
          <span className="caption">Name:</span>
	        <input className="input" type="text" ref="name" placeholder="name here" />
        </div>
        <div className="field">
          <span className="caption">Surname:</span>
          <input className="input" type="text" ref="surname" placeholder="surname here" />
        </div>
        <div className="field">
          <span className="caption">Country:</span>
          <select className="input" id="select" ref="selectCountry">
            <option>Select your country</option>
          </select>
        </div>
        <div className="field">
          <span className="caption">Birthday:</span>
          <input className="input" type="number" ref="birthDay" placeholder="DD" />
          <select className="input" id="selectMonth" ref="birthMonth">
            <option>Select Month</option>
          </select>
          <input className="input" type="number" ref="birthYear" placeholder="YYYY" />
	      </div>
          <button onClick={this.submit} type='button'>Save</button>
        </form>
      </div>
      <div>
      <Output 
      currentYear={this.state.currentYear}
      name={this.state.name}
      surname={this.state.surname}
      birthDay={this.state.birthDay}
      birthMonth={this.state.birthMonth}
      birthYear={this.state.birthYear}
      monthNames={this.state.months}
      country={this.state.selectedCountry}
      />
      </div>
    </div>
    )
  }
}
};

export default Input;