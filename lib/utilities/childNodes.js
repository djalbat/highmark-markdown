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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQbGFpblRleHRNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpIHtcbiAgbGV0IGh0bWw7XG5cbiAgY29uc3QgaHRtbHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAobWFya2Rvd25Ob2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpO1xuXG4gICAgICAgIGlmIChwbGFpblRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gcGxhaW5UZXh0OyAvLy9cblxuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgICBodG1sID0gbWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxlZnRUcmltbWVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIGNvbnN0IHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKTtcblxuICBpZiAocGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgaHRtbCA9IHBsYWluVGV4dDsgLy8vXG5cbiAgICBodG1scy5wdXNoKGh0bWwpO1xuICB9XG5cbiAgaHRtbCA9IGh0bWxzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gaHRtbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKSB7XG4gIGxldCBwbGFpblRleHQ7XG5cbiAgY29uc3QgcGxhaW5UZXh0cyA9IFtdLFxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzID0gW107XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSA9IChtYXJrZG93bk5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAobWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlcy5wdXNoKHBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0LCBsZWZ0VHJpbW1lZCk7XG5cbiAgICAgICAgaWYgKHBsYWluVGV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgIHBsYWluVGV4dHMucHVzaChwbGFpblRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG1hcmtkb3duTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpO1xuXG4gICAgICAgIGlmIChwbGFpblRleHQgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgIHBsYWluVGV4dHMucHVzaChwbGFpblRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGVmdFRyaW1tZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpO1xuXG4gIGlmIChwbGFpblRleHQgIT09IG51bGwpIHtcbiAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgfVxuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dHMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwbGFpblRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gKG1hcmtkb3duTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKTtcblxuICAgICAgICBpZiAocGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHBsYWluVGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IG1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxlZnRUcmltbWVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIGNvbnN0IHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKTtcblxuICBpZiAocGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29udGVudCA9IHBsYWluVGV4dCwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBwbGFpblRleHRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0LCBsZWZ0VHJpbW1lZCkge1xuICBsZXQgcGxhaW5UZXh0ID0gbnVsbDtcblxuICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID0gcGxhaW5UZXh0TWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlcyA9IHBsYWluVGV4dE1hcmtkb3duTm9kZXMsICAvLy9cbiAgICAgICAgICByaWdodFRyaW1tZWQgPSBmYWxzZSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkLCByaWdodFRyaW1tZWQpO1xuXG4gICAgcGxhaW5UZXh0ID0gY29udGVudDsgLy8vXG5cbiAgICBjbGVhcihwbGFpblRleHRNYXJrZG93bk5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiBwbGFpblRleHQ7XG59XG4iXSwibmFtZXMiOlsiZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyIsImh0bWxGcm9tQ2hpbGROb2RlcyIsInBsYWluVGV4dEZyb21DaGlsZE5vZGVzIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImNoaWxkTm9kZXMiLCJjb250ZXh0IiwibGVmdFRyaW1tZWQiLCJodG1sIiwiaHRtbHMiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwiUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicHVzaCIsInBsYWluVGV4dCIsInBsYWluVGV4dEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzIiwiaW5kZW50IiwiYXNIVE1MIiwiam9pbiIsIkVNUFRZX1NUUklORyIsInBsYWluVGV4dHMiLCJnZXRDaGlsZE5vZGVzIiwiZG9tRWxlbWVudHMiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibWFya2Rvd25Ob2RlcyIsInJpZ2h0VHJpbW1lZCIsImNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZ0hnQkEseUJBQXlCO2VBQXpCQTs7SUFyR0FDLGtCQUFrQjtlQUFsQkE7O0lBb0RBQyx1QkFBdUI7ZUFBdkJBOzs7eUJBN0RlO2dFQUVHO3lCQUVMO3VCQUNZOzs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRUQsU0FBU0YsbUJBQW1CSSxVQUFV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