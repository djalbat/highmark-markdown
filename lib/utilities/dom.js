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
var _queries = /*#__PURE__*/ _interop_require_default(require("../queries"));
var _html = /*#__PURE__*/ _interop_require_default(require("../node/html"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("../map/node/html"));
var _topmost = /*#__PURE__*/ _interop_require_default(require("../node/html/topmost"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
function htmlNodeFromMarkdownNode(markdownNode) {
    var node = markdownNode, nodes = (0, _query.nodesFromNodeAndQueries)(node, _queries.default), outerNodes = nodes, topmostNOde = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes), topmostHTMLNode = topmostNOde; ///
    return topmostHTMLNode;
}
function htmlNodeFromMarkdownNodes(markdownNodes) {
    var nodes = [];
    markdownNodes.forEach(function(markdownNode) {
        var node = markdownNode; ///
        (0, _query.nodesFromNodeAndQueries)(node, _queries.default, nodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgcXVlcmllcyBmcm9tIFwiLi4vcXVlcmllc1wiO1xuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBodG1sTm9kZU1hcCBmcm9tIFwiLi4vbWFwL25vZGUvaHRtbFwiO1xuaW1wb3J0IFRvcG1vc3RIVE1MTm9kZSBmcm9tIFwiLi4vbm9kZS9odG1sL3RvcG1vc3RcIjtcblxuaW1wb3J0IHsgbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyB9ID0gbm9kZVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxOb2RlRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgY29uc3Qgbm9kZSA9IG1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzKG5vZGUsIHF1ZXJpZXMpLFxuICAgICAgICBvdXRlck5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICB0b3Btb3N0Tk9kZSA9IHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBvdXRlck5vZGVzKSxcbiAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdE5PZGU7ICAvLy9cblxuICByZXR1cm4gdG9wbW9zdEhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzKSB7XG4gIGNvbnN0IG5vZGVzID0gW107XG5cbiAgbWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChtYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gbWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyhub2RlLCBxdWVyaWVzLCBub2Rlcyk7XG4gIH0pO1xuXG4gIGNvbnN0IG91dGVyTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgIHRvcG1vc3ROT2RlID0gdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyhDbGFzc0Zyb21PdXRlck5vZGUsIG91dGVyTm9kZXMpLFxuICAgICAgICB0b3Btb3N0SFRNTE5vZGUgPSB0b3Btb3N0Tk9kZTsgIC8vL1xuXG4gIHJldHVybiB0b3Btb3N0SFRNTE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlLFxuICBodG1sTm9kZUZyb21NYXJrZG93bk5vZGVzXG59O1xuXG5mdW5jdGlvbiBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gIGxldCBDbGFzcztcblxuICBpZiAob3V0ZXJOb2RlID09PSBudWxsKSB7XG4gICAgQ2xhc3MgPSBUb3Btb3N0SFRNTE5vZGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBvdXRlck5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBodG1sTm9kZU1hcFtydWxlTmFtZV0gfHwgSFRNTE5vZGU7XG4gIH1cblxuICByZXR1cm4gQ2xhc3M7XG59XG4iXSwibmFtZXMiOlsiaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlIiwiaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlcyIsInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJub2RlVXRpbGl0aWVzIiwibWFya2Rvd25Ob2RlIiwibm9kZSIsIm5vZGVzIiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMiLCJxdWVyaWVzIiwib3V0ZXJOb2RlcyIsInRvcG1vc3ROT2RlIiwiQ2xhc3NGcm9tT3V0ZXJOb2RlIiwidG9wbW9zdEhUTUxOb2RlIiwibWFya2Rvd25Ob2RlcyIsImZvckVhY2giLCJvdXRlck5vZGUiLCJDbGFzcyIsIlRvcG1vc3RIVE1MTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJodG1sTm9kZU1hcCIsIkhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF1Q0EsT0FHRTtlQUhGOztJQTFCZ0JBLHdCQUF3QjtlQUF4QkE7O0lBVUFDLHlCQUF5QjtlQUF6QkE7Ozt3QkFyQmM7OERBRVY7MkRBQ0M7NERBQ0c7OERBQ0k7cUJBRVk7Ozs7OztBQUV4QyxJQUFNLEFBQUVDLDRCQUE4QkMsdUJBQWEsQ0FBM0NEO0FBRUQsU0FBU0YseUJBQXlCSSxZQUFZO0lBQ25ELElBQU1DLE9BQU9ELGNBQ1BFLFFBQVFDLElBQUFBLDhCQUF1QixFQUFDRixNQUFNRyxnQkFBTyxHQUM3Q0MsYUFBYUgsT0FDYkksY0FBY1IsMEJBQTBCUyxvQkFBb0JGLGFBQzVERyxrQkFBa0JGLGFBQWMsR0FBRztJQUV6QyxPQUFPRTtBQUNUO0FBRU8sU0FBU1gsMEJBQTBCWSxhQUFhO0lBQ3JELElBQU1QLFFBQVEsRUFBRTtJQUVoQk8sY0FBY0MsT0FBTyxDQUFDLFNBQUNWO1FBQ3JCLElBQU1DLE9BQU9ELGNBQWUsR0FBRztRQUUvQkcsSUFBQUEsOEJBQXVCLEVBQUNGLE1BQU1HLGdCQUFPLEVBQUVGO0lBQ3pDO0lBRUEsSUFBTUcsYUFBYUgsT0FDYkksY0FBY1IsMEJBQTBCUyxvQkFBb0JGLGFBQzVERyxrQkFBa0JGLGFBQWMsR0FBRztJQUV6QyxPQUFPRTtBQUNUO0lBRUEsV0FBZTtJQUNiWiwwQkFBQUE7SUFDQUMsMkJBQUFBO0FBQ0Y7QUFFQSxTQUFTVSxtQkFBbUJJLFNBQVM7SUFDbkMsSUFBSUM7SUFFSixJQUFJRCxjQUFjLE1BQU07UUFDdEJDLFFBQVFDLGdCQUFlLEVBQUcsR0FBRztJQUMvQixPQUFPO1FBQ0wsSUFBTUMsa0JBQWtCSCxXQUNsQkksV0FBV0QsZ0JBQWdCRSxXQUFXO1FBRTVDSixRQUFRSyxjQUFXLENBQUNGLFNBQVMsSUFBSUcsYUFBUTtJQUMzQztJQUVBLE9BQU9OO0FBQ1QifQ==