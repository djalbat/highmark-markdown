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

import { WEB_TARGET } from "../targets";
import { initialMarkdown, importer } from "./importer";
import { EMPTY_STRING, CSS_SELECTORS_STRING } from "./constants";

const { tokensFromMarkdown,
        tokensFromMarkdownStyle,
        documentMarkdownNodeFromTokens,
        htmlFromMarkdownOptionsAndImporter,
        documentMarkdownStyleNodeFromTokens,
        topmostHTMLNodeFromDocumentMarkdownNode,
        cssFromMarkdownStyleAndCSSSelectorsString,
        topmostCSSNodeFromDocumentMarkdownStyleNode } = grammarUtilities;

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
          tokens = tokensFromMarkdownStyle(markdownStyle),
          documentMarkdownStyleNode = documentMarkdownStyleNodeFromTokens(tokens);

    if (documentMarkdownStyleNode === null) {
      this.resetMarkdownStyleTokens();

      this.resetDocumentMarkdownStyleNode();

      this.clearMarkdownStyleParseTreeTextarea();

      return;
    }

    const node = documentMarkdownStyleNode, ///
          parseTree = node.asParseTree(tokens),
          markdownStyleTokens = tokens; ///

    this.setMarkdownStyleTokens(markdownStyleTokens);

    this.setDocumentMarkdownStyleNode(documentMarkdownStyleNode);

    this.updateMarkdownStyleParseTreeTextarea(parseTree);
  }

  updateMarkdown() {
    const markdown = this.getMarkdown(),
          tokens = tokensFromMarkdown(markdown),
          documentMarkdownNode = documentMarkdownNodeFromTokens(tokens);

    if (documentMarkdownNode === null) {
      this.resetMarkdownTokens();

      this.resetDocumentMarkdownNode();

      this.clearMarkdownParseTreeTextarea();

      return;
    }

    let context;

    context = {
      tokens,
      importer
    };

    documentMarkdownNode.resolve(context);

    const documentMarkdownNodeParseTree = documentMarkdownNode.asParseTree(tokens),
          markdownParseTree = documentMarkdownNodeParseTree, ///
          markdownTokens = tokens;  ///

    this.setMarkdownTokens(markdownTokens);

    this.setDocumentMarkdownNode(documentMarkdownNode);

    this.updateMarkdownParseTreeTextarea(markdownParseTree);
  }

  updateHTML(index = 0) {
    this.clearXMP();

    this.clearPreviewDiv();

    this.clearPlainTextTextarea();

    this.clearHTMLParseTreeTextarea();

    this.clearPageButtonsDiv();

    const documentMarkdownNode = this.getDocumentMarkdownNode(),
          topmostHTMLNode = topmostHTMLNodeFromDocumentMarkdownNode(documentMarkdownNode);

    if (topmostHTMLNode === null) {
      return;
    }

    let context;

    const markdownTokens = this.getMarkdownTokens(),
          tokens = markdownTokens;  ///

    context = {
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
          length = multiplicity;  ///

    context = {
      tokens,
      pathToURL
    };

    this.updatePreviewDiv(divisionHTMLNOde, context);

    this.updatePlainTextTextarea(divisionHTMLNOde, context);

    this.updateHTMLParseTreeTextarea(htmlParseTree);

    this.updatePageButtonsDiv(length, index);

    const markdown = this.getMarkdown(),
          options = indexOptions, ///
          html = htmlFromMarkdownOptionsAndImporter(markdown, options, importer);

    this.updateXMP(html, context);
  }

  updateCSS() {
    const markdownStyleTokens = this.getMarkdownStyleTokens(),
          markdownStyleElement = this.getMarkdownStyleElement(),
          documentMarkdownStyleNode = this.getDocumentMarkdownStyleNode();

    if (documentMarkdownStyleNode === null) {
      const css = EMPTY_STRING;

      markdownStyleElement.setCSS(css);

      this.clearCSSParseTreeTextarea();

      this.clearCSS();

      return;
    }

    const topmostCSSNode = topmostCSSNodeFromDocumentMarkdownStyleNode(documentMarkdownStyleNode),
          target = WEB_TARGET,
          tokens = markdownStyleTokens, ///
          context = {
            target,
            tokens
          };

    topmostCSSNode.resolve(context);

    const topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens),
          cssParseTree = topmostCSSNodeParseTree; ///

    this.updateCSSParseTreeTextarea(cssParseTree);

    const cssSelectorsString = CSS_SELECTORS_STRING,
          markdownStyle = this.getMarkdownStyle(),
          css = cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorsString);

    markdownStyleElement.setCSS(css);

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

  resetDocumentMarkdownNode() {
    const documentMarkdownNode = null;

    this.setDocumentMarkdownNode(documentMarkdownNode);
  }

  resetDocumentMarkdownStyleNode() {
    const documentMarkdownStyleNode = null;

    this.setDocumentMarkdownStyleNode(documentMarkdownStyleNode);
  }

  getMarkdownStyleElement() {
    const { markdownStyleElement } = this.properties;

    return markdownStyleElement;
  }

  getMarkdownTokens() {
    const { markdownTokens } = this.getState();

    return markdownTokens;
  }

  getMarkdownStyleTokens() {
    const { markdownStyleTokens } = this.getState();

    return markdownStyleTokens;
  }

  getDocumentMarkdownNode() {
    const { topmostMMarkdownNode } = this.getState();

    return topmostMMarkdownNode;
  }

  getDocumentMarkdownStyleNode() {
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

  setDocumentMarkdownNode(topmostMMarkdownNode) {
    this.updateState({
      topmostMMarkdownNode
    });
  }

  setDocumentMarkdownStyleNode(topmostMMarkdownStyleNode) {
    this.updateState({
      topmostMMarkdownStyleNode
    });
  }

  setInitialState() {
    const markdownTokens = null,
          markdownStyleTokens = null,
          documentMarkdownNode = null,
          documentMarkdownStyleNode = null;

    this.setState({
      markdownTokens,
      markdownStyleTokens,
      documentMarkdownNode,
      documentMarkdownStyleNode
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

  static initialMarkdown = initialMarkdown;

  static initialMarkdownStyle = "";

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
  const url = `https://djalbat.com/${path}`;

  return url;
}
