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
        
        { headerMenu.map((item, index) => {
          if(index <= 1)
            return (<Link to={item.link_path}>{item.link_title}</Link>)
        }) }
        
        <div className="logo">
          LOGO
        </div>
        
        { headerMenu.map((item, index) => {
          if(index >= 2)
            return (<Link to={item.link_path}>{item.link_title}</Link>)
        }) }
        
        
        {data.allSettingsYaml.nodes[0].header_navigation.forEach(item => {
          {console.log(item.link_path)}
        })}
      </div>
    }
    </>
  ) 
}

export default Header
