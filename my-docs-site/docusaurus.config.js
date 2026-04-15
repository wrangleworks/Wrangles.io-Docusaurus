import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WrangleWorks Internal Wiki',
  tagline: "There's a process for that!",
  favicon: 'img/favicon.ico',

  url: 'http://docs.kardiydata.net', // Change this to your real domain later
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    recipeRunnerUrl: '/run-recipe',
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          remarkPlugins: [
            require('./src/remark/linksListMarker'),
            require('./src/remark/scrapedAttributes'),
          ],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          // Use require.resolve to avoid path resolution quirks across environments.
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
