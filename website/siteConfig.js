const siteConfig = {
  title: "Type Route", // Title for your website.
  tagline: "A flexible, type safe routing library.",
  url: "https://zilch.dev", // Your website URL
  baseUrl: "/type-route/",

  // Used for publishing and more
  projectName: "type-route",
  organizationName: "zilch",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { search: true },
    { doc: "introduction/getting-started", label: "Docs" },
    { href: "https://github.com/typehero/type-route", label: "GitHub" },
    { doc: "guides/previous-release-docs", label: "v0.6.0" },
    // {
    //   href: "https://zilch.dev/ready-for-production-type-route-v1/01",
    //   label: "Read Introductory Blog Post",
    // },
  ],

  /* path to images for header/footer */
  headerIcon: "img/type-route-logo.svg",
  footerIcon: "img/type-route-logo.svg",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#383751",
    secondaryColor: "#383751",
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} the Type Route documentation authors.`,

  usePrism: ["tsx", "typescript", "bash"],

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["/type-route/js/codesandbox.js", "/type-route/js/site.js"],

  scrollToTop: true,
  scrollToTopOptions: {
    backgroundColor: "#383751",
  },

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  algolia: {
    apiKey: "4a2bd93ab352acbdeac847eb2563ac5e",
    indexName: "type-route",
  },

  gaTrackingId: "UA-170799500-1",
  gaGtag: true,

  editUrl: "https://github.com/zilch/type-route/edit/master/docs/",
};

module.exports = siteConfig;
