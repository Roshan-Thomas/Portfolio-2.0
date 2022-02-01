import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

// template imports

import SEO from 'components/seo';
import Layout from 'components/layout';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';

// webpage imports
import Hero from '../sections/hero';
import AboutMe from '../sections/about-me';
import CreativeProcess from '../sections/creative-process';
import SelectedWork from '../sections/selected-work';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Portfolio - Roshan Thomas" />
          <Hero />
          <AboutMe />
          <CreativeProcess />
          <SelectedWork />
        </Layout>
    </ThemeProvider>
  );
}
