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
            var divisionHTMLNOdes = topmostHTMLNode.getDivisionHTMLNodes();
            divisionHTMLNOdes.forEach(function(divisionHTMLNOde) {
                var divisionHTMLNOdeHTML = divisionHTMLNOde.asHTML(context);
                html = "".concat(html).concat(divisionHTMLNOdeHTML);
            });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uL25vZGUvY3NzXCI7XG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IGNzc05vZGVNYXAgZnJvbSBcIi4uL21hcC9ub2RlL2Nzc1wiO1xuaW1wb3J0IGh0bWxOb2RlTWFwIGZyb20gXCIuLi9tYXAvbm9kZS9odG1sXCI7XG5pbXBvcnQgTWFya2Rvd25MZXhlciBmcm9tIFwiLi4vbWFya2Rvd24vbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd24vcGFyc2VyXCI7XG5pbXBvcnQgVG9wbW9zdENTU05vZGUgZnJvbSBcIi4uL25vZGUvY3NzL3RvcG1vc3RcIjtcbmltcG9ydCBtYXJrZG93blF1ZXJpZXMgZnJvbSBcIi4uL3F1ZXJpZXMvbWFya2Rvd25cIjtcbmltcG9ydCBUb3Btb3N0SFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbC90b3Btb3N0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUxleGVyIGZyb20gXCIuLi9tYXJrZG93blN0eWxlL2xleGVyXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9wYXJzZXJcIjtcbmltcG9ydCBtYXJrZG93blN0eWxlUXVlcmllcyBmcm9tIFwiLi4vcXVlcmllcy9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IFdFQl9UQVJHRVQgfSBmcm9tIFwiLi4vdGFyZ2V0c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93bikge1xuICBjb25zdCBsZXhlciA9IG1hcmtkb3duTGV4ZXIsIC8vL1xuICAgICAgICBjb250ZW50ID0gbWFya2Rvd24sICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0Zyb21NYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpIHtcbiAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgIC8vL1xuICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgbGV0IENsYXNzO1xuXG4gIGlmIChtYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RIVE1MTm9kZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBDbGFzcyA9IGh0bWxOb2RlTWFwW3J1bGVOYW1lXSB8fCBIVE1MTm9kZTtcbiAgfVxuXG4gIHJldHVybiBDbGFzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENTU0NsYXNzRnJvbU1hcmtkb3duU3R5bGVOb2RlKG1hcmtkb3duU3R5bGVOb2RlKSB7XG4gIGxldCBDbGFzcztcblxuICBpZiAobWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RDU1NOb2RlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbWFya2Rvd25TdHlsZU5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBjc3NOb2RlTWFwW3J1bGVOYW1lXSB8fCBDU1NOb2RlO1xuICB9XG5cbiAgcmV0dXJuIENsYXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucykge1xuICBjb25zdCBwYXJzZXIgPSBtYXJrZG93blBhcnNlciwgLy8vXG4gICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSksXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gIHJldHVybiBkb2N1bWVudE1hcmtkb3duTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIobWFya2Rvd24sIG9wdGlvbnMsIGltcG9ydGVyKSB7XG4gIGxldCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93biksXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgaWYgKGRvY3VtZW50TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICBkb2N1bWVudE1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcblxuICAgIGlmICh0b3Btb3N0SFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRvcG1vc3RIVE1MTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOT2RlcyA9IHRvcG1vc3RIVE1MTm9kZS5nZXREaXZpc2lvbkhUTUxOb2RlcygpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxOT2Rlcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxOT2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5PZGVIVE1MID0gZGl2aXNpb25IVE1MTk9kZS5hc0hUTUwoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IGAke2h0bWx9JHtkaXZpc2lvbkhUTUxOT2RlSFRNTH1gO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGh0bWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgY29uc3QgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgLy8vXG4gICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSksXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUgPSBub2RlOyAvLy9cblxuICByZXR1cm4gZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSwgQ2xhc3NGcm9tT3V0ZXJOb2RlID0gSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZSkge1xuICBsZXQgdG9wbW9zdEhUTUxOb2RlID0gbnVsbDtcblxuICBpZiAoZG9jdW1lbnRNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBxdWVyaWVzID0gbWFya2Rvd25RdWVyaWVzLCAvLy9cbiAgICAgICAgICBub2RlcyA9IG5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzKG5vZGUsIHF1ZXJpZXMpLFxuICAgICAgICAgIG91dGVyTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgdG9wbW9zdE5vZGUgPSB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzKENsYXNzRnJvbU91dGVyTm9kZSwgb3V0ZXJOb2Rlcyk7XG5cbiAgICB0b3Btb3N0SFRNTE5vZGUgPSB0b3Btb3N0Tm9kZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3RIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nKG1hcmtkb3duU3R5bGUsIGNzc1NlbGVjdG9yc1N0cmluZykge1xuICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IHRhcmdldCA9IFdFQl9UQVJHRVQsXG4gICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpLFxuICAgICAgICBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlID0gZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICBpZiAoZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRvcG1vc3RDU1NOb2RlID0gdG9wbW9zdENTU05vZGVGcm9tRG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZShkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKSxcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgY3NzU2VsZWN0b3JzU3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHRvcG1vc3RDU1NOb2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjc3MgPSB0b3Btb3N0Q1NTTm9kZS5hc0NTUyhjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjc3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0Q1NTTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlKGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUsIENsYXNzRnJvbU91dGVyTm9kZSA9IENTU0NsYXNzRnJvbU1hcmtkb3duU3R5bGVOb2RlKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlLCAgLy8vXG4gICAgICAgIHF1ZXJpZXMgPSBtYXJrZG93blN0eWxlUXVlcmllcywgLy8vXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMobm9kZSwgcXVlcmllcyksXG4gICAgICAgIG91dGVyTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgIHRvcG1vc3ROb2RlID0gdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyhDbGFzc0Zyb21PdXRlck5vZGUsIG91dGVyTm9kZXMpLFxuICAgICAgICB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3ROb2RlOyAgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3RDU1NOb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRva2Vuc0Zyb21NYXJrZG93bixcbiAgdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUsXG4gIEhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUsXG4gIENTU0NsYXNzRnJvbU1hcmtkb3duU3R5bGVOb2RlLFxuICBkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnMsXG4gIGh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIsXG4gIGRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zLFxuICB0b3Btb3N0SFRNTE5vZGVGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUsXG4gIGNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nLFxuICB0b3Btb3N0Q1NTTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlXG59O1xuIl0sIm5hbWVzIjpbIkNTU0NsYXNzRnJvbU1hcmtkb3duU3R5bGVOb2RlIiwiSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZSIsImNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nIiwiZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zIiwiZG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnMiLCJodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyIiwidG9rZW5zRnJvbU1hcmtkb3duIiwidG9rZW5zRnJvbU1hcmtkb3duU3R5bGUiLCJ0b3Btb3N0Q1NTTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duU3R5bGVOb2RlIiwidG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlIiwidG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyIsIm5vZGVVdGlsaXRpZXMiLCJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwibWFya2Rvd24iLCJsZXhlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm1hcmtkb3duU3R5bGUiLCJtYXJrZG93bk5vZGUiLCJDbGFzcyIsIlRvcG1vc3RIVE1MTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJodG1sTm9kZU1hcCIsIkhUTUxOb2RlIiwibWFya2Rvd25TdHlsZU5vZGUiLCJUb3Btb3N0Q1NTTm9kZSIsImNzc05vZGVNYXAiLCJDU1NOb2RlIiwicGFyc2VyIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwibm9kZSIsInBhcnNlIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJvcHRpb25zIiwiaW1wb3J0ZXIiLCJodG1sIiwiRU1QVFlfU1RSSU5HIiwiY29udGV4dCIsInJlc29sdmUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJkaXZpc2lvbkhUTUxOT2RlcyIsImdldERpdmlzaW9uSFRNTE5vZGVzIiwiZm9yRWFjaCIsImRpdmlzaW9uSFRNTE5PZGUiLCJkaXZpc2lvbkhUTUxOT2RlSFRNTCIsImFzSFRNTCIsImRvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJxdWVyaWVzIiwibWFya2Rvd25RdWVyaWVzIiwibm9kZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyIsIm91dGVyTm9kZXMiLCJ0b3Btb3N0Tm9kZSIsImNzc1NlbGVjdG9yc1N0cmluZyIsImNzcyIsInRhcmdldCIsIldFQl9UQVJHRVQiLCJ0b3Btb3N0Q1NTTm9kZSIsImFzQ1NTIiwibWFya2Rvd25TdHlsZVF1ZXJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTJEZ0JBO2VBQUFBOztRQWZBQztlQUFBQTs7UUFpR0FDO2VBQUFBOztRQWtDaEI7ZUFBQTs7UUFyR2dCQztlQUFBQTs7UUEwQ0FDO2VBQUFBOztRQWpDQUM7ZUFBQUE7O1FBdkRBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBZ0lBQztlQUFBQTs7UUF2Q0FDO2VBQUFBOzs7d0JBM0hjOzBEQUVWOzJEQUNDOzJEQUNFOzREQUNDOzREQUNFOzZEQUNDOzhEQUNBOytEQUNDOytEQUNBOzZEQUNHOzhEQUNDO29FQUNDO3VCQUVOO3lCQUNFO3FCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUMsNEJBQThCQyx1QkFBYSxDQUEzQ0Q7QUFFUixJQUFNRSxnQkFBZ0JDLGNBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsaUJBQWlCQyxlQUFjLENBQUNGLFdBQVcsSUFDM0NHLHFCQUFxQkMsZUFBa0IsQ0FBQ0osV0FBVyxJQUNuREssc0JBQXNCQyxnQkFBbUIsQ0FBQ04sV0FBVztBQUVwRCxTQUFTUixtQkFBbUJlLFFBQVE7SUFDekMsSUFBTUMsUUFBUVYsZUFDUlcsVUFBVUYsVUFDVkcsU0FBU0YsTUFBTUcsUUFBUSxDQUFDRjtJQUU5QixPQUFPQztBQUNUO0FBRU8sU0FBU2pCLHdCQUF3Qm1CLGFBQWE7SUFDbkQsSUFBTUosUUFBUUwsb0JBQ1JNLFVBQVVHLGVBQ1ZGLFNBQVNGLE1BQU1HLFFBQVEsQ0FBQ0Y7SUFFOUIsT0FBT0M7QUFDVDtBQUVPLFNBQVN2QiwwQkFBMEIwQixZQUFZO0lBQ3BELElBQUlDO0lBRUosSUFBSUQsaUJBQWlCLE1BQU07UUFDekJDLFFBQVFDLGlCQUFlLEVBQUcsR0FBRztJQUMvQixPQUFPO1FBQ0wsSUFBTUMsa0JBQWtCSCxjQUNsQkksV0FBV0QsZ0JBQWdCRSxXQUFXO1FBRTVDSixRQUFRSyxjQUFXLENBQUNGLFNBQVMsSUFBSUcsYUFBUTtJQUMzQztJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTNUIsOEJBQThCbUMsaUJBQWlCO0lBQzdELElBQUlQO0lBRUosSUFBSU8sc0JBQXNCLE1BQU07UUFDOUJQLFFBQVFRLGdCQUFjLEVBQUcsR0FBRztJQUM5QixPQUFPO1FBQ0wsSUFBTU4sa0JBQWtCSyxtQkFDbEJKLFdBQVdELGdCQUFnQkUsV0FBVztRQUU1Q0osUUFBUVMsYUFBVSxDQUFDTixTQUFTLElBQUlPLFlBQU87SUFDekM7SUFFQSxPQUFPVjtBQUNUO0FBRU8sU0FBU3pCLCtCQUErQnFCLE1BQU07SUFDbkQsSUFBTWUsU0FBU3hCLGdCQUNUeUIsWUFBWUQsT0FBT0UsWUFBWSxJQUMvQkMsT0FBT0gsT0FBT0ksS0FBSyxDQUFDbkIsUUFBUWdCLFlBQzVCSSx1QkFBdUJGLE1BQU8sR0FBRztJQUV2QyxPQUFPRTtBQUNUO0FBRU8sU0FBU3ZDLG1DQUFtQ2dCLFFBQVEsRUFBRXdCLE9BQU8sRUFBRUMsUUFBUTtJQUM1RSxJQUFJQyxPQUFPQyx1QkFBWTtJQUV2QixJQUFNeEIsU0FBU2xCLG1CQUFtQmUsV0FDNUJ1Qix1QkFBdUJ6QywrQkFBK0JxQjtJQUU1RCxJQUFJb0IseUJBQXlCLE1BQU07UUFDakMsSUFBTUssVUFBVTtZQUNSekIsUUFBQUE7WUFDQXNCLFVBQUFBO1dBQ0dEO1FBR1hELHFCQUFxQk0sT0FBTyxDQUFDRDtRQUU3QixJQUFNRSxrQkFBa0IxQyx3Q0FBd0NtQztRQUVoRSxJQUFJTyxvQkFBb0IsTUFBTTtZQUM1QkEsZ0JBQWdCRCxPQUFPLENBQUNEO1lBRXhCLElBQU1HLG9CQUFvQkQsZ0JBQWdCRSxvQkFBb0I7WUFFOURELGtCQUFrQkUsT0FBTyxDQUFDLFNBQUNDO2dCQUN6QixJQUFNQyx1QkFBdUJELGlCQUFpQkUsTUFBTSxDQUFDUjtnQkFFckRGLE9BQU8sQUFBQyxHQUFTUyxPQUFQVCxNQUE0QixPQUFyQlM7WUFDbkI7UUFDRjtJQUNGO0lBRUEsT0FBT1Q7QUFDVDtBQUVPLFNBQVMzQyxvQ0FBb0NvQixNQUFNO0lBQ3hELElBQU1lLFNBQVNwQixxQkFDVHFCLFlBQVlELE9BQU9FLFlBQVksSUFDL0JDLE9BQU9ILE9BQU9JLEtBQUssQ0FBQ25CLFFBQVFnQixZQUM1QmtCLDRCQUE0QmhCLE1BQU0sR0FBRztJQUUzQyxPQUFPZ0I7QUFDVDtBQUVPLFNBQVNqRCx3Q0FBd0NtQyxvQkFBb0I7UUFBRWUscUJBQUFBLGlFQUFxQjFEO0lBQ2pHLElBQUlrRCxrQkFBa0I7SUFFdEIsSUFBSVAseUJBQXlCLE1BQU07UUFDakMsSUFBTUYsT0FBT0Usc0JBQ1BnQixVQUFVQyxpQkFBZSxFQUN6QkMsUUFBUUMsSUFBQUEsOEJBQXVCLEVBQUNyQixNQUFNa0IsVUFDdENJLGFBQWFGLE9BQ2JHLGNBQWN2RCwwQkFBMEJpRCxvQkFBb0JLO1FBRWxFYixrQkFBa0JjLGFBQWMsR0FBRztJQUNyQztJQUVBLE9BQU9kO0FBQ1Q7QUFFTyxTQUFTakQsMENBQTBDd0IsYUFBYSxFQUFFd0Msa0JBQWtCO0lBQ3pGLElBQUlDLE1BQU1uQix1QkFBWTtJQUV0QixJQUFNb0IsU0FBU0MsbUJBQVUsRUFDbkI3QyxTQUFTakIsd0JBQXdCbUIsZ0JBQ2pDZ0MsNEJBQTRCdEQsb0NBQW9Db0I7SUFFdEUsSUFBSWtDLDhCQUE4QixNQUFNO1FBQ3RDLElBQU1ZLGlCQUFpQjlELDRDQUE0Q2tELDRCQUM3RFQsVUFBVTtZQUNSbUIsUUFBQUE7WUFDQTVDLFFBQUFBO1lBQ0EwQyxvQkFBQUE7UUFDRjtRQUVOSSxlQUFlcEIsT0FBTyxDQUFDRDtRQUV2QmtCLE1BQU1HLGVBQWVDLEtBQUssQ0FBQ3RCO0lBQzdCO0lBRUEsT0FBT2tCO0FBQ1Q7QUFFTyxTQUFTM0QsNENBQTRDa0QseUJBQXlCO1FBQUVDLHFCQUFBQSxpRUFBcUIzRDtJQUMxRyxJQUFNMEMsT0FBT2dCLDJCQUNQRSxVQUFVWSxzQkFBb0IsRUFDOUJWLFFBQVFDLElBQUFBLDhCQUF1QixFQUFDckIsTUFBTWtCLFVBQ3RDSSxhQUFhRixPQUNiRyxjQUFjdkQsMEJBQTBCaUQsb0JBQW9CSyxhQUM1RE0saUJBQWlCTCxhQUFjLEdBQUc7SUFFeEMsT0FBT0s7QUFDVDtJQUVBLFdBQWU7SUFDYmhFLG9CQUFBQTtJQUNBQyx5QkFBQUE7SUFDQU4sMkJBQUFBO0lBQ0FELCtCQUFBQTtJQUNBRyxnQ0FBQUE7SUFDQUUsb0NBQUFBO0lBQ0FELHFDQUFBQTtJQUNBSyx5Q0FBQUE7SUFDQVAsMkNBQUFBO0lBQ0FNLDZDQUFBQTtBQUNGIn0=