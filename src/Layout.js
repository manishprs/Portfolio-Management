import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  scrollToAboutUs = () => {
    var elmnt = document.getElementById("videoDiv");
    elmnt.scrollIntoView();
  }
  scrollToContact = () => {
    var elmnt = document.getElementById("getInTouch");
    elmnt.scrollIntoView();
  }
  render() {
    return (
      <div className='main-page'>
          <header>
            <Header
            scrollToAboutUs = {this.scrollToAboutUs}
            scrollToContact = {this.scrollToContact}
            />
          </header>
       {/* <article> */}
        {this.props.children}
        {/* </article> */}
        <footer className="app-footer">
            <Footer />
        </footer>
      </div>
    );
  }
}

export default Layout;