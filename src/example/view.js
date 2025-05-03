"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { MarkdownLexer, MarkdownParser, MarkdownStyleLexer, MarkdownStyleParser } from "../index";

import PageButtonsDiv from "./view/div/pageButtons";
import LeftSizeableDiv from "./view/div/sizeable/left";
import CSSContainerDiv from "./view/div/container/css";
import HTMLContainerDiv from "./view/div/container/html";
import LeftTabButtonsDiv from "./view/div/tabButtons/left";
import RightTabButtonsDiv from "./view/div/tabButtons/right";
import PreviewContainerDiv from "./view/div/container/preview";
import MarkdownContainerDiv from "./view/div/container/markdown";
import PlainTextContainerDiv from "./view/div/container/plainText";
import HTMLParseTreeTextarea from "./view/textarea/parseTree/html";
import MarkdownStyleContainerDiv from "./view/div/container/markdownStyle";

import { htmlNodeFromMarkdownNode } from "../utilities/dom";
import { importer, initialMarkdown } from "./importer";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing(),
      markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

class View extends Element {
  markdownStyleCustomHandler = (event, element) => {
    this.markdownStyle();
  }

  pageUpdateCustomHandler = (event, element, index) => {
    this.updateMarkdown();

    this.updateHTML(index);
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
    this.updateMarkdownStyle();

    this.updateMarkdown();

    this.updateHTML();
  }

  updateHTML(index = 0) {
    const topmostMarkdownNode = this.getTopmostMarkdownNode();

    if (topmostMarkdownNode === null) {
      this.clearXMP();

      this.clearPreviewDiv();

      this.clearPageButtonsDiv();

      this.clearHTMLParseTreeTextarea();

      this.clearMarkdownParseTreeTextarea();

      return;
    }

    const start = 1,
          tokens = this.getTokens(),
          context = {
            tokens,
            pathToURL
          },
          topmostHTMLNode = htmlNodeFromMarkdownNode(topmostMarkdownNode),
          divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index);

    divisionHTMLNOde.resolve(start, context);

    const topmostMarkdownNodeParseTree = topmostMarkdownNode.asParseTree(tokens),
          divisionHTMLNOdeParseTree = divisionHTMLNOde.asParseTree(),
          markdownParseTree = topmostMarkdownNodeParseTree, ///
          htmlParseTree = divisionHTMLNOdeParseTree, ///
          multiplicity = topmostHTMLNode.getMultiplicity(),
          length = multiplicity;  ///

    this.updateXMP(divisionHTMLNOde, context);

    this.updatePreviewDiv(divisionHTMLNOde, context);

    this.updatePageButtonsDiv(length, index);

    this.updatePlainTextTextarea(divisionHTMLNOde, context);

    this.updateHTMLParseTreeTextarea(htmlParseTree);

    this.updateMarkdownParseTreeTextarea(markdownParseTree);
  }

  updateMarkdown() {
    const markdown = this.getMarkdown(),
          lexer = markdownLexer,  ///
          parser =  markdownParser, ///
          content = markdown, ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    if (node === null) {
      this.resetTokens();

      this.resetTopmostMarkdownNode();

      return;
    }

    const topmostMarkdownNode = node, ///
          context = {
            tokens,
            importer,
            nodeFromTokens,
            tokensFromContent
          };

    topmostMarkdownNode.resolve(context);

    this.setTokens(tokens);

    this.setTopmostMarkdownNode(topmostMarkdownNode);
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
            <HTMLContainerDiv/>
            <PreviewContainerDiv/>
            <PlainTextContainerDiv/>
            <CSSContainerDiv/>
            <HTMLParseTreeTextarea/>
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

footnotesList {
  
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
