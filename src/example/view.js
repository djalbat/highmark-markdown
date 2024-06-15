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
import { LINES_PER_PAGE, CONTENTS_DEPTH, CHARACTERS_PER_LINE, INTRODUCTION_CLASS_NAME } from "./constants";

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
            contentsDepth = CONTENTS_DEPTH,
            charactersPerLine = CHARACTERS_PER_LINE,
            context = {
              tokens,
              importer,
              linesPerPage,
              contentsDepth,
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
    const divisionMarkdownNodes = this.getDivisionMarkdownNodes(),
          divisionMarkdownNode = divisionMarkdownNodes[index],
          tokens = this.getTokens(),
          context = {
            tokens
          },
          length = null,
          html = divisionMarkdownNode.asHTML(context),
          domElement = divisionMarkdownNode.createDOMElement(context);

    this.updateXMP(html);

    this.updatePreviewDiv(domElement);

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

  static initialMarkdown = `@contents
  
@embed introduction.md  
  
A paragraph to trigger the pagination.

## Occam and Florence[^occam] [^florence]

[^occam]: Occam footnote.

[^florence]: Florence footnote.

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
  const content = `# Occam[^occam]   
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
