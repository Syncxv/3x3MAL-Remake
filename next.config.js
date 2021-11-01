/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  reactStrictMode: true,
  // swcMinify: true,
  presets: ["next/babel"],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
}
