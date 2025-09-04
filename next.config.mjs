/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            new URL('http://localhost:4000/file-bucket/**'),
            new URL('https://landrup-dans-api-ghwx.onrender.com/file-bucket/**'),
        ],
    },
};

export default nextConfig;
