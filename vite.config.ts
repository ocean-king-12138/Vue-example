import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock';
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //配置路由别名
    alias: {
      "/@": path.resolve(__dirname, "src"),
      comps: path.resolve(__dirname, "src/components"),
      apis: path.resolve(__dirname, "src/apis"),
      views: path.resolve(__dirname, "src/views"),
      utils: path.resolve(__dirname, "src/utils"),
      routes: path.resolve(__dirname, "src/routes"),
      store: path.resolve(__dirname, "src/store"),
      styles: path.resolve(__dirname, "src/styles"),
      plugins: path.resolve(__dirname, "src/plugins"),
      assets: path.resolve(__dirname, "src/assets"),
    }
  },
  plugins: [vue(), viteMockServe({ supportTs: true })],
  //配置跨域proxy
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "目标域名",
  //       changeOrigin: true,
  //       rewrite:path=>path.replace(/^\/api/,"")
  //     }
  //   }
  // }
})
