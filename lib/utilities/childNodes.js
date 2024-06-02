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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQbGFpblRleHRNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCwgcHVzaCwgY2xlYXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHRtbHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSAobWFya2Rvd25Ob2RlIGluc3RhbmNlb2YgUGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgICBodG1sID0gbWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gIH1cblxuICBjb25zdCBodG1sID0gaHRtbHMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwbGFpblRleHRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gKG1hcmtkb3duTm9kZSBpbnN0YW5jZW9mIFBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwbGFpblRleHQgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgICAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBtYXJrZG93bk5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocGxhaW5UZXh0ICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIHBsYWluVGV4dHMucHVzaChwbGFpblRleHQpO1xuICB9XG5cbiAgY29uc3QgcGxhaW5UZXh0ID0gcGxhaW5UZXh0cy5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBkb21FbGVtZW50cyA9IFtdLFxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzID0gW107XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSA9IChtYXJrZG93bk5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAobWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlcy5wdXNoKHBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBtYXJrZG93bk5vZGVET01FbGVtZW50cyA9IG1hcmtkb3duTm9kZS5nZXRET01FbGVtZW50cygpO1xuXG4gICAgICAgIHB1c2goZG9tRWxlbWVudHMsIG1hcmtkb3duTm9kZURPTUVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50cztcbn1cblxuZnVuY3Rpb24gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IGNvbnRlbnQgPSBudWxsO1xuXG4gIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPSBwbGFpblRleHRNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICBpZiAocGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBub2RlcyA9IHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICAgIGxhc3ROb2RlID0gbGFzdChub2RlcyksXG4gICAgICAgICAgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpLFxuICAgICAgICAgIGxhc3ROb2RlSW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YobGFzdE5vZGUpLFxuICAgICAgICAgIGZpcnN0Tm9kZUluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0Tm9kZSksXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVJbmRleCA9IGNoaWxkTm9kZXNMZW5ndGggLSAxLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlSW5kZXggPSAwLFxuICAgICAgICAgIGF1Z21lbnRMZWZ0ID0gKGZpcnN0Tm9kZUluZGV4ICE9PSBmaXJzdENoaWxkTm9kZUluZGV4KSxcbiAgICAgICAgICBhdWdtZW50UmlnaHQgPSAobGFzdE5vZGVJbmRleCAhPT0gbGFzdENoaWxkTm9kZUluZGV4KTsgIC8vL1xuXG4gICAgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZXMobm9kZXMsIGF1Z21lbnRMZWZ0LCBhdWdtZW50UmlnaHQsIGNvbnRleHQpO1xuXG4gICAgY2xlYXIocGxhaW5UZXh0TWFya2Rvd25Ob2Rlcyk7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIiwiaHRtbEZyb21DaGlsZE5vZGVzIiwicGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsInB1c2giLCJjbGVhciIsImNoaWxkTm9kZXMiLCJjb250ZXh0IiwiaHRtbHMiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwiUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwiY29udGVudCIsImNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyIsImh0bWwiLCJpbmRlbnQiLCJhc0hUTUwiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwicGxhaW5UZXh0cyIsInBsYWluVGV4dCIsImdldENoaWxkTm9kZXMiLCJkb21FbGVtZW50cyIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwibWFya2Rvd25Ob2RlRE9NRWxlbWVudHMiLCJnZXRET01FbGVtZW50cyIsInBsYWluVGV4dE1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlcyIsImxhc3ROb2RlIiwiZmlyc3ROb2RlIiwibGFzdE5vZGVJbmRleCIsImluZGV4T2YiLCJmaXJzdE5vZGVJbmRleCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsYXN0Q2hpbGROb2RlSW5kZXgiLCJmaXJzdENoaWxkTm9kZUluZGV4IiwiYXVnbWVudExlZnQiLCJhdWdtZW50UmlnaHQiLCJjb250ZW50RnJvbU5vZGVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMkdnQkEseUJBQXlCO2VBQXpCQTs7SUFoR0FDLGtCQUFrQjtlQUFsQkE7O0lBZ0RBQyx1QkFBdUI7ZUFBdkJBOzs7eUJBekRlO2dFQUVHO3lCQUVMO3VCQUNJOzs7Ozs7Ozs7Ozs7O0FBRWpDLElBQVFDLFFBQTZCQyx5QkFBYyxDQUEzQ0QsT0FBT0UsT0FBc0JELHlCQUFjLENBQXBDQyxNQUFNQyxPQUFnQkYseUJBQWMsQ0FBOUJFLE1BQU1DLFFBQVVILHlCQUFjLENBQXhCRztBQUVwQixTQUFTTixtQkFBbUJPLFVBQVUsRUFBRUMsT0FBTztJQUNwRCxJQUFNQyxRQUFRLEVBQUUsRUFDVkMseUJBQXlCLEVBQUU7SUFFakNILFdBQVdJLE9BQU8sQ0FBQyxTQUFDQztRQUNsQixJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtRQUU1RCxJQUFJRCwwQkFBMEI7WUFDNUIsSUFBTUUsa0JBQWtCSCxXQUNsQkksZUFBZUQsaUJBQ2ZFLG9DQUFxQ0QsQUFBWSxZQUFaQSxjQUF3QkUsa0JBQXFCO1lBRXhGLElBQUlELG1DQUFtQztnQkFDckMsSUFBTUUsd0JBQXdCSCxjQUFjLEdBQUc7Z0JBRS9DTix1QkFBdUJMLElBQUksQ0FBQ2M7WUFDOUIsT0FBTztnQkFDTCxJQUFNQyxVQUFVQyxrQ0FBa0NYLHdCQUF3QkgsWUFBWUM7Z0JBRXRGLElBQUlZLFlBQVksTUFBTTtvQkFDcEIsSUFBTUUsT0FBT0YsU0FBUyxHQUFHO29CQUV6QlgsTUFBTUosSUFBSSxDQUFDaUI7Z0JBQ2I7Z0JBRUEsSUFBTUMsU0FBUyxNQUNURCxR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