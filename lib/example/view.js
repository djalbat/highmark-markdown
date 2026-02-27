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
const _targets = require("../targets");
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
        const topmostCSSNode = topmostCSSNodeFromDocumentMarkdownStyleNode(documentMarkdownStyleNode), target = _targets.WEB_TARGET, tokens = markdownStyleTokens, context = {
            target,
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
        this.preview();
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
function pathToURL(path) {
    const url = `https://djalbat.com/${path}`;
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvY3NzXCI7XG5pbXBvcnQgSFRNTFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgV0VCX1RBUkdFVCB9IGZyb20gXCIuLi90YXJnZXRzXCI7XG5pbXBvcnQgeyBpbml0aWFsTWFya2Rvd24sIGltcG9ydGVyIH0gZnJvbSBcIi4vaW1wb3J0ZXJcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgQ1NTX1NFTEVDVE9SU19TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyB0b2tlbnNGcm9tTWFya2Rvd24sXG4gICAgICAgIHRva2Vuc0Zyb21NYXJrZG93blN0eWxlLFxuICAgICAgICBkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnMsXG4gICAgICAgIGh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIsXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zLFxuICAgICAgICB0b3Btb3N0SFRNTE5vZGVGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUsXG4gICAgICAgIGNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nLFxuICAgICAgICB0b3Btb3N0Q1NTTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIH0gPSBncmFtbWFyVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHRoaXMudXBkYXRlSFRNTChpbmRleCk7XG4gIH1cblxuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAgcGxhaW5UZXh0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxhaW5UZXh0KCk7XG4gIH1cblxuICBwcmV2aWV3Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucHJldmlldygpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGh0bWxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5odG1sKCk7XG4gIH1cblxuICBjc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcblxuICAgIHRoaXMudXBkYXRlSFRNTCgpO1xuXG4gICAgdGhpcy51cGRhdGVDU1MoKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpLFxuICAgICAgICAgIGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgPSBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlLCAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZVRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucyk7XG5cbiAgICB0aGlzLnNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd24oKSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duKG1hcmtkb3duKSxcbiAgICAgICAgICBkb2N1bWVudE1hcmtkb3duTm9kZSA9IGRvY3VtZW50TWFya2Rvd25Ob2RlRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKGRvY3VtZW50TWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0TWFya2Rvd25Ub2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldERvY3VtZW50TWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnMsXG4gICAgICBpbXBvcnRlclxuICAgIH07XG5cbiAgICBkb2N1bWVudE1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZG9jdW1lbnRNYXJrZG93bk5vZGVQYXJzZVRyZWUgPSBkb2N1bWVudE1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duUGFyc2VUcmVlID0gZG9jdW1lbnRNYXJrZG93bk5vZGVQYXJzZVRyZWUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duVG9rZW5zID0gdG9rZW5zOyAgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0RG9jdW1lbnRNYXJrZG93bk5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKG1hcmtkb3duUGFyc2VUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZUhUTUwoaW5kZXggPSAwKSB7XG4gICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgdGhpcy5jbGVhclByZXZpZXdEaXYoKTtcblxuICAgIHRoaXMuY2xlYXJQbGFpblRleHRUZXh0YXJlYSgpO1xuXG4gICAgdGhpcy5jbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgdGhpcy5jbGVhclBhZ2VCdXR0b25zRGl2KCk7XG5cbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0RG9jdW1lbnRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICB0b3Btb3N0SFRNTE5vZGUgPSB0b3Btb3N0SFRNTE5vZGVGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUpO1xuXG4gICAgaWYgKHRvcG1vc3RIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3QgbWFya2Rvd25Ub2tlbnMgPSB0aGlzLmdldE1hcmtkb3duVG9rZW5zKCksXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25Ub2tlbnM7ICAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnNcbiAgICB9O1xuXG4gICAgdG9wbW9zdEhUTUxOb2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlLmdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCk7XG5cbiAgICBpZiAoZGl2aXNpb25IVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUgPSBkaXZpc2lvbkhUTUxOb2RlLmFzUGFyc2VUcmVlKCksXG4gICAgICAgICAgaHRtbFBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IHRvcG1vc3RIVE1MTm9kZS5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGxlbmd0aCA9IGRpdmlzaW9uSFRNTE5vZGVzLmxlbmd0aDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2VucyxcbiAgICAgIHBhdGhUb1VSTFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZGl2aXNpb25IVE1MTm9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBsYWluVGV4dFRleHRhcmVhKGRpdmlzaW9uSFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEoaHRtbFBhcnNlVHJlZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCwgaW5kZXgpO1xuXG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgb3B0aW9ucyA9IGluZGV4T3B0aW9ucywgLy8vXG4gICAgICAgICAgaHRtbCA9IGh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIobWFya2Rvd24sIG9wdGlvbnMsIGltcG9ydGVyKTtcblxuICAgIHRoaXMudXBkYXRlWE1QKGh0bWwsIGNvbnRleHQpO1xuICB9XG5cbiAgdXBkYXRlQ1NTKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlRWxlbWVudCA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZUVsZW1lbnQoKSxcbiAgICAgICAgICBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKCk7XG5cbiAgICBpZiAoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgICBtYXJrZG93blN0eWxlRWxlbWVudC5zZXRDU1MoY3NzKTtcblxuICAgICAgdGhpcy5jbGVhckNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJDU1MoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcG1vc3RDU1NOb2RlID0gdG9wbW9zdENTU05vZGVGcm9tRG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZShkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKSxcbiAgICAgICAgICB0YXJnZXQgPSBXRUJfVEFSR0VULFxuICAgICAgICAgIHRva2VucyA9IG1hcmtkb3duU3R5bGVUb2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdENTU05vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlID0gdG9wbW9zdENTU05vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBjc3NQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZTsgLy8vXG5cbiAgICB0aGlzLnVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhKGNzc1BhcnNlVHJlZSk7XG5cbiAgICBjb25zdCBjc3NTZWxlY3RvcnNTdHJpbmcgPSBDU1NfU0VMRUNUT1JTX1NUUklORyxcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcobWFya2Rvd25TdHlsZSwgY3NzU2VsZWN0b3JzU3RyaW5nKTtcblxuICAgIG1hcmtkb3duU3R5bGVFbGVtZW50LnNldENTUyhjc3MpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcbiAgfVxuXG4gIG1hcmtkb3duU3R5bGUoKSB7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBtYXJrZG93bigpIHtcbiAgICB0aGlzLnNob3dNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1BsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIHByZXZpZXcoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1ByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBodG1sKCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd0hUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgY3NzKCkge1xuICAgIHRoaXMuc2hvd0NTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLnNob3dDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuaGlkZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blRva2VucygpIHtcbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IG51bGw7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKTtcbiAgfVxuXG4gIHJlc2V0TWFya2Rvd25TdHlsZVRva2VucygpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKTtcbiAgfVxuXG4gIHJlc2V0RG9jdW1lbnRNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgZG9jdW1lbnRNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXREb2N1bWVudE1hcmtkb3duTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSk7XG4gIH1cblxuICByZXNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSk7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXRNYXJrZG93blRva2VucygpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ub2tlbnM7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZVRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVUb2tlbnM7XG4gIH1cblxuICBnZXREb2N1bWVudE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RNTWFya2Rvd25Ob2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9wbW9zdE1NYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGU7XG4gIH1cblxuICBzZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25Ub2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25TdHlsZVRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RG9jdW1lbnRNYXJrZG93bk5vZGUodG9wbW9zdE1NYXJrZG93bk5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RNTWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IG51bGwsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZVRva2VucyA9IG51bGwsXG4gICAgICAgICAgZG9jdW1lbnRNYXJrZG93bk5vZGUgPSBudWxsLFxuICAgICAgICAgIGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2VucyxcbiAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMsXG4gICAgICBkb2N1bWVudE1hcmtkb3duTm9kZSxcbiAgICAgIGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMubWFya2Rvd24oKTtcblxuICAgIHRoaXMucHJldmlldygpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8TGVmdFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tQ1NTPXt0aGlzLmNzc0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tSFRNTD17dGhpcy5odG1sQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QcmV2aWV3PXt0aGlzLnByZXZpZXdDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVBsYWluVGV4dD17dGhpcy5wbGFpblRleHRDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYWdlQnV0dG9uc0RpdiBvbkN1c3RvbVBhZ2VVcGRhdGU9e3RoaXMucGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8Q1NTQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQbGFpblRleHRDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgICA8Q1NTUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gXCJcIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIHBhdGhUb1VSTChwYXRoKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2RqYWxiYXQuY29tLyR7cGF0aH1gO1xuXG4gIHJldHVybiB1cmw7XG59XG4iXSwibmFtZXMiOlsidG9rZW5zRnJvbU1hcmtkb3duIiwidG9rZW5zRnJvbU1hcmtkb3duU3R5bGUiLCJkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnMiLCJodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyIiwiZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnMiLCJ0b3Btb3N0SFRNTE5vZGVGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUiLCJjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyIsInRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJncmFtbWFyVXRpbGl0aWVzIiwiVmlldyIsIkVsZW1lbnQiLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImluZGV4IiwidXBkYXRlSFRNTCIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwibWFya2Rvd25TdHlsZSIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwicGxhaW5UZXh0Q3VzdG9tSGFuZGxlciIsInBsYWluVGV4dCIsInByZXZpZXdDdXN0b21IYW5kbGVyIiwicHJldmlldyIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsImh0bWxDdXN0b21IYW5kbGVyIiwiaHRtbCIsImNzc0N1c3RvbUhhbmRsZXIiLCJjc3MiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwidXBkYXRlTWFya2Rvd24iLCJ1cGRhdGVDU1MiLCJnZXRNYXJrZG93blN0eWxlIiwidG9rZW5zIiwiZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSIsInJlc2V0TWFya2Rvd25TdHlsZVRva2VucyIsInJlc2V0RG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwibm9kZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwibWFya2Rvd25TdHlsZVRva2VucyIsInNldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJzZXREb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiZ2V0TWFya2Rvd24iLCJkb2N1bWVudE1hcmtkb3duTm9kZSIsInJlc2V0TWFya2Rvd25Ub2tlbnMiLCJyZXNldERvY3VtZW50TWFya2Rvd25Ob2RlIiwiY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY29udGV4dCIsImltcG9ydGVyIiwicmVzb2x2ZSIsImRvY3VtZW50TWFya2Rvd25Ob2RlUGFyc2VUcmVlIiwibWFya2Rvd25QYXJzZVRyZWUiLCJtYXJrZG93blRva2VucyIsInNldE1hcmtkb3duVG9rZW5zIiwic2V0RG9jdW1lbnRNYXJrZG93bk5vZGUiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJjbGVhclBsYWluVGV4dFRleHRhcmVhIiwiY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclBhZ2VCdXR0b25zRGl2IiwiZ2V0RG9jdW1lbnRNYXJrZG93bk5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJnZXRNYXJrZG93blRva2VucyIsImRpdmlzaW9uSFRNTE5vZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlQXQiLCJkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlIiwiaHRtbFBhcnNlVHJlZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwiZ2V0RGl2aXNpb25IVE1MTm9kZXMiLCJsZW5ndGgiLCJwYXRoVG9VUkwiLCJ1cGRhdGVQcmV2aWV3RGl2IiwidXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEiLCJ1cGRhdGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJ1cGRhdGVQYWdlQnV0dG9uc0RpdiIsIm9wdGlvbnMiLCJpbmRleE9wdGlvbnMiLCJ1cGRhdGVYTVAiLCJnZXRNYXJrZG93blN0eWxlVG9rZW5zIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJnZXRNYXJrZG93blN0eWxlRWxlbWVudCIsImdldERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJFTVBUWV9TVFJJTkciLCJzZXRDU1MiLCJjbGVhckNTU1BhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJDU1MiLCJ0b3Btb3N0Q1NTTm9kZSIsInRhcmdldCIsIldFQl9UQVJHRVQiLCJ0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZSIsImNzc1BhcnNlVHJlZSIsInVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwiY3NzU2VsZWN0b3JzU3RyaW5nIiwiQ1NTX1NFTEVDVE9SU19TVFJJTkciLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiaGlkZUNTU0NvbnRhaW5lckRpdiIsImhpZGVIVE1MQ29udGFpbmVyRGl2IiwiaGlkZVByZXZpZXdDb250YWluZXJEaXYiLCJzaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwic2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsInNob3dDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJwcm9wZXJ0aWVzIiwiZ2V0U3RhdGUiLCJ0b3Btb3N0TU1hcmtkb3duTm9kZSIsInRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInBhdGgiLCJ1cmwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNjQTs7O2VBQUE7OztzRUFwY3NCO3NCQUVFO3VCQUNTOzRCQUNtQztxRUFFM0M7b0VBQ0U7NkRBQ0M7NERBQ0E7NkRBQ0M7OERBQ0M7OERBQ0M7Z0VBQ0M7aUVBQ0M7NkRBQ0E7OERBQ0M7a0VBQ0E7c0VBQ0k7eUJBRVg7MEJBQ2U7MkJBQ1M7Ozs7OztBQUVuRCxNQUFNLEVBQUVBLGtCQUFrQixFQUNsQkMsdUJBQXVCLEVBQ3ZCQyw4QkFBOEIsRUFDOUJDLGtDQUFrQyxFQUNsQ0MsbUNBQW1DLEVBQ25DQyx1Q0FBdUMsRUFDdkNDLHlDQUF5QyxFQUN6Q0MsMkNBQTJDLEVBQUUsR0FBR0MsdUJBQWdCO0FBRXhFLE1BQU1DLGFBQWFDLGFBQU87SUFDeEJDLDBCQUEwQixDQUFDQyxPQUFPQyxTQUFTQztRQUN6QyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0Q7SUFDbEIsRUFBQztJQUVERSw2QkFBNkIsQ0FBQ0osT0FBT0M7UUFDbkMsSUFBSSxDQUFDSSxhQUFhO0lBQ3BCLEVBQUM7SUFFREMsd0JBQXdCLENBQUNOLE9BQU9DO1FBQzlCLElBQUksQ0FBQ00sUUFBUTtJQUNmLEVBQUM7SUFFREMseUJBQXlCLENBQUNSLE9BQU9DO1FBQy9CLElBQUksQ0FBQ1EsU0FBUztJQUNoQixFQUFDO0lBRURDLHVCQUF1QixDQUFDVixPQUFPQztRQUM3QixJQUFJLENBQUNVLE9BQU87SUFDZCxFQUFDO0lBRURDLHFCQUFxQixDQUFDWixPQUFPQztRQUMzQixJQUFJLENBQUNZLE1BQU07SUFDYixFQUFDO0lBRURDLG9CQUFvQixDQUFDZCxPQUFPQztRQUMxQixJQUFJLENBQUNjLElBQUk7SUFDWCxFQUFDO0lBRURDLG1CQUFtQixDQUFDaEIsT0FBT0M7UUFDekIsSUFBSSxDQUFDZ0IsR0FBRztJQUNWLEVBQUM7SUFFREosU0FBUztRQUNQLElBQUksQ0FBQ0ssbUJB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