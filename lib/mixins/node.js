"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function getDescendantNodes() {
    var descendantNodes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var descendantNode = this; ///
    descendantNodes.push(descendantNode);
    var childNodes = this.getChildNodes();
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode; ///
            nonTerminalNode.getDescendantNodes(descendantNodes);
        }
    });
    return descendantNodes;
}
var nodeMixins = {
    getDescendantNodes: getDescendantNodes
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0RGVzY2VuZGFudE5vZGVzKGRlc2NlbmRhbnROb2RlcyA9IFtdKSB7XG4gIGNvbnN0IGRlc2NlbmRhbnROb2RlID0gdGhpczsgLy8vXG5cbiAgZGVzY2VuZGFudE5vZGVzLnB1c2goZGVzY2VuZGFudE5vZGUpO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZS5nZXREZXNjZW5kYW50Tm9kZXMoZGVzY2VuZGFudE5vZGVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjZW5kYW50Tm9kZXM7XG59XG5cbmNvbnN0IG5vZGVNaXhpbnMgPSB7XG4gIGdldERlc2NlbmRhbnROb2Rlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZU1peGlucztcbiJdLCJuYW1lcyI6WyJnZXREZXNjZW5kYW50Tm9kZXMiLCJkZXNjZW5kYW50Tm9kZXMiLCJkZXNjZW5kYW50Tm9kZSIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vZGVNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7QUF4QkEsU0FBU0E7UUFBbUJDLGtCQUFBQSxpRUFBa0IsRUFBRTtJQUM5QyxJQUFNQyxpQkFBaUIsSUFBSSxFQUFFLEdBQUc7SUFFaENELGdCQUFnQkUsSUFBSSxDQUFDRDtJQUVyQixJQUFNRSxhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQ0QsV0FBV0UsT0FBTyxDQUFDLFNBQUNDO1FBQ2xCLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JILFdBQVksR0FBRztZQUV2Q0csZ0JBQWdCVixrQkFBa0IsQ0FBQ0M7UUFDckM7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxJQUFNVSxhQUFhO0lBQ2pCWCxvQkFBQUE7QUFDRjtJQUVBLFdBQWVXIn0=