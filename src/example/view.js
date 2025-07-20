"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { grammarUtilities } from "../index";  ///
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

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

import { importer } from "./importer";
const { tokensFromMarkdown,
        markdownNodeFromTokens,
        tokensFromMarkdownStyle,
        markdownStyleNodeFromTokens,
        topmostHTMLNodeFromMarkdownNode,
        topmostCSSNodeFromMarkdownStyleNode } = grammarUtilities;

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
    let markdownStyle;

    markdownStyle = this.getMarkdownStyle();

    const selectorsString = this.getSelectorsString();

    markdownStyle = `${selectorsString} {
  ${markdownStyle}
}`;

    const tokens = tokensFromMarkdownStyle(markdownStyle),
          markdownStyleNode = markdownStyleNodeFromTokens(tokens);

    if (markdownStyleNode === null) {
      this.resetMarkdownStyleTokens();

      this.resetTopmostMarkdownStyleNode();

      this.clearMarkdownStyleParseTreeTextarea();

      return;
    }

    const node = markdownStyleNode, ///
          parseTree = node.asParseTree(tokens),
          markdownStyleTokens = tokens, ///
          topmostMarkdownStyleNode = node; ///

    this.setMarkdownStyleTokens(markdownStyleTokens);

    this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);

    this.updateMarkdownStyleParseTreeTextarea(parseTree);

    const markdownStyleElement = this.getMarkdownStyleElement(),
          topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode),
          context = {
            tokens
          };

    topmostCSSNode.resolve(context);

    const css = topmostCSSNode.asCSS(context);

    markdownStyleElement.setCSS(css);
  }

  updateMarkdown() {
    const markdown = this.getMarkdown(),
          tokens = tokensFromMarkdown(markdown),
          markdownNode = markdownNodeFromTokens(tokens);

    if (markdownNode === null) {
      this.resetMarkdownTokens();

      this.resetTopmostMarkdownNode();

      this.clearMarkdownParseTreeTextarea();

      return;
    }

    let context;

    const topmostMarkdownNode = markdownNode; ///

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
          markdownNode = topmostMarkdownNode, ///
          topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);

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
    const topmostMarkdownStyleNode = this.getTopmostMarkdownStyleNode(),
          markdownStyleTokens = this.getMarkdownStyleTokens(),
          markdownStyleNode = topmostMarkdownStyleNode, ///
          topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode),
          tokens = markdownStyleTokens, ///
          context = {
            tokens
          };

    topmostCSSNode.resolve(context);

    const topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens),
          cssParseTree = topmostCSSNodeParseTree, ///
          css = topmostCSSNode.asCSS(context);

    this.updateCSSParseTreeTextarea(cssParseTree);

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

  getMarkdownStyleElement() {
    const { markdownStyleElement } = this.properties;

    return markdownStyleElement;
  }

  getSelectorsString() {
    const { selectorsString } = this.properties;

    return selectorsString;
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
    this.markdown();

    this.preview();

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

  static initialMarkdown = `# Foundations`;

  static initialMarkdownStyle = `primaryHeading {
  :first-child {
    colour: red;
  }
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

function pathToURL(path) {
  const url = `https://static.djalbat.com/${path}`;

  return url;
}
