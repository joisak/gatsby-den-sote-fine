import React from "react";
import Header from "../components/header";
import './../scss/general.scss';
import './../scss/layout.scss';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

  
    return (
      <div className="wrapper">
        <div className="container">
        
          <div className="inner-wrapper">
            <Header></Header>
            <div className="main-content">
            {children}
          </div>
          <div className="footer">
            <div>
              © {new Date().getFullYear()} den søde fine
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Layout
