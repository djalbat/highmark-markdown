"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _index = require("../index");
const _easylayout = require("easy-layout");
const _Downloads = /*#__PURE__*/ _interop_require_default(require("./view/div/Downloads"));
const _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
const _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
const _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
const _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
const _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
const _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
const _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
const _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
const _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
const _css1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/css"));
const _html1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/html"));
const _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
const _importer = require("./importer");
const _constants = require("./constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { tokensFromMarkdown, tokensFromMarkdownStyle, documentMarkdownNodeFromTokens, htmlFromMarkdownOptionsAndImporter, documentMarkdownStyleNodeFromTokens, topmostHTMLNodeFromDocumentMarkdownNode, cssFromMarkdownStyleAndCSSSelectorsString, topmostCSSNodeFromDocumentMarkdownStyleNode } = _index.grammarUtilities;
class View extends _easy.Element {
    pageUpdateCustomHandler = (event, element, index)=>{
        this.updateHTML(index);
    };
    markdownStyleCustomHandler = (event, element)=>{
        this.markdownStyle();
    };
    markdownCustomHandler = (event, element)=>{
        this.markdown();
    };
    plainTextCustomHandler = (event, element)=>{
        this.plainText();
    };
    previewCustomHandler = (event, element)=>{
        this.preview();
    };
    keyUpCustomHandler = (event, element)=>{
        this.update();
    };
    htmlCustomHandler = (event, element)=>{
        this.html();
    };
    cssCustomHandler = (event, element)=>{
        this.css();
    };
    update() {
        this.updateMarkdownStyle();
        this.updateMarkdown();
        this.updateHTML();
        this.updateCSS();
    }
    updateMarkdownStyle() {
        const markdownStyle = this.getMarkdownStyle(), tokens = tokensFromMarkdownStyle(markdownStyle), documentMarkdownStyleNode = documentMarkdownStyleNodeFromTokens(tokens);
        if (documentMarkdownStyleNode === null) {
            this.resetMarkdownStyleTokens();
            this.resetDocumentMarkdownStyleNode();
            this.clearMarkdownStyleParseTreeTextarea();
            return;
        }
        const node = documentMarkdownStyleNode, parseTree = node.asParseTree(tokens), markdownStyleTokens = tokens; ///
        this.setMarkdownStyleTokens(markdownStyleTokens);
        this.setDocumentMarkdownStyleNode(documentMarkdownStyleNode);
        this.updateMarkdownStyleParseTreeTextarea(parseTree);
    }
    updateMarkdown() {
        const markdown = this.getMarkdown(), tokens = tokensFromMarkdown(markdown), documentMarkdownNode = documentMarkdownNodeFromTokens(tokens);
        if (documentMarkdownNode === null) {
            this.resetMarkdownTokens();
            this.resetDocumentMarkdownNode();
            this.clearMarkdownParseTreeTextarea();
            return;
        }
        let context;
        context = {
            tokens,
            importer: _importer.importer
        };
        documentMarkdownNode.resolve(context);
        const documentMarkdownNodeParseTree = documentMarkdownNode.asParseTree(tokens), markdownParseTree = documentMarkdownNodeParseTree, markdownTokens = tokens; ///
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
        const documentMarkdownNode = this.getDocumentMarkdownNode(), topmostHTMLNode = topmostHTMLNodeFromDocumentMarkdownNode(documentMarkdownNode);
        if (topmostHTMLNode === null) {
            return;
        }
        let context;
        const markdownTokens = this.getMarkdownTokens(), tokens = markdownTokens; ///
        context = {
            tokens
        };
        topmostHTMLNode.resolve(context);
        const divisionHTMLNode = topmostHTMLNode.getDivisionHTMLNodeAt(index);
        if (divisionHTMLNode === null) {
            return;
        }
        const divisionHTMLNOdeParseTree = divisionHTMLNode.asParseTree(), htmlParseTree = divisionHTMLNOdeParseTree, divisionHTMLNodes = topmostHTMLNode.getDivisionHTMLNodes(), length = divisionHTMLNodes.length; ///
        context = {
            tokens,
            pathToURL,
            JSXElements
        };
        this.updatePreviewDiv(divisionHTMLNode, context);
        this.updatePlainTextTextarea(divisionHTMLNode, context);
        this.updateHTMLParseTreeTextarea(htmlParseTree);
        this.updatePageButtonsDiv(length, index);
        const markdown = this.getMarkdown(), options = _indexOptions.default, html = htmlFromMarkdownOptionsAndImporter(markdown, options, _importer.importer);
        this.updateXMP(html, context);
    }
    updateCSS() {
        const markdownStyleTokens = this.getMarkdownStyleTokens(), markdownStyleElement = this.getMarkdownStyleElement(), documentMarkdownStyleNode = this.getDocumentMarkdownStyleNode();
        if (documentMarkdownStyleNode === null) {
            const css = _constants.EMPTY_STRING;
            markdownStyleElement.setCSS(css);
            this.clearCSSParseTreeTextarea();
            this.clearCSS();
            return;
        }
        const topmostCSSNode = topmostCSSNodeFromDocumentMarkdownStyleNode(documentMarkdownStyleNode), tokens = markdownStyleTokens, context = {
            tokens
        };
        topmostCSSNode.resolve(context);
        const topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens), cssParseTree = topmostCSSNodeParseTree; ///
        this.updateCSSParseTreeTextarea(cssParseTree);
        const cssSelectorsString = _constants.CSS_SELECTORS_STRING, markdownStyle = this.getMarkdownStyle(), css = cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorsString);
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
        const markdownTokens = null, markdownStyleTokens = null, documentMarkdownNode = null, documentMarkdownStyleNode = null;
        this.setState({
            markdownTokens,
            markdownStyleTokens,
            documentMarkdownNode,
            documentMarkdownStyleNode
        });
    }
    didMount() {
        this.markdown();
        this.html();
        this.update();
    }
    willUnmount() {
    ///
    }
    childElements() {
        return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_left1.default, {
            onCustomMarkdown: this.markdownCustomHandler,
            onCustomMarkdownStyle: this.markdownStyleCustomHandler
        }), /*#__PURE__*/ React.createElement(_markdown.default, {
            onCustomKeyUp: this.keyUpCustomHandler
        }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
            onCustomKeyUp: this.keyUpCustomHandler
        })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, {
            onCustomCSS: this.cssCustomHandler,
            onCustomHTML: this.htmlCustomHandler,
            onCustomPreview: this.previewCustomHandler,
            onCustomPlainText: this.plainTextCustomHandler
        }), /*#__PURE__*/ React.createElement(_pageButtons.default, {
            onCustomPageUpdate: this.pageUpdateCustomHandler
        }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_html1.default, null), /*#__PURE__*/ React.createElement(_css1.default, null))));
    }
    initialise() {
        this.assignContext();
        this.setInitialState();
        const { initialMarkdown, initialMarkdownStyle } = this.constructor, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
        this.setMarkdownStyle(markdownStyle);
        this.setMarkdown(markdown);
    }
    static initialMarkdown = `

## Methods

There is not a whole lot more to Juxtapose than primitive, functional and class elements.
Aside from these, there are a few predefined elements, mainly form related, and a small amount of functionality to generally make life easy.

To begin with, you can define and invoke methods on class elements directly:
        
\`\`\`javascript
"use strict";

import { Element } from "easy";

import SubmitButton from "../button/submit";
import EmailAddressInput from "../input/emailAddress";

export default class FeedbackForm extends Element {
  submit() {
    /\\* ... \\*/
  }

  childElements() {
    return ([

      <EmailAddressInput/>,
      <SubmitButton onClick={(event, element) => {

                      event.preventDefault();
              
                      this.submit();
              
                    }}
      />

    ]);
  }

  static tagName = "form";

  static defaultProperties = {
    className: "feedback"
  };
}
\`\`\`
        
Note that, as the name suggests, you can return an array of JSX elements from the \`childElements()\` method.
You can also return a string or even \`null\` or \`undefined\`.
Anything falsey is safely ignored.

`;
    static initialMarkdownStyle = "";
    static tagName = "div";
    static ignoredProperties = [
        "markdownStyleElement"
    ];
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
  
