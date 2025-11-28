"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get CSSClassFromMarkdownStyleNode () {
        return CSSClassFromMarkdownStyleNode;
    },
    get HTMLClassFromMarkdownNode () {
        return HTMLClassFromMarkdownNode;
    },
    get cssFromMarkdownStyleAndCSSSelectorsString () {
        return cssFromMarkdownStyleAndCSSSelectorsString;
    },
    get default () {
        return _default;
    },
    get documentMarkdownNodeFromTokens () {
        return documentMarkdownNodeFromTokens;
    },
    get documentMarkdownStyleNodeFromTokens () {
        return documentMarkdownStyleNodeFromTokens;
    },
    get htmlFromMarkdownOptionsAndImporter () {
        return htmlFromMarkdownOptionsAndImporter;
    },
    get tokensFromMarkdown () {
        return tokensFromMarkdown;
    },
    get tokensFromMarkdownStyle () {
        return tokensFromMarkdownStyle;
    },
    get topmostCSSNodeFromDocumentMarkdownStyleNode () {
        return topmostCSSNodeFromDocumentMarkdownStyleNode;
    },
    get topmostHTMLNodeFromDocumentMarkdownNode () {
        return topmostHTMLNodeFromDocumentMarkdownNode;
    }
});
var _occamdom = require("occam-dom");
var _css = /*#__PURE__*/ _interop_require_default(require("../node/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("../node/html"));
var _css1 = /*#__PURE__*/ _interop_require_default(require("../map/node/css"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("../map/node/html"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../markdown/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../markdown/parser"));
var _topmost = /*#__PURE__*/ _interop_require_default(require("../node/css/topmost"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../queries/markdown"));
var _topmost1 = /*#__PURE__*/ _interop_require_default(require("../node/html/topmost"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/lexer"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/parser"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../queries/markdownStyle"));
var _targets = require("../targets");
var _constants = require("../constants");
var _query = require("../utilities/query");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
var markdownLexer = _lexer.default.fromNothing(), markdownParser = _parser.default.fromNothing(), markdownStyleLexer = _lexer1.default.fromNothing(), markdownStyleParser = _parser1.default.fromNothing();
function tokensFromMarkdown(markdown) {
    var lexer = markdownLexer, content = markdown, tokens = lexer.tokenise(content);
    return tokens;
}
function tokensFromMarkdownStyle(markdownStyle) {
    var lexer = markdownStyleLexer, content = markdownStyle, tokens = lexer.tokenise(content);
    return tokens;
}
function HTMLClassFromMarkdownNode(markdownNode) {
    var Class;
    if (markdownNode === null) {
        Class = _topmost1.default; ///
    } else {
        var nonTerminalNode = markdownNode, ruleName = nonTerminalNode.getRuleName();
        Class = _html1.default[ruleName] || _html.default;
    }
    return Class;
}
function CSSClassFromMarkdownStyleNode(markdownStyleNode) {
    var Class;
    if (markdownStyleNode === null) {
        Class = _topmost.default; ///
    } else {
        var nonTerminalNode = markdownStyleNode, ruleName = nonTerminalNode.getRuleName();
        Class = _css1.default[ruleName] || _css.default;
    }
    return Class;
}
function documentMarkdownNodeFromTokens(tokens) {
    var parser = markdownParser, startRule = parser.getStartRule(), node = parser.parse(tokens, startRule), documentMarkdownNode = node; ///
    return documentMarkdownNode;
}
function htmlFromMarkdownOptionsAndImporter(markdown, options, importer) {
    var html = _constants.EMPTY_STRING;
    var tokens = tokensFromMarkdown(markdown), documentMarkdownNode = documentMarkdownNodeFromTokens(tokens);
    if (documentMarkdownNode !== null) {
        var context = _object_spread({
            tokens: tokens,
            importer: importer
        }, options);
        documentMarkdownNode.resolve(context);
        var topmostHTMLNode = topmostHTMLNodeFromDocumentMarkdownNode(documentMarkdownNode);
        if (topmostHTMLNode !== null) {
            topmostHTMLNode.resolve(context);
            html = topmostHTMLNode.asHTML(context);
        }
    }
    return html;
}
function documentMarkdownStyleNodeFromTokens(tokens) {
    var parser = markdownStyleParser, startRule = parser.getStartRule(), node = parser.parse(tokens, startRule), documentMarkdownStyleNode = node; ///
    return documentMarkdownStyleNode;
}
function topmostHTMLNodeFromDocumentMarkdownNode(documentMarkdownNode) {
    var ClassFromOuterNode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : HTMLClassFromMarkdownNode;
    var topmostHTMLNode = null;
    if (documentMarkdownNode !== null) {
        var node = documentMarkdownNode, queries = _markdown.default, nodes = (0, _query.nodesFromNodeAndQueries)(node, queries), outerNodes = nodes, topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes);
        topmostHTMLNode = topmostNode; ///
    }
    return topmostHTMLNode;
}
function cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorsString) {
    var css = _constants.EMPTY_STRING;
    var target = _targets.WEB_TARGET, tokens = tokensFromMarkdownStyle(markdownStyle), documentMarkdownStyleNode = documentMarkdownStyleNodeFromTokens(tokens);
    if (documentMarkdownStyleNode !== null) {
        var topmostCSSNode = topmostCSSNodeFromDocumentMarkdownStyleNode(documentMarkdownStyleNode), context = {
            target: target,
            tokens: tokens,
            cssSelectorsString: cssSelectorsString
        };
        topmostCSSNode.resolve(context);
        css = topmostCSSNode.asCSS(context);
    }
    return css;
}
function topmostCSSNodeFromDocumentMarkdownStyleNode(documentMarkdownStyleNode) {
    var ClassFromOuterNode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSClassFromMarkdownStyleNode;
    var node = documentMarkdownStyleNode, queries = _markdownStyle.default, nodes = (0, _query.nodesFromNodeAndQueries)(node, queries), outerNodes = nodes, topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes), topmostCSSNode = topmostNode; ///
    return topmostCSSNode;
}
var _default = {
    tokensFromMarkdown: tokensFromMarkdown,
    tokensFromMarkdownStyle: tokensFromMarkdownStyle,
    HTMLClassFromMarkdownNode: HTMLClassFromMarkdownNode,
    CSSClassFromMarkdownStyleNode: CSSClassFromMarkdownStyleNode,
    documentMarkdownNodeFromTokens: documentMarkdownNodeFromTokens,
    htmlFromMarkdownOptionsAndImporter: htmlFromMarkdownOptionsAndImporter,
    documentMarkdownStyleNodeFromTokens: documentMarkdownStyleNodeFromTokens,
    topmostHTMLNodeFromDocumentMarkdownNode: topmostHTMLNodeFromDocumentMarkdownNode,
    cssFromMarkdownStyleAndCSSSelectorsString: cssFromMarkdownStyleAndCSSSelectorsString,
    topmostCSSNodeFromDocumentMarkdownStyleNode: topmostCSSNodeFromDocumentMarkdownStyleNode
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uL25vZGUvY3NzXCI7XG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IGNzc05vZGVNYXAgZnJvbSBcIi4uL21hcC9ub2RlL2Nzc1wiO1xuaW1wb3J0IGh0bWxOb2RlTWFwIGZyb20gXCIuLi9tYXAvbm9kZS9odG1sXCI7XG5pbXBvcnQgTWFya2Rvd25MZXhlciBmcm9tIFwiLi4vbWFya2Rvd24vbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd24vcGFyc2VyXCI7XG5pbXBvcnQgVG9wbW9zdENTU05vZGUgZnJvbSBcIi4uL25vZGUvY3NzL3RvcG1vc3RcIjtcbmltcG9ydCBtYXJrZG93blF1ZXJpZXMgZnJvbSBcIi4uL3F1ZXJpZXMvbWFya2Rvd25cIjtcbmltcG9ydCBUb3Btb3N0SFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbC90b3Btb3N0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUxleGVyIGZyb20gXCIuLi9tYXJrZG93blN0eWxlL2xleGVyXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9wYXJzZXJcIjtcbmltcG9ydCBtYXJrZG93blN0eWxlUXVlcmllcyBmcm9tIFwiLi4vcXVlcmllcy9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IFdFQl9UQVJHRVQgfSBmcm9tIFwiLi4vdGFyZ2V0c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93bikge1xuICBjb25zdCBsZXhlciA9IG1hcmtkb3duTGV4ZXIsIC8vL1xuICAgICAgICBjb250ZW50ID0gbWFya2Rvd24sICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0Zyb21NYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpIHtcbiAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgIC8vL1xuICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgbGV0IENsYXNzO1xuXG4gIGlmIChtYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RIVE1MTm9kZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBDbGFzcyA9IGh0bWxOb2RlTWFwW3J1bGVOYW1lXSB8fCBIVE1MTm9kZTtcbiAgfVxuXG4gIHJldHVybiBDbGFzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENTU0NsYXNzRnJvbU1hcmtkb3duU3R5bGVOb2RlKG1hcmtkb3duU3R5bGVOb2RlKSB7XG4gIGxldCBDbGFzcztcblxuICBpZiAobWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RDU1NOb2RlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbWFya2Rvd25TdHlsZU5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBjc3NOb2RlTWFwW3J1bGVOYW1lXSB8fCBDU1NOb2RlO1xuICB9XG5cbiAgcmV0dXJuIENsYXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucykge1xuICBjb25zdCBwYXJzZXIgPSBtYXJrZG93blBhcnNlciwgLy8vXG4gICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSksXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gIHJldHVybiBkb2N1bWVudE1hcmtkb3duTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIobWFya2Rvd24sIG9wdGlvbnMsIGltcG9ydGVyKSB7XG4gIGxldCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93biksXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgaWYgKGRvY3VtZW50TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICBkb2N1bWVudE1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcblxuICAgIGlmICh0b3Btb3N0SFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRvcG1vc3RIVE1MTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gdG9wbW9zdEhUTUxOb2RlLmFzSFRNTChjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaHRtbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zKHRva2Vucykge1xuICBjb25zdCBwYXJzZXIgPSBtYXJrZG93blN0eWxlUGFyc2VyLCAvLy9cbiAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKSxcbiAgICAgICAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSA9IG5vZGU7IC8vL1xuXG4gIHJldHVybiBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlLCBDbGFzc0Zyb21PdXRlck5vZGUgPSBIVE1MQ2xhc3NGcm9tTWFya2Rvd25Ob2RlKSB7XG4gIGxldCB0b3Btb3N0SFRNTE5vZGUgPSBudWxsO1xuXG4gIGlmIChkb2N1bWVudE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudE1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHF1ZXJpZXMgPSBtYXJrZG93blF1ZXJpZXMsIC8vL1xuICAgICAgICAgIG5vZGVzID0gbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMobm9kZSwgcXVlcmllcyksXG4gICAgICAgICAgb3V0ZXJOb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICB0b3Btb3N0Tm9kZSA9IHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzKTtcblxuICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3ROb2RlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdEhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcobWFya2Rvd25TdHlsZSwgY3NzU2VsZWN0b3JzU3RyaW5nKSB7XG4gIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgY29uc3QgdGFyZ2V0ID0gV0VCX1RBUkdFVCxcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSksXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgPSBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gIGlmIChkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdG9wbW9zdENTU05vZGUgPSB0b3Btb3N0Q1NTTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUpLFxuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICBjc3NTZWxlY3RvcnNTdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdENTU05vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNzcyA9IHRvcG1vc3RDU1NOb2RlLmFzQ1NTKGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSwgQ2xhc3NGcm9tT3V0ZXJOb2RlID0gQ1NTQ2xhc3NGcm9tTWFya2Rvd25TdHlsZU5vZGUpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUsICAvLy9cbiAgICAgICAgcXVlcmllcyA9IG1hcmtkb3duU3R5bGVRdWVyaWVzLCAvLy9cbiAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyhub2RlLCBxdWVyaWVzKSxcbiAgICAgICAgb3V0ZXJOb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgdG9wbW9zdE5vZGUgPSB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzKENsYXNzRnJvbU91dGVyTm9kZSwgb3V0ZXJOb2RlcyksXG4gICAgICAgIHRvcG1vc3RDU1NOb2RlID0gdG9wbW9zdE5vZGU7ICAvLy9cblxuICByZXR1cm4gdG9wbW9zdENTU05vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdG9rZW5zRnJvbU1hcmtkb3duLFxuICB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSxcbiAgSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZSxcbiAgQ1NTQ2xhc3NGcm9tTWFya2Rvd25TdHlsZU5vZGUsXG4gIGRvY3VtZW50TWFya2Rvd25Ob2RlRnJvbVRva2VucyxcbiAgaHRtbEZyb21NYXJrZG93bk9wdGlvbnNBbmRJbXBvcnRlcixcbiAgZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnMsXG4gIHRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZSxcbiAgY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcsXG4gIHRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGVcbn07XG4iXSwibmFtZXMiOlsiQ1NTQ2xhc3NGcm9tTWFya2Rvd25TdHlsZU5vZGUiLCJIVE1MQ2xhc3NGcm9tTWFya2Rvd25Ob2RlIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmciLCJkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnMiLCJkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyIsImh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIiLCJ0b2tlbnNGcm9tTWFya2Rvd24iLCJ0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSIsInRvcG1vc3RDU1NOb2RlRnJvbURvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJ0b3Btb3N0SFRNTE5vZGVGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUiLCJ0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIiwibm9kZVV0aWxpdGllcyIsIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJtYXJrZG93biIsImxleGVyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibWFya2Rvd25TdHlsZSIsIm1hcmtkb3duTm9kZSIsIkNsYXNzIiwiVG9wbW9zdEhUTUxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImh0bWxOb2RlTWFwIiwiSFRNTE5vZGUiLCJtYXJrZG93blN0eWxlTm9kZSIsIlRvcG1vc3RDU1NOb2RlIiwiY3NzTm9kZU1hcCIsIkNTU05vZGUiLCJwYXJzZXIiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJub2RlIiwicGFyc2UiLCJkb2N1bWVudE1hcmtkb3duTm9kZSIsIm9wdGlvbnMiLCJpbXBvcnRlciIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJjb250ZXh0IiwicmVzb2x2ZSIsInRvcG1vc3RIVE1MTm9kZSIsImFzSFRNTCIsImRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJxdWVyaWVzIiwibWFya2Rvd25RdWVyaWVzIiwibm9kZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyIsIm91dGVyTm9kZXMiLCJ0b3Btb3N0Tm9kZSIsImNzc1NlbGVjdG9yc1N0cmluZyIsImNzcyIsInRhcmdldCIsIldFQl9UQVJHRVQiLCJ0b3Btb3N0Q1NTTm9kZSIsImFzQ1NTIiwibWFya2Rvd25TdHlsZVF1ZXJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTJEZ0JBO2VBQUFBOztRQWZBQztlQUFBQTs7UUEyRkFDO2VBQUFBOztRQWtDaEI7ZUFBQTs7UUEvRmdCQztlQUFBQTs7UUFvQ0FDO2VBQUFBOztRQTNCQUM7ZUFBQUE7O1FBdkRBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBMEhBQztlQUFBQTs7UUF2Q0FDO2VBQUFBOzs7d0JBckhjOzBEQUVWOzJEQUNDOzJEQUNFOzREQUNDOzREQUNFOzZEQUNDOzhEQUNBOytEQUNDOytEQUNBOzZEQUNHOzhEQUNDO29FQUNDO3VCQUVOO3lCQUNFO3FCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUMsNEJBQThCQyx1QkFBYSxDQUEzQ0Q7QUFFUixJQUFNRSxnQkFBZ0JDLGNBQWEsQ0FB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