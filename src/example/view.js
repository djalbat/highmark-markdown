"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { MarkdownLexer, MarkdownParser } from "../index";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import XMP from "./view/xmp";
import PreviewDiv from "./view/div/preview";
import SubHeading from "./view/subHeading";
import CSSTextarea from "./view/textarea/css";
import LeftSizeableDiv from "./view/div/sizeable/left";
import MarkdownTextarea from "./view/textarea/markdown";
import MarkdownStyleTextarea from "./view/textarea/markdownStyle";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

class View extends Element {
  keyUpHandler = (event, element) => {
    this.update();
  }

  updateMarkdownStyle() {
    const { markdownStyleElement } = this.properties,
          markdownStyle = this.getMarkdownStyle(),
          css = markdownStyleElement.update(markdownStyle);

    this.setCSS(css);
  }

  updateMarkdown() {
    const markdown = this.getMarkdown(),
          content = markdown, ///
          lexer = markdownLexer,
          parser =  markdownParser,
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

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
    } else {
      this.clearXMP();

      this.clearPreviewDiv();
    }
  }

  update() {
    this.updateMarkdown();
    this.updateMarkdownStyle();
  }

  childElements() {
    return (

      <ColumnsDiv>
        <LeftSizeableDiv>
          <SubHeading>
            Markdown
          </SubHeading>
          <MarkdownTextarea onKeyUp={this.keyUpHandler} />
          <SubHeading>
            Markdown style
          </SubHeading>
          <MarkdownStyleTextarea onKeyUp={this.keyUpHandler} />
        </LeftSizeableDiv>
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              HTML
            </SubHeading>
            <XMP/>
            <SubHeading>
              CSS
            </SubHeading>
            <CSSTextarea/>
            <SubHeading>
              Preview
            </SubHeading>
            <PreviewDiv/>
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

  static initialMarkdown = `@contents 2

# Primary heading[^heading]

@embed introduction.md
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

[^heading]: A heading.

@footnotes
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
