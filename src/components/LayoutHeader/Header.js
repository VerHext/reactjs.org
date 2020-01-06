/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import HeaderLink from './HeaderLink';
import {Link} from 'gatsby';
import React from 'react';
import {colors, fonts, media} from 'theme';
import {version} from 'site-constants';
import ExternalLinkSvg from 'templates/components/ExternalLinkSvg';
import DocSearch from './DocSearch';

// $FlowFixMe
import navHeader from '../../../content/headerNav.yml';

import logoSvg from 'images/oss_logo.png';

const Header = ({location}: {location: Location}) => (
  <header
    css={{
      backgroundColor: colors.white,
      color: "#465765",
      borderBottom: "1px solid #d9d9d9",
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
      '@media print': {
        display: 'none',
      },
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 70,
          [media.between('small', 'large')]: {
            height: 50,
          },
          [media.lessThan('small')]: {
            height: 40,
          },
        }}>
        <Link
          css={{
            display: 'flex',
            marginRight: 10,
            height: '100%',
            alignItems: 'center',
            color: colors.brand,

            ':focus': {
              outline: 0,
              color: colors.white,
            },

            [media.greaterThan('small')]: {
              width: 'calc(100% / 6)',
            },
            [media.lessThan('small')]: {
              flex: '0 0 auto',
            },
          }}
          to="/">
         
            <img src="/oss_logo.png" alt="" height="40px" />
        </Link>

        <nav
          css={{
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            height: '100%',

            // Hide horizontal scrollbar
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },

            [media.size('xsmall')]: {
              flexGrow: '1',
              width: 'auto',
            },
            [media.greaterThan('xlarge')]: {
              width: null,
            },
            [media.lessThan('small')]: {
              maskImage:
                'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
            },
          }}>
          {navHeader.items.map(link => (
            <HeaderLink
              key={link.title}
              isActive={location.pathname.includes(link.activeSelector)}
              title={link.title}
              to={link.to}
            />
          ))}
        </nav>

        <DocSearch />

        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: 'auto',

            //[media.lessThan('medium')]: {
            //width: 'auto',
            //},
            //[media.greaterThan('large')]: {
            //width: 'calc(100% / 4)',
            //},
          }}>
        <div>
            <Link
            css={{
              display: 'flex',
              alignItems: 'center',
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              ...fonts.small,

              ':hover': {
                color: colors.brand,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },
            }}
            to="xxx">
            <img src="/icons8-phone.svg" alt="" height="24px" />{' '}
            <span
              css={{
                marginLeft: '0.5rem',

                [media.lessThan('medium')]: {
                  display: 'none',
                },
              }}>
              08225 7989 000<br />
              Mo bis Fr 9-22 Uhr
            </span>
          </Link>
         </div>
          <Link
            css={{
              display: 'flex',
              alignItems: 'center',
              padding: '5px 10px',
              borderLeft: "1px solid #d9d9d9",
              whiteSpace: 'nowrap',
              ...fonts.small,

              ':hover': {
                color: colors.brand,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },
            }}
            to="/login">
             <img src="/icons8-login.svg" alt="" height="24px" />{' '}
            <span
              css={{
                marginLeft: '0.5rem',

                [media.lessThan('medium')]: {
                  display: 'none',
                },
              }}>
              Anmelden
            </span>
          </Link>
      </div>
        </div>
    </Container>
  </header>
);


export default Header;
