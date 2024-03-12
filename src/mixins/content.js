"use strict";

import { contentFromMarkdownNodes } from "../utilities/content";

function getContent(context) {
  const markdownNode = this, ///
        markdownNodes = [
          markdownNode
        ],
        content = contentFromMarkdownNodes(markdownNodes, context);

  return content;
}

const contentMixins = {
  getContent
};

export default contentMixins;
