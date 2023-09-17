/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/managetexts',
            destination: '/managetexts/add',
          },
        ]
      },
      output:"standalone"
}

module.exports = nextConfig
