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
    domElementsFromMarkdownNode: function() {
        return domElementsFromMarkdownNode;
    },
    htmlFromMarkdownNode: function() {
        return htmlFromMarkdownNode;
    },
    plainTextFromMarkdownNode: function() {
        return plainTextFromMarkdownNode;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var _content = require("../utilities/content");
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, clear = _necessary.arrayUtilities.clear;
function htmlFromMarkdownNode(markdownNode, context) {
    var htmls = [], plainTextMarkdownNodes = [];
    markdownNode.forEachChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, _$markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _$markdownNode.isPlainTextMarkdownNode();
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = _$markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, _$markdownNode, context);
                if (content !== null) {
                    var html = content; ///
                    htmls.push(html);
                }
                var indent = null, html1 = _$markdownNode.asHTML(indent, context);
                if (html1 !== null) {
                    htmls.push(html1);
                }
            }
        }
    });
    var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context);
    if (content !== null) {
        var html = content; ///
        htmls.push(html);
    }
    var html1 = htmls.join(_constants.EMPTY_STRING);
    return html1;
}
function plainTextFromMarkdownNode(markdownNode, context) {
    var plainTexts = [], plainTextMarkdownNodes = [];
    markdownNode.forEachChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, _$markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _$markdownNode.isPlainTextMarkdownNode();
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = _$markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, _$markdownNode, context);
                if (content !== null) {
                    var plainText = content; ///
                    plainTexts.push(plainText);
                }
                {
                    var plainText1 = plainTextFromMarkdownNode(_$markdownNode, context);
                    if (plainText1 !== _constants.EMPTY_STRING) {
                        plainTexts.push(plainText1);
                    }
                }
            }
        }
    });
    var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context);
    if (content !== null) {
        var plainText = content; ///
        plainTexts.push(plainText);
    }
    var plainText1 = plainTexts.join(_constants.EMPTY_STRING);
    return plainText1;
}
function domElementsFromMarkdownNode(markdownNode, context) {
    var domElements = [], plainTextMarkdownNodes = [];
    markdownNode.forEachChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, _$markdownNode = nonTerminalNode, markdownNodePlainTextMarkdownNode = _$markdownNode.isPlainTextMarkdownNode();
            if (markdownNodePlainTextMarkdownNode) {
                var plainTextMarkdownNode = _$markdownNode; ///
                plainTextMarkdownNodes.push(plainTextMarkdownNode);
            } else {
                var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, _$markdownNode, context);
                if (content !== null) {
                    var textNode = document.createTextNode(content), domElement = textNode; ///
                    domElements.push(domElement);
                }
                var domElement1 = _$markdownNode.createDOMElement(context);
                _$markdownNode.setDOMElement(domElement1);
                domElements.push(domElement1);
            }
        }
    });
    var content = contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context);
    if (content !== null) {
        var textNode = document.createTextNode(content), domElement = textNode; ///
        domElements.push(domElement);
    }
    return domElements;
}
function contentFromPlainTextMarkdownNodes(plainTextMarkdownNodes, markdownNode, context) {
    var content = null;
    var plainTextMarkdownNodesLength = plainTextMarkdownNodes.length;
    if (plainTextMarkdownNodesLength > 0) {
        var childNodes = plainTextMarkdownNodes, startChildNode = first(childNodes), endChildNode = last(childNodes), startChildNodeIndex = markdownNode.indexOfChildNode(startChildNode), endChildNodeIndex = markdownNode.indexOfChildNode(endChildNode), multiplicity = markdownNode.getMultiplicity(), lastChildNodeIndex = multiplicity - 1, firstChildNodeIndex = 0, augmentLeft = endChildNodeIndex !== firstChildNodeIndex, augmentRight = startChildNodeIndex !== lastChildNodeIndex, nodes = childNodes; ///
        content = (0, _content.contentFromNodes)(nodes, augmentLeft, augmentRight, context);
        clear(plainTextMarkdownNodes);
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCwgY2xlYXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh0bWxzID0gW10sXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMgPSBbXTtcblxuICBtYXJrZG93bk5vZGUuZm9yRWFjaENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGUuaXNQbGFpblRleHRNYXJrZG93bk5vZGUoKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBsYWluVGV4dE1hcmtkb3duTm9kZXMucHVzaChwbGFpblRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBtYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgaHRtbCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGVudCA9IG51bGwsXG4gICAgICAgICAgICAgIGh0bWwgPSBtYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgICAgICBodG1scy5wdXNoKGh0bWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIG1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICBodG1scy5wdXNoKGh0bWwpO1xuICB9XG5cbiAgY29uc3QgaHRtbCA9IGh0bWxzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gaHRtbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dEZyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBsYWluVGV4dHMgPSBbXSxcbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIG1hcmtkb3duTm9kZS5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIG1hcmtkb3duTm9kZVBsYWluVGV4dE1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZS5pc1BsYWluVGV4dE1hcmtkb3duTm9kZSgpO1xuXG4gICAgICBpZiAobWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlcy5wdXNoKHBsYWluVGV4dE1hcmtkb3duTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIG1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwbGFpblRleHQgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgICAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tTWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocGxhaW5UZXh0ICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgIHBsYWluVGV4dHMucHVzaChwbGFpblRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tUGxhaW5UZXh0TWFya2Rvd25Ob2RlcyhwbGFpblRleHRNYXJrZG93bk5vZGVzLCBtYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gY29udGVudDsgIC8vL1xuXG4gICAgcGxhaW5UZXh0cy5wdXNoKHBsYWluVGV4dCk7XG4gIH1cblxuICBjb25zdCBwbGFpblRleHQgPSBwbGFpblRleHRzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGxhaW5UZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tRWxlbWVudHNGcm9tTWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkb21FbGVtZW50cyA9IFtdLFxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzID0gW107XG5cbiAgbWFya2Rvd25Ob2RlLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlLmlzUGxhaW5UZXh0TWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRNYXJrZG93bk5vZGVzLnB1c2gocGxhaW5UZXh0TWFya2Rvd25Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dE1hcmtkb3duTm9kZXMocGxhaW5UZXh0TWFya2Rvd25Ob2RlcywgbWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IG1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIG1hcmtkb3duTm9kZS5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIG1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50cztcbn1cblxuZnVuY3Rpb24gY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzKHBsYWluVGV4dE1hcmtkb3duTm9kZXMsIG1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgY29uc3QgcGxhaW5UZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA9IHBsYWluVGV4dE1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBwbGFpblRleHRNYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgICBzdGFydENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGVuZENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgc3RhcnRDaGlsZE5vZGVJbmRleCA9IG1hcmtkb3duTm9kZS5pbmRleE9mQ2hpbGROb2RlKHN0YXJ0Q2hpbGROb2RlKSxcbiAgICAgICAgICBlbmRDaGlsZE5vZGVJbmRleCA9IG1hcmtkb3duTm9kZS5pbmRleE9mQ2hpbGROb2RlKGVuZENoaWxkTm9kZSksXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gbWFya2Rvd25Ob2RlLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVJbmRleCA9IG11bHRpcGxpY2l0eSAtIDEsXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVJbmRleCA9IDAsXG4gICAgICAgICAgYXVnbWVudExlZnQgPSAoZW5kQ2hpbGROb2RlSW5kZXggIT09IGZpcnN0Q2hpbGROb2RlSW5kZXgpLFxuICAgICAgICAgIGF1Z21lbnRSaWdodCA9IChzdGFydENoaWxkTm9kZUluZGV4ICE9PSBsYXN0Q2hpbGROb2RlSW5kZXgpLCAgLy8vXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVzKG5vZGVzLCBhdWdtZW50TGVmdCwgYXVnbWVudFJpZ2h0LCBjb250ZXh0KTtcblxuICAgIGNsZWFyKHBsYWluVGV4dE1hcmtkb3duTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsiZG9tRWxlbWVudHNGcm9tTWFya2Rvd25Ob2RlIiwiaHRtbEZyb21NYXJrZG93bk5vZGUiLCJwbGFpblRleHRGcm9tTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJjbGVhciIsIm1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJodG1scyIsInBsYWluVGV4dE1hcmtkb3duTm9kZXMiLCJmb3JFYWNoQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJtYXJrZG93bk5vZGVQbGFpblRleHRNYXJrZG93bk5vZGUiLCJpc1BsYWluVGV4dE1hcmtkb3duTm9kZSIsInBsYWluVGV4dE1hcmtkb3duTm9kZSIsInB1c2giLCJjb250ZW50IiwiY29udGVudEZyb21QbGFpblRleHRNYXJrZG93bk5vZGVzIiwiaHRtbCIsImluZGVudCIsImFzSFRNTCIsImpvaW4iLCJFTVBUWV9TVFJJTkciLCJwbGFpblRleHRzIiwicGxhaW5UZXh0IiwiZG9tRWxlbWVudHMiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJwbGFpblRleHRNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlcyIsInN0YXJ0Q2hpbGROb2RlIiwiZW5kQ2hpbGROb2RlIiwic3RhcnRDaGlsZE5vZGVJbmRleCIsImluZGV4T2ZDaGlsZE5vZGUiLCJlbmRDaGlsZE5vZGVJbmRleCIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImxhc3RDaGlsZE5vZGVJbmRleCIsImZpcnN0Q2hpbGROb2RlSW5kZXgiLCJhdWdtZW50TGVmdCIsImF1Z21lbnRSaWdodCIsIm5vZGVzIiwiY29udGVudEZyb21Ob2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMEdnQkEsMkJBQTJCO2VBQTNCQTs7SUFqR0FDLG9CQUFvQjtlQUFwQkE7O0lBZ0RBQyx5QkFBeUI7ZUFBekJBOzs7eUJBdkRlO3lCQUVGO3VCQUNJO0FBRWpDLElBQVFDLFFBQXVCQyx5QkFBYyxDQUFyQ0QsT0FBT0UsT0FBZ0JELHlCQUFjLENBQTlCQyxNQUFNQyxRQUFVRix5QkFBYyxDQUF4QkU7QUFFZCxTQUFTTCxxQkFBcUJNLFlBQVksRUFBRUMsT0FBTztJQUN4RCxJQUFNQyxRQUFRLEVBQUUsRUFDVkMseUJBQXlCLEVBQUU7SUFFakNILGFBQWFJLGdCQUFnQixDQUFDLFNBQUNDO1FBQzdCLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCTCxpQkFBZVEsaUJBQ2ZDLG9DQUFvQ1QsZUFBYVUsdUJBQXVCO1lBRTlFLElBQUlELG1DQUFtQztnQkFDckMsSUFBTUUsd0JBQXdCWCxnQkFBYyxHQUFHO2dCQUUvQ0csdUJBQXVCUyxJQUFJLENBQUNEO1lBQzlCLE9BQU87Z0JBQ0wsSUFBTUUsVUFBVUMsa0NBQWtDWCx3QkFBd0JILGdCQUFjQztnQkFFeEYsSUFBSVksWUFBWSxNQUFNO29CQUNwQixJQUFNRSxPQUFPRixTQUFTLEdBQUc7b0JBRXpCWCxNQUFNVSxJQUFJLENBQUNHO2dCQUNiO2dCQUVBLElBQU1DLFNBQVMsTUFDVEQsUUFBT2YsZUFBYWlCLE1BQU0sQ0FBQ0QsUUFBUWY7Z0JBRXpDLElBQUljLFVBQVMsTUFBTTtvQkFDakJiLE1BQU1VLElBQUksQ0FBQ0c7Z0JBQ2I7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFNRixVQUFVQyxrQ0FBa0NYLHdCQUF3QkgsY0FBY0M7SUFFeEYsSUFBSVksWUFBWSxNQUFNO1FBQ3BCLElBQU1F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