"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { MarkdownLexer, MarkdownParser, MarkdownStyleLexer, MarkdownStyleParser } from "../index";

import importer from "./importer";
import indexOptions from "./indexOptions";
import LeftSizeableDiv from "./view/div/sizeable/left";
import CSSContainerDiv from "./view/div/container/css";
import HTMLContainerDiv from "./view/div/container/html";
import LeftTabButtonsDiv from "./view/div/tabButtons/left";
import RightTabButtonsDiv from "./view/div/tabButtons/right";
import PreviewContainerDiv from "./view/div/container/preview";
import MarkdownContainerDiv from "./view/div/container/markdown";
import PlainTextContainerDiv from "./view/div/container/plainText";
import MarkdownStyleContainerDiv from "./view/div/container/markdownStyle";

import { defaultContent } from "./importer";
import { LINES_PER_PAGE, CONTENTS_DEPTH, CHARACTERS_PER_LINE } from "./constants";
import { postprocess, divisionMarkdownNodesFromMarkdownNodes } from "../utilities/processing";

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

  plainTextCustomHandler = (event, element) => {
    this.plainText();
  }

  markdownCustomHandler = (event, element) => {
    this.markdown();
  }

  previewCustomHandler = (event, element) => {
    this.preview();
  }

  keyUpCustomHandler = (event, element) => {
    this.update();
  }

  htmlCustomHandler = (event, element) => {
    this.html();
  }

  cssCustomHandler = (event, element) => {
    this.css();
  }

  update() {
    this.updateMarkdown();
    this.updateMarkdownStyle();
  }

  clearPage() {
    this.clearXMP();
    this.clearPreviewDiv();
  }

  updatePage(index) {
    const divisionMarkdownNodes = this.getDivisionMarkdownNodes(),
          divisionMarkdownNode = divisionMarkdownNodes[index],
          tokens = this.getTokens(),
          context = {
            tokens
          },
          length = null,
          html = divisionMarkdownNode.asHTML(context),
          plainText = divisionMarkdownNode.asPlainText(context);

    this.updateXMP(html);

    this.updatePreviewDiv(divisionMarkdownNode, context);

    this.updatePageButtonsDiv(length, index);

    this.updatePlainTextTextarea(plainText);
  }

  updateMarkdown() {
    const markdown = this.getMarkdown(),
          lexer = markdownLexer,  ///
          parser =  markdownParser, ///
          content = markdown, ///
          startRule = parser.getStartRule(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens, startRule);

    this.setTokens(tokens);

    if (node !== null) {
      const divisionMarkdownNode = node,  ///
            charactersPerLine = CHARACTERS_PER_LINE,
            contentsDepth = CONTENTS_DEPTH,
            linesPerPage = LINES_PER_PAGE,
            context = {
              tokens,
              importer,
              indexOptions,
              linesPerPage,
              contentsDepth,
              nodeFromTokens,
              tokensFromContent,
              charactersPerLine
            },
            markdownNodes = postprocess(divisionMarkdownNode, context),
            divisionMarkdownNodes = divisionMarkdownNodesFromMarkdownNodes(markdownNodes);

      this.setDivisionMarkdownNodes(divisionMarkdownNodes);

      const parseTree = divisionMarkdownNode.asParseTree(tokens);

      this.updateMarkdownParseTreeTextarea(parseTree);

      const index = 0,
            length = divisionMarkdownNodes.length;

      if (length > 0) {
        this.updatePage(index);

        this.updatePageButtonsDiv(length);
      }
    } else {
      this.clearPage();

      this.clearPageButtonsDiv();

      this.clearPlainTextTextarea();

      this.clearMarkdownParseTreeTextarea();

      const divisionMarkdownNodes = null;

      this.setDivisionMarkdownNodes(divisionMarkdownNodes);
    }
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
          node = parser.parse(tokens, startRule);

    if (node !== null) {
      const parseTree = node.asParseTree(tokens);

      this.updateMarkdownStyleParseTreeTextarea(parseTree);
    } else {
      this.clearMarkdownStyleParseTreeTextarea();
    }
  }

  markdownStyle() {
    this.hideMarkdownContainerDiv();
    this.showMarkdownStyleContainerDiv();
  }

  plainText() {
    this.hideCSSContainerDiv();
    this.hideHTMLContainerDiv();
    this.hidePreviewContainerDiv();
    this.showPlainTextContainerDiv();
  }

  markdown() {
    this.showMarkdownContainerDiv();
    this.hideMarkdownStyleContainerDiv();
  }

  preview() {
    this.hideCSSContainerDiv();
    this.hideHTMLContainerDiv();
    this.showPreviewContainerDiv();
    this.hidePlainTextContainerDiv();
  }

  html() {
    this.hideCSSContainerDiv();
    this.showHTMLContainerDiv();
    this.hidePreviewContainerDiv();
    this.hidePlainTextContainerDiv();
  }

  css() {
    this.showCSSContainerDiv();
    this.hideHTMLContainerDiv();
    this.hidePreviewContainerDiv();
    this.hidePlainTextContainerDiv();
  }

  getTokens() {
    const { tokens } = this.getState();

    return tokens;
  }

  getDivisionMarkdownNodes() {
    const { divisionMarkdownNodes } = this.getState();

    return divisionMarkdownNodes;
  }

  setTokens(tokens) {
    this.updateState({
      tokens
    });
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
          <LeftTabButtonsDiv onCustomMarkdown={this.markdownCustomHandler} onCustomMarkdownStyle={this.markdownStyleCustomHandler} />
          <MarkdownContainerDiv onCustomKeyUp={this.keyUpCustomHandler} />
          <MarkdownStyleContainerDiv onCustomKeyUp={this.keyUpCustomHandler} />
        </LeftSizeableDiv>
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <RightTabButtonsDiv onCustomCSS={this.cssCustomHandler}
                                onCustomHTML={this.htmlCustomHandler}
                                onCustomPreview={this.previewCustomHandler}
                                onCustomPlainText={this.plainTextCustomHandler}
            />
            <CSSContainerDiv/>
            <HTMLContainerDiv/>
            <PreviewContainerDiv onCustomPageUpdate={this.pageUpdateCustomHandler} />
            <PlainTextContainerDiv/>
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

    this.css();
  }

  static tagName = "div";

  static ignoredProperties = [
    "markdownStyleElement"
  ];

  static defaultProperties = {
    className: "view"
  };

  static initialMarkdown = defaultContent;  ///

  static initialMarkdownStyle = `

width: 100%;
height: 199%;  
position: absolute;
min-height: 100%;  
padding-top: 5rem;  

`;
}

export default withStyle(View)`

  padding: 1rem;
  
`;

function tokensFromContent(content) {
  const tokens = markdownLexer.tokenise(content);

  return tokens;
}

function nodeFromTokens(tokens, startRuleName = null) {
  const ruleMap = markdownParser.getRuleMap(),
        startRule = (startRuleName !== null) ?
                      ruleMap[startRuleName] :
                        markdownParser.getStartRule(),
        node = markdownParser.parse(tokens, startRule);

  return node;
}
