module.exports = {
  images: {
    loader: ({ src }) => {
      return src;
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",
        port: "",
        pathname: "/Route-Academy-products/**",
      },
    ],
  },
};
