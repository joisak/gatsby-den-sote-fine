import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const OurPlace = () => {
    const siteTitle = "Our fine small nice place"
    return (
        <Layout title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
            OUR PLACE
      </Layout>
    )
}

export default OurPlace;