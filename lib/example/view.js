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
    static initialMarkdown = _importer.initialMarkdown;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IERvd25sb2Fkc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9Eb3dubG9hZHNcIjtcbmltcG9ydCBpbmRleE9wdGlvbnMgZnJvbSBcIi4vaW5kZXhPcHRpb25zXCI7XG5pbXBvcnQgUGFnZUJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvcGFnZUJ1dHRvbnNcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IENTU0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvY3NzXCI7XG5pbXBvcnQgSFRNTENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvaHRtbFwiO1xuaW1wb3J0IExlZnRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL3JpZ2h0XCI7XG5pbXBvcnQgUHJldmlld0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcHJldmlld1wiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IENTU1BhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2Nzc1wiO1xuaW1wb3J0IEhUTUxQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9odG1sXCI7XG5pbXBvcnQgUGxhaW5UZXh0Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wbGFpblRleHRcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IGluaXRpYWxNYXJrZG93biwgaW1wb3J0ZXIgfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBDU1NfU0VMRUNUT1JTX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHRva2Vuc0Zyb21NYXJrZG93bixcbiAgICAgICAgdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUsXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlRnJvbVRva2VucyxcbiAgICAgICAgaHRtbEZyb21NYXJrZG93bk9wdGlvbnNBbmRJbXBvcnRlcixcbiAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnMsXG4gICAgICAgIHRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZSxcbiAgICAgICAgY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcsXG4gICAgICAgIHRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgfSA9IGdyYW1tYXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy51cGRhdGVIVE1MKGluZGV4KTtcbiAgfVxuXG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwbGFpblRleHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFpblRleHQoKTtcbiAgfVxuXG4gIHByZXZpZXdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wcmV2aWV3KCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgaHRtbEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmh0bWwoKTtcbiAgfVxuXG4gIGNzc0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNTUygpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSksXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE1hcmtkb3duU3R5bGVUb2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUsIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZShkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd24obWFya2Rvd24pLFxuICAgICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAoZG9jdW1lbnRNYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blRva2VucygpO1xuXG4gICAgICB0aGlzLnJlc2V0RG9jdW1lbnRNYXJrZG93bk5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2VucyxcbiAgICAgIGltcG9ydGVyXG4gICAgfTtcblxuICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZVBhcnNlVHJlZSA9IGRvY3VtZW50TWFya2Rvd25Ob2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgbWFya2Rvd25QYXJzZVRyZWUgPSBkb2N1bWVudE1hcmtkb3duTm9kZVBhcnNlVHJlZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd25Ub2tlbnMgPSB0b2tlbnM7ICAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuXG4gICAgdGhpcy5zZXREb2N1bWVudE1hcmtkb3duTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEobWFya2Rvd25QYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlSFRNTChpbmRleCA9IDApIHtcbiAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuXG4gICAgdGhpcy5jbGVhclBsYWluVGV4dFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgIGNvbnN0IGRvY3VtZW50TWFya2Rvd25Ob2RlID0gdGhpcy5nZXREb2N1bWVudE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSk7XG5cbiAgICBpZiAodG9wbW9zdEhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IHRoaXMuZ2V0TWFya2Rvd25Ub2tlbnMoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93blRva2VuczsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2Vuc1xuICAgIH07XG5cbiAgICB0b3Btb3N0SFRNTE5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KTtcblxuICAgIGlmIChkaXZpc2lvbkhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5vZGUuYXNQYXJzZVRyZWUoKSxcbiAgICAgICAgICBodG1sUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSwgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gdG9wbW9zdEhUTUxOb2RlLmdldERpdmlzaW9uSFRNTE5vZGVzKCksXG4gICAgICAgICAgbGVuZ3RoID0gZGl2aXNpb25IVE1MTm9kZXMubGVuZ3RoOyAgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgcGF0aFRvVVJMLFxuICAgICAgSlNYRWxlbWVudHNcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIG9wdGlvbnMgPSBpbmRleE9wdGlvbnMsIC8vL1xuICAgICAgICAgIGh0bWwgPSBodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyKG1hcmtkb3duLCBvcHRpb25zLCBpbXBvcnRlcik7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sLCBjb250ZXh0KTtcbiAgfVxuXG4gIHVwZGF0ZUNTUygpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blN0eWxlVG9rZW5zKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVFbGVtZW50KCksXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpO1xuXG4gICAgaWYgKGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICAgIHRoaXMuY2xlYXJDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQ1NTKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25TdHlsZVRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICB0b3Btb3N0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdENTU05vZGVQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIGNzc1BhcnNlVHJlZSA9IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlOyAvLy9cblxuICAgIHRoaXMudXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoY3NzUGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IGNzc1NlbGVjdG9yc1N0cmluZyA9IENTU19TRUxFQ1RPUlNfU1RSSU5HLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyhtYXJrZG93blN0eWxlLCBjc3NTZWxlY3RvcnNTdHJpbmcpO1xuXG4gICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5oaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICByZXNldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuICB9XG5cbiAgcmVzZXREb2N1bWVudE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldERvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcbiAgfVxuXG4gIHJlc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZShkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKTtcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIGdldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25Ub2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZG93blRva2VucztcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVRva2VucztcbiAgfVxuXG4gIGdldERvY3VtZW50TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZTtcbiAgfVxuXG4gIHNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blN0eWxlVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXREb2N1bWVudE1hcmtkb3duTm9kZSh0b3Btb3N0TU1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBkb2N1bWVudE1hcmtkb3duTm9kZSA9IG51bGwsXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zLFxuICAgICAgbWFya2Rvd25TdHlsZVRva2VucyxcbiAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlLFxuICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuXG4gICAgdGhpcy5odG1sKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxDU1NDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFBsYWluVGV4dENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDxDU1NQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duLCBpbml0aWFsTWFya2Rvd25TdHlsZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gaW5pdGlhbE1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd24obWFya2Rvd24pO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBcIlwiO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuY29uc3QgSlNYRWxlbWVudHMgPSBbXG4gIERvd25sb2Fkc0RpdlxuXVxuXG5mdW5jdGlvbiBwYXRoVG9VUkwocGF0aCkge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kamFsYmF0LmNvbS8ke3BhdGh9YDtcblxuICByZXR1cm4gdXJsO1xufVxuIl0sIm5hbWVzIjpbInRva2Vuc0Zyb21NYXJrZG93biIsInRva2Vuc0Zyb21NYXJrZG93blN0eWxlIiwiZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zIiwiaHRtbEZyb21NYXJrZG93bk9wdGlvbnNBbmRJbXBvcnRlciIsImRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zIiwidG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmciLCJ0b3Btb3N0Q1NTTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwiZ3JhbW1hclV0aWxpdGllcyIsIlZpZXciLCJFbGVtZW50IiwicGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJpbmRleCIsInVwZGF0ZUhUTUwiLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duU3R5bGUiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsInBsYWluVGV4dEN1c3RvbUhhbmRsZXIiLCJwbGFpblRleHQiLCJwcmV2aWV3Q3VzdG9tSGFuZGxlciIsInByZXZpZXciLCJrZXlVcEN1c3RvbUhhbmRsZXIiLCJ1cGRhdGUiLCJodG1sQ3VzdG9tSGFuZGxlciIsImh0bWwiLCJjc3NDdXN0b21IYW5kbGVyIiwiY3NzIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsInVwZGF0ZU1hcmtkb3duIiwidXBkYXRlQ1NTIiwiZ2V0TWFya2Rvd25TdHlsZSIsInRva2VucyIsImRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJyZXNldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJyZXNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsIm5vZGUiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsIm1hcmtkb3duU3R5bGVUb2tlbnMiLCJzZXRNYXJrZG93blN0eWxlVG9rZW5zIiwic2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImdldE1hcmtkb3duIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJyZXNldE1hcmtkb3duVG9rZW5zIiwicmVzZXREb2N1bWVudE1hcmtkb3duTm9kZSIsImNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNvbnRleHQiLCJpbXBvcnRlciIsInJlc29sdmUiLCJkb2N1bWVudE1hcmtkb3duTm9kZVBhcnNlVHJlZSIsIm1hcmtkb3duUGFyc2VUcmVlIiwibWFya2Rvd25Ub2tlbnMiLCJzZXRNYXJrZG93blRva2VucyIsInNldERvY3VtZW50TWFya2Rvd25Ob2RlIiwidXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImdldERvY3VtZW50TWFya2Rvd25Ob2RlIiwidG9wbW9zdEhUTUxOb2RlIiwiZ2V0TWFya2Rvd25Ub2tlbnMiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSIsImh0bWxQYXJzZVRyZWUiLCJkaXZpc2lvbkhUTUxOb2RlcyIsImdldERpdmlzaW9uSFRNTE5vZGVzIiwibGVuZ3RoIiwicGF0aFRvVVJMIiwiSlNYRWxlbWVudHMiLCJ1cGRhdGVQcmV2aWV3RGl2IiwidXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEiLCJ1cGRhdGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJ1cGRhdGVQYWdlQnV0dG9uc0RpdiIsIm9wdGlvbnMiLCJpbmRleE9wdGlvbnMiLCJ1cGRhdGVYTVAiLCJnZXRNYXJrZG93blN0eWxlVG9rZW5zIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJnZXRNYXJrZG93blN0eWxlRWxlbWVudCIsImdldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJFTVBUWV9TVFJJTkciLCJzZXRDU1MiLCJjbGVhckNTU1BhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJDU1MiLCJ0b3Btb3N0Q1NTTm9kZSIsInRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlIiwiY3NzUGFyc2VUcmVlIiwidXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJjc3NTZWxlY3RvcnNTdHJpbmciLCJDU1NfU0VMRUNUT1JTX1NUUklORyIsImhpZGVNYXJrZG93bkNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duQ29udGFpbmVyRGl2IiwiaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlQ1NTQ29udGFpbmVyRGl2IiwiaGlkZUhUTUxDb250YWluZXJEaXYiLCJoaWRlUHJldmlld0NvbnRhaW5lckRpdiIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJoaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJzaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhIiwic2hvd1ByZXZpZXdDb250YWluZXJEaXYiLCJoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2Iiwic2hvd0hUTUxDb250YWluZXJEaXYiLCJzaG93Q1NTQ29udGFpbmVyRGl2Iiwic2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhIiwiaGlkZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInByb3BlcnRpZXMiLCJnZXRTdGF0ZSIsInRvcG1vc3RNTWFya2Rvd25Ob2RlIiwidG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJMZWZ0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbUNTUyIsIm9uQ3VzdG9tSFRNTCIsIm9uQ3VzdG9tUHJldmlldyIsIm9uQ3VzdG9tUGxhaW5UZXh0IiwiUGFnZUJ1dHRvbnNEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJDU1NDb250YWluZXJEaXYiLCJIVE1MQ29udGFpbmVyRGl2IiwiUHJldmlld0NvbnRhaW5lckRpdiIsIlBsYWluVGV4dENvbnRhaW5lckRpdiIsIkhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsIkNTU1BhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiRG93bmxvYWRzRGl2IiwicGF0aCIsInVybCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcWNBOzs7ZUFBQTs7O3NFQW5jc0I7c0JBRUU7dUJBQ1M7NEJBQ21DO2tFQUUzQztxRUFDQTtvRUFDRTs2REFDQzs0REFDQTs2REFDQzs4REFDQzs4REFDQztnRUFDQztpRUFDQzs2REFDQTs4REFDQztrRUFDQTtzRUFDSTswQkFFSTsyQkFDUzs7Ozs7O0FBRW5ELE1BQU0sRUFBRUEsa0JBQWtCLEVBQ2xCQyx1QkFBdUIsRUFDdkJDLDhCQUE4QixFQUM5QkMsa0NBQWtDLEVBQ2xDQyxtQ0FBbUMsRUFDbkNDLHVDQUF1QyxFQUN2Q0MseUNBQXlDLEVBQ3pDQywyQ0FBMkMsRUFBRSxHQUFHQyx1QkFBZ0I7QUFFeEUsTUFBTUMsYUFBYUMsYUFBTztJQUN4QkMsMEJBQTBCLENBQUNDLE9BQU9DLFNBQVNDO1FBQ3pDLElBQUksQ0FBQ0MsVUFBVSxDQUFDRDtJQUNsQixFQUFDO0lBRURFLDZCQUE2QixDQUFDSixPQUFPQztRQUNuQyxJQUFJLENBQUNJLGFBQWE7SUFDcEIsRUFBQztJQUVEQyx3QkFBd0IsQ0FBQ04sT0FBT0M7UUFDOUIsSUFBSSxDQUFDTSxRQUFRO0lBQ2YsRUFBQztJQUVEQyx5QkFBeUIsQ0FBQ1IsT0FBT0M7UUFDL0IsSUFBSSxDQUFDUSxTQUFTO0lBQ2hCLEVBQUM7SUFFREMsdUJBQXVCLENBQUNWLE9BQU9DO1FBQzdCLElBQUksQ0FBQ1UsT0FBTztJQUNkLEVBQUM7SUFFREMscUJBQXFCLENBQUNaLE9BQU9DO1FBQzNCLElBQUksQ0FBQ1ksTUFBTTtJQUNiLEVBQUM7SUFFREMsb0JBQW9CLENBQUNkLE9BQU9DO1FBQzFCLElBQUksQ0FBQ2MsSUFBSTtJQUNYLEVBQUM7SUFFREMsbUJBQW1CLENBQUNoQixPQUFPQztRQUN6QixJQUFJLENBQUNnQixHQUFHO0lBQ1YsRUFBQztJQUVESixT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