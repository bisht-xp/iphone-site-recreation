/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: `/_next/static/videos/`,
            outputPath: `${isServer ? "../" : ""}static/videos/`,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
