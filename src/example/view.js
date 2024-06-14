"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { MarkdownLexer, MarkdownParser, MarkdownStyleLexer, MarkdownStyleParser } from "../index";
import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv, HorizontalSplitterDiv } from "easy-layout";

import HTMLDiv from "./view/div/html";
import PreviewDiv from "./view/div/preview";
import SubHeading from "./view/subHeading";
import CSSTextarea from "./view/textarea/css";
import TabButtonsDiv from "./view/div/tabButtons";
import LeftSizeableDiv from "./view/div/sizeable/left";
import RightSizeableDiv from "./view/div/sizeable/right";
import MarkdownContainerDiv from "./view/div/container/markdown";
import MarkdownStyleContainerDiv from "./view/div/container/markdownStyle";

import { postprocess } from "../utilities/markdown";
import { LINES_PER_PAGE, CHARACTERS_PER_LINE, INTRODUCTION_CLASS_NAME } from "./constants";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing(),
      markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

class View extends Element {
  markdownStyleCustomHandler = (event, element) => {
    this.markdownStyle();
  }

  pageUpdateCustomHandler = (event, element, index) => {
    this.clearPage();

    this.updatePage(index);
  }

  markdownCustomHandler = (event, element) => {
    this.markdown();
  }

  keyUpCustomHandler = (event, element) => {
    this.update();
  }

  updateMarkdownStyle() {
    const { markdownStyleElement } = this.properties,
          markdownStyle = this.getMarkdownStyle(),
          css = markdownStyleElement.update(markdownStyle);

    this.setCSS(css);

    const lexer = markdownStyleLexer, ///
          parser = markdownStyleParser, ///
          content = markdownStyle,  ///
          tokens = lexer.tokenise(content),
          startRule = parser.getStartRule(),
          startOfContent = true,
          node = parser.parse(tokens, startRule, startOfContent);

    if (node !== null) {
      const parseTree = node.asParseTree(tokens);

      this.updateMarkdownStyleParseTreeTextarea(parseTree);
    } else {
      this.clearMarkdownStyleParseTreeTextarea();
    }
  }

  updateMarkdown() {
    const markdown = this.getMarkdown(),
          lexer = markdownLexer,  ///
          parser =  markdownParser, ///
          content = markdown, ///
          startOfContent = true,
          startRule = parser.getStartRule(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens, startRule, startOfContent);

    this.setTokens(tokens);

    if (node !== null) {
      const divisionClassName = INTRODUCTION_CLASS_NAME,
            divisionMarkdownNode = node;  ///

      divisionMarkdownNode.setDivisionClassName(divisionClassName);

      const linesPerPage = LINES_PER_PAGE,
            charactersPerLine = CHARACTERS_PER_LINE,
            context = {
              tokens,
              importer,
              linesPerPage,
              charactersPerLine
            },
            divisionMarkdownNodes = postprocess(divisionMarkdownNode, context);

      this.setDivisionMarkdownNodes(divisionMarkdownNodes);

      const index = 0,
            length = divisionMarkdownNodes.length,
            parseTree = divisionMarkdownNode.asParseTree(tokens);

      this.updatePage(index);

      this.updatePageButtonsDiv(length);

      this.updateMarkdownParseTreeTextarea(parseTree);
    } else {
      this.clearPage();

      this.clearPageButtonsDiv();

      this.clearMarkdownParseTreeTextarea();

      const divisionMarkdownNodes = null;

      this.setDivisionMarkdownNodes(divisionMarkdownNodes);
    }
  }

  updatePage(index) {
    const length = null;

    this.updatePageButtonsDiv(length, index);

    const divisionMarkdownNodes = this.getDivisionMarkdownNodes(),
          divisionMarkdownNode = divisionMarkdownNodes[index],
          pageNumber = index + 1,
          tokens = this.getTokens(),
          context = {
            tokens
          };

    Object.assign(context, {
      pageNumber
    });

    const html = divisionMarkdownNode.asHTML(context),
          domElement = divisionMarkdownNode.createDOMElement(context);

    this.updateXMP(html);

    this.updatePreviewDiv(domElement);
  }

  clearPage() {
    this.clearXMP();

    this.clearPreviewDiv();
  }

  markdownStyle() {
    this.hideMarkdownContainerDiv();
    this.showMarkdownStyleContainerDiv();
  }

  markdown() {
    this.showMarkdownContainerDiv();
    this.hideMarkdownStyleContainerDiv();
  }

  update() {
    this.updateMarkdown();
    this.updateMarkdownStyle();
  }

  getTokens() {
    const { tokens } = this.getState();

    return tokens;
  }

  setTokens(tokens) {
    this.updateState({
      tokens
    });
  }

  getDivisionMarkdownNodes() {
    const { divisionMarkdownNodes } = this.getState();

    return divisionMarkdownNodes;
  }

  setDivisionMarkdownNodes(divisionMarkdownNodes) {
    this.updateState({
      divisionMarkdownNodes
    });
  }

  setInitialState() {
    const tokens = null,
          divisionMarkdownNodes = null;

    this.setState({
      tokens,
      divisionMarkdownNodes
    });
  }

  childElements() {
    return (

      <ColumnsDiv>
        <LeftSizeableDiv>
          <TabButtonsDiv onCustomMarkdown={this.markdownCustomHandler} onCustomMarkdownStyle={this.markdownStyleCustomHandler} />
          <MarkdownContainerDiv onCustomKeyUp={this.keyUpCustomHandler} />
          <MarkdownStyleContainerDiv onCustomKeyUp={this.keyUpCustomHandler} />
        </LeftSizeableDiv>
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <RightSizeableDiv>
              <SubHeading>
                HTML
              </SubHeading>
              <HTMLDiv/>
            </RightSizeableDiv>
            <HorizontalSplitterDiv/>
            <RowDiv>
              <RowsDiv>
                <SubHeading>
                  CSS
                </SubHeading>
                <CSSTextarea/>
                <SubHeading>
                  Preview
                </SubHeading>
                <PreviewDiv onCustomPageUpdate={this.pageUpdateCustomHandler} />
              </RowsDiv>
            </RowDiv>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    );
  }

