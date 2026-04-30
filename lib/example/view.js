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
    static initialMarkdown = `<outer foo="bah">
<inner>
adsfasdf
</inner>
<simple foo="bah" />
</outer>`;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvY3NzXCI7XG5pbXBvcnQgSFRNTFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgaW5pdGlhbE1hcmtkb3duLCBpbXBvcnRlciB9IGZyb20gXCIuL2ltcG9ydGVyXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIENTU19TRUxFQ1RPUlNfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgdG9rZW5zRnJvbU1hcmtkb3duLFxuICAgICAgICB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSxcbiAgICAgICAgZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zLFxuICAgICAgICBodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyLFxuICAgICAgICBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyxcbiAgICAgICAgdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlLFxuICAgICAgICBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyxcbiAgICAgICAgdG9wbW9zdENTU05vZGVGcm9tRG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSB9ID0gZ3JhbW1hclV0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUhUTUwoaW5kZXgpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIG1hcmtkb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd24oKTtcbiAgfVxuXG4gIHBsYWluVGV4dEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWluVGV4dCgpO1xuICB9XG5cbiAgcHJldmlld0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxuXG4gIGtleVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBodG1sQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaHRtbCgpO1xuICB9XG5cbiAgY3NzQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcblxuICAgIHRoaXMudXBkYXRlQ1NTKCk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKSxcbiAgICAgICAgICBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID0gZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGlmIChkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0TWFya2Rvd25TdHlsZVRva2VucygpO1xuXG4gICAgICB0aGlzLnJlc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSwgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0b2tlbnM7IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuXG4gICAgdGhpcy5zZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93biksXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93bk5vZGUgPSBkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGlmIChkb2N1bWVudE1hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE1hcmtkb3duVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXREb2N1bWVudE1hcmtkb3duTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgaW1wb3J0ZXJcbiAgICB9O1xuXG4gICAgZG9jdW1lbnRNYXJrZG93bk5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGRvY3VtZW50TWFya2Rvd25Ob2RlUGFyc2VUcmVlID0gZG9jdW1lbnRNYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blBhcnNlVHJlZSA9IGRvY3VtZW50TWFya2Rvd25Ob2RlUGFyc2VUcmVlLCAvLy9cbiAgICAgICAgICBtYXJrZG93blRva2VucyA9IHRva2VuczsgIC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucyk7XG5cbiAgICB0aGlzLnNldERvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShtYXJrZG93blBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVIVE1MKGluZGV4ID0gMCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG5cbiAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgY29uc3QgZG9jdW1lbnRNYXJrZG93bk5vZGUgPSB0aGlzLmdldERvY3VtZW50TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcblxuICAgIGlmICh0b3Btb3N0SFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blRva2VucygpLFxuICAgICAgICAgIHRva2VucyA9IG1hcmtkb3duVG9rZW5zOyAgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zXG4gICAgfTtcblxuICAgIHRvcG1vc3RIVE1MTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZS5nZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpO1xuXG4gICAgaWYgKGRpdmlzaW9uSFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTm9kZS5hc1BhcnNlVHJlZSgpLFxuICAgICAgICAgIGh0bWxQYXJzZVRyZWUgPSBkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlLCAgLy8vXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZXMgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBsZW5ndGggPSBkaXZpc2lvbkhUTUxOb2Rlcy5sZW5ndGg7ICAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnMsXG4gICAgICBwYXRoVG9VUkxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIG9wdGlvbnMgPSBpbmRleE9wdGlvbnMsIC8vL1xuICAgICAgICAgIGh0bWwgPSBodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyKG1hcmtkb3duLCBvcHRpb25zLCBpbXBvcnRlcik7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sLCBjb250ZXh0KTtcbiAgfVxuXG4gIHVwZGF0ZUNTUygpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blN0eWxlVG9rZW5zKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVFbGVtZW50KCksXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpO1xuXG4gICAgaWYgKGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICAgIHRoaXMuY2xlYXJDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQ1NTKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25TdHlsZVRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICB0b3Btb3N0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdENTU05vZGVQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIGNzc1BhcnNlVHJlZSA9IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlOyAvLy9cblxuICAgIHRoaXMudXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoY3NzUGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IGNzc1NlbGVjdG9yc1N0cmluZyA9IENTU19TRUxFQ1RPUlNfU1RSSU5HLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyhtYXJrZG93blN0eWxlLCBjc3NTZWxlY3RvcnNTdHJpbmcpO1xuXG4gICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5oaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICByZXNldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuICB9XG5cbiAgcmVzZXREb2N1bWVudE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldERvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcbiAgfVxuXG4gIHJlc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZShkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKTtcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIGdldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25Ub2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZG93blRva2VucztcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVRva2VucztcbiAgfVxuXG4gIGdldERvY3VtZW50TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZTtcbiAgfVxuXG4gIHNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blN0eWxlVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXREb2N1bWVudE1hcmtkb3duTm9kZSh0b3Btb3N0TU1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBkb2N1bWVudE1hcmtkb3duTm9kZSA9IG51bGwsXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zLFxuICAgICAgbWFya2Rvd25TdHlsZVRva2VucyxcbiAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlLFxuICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuXG4gICAgdGhpcy5odG1sKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxDU1NDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFBsYWluVGV4dENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDxDU1NQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duLCBpbml0aWFsTWFya2Rvd25TdHlsZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gaW5pdGlhbE1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd24obWFya2Rvd24pO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGA8b3V0ZXIgZm9vPVwiYmFoXCI+XG48aW5uZXI+XG5hZHNmYXNkZlxuPC9pbm5lcj5cbjxzaW1wbGUgZm9vPVwiYmFoXCIgLz5cbjwvb3V0ZXI+YDtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBcIlwiO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gcGF0aFRvVVJMKHBhdGgpIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vZGphbGJhdC5jb20vJHtwYXRofWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cbiJdLCJuYW1lcyI6WyJ0b2tlbnNGcm9tTWFya2Rvd24iLCJ0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSIsImRvY3VtZW50TWFya2Rvd25Ob2RlRnJvbVRva2VucyIsImh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIiLCJkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyIsInRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZSIsImNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nIiwidG9wbW9zdENTU05vZGVGcm9tRG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSIsImdyYW1tYXJVdGlsaXRpZXMiLCJWaWV3IiwiRWxlbWVudCIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW5kZXgiLCJ1cGRhdGVIVE1MIiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJtYXJrZG93blN0eWxlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJwbGFpblRleHRDdXN0b21IYW5kbGVyIiwicGxhaW5UZXh0IiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZUNTUyIsImdldE1hcmtkb3duU3R5bGUiLCJ0b2tlbnMiLCJkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwicmVzZXRNYXJrZG93blN0eWxlVG9rZW5zIiwicmVzZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJub2RlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJtYXJrZG93blN0eWxlVG9rZW5zIiwic2V0TWFya2Rvd25TdHlsZVRva2VucyIsInNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJnZXRNYXJrZG93biIsImRvY3VtZW50TWFya2Rvd25Ob2RlIiwicmVzZXRNYXJrZG93blRva2VucyIsInJlc2V0RG9jdW1lbnRNYXJrZG93bk5vZGUiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjb250ZXh0IiwiaW1wb3J0ZXIiLCJyZXNvbHZlIiwiZG9jdW1lbnRNYXJrZG93bk5vZGVQYXJzZVRyZWUiLCJtYXJrZG93blBhcnNlVHJlZSIsIm1hcmtkb3duVG9rZW5zIiwic2V0TWFya2Rvd25Ub2tlbnMiLCJzZXREb2N1bWVudE1hcmtkb3duTm9kZSIsInVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJjbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJnZXREb2N1bWVudE1hcmtkb3duTm9kZSIsInRvcG1vc3RIVE1MTm9kZSIsImdldE1hcmtkb3duVG9rZW5zIiwiZGl2aXNpb25IVE1MTm9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUiLCJodG1sUGFyc2VUcmVlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJnZXREaXZpc2lvbkhUTUxOb2RlcyIsImxlbmd0aCIsInBhdGhUb1VSTCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsInVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2Iiwib3B0aW9ucyIsImluZGV4T3B0aW9ucyIsInVwZGF0ZVhNUCIsImdldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsImdldE1hcmtkb3duU3R5bGVFbGVtZW50IiwiZ2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSIsIkVNUFRZX1NUUklORyIsInNldENTUyIsImNsZWFyQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhckNTUyIsInRvcG1vc3RDU1NOb2RlIiwidG9wbW9zdENTU05vZGVQYXJzZVRyZWUiLCJjc3NQYXJzZVRyZWUiLCJ1cGRhdGVDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImNzc1NlbGVjdG9yc1N0cmluZyIsIkNTU19TRUxFQ1RPUlNfU1RSSU5HIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImhpZGVDU1NDb250YWluZXJEaXYiLCJoaWRlSFRNTENvbnRhaW5lckRpdiIsImhpZGVQcmV2aWV3Q29udGFpbmVyRGl2Iiwic2hvd1BsYWluVGV4dENvbnRhaW5lckRpdiIsImhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJzaG93UHJldmlld0NvbnRhaW5lckRpdiIsImhpZGVQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93SFRNTENvbnRhaW5lckRpdiIsInNob3dDU1NDb250YWluZXJEaXYiLCJzaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwicHJvcGVydGllcyIsImdldFN0YXRlIiwidG9wbW9zdE1NYXJrZG93bk5vZGUiLCJ0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIkxlZnRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21NYXJrZG93biIsIm9uQ3VzdG9tTWFya2Rvd25TdHlsZSIsIk1hcmtkb3duQ29udGFpbmVyRGl2Iiwib25DdXN0b21LZXlVcCIsIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIlJpZ2h0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tQ1NTIiwib25DdXN0b21IVE1MIiwib25DdXN0b21QcmV2aWV3Iiwib25DdXN0b21QbGFpblRleHQiLCJQYWdlQnV0dG9uc0RpdiIsIm9uQ3VzdG9tUGFnZVVwZGF0ZSIsIkNTU0NvbnRhaW5lckRpdiIsIkhUTUxDb250YWluZXJEaXYiLCJQcmV2aWV3Q29udGFpbmVyRGl2IiwiUGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUi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