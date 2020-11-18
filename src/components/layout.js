import React from "react";
import Header from "../components/header";
import './../scss/layout.scss';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

  
    return (
      <div className="wrapper">
      <div className="container main-content">
        <Header></Header>
       
        <div className="footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </div>
    )
  }
}


export default Layout
