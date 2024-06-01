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

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing(),
      markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

class View extends Element {
  markdownStyleCustomHandler = (event, element) => {
    this.markdownStyle();
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
          tokens = lexer.tokenise(content),
          startRule = parser.getStartRule(),
          startOfContent = true,
          node = parser.parse(tokens, startRule, startOfContent);

    if (node !== null) {
      const divisionMarkdownNode = node,  ///
            divisionMarkdownNodes = [
              divisionMarkdownNode
            ],
            context = {
              tokens,
              importer,
              divisionMarkdownNodes
            };

      divisionMarkdownNode.resolveIncludes(context);

      divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
        divisionMarkdownNode.resolveEmbeddings(context);

        divisionMarkdownNode.createFootnotes(context);
      });

      divisionMarkdownNodes.some((divisionMarkdownNode) => {
        const contentsCreated = divisionMarkdownNode.createContents(context);

        if (contentsCreated) {
          return true;
        }
      });

      const htmls = [],
            domElements = [];

      divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
        const html = divisionMarkdownNode.asHTML(context),
              domElement = divisionMarkdownNode.createDOMElement(context);

        htmls.push(html);

        domElements.push(domElement);
      });

      this.updateXMP(htmls);

      this.updatePreviewDiv(domElements);

      const parseTree = node.asParseTree(tokens);

      this.updateMarkdownParseTreeTextarea(parseTree);
    } else {
      this.clearXMP();

      this.clearPreviewDiv();

      this.clearMarkdownParseTreeTextarea();
    }
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
                <PreviewDiv/>
              </RowsDiv>
            </RowDiv>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    );
  }

  initialise() {
    this.assignContext();

    const { initialMarkdown, initialMarkdownStyle } = this.constructor,
          markdownStyle = initialMarkdownStyle, ///
          markdown = initialMarkdown; ///

    this.setMarkdown(markdown);

    this.setMarkdownStyle(markdownStyle);

    this.update();
  }

  static initialMarkdownStyle = `min-height: initial;
`;

  static initialMarkdown = `\`\`\`
Line 1

Line 2  
\`\`\`
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

function importer(filePath, context) {
  const content = `## Secondary heading

### Tertiary heading
`,
        tokens = markdownLexer.tokenise(content),
        node = markdownParser.parse(tokens),
        importedNode = node,  ///
        importedTokens = tokens,
        importedClassName = "introduction";

  Object.assign(context, {
    importedNode,
    importedTokens,
    importedClassName
  });
}
