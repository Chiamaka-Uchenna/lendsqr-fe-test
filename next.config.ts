import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  trailingSlash: true,

  // Webpack configuration
  webpack: (config) => {
    // Add rules for handling SVGs
    config.module.rules.push(
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "public/assets/icons"), // Specify the directory for icons
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "public/assets/images"), // Specify the directory for images
        type: "asset/resource", // This will handle SVGs in this directory as images
      }
    );

    return config;
  },
};

export default nextConfig;
