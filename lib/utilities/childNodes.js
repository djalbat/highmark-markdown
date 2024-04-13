"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    domElementsFromChildNodes: function() {
        return domElementsFromChildNodes;
    },
    htmlFromChildNodes: function() {
        return htmlFromChildNodes;
    }
});
var _necessary = require("necessary");
var _plainText = /*#__PURE__*/ _interop_require_default(require("../node/markdown/plainText"));
var _constants = require("../constants");
var _content = require("./content");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var clear = _necessary.arrayUtilities.clear;
function htmlFromChildNodes(childNodes, context, trimmed) {
    var html;
    var htmls = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _instanceof(markdownNode, _plainText.default);
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                html = htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed);
                if (html !== null) {
                    htmls.push(html);
                    trimmed = false;
                }
                var indent = null;
                html = markdownNode.asHTML(indent, context);
                if (html !== null) {
                    htmls.push(html);
                }
            }
        }
    });
    html = htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed);
    if (html !== null) {
        htmls.push(html);
    }
    html = htmls.join(_constants.EMPTY_STRING);
    return html;
}
function domElementsFromChildNodes(childNodes, context, trimmed) {
    var domElements = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _instanceof(markdownNode, _plainText.default);
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var textDOMElement = textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed);
                if (textDOMElement !== null) {
                    var domElement = textDOMElement; ///
                    domElements.push(domElement);
                    trimmed = false;
                }
                var domElement1 = markdownNode.createDOMElement(context);
                if (domElement1 !== null) {
                    domElements.push(domElement1);
                }
            }
        }
    });
    var textDOMElement = textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed);
    if (textDOMElement !== null) {
        var domElement = textDOMElement; ///
        domElements.push(domElement);
    }
    return domElements;
}
function htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed) {
    var html = null;
    var plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;
    if (plainTextMarkdownNodesLength > 0) {
        var markdownNodes = plainTextMarkdownNodes, content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context, trimmed);
        html = content; ///
        clear(plainTextMarkdownNodes);
    }
    return html;
}
function textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, trimmed) {
    var textDOMElement = null;
    var plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;
    if (plainTextMarkdownNodesLength > 0) {
        var markdownNodes = plainTextMarkdownNodes, content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context, trimmed);
        textDOMElement = document.createTextNode(content);
        clear(plainTextMarkdownNodes);
    }
    return textDOMElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQbGFpblRleHRNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgdHJpbW1lZCkge1xuICBsZXQgaHRtbDtcblxuICBjb25zdCBodG1scyA9IFtdLFxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzID0gW107XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSA9IChtYXJrZG93bk5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAobWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlcy5wdXNoKHBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodG1sID0gaHRtbEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIHRyaW1tZWQpXG5cbiAgICAgICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgICAgICBodG1scy5wdXNoKGh0bWwpO1xuXG4gICAgICAgICAgdHJpbW1lZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZW50ID0gbnVsbDtcblxuICAgICAgICBodG1sID0gbWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaHRtbCA9IGh0bWxGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0LCB0cmltbWVkKVxuXG4gIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgaHRtbHMucHVzaChodG1sKTtcbiAgfVxuXG4gIGh0bWwgPSBodG1scy5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIGh0bWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQsIHRyaW1tZWQpIHtcbiAgY29uc3QgZG9tRWxlbWVudHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAobWFya2Rvd25Ob2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGV4dERPTUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIHRyaW1tZWQpXG5cbiAgICAgICAgaWYgKHRleHRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IHRleHRET01FbGVtZW50OyAgLy8vXG5cbiAgICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuXG4gICAgICAgICAgdHJpbW1lZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IG1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdGV4dERPTUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIHRyaW1tZWQpXG5cbiAgaWYgKHRleHRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRleHRET01FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBodG1sRnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgdHJpbW1lZCkge1xuICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA9IHBsYWluVGV4dE1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZXMgPSBwbGFpblRleHRNYXJrZG93bk5vZGVzLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzLCBjb250ZXh0LCB0cmltbWVkKTtcblxuICAgIGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGNsZWFyKHBsYWluVGV4dE1hcmtkb3duTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIGh0bWw7XG59XG5cbmZ1bmN0aW9uIHRleHRET01FbGVtZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgdHJpbW1lZCkge1xuICBsZXQgdGV4dERPTUVsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPSBwbGFpblRleHRNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICBpZiAocGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGVzID0gcGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU1hcmtkb3duTm9kZXMobWFya2Rvd25Ob2RlcywgY29udGV4dCwgdHJpbW1lZCk7XG5cbiAgICB0ZXh0RE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgY2xlYXIocGxhaW5UZXh0TWFya2Rvd25Ob2Rlcyk7XG4gIH1cblxuICByZXR1cm4gdGV4dERPTUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyIsImh0bWxGcm9tQ2hpbGROb2RlcyIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJjaGlsZE5vZGVzIiwiY29udGV4dCIsInRyaW1tZWQiLCJodG1sIiwiaHRtbHMiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwiUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicHVzaCIsImh0bWxGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyIsImluZGVudCIsImFzSFRNTCIsImpvaW4iLCJFTVBUWV9TVFJJTkciLCJkb21FbGVtZW50cyIsInRleHRET01FbGVtZW50IiwidGV4dERPTUVsZW1lbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwicGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm1hcmtkb3duTm9kZXMiLCJjb250ZW50IiwiY29udGVudEZyb21NYXJrZG93bk5vZGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE0RGdCQSx5QkFBeUI7ZUFBekJBOztJQWpEQUMsa0JBQWtCO2VBQWxCQTs7O3lCQVRlO2dFQUVHO3lCQUVMO3VCQUNZOzs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRUQsU0FBU0QsbUJBQW1CRyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsT0FBTztJQUM3RCxJQUFJQztJQUVKLElBQU1DLFFBQVEsRUFBRSxFQUNWQyx5QkFBeUIsRUFBRTtJQUVqQ0wsV0FBV00sT0FBTyxDQUFDLFNBQUNDO1FBQ2xCLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCSSxlQUFlRCxpQkFDZkUsb0NBQXFDRCxBQUFZLFlBQVpBLGNBQXdCRSxrQkFBcUI7WUFFeEYsSUFBSUQsbUNBQW1DO2dCQUNyQyxJQUFNRSx3QkFBd0JILGNBQWMsR0FBRztnQkFFL0NOLHVCQUF1QlUsSUFBSSxDQUFDRDtZQUM5QixPQUFPO2dCQUNMWCxPQUFPYSwrQkFBK0JYLHdCQUF3QkosU0FBU0M7Z0JBRXZFLElBQUlDLFNBQVMsTUFBTTtvQkFDakJDLE1BQU1XLElBQUksQ0FBQ1o7b0JBRVhELFVBQVU7Z0JBQ1o7Z0JBRUEsSUFBTWUsU0FBUztnQkFFZmQsT0FBT1EsYUFBYU8sTUFBTSxDQUFDRCxRQUFRaEI7Z0JBRW5DLElBQUlFLFNBQVMsTUFBTTtvQkFDakJDLE1BQU1XLElBQUksQ0FBQ1o7Z0JBQ2I7WUFDRjtRQUNGO0lBQ0Y7SUFFQUEsT0FBT2EsK0JBQStCWCx3QkFBd0JKLFNBQVNDO0lBRXZFLElBQUlDLFNBQVMsTUFBTTtRQUNqQkMsTUFBTVcsSUFBSSxDQUFDWjtJQUNiO0lBRUFBLE9BQU9DLE1BQU1lLElBQUksQ0FBQ0MsdUJBQVk7SUFFOUIsT0FBT2pCO0FBQ1Q7QUFFTyxTQUFTUCwwQkFBMEJJLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxPQUFPO0lBQ3BFLElBQU1tQixjQUFjLEVBQUUsRUFDaEJoQix5QkFBeUIsRUFBRTtJQUVqQ0wsV0FBV00sT0FBTyxDQUFDLFNBQUNDO1FBQ2xCLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCSSxlQUFlRCxpQkFDZkUsb0NBQXFDRCxBQUFZLFlBQVpBLGNBQXdCRSxrQkFBcUI7WUFFeEYsSUFBSUQsbUNBQW1DO2dCQUNyQyxJQUFNRSx3QkFBd0JILGNBQWMsR0FBRztnQkFFL0NOLHVCQUF1QlUsSUFBSSxDQUFDRDtZQUM5QixPQUFPO2dCQUNMLElBQU1RLGlCQUFpQkMseUNBQXlDbEIsd0JBQXdCSixTQUFTQztnQkFFakcsSUFBSW9CLG1CQUFtQixNQUFNO29CQUMzQixJQUFNRSxhQUFhRixnQkFBaUIsR0FBRztvQkFFdkNELFlBQVlOLElBQUksQ0FBQ1M7b0JBRWpCdEIsVUFBVTtnQkFDWjtnQkFFQSxJQUFNc0IsY0FBYWIsYUFBYWMsZ0JBQWdCLENBQUN4QjtnQkFFakQsSUFBSXVCLGdCQUFlLE1BQU07b0JBQ3ZCSCxZQUFZTixJQUFJLENBQUNTO2dCQUNuQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQU1GLGlCQUFpQkMseUNBQXlDbEIsd0JBQXdCSixTQUFTQztJQUVqRyxJQUFJb0IsbUJBQW1CLE1BQU07UUFDM0IsSUFBTUUsYUFBYUYsZ0JBQWlCLEdBQUc7UUFFdkNELFlBQVlOLElBQUksQ0FBQ1M7SUFDbkI7SUFFQSxPQUFPSDtBQUNUO0FBRUEsU0FBU0wsK0JBQStCWCxzQkFBc0IsRUFBRUosT0FBTyxFQUFFQyxPQUFPO0lBQzlFLElBQUlDLE9BQU87SUFFWCxJQUFNdUIsK0JBQStCckIsdUJBQXVCc0IsTUFBTTtJQUVsRSxJQUFJRCwrQkFBK0IsR0FBRztRQUNwQyxJQUFNRSxnQkFBZ0J2Qix3QkFDaEJ3QixVQUFVQyxJQUFBQSxpQ0FBd0IsRUFBQ0YsZUFBZTNCLFNBQVNDO1FBRWpFQyxPQUFPMEIsU0FBUyxHQUFHO1FBRW5CL0IsTUFBTU87SUFDUjtJQUVBLE9BQU9GO0FBQ1Q7QUFFQSxTQUFTb0IseUNBQXlDbEIsc0JBQXNCLEVBQUVKLE9BQU8sRUFBRUMsT0FBTztJQUN4RixJQUFJb0IsaUJBQWlCO0lBRXJCLElBQU1JLCtCQUErQnJCLHVCQUF1QnNCLE1BQU07SUFFbEUsSUFBSUQsK0JBQStCLEdBQUc7UUFDcEMsSUFBTUUsZ0JBQWdCdkIsd0JBQ2hCd0IsVUFBVUMsSUFBQUEsaUNBQXdCLEVBQUNGLGVBQWUzQixTQUFTQztRQUVqRW9CLGlCQUFpQlMsU0FBU0MsY0FBYyxDQUFDSDtRQUV6Qy9CLE1BQU1PO0lBQ1I7SUFFQSxPQUFPaUI7QUFDVCJ9