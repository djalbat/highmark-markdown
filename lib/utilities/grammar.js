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
    get htmlFromMarkdownOptionsAndImporter () {
        return htmlFromMarkdownOptionsAndImporter;
    },
    get markdownNodeFromTokens () {
        return markdownNodeFromTokens;
    },
    get markdownStyleNodeFromTokens () {
        return markdownStyleNodeFromTokens;
    },
    get tokensFromMarkdown () {
        return tokensFromMarkdown;
    },
    get tokensFromMarkdownStyle () {
        return tokensFromMarkdownStyle;
    },
    get topmostCSSNodeFromMarkdownStyleNode () {
        return topmostCSSNodeFromMarkdownStyleNode;
    },
    get topmostHTMLNodeFromMarkdownNode () {
        return topmostHTMLNodeFromMarkdownNode;
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
function markdownNodeFromTokens(tokens) {
    var parser = markdownParser, startRule = parser.getStartRule(), node = parser.parse(tokens, startRule), markdownNode = node; ///
    return markdownNode;
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
function markdownStyleNodeFromTokens(tokens) {
    var parser = markdownStyleParser, startRule = parser.getStartRule(), node = parser.parse(tokens, startRule), markdownStyleNode = node; ///
    return markdownStyleNode;
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
function topmostHTMLNodeFromMarkdownNode(markdownNode) {
    var ClassFromOuterNode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : HTMLClassFromMarkdownNode;
    var topmostHTMLNode = null;
    if (markdownNode !== null) {
        var node = markdownNode, queries = _markdown.default, nodes = (0, _query.nodesFromNodeAndQueries)(node, queries), outerNodes = nodes, topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes);
        topmostHTMLNode = topmostNode; ///
    }
    return topmostHTMLNode;
}
function htmlFromMarkdownOptionsAndImporter(markdown, options, importer) {
    var html = _constants.EMPTY_STRING;
    var tokens = tokensFromMarkdown(markdown), markdownNode = markdownNodeFromTokens(tokens);
    if (markdownNode !== null) {
        var documentMarkdownNode = markdownNode, context = _object_spread({
            tokens: tokens,
            importer: importer
        }, options);
        documentMarkdownNode.resolve(context);
        var topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);
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
function topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode) {
    var ClassFromOuterNode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSClassFromMarkdownStyleNode;
    var node = markdownStyleNode, queries = _markdownStyle.default, nodes = (0, _query.nodesFromNodeAndQueries)(node, queries), outerNodes = nodes, topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes), topmostCSSNode = topmostNode; ///
    return topmostCSSNode;
}
function cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorsString) {
    var css = _constants.EMPTY_STRING;
    var target = _targets.WEB_TARGET, tokens = tokensFromMarkdownStyle(markdownStyle), markdownStyleNode = markdownStyleNodeFromTokens(tokens);
    if (markdownStyleNode !== null) {
        var topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode), context = {
            target: target,
            tokens: tokens,
            cssSelectorsString: cssSelectorsString
        };
        topmostCSSNode.resolve(context);
        css = topmostCSSNode.asCSS(context);
    }
    return css;
}
var _default = {
    tokensFromMarkdown: tokensFromMarkdown,
    markdownNodeFromTokens: markdownNodeFromTokens,
    tokensFromMarkdownStyle: tokensFromMarkdownStyle,
    HTMLClassFromMarkdownNode: HTMLClassFromMarkdownNode,
    markdownStyleNodeFromTokens: markdownStyleNodeFromTokens,
    CSSClassFromMarkdownStyleNode: CSSClassFromMarkdownStyleNode,
    topmostHTMLNodeFromMarkdownNode: topmostHTMLNodeFromMarkdownNode,
    htmlFromMarkdownOptionsAndImporter: htmlFromMarkdownOptionsAndImporter,
    topmostCSSNodeFromMarkdownStyleNode: topmostCSSNodeFromMarkdownStyleNode,
    cssFromMarkdownStyleAndCSSSelectorsString: cssFromMarkdownStyleAndCSSSelectorsString
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uL25vZGUvY3NzXCI7XG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IGNzc05vZGVNYXAgZnJvbSBcIi4uL21hcC9ub2RlL2Nzc1wiO1xuaW1wb3J0IGh0bWxOb2RlTWFwIGZyb20gXCIuLi9tYXAvbm9kZS9odG1sXCI7XG5pbXBvcnQgTWFya2Rvd25MZXhlciBmcm9tIFwiLi4vbWFya2Rvd24vbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd24vcGFyc2VyXCI7XG5pbXBvcnQgVG9wbW9zdENTU05vZGUgZnJvbSBcIi4uL25vZGUvY3NzL3RvcG1vc3RcIjtcbmltcG9ydCBtYXJrZG93blF1ZXJpZXMgZnJvbSBcIi4uL3F1ZXJpZXMvbWFya2Rvd25cIjtcbmltcG9ydCBUb3Btb3N0SFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbC90b3Btb3N0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUxleGVyIGZyb20gXCIuLi9tYXJrZG93blN0eWxlL2xleGVyXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9wYXJzZXJcIjtcbmltcG9ydCBtYXJrZG93blN0eWxlUXVlcmllcyBmcm9tIFwiLi4vcXVlcmllcy9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IFdFQl9UQVJHRVQgfSBmcm9tIFwiLi4vdGFyZ2V0c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93bikge1xuICBjb25zdCBsZXhlciA9IG1hcmtkb3duTGV4ZXIsIC8vL1xuICAgICAgICBjb250ZW50ID0gbWFya2Rvd24sICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duTm9kZUZyb21Ub2tlbnModG9rZW5zKSB7XG4gIGNvbnN0IHBhcnNlciA9IG1hcmtkb3duUGFyc2VyLCAvLy9cbiAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKSxcbiAgICAgICAgbWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gIHJldHVybiBtYXJrZG93bk5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKSB7XG4gIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLCAvLy9cbiAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlKSB7XG4gIGxldCBDbGFzcztcblxuICBpZiAobWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgQ2xhc3MgPSBUb3Btb3N0SFRNTE5vZGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBodG1sTm9kZU1hcFtydWxlTmFtZV0gfHwgSFRNTE5vZGU7XG4gIH1cblxuICByZXR1cm4gQ2xhc3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnModG9rZW5zKSB7XG4gIGNvbnN0IHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpLFxuICAgICAgICBtYXJrZG93blN0eWxlTm9kZSA9IG5vZGU7IC8vL1xuXG4gIHJldHVybiBtYXJrZG93blN0eWxlTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENTU0NsYXNzRnJvbU1hcmtkb3duU3R5bGVOb2RlKG1hcmtkb3duU3R5bGVOb2RlKSB7XG4gIGxldCBDbGFzcztcblxuICBpZiAobWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RDU1NOb2RlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbWFya2Rvd25TdHlsZU5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBjc3NOb2RlTWFwW3J1bGVOYW1lXSB8fCBDU1NOb2RlO1xuICB9XG5cbiAgcmV0dXJuIENsYXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUsIENsYXNzRnJvbU91dGVyTm9kZSA9IEhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUpIHtcbiAgbGV0IHRvcG1vc3RIVE1MTm9kZSA9IG51bGw7XG5cbiAgaWYgKG1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGUgPSBtYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBxdWVyaWVzID0gbWFya2Rvd25RdWVyaWVzLCAvLy9cbiAgICAgICAgICBub2RlcyA9IG5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzKG5vZGUsIHF1ZXJpZXMpLFxuICAgICAgICAgIG91dGVyTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgdG9wbW9zdE5vZGUgPSB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzKENsYXNzRnJvbU91dGVyTm9kZSwgb3V0ZXJOb2Rlcyk7XG5cbiAgICB0b3Btb3N0SFRNTE5vZGUgPSB0b3Btb3N0Tm9kZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3RIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIobWFya2Rvd24sIG9wdGlvbnMsIGltcG9ydGVyKSB7XG4gIGxldCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93biksXG4gICAgICAgIG1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICBpZiAobWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZG9jdW1lbnRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICBpbXBvcnRlcixcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgZG9jdW1lbnRNYXJrZG93bk5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlKTtcblxuICAgIGlmICh0b3Btb3N0SFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRvcG1vc3RIVE1MTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOT2RlcyA9IHRvcG1vc3RIVE1MTm9kZS5nZXREaXZpc2lvbkhUTUxOb2RlcygpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxOT2Rlcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxOT2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5PZGVIVE1MID0gZGl2aXNpb25IVE1MTk9kZS5hc0hUTUwoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IGAke2h0bWx9JHtkaXZpc2lvbkhUTUxOT2RlSFRNTH1gO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGh0bWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZShtYXJrZG93blN0eWxlTm9kZSwgQ2xhc3NGcm9tT3V0ZXJOb2RlID0gQ1NTQ2xhc3NGcm9tTWFya2Rvd25TdHlsZU5vZGUpIHtcbiAgY29uc3Qgbm9kZSA9IG1hcmtkb3duU3R5bGVOb2RlLCAgLy8vXG4gICAgICAgIHF1ZXJpZXMgPSBtYXJrZG93blN0eWxlUXVlcmllcywgLy8vXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMobm9kZSwgcXVlcmllcyksXG4gICAgICAgIG91dGVyTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgIHRvcG1vc3ROb2RlID0gdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyhDbGFzc0Zyb21PdXRlck5vZGUsIG91dGVyTm9kZXMpLFxuICAgICAgICB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3ROb2RlOyAgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3RDU1NOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcobWFya2Rvd25TdHlsZSwgY3NzU2VsZWN0b3JzU3RyaW5nKSB7XG4gIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgY29uc3QgdGFyZ2V0ID0gV0VCX1RBUkdFVCxcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSksXG4gICAgICAgIG1hcmtkb3duU3R5bGVOb2RlID0gbWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgaWYgKG1hcmtkb3duU3R5bGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdG9wbW9zdENTU05vZGUgPSB0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZShtYXJrZG93blN0eWxlTm9kZSksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgIGNzc1NlbGVjdG9yc1N0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICB0b3Btb3N0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY3NzID0gdG9wbW9zdENTU05vZGUuYXNDU1MoY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY3NzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRva2Vuc0Zyb21NYXJrZG93bixcbiAgbWFya2Rvd25Ob2RlRnJvbVRva2VucyxcbiAgdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUsXG4gIEhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUsXG4gIG1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyxcbiAgQ1NTQ2xhc3NGcm9tTWFya2Rvd25TdHlsZU5vZGUsXG4gIHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUsXG4gIGh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIsXG4gIHRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlLFxuICBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZ1xufTtcbiJdLCJuYW1lcyI6WyJDU1NDbGFzc0Zyb21NYXJrZG93blN0eWxlTm9kZSIsIkhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUiLCJjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyIsImh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIiLCJtYXJrZG93bk5vZGVGcm9tVG9rZW5zIiwibWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zIiwidG9rZW5zRnJvbU1hcmtkb3duIiwidG9rZW5zRnJvbU1hcmtkb3duU3R5bGUiLCJ0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZSIsInRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUiLCJ0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIiwibm9kZVV0aWxpdGllcyIsIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJtYXJrZG93biIsImxleGVyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwicGFyc2VyIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwibm9kZSIsInBhcnNlIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25TdHlsZSIsIkNsYXNzIiwiVG9wbW9zdEhUTUxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImh0bWxOb2RlTWFwIiwiSFRNTE5vZGUiLCJtYXJrZG93blN0eWxlTm9kZSIsIlRvcG1vc3RDU1NOb2RlIiwiY3NzTm9kZU1hcCIsIkNTU05vZGUiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJxdWVyaWVzIiwibWFya2Rvd25RdWVyaWVzIiwibm9kZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyIsIm91dGVyTm9kZXMiLCJ0b3Btb3N0Tm9kZSIsIm9wdGlvbnMiLCJpbXBvcnRlciIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJkb2N1bWVudE1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJyZXNvbHZlIiwiZGl2aXNpb25IVE1MTk9kZXMiLCJnZXREaXZpc2lvbkhUTUxOb2RlcyIsImZvckVhY2giLCJkaXZpc2lvbkhUTUxOT2RlIiwiZGl2aXNpb25IVE1MTk9kZUhUTUwiLCJhc0hUTUwiLCJtYXJrZG93blN0eWxlUXVlcmllcyIsInRvcG1vc3RDU1NOb2RlIiwiY3NzU2VsZWN0b3JzU3RyaW5nIiwiY3NzIiwidGFyZ2V0IiwiV0VCX1RBUkdFVCIsImFzQ1NTIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE2RWdCQTtlQUFBQTs7UUF4QkFDO2VBQUFBOztRQW9HQUM7ZUFBQUE7O1FBdUJoQjtlQUFBOztRQXBFZ0JDO2VBQUFBOztRQXhFQUM7ZUFBQUE7O1FBZ0NBQztlQUFBQTs7UUF4Q0FDO2VBQUFBOztRQWlCQUM7ZUFBQUE7O1FBaUdBQztlQUFBQTs7UUFsREFDO2VBQUFBOzs7d0JBMUZjOzBEQUVWOzJEQUNDOzJEQUNFOzREQUNDOzREQUNFOzZEQUNDOzhEQUNBOytEQUNDOytEQUNBOzZEQUNHOzhEQUNDO29FQUNDO3VCQUVOO3lCQUNFO3FCQUNXOzs7Ozs7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