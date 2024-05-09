"use strict";

const { Transformer } = require("@parcel/plugin");
const { Compiler } = require("inkjs");

module.exports = new Transformer({
  async transform({ asset, config }) {
    // Load the source
    const source = await asset.getCode();

    // Compile it
    const compiler = new Compiler(source);
    const result = compiler.Compile().ToJson();

    // Update the asset and return it
    asset.type = "json";
    asset.setCode(result);
    return [asset];
  },
});
