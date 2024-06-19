"use strict";

import { MarkdownLexer, MarkdownParser } from "../index";

import { EMPTY_STRING } from "./constants";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

export const DEFAULT_PATH = "default.md";

export default function importer(filePath, context) {
  const content = contentMap[filePath] || null;

  if (content !== null) {
    const startOfContent = true,
          startRule = markdownParser.getStartRule(),
          tokens = markdownLexer.tokenise(content),
          node = markdownParser.parse(tokens, startRule, startOfContent),
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

const CONTENT_PATH = "content.md",
      CONTENTS_PATH = "contents.md",
      HALF_TITLE_PATH = "half-title.md",
      FRONT_MATTER_PATH = "front-matter.md",
      INTRODUCTION_PATH = "introduction.md",
      GETTING_STARTED_PATH = "getting-started.md",
      INSTALLING_THE_CLI_PATH = "installing-the-cli.md",
      GETTING_TO_GRIPS_WITH_THE_IDE_PATH = "getting-to-grips-with-the-ide.md";

const defaultContent = `@embed ${FRONT_MATTER_PATH}
@embed ${CONTENT_PATH}`,

      contentContent = `@embed ${INTRODUCTION_PATH}
@embed ${GETTING_STARTED_PATH}`,

      contentsContent = `## Contents

@contents`,

      halfTitleContent = `# Occam`,

      frontMatterContent = `@embed ${HALF_TITLE_PATH}
@embed ${CONTENTS_PATH}`,

      introductionContent = `# Introduction
      
A short paragraph.`,

      gettingStartedContent = `# Getting started
      
Another short paragraph.
      
@embed ${INSTALLING_THE_CLI_PATH}
@embed ${GETTING_TO_GRIPS_WITH_THE_IDE_PATH}`,

      installingTheCLIContent = `## Installing the CLI`,

      gettingToGripsWithTheIDEIContent = `## Getting to grips with the IDE`;

const contentMap = {

  [DEFAULT_PATH]: defaultContent,
  [CONTENT_PATH]: contentContent,
  [CONTENTS_PATH]: contentsContent,
  [HALF_TITLE_PATH]: halfTitleContent,
  [FRONT_MATTER_PATH]: frontMatterContent,
  [INTRODUCTION_PATH]: introductionContent,
  [GETTING_STARTED_PATH]: gettingStartedContent,
  [INSTALLING_THE_CLI_PATH]: installingTheCLIContent,
  [GETTING_TO_GRIPS_WITH_THE_IDE_PATH]: gettingToGripsWithTheIDEIContent

};
