const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = defineConfig({
    transpileDependencies: ["vuetify"],
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@cmps", resolve("src/components"))
            .set("@views", resolve("src/views"))
            .set("@store", resolve("src/store"))
            .set("@api", resolve("src/api"))
            .set("@", resolve("src"));
    },
    pwa: {
        name: "Beauty Shield",
        themeColor: "#fbfbfb",
    },
});
