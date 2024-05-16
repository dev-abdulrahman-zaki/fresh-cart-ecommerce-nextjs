module.exports = {
  images: {
    loader: 'custom',
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
