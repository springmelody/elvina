import { resolve } from "path";
export default {
  base: "/elvina/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        redesign: resolve(__dirname, "redesign.html"),
        order: resolve(__dirname, "order.html"),
        mobile: resolve(__dirname, "mobile.html"),
      },
    },
  },
};
