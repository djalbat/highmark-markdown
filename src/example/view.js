"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { MarkdownLexer, MarkdownParser, MarkdownStyleLexer, MarkdownStyleParser } from "../index";

import indexOptions from "./indexOptions";
import PageButtonsDiv from "./view/div/pageButtons";
import LeftSizeableDiv from "./view/div/sizeable/left";
import CSSContainerDiv from "./view/div/container/css";
import HTMLContainerDiv from "./view/div/container/html";
import LeftTabButtonsDiv from "./view/div/tabButtons/left";
import RightTabButtonsDiv from "./view/div/tabButtons/right";
import PreviewContainerDiv from "./view/div/container/preview";
import MarkdownContainerDiv from "./view/div/container/markdown";
import CSSParseTreeTextarea from "./view/textarea/parseTree/css";
import HTMLParseTreeTextarea from "./view/textarea/parseTree/html";
import PlainTextContainerDiv from "./view/div/container/plainText";
import MarkdownStyleContainerDiv from "./view/div/container/markdownStyle";

import { importer, initialMarkdown } from "./importer";
import { PREVIEWED_DIV_SELECTORS_STRING } from "./constants";
import { topmostHTMLNodeFromMarkdownNode, topmostCSSNodeFromMarkdownStyleNode } from "../utilities/dom";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing(),
      markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

class View extends Element {
  pageUpdateCustomHandler = (event, element, index) => {
    this.updateHTML(index);
  }

  markdownStyleCustomHandler = (event, element) => {
    this.markdownStyle();
  }

  markdownCustomHandler = (event, element) => {
    this.markdown();
  }

  plainTextCustomHandler = (event, element) => {
    this.plainText();
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

    this.updateCSS();
  }

  updateMarkdownStyle() {
    const markdownStyle = this.getMarkdownStyle(),
          lexer = markdownStyleLexer, ///
          parser = markdownStyleParser, ///
          content = markdownStyle,  ///
          tokens = lexer.tokenise(content),
          startRule = parser.getStartRule(),
          node = parser.parse(tokens, startRule);

    if (node === null) {
      this.resetMarkdownStyleTokens();

      this.resetTopmostMarkdownStyleNode();

      this.clearMarkdownStyleParseTreeTextarea();

      return;
    }

    const parseTree = node.asParseTree(tokens),
          markdownStyleTokens = tokens, ///
          topmostMarkdownStyleNode = node; ///

    this.setMarkdownStyleTokens(markdownStyleTokens);

    this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);

