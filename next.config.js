const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins([optimizedImages], { target: 'serverless' },);

module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
        }
        return config;
      },
    images: {
        disableStaticImages: true
    },
}
