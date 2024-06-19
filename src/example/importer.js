"use strict";

import { MarkdownLexer, MarkdownParser } from "../index";

import { EMPTY_STRING } from "./constants";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

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

export const defaultContent = `@ignore

@include ${FRONT_MATTER_PATH}
@include ${CONTENT_PATH}`;

const contentContent = `@ignore

@include ${INTRODUCTION_PATH}
@include ${GETTING_STARTED_PATH}`,

      contentsContent = `## Contents

@contents`,

      halfTitleContent = `# Occam`,

      frontMatterContent = `@ignore

@include ${HALF_TITLE_PATH}
@include ${CONTENTS_PATH}`,

      introductionContent = `# Introduction
      
I have tried to make Occam[^occam] as useable as possible but there are limits.
At the end of the day it is an expert system and some of its parts, not least the verifier, need detailed explanation.
It is the purpose of this book is to provide these explanations.

This book also goes into considerable detail on the subject of Occam's approach to language, which largely boils down to its use of grammars.
Occam has its own language, called Florence,[^florence] but it will also support controlled natural languages in the near future.
Indeed, the verifier cannot distinguish between these languages at all.
This book explains how this is possible.

[^occam]: The word Occam is used somewhat nebulously here.
It is most often associated with Occam's IDE but in fact it encompasses a range of software and services.
This book explains these divers parts and there is a companion book, called The Foundations of Symbolic Reasoning, that covers the underlying theory.

[^florence]: Occam was originally called Florence but the former seemed more apt.

@footnotes

@pageNumber
`,

      gettingStartedContent = `# Getting started
      
Another short paragraph.
      
@embed ${INSTALLING_THE_CLI_PATH}
@embed ${GETTING_TO_GRIPS_WITH_THE_IDE_PATH}

@pageNumber
`,

      installingTheCLIContent = `## Installing the CLI`,

      gettingToGripsWithTheIDEIContent = `## Getting to grips with the IDE`;

const contentMap = {

  [CONTENT_PATH]: contentContent,
  [CONTENTS_PATH]: contentsContent,
  [HALF_TITLE_PATH]: halfTitleContent,
  [FRONT_MATTER_PATH]: frontMatterContent,
  [INTRODUCTION_PATH]: introductionContent,
  [GETTING_STARTED_PATH]: gettingStartedContent,
  [INSTALLING_THE_CLI_PATH]: installingTheCLIContent,
  [GETTING_TO_GRIPS_WITH_THE_IDE_PATH]: gettingToGripsWithTheIDEIContent

};
