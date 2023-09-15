// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HubAI',
  tagline: 'Free, open source and community-driven AI platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.hubai.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gethubai', // Usually your GitHub org/user name.
  projectName: 'hubai-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/hubai-social-card.png',
      navbar: {
        title: 'HubAI',
        logo: {
          alt: 'HubAI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/gethubai/hubai-desktop',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
              {
                label: 'Extension',
                to: '/docs/category/extensions',
              },
              {
                label: 'Brain (AI)',
                to: '/docs/category/brains',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/hubai',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/PUDxddr8cE',
              },
              {
                label: 'StackOverflow',
                href: 'https://stackoverflow.com/questions/tagged/hubai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Downloads',
                to: '/downloads',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gethubai/hubai-desktop',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/hubaiapp',
              },
              {
                label: 'Youtube',
                href: 'https://youtube.com/@hubaiapp',
              },
              {
                label: 'Facebook',
                href: 'https://fb.com/hubaiapp',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/hubaiapp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HubAI, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
