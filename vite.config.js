import { resolve } from "path";
export default {
  base: "/elvina/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        redisign: resolve(__dirname, "redisign.html"),
        order: resolve(__dirname, "order.html"),
        mobile: resolve(__dirname, "mobile.html"),
      },
    },
  },
};
