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
var _content = require("../utilities/content");
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, clear = _necessary.arrayUtilities.clear;
function htmlFromChildNodes(childNodes, context) {
    var htmls = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _instanceof(markdownNode, _plainText.default);
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);
                if (content !== null) {
                    var html = content; ///
                    htmls.push(html);
                }
                var indent = null, html1 = markdownNode.asHTML(indent, context);
                if (html1 !== null) {
                    htmls.push(html1);
                }
            }
        }
    });
    var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);
    if (content !== null) {
        var html = content; ///
        htmls.push(html);
    }
    var html1 = htmls.join(_constants.EMPTY_STRING);
    return html1;
}
function plainTextFromChildNodes(childNodes, context) {
    var plainTexts = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _instanceof(markdownNode, _plainText.default);
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);
                if (content !== null) {
                    var plainText = content; ///
                    plainTexts.push(plainText);
                }
                {
                    var _$childNodes = markdownNode.getChildNodes(), plainText1 = plainTextFromChildNodes(_$childNodes, context);
                    if (plainText1 !== _constants.EMPTY_STRING) {
                        plainTexts.push(plainText1);
                    }
                }
            }
        }
    });
    var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);
    if (content !== null) {
        var plainText = content; ///
        plainTexts.push(plainText);
    }
    var plainText1 = plainTexts.join(_constants.EMPTY_STRING);
    return plainText1;
}
function domElementsFromChildNodes(childNodes, context) {
    var domElements = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _instanceof(markdownNode, _plainText.default);
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);
                if (content !== null) {
                    var textNode = document.createTextNode(content), domElement = textNode; ///
                    domElements.push(domElement);
                }
                markdownNode.createDOMElement(context);
                var markdownNodeDOMElements = markdownNode.getDOMElements();
                push(domElements, markdownNodeDOMElements);
            }
        }
    });
    var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);
    if (content !== null) {
        var textNode = document.createTextNode(content), domElement = textNode; ///
        domElements.push(domElement);
    }
    return domElements;
}
function contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context) {
    var content = null;
    var plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;
    if (plainTextMarkdownNodesLength > 0) {
        var nodes = plainTextMarkdownNodes, lastNode = last(nodes), firstNode = first(nodes), lastNodeIndex = childNodes.indexOf(lastNode), firstNodeIndex = childNodes.indexOf(firstNode), childNodesLength = childNodes.length, lastChildNodeIndex = childNodesLength - 1, firstChildNodeIndex = 0, augmentLeft = firstNodeIndex !== firstChildNodeIndex, augmentRight = lastNodeIndex !== lastChildNodeIndex; ///
        content = (0, _content.contentFromNodes)(nodes, augmentLeft, augmentRight, context);
        clear(plainTextMarkdownNodes);
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQbGFpblRleHRNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCwgcHVzaCwgY2xlYXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHRtbHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAobWFya2Rvd25Ob2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgICBodG1sID0gbWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gIH1cblxuICBjb25zdCBodG1sID0gaHRtbHMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwbGFpblRleHRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gKG1hcmtkb3duTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwbGFpblRleHQgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgICAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwbGFpblRleHQgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gY29udGVudDsgIC8vL1xuXG4gICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gIH1cblxuICBjb25zdCBwbGFpblRleHQgPSBwbGFpblRleHRzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGxhaW5UZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gKG1hcmtkb3duTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZURPTUVsZW1lbnRzID0gbWFya2Rvd25Ob2RlLmdldERPTUVsZW1lbnRzKCk7XG5cbiAgICAgICAgcHVzaChkb21FbGVtZW50cywgbWFya2Rvd25Ob2RlRE9NRWxlbWVudHMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCkge1xuICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA9IHBsYWluVGV4dE1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG5vZGVzID0gcGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgICBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgICAgbGFzdE5vZGVJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihsYXN0Tm9kZSksXG4gICAgICAgICAgZmlyc3ROb2RlSW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZmlyc3ROb2RlKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUluZGV4ID0gY2hpbGROb2Rlc0xlbmd0aCAtIDEsXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVJbmRleCA9IDAsXG4gICAgICAgICAgYXVnbWVudExlZnQgPSAoZmlyc3ROb2RlSW5kZXggIT09IGZpcnN0Q2hpbGROb2RlSW5kZXgpLFxuICAgICAgICAgIGF1Z21lbnRSaWdodCA9IChsYXN0Tm9kZUluZGV4ICE9PSBsYXN0Q2hpbGROb2RlSW5kZXgpOyAgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudEZyb21Ob2Rlcyhub2RlcywgYXVnbWVudExlZnQsIGF1Z21lbnRSaWdodCwgY29udGV4dCk7XG5cbiAgICBjbGVhcihwbGFpblRleHRNYXJrZG93bk5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbImRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMiLCJodG1sRnJvbUNoaWxkTm9kZXMiLCJwbGFpblRleHRGcm9tQ2hpbGROb2RlcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwicHVzaCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImNvbnRleHQiLCJodG1scyIsInBsYWluVGV4dE1hcmtkb3duTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJtYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUiLCJQbGFpblRleHRNYXJrZG93bk5vZGUiLCJwbGFpblRleHRNYXJrZG93bk5vZGUiLCJjb250ZW50IiwiY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzIiwiaHRtbCIsImluZGVudCIsImFzSFRNTCIsImpvaW4iLCJFTVBUWV9TVFJJTkciLCJwbGFpblRleHRzIiwicGxhaW5UZXh0IiwiZ2V0Q2hpbGROb2RlcyIsImRvbUVsZW1lbnRzIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJtYXJrZG93bk5vZGVET01FbGVtZW50cyIsImdldERPTUVsZW1lbnRzIiwicGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGVzIiwibGFzdE5vZGUiLCJmaXJzdE5vZGUiLCJsYXN0Tm9kZUluZGV4IiwiaW5kZXhPZiIsImZpcnN0Tm9kZUluZGV4IiwiY2hpbGROb2Rlc0xlbmd0aCIsImxhc3RDaGlsZE5vZGVJbmRleCIsImZpcnN0Q2hpbGROb2RlSW5kZXgiLCJhdWdtZW50TGVmdCIsImF1Z21lbnRSaWdodCIsImNvbnRlbnRGcm9tTm9kZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTZHZ0JBLHlCQUF5QjtlQUF6QkE7O0lBbEdBQyxrQkFBa0I7ZUFBbEJBOztJQWdEQUMsdUJBQXVCO2VBQXZCQTs7O3lCQXpEZTtnRUFFRzt5QkFFTDt1QkFDSTs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFRQyxRQUE2QkMseUJBQWMsQ0FBM0NELE9BQU9FLE9BQXNCRCx5QkFBYyxDQUFwQ0MsTUFBTUMsT0FBZ0JGLHlCQUFjLENBQTlCRSxNQUFNQyxRQUFVSCx5QkFBYyxDQUF4Qkc7QUFFcEIsU0FBU04sbUJBQW1CTyxVQUFVLEVBQUVDLE9BQU87SUFDcEQsSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLHlCQUF5QixFQUFFO0lBRWpDSCxXQUFXSSxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1FLGtCQUFrQkgsV0FDbEJJLGVBQWVELGlCQUNmRSxvQ0FBcUNELEFBQVksWUFBWkEsY0FBd0JFLGtCQUFxQjtZQUV4RixJQUFJRCxtQ0FBbUM7Z0JBQ3JDLElBQU1FLHdCQUF3QkgsY0FBYyxHQUFHO2dCQUUvQ04sdUJBQXVCTCxJQUFJLENBQUNjO1lBQzlCLE9BQU87Z0JBQ0wsSUFBTUMsVUFBVUMsa0NBQWtDWCx3QkFBd0JILFlBQVlDO2dCQUV0RixJQUFJWSxZQUFZLE1BQU07b0JBQ3BCLElBQU1FLE9BQU9GLFNBQVMsR0FBRztvQkFFekJYLE1BQU1KLElBQUksQ0FB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