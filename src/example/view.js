"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { nodeUtilities } from "occam-dom";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { MarkdownLexer, MarkdownParser, MarkdownStyleLexer, MarkdownStyleParser } from "../index";

import queries from "../queries";
import importer from "./importer";
import PageButtonsDiv from "./view/div/pageButtons";
import LeftSizeableDiv from "./view/div/sizeable/left";
import CSSContainerDiv from "./view/div/container/css";
import HTMLContainerDiv from "./view/div/container/html";
import LeftTabButtonsDiv from "./view/div/tabButtons/left";
import RightTabButtonsDiv from "./view/div/tabButtons/right";
import ClassFromOuterNode from "../classFromOuterNode";
import PreviewContainerDiv from "./view/div/container/preview";
import MarkdownContainerDiv from "./view/div/container/markdown";
import PlainTextContainerDiv from "./view/div/container/plainText";
import MarkdownStyleContainerDiv from "./view/div/container/markdownStyle";
import InnerMarkdownParseTreeTextarea from "./view/textarea/parseTree/markdown/inner";

import { resolve } from "../utilities/markdown";
import { postProcess } from "../utilities/html";
import { initialMarkdown } from "./importer";
import { nodesFromNodeAndQueries } from "../utilities/query";

const { topmostNodeFromOuterNodes } = nodeUtilities;

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
    this.clearInnerMarkdownParseTreeTextarea();
  }

  updatePage(index = 0) {
    return;

    const topmostMarkdownNode = this.getTopmostMarkdownNode(),
          tokens = this.getTokens(),
          context = {
            tokens,
            pathToURL
          },
          divisionMarkdownNode = topmostMarkdownNode[index],
          node = divisionMarkdownNode,  ///
          nodes = nodesFromNodeAndQueries(node, queries),
          topmostHTMLNode = topmostNodeFromOuterNodes(ClassFromOuterNode, nodes);

    this.updateXMP(topmostHTMLNode, context);

    this.updatePreviewDiv(topmostHTMLNode, context);

    this.updatePlainTextTextarea(topmostHTMLNode, context);

    const length = null,
          parseTree = topmostHTMLNode.asParseTree(),
          innerMarkdownParseTree = parseTree; ///

    this.updatePageButtonsDiv(length, index);

    this.updateInnerMarkdownParseTreeTextarea(innerMarkdownParseTree);
  }

  updateMarkdown() {
    const markdown = this.getMarkdown(),
          lexer = markdownLexer,  ///
          parser =  markdownParser, ///
          content = markdown, ///
          startRule = parser.getStartRule(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens, startRule);

    if (node === null) {
      this.resetTokens();

      this.resetTopmostMarkdownNode();

      this.clearOuterMarkdownParseTreeTextarea();

      this.clearPageButtonsDiv();

      this.clearPage();

      return;
    }

    const divisionMarkdownNode = node,  ///
          context = {
            tokens,
            importer,
            nodeFromTokens,
            tokensFromContent
          },
          topmostMarkdownNode = resolve(divisionMarkdownNode, context);

    if (topmostMarkdownNode === null) {
      this.resetTokens();

      this.resetTopmostMarkdownNode();

      this.clearOuterMarkdownParseTreeTextarea();

      this.clearPageButtonsDiv();

      this.clearPage();

      return;
    }

    const parseTree = topmostMarkdownNode.asParseTree(tokens),
          outerMarkdownParseTree = parseTree; ///

    this.setTokens(tokens);

    this.setTopmostMarkdownNode(topmostMarkdownNode);

    this.updateOuterMarkdownParseTreeTextarea(outerMarkdownParseTree);

    this.updatePage();
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

  resetTokens() {
    const tokens = null;

    this.setTokens(tokens);
  }

  resetTopmostMarkdownNode() {
    const topmostMarkdownNode = null;

    this.setTopmostMarkdownNode(topmostMarkdownNode);
  }

  getTokens() {
    const { tokens } = this.getState();

    return tokens;
  }

  getTopmostMarkdownNode() {
    const { topmostMarkdownNode } = this.getState();

    return topmostMarkdownNode;
  }

  setTokens(tokens) {
    this.updateState({
      tokens
    });
  }

  setTopmostMarkdownNode(topmostMarkdownNode) {
    this.updateState({
      topmostMarkdownNode
    });
  }

  setInitialState() {
    const tokens = null,
          topmostMarkdownNode = null;

    this.setState({
      tokens,
      topmostMarkdownNode
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
            <PageButtonsDiv onCustomPageUpdate={this.pageUpdateCustomHandler} />
            <CSSContainerDiv/>
            <HTMLContainerDiv/>
            <PreviewContainerDiv/>
            <PlainTextContainerDiv/>
            <InnerMarkdownParseTreeTextarea/>
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

  static initialMarkdown = initialMarkdown;

  static initialMarkdownStyle = `width: 100%;
height: 100%;
font-size: 2rem;  

blockListing {
  colour: white;
  text-align: left;
  font-family: monospace;
  background-colour: black;
}
`;

  static tagName = "div";

  static ignoredProperties = [
    "markdownStyleElement"
  ];

  static defaultProperties = {
    className: "view"
  };
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

function pathToURL(path) {
  const url = `https://static.djalbat.com/${path}`;

  return url;
}
