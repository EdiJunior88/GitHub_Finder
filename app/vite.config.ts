import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import javascriptObfuscator from "rollup-plugin-javascript-obfuscator";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    javascriptObfuscator({
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.4,
      debugProtection: true,
      debugProtectionInterval: true,
      disableConsoleOutput: true,
      identifierNamesGenerator: "hexadecimal",
      log: false,
      renameGlobals: true,
      rotateStringArray: true,
      selfDefending: true,
      shuffleStringArray: true,
      splitStrings: true,
      splitStringsChunkLength: 10,
      stringArray: true,
      stringArrayEncoding: ["base64"],
      stringArrayThreshold: 0.75,
      unicodeEscapeSequence: false,
    }),
  ],
});
