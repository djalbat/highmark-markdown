"use strict";

import { contentFromNode } from "../utilities/content";

function content(context) {
  const node = this, ///
        content = contentFromNode(node, context);

  return content;
}

const contentMixins = {
  content
};

export default contentMixins;
