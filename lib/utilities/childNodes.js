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
function domElementsFromChildNodes(childNodes, context) {
    var domElements = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var childNodePlainTextMarkdownNode = _instanceof(childNode, _plainText.default);
            if (childNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = childNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var textDOMElement = textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context);
                if (textDOMElement !== null) {
                    var domElement = textDOMElement; ///
                    domElements.push(domElement);
                }
                var domElement1 = childNode.createDOMElement(context);
                if (domElement1 !== null) {
                    domElements.push(domElement1);
                }
            }
        }
    });
    var textDOMElement = textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context);
    if (textDOMElement !== null) {
        var domElement = textDOMElement; ///
        domElements.push(domElement);
    }
    return domElements;
}
function htmlFromChildNodes(childNodes, context) {
    var html;
    var htmls = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var childNodePlainTextMarkdownNode = _instanceof(childNode, _plainText.default);
            if (childNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = childNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                html = htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context);
                if (html !== null) {
                    htmls.push(html);
                }
                var indent = null;
                html = childNode.asHTML(indent, context);
                if (html !== null) {
                    htmls.push(html);
                }
            }
        }
    });
    html = htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context);
    if (html !== null) {
        htmls.push(html);
    }
    html = htmls.join(_constants.EMPTY_STRING);
    return html;
}
function textDOMElementFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context) {
    var textDOMElement = null;
    var plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;
    if (plainTextMarkdownNodesLength > 0) {
        var markdownNodes = plainTextMarkdownNodes, content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context);
        textDOMElement = document.createTextNode(content);
        clear(plainTextMarkdownNodes);
    }
    return textDOMElement;
}
function htmlFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context) {
    var html = null;
    var plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;
    if (plainTextMarkdownNodesLength > 0) {
        var markdownNodes = plainTextMarkdownNodes, content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context);
        html = content;
        clear(plainTextMarkdownNodes);
    }
    return html;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQbGFpblRleHRNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZG9tRWxlbWVudHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGV4dERPTUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQpXG5cbiAgICAgICAgaWYgKHRleHRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IHRleHRET01FbGVtZW50OyAgLy8vXG5cbiAgICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGNoaWxkTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdGV4dERPTUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQpXG5cbiAgaWYgKHRleHRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRleHRET01FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IGh0bWw7XG5cbiAgY29uc3QgaHRtbHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRtbCA9IGh0bWxGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0KVxuXG4gICAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGVudCA9IG51bGw7XG5cbiAgICAgICAgaHRtbCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGh0bWwgPSBodG1sRnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dClcblxuICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gIH1cblxuICBodG1sID0gaHRtbHMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG5mdW5jdGlvbiB0ZXh0RE9NRWxlbWVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IHRleHRET01FbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID0gcGxhaW5UZXh0TWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlcyA9IHBsYWluVGV4dE1hcmtkb3duTm9kZXMsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgdGV4dERPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGNsZWFyKHBsYWluVGV4dE1hcmtkb3duTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIHRleHRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBodG1sRnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA9IHBsYWluVGV4dE1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZXMgPSBwbGFpblRleHRNYXJrZG93bk5vZGVzLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICAgIGh0bWwgPSBjb250ZW50O1xuXG4gICAgY2xlYXIocGxhaW5UZXh0TWFya2Rvd25Ob2Rlcyk7XG4gIH1cblxuICByZXR1cm4gaHRtbDtcbn1cbiJdLCJuYW1lcyI6WyJkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIiwiaHRtbEZyb21DaGlsZE5vZGVzIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImNoaWxkTm9kZXMiLCJjb250ZXh0IiwiZG9tRWxlbWVudHMiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwiUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicHVzaCIsInRleHRET01FbGVtZW50IiwidGV4dERPTUVsZW1lbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiaHRtbCIsImh0bWxzIiwiaHRtbEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzIiwiaW5kZW50IiwiYXNIVE1MIiwiam9pbiIsIkVNUFRZX1NUUklORyIsInBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtYXJrZG93bk5vZGVzIiwiY29udGVudCIsImNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVdnQkEseUJBQXlCO2VBQXpCQTs7SUEyQ0FDLGtCQUFrQjtlQUFsQkE7Ozt5QkFwRGU7Z0VBRUc7eUJBRUw7dUJBQ1k7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFRCxTQUFTRiwwQkFB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