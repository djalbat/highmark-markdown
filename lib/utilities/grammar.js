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
    var node = markdownNode, queries = _markdown.default, nodes = (0, _query.nodesFromNodeAndQueries)(node, queries), outerNodes = nodes, topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes), topmostHTMLNode = topmostNode; ///
    return topmostHTMLNode;
}
function htmlFromMarkdownOptionsAndImporter(markdown, options, importer) {
    var html = null;
    var tokens = tokensFromMarkdown(markdown), markdownNode = markdownNodeFromTokens(tokens);
    if (markdownNode !== null) {
        var topmostMarkdownNode = markdownNode, context = _object_spread({
            tokens: tokens,
            importer: importer
        }, options);
        topmostMarkdownNode.resolve(context);
        var topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);
        topmostHTMLNode.resolve(context);
        var divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNode();
        html = divisionHTMLNOde.asHTML(context);
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
            tokens: tokens
        };
        topmostCSSNode.resolve(context);
        css = topmostCSSNode.asCSS(context);
    }
    css = "".concat(cssSelectorsString, " {\n").concat(css, "\n}");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uL25vZGUvY3NzXCI7XG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IGNzc05vZGVNYXAgZnJvbSBcIi4uL21hcC9ub2RlL2Nzc1wiO1xuaW1wb3J0IGh0bWxOb2RlTWFwIGZyb20gXCIuLi9tYXAvbm9kZS9odG1sXCI7XG5pbXBvcnQgTWFya2Rvd25MZXhlciBmcm9tIFwiLi4vbWFya2Rvd24vbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd24vcGFyc2VyXCI7XG5pbXBvcnQgVG9wbW9zdENTU05vZGUgZnJvbSBcIi4uL25vZGUvY3NzL3RvcG1vc3RcIjtcbmltcG9ydCBtYXJrZG93blF1ZXJpZXMgZnJvbSBcIi4uL3F1ZXJpZXMvbWFya2Rvd25cIjtcbmltcG9ydCBUb3Btb3N0SFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbC90b3Btb3N0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUxleGVyIGZyb20gXCIuLi9tYXJrZG93blN0eWxlL2xleGVyXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9wYXJzZXJcIjtcbmltcG9ydCBtYXJrZG93blN0eWxlUXVlcmllcyBmcm9tIFwiLi4vcXVlcmllcy9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IFdFQl9UQVJHRVQgfSBmcm9tIFwiLi4vdGFyZ2V0c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93bikge1xuICBjb25zdCBsZXhlciA9IG1hcmtkb3duTGV4ZXIsIC8vL1xuICAgICAgICBjb250ZW50ID0gbWFya2Rvd24sICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duTm9kZUZyb21Ub2tlbnModG9rZW5zKSB7XG4gIGNvbnN0IHBhcnNlciA9IG1hcmtkb3duUGFyc2VyLCAvLy9cbiAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKSxcbiAgICAgICAgbWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gIHJldHVybiBtYXJrZG93bk5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKSB7XG4gIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLCAvLy9cbiAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlKSB7XG4gIGxldCBDbGFzcztcblxuICBpZiAobWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgQ2xhc3MgPSBUb3Btb3N0SFRNTE5vZGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBodG1sTm9kZU1hcFtydWxlTmFtZV0gfHwgSFRNTE5vZGU7XG4gIH1cblxuICByZXR1cm4gQ2xhc3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnModG9rZW5zKSB7XG4gIGNvbnN0IHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpLFxuICAgICAgICBtYXJrZG93blN0eWxlTm9kZSA9IG5vZGU7IC8vL1xuXG4gIHJldHVybiBtYXJrZG93blN0eWxlTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENTU0NsYXNzRnJvbU1hcmtkb3duU3R5bGVOb2RlKG1hcmtkb3duU3R5bGVOb2RlKSB7XG4gIGxldCBDbGFzcztcblxuICBpZiAobWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RDU1NOb2RlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbWFya2Rvd25TdHlsZU5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBjc3NOb2RlTWFwW3J1bGVOYW1lXSB8fCBDU1NOb2RlO1xuICB9XG5cbiAgcmV0dXJuIENsYXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUsIENsYXNzRnJvbU91dGVyTm9kZSA9IEhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUpIHtcbiAgY29uc3Qgbm9kZSA9IG1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICBxdWVyaWVzID0gbWFya2Rvd25RdWVyaWVzLCAvLy9cbiAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyhub2RlLCBxdWVyaWVzKSxcbiAgICAgICAgb3V0ZXJOb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgdG9wbW9zdE5vZGUgPSB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzKENsYXNzRnJvbU91dGVyTm9kZSwgb3V0ZXJOb2RlcyksXG4gICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3ROb2RlOyAgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3RIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIobWFya2Rvd24sIG9wdGlvbnMsIGltcG9ydGVyKSB7XG4gIGxldCBodG1sID0gbnVsbDtcblxuICBjb25zdCB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd24obWFya2Rvd24pLFxuICAgICAgICBtYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgaWYgKG1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICBpbXBvcnRlcixcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdE1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuXG4gICAgdG9wbW9zdEhUTUxOb2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOT2RlID0gdG9wbW9zdEhUTUxOb2RlLmdldERpdmlzaW9uSFRNTE5vZGUoKTtcblxuICAgIGh0bWwgPSBkaXZpc2lvbkhUTUxOT2RlLmFzSFRNTChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBodG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUobWFya2Rvd25TdHlsZU5vZGUsIENsYXNzRnJvbU91dGVyTm9kZSA9IENTU0NsYXNzRnJvbU1hcmtkb3duU3R5bGVOb2RlKSB7XG4gIGNvbnN0IG5vZGUgPSBtYXJrZG93blN0eWxlTm9kZSwgIC8vL1xuICAgICAgICBxdWVyaWVzID0gbWFya2Rvd25TdHlsZVF1ZXJpZXMsIC8vL1xuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzKG5vZGUsIHF1ZXJpZXMpLFxuICAgICAgICBvdXRlck5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICB0b3Btb3N0Tm9kZSA9IHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzKSxcbiAgICAgICAgdG9wbW9zdENTU05vZGUgPSB0b3Btb3N0Tm9kZTsgIC8vL1xuXG4gIHJldHVybiB0b3Btb3N0Q1NTTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nKG1hcmtkb3duU3R5bGUsIGNzc1NlbGVjdG9yc1N0cmluZykge1xuICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IHRhcmdldCA9IFdFQl9UQVJHRVQsXG4gICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpLFxuICAgICAgICBtYXJrZG93blN0eWxlTm9kZSA9IG1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gIGlmIChtYXJrZG93blN0eWxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRvcG1vc3RDU1NOb2RlID0gdG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUobWFya2Rvd25TdHlsZU5vZGUpLFxuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdENTU05vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNzcyA9IHRvcG1vc3RDU1NOb2RlLmFzQ1NTKGNvbnRleHQpO1xuICB9XG5cbiAgY3NzID0gYCR7Y3NzU2VsZWN0b3JzU3RyaW5nfSB7XG4ke2Nzc31cbn1gO1xuXG4gIHJldHVybiBjc3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdG9rZW5zRnJvbU1hcmtkb3duLFxuICBtYXJrZG93bk5vZGVGcm9tVG9rZW5zLFxuICB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSxcbiAgSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZSxcbiAgbWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zLFxuICBDU1NDbGFzc0Zyb21NYXJrZG93blN0eWxlTm9kZSxcbiAgdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSxcbiAgaHRtbEZyb21NYXJrZG93bk9wdGlvbnNBbmRJbXBvcnRlcixcbiAgdG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUsXG4gIGNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nXG59O1xuIl0sIm5hbWVzIjpbIkNTU0NsYXNzRnJvbU1hcmtkb3duU3R5bGVOb2RlIiwiSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZSIsImNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nIiwiaHRtbEZyb21NYXJrZG93bk9wdGlvbnNBbmRJbXBvcnRlciIsIm1hcmtkb3duTm9kZUZyb21Ub2tlbnMiLCJtYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tTWFya2Rvd24iLCJ0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSIsInRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlIiwidG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSIsInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJub2RlVXRpbGl0aWVzIiwibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJNYXJrZG93blN0eWxlTGV4ZXIiLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsIm1hcmtkb3duIiwibGV4ZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJwYXJzZXIiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJub2RlIiwicGFyc2UiLCJtYXJrZG93bk5vZGUiLCJtYXJrZG93blN0eWxlIiwiQ2xhc3MiLCJUb3Btb3N0SFRNTE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaHRtbE5vZGVNYXAiLCJIVE1MTm9kZSIsIm1hcmtkb3duU3R5bGVOb2RlIiwiVG9wbW9zdENTU05vZGUiLCJjc3NOb2RlTWFwIiwiQ1NTTm9kZSIsIkNsYXNzRnJvbU91dGVyTm9kZSIsInF1ZXJpZXMiLCJtYXJrZG93blF1ZXJpZXMiLCJub2RlcyIsIm5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzIiwib3V0ZXJOb2RlcyIsInRvcG1vc3ROb2RlIiwidG9wbW9zdEhUTUxOb2RlIiwib3B0aW9ucyIsImltcG9ydGVyIiwiaHRtbCIsInRvcG1vc3RNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwicmVzb2x2ZSIsImRpdmlzaW9uSFRNTE5PZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlIiwiYXNIVE1MIiwibWFya2Rvd25TdHlsZVF1ZXJpZXMiLCJ0b3Btb3N0Q1NTTm9kZSIsImNzc1NlbGVjdG9yc1N0cmluZyIsImNzcyIsIkVNUFRZX1NUUklORyIsInRhcmdldCIsIldFQl9UQVJHRVQiLCJhc0NTUyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNkVnQkE7ZUFBQUE7O1FBeEJBQztlQUFBQTs7UUF5RkFDO2VBQUFBOztRQTBCaEI7ZUFBQTs7UUFqRWdCQztlQUFBQTs7UUFuRUFDO2VBQUFBOztRQWdDQUM7ZUFBQUE7O1FBeENBQztlQUFBQTs7UUFpQkFDO2VBQUFBOztRQXNGQUM7ZUFBQUE7O1FBdkNBQztlQUFBQTs7O3dCQTFGYzswREFFVjsyREFDQzsyREFDRTs0REFDQzs0REFDRTs2REFDQzs4REFDQTsrREFDQzsrREFDQTs2REFDRzs4REFDQztvRUFDQzt1QkFFTjt5QkFDRTtxQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNLEFBQUVDLDRCQUE4QkMsdUJBQWEsQ0FBM0NEO0FBRVIsSUFBTUUsZ0JBQWdCQyxjQUFhLENBQUNDLFdBQVcsSUFDekNDLGlCQUFpQkMsZUFBYyxDQUFDRixXQUFXLElBQzNDRyxxQkFBcUJDLGVBQWtCLENBQUNKLFdBQVcsSUFDbkRLLHNCQUFzQkMsZ0JBQW1CLENBQUNOLFdBQVc7QUFFcEQsU0FBU1IsbUJBQW1CZSxRQUFRO0lBQ3pDLElBQU1DLFFBQVFWLGVBQ1JXLFVBQVVGLFVBQ1ZHLFNBQVNGLE1BQU1HLFFBQVEsQ0FBQ0Y7SUFFOUIsT0FBT0M7QUFDVDtBQUVPLFNBQVNwQix1QkFBdUJvQixNQUFNO0lBQzNDLElBQU1FLFNBQVNYLGdCQUNUWSxZQUFZRCxPQUFPRSxZQUFZLElBQy9CQyxPQUFPSCxPQUFPSSxLQUFLLENBQUNOLFFBQVFHLFlBQzVCSSxlQUFlRixNQUFPLEdBQUc7SUFFL0IsT0FBT0U7QUFDVDtBQUVPLFNBQVN4Qix3QkFBd0J5QixhQUFhO0lBQ25ELElBQU1WLFFBQVFMLG9CQUNSTSxVQUFVUyxlQUNWUixTQUFTRixNQUFNRyxRQUFRLENBQUNGO0lBRTlCLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTdkIsMEJBQTBCOEIsWUFBWTtJQUNwRCxJQUFJRTtJQUVKLElBQUlGLGlCQUFpQixNQUFNO1FBQ3pCRSxRQUFRQyxpQkFBZSxFQUFHLEdBQUc7SUFDL0IsT0FBTztRQUNMLElBQU1DLGtCQUFrQkosY0FDbEJLLFdBQVdELGdCQUFnQkUsV0FBVztRQUU1Q0osUUFBUUssY0FBVyxDQUFDRixTQUFTLElBQUlHLGFBQVE7SUFDM0M7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBUzVCLDRCQUE0Qm1CLE1BQU07SUFDaEQsSUFBTUUsU0FBU1AscUJBQ1RRLFlBQVlELE9BQU9FLFlBQVksSUFDL0JDLE9BQU9ILE9BQU9JLEtBQUssQ0FBQ04sUUFBUUcsWUFDNUJhLG9CQUFvQlgsTUFBTSxHQUFHO0lBRW5DLE9BQU9XO0FBQ1Q7QUFFTyxTQUFTeEMsOEJBQThCd0MsaUJBQWlCO0lBQzdELElBQUlQO0lBRUosSUFBSU8sc0JBQXNCLE1BQU07UUFDOUJQLFFBQVFRLGdCQUFjLEVBQUcsR0FBRztJQUM5QixPQUFPO1FBQ0wsSUFBTU4sa0JBQWtCSyxtQkFDbEJKLFdBQVdELGdCQUFnQkUsV0FBVztRQUU1Q0osUUFBUVMsYUFBVSxDQUFDTixTQUFTLElBQUlPLFlBQU87SUFDekM7SUFFQSxPQUFPVjtBQUNUO0FBRU8sU0FBU3hCLGdDQUFnQ3NCLFlBQVk7UUFBRWEscUJBQUFBLGlFQUFxQjNDO0lBQ2pGLElBQU00QixPQUFPRSxjQUNQYyxVQUFVQyxpQkFBZSxFQUN6QkMsUUFBUUMsSUFBQUEsOEJBQXVCLEVBQUNuQixNQUFNZ0IsVUFDdENJLGFBQWFGLE9BQ2JHLGNBQWN4QywwQkFBMEJrQyxvQkFBb0JLLGFBQzVERSxrQkFBa0JELGFBQWMsR0FBRztJQUV6QyxPQUFPQztBQUNUO0FBRU8sU0FBU2hELG1DQUFtQ2tCLFFBQVEsRUFBRStCLE9BQU8sRUFBRUMsUUFBUTtJQUM1RSxJQUFJQyxPQUFPO0lBRVgsSUFBTTlCLFNBQVNsQixtQkFBbUJlLFdBQzVCVSxlQUFlM0IsdUJBQXVCb0I7SUFFNUMsSUFBSU8saUJBQWlCLE1BQU07UUFDekIsSUFBTXdCLHNCQUFzQnhCLGNBQ3RCeUIsVUFBVTtZQUNSaEMsUUFBQUE7WUFDQTZCLFVBQUFBO1dBQ0dEO1FBR1hHLG9CQUFvQkUsT0FBTyxDQUFDRDtRQUU1QixJQUFNTCxrQkFBa0IxQyxnQ0FBZ0NzQjtRQUV4RG9CLGdCQUFnQk0sT0FBTyxDQUFDRDtRQUV4QixJQUFNRSxtQkFBbUJQLGdCQUFnQlEsbUJBQW1CO1FBRTVETCxPQUFPSSxpQkFBaUJFLE1BQU0sQ0FBQ0o7SUFDakM7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBUzlDLG9DQUFvQ2dDLGlCQUFpQjtRQUFFSSxxQkFBQUEsaUVBQXFCNUM7SUFDMUYsSUFBTTZCLE9BQU9XLG1CQUNQSyxVQUFVZ0Isc0JBQW9CLEVBQzlCZCxRQUFRQyxJQUFBQSw4QkFBdUIsRUFBQ25CLE1BQU1nQixVQUN0Q0ksYUFBYUYsT0FDYkcsY0FBY3hDLDBCQUEwQmtDLG9CQUFvQkssYUFDNURhLGlCQUFpQlosYUFBYyxHQUFHO0lBRXhDLE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTNUQsMENBQTBDOEIsYUFBYSxFQUFFK0Isa0JBQWtCO0lBQ3pGLElBQUlDLE1BQU1DLHVCQUFZO0lBRXRCLElBQU1DLFNBQVNDLG1CQUFVLEVBQ25CM0MsU0FBU2pCLHdCQUF3QnlCLGdCQUNqQ1Esb0JBQW9CbkMsNEJBQTRCbUI7SUFFdEQsSUFBSWdCLHNCQUFzQixNQUFNO1FBQzlCLElBQU1zQixpQkFBaUJ0RCxvQ0FBb0NnQyxvQkFDckRnQixVQUFVO1lBQ1JVLFFBQUFBO1lBQ0ExQyxRQUFBQTtRQUNGO1FBRU5zQyxlQUFlTCxPQUFPLENBQUNEO1FBRXZCUSxNQUFNRixlQUFlTSxLQUFLLENBQUNaO0lBQzdCO0lBRUFRLE1BQU0sQUFBQyxHQUNQQSxPQURTRCxvQkFBbUIsUUFDeEIsT0FBSkMsS0FBSTtJQUdKLE9BQU9BO0FBQ1Q7SUFFQSxXQUFlO0lBQ2IxRCxvQkFBQUE7SUFDQUYsd0JBQUFBO0lBQ0FHLHlCQUFBQTtJQUNBTiwyQkFBQUE7SUFDQUksNkJBQUFBO0lBQ0FMLCtCQUFBQTtJQUNBUyxpQ0FBQUE7SUFDQU4sb0NBQUFBO0lBQ0FLLHFDQUFBQTtJQUNBTiwyQ0FBQUE7QUFDRiJ9