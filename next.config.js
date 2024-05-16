module.exports = {
  images: {
    // loader: 'custom',
    // domains: ['ecommerce.routemisr.com'], // Add the domain here
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
