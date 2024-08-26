/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol:'https',hostname:'lovely-flamingo-139.convex.cloud'}
        ]
    },
    typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
