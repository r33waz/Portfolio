/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media1.tenor.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
