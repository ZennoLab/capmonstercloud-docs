// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
require('dotenv').config();
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Capmonster Cloud Docs',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.capmonster.cloud',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZennoLab', // Usually your GitHub org/user name.
  projectName: 'CapmonsterCloud', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'zh', 'pt-br'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/',
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: (params) => {
            const  {
              versionDocsDirPath, 
              docPath,
              locale 
            } = params;
            return locale === 'ru' ? `https://github.com/ZennoLab/capmonstercloud-docs/tree/dev/${versionDocsDirPath}/${docPath}` : `https://github.com/ZennoLab/capmonstercloud-docs/tree/dev/i18n/en/docusaurus-plugin-content-docs/current/${docPath}`
          }
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-PZCSDCS',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Попробуйте наше <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/capmonster-cloud-%E2%80%94-automa/pabjfbciaedomjjfelfafejkppknjleh">расширение</a> для автоматического решения капч',
      //   backgroundColor: '#0FB97D',
      //   textColor: 'white',
      //   isCloseable: false,
      // },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true,
      },
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_landing.svg',
        },
        items: [
          {
            type: 'search',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Документация',
          },
          // {to: '/blog', label: 'Пресс релизы', position: 'left'},
            {
              type: 'localeDropdown',
              position: 'right',
            },
          {
            href: 'https://capmonster.cloud/#new-extension-block',
            label: 'Расширение',
            position: 'right',
          },
          {
            href: 'https://capmonster.cloud/Dashboard',
            label: 'Личный кабинет',
            position: 'right',
            className: 'lk-link',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'json',
          'java',
          'bash',
          'csharp',
          'http'
        ],
      },
    }),
};

module.exports = config;
