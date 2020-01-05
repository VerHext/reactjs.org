/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import MarkdownPage from 'components/MarkdownPage';
import React from 'react';
import {graphql} from 'gatsby';
import Layout from 'components/Layout';
import {createLinkAbout} from 'utils/createLink';
import {sectionListAbout} from 'utils/sectionList';

const About = ({data, location}) => (
  <Layout location={location}>
    <MarkdownPage
      createLink={createLinkAbout}
      location={location}
      markdownRemark={data.markdownRemark}
      sectionList={sectionListAbout}
      titlePostfix=" &ndash; React"
    />
  </Layout>
);

export const pageQuery = graphql`
  query TemplateAboutMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        next
        prev
      }
      fields {
        path
        slug
      }
    }
  }
`;

export default About;
