import React from 'react'

export default class ControlledInput extends React.Component{
  constructor(){
    super()
    this.state = {
      value: '',
      firstName: 'Mildred'
    }
  }

  handleChange = e => {
    e.persist()
    this.setState({[e.target.name]: e.target.value})
    // console.log(this.state.value)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(`I am submitting: a form`)
  }

  render(){
    return (
      <div>
        <h1> I am a form </h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          <input type="text" name="value" value={this.state.value} onChange={this.handleChange}></input>
          <button>Submit!!</button>
        </form>
      </div>
    )
  }
}