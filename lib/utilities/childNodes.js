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
        htmls.push(html);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUZXh0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL3RleHRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG5jb25zdCB7IGNsZWFyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBkb21FbGVtZW50cyA9IFtdLFxuICAgICAgICB0ZXh0TWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXh0TWFya2Rvd25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVGV4dE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXh0TWFya2Rvd25Ob2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICB0ZXh0TWFya2Rvd25Ob2Rlcy5wdXNoKHRleHRNYXJrZG93bk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGV4dERPTUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudEZyb21UZXh0TWFya2Rvd25Ob2Rlcyh0ZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dClcblxuICAgICAgICBpZiAodGV4dERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gdGV4dERPTUVsZW1lbnQ7ICAvLy9cblxuICAgICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gY2hpbGROb2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB0ZXh0RE9NRWxlbWVudCA9IHRleHRET01FbGVtZW50RnJvbVRleHRNYXJrZG93bk5vZGVzKHRleHRNYXJrZG93bk5vZGVzLCBjb250ZXh0KVxuXG4gIGlmICh0ZXh0RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0ZXh0RE9NRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBodG1sO1xuXG4gIGNvbnN0IGh0bWxzID0gW10sXG4gICAgICAgIHRleHRNYXJrZG93bk5vZGVzID0gW107XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVRleHRNYXJrZG93bk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgVGV4dE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHRleHRNYXJrZG93bk5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHRleHRNYXJrZG93bk5vZGVzLnB1c2godGV4dE1hcmtkb3duTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodG1sID0gaHRtbEZyb21UZXh0TWFya2Rvd25Ob2Rlcyh0ZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dClcblxuICAgICAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRlbnQgPSBudWxsO1xuXG4gICAgICAgIGh0bWwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgICAgICBodG1scy5wdXNoKGh0bWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBodG1sID0gaHRtbEZyb21UZXh0TWFya2Rvd25Ob2Rlcyh0ZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dClcblxuICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgIGh0bWxzLnB1c2goaHRtbCk7XG4gIH1cblxuICBodG1sID0gaHRtbHMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG5mdW5jdGlvbiB0ZXh0RE9NRWxlbWVudEZyb21UZXh0TWFya2Rvd25Ob2Rlcyh0ZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBsZXQgdGV4dERPTUVsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID0gdGV4dE1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gIGlmICh0ZXh0TWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGVzID0gdGV4dE1hcmtkb3duTm9kZXMsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgdGV4dERPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGNsZWFyKHRleHRNYXJrZG93bk5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaHRtbEZyb21UZXh0TWFya2Rvd25Ob2Rlcyh0ZXh0TWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgY29uc3QgdGV4dE1hcmtkb3duTm9kZXNMZW5ndGggPSB0ZXh0TWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHRleHRNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZXMgPSB0ZXh0TWFya2Rvd25Ob2RlcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU1hcmtkb3duTm9kZXMobWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG5cbiAgICBodG1sID0gY29udGVudDtcblxuICAgIGNsZWFyKHRleHRNYXJrZG93bk5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiBodG1sO1xufVxuIl0sIm5hbWVzIjpbImRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMiLCJodG1sRnJvbUNoaWxkTm9kZXMiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiY2hpbGROb2RlcyIsImNvbnRleHQiLCJkb21FbGVtZW50cyIsInRleHRNYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlVGV4dE1hcmtkb3duTm9kZSIsIlRleHRNYXJrZG93bk5vZGUiLCJ0ZXh0TWFya2Rvd25Ob2RlIiwicHVzaCIsInRleHRET01FbGVtZW50IiwidGV4dERPTUVsZW1lbnRGcm9tVGV4dE1hcmtkb3duTm9kZXMiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImh0bWwiLCJodG1scyIsImh0bWxGcm9tVGV4dE1hcmtkb3duTm9kZXMiLCJpbmRlbnQiLCJhc0hUTUwiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwidGV4dE1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtYXJrZG93bk5vZGVzIiwiY29udGVudCIsImNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVdnQkEseUJBQXlCO2VBQXpCQTs7SUEyQ0FDLGtCQUFrQjtlQUFsQkE7Ozt5QkFwRGU7MkRBRUY7eUJBRUE7dUJBQ1k7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFRCxTQUFTRiwwQkFBMEJJLFVBQVUsRUFBRUMsT0FBTztJQUMzRCxJQUFNQyxjQUFjLEVBQUUsRUFDaEJDLG9CQUFvQixFQUFFO0lBRTVCSCxXQUFXSSxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1FLDRCQUE2QkgsQUFBUyxZQUFUQSxXQUFxQkksYUFBZ0I7WUFFeEUsSUFBSUQsMkJBQTJCO2dCQUM3QixJQUFNRSxtQkFBbUJMLFdBQVcsR0FBRztnQkFFdkNGLGtCQUFrQlEsSUFBSSxDQUFDRDtZQUN6QixPQUFPO2dCQUNMLElBQU1FLGlCQUFpQkMsb0NBQW9DVixtQkFBbUJGO2dCQUU5RSxJQUFJVyxtQkFBbUIsTUFBTTtvQkFDM0IsSUFBTUUsYUFBYUYsZ0JBQWlCLEdBQUc7b0JBRXZDVixZQUFZUyxJQUFJLENBQUNHO2dCQUNuQjtnQkFFQSxJQUFNQSxjQUFhVCxVQUFVVSxnQkFBZ0IsQ0FBQ2Q7Z0JBRTlDLElBQUlhLGdCQUFlLE1BQU07b0JBQ3ZCWixZQUFZUyxJQUFJLENBQUNHO2dCQUNuQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQU1GLGlCQUFpQkMsb0NBQW9DVixtQkFBbUJGO0lBRTlFLElBQUlXLG1CQUFtQixNQUFNO1FBQzNCLElBQU1FLGFBQWFGLGdCQUFpQixHQUFHO1FBRXZDVixZQUFZUyxJQUFJLENBQUNHO0lBQ25CO0lBRUEsT0FBT1o7QUFDVDtBQUVPLFNBQVNMLG1CQUFtQkcsVUFBVSxFQUFFQyxPQUFPO0lBQ3BELElBQUllO0lBRUosSUFBTUMsUUFBUSxFQUFFLEVBQ1ZkLG9CQUFvQixFQUFFO0lBRTVCSCxXQUFXSSxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1FLDRCQUE2QkgsQUFBUyxZQUFUQSxXQUFxQkksYUFBZ0I7WUFFeEUsSUFBSUQsMkJBQTJCO2dCQUM3QixJQUFNRSxtQkFBbUJMLFdBQVcsR0FBRztnQkFFdkNGLGtCQUFrQlEsSUFBSSxDQUFDRDtZQUN6QixPQUFPO2dCQUNMTSxPQUFPRSwwQkFBMEJmLG1CQUFtQkY7Z0JBRXBELElBQUllLFNBQVMsTUFBTTtvQkFDakJDLE1BQU1OLElBQUksQ0FBQ0s7Z0JBQ2I7Z0JBRUEsSUFBTUcsU0FBUztnQkFFZkgsT0FBT1gsVUFBVWUsTUFBTSxDQUFDRCxRQUFRbEI7Z0JBRWhDLElBQUllLFNBQVMsTUFBTTtvQkFDakJDLE1BQU1OLElBQUksQ0FBQ0s7Z0JBQ2I7WUFDRjtRQUNGO0lBQ0Y7SUFFQUEsT0FBT0UsMEJBQTBCZixtQkFBbUJGO0lBRXBELElBQUllLFNBQVMsTUFBTTtRQUNqQkMsTUFBTU4sSUFBSSxDQUFDSztJQUNiO0lBRUFBLE9BQU9DLE1BQU1JLElBQUksQ0FBQ0MsdUJBQVk7SUFFOUIsT0FBT047QUFDVDtBQUVBLFNBQVNILG9DQUFvQ1YsaUJBQWlCLEVBQUVGLE9BQU87SUFDckUsSUFBSVcsaUJBQWlCO0lBRXJCLElBQU1XLDBCQUEwQnBCLGtCQUFrQnFCLE1BQU07SUFFeEQsSUFBSUQsMEJBQTBCLEdBQUc7UUFDL0IsSUFBTUUsZ0JBQWdCdEIsbUJBQ2hCdUIsVUFBVUMsSUFBQUEsaUNBQXdCLEVBQUNGLGVBQWV4QjtRQUV4RFcsaUJBQWlCZ0IsU0FBU0MsY0FBYyxDQUFDSDtRQUV6QzVCLE1BQU1LO0lBQ1I7SUFFQSxPQUFPUztBQUNUO0FBRUEsU0FBU00sMEJBQTBCZixpQkFBaUIsRUFBRUYsT0FBTztJQUMzRCxJQUFJZSxPQUFPO0lBRVgsSUFBTU8sMEJBQTBCcEIsa0JBQWtCcUIsTUFBTTtJQUV4RCxJQUFJRCwwQkFBMEIsR0FBRztRQUMvQixJQUFNRSxnQkFBZ0J0QixtQkFDaEJ1QixVQUFVQyxJQUFBQSxpQ0FBd0IsRUFBQ0YsZUFBZXhCO1FBRXhEZSxPQUFPVTtRQUVQNUIsTUFBTUs7SUFDUjtJQUVBLE9BQU9hO0FBQ1QifQ==