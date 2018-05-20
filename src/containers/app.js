import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from '~/assets/logo.png';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }
  componentWillMount() {
    const {initalLogo} = this.props;
    initalLogo();
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/docs');
  }
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div className="home" style={{paddingTop: 100}}>
        <div className={`center ${movelogo ? 'logo-move' : ''}`} onClick={this.handleBrowserChange}>
          <div className="logo-box">
            <img src={logo} className="logo" />
          </div>
          <h1>React Project</h1>
        </div>
        <div style={{width: '1000px', margin: '0 auto'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