  initialise() {
    this.assignContext();

    this.setInitialState();

    const { initialMarkdown, initialMarkdownStyle } = this.constructor,
          markdownStyle = initialMarkdownStyle, ///
          markdown = initialMarkdown; ///

    this.setMarkdown(markdown);

    this.setMarkdownStyle(markdownStyle);

    this.update();
  }

  static tagName = "div";

  static ignoredProperties = [
    "markdownStyleElement"
  ];

  static defaultProperties = {
    className: "view"
  };

  static initialMarkdown = `# Introduction
  
@embed paragraph.md  

This book also goes into considerable detail on the subject of Occam's approach to language, which largely boils down to its use of grammars.
Occam has its own language, called Florence,[^florence] but it will also support controlled natural languages in the near future.
Indeed, the verifier cannot distinguish between these languages at all.
This book explains how this is possible.

After explaining Occam's approach to language this book gives a very detailed explanation of how the verifier works.
Some may find this nauseating but I maintain that it is essential.
The whole idea behind Occam is to facilitate human reasoning and not to supplant it, and it is the verifier that reasons on your behalf.
So you must understand how it works.
In fact I recommend that you read the introduction together with the first four chapters of the Foundations book before going much further with this one.
They are neither very long nor very deep and will provide the necessary background for understanding the verifier in particular.

I hope that the verifier's implenentation is both transparent and readable, and therefore understandable, especially augmented as it is with the explanation here.
Apart from anything else even a partial understanding will likely save a good deal of frustration when you begin to work seriously with Occam.
The other reason for understanding the verifier is that it has not been verified itself.
So you cannot simply press a button and have confidence in it, that is not the idea at all.

In fact, at the risk of courting controversy, I would argue that it should not be the idea with any verifier.
All are failible regardless of what their proponents may claim and therefore I do not believe that their results should ever be trusted without some level of human oversight.
Indeed in my opinion verification should be an aid to clarity and rigour and never a substitute for it.
The idea of a proof as a black box in particular is anathema to me.

Moving on, the standpoint that software should be an aid to human reasonibg and not a substitute for it must these days be tempered by a consideration of artificial intelligence as a tool for reasoning.
What inspired me over the near decade of work that it took to get Occam to its first viable release was a firm belief in what I call the four elephants, expounded in the four chapters of the aforementioned Foundations book.
I had not heard of large language models when I started out and they were never a motivating factor, but as I came to my first milestone after those many years, they began to loom large.

The resurgence of artificial intelligence in recent years has hardly changed my views on automated reasoning, however.
Admittedly of late there has been some progress in the direction of coupling artificial intelligence with formal reasoning systems.
But for its part Occam only has a bearing on the right hand side of this coupling.
However on the left hand side, it is importtant to note that the output of potentially any large language model or such like can serve as input for Occam.

Thus the panacea of using computers as tools for symbolic reasoning, be that devising algorithms or protocols; discovering new mathematics or logic; or whatever, is almost upon us.
And it is worth pointing out that this panacea has been eagerly anticipated for around seventy five years now.
There is no doubt that artificial intelligence is on the verge of bringing all of this about, but without tools such as Occam the output of artificial intelligence models will always be clouded in doubt.

Finally I should mention Highmark, wihch is a new document preparation system developed in tandem with Occam.
It is a necessary intermediate step in working towards Occam's support for controlled natural languages but I hope that in the long run it will succeed in its own right.
Both this book and the Foundations book were written using Highmark and it may well turn out that more people use Occam for working with it than for reasoning.
There is therefore a chapter dedicated to it immediately after the chapter on getting to grips with the IDE.
And if you are using Occam to work exclusively with Highmark then please do not be daunted by the formal reasoning side of things, you can safely ignore it, and rest assured that support for Highmark will always be included.

To conclude, I hope that in the coming years at least some people will come to see Occam as an indespensible tool for symbolic reasoning.
Amongst other things it will enable them to leverage artificial intelligence to aid their own intellectual enquiries.
However artificial intelligence will not, at least not in the foreseeable future, supplant them.

[^occam]: The word Occam is used somewhat nebulously here.
It is most often associated with Occam's IDE but in fact it encompasses a range of software and services.
This book explains these divers parts and there is a companion book, called The Foundations of Symbolic Reasoning, that covers the underlying theory.

[^florence]: Occam was originally called Florence but the former seemed more apt.

@footnotes

@pageNumber
`;

  static initialMarkdownStyle = `width: 100%;
position: absolute;
min-height: 100%;  
padding-top: 5rem;  
`;
}

export default withStyle(View)`

  padding: 1rem;
  
`;

function importer(filePath, context) {
  const content = `

I have tried to make Occam[^occam] as useable as possible but there are limits.
At the end of the day it is an expert system and some of its parts, not least the verifier, need detailed explanation.
It is the purpose of this book is to provide these explanations.
  
`,
        startOfContent = true,
        startRule = markdownParser.getStartRule(),
        tokens = markdownLexer.tokenise(content),
        node = markdownParser.parse(tokens, startRule, startOfContent),
        importedNode = node,  ///
        importedTokens = tokens,
        importedClassName = "introduction";

  Object.assign(context, {
    importedNode,
    importedTokens,
    importedClassName
  });
}
