/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

// $FlowExpectedError
import navCommunity from '../../content/community/nav.yml';
// $FlowExpectedError
import navDocs from '../../content/docs/nav.yml';
// $FlowExpectedError
import navTutorial from '../../content/tutorial/nav.yml';

import navAbout from '../../content/about/nav.yml';

const sectionListDocs = navDocs.map(
  (item: Object): Object => ({
    ...item,
    directory: 'docs',
  }),
);

const sectionListCommunity = navCommunity.map(
  (item: Object): Object => ({
    ...item,
    directory: 'community',
  }),
);
const sectionListAbout = navAbout.map(
  (item: Object): Object => ({
    ...item,
    directory: 'about',
  }),
);

export {
  sectionListCommunity,
  sectionListDocs,
  sectionListAbout,
  navTutorial as sectionListTutorial,
};
