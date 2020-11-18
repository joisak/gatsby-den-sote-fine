import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


class MenuPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
            OUR MENU
      </Layout>
    )
  }
}

export default MenuPage
