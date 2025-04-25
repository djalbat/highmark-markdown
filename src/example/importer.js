"use strict";

import { MarkdownLexer, MarkdownParser } from "../index";

import { EMPTY_STRING } from "./constants";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

export function importer(filePath, context) {
  const content = contentMap[filePath] || null;

  if (content !== null) {
    const startRule = markdownParser.getStartRule(),
          tokens = markdownLexer.tokenise(content),
          node = markdownParser.parse(tokens, startRule),
          importedNode = node,  ///
          importedTokens = tokens,
          importedClassName = classNameFromFilePath(filePath);

    Object.assign(context, {
      importedNode,
      importedTokens,
      importedClassName
    });
  }
}

function classNameFromFilePath(filePath) {
  const className = filePath.replace(/\.md/, EMPTY_STRING);

  return className;
}

const INDEX_PATH = "index.md",
      CONTENT_PATH = "content.md",
      CONTENTS_PATH = "contents.md",
      HALF_TITLE_PATH = "half-title.md",
      FRONT_MATTER_PATH = "front-matter.md",
      INTRODUCTION_PATH = "introduction.md",
      GETTING_STARTED_PATH = "getting-started.md",
      INSTALLING_THE_CLI_PATH = "installing-the-cli.md",
      GETTING_TO_GRIPS_WITH_THE_IDE_PATH = "getting-to-grips-with-the-ide.md";

export const initialMarkdown = `@ignore 

@include ${FRONT_MATTER_PATH}
`;

const indexContent = `## Index

@index`,

      contentContent = `@ignore

@include ${INTRODUCTION_PATH}
@include ${GETTING_STARTED_PATH}`,

      contentsContent = `## Contents

@contents`,

      halfTitleContent = `# Occam`,

      frontMatterContent = `@ignore

@include ${HALF_TITLE_PATH}
@include ${CONTENTS_PATH}`,

      introductionContent = `# Introduction
      
Constructor.

@footnotes

@pageNumber
`,

      gettingStartedContent = `# Getting started
      
Another short paragraph with a reference to a footnote[^occam].

[^occam]: The word Occam is used somewhat nebulously here.
It is most often associated with Occam's IDE but in fact it encompasses a range of software and services.
This book explains these divers parts and there is a companion book, called The Foundations of Symbolic Reasoning, that covers the underlying theory.

@footnotes

@embed ${INSTALLING_THE_CLI_PATH}
@embed ${GETTING_TO_GRIPS_WITH_THE_IDE_PATH}

@pageNumber
`,

      installingTheCLIContent = `## Installing the CLI
`,

      gettingToGripsWithTheIDEIContent = `## Getting to grips with the IDE
            
* An unordered list to test...
* ...the indexing.
      
1. As well as an...
2. ...ordered list.
      
`;

const contentMap = {

  [INDEX_PATH]: indexContent,
  [CONTENT_PATH]: contentContent,
  [CONTENTS_PATH]: contentsContent,
  [HALF_TITLE_PATH]: halfTitleContent,
  [FRONT_MATTER_PATH]: frontMatterContent,
  [INTRODUCTION_PATH]: introductionContent,
  [GETTING_STARTED_PATH]: gettingStartedContent,
  [INSTALLING_THE_CLI_PATH]: installingTheCLIContent,
  [GETTING_TO_GRIPS_WITH_THE_IDE_PATH]: gettingToGripsWithTheIDEIContent

};
