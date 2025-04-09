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
    contentFromPlainTextHTMLNodes: function() {
        return contentFromPlainTextHTMLNodes;
    },
    domElementsFromPlainTextHTMLNode: function() {
        return domElementsFromPlainTextHTMLNode;
    },
    plainTextFromPlainTextHTMLNode: function() {
        return plainTextFromPlainTextHTMLNode;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var _content = require("../utilities/content");
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last;
function plainTextFromPlainTextHTMLNode(plainTextHTMLNode, context) {
    var plainTexts = [], plainTextHTMLNodes = [];
    plainTextHTMLNode.forEachChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, _$plainTextHTMLNode = nonTerminalNode, plainTextHTMLNodePlainTextHTMLNode = _$plainTextHTMLNode.isPlainTextHTMLNode();
            if (plainTextHTMLNodePlainTextHTMLNode) {
                var _$plainTextHTMLNode1 = _$plainTextHTMLNode1; ///
                plainTextHTMLNodes.push(_$plainTextHTMLNode1);
            } else {
                var content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, _$plainTextHTMLNode, context);
                if (content !== null) {
                    var plainText = content; ///
                    plainTexts.push(plainText);
                }
                {
                    var plainText1 = plainTextFromPlainTextHTMLNode(_$plainTextHTMLNode, context);
                    if (plainText1 !== _constants.EMPTY_STRING) {
                        plainTexts.push(plainText1);
                    }
                }
            }
        }
    });
    var content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, plainTextHTMLNode, context);
    if (content !== null) {
        var plainText = content; ///
        plainTexts.push(plainText);
    }
    var plainText1 = plainTexts.join(_constants.EMPTY_STRING);
    return plainText1;
}
function domElementsFromPlainTextHTMLNode(plainTextHTMLNode, context) {
    var domElements = [], plainTextHTMLNodes = [];
    plainTextHTMLNode.forEachChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, _$plainTextHTMLNode = nonTerminalNode, plainTextHTMLNodePlainTextHTMLNode = _$plainTextHTMLNode.isPlainTextHTMLNode();
            if (plainTextHTMLNodePlainTextHTMLNode) {
                var _$plainTextHTMLNode1 = _$plainTextHTMLNode1; ///
                plainTextHTMLNodes.push(_$plainTextHTMLNode1);
            } else {
                var content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, _$plainTextHTMLNode, context);
                if (content !== null) {
                    var textNode = document.createTextNode(content), domElement = textNode; ///
                    domElements.push(domElement);
                }
                var domElement1 = _$plainTextHTMLNode.createDOMElement(context);
                _$plainTextHTMLNode.setDOMElement(domElement1);
                domElements.push(domElement1);
            }
        }
    });
    var content = contentFromPlainTextHTMLNodes(plainTextHTMLNodes, plainTextHTMLNode, context);
    if (content !== null) {
        var textNode = document.createTextNode(content), domElement = textNode; ///
        domElements.push(domElement);
    }
    return domElements;
}
function contentFromPlainTextHTMLNodes(plainTextHTMLNodes, htmlNode, context) {
    var content = null;
    var plainTextHTMLNodesLength = plainTextHTMLNodes.length;
    if (plainTextHTMLNodesLength > 0) {
        var markdownNodes = markdownNodesFromPlainTextHTMLNodes(plainTextHTMLNodes), markdownNode = htmlNode.getMarkdownNode(), parentNode = markdownNode, childNodes = markdownNodes, endChildNode = last(childNodes), startChildNode = first(childNodes), startChildNodeIndex = parentNode.indexOfChildNode(startChildNode), endChildNodeIndex = parentNode.indexOfChildNode(endChildNode), multiplicity = parentNode.getMultiplicity(), firstChildNodeIndex = 0, lastChildNodeIndex = multiplicity - 1, augmentLeft = endChildNodeIndex !== firstChildNodeIndex, augmentRight = startChildNodeIndex !== lastChildNodeIndex, nodes = childNodes; ///
        content = (0, _content.contentFromNodes)(nodes, augmentLeft, augmentRight, context);
    }
    return content;
}
function markdownNodesFromPlainTextHTMLNodes(plainTextHTMLNodes) {
    var markdownNodes = plainTextHTMLNodes.map(function(plainTextHTMLNode) {
        var markdownNode = plainTextHTMLNode.getMarkdownNode();
        return markdownNode;
    });
    return markdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCB7IGZpcnN0LCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dEZyb21QbGFpblRleHRIVE1MTm9kZShwbGFpblRleHRIVE1MTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwbGFpblRleHRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dEhUTUxOb2RlcyA9IFtdO1xuXG4gIHBsYWluVGV4dEhUTUxOb2RlLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwbGFpblRleHRIVE1MTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBwbGFpblRleHRIVE1MTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gcGxhaW5UZXh0SFRNTE5vZGUuaXNQbGFpblRleHRIVE1MTm9kZSgpO1xuXG4gICAgICBpZiAocGxhaW5UZXh0SFRNTE5vZGVQbGFpblRleHRIVE1MTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRIVE1MTm9kZSA9IHBsYWluVGV4dEhUTUxOb2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRIVE1MTm9kZXMucHVzaChwbGFpblRleHRIVE1MTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRIVE1MTm9kZXMocGxhaW5UZXh0SFRNTE5vZGVzLCBwbGFpblRleHRIVE1MTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwbGFpblRleHQgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgICAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tUGxhaW5UZXh0SFRNTE5vZGUocGxhaW5UZXh0SFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHBsYWluVGV4dCAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICBwbGFpblRleHRzLnB1c2gocGxhaW5UZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dEhUTUxOb2RlcyhwbGFpblRleHRIVE1MTm9kZXMsIHBsYWluVGV4dEhUTUxOb2RlLCBjb250ZXh0KTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIHBsYWluVGV4dHMucHVzaChwbGFpblRleHQpO1xuICB9XG5cbiAgY29uc3QgcGxhaW5UZXh0ID0gcGxhaW5UZXh0cy5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBsYWluVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUVsZW1lbnRzRnJvbVBsYWluVGV4dEhUTUxOb2RlKHBsYWluVGV4dEhUTUxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzID0gW10sXG4gICAgICAgIHBsYWluVGV4dEhUTUxOb2RlcyA9IFtdO1xuXG4gIHBsYWluVGV4dEhUTUxOb2RlLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwbGFpblRleHRIVE1MTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBwbGFpblRleHRIVE1MTm9kZVBsYWluVGV4dEhUTUxOb2RlID0gcGxhaW5UZXh0SFRNTE5vZGUuaXNQbGFpblRleHRIVE1MTm9kZSgpO1xuXG4gICAgICBpZiAocGxhaW5UZXh0SFRNTE5vZGVQbGFpblRleHRIVE1MTm9kZSkge1xuICAgICAgICBjb25zdCBwbGFpblRleHRIVE1MTm9kZSA9IHBsYWluVGV4dEhUTUxOb2RlOyAvLy9cblxuICAgICAgICBwbGFpblRleHRIVE1MTm9kZXMucHVzaChwbGFpblRleHRIVE1MTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21QbGFpblRleHRIVE1MTm9kZXMocGxhaW5UZXh0SFRNTE5vZGVzLCBwbGFpblRleHRIVE1MTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBwbGFpblRleHRIVE1MTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIHBsYWluVGV4dEhUTUxOb2RlLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbVBsYWluVGV4dEhUTUxOb2RlcyhwbGFpblRleHRIVE1MTm9kZXMsIHBsYWluVGV4dEhUTUxOb2RlLCBjb250ZXh0KTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudEZyb21QbGFpblRleHRIVE1MTm9kZXMocGxhaW5UZXh0SFRNTE5vZGVzLCBodG1sTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgY29uc3QgcGxhaW5UZXh0SFRNTE5vZGVzTGVuZ3RoID0gcGxhaW5UZXh0SFRNTE5vZGVzLmxlbmd0aDtcblxuICBpZiAocGxhaW5UZXh0SFRNTE5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZXMgPSBtYXJrZG93bk5vZGVzRnJvbVBsYWluVGV4dEhUTUxOb2RlcyhwbGFpblRleHRIVE1MTm9kZXMpLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IGh0bWxOb2RlLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHBhcmVudE5vZGUgPSBtYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgZW5kQ2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBzdGFydENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHN0YXJ0Q2hpbGROb2RlSW5kZXggPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoc3RhcnRDaGlsZE5vZGUpLFxuICAgICAgICAgIGVuZENoaWxkTm9kZUluZGV4ID0gcGFyZW50Tm9kZS5pbmRleE9mQ2hpbGROb2RlKGVuZENoaWxkTm9kZSksXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gcGFyZW50Tm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZUluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlSW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxLFxuICAgICAgICAgIGF1Z21lbnRMZWZ0ID0gKGVuZENoaWxkTm9kZUluZGV4ICE9PSBmaXJzdENoaWxkTm9kZUluZGV4KSxcbiAgICAgICAgICBhdWdtZW50UmlnaHQgPSAoc3RhcnRDaGlsZE5vZGVJbmRleCAhPT0gbGFzdENoaWxkTm9kZUluZGV4KSwgIC8vL1xuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICBjb250ZW50ID0gY29udGVudEZyb21Ob2Rlcyhub2RlcywgYXVnbWVudExlZnQsIGF1Z21lbnRSaWdodCwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gbWFya2Rvd25Ob2Rlc0Zyb21QbGFpblRleHRIVE1MTm9kZXMocGxhaW5UZXh0SFRNTE5vZGVzKSB7XG4gIGNvbnN0IG1hcmtkb3duTm9kZXMgPSBwbGFpblRleHRIVE1MTm9kZXMubWFwKChwbGFpblRleHRIVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHBsYWluVGV4dEhUTUxOb2RlLmdldE1hcmtkb3duTm9kZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiY29udGVudEZyb21QbGFpblRleHRIVE1MTm9kZXMiLCJkb21FbGVtZW50c0Zyb21QbGFpblRleHRIVE1MTm9kZSIsInBsYWluVGV4dEZyb21QbGFpblRleHRIVE1MTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwicGxhaW5UZXh0SFRNTE5vZGUiLCJjb250ZXh0IiwicGxhaW5UZXh0cyIsInBsYWluVGV4dEhUTUxOb2RlcyIsImZvckVhY2hDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInBsYWluVGV4dEhUTUxOb2RlUGxhaW5UZXh0SFRNTE5vZGUiLCJpc1BsYWluVGV4dEhUTUxOb2RlIiwicHVzaCIsImNvbnRlbnQiLCJwbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJqb2luIiwiZG9tRWxlbWVudHMiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJodG1sTm9kZSIsInBsYWluVGV4dEhUTUxOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm1hcmtkb3duTm9kZXMiLCJtYXJrZG93bk5vZGVzRnJvbVBsYWluVGV4dEhUTUxOb2RlcyIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZW5kQ2hpbGROb2RlIiwic3RhcnRDaGlsZE5vZGUiLCJzdGFydENoaWxkTm9kZUluZGV4IiwiaW5kZXhPZkNoaWxkTm9kZSIsImVuZENoaWxkTm9kZUluZGV4IiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwiZmlyc3RDaGlsZE5vZGVJbmRleCIsImxhc3RDaGlsZE5vZGVJbmRleCIsImF1Z21lbnRMZWZ0IiwiYXVnbWVudFJpZ2h0Iiwibm9kZXMiLCJjb250ZW50RnJvbU5vZGVzIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF5R2dCQSw2QkFBNkI7ZUFBN0JBOztJQS9DQUMsZ0NBQWdDO2VBQWhDQTs7SUFqREFDLDhCQUE4QjtlQUE5QkE7Ozt5QkFQZTt5QkFFRjt1QkFDSTtBQUVqQyxJQUFRQyxRQUFnQkMseUJBQWMsQ0FBOUJELE9BQU9FLE9BQVNELHlCQUFjLENBQXZCQztBQUVSLFNBQVNILCtCQUErQkksaUJBQWlCLEVBQUVDLE9BQU87SUFDdkUsSUFBTUMsYUFBYSxFQUFFLEVBQ2ZDLHFCQUFxQixFQUFFO0lBRTdCSCxrQkFBa0JJLGdCQUFnQixDQUFDLFNBQUNDO1FBQ2xDLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCTCxzQkFBb0JRLGlCQUNwQkMscUNBQXFDVCxvQkFBa0JVLG1CQUFtQjtZQUVoRixJQUFJRCxvQ0FBb0M7Z0JBQ3RDLElBQU1ULHVCQUFvQkEsc0JBQW1CLEdBQUc7Z0JBRWhERyxtQkFBbUJRLElBQUksQ0FBQ1g7WUFDMUIsT0FBTztnQkFDTCxJQUFNWSxVQUFVbEIsOEJBQThCUyxvQkFBb0JILHFCQUFtQkM7Z0JBRXJGLElBQUlXLFlBQVksTUFBTTtvQkFDcEIsSUFBTUMsWUFBWUQsU0FBVSxHQUFHO29CQUUvQlYsV0FBV1MsSUFBSSxDQUFDRTtnQkFDbEI7Z0JBRUE7b0JBQ0UsSUFBTUEsYUFBWWpCLCtCQUErQkkscUJBQW1CQztvQkFFcEUsSUFBSVksZUFBY0MsdUJBQVksRUFBRTt3QkFDOUJaLFdBQVdTLElBQUksQ0FBQ0U7b0JBQ2xCO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBTUQsVUFBVWxCLDhCQUE4QlMsb0JBQW9CSCxtQkFBbUJDO0lBRXJGLElBQUlXLFlBQVksTUFBTTtR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