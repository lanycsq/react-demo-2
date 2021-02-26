import React from 'react'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={x:1}

  }
  onClick=()=>{
    this.setState({x:this.state.x+1})
  }
  render(){
    return (
        <div className="App">
          <button onClick={this.onClick}>+1</button>
          <B name={this.state.x}/>
        </div>
    );
  }
}
class B extends React.Component{
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("变化了")
  }

  render(){
    return <div>{this.props.name}</div>
  }
}

export default App;
