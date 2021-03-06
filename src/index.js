import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from './components/Header';
import app from './app';
/*
const startApp = async () => {
  const header = document.querySelector('[data-app-name]');
  if (!header) return;

  const programName = await app();
  header.textContent = programName;
};

document.addEventListener('DOMContentLoaded', startApp);
*/
class HelloMessage extends React.Component {
  render() {
    return <div>
          <Header/>
          <div className="container">
              <h1>Hello {this.props.name}</h1>
          </div>
      </div>;
  }
}
HelloMessage.propTypes = {
  name: PropTypes.string.isRequired
};

const App = document.querySelector('[data-app-name]');
const programName = app();

ReactDOM.render(<HelloMessage name={programName} />, App);
