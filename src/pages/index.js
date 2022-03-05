import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

// template imports

import SEO from 'components/seo';
import Layout from 'components/layout';

// webpage imports
import AboutMe from '../sections/about-me';
import CreativeProcess from '../sections/creative-process';
import ContactMe from 'sections/contact-me';

import SelectedWorkGrid from 'sections/selected-work-grid';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Portfolio - Roshan Thomas" />
          <AboutMe />
          <SelectedWorkGrid />
          <CreativeProcess />
          <ContactMe />
        </Layout>
    </ThemeProvider>
  );
}
