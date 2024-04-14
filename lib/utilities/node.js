"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parentNodeFromNodeAndChildNode", {
    enumerable: true,
    get: function() {
        return parentNodeFromNodeAndChildNode;
    }
});
function parentNodeFromNodeAndChildNode(node, childNode) {
    var parentNode = null;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), index = childNodes.indexOf(childNode);
        if (index !== -1) {
            parentNode = node; ///
        } else {
            childNodes.some(function(childNode) {
                var _$node = childNode; ///
                parentNode = parentNodeFromNodeAndChildNode(_$node, childNode);
                if (parentNode !== null) {
                    return true;
                }
            });
        }
    }
    return parentNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmVudE5vZGVGcm9tTm9kZUFuZENoaWxkTm9kZShub2RlLCBjaGlsZE5vZGUpIHtcbiAgbGV0IHBhcmVudE5vZGUgPSBudWxsXG5cbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkTm9kZSk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZUZyb21Ob2RlQW5kQ2hpbGROb2RlKG5vZGUsIGNoaWxkTm9kZSk7XG5cbiAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG4iXSwibmFtZXMiOlsicGFyZW50Tm9kZUZyb21Ob2RlQW5kQ2hpbGROb2RlIiwibm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImluZGV4IiwiaW5kZXhPZiIsInNvbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSwrQkFBK0JDLElBQUksRUFBRUMsU0FBUztJQUM1RCxJQUFJQyxhQUFhO0lBRWpCLElBQU1DLHNCQUFzQkgsS0FBS0ksaUJBQWlCO0lBRWxELElBQUlELHFCQUFxQjtRQUN2QixJQUFNRSxrQkFBa0JMLE1BQ2xCTSxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLFFBQVFGLFdBQVdHLE9BQU8sQ0FBQ1I7UUFFakMsSUFBSU8sVUFBVSxDQUFDLEdBQUc7WUFDaEJOLGFBQWFGLE1BQU8sR0FBRztRQUN6QixPQUFPO1lBQ0xNLFdBQVdJLElBQUksQ0FBQyxTQUFDVDtnQkFDZixJQUFNRCxTQUFPQyxXQUFXLEdBQUc7Z0JBRTNCQyxhQUFhSCwrQkFBK0JDLFFBQU1DO2dCQUVsRCxJQUFJQyxlQUFlLE1BQU07b0JBQ3ZCLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=