import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const siteTitle = 'Book your table please';

const BookTable = () => {
    return (
        <Layout title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
            Book table please
      </Layout>
    )
};

export default BookTable;