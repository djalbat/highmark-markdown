"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "domElementsFromChildNodes", {
    enumerable: true,
    get: function() {
        return domElementsFromChildNodes;
    }
});
var _necessary = require("necessary");
var _text = /*#__PURE__*/ _interop_require_default(require("../node/markdown/text"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUZXh0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL3RleHRcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG5jb25zdCB7IGNsZWFyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBkb21FbGVtZW50cyA9IFtdLFxuICAgICAgICB0ZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXh0TWFya2Rvd25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXh0TWFya2Rvd25Ob2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICB0ZXh0TWFya2Rvd25Ob2Rlcy5wdXNoKHRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGV4dERPTUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudEZyb21UZXh0TWFya2Rvd25Ob2Rlcyh0ZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dClcblxuICAgICAgICBpZiAodGV4dERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gdGV4dERPTUVsZW1lbnQ7ICAvLy9cblxuICAgICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gY2hpbGROb2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB0ZXh0RE9NRWxlbWVudCA9IHRleHRET01FbGVtZW50RnJvbVRleHRNYXJrZG93bk5vZGVzKHRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0KVxuXG4gIGlmICh0ZXh0RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdGV4dERPTUVsZW1lbnRGcm9tVGV4dE1hcmtkb3duTm9kZXModGV4dE1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IHRleHRET01FbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCB0ZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA9IHRleHRNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICBpZiAodGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlcyA9IHRleHRNYXJrZG93bk5vZGVzLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICAgIHRleHRET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBjbGVhcih0ZXh0TWFya2Rvd25Ob2Rlcyk7XG4gIH1cblxuICByZXR1cm4gdGV4dERPTUVsZW1lbnQ7XG59XG5cbiJdLCJuYW1lcyI6WyJkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImNoaWxkTm9kZXMiLCJjb250ZXh0IiwiZG9tRWxlbWVudHMiLCJ0ZXh0TWFya2Rvd25Ob2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZVRleHRNYXJrZG93bk5vZGUiLCJUZXh0TWFya2Rvd25Ob2RlIiwidGV4dE1hcmtkb3duTm9kZSIsInB1c2giLCJ0ZXh0RE9NRWxlbWVudCIsInRleHRET01FbGVtZW50RnJvbVRleHRNYXJrZG93bk5vZGVzIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJ0ZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm1hcmtkb3duTm9kZXMiLCJjb250ZW50IiwiY29udGVudEZyb21NYXJrZG93bk5vZGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVWdCQTs7O2VBQUFBOzs7eUJBUmU7MkRBRUY7dUJBRVk7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFRCxTQUFTRCwwQkFBMEJHLFVBQVUsRUFBRUMsT0FBTztJQUMzRCxJQUFNQyxjQUFjLEVBQUUsRUFDaEJDLG9CQUFvQixFQUFFO0lBRTVCSCxXQUFXSSxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1FLDRCQUE2QkgsQUFBUyxZQUFUQSxXQUFxQkksYUFBZ0I7WUFFeEUsSUFBSUQsMkJBQTJCO2dCQUM3QixJQUFNRSxtQkFBbUJMLFdBQVcsR0FBRztnQkFFdkNGLGtCQUFrQlEsSUFBSSxDQUFDRDtZQUN6QixPQUFPO2dCQUNMLElBQU1FLGlCQUFpQkMsb0NBQW9DVixtQkFBbUJGO2dCQUU5RSxJQUFJVyxtQkFBbUIsTUFBTTtvQkFDM0IsSUFBTUUsYUFBYUYsZ0JBQWlCLEdBQUc7b0JBRXZDVixZQUFZUyxJQUFJLENBQUNHO2dCQUNuQjtnQkFFQSxJQUFNQSxjQUFhVCxVQUFVVSxnQkFBZ0IsQ0FBQ2Q7Z0JBRTlDLElBQUlhLGdCQUFlLE1BQU07b0JBQ3ZCWixZQUFZUyxJQUFJLENBQUNHO2dCQUNuQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQU1GLGlCQUFpQkMsb0NBQW9DVixtQkFBbUJGO0lBRTlFLElBQUlXLG1CQUFtQixNQUFNO1FBQzNCLElBQU1FLGFBQWFGLGdCQUFpQixHQUFHO1FBRXZDVixZQUFZUyxJQUFJLENBQUNHO0lBQ25CO0lBRUEsT0FBT1o7QUFDVDtBQUVBLFNBQVNXLG9DQUFvQ1YsaUJBQWlCLEVBQUVGLE9BQU87SUFDckUsSUFBSVcsaUJBQWlCO0lBRXJCLElBQU1JLDBCQUEwQmIsa0JBQWtCYyxNQUFNO0lBRXhELElBQUlELDBCQUEwQixHQUFHO1FBQy9CLElBQU1FLGdCQUFnQmYsbUJBQ2hCZ0IsVUFBVUMsSUFBQUEsaUNBQXdCLEVBQUNGLGVBQWVqQjtRQUV4RFcsaUJBQWlCUyxTQUFTQyxjQUFjLENBQUNIO1FBRXpDckIsTUFBTUs7SUFDUjtJQUVBLE9BQU9TO0FBQ1QifQ==