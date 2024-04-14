"use strict";

import { contentFromMarkdownNodes } from "../utilities/content";

function content(context, leftTrimmed = true, rightTrimmed = true) {
  const markdownNode = this, ///
        markdownNodes = [
          markdownNode
        ],
        content = contentFromMarkdownNodes(markdownNodes, context, leftTrimmed, rightTrimmed);

  return content;
}

const contentMixins = {
  content
};

export default contentMixins;
