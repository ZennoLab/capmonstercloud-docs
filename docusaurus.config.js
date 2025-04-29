// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type  {import('@docusaurus/types').Config} */
const config = {
  title: 'BroCapGPT Docs',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.brocapgpt.com/',
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
    locales: ['en', 'ru'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/',
          // showLastUpdateTime: true,
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
          containerId: 'GTM-5K6HHK27',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      image: 'img/social-card.jpg',
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_landing.svg',
          srcDark: 'img/logo_landing_dark.svg'
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Документация',
          // },
          // {
          //   href: 'https://brocapgpt.com',
          //   label: 'BroCapGPT',
          //   position: 'left',
          // },

          // {
          //   href: 'https://brocapgpt.com/sign-in',
          //   label: 'Панель управления',
          //   position: 'left',
          // },

          // {
          //   href: 'https://brocapgpt.com',
          //   label: 'Расширение',
          //   position: 'left',
          // },

          {
            type: 'localeDropdown',
            position: 'right',
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
