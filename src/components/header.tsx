import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import logo from './../../content/assets/logo_.svg';
import './../scss/header.scss';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query HeaderMenu {
      allSettingsYaml {
        nodes {
          header_navigation {
            link_title
            link_path
          }
        }
      }
    }
  `),
  headerMenu = data.allSettingsYaml.nodes[0].header_navigation;

  const showMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    {headerMenu && 
    
      <div className="header-menu col-md-12">
        
        { headerMenu.map((item, index) => {
          if(index <= 1)
            return (<div className="link"><Link key={index} to={item.link_path}>{item.link_title}</Link></div>)
        }) }
        
        <div className="logo">
          <Link to={'/'}>
            <img src={logo} />
          </Link>
        </div>
        
        { headerMenu.map((item, index) => {
          if(index >= 2)
            return (<div className="link"><Link key={index} to={item.link_path}>{item.link_title}</Link></div>)
        }) }
        
          <div className="mobile-menu-button" onClick={showMenu}>
            <div id="nav-icon4" className={`${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

        </div>
    }
        <div className={`mobile-menu ${isOpen ? 'show' : 'hide'}`}>
            <ul>
            {headerMenu && headerMenu.map((item, index) => {
              return (
              <li key={index}><Link to={item.link_path}>{item.link_title}</Link></li>
              )
            }) }
            </ul>
          </div>
    </>
  ) 
}



export default Header
