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
var _constants = require("../constants");
var _content = require("../utilities/content");
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, clear = _necessary.arrayUtilities.clear;
function htmlFromChildNodes(childNodes, context) {
    var htmls = [], plainTextMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = markdownNode.isPlainTextMarkdownNode();
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
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = markdownNode.isPlainTextMarkdownNode();
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
            var nonTerminalNode = childNode, markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = markdownNode.isPlainTextMarkdownNode();
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, childNodes, context);
                if (content !== null) {
                    var textNode = document.createTextNode(content), domElement = textNode; ///
                    domElements.push(domElement);
                }
                var domElement1 = markdownNode.createDOMElement(context);
                markdownNode.setDOMElement(domElement1);
                domElements.push(domElement1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCwgY2xlYXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHRtbHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGUuaXNQbGFpblRleHRNYXJrZG93bk5vZGUoKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgICBodG1sID0gbWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gIH1cblxuICBjb25zdCBodG1sID0gaHRtbHMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwbGFpblRleHRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlLmlzUGxhaW5UZXh0TWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwbGFpblRleHQgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgICAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwbGFpblRleHQgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gY29udGVudDsgIC8vL1xuXG4gICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gIH1cblxuICBjb25zdCBwbGFpblRleHQgPSBwbGFpblRleHRzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGxhaW5UZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlLmlzUGxhaW5UZXh0TWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBtYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgICBtYXJrZG93bk5vZGUuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCkge1xuICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA9IHBsYWluVGV4dE1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG5vZGVzID0gcGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgICBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgICAgbGFzdE5vZGVJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihsYXN0Tm9kZSksXG4gICAgICAgICAgZmlyc3ROb2RlSW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZmlyc3ROb2RlKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUluZGV4ID0gY2hpbGROb2Rlc0xlbmd0aCAtIDEsXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVJbmRleCA9IDAsXG4gICAgICAgICAgYXVnbWVudExlZnQgPSAoZmlyc3ROb2RlSW5kZXggIT09IGZpcnN0Q2hpbGROb2RlSW5kZXgpLFxuICAgICAgICAgIGF1Z21lbnRSaWdodCA9IChsYXN0Tm9kZUluZGV4ICE9PSBsYXN0Q2hpbGROb2RlSW5kZXgpOyAgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudEZyb21Ob2Rlcyhub2RlcywgYXVnbWVudExlZnQsIGF1Z21lbnRSaWdodCwgY29udGV4dCk7XG5cbiAgICBjbGVhcihwbGFpblRleHRNYXJrZG93bk5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbImRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMiLCJodG1sRnJvbUNoaWxkTm9kZXMiLCJwbGFpblRleHRGcm9tQ2hpbGROb2RlcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwiY2xlYXIiLCJjaGlsZE5vZGVzIiwiY29udGV4dCIsImh0bWxzIiwicGxhaW5UZXh0TWFya2Rvd25Ob2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSIsImlzUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicHVzaCIsImNvbnRlbnQiLCJjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMiLCJodG1sIiwiaW5kZW50IiwiYXNIVE1MIiwiam9pbiIsIkVNUFRZX1NUUklORyIsInBsYWluVGV4dHMiLCJwbGFpblRleHQiLCJnZXRDaGlsZE5vZGVzIiwiZG9tRWxlbWVudHMiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZXMiLCJsYXN0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlSW5kZXgiLCJpbmRleE9mIiwiZmlyc3ROb2RlSW5kZXgiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGFzdENoaWxkTm9kZUluZGV4IiwiZmlyc3RDaGlsZE5vZGVJbmRleCIsImF1Z21lbnRMZWZ0IiwiYXVnbWVudFJpZ2h0IiwiY29udGVudEZyb21Ob2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMkdnQkEseUJBQXlCO2VBQXpCQTs7SUFsR0FDLGtCQUFrQjtlQUFsQkE7O0lB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