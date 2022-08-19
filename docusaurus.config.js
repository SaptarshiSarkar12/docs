// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reviewpad Documentation',
  tagline: 'Documentation for Reviewpad',
  url: 'https://docs.v2.reviewpad.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'reviewpad', // Usually your GitHub org/user name.
  projectName: 'maester', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          includeCurrentVersion: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/reviewpad/maester/tree/main',
        },
        blog: false,
        /*{
          
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/reviewpad/maester/tree/main/docs',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  //themes: ['docusaurus-theme-search-typesense'],
  //themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reviewpad',
        logo: {
          alt: 'Reviewpad Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark_mode.svg',
          href: '/'
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome-to-reviewpad',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/changelog', label: 'Changelog', position: 'left' },
          {
            href: 'https://reviewpad.com/blog/',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/reviewpad/reviewpad/discussions',
            label: 'Discussions',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/reviewpad/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      /*
      typesense: {
        typesenseCollectionName: 'reviewpad', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
      
        typesenseServerConfig: { 
          nodes: [
            {
              host: 'lqetgadks30x62v4p-1.a1.typesense.net',
              port: 443,
              protocol: 'https'
            },
          ],
          apiKey: 'FFR0wUwQ3laHdPMf0cdY9VNJVI9nEl5L',
        },
        contextualSearch: true,
      },
      */
      algolia: {
        // The application ID provided by Algolia
        appId: 'U3TSN8RPIZ',

        // Public API key: it is safe to commit it
        apiKey: '697bf1398169fbf5dc37592b2ed6a715',

        indexName: 'maester',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
              {
                label: 'Changelog',
                to: '/changelog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/reviewpad',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/reviewpad',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://reviewpad.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/reviewpad',
              },
            ],
          },
        ],
        logo: {
          alt: 'Reviewpad logo',
          src: 'img/logo_footer.svg',
          href: 'https://reviewpad.com',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Explore.dev. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
