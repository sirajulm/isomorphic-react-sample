import React, {Component} from 'react';
import {} from './style.less';
 
class App extends Component {
  render() {
    return <div>Hello world from a {this.props.message}</div>;
  }
}
 
export default App;
