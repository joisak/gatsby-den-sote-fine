import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';


const MainMenu = () => {

    const data = useStaticQuery(graphql`
    query Menus {
      allFile(filter: { sourceInstanceName: { eq: "menus" } }) {
        edges {
          node {
            childMdx {
              frontmatter {
                date
                name
                description
                dishes {
                  name
                  description
                  price
                }
              }
            }
          }
        }
      }
    }
  `),
   mainMenu = data.allFile.edges;
   //[0].node.childMdx.frontmatter
    return (
    <>
    {console.log('MAIN MENU = ', mainMenu)}
    {console.log('MAIN MENU = ', data)}
    {mainMenu && mainMenu.map((item, index) => {
      let menu = item.node.childMdx.frontmatter;
      {console.log(menu)}
      return (
        <div key={index}>
        <h1>{menu.name}</h1>
        <small>{menu.description}</small>
        <ul>
        {menu.dishes.map((dish, index) => {
          return (
          <li key={index}><span>{dish.name} {dish.description}</span><span>{dish.price}</span></li>
          )
        })}
        </ul>
      </div>
        )
      
    })}
    <ul>
        
    </ul>
    
    </>
    )
}

export default MainMenu;