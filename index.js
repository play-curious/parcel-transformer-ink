"use strict";

const { Transformer } = require("@parcel/plugin");
const { Compiler } = require("inkjs");
const {
  PosixFileHandler,
} = require("inkjs/compiler/FileHandler/PosixFileHandler");

module.exports = new Transformer({
  async transform({ asset, config }) {
    // Load the source
    const source = await asset.getCode();

    // Compile it
    const fileHandler = new PosixFileHandler();
    const errorHandler = (message, errorType) => {
      console.error("Ink File Handler: " + message + "\n");
    };
    const compiler = new Compiler(source, { fileHandler, errorHandler });
    const result = compiler.Compile().ToJson();

    // Update the asset and return it
    asset.type = "json";
    asset.setCode(result);
    return [asset];
  },
});
