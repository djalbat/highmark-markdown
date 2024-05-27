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
var clear = _necessary.arrayUtilities.clear;
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
                var domElement1 = markdownNode.createDOMElement(context);
                if (domElement1 !== null) {
                    domElements.push(domElement1);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQbGFpblRleHRNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpIHtcbiAgbGV0IGh0bWw7XG5cbiAgY29uc3QgaHRtbHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAobWFya2Rvd25Ob2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpO1xuXG4gICAgICAgIGlmIChwbGFpblRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gcGxhaW5UZXh0OyAvLy9cblxuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgICBodG1sID0gbWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxlZnRUcmltbWVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIGNvbnN0IHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKTtcblxuICBpZiAocGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgaHRtbCA9IHBsYWluVGV4dDsgLy8vXG5cbiAgICBodG1scy5wdXNoKGh0bWwpO1xuICB9XG5cbiAgaHRtbCA9IGh0bWxzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICBodG1sID0gaHRtbC5yZXBsYWNlKC9cXG4kLywgRU1QVFlfU1RSSU5HKTtcblxuICBodG1sID0gYCR7aHRtbH1cXG5gO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpIHtcbiAgbGV0IHBsYWluVGV4dDtcblxuICBjb25zdCBwbGFpblRleHRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gKG1hcmtkb3duTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKTtcblxuICAgICAgICBpZiAocGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0LCBsZWZ0VHJpbW1lZCk7XG5cbiAgICAgICAgaWYgKHBsYWluVGV4dCAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZWZ0VHJpbW1lZCA9IGZhbHNlO1xuICB9KTtcblxuICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0LCBsZWZ0VHJpbW1lZCk7XG5cbiAgaWYgKHBsYWluVGV4dCAhPT0gbnVsbCkge1xuICAgIHBsYWluVGV4dHMucHVzaChwbGFpblRleHQpO1xuICB9XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0cy5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpIHtcbiAgY29uc3QgZG9tRWxlbWVudHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAobWFya2Rvd25Ob2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpO1xuXG4gICAgICAgIGlmIChwbGFpblRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gcGxhaW5UZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gbWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGVmdFRyaW1tZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgY29uc3QgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpO1xuXG4gIGlmIChwbGFpblRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBjb250ZW50ID0gcGxhaW5UZXh0LCAgLy8vXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZG9tRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHBsYWluVGV4dEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKSB7XG4gIGxldCBwbGFpblRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPSBwbGFpblRleHRNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICBpZiAocGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGVzID0gcGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgIC8vL1xuICAgICAgICAgIHJpZ2h0VHJpbW1lZCA9IGZhbHNlLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU1hcmtkb3duTm9kZXMobWFya2Rvd25Ob2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQsIHJpZ2h0VHJpbW1lZCk7XG5cbiAgICBwbGFpblRleHQgPSBjb250ZW50OyAvLy9cblxuICAgIGNsZWFyKHBsYWluVGV4dE1hcmtkb3duTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIiwiaHRtbEZyb21DaGlsZE5vZGVzIiwicGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiY2hpbGROb2RlcyIsImNvbnRleHQiLCJsZWZ0VHJpbW1lZCIsImh0bWwiLCJodG1scyIsInBsYWluVGV4dE1hcmtkb3duTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJtYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUiLCJQbGFpblRleHRNYXJrZG93bk5vZGUiLCJwbGFpblRleHRNYXJrZG93bk5vZGUiLCJwdXNoIiwicGxhaW5UZXh0IiwicGxhaW5UZXh0RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMiLCJpbmRlbnQiLCJhc0hUTUwiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwicmVwbGFjZSIsInBsYWluVGV4dHMiLCJnZXRDaGlsZE5vZGVzIiwiZG9tRWxlbWVudHMiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibWFya2Rvd25Ob2RlcyIsInJpZ2h0VHJpbW1lZCIsImNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFvSGdCQSx5QkFBeUI7ZUFBekJBOztJQXpHQUMsa0JBQWtCO2VBQWxCQTs7SUF3REFDLHVCQUF1QjtlQUF2QkE7Ozt5QkFqRWU7Z0VB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