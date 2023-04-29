/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['bcrypt'],
  },
}

module.exports = nextConfig


// In next.js, use middleware to block access to pages
// Middleware is something that sits in the middle of a final destination. 
// It's typically referenced for actions that happen between 
// client and server parsing
// Next.js middleware allows 2 different run times when it comes to node
// 