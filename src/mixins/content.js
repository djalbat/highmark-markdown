"use strict";

import { contentFromMarkdownNodes } from "../utilities/content";

function content(context) {
  const markdownNode = this, ///
        markdownNodes = [
          markdownNode
        ],
        content = contentFromMarkdownNodes(markdownNodes, context);

  return content;
}

const contentMixins = {
  content
};

export default contentMixins;
