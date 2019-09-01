module.exports = {
  devServer: {
    proxy: [{
      '/api': {
        target: 'https://localshot:9530/api/v1',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    "https://localhost"]
  }
}
