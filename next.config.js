const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'Saraswotikhadka.com.np',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'Saraswotikhadka.com.np',  // Add this line for media2.dev.to
        pathname: '**',
      },
    ],
  },
}
