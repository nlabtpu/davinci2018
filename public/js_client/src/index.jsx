import {render} from 'react-dom';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello React!"
    }
  }

  onChange(e) {
    this.setState({value: e.target.value});
  }
  onClickSend(e){
    if(props.command === 0) return fales;
    console.log('send');
  }
  onClick(e){
    console.log('click');
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <input type="text" value={this.state.value} onChange={this.onChange.bind(this)}/>
        <button type="button" id="inputname" onClick={this.onClick.bind(this)}>決定</button>
        <button type="button" id="send" onClickSend={this.onClickSend.bind(this)}>送信</button>
        <button type="button" id="reset" onClick={this.onClick.bind(this)}>リセット</button>
        <button type="button" id="go" onClick={this.onClick.bind(this)}>Ｇｏ</button>
        <button type="button" id="roll" onClick={this.onClick.bind(this)}>Ｒｏｌｌ</button>
        <ul id="messageList"></ul>
      </div>
    );
  }
}

module.exports = App;

render(<App/>, document.getElementById('app'));
