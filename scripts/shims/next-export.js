"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true,
});
Object.defineProperty(exports, "nextExport", {
  enumerable: true,
  get: function () {
    return nextExport;
  },
});
const nextExport = async () => {
  console.log(
    "Skipping deprecated `next export` because static assets are already generated during `next build` when `output: \"export\"` is enabled."
  );
};
