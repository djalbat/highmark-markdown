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
    default: function() {
        return _default;
    },
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
                var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, _$childNodes, context);
                if (content !== null) {
                    var plainText = content; ///
                    plainTexts.push(plainText);
                }
                var _$childNodes = markdownNode.getChildNodes(), plainText1 = plainTextFromChildNodes(_$childNodes, context);
                if (plainText1 !== _constants.EMPTY_STRING) {
                    plainTexts.push(plainText1);
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
var _default = {
    htmlFromChildNodes: htmlFromChildNodes,
    plainTextFromChildNodes: plainTextFromChildNodes,
    domElementsFromChildNodes: domElementsFromChildNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQbGFpblRleHRNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZXMgfSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QsIHB1c2gsIGNsZWFyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh0bWxzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gKG1hcmtkb3duTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICAgICAgICBodG1scy5wdXNoKGh0bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICAgICAgaHRtbCA9IG1hcmtkb3duTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICBodG1scy5wdXNoKGh0bWwpO1xuICB9XG5cbiAgY29uc3QgaHRtbCA9IGh0bWxzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gaHRtbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGxhaW5UZXh0cyA9IFtdLFxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzID0gW107XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSA9IChtYXJrZG93bk5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAobWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlcy5wdXNoKHBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcGxhaW5UZXh0ID0gY29udGVudDsgIC8vL1xuXG4gICAgICAgICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHBsYWluVGV4dCAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBjb250ZW50OyAgLy8vXG5cbiAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgfVxuXG4gIGNvbnN0IHBsYWluVGV4dCA9IHBsYWluVGV4dHMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwbGFpblRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZG9tRWxlbWVudHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAobWFya2Rvd25Ob2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlRE9NRWxlbWVudHMgPSBtYXJrZG93bk5vZGUuZ2V0RE9NRWxlbWVudHMoKTtcblxuICAgICAgICBwdXNoKGRvbUVsZW1lbnRzLCBtYXJrZG93bk5vZGVET01FbGVtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZG9tRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBjb250ZW50ID0gbnVsbDtcblxuICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID0gcGxhaW5UZXh0TWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBwbGFpblRleHRNYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgICBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICAgIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKSxcbiAgICAgICAgICBsYXN0Tm9kZUluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGxhc3ROb2RlKSxcbiAgICAgICAgICBmaXJzdE5vZGVJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdE5vZGUpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlSW5kZXggPSBjaGlsZE5vZGVzTGVuZ3RoIC0gMSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZUluZGV4ID0gMCxcbiAgICAgICAgICBhdWdtZW50TGVmdCA9IChmaXJzdE5vZGVJbmRleCAhPT0gZmlyc3RDaGlsZE5vZGVJbmRleCksXG4gICAgICAgICAgYXVnbWVudFJpZ2h0ID0gKGxhc3ROb2RlSW5kZXggIT09IGxhc3RDaGlsZE5vZGVJbmRleCk7ICAvLy9cblxuICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVzKG5vZGVzLCBhdWdtZW50TGVmdCwgYXVnbWVudFJpZ2h0LCBjb250ZXh0KTtcblxuICAgIGNsZWFyKHBsYWluVGV4dE1hcmtkb3duTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaHRtbEZyb21DaGlsZE5vZGVzLFxuICBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyxcbiAgZG9tRWxlbWVudHNGcm9tQ2hpbGROb2Rlc1xufTtcbiJdLCJuYW1lcyI6WyJkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIiwiaHRtbEZyb21DaGlsZE5vZGVzIiwicGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsInB1c2giLCJjbGVhciIsImNoaWxkTm9kZXMiLCJjb250ZXh0IiwiaHRtbHMiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwiUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwiY29udGVudCIsImNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyIsImh0bWwiLCJpbmRlbnQiLCJhc0hUTUwiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwicGxhaW5UZXh0cyIsInBsYWluVGV4dCIsImdldENoaWxkTm9kZXMiLCJkb21FbGVtZW50cyIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwibWFya2Rvd25Ob2RlRE9NRWxlbWVudHMiLCJnZXRET01FbGVtZW50cyIsInBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlcyIsImxhc3ROb2RlIiwiZmlyc3ROb2RlIiwibGFzdE5vZGVJbmRleCIsImluZGV4T2YiLCJmaXJzdE5vZGVJbmRleCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsYXN0Q2hpbGROb2RlSW5kZXgiLCJmaXJzdENoaWxkTm9kZUluZGV4IiwiYXVnbWVudExlZnQiLCJhdWdtZW50UmlnaHQiLCJjb250ZW50RnJvbU5vZGVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFtTEEsT0FJRTtlQUpGOztJQXhFZ0JBLHlCQUF5QjtlQUF6QkE7O0lBaEdBQyxrQkFBa0I7ZUFBbEJBOztJQWdEQUMsdUJBQXVCO2VBQXZCQTs7O3lCQXpEZTtnRUFFRzt5QkFFTDt1QkFDSTs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFRQyxRQUE2QkMseUJBQWMsQ0FBM0NELE9BQU9FLE9BQXNCRCx5QkFBYyxDQUFwQ0MsTUFBTUMsT0FBZ0JGLHlCQUFjLENBQTlCRSxNQUFNQyxRQUFVSCx5QkFBYyxDQUF4Qkc7QUFFcEIsU0FBU04sbUJBQW1CTyxVQUFVLEVBQUVDLE9BQU87SUFDcEQsSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLHlCQUF5QixFQUFFO0lBRWpDSCxXQUFXSSxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1FLGtCQUFrQkgsV0FDbEJJLGVBQWVELGlCQUNmRSxvQ0FBcUNELEFBQVksWUFBWkEsY0FBd0JFLGtCQUFxQjtZQUV4RixJQUFJRCxtQ0FBbUM7Z0JBQ3JDLElBQU1FLHdCQUF3QkgsY0FBYyxHQUFHO2dCQUUvQ04sdUJBQXVCTCxJQUFJLENBQUNjO1lBQzlCLE9BQU87Z0JBQ0wsSUFBTUMsVUFBVUMsa0NBQWtDWCx3QkFB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