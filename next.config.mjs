/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        pathname: "/images/I/**",
      },
      {
        protocol: "https",
        hostname: "litbooks.com.my",
        port: "",
        pathname: "/wp-content/uploads/**", // <-- correct path
      },
    ],
  },
};

export default nextConfig;
