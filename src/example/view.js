"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv, HorizontalSplitterDiv } from "easy-layout";

import XMP from "./view/xmp";
import PreviewDiv from "./view/div/preview";
import SubHeading from "./view/subHeading";
import BNFTextarea from "./view/textarea/bnf";
import LeftSizeableDiv from "./view/div/sizeable/left";
import RightSizeableDiv from "./view/div/sizeable/right";
import MarkdownTextarea from "./view/textarea/markdown";
import ParseTreeTextarea from "./view/textarea/parseTree";
import LexicalEntriesTextarea from "./view/textarea/lexicalEntries";

import { MarkdownLexer, MarkdownParser } from "../index";
import { EMPTY_STRING, DOCUMENT_DIVISION_CLASS_NAME, FRONT_MATTER_DIVISION_CLASS_NAME } from "./constants";

const { bnf } = MarkdownParser,
      { entries } = MarkdownLexer;

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

class View extends Element {
  keyUpHandler = (event, element) => {
    this.update();
  }

  update() {
    const markdown = this.getMarkdown(),
          lexer = markdownLexer,  ///
          parser =  markdownParser, ///
          content = markdown, ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    let parseTree = null;

    if (node !== null) {
      const divisionClassName = DOCUMENT_DIVISION_CLASS_NAME,
            indent = EMPTY_STRING,
            context = {
              tokens,
              importer,
              divisionClassName
            },
            html = node.asHTML(indent, context),
            domElement = node.createDOMElement(context);

      this.xmpHTML(html);

      this.updatePreviewDiv(domElement);

      parseTree = node.asParseTree(tokens);
    } else {
      this.clearXMP();

      this.clearPreviewDiv();
    }

    this.setParseTree(parseTree);
  }

  childElements() {
    return (

      <ColumnsDiv>
        <LeftSizeableDiv>
          <SubHeading>
            Lexical entries
          </SubHeading>
          <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
          <SubHeading>
            BNF
          </SubHeading>
          <BNFTextarea onKeyUp={this.keyUpHandler} />
          <SubHeading>
            Parse tree
          </SubHeading>
          <ParseTreeTextarea/>
        </LeftSizeableDiv>
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <RightSizeableDiv>
              <XMP/>
            </RightSizeableDiv>
            <HorizontalSplitterDiv/>
            <RowDiv>
              <RowsDiv>
                <SubHeading>
                  Preview
                </SubHeading>
                <PreviewDiv/>
                <SubHeading>
                  Markdown
                </SubHeading>
                <MarkdownTextarea onKeyUp={this.keyUpHandler} />
              </RowsDiv>
            </RowDiv>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    );
  }

  initialise() {
    this.assignContext();

    const { initialMarkdown } = this.constructor,
          markdown = initialMarkdown, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);

    this.setMarkdown(markdown);

    this.setLexicalEntries(lexicalEntries);

    this.update();
  }

  static initialMarkdown = `One line.
Another line.

`;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;

const divisionContent = `

Hello, world!

`;

function importer(path, indent, context) {
  const content = divisionContent,  ///
        tokens = markdownLexer.tokenise(content),
        node = markdownParser.parse(tokens),
        divisionClassName = FRONT_MATTER_DIVISION_CLASS_NAME;  //

  context = { ///
    tokens,
    divisionClassName
  }

  const html = node.asHTML(indent, context);

  return html;
}