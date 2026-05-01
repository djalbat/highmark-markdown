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
            pathToURL
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
    static initialMarkdown = `<DownloadsDiv/>`;
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
function pathToURL(path) {
    const url = `https://djalbat.com/${path}`;
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvY3NzXCI7XG5pbXBvcnQgSFRNTFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgaW5pdGlhbE1hcmtkb3duLCBpbXBvcnRlciB9IGZyb20gXCIuL2ltcG9ydGVyXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIENTU19TRUxFQ1RPUlNfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgdG9rZW5zRnJvbU1hcmtkb3duLFxuICAgICAgICB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSxcbiAgICAgICAgZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zLFxuICAgICAgICBodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyLFxuICAgICAgICBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyxcbiAgICAgICAgdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlLFxuICAgICAgICBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyxcbiAgICAgICAgdG9wbW9zdENTU05vZGVGcm9tRG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSB9ID0gZ3JhbW1hclV0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUhUTUwoaW5kZXgpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIG1hcmtkb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd24oKTtcbiAgfVxuXG4gIHBsYWluVGV4dEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWluVGV4dCgpO1xuICB9XG5cbiAgcHJldmlld0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxuXG4gIGtleVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBodG1sQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaHRtbCgpO1xuICB9XG5cbiAgY3NzQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcblxuICAgIHRoaXMudXBkYXRlQ1NTKCk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKSxcbiAgICAgICAgICBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID0gZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGlmIChkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0TWFya2Rvd25TdHlsZVRva2VucygpO1xuXG4gICAgICB0aGlzLnJlc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSwgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0b2tlbnM7IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuXG4gICAgdGhpcy5zZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93biksXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93bk5vZGUgPSBkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGlmIChkb2N1bWVudE1hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE1hcmtkb3duVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXREb2N1bWVudE1hcmtkb3duTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgaW1wb3J0ZXJcbiAgICB9O1xuXG4gICAgZG9jdW1lbnRNYXJrZG93bk5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGRvY3VtZW50TWFya2Rvd25Ob2RlUGFyc2VUcmVlID0gZG9jdW1lbnRNYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blBhcnNlVHJlZSA9IGRvY3VtZW50TWFya2Rvd25Ob2RlUGFyc2VUcmVlLCAvLy9cbiAgICAgICAgICBtYXJrZG93blRva2VucyA9IHRva2VuczsgIC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucyk7XG5cbiAgICB0aGlzLnNldERvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShtYXJrZG93blBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVIVE1MKGluZGV4ID0gMCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG5cbiAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgY29uc3QgZG9jdW1lbnRNYXJrZG93bk5vZGUgPSB0aGlzLmdldERvY3VtZW50TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcblxuICAgIGlmICh0b3Btb3N0SFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blRva2VucygpLFxuICAgICAgICAgIHRva2VucyA9IG1hcmtkb3duVG9rZW5zOyAgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zXG4gICAgfTtcblxuICAgIHRvcG1vc3RIVE1MTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZS5nZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpO1xuXG4gICAgaWYgKGRpdmlzaW9uSFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTm9kZS5hc1BhcnNlVHJlZSgpLFxuICAgICAgICAgIGh0bWxQYXJzZVRyZWUgPSBkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlLCAgLy8vXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZXMgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBsZW5ndGggPSBkaXZpc2lvbkhUTUxOb2Rlcy5sZW5ndGg7ICAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnMsXG4gICAgICBwYXRoVG9VUkxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIG9wdGlvbnMgPSBpbmRleE9wdGlvbnMsIC8vL1xuICAgICAgICAgIGh0bWwgPSBodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyKG1hcmtkb3duLCBvcHRpb25zLCBpbXBvcnRlcik7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sLCBjb250ZXh0KTtcbiAgfVxuXG4gIHVwZGF0ZUNTUygpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blN0eWxlVG9rZW5zKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVFbGVtZW50KCksXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpO1xuXG4gICAgaWYgKGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICAgIHRoaXMuY2xlYXJDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQ1NTKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25TdHlsZVRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICB0b3Btb3N0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdENTU05vZGVQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIGNzc1BhcnNlVHJlZSA9IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlOyAvLy9cblxuICAgIHRoaXMudXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoY3NzUGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IGNzc1NlbGVjdG9yc1N0cmluZyA9IENTU19TRUxFQ1RPUlNfU1RSSU5HLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyhtYXJrZG93blN0eWxlLCBjc3NTZWxlY3RvcnNTdHJpbmcpO1xuXG4gICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5oaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICByZXNldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuICB9XG5cbiAgcmVzZXREb2N1bWVudE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldERvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcbiAgfVxuXG4gIHJlc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZShkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKTtcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIGdldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25Ub2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZG93blRva2VucztcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVRva2VucztcbiAgfVxuXG4gIGdldERvY3VtZW50TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZTtcbiAgfVxuXG4gIHNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blN0eWxlVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXREb2N1bWVudE1hcmtkb3duTm9kZSh0b3Btb3N0TU1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBkb2N1bWVudE1hcmtkb3duTm9kZSA9IG51bGwsXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zLFxuICAgICAgbWFya2Rvd25TdHlsZVRva2VucyxcbiAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlLFxuICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuXG4gICAgdGhpcy5odG1sKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxDU1NDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFBsYWluVGV4dENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDxDU1NQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duLCBpbml0aWFsTWFya2Rvd25TdHlsZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gaW5pdGlhbE1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd24obWFya2Rvd24pO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGA8RG93bmxvYWRzRGl2Lz5gO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IFwiXCI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBwYXRoVG9VUkwocGF0aCkge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kamFsYmF0LmNvbS8ke3BhdGh9YDtcblxuICByZXR1cm4gdXJsO1xufVxuIl0sIm5hbWVzIjpbInRva2Vuc0Zyb21NYXJrZG93biIsInRva2Vuc0Zyb21NYXJrZG93blN0eWxlIiwiZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zIiwiaHRtbEZyb21NYXJrZG93bk9wdGlvbnNBbmRJbXBvcnRlciIsImRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zIiwidG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmciLCJ0b3Btb3N0Q1NTTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwiZ3JhbW1hclV0aWxpdGllcyIsIlZpZXciLCJFbGVtZW50IiwicGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJpbmRleCIsInVwZGF0ZUhUTUwiLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duU3R5bGUiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsInBsYWluVGV4dEN1c3RvbUhhbmRsZXIiLCJwbGFpblRleHQiLCJwcmV2aWV3Q3VzdG9tSGFuZGxlciIsInByZXZpZXciLCJrZXlVcEN1c3RvbUhhbmRsZXIiLCJ1cGRhdGUiLCJodG1sQ3VzdG9tSGFuZGxlciIsImh0bWwiLCJjc3NDdXN0b21IYW5kbGVyIiwiY3NzIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsInVwZGF0ZU1hcmtkb3duIiwidXBkYXRlQ1NTIiwiZ2V0TWFya2Rvd25TdHlsZSIsInRva2VucyIsImRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJyZXNldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJyZXNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsIm5vZGUiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsIm1hcmtkb3duU3R5bGVUb2tlbnMiLCJzZXRNYXJrZG93blN0eWxlVG9rZW5zIiwic2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImdldE1hcmtkb3duIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJyZXNldE1hcmtkb3duVG9rZW5zIiwicmVzZXREb2N1bWVudE1hcmtkb3duTm9kZSIsImNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNvbnRleHQiLCJpbXBvcnRlciIsInJlc29sdmUiLCJkb2N1bWVudE1hcmtkb3duTm9kZVBhcnNlVHJlZSIsIm1hcmtkb3duUGFyc2VUcmVlIiwibWFya2Rvd25Ub2tlbnMiLCJzZXRNYXJrZG93blRva2VucyIsInNldERvY3VtZW50TWFya2Rvd25Ob2RlIiwidXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImdldERvY3VtZW50TWFya2Rvd25Ob2RlIiwidG9wbW9zdEhUTUxOb2RlIiwiZ2V0TWFya2Rvd25Ub2tlbnMiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSIsImh0bWxQYXJzZVRyZWUiLCJkaXZpc2lvbkhUTUxOb2RlcyIsImdldERpdmlzaW9uSFRNTE5vZGVzIiwibGVuZ3RoIiwicGF0aFRvVVJMIiwidXBkYXRlUHJldmlld0RpdiIsInVwZGF0ZVBsYWluVGV4dFRleHRhcmVhIiwidXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJvcHRpb25zIiwiaW5kZXhPcHRpb25zIiwidXBkYXRlWE1QIiwiZ2V0TWFya2Rvd25TdHlsZVRva2VucyIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwiZ2V0TWFya2Rvd25TdHlsZUVsZW1lbnQiLCJnZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwiRU1QVFlfU1RSSU5HIiwic2V0Q1NTIiwiY2xlYXJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyQ1NTIiwidG9wbW9zdENTU05vZGUiLCJ0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZSIsImNzc1BhcnNlVHJlZSIsInVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwiY3NzU2VsZWN0b3JzU3RyaW5nIiwiQ1NTX1NFTEVDVE9SU19TVFJJTkciLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiaGlkZUNTU0NvbnRhaW5lckRpdiIsImhpZGVIVE1MQ29udGFpbmVyRGl2IiwiaGlkZVByZXZpZXdDb250YWluZXJEaXYiLCJzaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwic2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsInNob3dDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJwcm9wZXJ0aWVzIiwiZ2V0U3RhdGUiLCJ0b3Btb3N0TU1hcmtkb3duTm9kZSIsInRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInBhdGgiLCJ1cmwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1jQTs7O2VBQUE7OztzRUFqY3NCO3NCQUVFO3VC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