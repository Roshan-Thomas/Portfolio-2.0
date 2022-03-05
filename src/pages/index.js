import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

// template imports

import SEO from 'components/seo';
import Layout from 'components/layout';

// webpage imports
import Hero from '../sections/hero';
import AboutMe from '../sections/about-me';
import CreativeProcess from '../sections/creative-process';
import SelectedWork from '../sections/selected-work';
import ContactMe from 'sections/contact-me';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Portfolio - Roshan Thomas" />
          <AboutMe />
          <SelectedWork />
          <CreativeProcess />
          <ContactMe />
        </Layout>
    </ThemeProvider>
  );
}
