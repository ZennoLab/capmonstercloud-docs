module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin',
    loadContent: async () => {
      return {remoteHeadTags: await fetchHeadTagsFromAPI()};
    },
    injectHtmlTags({content}) {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.github.com',
            },
          },
          ...content.remoteHeadTags,
        ],
        preBodyTags: [
          {
            tagName: 'script',
            attributes: {
              charset: 'utf-8',
              src: '/noflash.js',
            },
          },
        ],
        postBodyTags: [`<div> This is post body </div>`],
      };
    },
  };
};