    this.updateMarkdownStyleParseTreeTextarea(parseTree);
  }

  updateMarkdown() {
    const markdown = this.getMarkdown(),
          lexer = markdownLexer,  ///
          parser =  markdownParser, ///
          content = markdown, ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    if (node === null) {
      this.resetMarkdownTokens();

      this.resetTopmostMarkdownNode();

      this.clearMarkdownParseTreeTextarea();

      return;
    }

    let context;

    const topmostMarkdownNode = node; ///

    context = {
      tokens,
      importer
    };

    topmostMarkdownNode.resolve(context);

    const topmostMarkdownNodeParseTree = topmostMarkdownNode.asParseTree(tokens),
          markdownParseTree = topmostMarkdownNodeParseTree, ///
          markdownTokens = tokens;  ///

    this.setMarkdownTokens(markdownTokens);

    this.setTopmostMarkdownNode(topmostMarkdownNode);

    this.updateMarkdownParseTreeTextarea(markdownParseTree);
  }

  updateHTML(index = 0) {
    this.clearXMP();

    this.clearPreviewDiv();

    this.clearPlainTextTextarea();

    this.clearHTMLParseTreeTextarea();

    this.clearPageButtonsDiv();

    const topmostMarkdownNode = this.getTopmostMarkdownNode(),
          topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(topmostMarkdownNode);

    if (topmostHTMLNode === null) {
      return;
    }

    let context;

    const markdownTokens = this.getMarkdownTokens(),
          tokens = markdownTokens;  ///

    context = {
      indexOptions,
      tokens
    };

    topmostHTMLNode.resolve(context);

    const divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index);

    if (divisionHTMLNOde === null) {
      return;
    }

    const divisionHTMLNOdeParseTree = divisionHTMLNOde.asParseTree(),
          htmlParseTree = divisionHTMLNOdeParseTree,  ///
          multiplicity = topmostHTMLNode.getMultiplicity(),
          length = multiplicity;

    context = {
      tokens,
      pathToURL
    };

    this.updateXMP(divisionHTMLNOde, context);

    this.updatePreviewDiv(divisionHTMLNOde, context);

    this.updatePlainTextTextarea(divisionHTMLNOde, context);

    this.updateHTMLParseTreeTextarea(htmlParseTree);

    this.updatePageButtonsDiv(length, index);
  }

  updateCSS() {
    const { markdownStyleElement } = this.properties,
          markdownStyle = this.getMarkdownStyle(),
          markdownStyleElementCSS = markdownStyleElement.update(markdownStyle);

    const topmostMarkdownStyleNode = this.getTopmostMarkdownStyleNode();

    if (topmostMarkdownStyleNode === null) {
      return;
    }

    let context;

    const markdownStyleTokens = this.getMarkdownStyleTokens(),
          topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(topmostMarkdownStyleNode),
          tokens = markdownStyleTokens;  ///

    context = {
      tokens
    };

    topmostCSSNode.resolve(context);

    const selectorsString = PREVIEWED_DIV_SELECTORS_STRING;

    context = {
      selectorsString
    };

    const topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens),
          topmostCSSNodeCSS = topmostCSSNode.asCSS(context),
          cssParseTree = topmostCSSNodeParseTree;

    this.updateCSSParseTreeTextarea(cssParseTree);

    const css = `

${markdownStyleElementCSS}    

${topmostCSSNodeCSS}

`;

    this.setCSS(css);
  }

  markdownStyle() {
    this.hideMarkdownContainerDiv();
    this.showMarkdownStyleContainerDiv();
  }

  markdown() {
    this.showMarkdownContainerDiv();
    this.hideMarkdownStyleContainerDiv();
  }

  plainText() {
    this.hideCSSContainerDiv();
    this.hideHTMLContainerDiv();
    this.hidePreviewContainerDiv();
    this.showPlainTextContainerDiv();

    this.hideCSSParseTreeTextarea();
    this.showHTMLParseTreeTextarea();
  }

  preview() {
    this.hideCSSContainerDiv();
    this.hideHTMLContainerDiv();
    this.showPreviewContainerDiv();
    this.hidePlainTextContainerDiv();

    this.hideCSSParseTreeTextarea();
    this.showHTMLParseTreeTextarea();
  }

  html() {
    this.hideCSSContainerDiv();
    this.showHTMLContainerDiv();
    this.hidePreviewContainerDiv();
    this.hidePlainTextContainerDiv();

    this.hideCSSParseTreeTextarea();
    this.showHTMLParseTreeTextarea();
  }

  css() {
    this.showCSSContainerDiv();
    this.hideHTMLContainerDiv();
    this.hidePreviewContainerDiv();
    this.hidePlainTextContainerDiv();

    this.showCSSParseTreeTextarea();
    this.hideHTMLParseTreeTextarea();
  }

  resetMarkdownTokens() {
    const markdownTokens = null;

    this.setMarkdownTokens(markdownTokens);
  }

  resetMarkdownStyleTokens() {
    const markdownStyleTokens = null;

    this.setMarkdownStyleTokens(markdownStyleTokens);
  }

  resetTopmostMarkdownNode() {
    const topmostMarkdownNode = null;

    this.setTopmostMarkdownNode(topmostMarkdownNode);
  }

  resetTopmostMarkdownStyleNode() {
    const topmostMarkdownStyleNode = null;

    this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);
  }

  getMarkdownTokens() {
    const { markdownTokens } = this.getState();

    return markdownTokens;
  }

  getMarkdownStyleTokens() {
    const { markdownStyleTokens } = this.getState();

    return markdownStyleTokens;
  }

  getTopmostMarkdownNode() {
    const { topmostMMarkdownNode } = this.getState();

    return topmostMMarkdownNode;
  }

  getTopmostMarkdownStyleNode() {
    const { topmostMMarkdownStyleNode } = this.getState();

    return topmostMMarkdownStyleNode;
  }

  setMarkdownTokens(markdownTokens) {
    this.updateState({
      markdownTokens
    });
  }

  setMarkdownStyleTokens(markdownStyleTokens) {
    this.updateState({
      markdownStyleTokens
    });
  }

  setTopmostMarkdownNode(topmostMMarkdownNode) {
    this.updateState({
      topmostMMarkdownNode
    });
  }

  setTopmostMarkdownStyleNode(topmostMMarkdownStyleNode) {
    this.updateState({
      topmostMMarkdownStyleNode
    });
  }

  setInitialState() {
    const markdownTokens = null,
          markdownStyleTokens = null,
          topmostMarkdownNode = null,
          topmostMarkdownStyleNode = null;

    this.setState({
      markdownTokens,
      markdownStyleTokens,
      topmostMarkdownNode,
      topmostMarkdownStyleNode
    });
  }

  didMount() {
    this.markdownStyle();

    this.css();

    this.update();
  }

  willUnmount() {
    ///
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
            <HTMLParseTreeTextarea/>
            <CSSParseTreeTextarea/>
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

    this.setMarkdownStyle(markdownStyle);

    this.setMarkdown(markdown);
  }

  static initialMarkdown = initialMarkdown;

  static initialMarkdownStyle = `orderedItem.half-title {
  colour: red;
}`;

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

function pathToURL(path) {
  const url = `https://static.djalbat.com/${path}`;

  return url;
}