`;
const JSXElements = [
    _Downloads.default
];
function pathToURL(path) {
    const url = `https://djalbat.com/${path}`;
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IERvd25sb2Fkc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9Eb3dubG9hZHNcIjtcbmltcG9ydCBpbmRleE9wdGlvbnMgZnJvbSBcIi4vaW5kZXhPcHRpb25zXCI7XG5pbXBvcnQgUGFnZUJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvcGFnZUJ1dHRvbnNcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IENTU0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvY3NzXCI7XG5pbXBvcnQgSFRNTENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvaHRtbFwiO1xuaW1wb3J0IExlZnRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL3JpZ2h0XCI7XG5pbXBvcnQgUHJldmlld0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcHJldmlld1wiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IENTU1BhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2Nzc1wiO1xuaW1wb3J0IEhUTUxQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9odG1sXCI7XG5pbXBvcnQgUGxhaW5UZXh0Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wbGFpblRleHRcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IGluaXRpYWxNYXJrZG93biwgaW1wb3J0ZXIgfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBDU1NfU0VMRUNUT1JTX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHRva2Vuc0Zyb21NYXJrZG93bixcbiAgICAgICAgdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUsXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlRnJvbVRva2VucyxcbiAgICAgICAgaHRtbEZyb21NYXJrZG93bk9wdGlvbnNBbmRJbXBvcnRlcixcbiAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnMsXG4gICAgICAgIHRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZSxcbiAgICAgICAgY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcsXG4gICAgICAgIHRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgfSA9IGdyYW1tYXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy51cGRhdGVIVE1MKGluZGV4KTtcbiAgfVxuXG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwbGFpblRleHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFpblRleHQoKTtcbiAgfVxuXG4gIHByZXZpZXdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wcmV2aWV3KCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgaHRtbEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmh0bWwoKTtcbiAgfVxuXG4gIGNzc0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNTUygpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSksXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE1hcmtkb3duU3R5bGVUb2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUsIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZShkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd24obWFya2Rvd24pLFxuICAgICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAoZG9jdW1lbnRNYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blRva2VucygpO1xuXG4gICAgICB0aGlzLnJlc2V0RG9jdW1lbnRNYXJrZG93bk5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2VucyxcbiAgICAgIGltcG9ydGVyXG4gICAgfTtcblxuICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZVBhcnNlVHJlZSA9IGRvY3VtZW50TWFya2Rvd25Ob2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgbWFya2Rvd25QYXJzZVRyZWUgPSBkb2N1bWVudE1hcmtkb3duTm9kZVBhcnNlVHJlZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd25Ub2tlbnMgPSB0b2tlbnM7ICAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuXG4gICAgdGhpcy5zZXREb2N1bWVudE1hcmtkb3duTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEobWFya2Rvd25QYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlSFRNTChpbmRleCA9IDApIHtcbiAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuXG4gICAgdGhpcy5jbGVhclBsYWluVGV4dFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgIGNvbnN0IGRvY3VtZW50TWFya2Rvd25Ob2RlID0gdGhpcy5nZXREb2N1bWVudE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSk7XG5cbiAgICBpZiAodG9wbW9zdEhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IHRoaXMuZ2V0TWFya2Rvd25Ub2tlbnMoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93blRva2VuczsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2Vuc1xuICAgIH07XG5cbiAgICB0b3Btb3N0SFRNTE5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KTtcblxuICAgIGlmIChkaXZpc2lvbkhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5vZGUuYXNQYXJzZVRyZWUoKSxcbiAgICAgICAgICBodG1sUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSwgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gdG9wbW9zdEhUTUxOb2RlLmdldERpdmlzaW9uSFRNTE5vZGVzKCksXG4gICAgICAgICAgbGVuZ3RoID0gZGl2aXNpb25IVE1MTm9kZXMubGVuZ3RoOyAgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgcGF0aFRvVVJMLFxuICAgICAgSlNYRWxlbWVudHNcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIG9wdGlvbnMgPSBpbmRleE9wdGlvbnMsIC8vL1xuICAgICAgICAgIGh0bWwgPSBodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyKG1hcmtkb3duLCBvcHRpb25zLCBpbXBvcnRlcik7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sLCBjb250ZXh0KTtcbiAgfVxuXG4gIHVwZGF0ZUNTUygpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blN0eWxlVG9rZW5zKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVFbGVtZW50KCksXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpO1xuXG4gICAgaWYgKGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICAgIHRoaXMuY2xlYXJDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQ1NTKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25TdHlsZVRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICB0b3Btb3N0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdENTU05vZGVQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIGNzc1BhcnNlVHJlZSA9IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlOyAvLy9cblxuICAgIHRoaXMudXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoY3NzUGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IGNzc1NlbGVjdG9yc1N0cmluZyA9IENTU19TRUxFQ1RPUlNfU1RSSU5HLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyhtYXJrZG93blN0eWxlLCBjc3NTZWxlY3RvcnNTdHJpbmcpO1xuXG4gICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5oaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICByZXNldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuICB9XG5cbiAgcmVzZXREb2N1bWVudE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldERvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcbiAgfVxuXG4gIHJlc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZShkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKTtcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIGdldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25Ub2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZG93blRva2VucztcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVRva2VucztcbiAgfVxuXG4gIGdldERvY3VtZW50TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZTtcbiAgfVxuXG4gIHNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blN0eWxlVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXREb2N1bWVudE1hcmtkb3duTm9kZSh0b3Btb3N0TU1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBkb2N1bWVudE1hcmtkb3duTm9kZSA9IG51bGwsXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zLFxuICAgICAgbWFya2Rvd25TdHlsZVRva2VucyxcbiAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlLFxuICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuXG4gICAgdGhpcy5odG1sKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxDU1NDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFBsYWluVGV4dENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDxDU1NQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duLCBpbml0aWFsTWFya2Rvd25TdHlsZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gaW5pdGlhbE1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd24obWFya2Rvd24pO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGBcblxuIyMgTWV0aG9kc1xuXG5UaGVyZSBpcyBub3QgYSB3aG9sZSBsb3QgbW9yZSB0byBKdXh0YXBvc2UgdGhhbiBwcmltaXRpdmUsIGZ1bmN0aW9uYWwgYW5kIGNsYXNzIGVsZW1lbnRzLlxuQXNpZGUgZnJvbSB0aGVzZSwgdGhlcmUgYXJlIGEgZmV3IHByZWRlZmluZWQgZWxlbWVudHMsIG1haW5seSBmb3JtIHJlbGF0ZWQsIGFuZCBhIHNtYWxsIGFtb3VudCBvZiBmdW5jdGlvbmFsaXR5IHRvIGdlbmVyYWxseSBtYWtlIGxpZmUgZWFzeS5cblxuVG8gYmVnaW4gd2l0aCwgeW91IGNhbiBkZWZpbmUgYW5kIGludm9rZSBtZXRob2RzIG9uIGNsYXNzIGVsZW1lbnRzIGRpcmVjdGx5OlxuICAgICAgICBcblxcYFxcYFxcYGphdmFzY3JpcHRcblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL3N1Ym1pdFwiO1xuaW1wb3J0IEVtYWlsQWRkcmVzc0lucHV0IGZyb20gXCIuLi9pbnB1dC9lbWFpbEFkZHJlc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVlZGJhY2tGb3JtIGV4dGVuZHMgRWxlbWVudCB7XG4gIHN1Ym1pdCgpIHtcbiAgICAvXFxcXCogLi4uIFxcXFwqL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEVtYWlsQWRkcmVzc0lucHV0Lz4sXG4gICAgICA8U3VibWl0QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZm9ybVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmVlZGJhY2tcIlxuICB9O1xufVxuXFxgXFxgXFxgXG4gICAgICAgIFxuTm90ZSB0aGF0LCBhcyB0aGUgbmFtZSBzdWdnZXN0cywgeW91IGNhbiByZXR1cm4gYW4gYXJyYXkgb2YgSlNYIGVsZW1lbnRzIGZyb20gdGhlIFxcYGNoaWxkRWxlbWVudHMoKVxcYCBtZXRob2QuXG5Zb3UgY2FuIGFsc28gcmV0dXJuIGEgc3RyaW5nIG9yIGV2ZW4gXFxgbnVsbFxcYCBvciBcXGB1bmRlZmluZWRcXGAuXG5Bbnl0aGluZyBmYWxzZXkgaXMgc2FmZWx5IGlnbm9yZWQuXG5cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gXCJcIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmNvbnN0IEpTWEVsZW1lbnRzID0gW1xuICBEb3dubG9hZHNEaXZcbl1cblxuZnVuY3Rpb24gcGF0aFRvVVJMKHBhdGgpIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vZGphbGJhdC5jb20vJHtwYXRofWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cbiJdLCJuYW1lcyI6WyJ0b2tlbnNGcm9tTWFya2Rvd24iLCJ0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSIsImRvY3VtZW50TWFya2Rvd25Ob2RlRnJvbVRva2VucyIsImh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIiLCJkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyIsInRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZSIsImNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nIiwidG9wbW9zdENTU05vZGVGcm9tRG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSIsImdyYW1tYXJVdGlsaXRpZXMiLCJWaWV3IiwiRWxlbWVudCIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW5kZXgiLCJ1cGRhdGVIVE1MIiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJtYXJrZG93blN0eWxlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJwbGFpblRleHRDdXN0b21IYW5kbGVyIiwicGxhaW5UZXh0IiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZUNTUyIsImdldE1hcmtkb3duU3R5bGUiLCJ0b2tlbnMiLCJkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwicmVzZXRNYXJrZG93blN0eWxlVG9rZW5zIiwicmVzZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJub2RlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJtYXJrZG93blN0eWxlVG9rZW5zIiwic2V0TWFya2Rvd25TdHlsZVRva2VucyIsInNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJnZXRNYXJrZG93biIsImRvY3VtZW50TWFya2Rvd25Ob2RlIiwicmVzZXRNYXJrZG93blRva2VucyIsInJlc2V0RG9jdW1lbnRNYXJrZG93bk5vZGUiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjb250ZXh0IiwiaW1wb3J0ZXIiLCJyZXNvbHZlIiwiZG9jdW1lbnRNYXJrZG93bk5vZGVQYXJzZVRyZWUiLCJtYXJrZG93blBhcnNlVHJlZSIsIm1hcmtkb3duVG9rZW5zIiwic2V0TWFya2Rvd25Ub2tlbnMiLCJzZXREb2N1bWVudE1hcmtkb3duTm9kZSIsInVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJjbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJnZXREb2N1bWVudE1hcmtkb3duTm9kZSIsInRvcG1vc3RIVE1MTm9kZSIsImdldE1hcmtkb3duVG9rZW5zIiwiZGl2aXNpb25IVE1MTm9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUiLCJodG1sUGFyc2VUcmVlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJnZXREaXZpc2lvbkhUTUxOb2RlcyIsImxlbmd0aCIsInBhdGhUb1VSTCIsIkpTWEVsZW1lbnRzIiwidXBkYXRlUHJldmlld0RpdiIsInVwZGF0ZVBsYWluVGV4dFRleHRhcmVhIiwidXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJvcHRpb25zIiwiaW5kZXhPcHRpb25zIiwidXBkYXRlWE1QIiwiZ2V0TWFya2Rvd25TdHlsZVRva2VucyIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwiZ2V0TWFya2Rvd25TdHlsZUVsZW1lbnQiLCJnZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwiRU1QVFlfU1RSSU5HIiwic2V0Q1NTIiwiY2xlYXJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyQ1NTIiwidG9wbW9zdENTU05vZGUiLCJ0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZSIsImNzc1BhcnNlVHJlZSIsInVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwiY3NzU2VsZWN0b3JzU3RyaW5nIiwiQ1NTX1NFTEVDVE9SU19TVFJJTkciLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiaGlkZUNTU0NvbnRhaW5lckRpdiIsImhpZGVIVE1MQ29udGFpbmVyRGl2IiwiaGlkZVByZXZpZXdDb250YWluZXJEaXYiLCJzaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwic2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsInNob3dDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJwcm9wZXJ0aWVzIiwiZ2V0U3RhdGUiLCJ0b3Btb3N0TU1hcmtkb3duTm9kZSIsInRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIkRvd25sb2Fkc0RpdiIsInBhdGgiLCJ1cmwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVmQTs7O2VBQUE7OztzRUFyZnNCO3NCQUVFO3VCQUNTOzRCQUNtQztrRUFFM0M7cUVBQ0E7b0VBQ0U7NkRBQ0M7NERBQ0E7NkRBQ0M7OERBQ0M7OERBQ0M7Z0VBQ0M7aUVBQ0M7NkRBQ0E7OERBQ0M7a0VBQ0E7c0VBQ0k7MEJBRUk7MkJBQ1M7Ozs7OztBQUVuRCxNQUFNLEVBQUVBLGtCQUFrQixFQUNsQkMsdUJBQXVCLEVBQ3ZCQyw4QkFBOEIsRUFDOUJDLGtDQUFrQyxFQUNsQ0MsbUNBQW1DLEVBQ25DQyx1Q0FBdUMsRUFDdkNDLHlDQUF5QyxFQUN6Q0MsMkNBQTJDLEVBQUUsR0FBR0MsdUJBQWdCO0FBRXhFLE1BQU1DLGFBQWFDLGFBQU87SUFDeEJDLDBCQUEwQixDQUFDQyxPQUFPQyxTQUFTQztRQUN6QyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0Q7SUFDbEIsRUFBQztJQUVERSw2QkFBNkIsQ0FBQ0osT0FBT0M7UUFDbkMsSUFBSSxDQUFDSSxhQUFhO0lBQ3BCLEVBQUM7SUFFREMsd0JB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