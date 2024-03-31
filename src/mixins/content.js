"use strict";

import { contentFromMarkdownNodes } from "../utilities/content";

function content(context, trimmed = true) {
  const markdownNode = this, ///
        markdownNodes = [
          markdownNode
        ],
        content = contentFromMarkdownNodes(markdownNodes, context, trimmed);

  return content;
}

const contentMixins = {
  content
};

export default contentMixins;
