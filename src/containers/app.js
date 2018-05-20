import React, {Component} from 'react';
import logo from '~/assets/logo.png';

class App extends Component {
  state = {
  }
  handleBrowserChange = () => {
    const {history} = this.props;
    history.push('/docs');
  }
  render() {
    const {location: {pathname}} = this.props;
    return (
      <div className="home" style={{paddingTop: 100}}>
        <div
          className={`center ${pathname === '/docs' ? 'logo-move' : ''}`}
          onClick={this.handleBrowserChange}
        >
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
