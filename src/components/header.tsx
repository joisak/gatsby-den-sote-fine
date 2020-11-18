import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import './../scss/header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
  return (
    <>
    {headerMenu && 
      <div className="header-menu">
        <div className="left">
        { headerMenu.map((item, index) => {
          if(index <= 2)
            return (<Link to={item.link_path}>{item.link_title}</Link>)
        }) }
        </div>
        <div className="logo">
          LOGO
        </div>
        <div className="right">
        { headerMenu.map((item, index) => {
          if(index >= 2)
            return (<Link to={item.link_path}>{item.link_title}</Link>)
        }) }
        </div>
        
        {data.allSettingsYaml.nodes[0].header_navigation.forEach(item => {
          {console.log(item.link_path)}
        })}
      </div>
    }
    </>
  ) 
}

export default Header
