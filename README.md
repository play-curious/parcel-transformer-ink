# Parcel Transformer for ink scripts

This transformer compiles [ink](https://www.inklestudios.com/ink/) scripts into their JSON form, which you can then load into [inkjs](https://github.com/y-lohse/inkjs).

## Getting Started

Install it with your favorite package manager: `yarn add -D parcel-transformer-ink` or `npm i -D parcel-transformer-ink`.

Make sure you have `inkjs` installed as well, or the compilation won't work.

Then include the transformer in your `.parcelrc`. In this example, we assume that the script has a `.ink` extension:

```json
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "*.ink": ["parcel-transformer-ink"]
  }
}
```

In your game, you can then load scripts like any other asset:

```js
import * as inkjs from "inkjs";

// @ts-ignore
import myScript from "../scripts/my-script.ink";

const story = new inkjs.Story(myScript);
console.log(story.Continue());
```
