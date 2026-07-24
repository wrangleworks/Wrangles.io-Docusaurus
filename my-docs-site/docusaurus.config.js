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

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'wrangles',
        path: 'wrangle-docs',
        routeBasePath: 'wrangle',
        sidebarPath: './sidebarsWrangle.js',
        exclude: ['**/_sources/**'],
        remarkPlugins: [
          require('./src/remark/linksListMarker'),
          require('./src/remark/scrapedAttributes'),
        ],
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          exclude: ['**/_sources/**'],
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WrangleWorks',
        items: [
          {
            type: 'custom-wrangleMode',
            position: 'left',
          },
          {
            to: '/playground',
            position: 'left',
            label: 'Playground',
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
