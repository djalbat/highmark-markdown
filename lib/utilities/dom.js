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
    htmlNodeFromMarkdownNode: function() {
        return htmlNodeFromMarkdownNode;
    },
    htmlNodeFromMarkdownNodes: function() {
        return htmlNodeFromMarkdownNodes;
    }
});
var _occamdom = require("occam-dom");
var _html = /*#__PURE__*/ _interop_require_default(require("../node/html"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("../map/node/html"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../queries/markdown"));
var _topmost = /*#__PURE__*/ _interop_require_default(require("../node/html/topmost"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
function htmlNodeFromMarkdownNode(markdownNode) {
    var node = markdownNode, queries = _markdown.default, nodes = (0, _query.nodesFromNodeAndQueries)(node, queries), outerNodes = nodes, topmostNOde = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes), topmostHTMLNode = topmostNOde; ///
    return topmostHTMLNode;
}
function htmlNodeFromMarkdownNodes(markdownNodes) {
    var nodes = [], queries = _markdown.default; ///
    markdownNodes.forEach(function(markdownNode) {
        var node = markdownNode; ///
        (0, _query.nodesFromNodeAndQueries)(node, queries, nodes);
    });
    var outerNodes = nodes, topmostNOde = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes), topmostHTMLNode = topmostNOde; ///
    return topmostHTMLNode;
}
var _default = {
    htmlNodeFromMarkdownNode: htmlNodeFromMarkdownNode,
    htmlNodeFromMarkdownNodes: htmlNodeFromMarkdownNodes
};
function ClassFromOuterNode(outerNode) {
    var Class;
    if (outerNode === null) {
        Class = _topmost.default; ///
    } else {
        var nonTerminalNode = outerNode, ruleName = nonTerminalNode.getRuleName();
        Class = _html1.default[ruleName] || _html.default;
    }
    return Class;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IGh0bWxOb2RlTWFwIGZyb20gXCIuLi9tYXAvbm9kZS9odG1sXCI7XG5pbXBvcnQgbWFya2Rvd25RdWVyaWVzIGZyb20gXCIuLi9xdWVyaWVzL21hcmtkb3duXCI7XG5pbXBvcnQgVG9wbW9zdEhUTUxOb2RlIGZyb20gXCIuLi9ub2RlL2h0bWwvdG9wbW9zdFwiO1xuXG5pbXBvcnQgeyBub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIH0gPSBub2RlVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSkge1xuICBjb25zdCBub2RlID0gbWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgIHF1ZXJpZXMgPSBtYXJrZG93blF1ZXJpZXMsIC8vL1xuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzKG5vZGUsIHF1ZXJpZXMpLFxuICAgICAgICBvdXRlck5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICB0b3Btb3N0Tk9kZSA9IHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzKSxcbiAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdE5PZGU7ICAvLy9cblxuICByZXR1cm4gdG9wbW9zdEhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzKSB7XG4gIGNvbnN0IG5vZGVzID0gW10sXG4gICAgICAgIHF1ZXJpZXMgPSBtYXJrZG93blF1ZXJpZXM7ICAvLy9cblxuICBtYXJrZG93bk5vZGVzLmZvckVhY2goKG1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBtYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIG5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzKG5vZGUsIHF1ZXJpZXMsIG5vZGVzKTtcbiAgfSk7XG5cbiAgY29uc3Qgb3V0ZXJOb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgdG9wbW9zdE5PZGUgPSB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzKENsYXNzRnJvbU91dGVyTm9kZSwgb3V0ZXJOb2RlcyksXG4gICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3ROT2RlOyAgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3RIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBodG1sTm9kZUZyb21NYXJrZG93bk5vZGUsXG4gIGh0bWxOb2RlRnJvbU1hcmtkb3duTm9kZXNcbn07XG5cbmZ1bmN0aW9uIENsYXNzRnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgbGV0IENsYXNzO1xuXG4gIGlmIChvdXRlck5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RIVE1MTm9kZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG91dGVyTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBDbGFzcyA9IGh0bWxOb2RlTWFwW3J1bGVOYW1lXSB8fCBIVE1MTm9kZTtcbiAgfVxuXG4gIHJldHVybiBDbGFzcztcbn1cbiJdLCJuYW1lcyI6WyJodG1sTm9kZUZyb21NYXJrZG93bk5vZGUiLCJodG1sTm9kZUZyb21NYXJrZG93bk5vZGVzIiwidG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyIsIm5vZGVVdGlsaXRpZXMiLCJtYXJrZG93bk5vZGUiLCJub2RlIiwicXVlcmllcyIsIm1hcmtkb3duUXVlcmllcyIsIm5vZGVzIiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMiLCJvdXRlck5vZGVzIiwidG9wbW9zdE5PZGUiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJtYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsIm91dGVyTm9kZSIsIkNsYXNzIiwiVG9wbW9zdEhUTUxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImh0bWxOb2RlTWFwIiwiSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlDQSxPQUdFO2VBSEY7O0lBNUJnQkEsd0JBQXdCO2VBQXhCQTs7SUFXQUMseUJBQXlCO2VBQXpCQTs7O3dCQXRCYzsyREFFVDs0REFDRzsrREFDSTs4REFDQTtxQkFFWTs7Ozs7O0FBRXhDLElBQU0sQUFBRUMsNEJBQThCQyx1QkFBYSxDQUEzQ0Q7QUFFRCxTQUFTRix5QkFBeUJJLFlBQVk7SUFDbkQsSUFBTUMsT0FBT0QsY0FDUEUsVUFBVUMsaUJBQWUsRUFDekJDLFFBQVFDLElBQUFBLDhCQUF1QixFQUFDSixNQUFNQyxVQUN0Q0ksYUFBYUYsT0FDYkcsY0FBY1QsMEJBQTBCVSxvQkFBb0JGLGFBQzVERyxrQkFBa0JGLGFBQWMsR0FBRztJQUV6QyxPQUFPRTtBQUNUO0FBRU8sU0FBU1osMEJBQTBCYSxhQUFhO0lBQ3JELElBQU1OLFFBQVEsRUFBRSxFQUNWRixVQUFVQyxpQkFBZSxFQUFHLEdBQUc7SUFFckNPLGNBQWNDLE9BQU8sQ0FBQyxTQUFDWDtRQUNyQixJQUFNQyxPQUFPRCxjQUFlLEdBQUc7UUFFL0JLLElBQUFBLDhCQUF1QixFQUFDSixNQUFNQyxTQUFTRTtJQUN6QztJQUVBLElBQU1FLGFBQWFGLE9BQ2JHLGNBQWNULDBCQUEwQlUsb0JBQW9CRixhQUM1REcsa0JBQWtCRixhQUFjLEdBQUc7SUFFekMsT0FBT0U7QUFDVDtJQUVBLFdBQWU7SUFDYmIsMEJBQUFBO0lBQ0FDLDJCQUFBQTtBQUNGO0FBRUEsU0FBU1csbUJBQW1CSSxTQUFTO0lBQ25DLElBQUlDO0lBRUosSUFBSUQsY0FBYyxNQUFNO1FBQ3RCQyxRQUFRQyxnQkFBZSxFQUFHLEdBQUc7SUFDL0IsT0FBTztRQUNMLElBQU1DLGtCQUFrQkgsV0FDbEJJLFdBQVdELGdCQUFnQkUsV0FBVztRQUU1Q0osUUFBUUssY0FBVyxDQUFDRixTQUFTLElBQUlHLGFBQVE7SUFDM0M7SUFFQSxPQUFPTjtBQUNUIn0=