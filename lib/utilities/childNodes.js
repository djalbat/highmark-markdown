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
                markdownNode.createDOMElement(context);
                var domElement1 = markdownNode.getDOMElement();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCwgY2xlYXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHRtbHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGUuaXNQbGFpblRleHRNYXJrZG93bk5vZGUoKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgICBodG1sID0gbWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gIH1cblxuICBjb25zdCBodG1sID0gaHRtbHMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwbGFpblRleHRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlLmlzUGxhaW5UZXh0TWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwbGFpblRleHQgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgICAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwbGFpblRleHQgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gY29udGVudDsgIC8vL1xuXG4gICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gIH1cblxuICBjb25zdCBwbGFpblRleHQgPSBwbGFpblRleHRzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGxhaW5UZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlLmlzUGxhaW5UZXh0TWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBtYXJrZG93bk5vZGUuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZG9tRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBjb250ZW50ID0gbnVsbDtcblxuICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID0gcGxhaW5UZXh0TWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBwbGFpblRleHRNYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgICBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICAgIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKSxcbiAgICAgICAgICBsYXN0Tm9kZUluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGxhc3ROb2RlKSxcbiAgICAgICAgICBmaXJzdE5vZGVJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdE5vZGUpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlSW5kZXggPSBjaGlsZE5vZGVzTGVuZ3RoIC0gMSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZUluZGV4ID0gMCxcbiAgICAgICAgICBhdWdtZW50TGVmdCA9IChmaXJzdE5vZGVJbmRleCAhPT0gZmlyc3RDaGlsZE5vZGVJbmRleCksXG4gICAgICAgICAgYXVnbWVudFJpZ2h0ID0gKGxhc3ROb2RlSW5kZXggIT09IGxhc3RDaGlsZE5vZGVJbmRleCk7ICAvLy9cblxuICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVzKG5vZGVzLCBhdWdtZW50TGVmdCwgYXVnbWVudFJpZ2h0LCBjb250ZXh0KTtcblxuICAgIGNsZWFyKHBsYWluVGV4dE1hcmtkb3duTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsiZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyIsImh0bWxGcm9tQ2hpbGROb2RlcyIsInBsYWluVGV4dEZyb21DaGlsZE5vZGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJjb250ZXh0IiwiaHRtbHMiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwiaXNQbGFpblRleHRNYXJrZG93bk5vZGUiLCJwbGFpblRleHRNYXJrZG93bk5vZGUiLCJwdXNoIiwiY29udGVudCIsImNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyIsImh0bWwiLCJpbmRlbnQiLCJhc0hUTUwiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwicGxhaW5UZXh0cyIsInBsYWluVGV4dCIsImdldENoaWxkTm9kZXMiLCJkb21FbGVtZW50cyIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlcyIsImxhc3ROb2RlIiwiZmlyc3ROb2RlIiwibGFzdE5vZGVJbmRleCIsImluZGV4T2YiLCJmaXJzdE5vZGVJbmRleCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsYXN0Q2hpbGROb2RlSW5kZXgiLCJmaXJzdENoaWxkTm9kZUluZGV4IiwiYXVnbWVudExlZnQiLCJhdWdtZW50UmlnaHQiLCJjb250ZW50RnJvbU5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEyR2dCQSx5QkFBeUI7ZUFBekJBOztJQWxHQUMsa0JBQWtCO2VBQWxCQTs7SUFnREFDLHVCQUF1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