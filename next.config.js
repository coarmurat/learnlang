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
}

module.exports = nextConfig
