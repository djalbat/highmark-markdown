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
    }
});
var _necessary = require("necessary");
var _text = /*#__PURE__*/ _interop_require_default(require("../node/markdown/text"));
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
function domElementsFromChildNodes(childNodes, context) {
    var domElements = [], textMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var childNodeTextMarkdownNode = _instanceof(childNode, _text.default);
            if (childNodeTextMarkdownNode) {
                var textMarkdownNode = childNode; ///
                textMarkdownNodes.push(textMarkdownNode);
            } else {
                var textDOMElement = textDOMElementFromTextMarkdownNodes(textMarkdownNodes, context);
                if (textDOMElement !== null) {
                    var domElement = textDOMElement; ///
                    domElements.push(domElement);
                }
                var domElement1 = childNode.createDOMElement(context);
                if (domElement1 !== null) {
                    domElements.push(domElement1);
                }
            }
        }
    });
    var textDOMElement = textDOMElementFromTextMarkdownNodes(textMarkdownNodes, context);
    if (textDOMElement !== null) {
        var domElement = textDOMElement; ///
        domElements.push(domElement);
    }
    return domElements;
}
function htmlFromChildNodes(childNodes, context) {
    var html;
    var htmls = [], textMarkdownNodes = [];
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var childNodeTextMarkdownNode = _instanceof(childNode, _text.default);
            if (childNodeTextMarkdownNode) {
                var textMarkdownNode = childNode; ///
                textMarkdownNodes.push(textMarkdownNode);
            } else {
                html = htmlFromTextMarkdownNodes(textMarkdownNodes, context);
                if (html !== null) {
                    htmls.push(html);
                }
                var indent = null;
                html = childNode.asHTML(indent, context);
                if (html !== null) {
                    htmls.push(html);
                }
            }
        }
    });
    html = htmlFromTextMarkdownNodes(textMarkdownNodes, context);
    if (html !== null) {
        htmls.push(htmls);
    }
    html = htmls.join(_constants.EMPTY_STRING);
    return html;
}
function textDOMElementFromTextMarkdownNodes(textMarkdownNodes, context) {
    var textDOMElement = null;
    var textMarkdownNodesLength = textMarkdownNodes.length;
    if (textMarkdownNodesLength > 0) {
        var markdownNodes = textMarkdownNodes, content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context);
        textDOMElement = document.createTextNode(content);
        clear(textMarkdownNodes);
    }
    return textDOMElement;
}
function htmlFromTextMarkdownNodes(textMarkdownNodes, context) {
    var html = null;
    var textMarkdownNodesLength = textMarkdownNodes.length;
    if (textMarkdownNodesLength > 0) {
        var markdownNodes = textMarkdownNodes, content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context);
        html = content;
        clear(textMarkdownNodes);
    }
    return html;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUZXh0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL3RleHRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG5jb25zdCB7IGNsZWFyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBkb21FbGVtZW50cyA9IFtdLFxuICAgICAgICB0ZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXh0TWFya2Rvd25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXh0TWFya2Rvd25Ob2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICB0ZXh0TWFya2Rvd25Ob2Rlcy5wdXNoKHRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGV4dERPTUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudEZyb21UZXh0TWFya2Rvd25Ob2Rlcyh0ZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dClcblxuICAgICAgICBpZiAodGV4dERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gdGV4dERPTUVsZW1lbnQ7ICAvLy9cblxuICAgICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gY2hpbGROb2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB0ZXh0RE9NRWxlbWVudCA9IHRleHRET01FbGVtZW50RnJvbVRleHRNYXJrZG93bk5vZGVzKHRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0KVxuXG4gIGlmICh0ZXh0RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBodG1sO1xuXG4gIGNvbnN0IGh0bWxzID0gW10sXG4gICAgICAgIHRleHRNYXJrZG93bk5vZGVzID0gW107XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVRleHRNYXJrZG93bk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgVGV4dE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHRleHRNYXJrZG93bk5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHRleHRNYXJrZG93bk5vZGVzLnB1c2godGV4dE1hcmtkb3duTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodG1sID0gaHRtbEZyb21UZXh0TWFya2Rvd25Ob2Rlcyh0ZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dClcblxuICAgICAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRlbnQgPSBudWxsO1xuXG4gICAgICAgIGh0bWwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgICAgICBodG1scy5wdXNoKGh0bWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBodG1sID0gaHRtbEZyb21UZXh0TWFya2Rvd25Ob2Rlcyh0ZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dClcblxuICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgIGh0bWxzLnB1c2goaHRtbHMpO1xuICB9XG5cbiAgaHRtbCA9IGh0bWxzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gaHRtbDtcbn1cblxuZnVuY3Rpb24gdGV4dERPTUVsZW1lbnRGcm9tVGV4dE1hcmtkb3duTm9kZXModGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IHRleHRET01FbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCB0ZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA9IHRleHRNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICBpZiAodGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlcyA9IHRleHRNYXJrZG93bk5vZGVzLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICAgIHRleHRET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBjbGVhcih0ZXh0TWFya2Rvd25Ob2Rlcyk7XG4gIH1cblxuICByZXR1cm4gdGV4dERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGh0bWxGcm9tVGV4dE1hcmtkb3duTm9kZXModGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IGh0bWwgPSBudWxsO1xuXG4gIGNvbnN0IHRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID0gdGV4dE1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gIGlmICh0ZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGVzID0gdGV4dE1hcmtkb3duTm9kZXMsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgaHRtbCA9IGNvbnRlbnQ7XG5cbiAgICBjbGVhcih0ZXh0TWFya2Rvd25Ob2Rlcyk7XG4gIH1cblxuICByZXR1cm4gaHRtbDtcbn1cbiJdLCJuYW1lcyI6WyJkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIiwiaHRtbEZyb21DaGlsZE5vZGVzIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImNoaWxkTm9kZXMiLCJjb250ZXh0IiwiZG9tRWxlbWVudHMiLCJ0ZXh0TWFya2Rvd25Ob2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZVRleHRNYXJrZG93bk5vZGUiLCJUZXh0TWFya2Rvd25Ob2RlIiwidGV4dE1hcmtkb3duTm9kZSIsInB1c2giLCJ0ZXh0RE9NRWxlbWVudCIsInRleHRET01FbGVtZW50RnJvbVRleHRNYXJrZG93bk5vZGVzIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJodG1sIiwiaHRtbHMiLCJodG1sRnJvbVRleHRNYXJrZG93bk5vZGVzIiwiaW5kZW50IiwiYXNIVE1MIiwiam9pbiIsIkVNUFRZX1NUUklORyIsInRleHRNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibWFya2Rvd25Ob2RlcyIsImNvbnRlbnQiLCJjb250ZW50RnJvbU1hcmtkb3duTm9kZXMiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFXZ0JBLHlCQUF5QjtlQUF6QkE7O0lBMkNBQyxrQkFBa0I7ZUFBbEJBOzs7eUJBcERlOzJEQUVGO3lCQUVBO3VCQUNZOzs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRUQsU0FBU0YsMEJBQTBCSSxVQUFVLEVBQUVDLE9BQU87SUFDM0QsSUFBTUMsY0FBYyxFQUFFLEVBQ2hCQyxvQkFBb0IsRUFBRTtJQUU1QkgsV0FBV0ksT0FBTyxDQUFDLFNBQUNDO1FBQ2xCLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSw0QkFBNkJILEFBQVMsWUFBVEEsV0FBcUJJLGFBQWdCO1lBRXhFLElBQUlELDJCQUEyQjtnQkFDN0IsSUFBTUUsbUJBQW1CTCxXQUFXLEdBQUc7Z0JBRXZDRixrQkFBa0JRLElBQUksQ0FBQ0Q7WUFDekIsT0FBTztnQkFDTCxJQUFNRSxpQkFBaUJDLG9DQUFvQ1YsbUJBQW1CRjtnQkFFOUUsSUFBSVcsbUJBQW1CLE1BQU07b0JBQzNCLElBQU1FLGFBQWFGLGdCQUFpQixHQUFHO29CQUV2Q1YsWUFBWVMsSUFBSSxDQUFDRztnQkFDbkI7Z0JBRUEsSUFBTUEsY0FBYVQsVUFBVVUsZ0JBQWdCLENBQUNkO2dCQUU5QyxJQUFJYSxnQkFBZSxNQUFNO29CQUN2QlosWUFBWVMsSUFBSSxDQUFDRztnQkFDbkI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFNRixpQkFBaUJDLG9DQUFvQ1YsbUJBQW1CRjtJQUU5RSxJQUFJVyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNRSxhQUFhRixnQkFBaUIsR0FBRztRQUV2Q1YsWUFBWVMsSUFBSSxDQUFDRztJQUNuQjtJQUVBLE9BQU9aO0FBQ1Q7QUFFTyxTQUFTTCxtQkFBbUJHLFVBQVUsRUFBRUMsT0FBTztJQUNwRCxJQUFJZTtJQUVKLElBQU1DLFFBQVEsRUFBRSxFQUNWZCxvQkFBb0IsRUFBRTtJQUU1QkgsV0FBV0ksT0FBTyxDQUFDLFNBQUNDO1FBQ2xCLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSw0QkFBNkJILEFBQVMsWUFBVEEsV0FBcUJJLGFBQWdCO1lBRXhFLElBQUlELDJCQUEyQjtnQkFDN0IsSUFBTUUsbUJBQW1CTCxXQUFXLEdBQUc7Z0JBRXZDRixrQkFBa0JRLElBQUksQ0FBQ0Q7WUFDekIsT0FBTztnQkFDTE0sT0FBT0UsMEJBQTBCZixtQkFBbUJGO2dCQUVwRCxJQUFJZSxTQUFTLE1BQU07b0JBQ2pCQyxNQUFNTixJQUFJLENBQUNLO2dCQUNiO2dCQUVBLElBQU1HLFNBQVM7Z0JBRWZILE9BQU9YLFVBQVVlLE1BQU0sQ0FBQ0QsUUFBUWxCO2dCQUVoQyxJQUFJZSxTQUFTLE1BQU07b0JBQ2pCQyxNQUFNTixJQUFJLENBQUNLO2dCQUNiO1lBQ0Y7UUFDRjtJQUNGO0lBRUFBLE9BQU9FLDBCQUEwQmYsbUJBQW1CRjtJQUVwRCxJQUFJZSxTQUFTLE1BQU07UUFDakJDLE1BQU1OLElBQUksQ0FBQ007SUFDYjtJQUVBRCxPQUFPQyxNQUFNSSxJQUFJLENBQUNDLHVCQUFZO0lBRTlCLE9BQU9OO0FBQ1Q7QUFFQSxTQUFTSCxvQ0FBb0NWLGlCQUFpQixFQUFFRixPQUFPO0lBQ3JFLElBQUlXLGlCQUFpQjtJQUVyQixJQUFNVywwQkFBMEJwQixrQkFBa0JxQixNQUFNO0lBRXhELElBQUlELDBCQUEwQixHQUFHO1FBQy9CLElBQU1FLGdCQUFnQnRCLG1CQUNoQnVCLFVBQVVDLElBQUFBLGlDQUF3QixFQUFDRixlQUFleEI7UUFFeERXLGlCQUFpQmdCLFNBQVNDLGNBQWMsQ0FBQ0g7UUFFekM1QixNQUFNSztJQUNSO0lBRUEsT0FBT1M7QUFDVDtBQUVBLFNBQVNNLDBCQUEwQmYsaUJBQWlCLEVBQUVGLE9BQU87SUFDM0QsSUFBSWUsT0FBTztJQUVYLElBQU1PLDBCQUEwQnBCLGtCQUFrQnFCLE1BQU07SUFFeEQsSUFBSUQsMEJBQTBCLEdBQUc7UUFDL0IsSUFBTUUsZ0JBQWdCdEIsbUJBQ2hCdUIsVUFBVUMsSUFBQUEsaUNBQXdCLEVBQUNGLGVBQWV4QjtRQUV4RGUsT0FBT1U7UUFFUDVCLE1BQU1LO0lBQ1I7SUFFQSxPQUFPYTtBQUNUIn0=