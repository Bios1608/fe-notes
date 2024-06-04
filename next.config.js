/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true
  },
  env: {
    API_AUTH: 'https://autentifikasi-djymdvp6ea-et.a.run.app/',
    API_CRUD: 'https://fp-crud-note-djymdvp6ea-et.a.run.app/',
  }
}

module.exports = nextConfig
