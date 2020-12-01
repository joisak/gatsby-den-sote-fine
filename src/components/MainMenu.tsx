import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';


const MainMenu = () => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        allMenuYaml {
          nodes {
            main_menu {
              name
              price
            }
          }
        }
      }
  `),
  mainMenu = data.allMenuYaml.nodes[0].main_menu;
    return (
    <>
    {console.log('MAIN MENU = ', mainMenu)}
    <ul>
        { mainMenu && mainMenu.map( (item, index) => {
            return (
            <li key={index}><span>{ item.name }</span><span>{item.price}</span></li>
            )
        })}
    </ul>
    </>
    )
}

export default MainMenu;