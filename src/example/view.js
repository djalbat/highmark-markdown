"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { parserUtilities } from "occam-parsers";
import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv, HorizontalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import BNFTextarea from "./view/textarea/bnf";
import PreviewPaneDiv from "./view/div/previewPane";
import LeftSizeableDiv from "./view/div/sizeable/left";
import RightSizeableDiv from "./view/div/sizeable/right";
import MarkdownTextarea from "./view/textarea/markdown";
import ParseTreeTextarea from "./view/textarea/parseTree";
import LexicalEntriesTextarea from "./view/textarea/lexicalEntries";

import { nodeMap, MarkdownLexer, MarkdownParser, nodeUtilities } from "../index";

const { bnf } = MarkdownParser,
      { entries } = MarkdownLexer,
      { rulesFromBNF } = parserUtilities,
      { setNonTerminalNodes } = nodeUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    this.update();
  }

  update() {
    const bnf = this.getBNF(),
          markdown = this.getMarkdown(),
          lexicalEntries = this.getLexicalEntries();

    const rules = rulesFromBNF(bnf),
          lexer = lexerFromLexicalEntries(lexicalEntries),
          parser =  parserFromRules(rules),
          content = markdown; ///

    const tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    this.updatePreviewPaneDiv(node, tokens);

    let parseTree = null;

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
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
              <PreviewPaneDiv/>
            </RightSizeableDiv>
            <HorizontalSplitterDiv/>
            <RowDiv>
              <RowsDiv>
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

  static initialMarkdown = `This is a paragraph.
`;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;

function lexerFromLexicalEntries(lexicalEntries) {
  const entries = lexicalEntries, ///
        lexer = MarkdownLexer.fromEntries(entries); ///

  return lexer;
}

function parserFromRules(rules) {
  const parser = MarkdownParser.fromRules(rules); ///

  setNonTerminalNodes(parser, nodeMap);

  return parser;
}
