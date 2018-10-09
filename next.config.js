module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://khanhtrancse.github.io/my-blog/' : '',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
}