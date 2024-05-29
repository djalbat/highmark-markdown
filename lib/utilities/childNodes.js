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
    },
    plainTextFromChildNodes: function() {
        return plainTextFromChildNodes;
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
var push = _necessary.arrayUtilities.push, clear = _necessary.arrayUtilities.clear;
function htmlFromChildNodes(childNodes, context, leftTrimmed) {
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
                var plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);
                if (plainText !== null) {
                    var html = plainText; ///
                    htmls.push(html);
                }
                var indent = null, html1 = markdownNode.asHTML(indent, context);
                if (html1 !== null) {
                    htmls.push(html1);
                }
            }
        }
        leftTrimmed = false;
    });
    var plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);
    if (plainText !== null) {
        var html1 = plainText; ///
        htmls.push(html1);
    }
    html = htmls.join(_constants.EMPTY_STRING);
    html = html.replace(/\n$/, _constants.EMPTY_STRING);
    html = "".concat(html, "\n");
    return html;
}
function plainTextFromChildNodes(childNodes, context, leftTrimmed) {
    var plainText;
    var plainTexts = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _instanceof(markdownNode, _plainText.default);
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);
                if (plainText !== null) {
                    plainTexts.push(plainText);
                }
                var _$childNodes = markdownNode.getChildNodes();
                plainText = plainTextFromChildNodes(_$childNodes, context, leftTrimmed);
                if (plainText !== _constants.EMPTY_STRING) {
                    plainTexts.push(plainText);
                }
            }
        }
        leftTrimmed = false;
    });
    plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);
    if (plainText !== null) {
        plainTexts.push(plainText);
    }
    plainText = plainTexts.join(_constants.EMPTY_STRING);
    return plainText;
}
function domElementsFromChildNodes(childNodes, context, leftTrimmed) {
    var domElements = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _instanceof(markdownNode, _plainText.default);
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);
                if (plainText !== null) {
                    var content = plainText, textNode = document.createTextNode(content), domElement = textNode; ///
                    domElements.push(domElement);
                }
                markdownNode.createDOMElement(context);
                var markdownNodeDOMElements = markdownNode.getDOMElements();
                push(domElements, markdownNodeDOMElements);
            }
        }
        leftTrimmed = false;
    });
    var plainText = plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed);
    if (plainText !== null) {
        var content = plainText, textNode = document.createTextNode(content), domElement = textNode; ///
        domElements.push(domElement);
    }
    return domElements;
}
function plainTextFromPlainTextMarkdownNodes(plainTextMarkdownNodes, context, leftTrimmed) {
    var plainText = null;
    var plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;
    if (plainTextMarkdownNodesLength > 0) {
        var markdownNodes = plainTextMarkdownNodes, rightTrimmed = false, content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context, leftTrimmed, rightTrimmed);
        plainText = content; ///
        clear(plainTextMarkdownNodes);
    }
    return plainText;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQbGFpblRleHRNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuY29uc3QgeyBwdXNoLCBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpIHtcbiAgbGV0IGh0bWw7XG5cbiAgY29uc3QgaHRtbHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAobWFya2Rvd25Ob2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpO1xuXG4gICAgICAgIGlmIChwbGFpblRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gcGxhaW5UZXh0OyAvLy9cblxuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgICBodG1sID0gbWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxlZnRUcmltbWVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIGNvbnN0IHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKTtcblxuICBpZiAocGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgaHRtbCA9IHBsYWluVGV4dDsgLy8vXG5cbiAgICBodG1scy5wdXNoKGh0bWwpO1xuICB9XG5cbiAgaHRtbCA9IGh0bWxzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICBodG1sID0gaHRtbC5yZXBsYWNlKC9cXG4kLywgRU1QVFlfU1RSSU5HKTtcblxuICBodG1sID0gYCR7aHRtbH1cXG5gO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpIHtcbiAgbGV0IHBsYWluVGV4dDtcblxuICBjb25zdCBwbGFpblRleHRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gKG1hcmtkb3duTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKTtcblxuICAgICAgICBpZiAocGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0LCBsZWZ0VHJpbW1lZCk7XG5cbiAgICAgICAgaWYgKHBsYWluVGV4dCAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZWZ0VHJpbW1lZCA9IGZhbHNlO1xuICB9KTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0LCBsZWZ0VHJpbW1lZCk7XG5cbiAgaWYgKHBsYWluVGV4dCAhPT0gbnVsbCkge1xuICAgIHBsYWluVGV4dHMucHVzaChwbGFpblRleHQpO1xuICB9XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0cy5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpIHtcbiAgY29uc3QgZG9tRWxlbWVudHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAobWFya2Rvd25Ob2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpO1xuXG4gICAgICAgIGlmIChwbGFpblRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gcGxhaW5UZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBtYXJrZG93bk5vZGVET01FbGVtZW50cyA9IG1hcmtkb3duTm9kZS5nZXRET01FbGVtZW50cygpO1xuXG4gICAgICAgIHB1c2goZG9tRWxlbWVudHMsIG1hcmtkb3duTm9kZURPTUVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZWZ0VHJpbW1lZCA9IGZhbHNlO1xuICB9KTtcblxuICBjb25zdCBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0LCBsZWZ0VHJpbW1lZCk7XG5cbiAgaWYgKHBsYWluVGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBwbGFpblRleHQsICAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50cztcbn1cblxuZnVuY3Rpb24gcGxhaW5UZXh0RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpIHtcbiAgbGV0IHBsYWluVGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA9IHBsYWluVGV4dE1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZXMgPSBwbGFpblRleHRNYXJrZG93bk5vZGVzLCAgLy8vXG4gICAgICAgICAgcmlnaHRUcmltbWVkID0gZmFsc2UsXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzLCBjb250ZXh0LCBsZWZ0VHJpbW1lZCwgcmlnaHRUcmltbWVkKTtcblxuICAgIHBsYWluVGV4dCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgY2xlYXIocGxhaW5UZXh0TWFya2Rvd25Ob2Rlcyk7XG4gIH1cblxuICByZXR1cm4gcGxhaW5UZXh0O1xufVxuIl0sIm5hbWVzIjpbImRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMiLCJodG1sRnJvbUNoaWxkTm9kZXMiLCJwbGFpblRleHRGcm9tQ2hpbGROb2RlcyIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNsZWFyIiwiY2hpbGROb2RlcyIsImNvbnRleHQiLCJsZWZ0VHJpbW1lZCIsImh0bWwiLCJodG1scyIsInBsYWluVGV4dE1hcmtkb3duTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJtYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUiLCJQbGFpblRleHRNYXJrZG93bk5vZGUiLCJwbGFpblRleHRNYXJrZG93bk5vZGUiLCJwbGFpblRleHQiLCJwbGFpblRleHRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyIsImluZGVudCIsImFzSFRNTCIsImpvaW4iLCJFTVBUWV9TVFJJTkciLCJyZXBsYWNlIiwicGxhaW5UZXh0cyIsImdldENoaWxkTm9kZXMiLCJkb21FbGVtZW50cyIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsIm1hcmtkb3duTm9kZURPTUVsZW1lbnRzIiwiZ2V0RE9NRWxlbWVudHMiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibWFya2Rvd25Ob2RlcyIsInJpZ2h0VHJpbW1lZCIsImNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW9IZ0JBLHlC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