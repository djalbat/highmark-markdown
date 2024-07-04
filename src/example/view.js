"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { MarkdownLexer, MarkdownParser, MarkdownStyleLexer, MarkdownStyleParser } from "../index";
import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv, HorizontalSplitterDiv } from "easy-layout";

import HTMLDiv from "./view/div/html";
import importer from "./importer";
import PreviewDiv from "./view/div/preview";
import SubHeading from "./view/subHeading";
import CSSTextarea from "./view/textarea/css";
import indexOptions from "./indexOptions";
import TabButtonsDiv from "./view/div/tabButtons";
import LeftSizeableDiv from "./view/div/sizeable/left";
import RightSizeableDiv from "./view/div/sizeable/right";
import MarkdownContainerDiv from "./view/div/container/markdown";
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
            // markdownNodes = postprocess(divisionMarkdownNode, context),
            // divisionMarkdownNodes = divisionMarkdownNodesFromMarkdownNodes(markdownNodes);
            divisionMarkdownNodes = [
              divisionMarkdownNode
            ];

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

      this.clearMarkdownParseTreeTextarea();

      const divisionMarkdownNodes = null;

      this.setDivisionMarkdownNodes(divisionMarkdownNodes);
    }
  }

  updatePage(index) {
    const divisionMarkdownNodes = this.getDivisionMarkdownNodes(),
          divisionMarkdownNode = divisionMarkdownNodes[index],
          tokens = this.getTokens(),
          context = {
            tokens
          },
          length = null,
          html = divisionMarkdownNode.asHTML(context);

    this.updateXMP(html);

    this.updatePreviewDiv(divisionMarkdownNode, context);

    this.updatePageButtonsDiv(length, index);
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

  static initialMarkdown = defaultContent;  ///

  static initialMarkdownStyle = `width: 100%;
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
        startOfContent = true,
        node = markdownParser.parse(tokens, startRule, startOfContent);

  return node;
}
