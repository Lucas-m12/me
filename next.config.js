/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: [
			'source.unsplash.com',
			'images.unsplash.com',
			'unsplash.com'
		],

	}
}

module.exports = nextConfig
