import React from 'react';

enum operator {
  Add = "+" ,
  Multiply = "*",
  Sub = "-" ,
  Divide = "/"
}
class App extends React.Component{
  state = {
    evaluation: "",
    display: "",
    reset: false
  }
 
  clear() {
    this.setState({display: "", evaluation: "", reset: true})
  }
  evaluate() {
     const result: string= eval(this.state.evaluation);
     debugger;
     this.setState({display: result.toString(), evaluation: result.toString()})
  }
  updateDisplay(e: any) {
    const {value} = e.target;
    debugger;
    if(this.state.reset){
      this.setState({evaluation: value, display: value, reset: false})
    }
    else{
      this.setState({evaluation: this.state.evaluation.concat(value), display: value})
    }
  }
  getNumberPanel() {
    var numList = [];
    for(let i=0; i<10; i++){
      if(i%5 == 0){
        numList.push(<br />)
      }
      numList.push(<button value={i} onClick={(e) => this.updateDisplay(e)}>{i}</button>)
    }
    numList.push(<br />)
    return numList;
  }

  operate(oper: operator){
    switch(oper){
      case operator.Add:
      this.setState({evaluation: this.state.evaluation.concat('+')})
      break;
      case operator.Sub:
      this.setState({evaluation: this.state.evaluation.concat('-')})
      break;  
      case operator.Multiply:
      this.setState({evaluation: this.state.evaluation.concat('*')})
      break;
      case operator.Divide:
      this.setState({evaluation: this.state.evaluation.concat('/')})
      break;
    }
  }

  getOperators() {
    var opeList = [];
      opeList.push(<button onClick={() => this.operate(operator.Add)}>{operator.Add}</button>)
      opeList.push(<button onClick={() => this.operate(operator.Sub)}>{operator.Sub}</button>)
      opeList.push(<button onClick={() => this.operate(operator.Multiply)}>{operator.Multiply}</button>)
      opeList.push(<button onClick={() => this.operate(operator.Divide)}>{operator.Divide}</button>)
      return opeList;
    }
  render(){
    
  return <div>
  <input value={this.state.display}></input>
  <button onClick={() => this.clear()}>Clear</button>
  {
    this.getNumberPanel()
  }
  {
    this.getOperators()
  }
  <button onClick={() => this.evaluate()}>=</button>
    </div>
  }
}

export default App;
