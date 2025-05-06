"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "nestHTMLNodes", {
    enumerable: true,
    get: function() {
        return nestHTMLNodes;
    }
});
var _necessary = require("necessary");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last;
function nestHTMLNodes(htmlNodes) {
    var nestedNodesStack = NestedNodeStack.fromNothing();
    htmlNodes.forEach(function(htmlNode) {
        var depth = htmlNode.depth();
        var nestedNodesStackDepth = nestedNodesStack.getDepth();
        while(nestedNodesStackDepth < depth){
            nestedNodesStackDepth = nestedNodesStack.increment();
        }
        while(nestedNodesStackDepth > depth){
            nestedNodesStackDepth = nestedNodesStack.decrement();
        }
        var nestedNode = NestedNode.fromHTMLNode(htmlNode);
        nestedNodesStack.addNestedNode(nestedNode);
    });
    var nestedNode = nestedNodesStack.getNestedNode();
    return nestedNode;
}
var NestedNode = /*#__PURE__*/ function() {
    function NestedNode(htmlNode, childNestedNodes) {
        _class_call_check(this, NestedNode);
        this.htmlNode = htmlNode;
        this.childNestedNodes = childNestedNodes;
    }
    _create_class(NestedNode, [
        {
            key: "getHTMLNode",
            value: function getHTMLNode() {
                return this.htmlNode;
            }
        },
        {
            key: "getChildNestedNodes",
            value: function getChildNestedNodes() {
                return this.childNestedNodes;
            }
        },
        {
            key: "addNestedNode",
            value: function addNestedNode(nestedNode) {
                var childNestedNode = nestedNode; ///
                this.childNestedNodes.push(childNestedNode);
            }
        }
    ], [
        {
            key: "fromHTMLNode",
            value: function fromHTMLNode(htmlNode) {
                var childNestedNodes = [], nestedNode = new NestedNode(htmlNode, childNestedNodes);
                return nestedNode;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var htmlNode = null, childNestedNodes = [], nestedNode = new NestedNode(htmlNode, childNestedNodes);
                return nestedNode;
            }
        }
    ]);
    return NestedNode;
}();
var NestedNodeStack = /*#__PURE__*/ function() {
    function NestedNodeStack(nestedNodes) {
        _class_call_check(this, NestedNodeStack);
        this.nestedNodes = nestedNodes;
    }
    _create_class(NestedNodeStack, [
        {
            key: "getNestedNodes",
            value: function getNestedNodes() {
                return this.nestedNodes;
            }
        },
        {
            key: "getLastNestedNode",
            value: function getLastNestedNode() {
                var lastNestedNode = last(this.nestedNodes);
                return lastNestedNode;
            }
        },
        {
            key: "getNestedNode",
            value: function getNestedNode() {
                var firstNestedNode = first(this.nestedNodes), nestedNode = firstNestedNode; ///
                return nestedNode;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var nestedNodesLength = this.nestedNodes.length, depth = nestedNodesLength; ///
                return depth;
            }
        },
        {
            key: "increment",
            value: function increment() {
                var nestedNode = NestedNode.fromNothing();
                this.addNestedNode(nestedNode);
                var depth = this.getDepth();
                return depth;
            }
        },
        {
            key: "decrement",
            value: function decrement() {
                this.removeNestedNode();
                var depth = this.getDepth();
                return depth;
            }
        },
        {
            key: "addNestedNode",
            value: function addNestedNode(nestedNode) {
                var lastNestedNode = this.getLastNestedNode();
                lastNestedNode.addNestedNode(nestedNode);
                this.nestedNodes.push(nestedNode);
            }
        },
        {
            key: "removeNestedNode",
            value: function removeNestedNode() {
                var nestedNode = this.nestedNodes.pop();
                return nestedNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var nestedNode = NestedNode.fromNothing(), nestedNodes = [
                    nestedNode
                ], nestedNodesStack = new NestedNodeStack(nestedNodes);
                return nestedNodesStack;
            }
        }
    ]);
    return NestedNodeStack;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIG5lc3RIVE1MTm9kZXMoaHRtbE5vZGVzKSB7XG4gIGNvbnN0IG5lc3RlZE5vZGVzU3RhY2sgPSBOZXN0ZWROb2RlU3RhY2suZnJvbU5vdGhpbmcoKTtcblxuICBodG1sTm9kZXMuZm9yRWFjaCgoaHRtbE5vZGUpID0+IHtcbiAgICBjb25zdCBkZXB0aCA9IGh0bWxOb2RlLmRlcHRoKCk7XG5cbiAgICBsZXQgbmVzdGVkTm9kZXNTdGFja0RlcHRoID0gbmVzdGVkTm9kZXNTdGFjay5nZXREZXB0aCgpXG5cbiAgICB3aGlsZSAobmVzdGVkTm9kZXNTdGFja0RlcHRoIDwgZGVwdGgpIHtcbiAgICAgIG5lc3RlZE5vZGVzU3RhY2tEZXB0aCA9IG5lc3RlZE5vZGVzU3RhY2suaW5jcmVtZW50KCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKG5lc3RlZE5vZGVzU3RhY2tEZXB0aCA+IGRlcHRoKSB7XG4gICAgICBuZXN0ZWROb2Rlc1N0YWNrRGVwdGggPSBuZXN0ZWROb2Rlc1N0YWNrLmRlY3JlbWVudCgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBOZXN0ZWROb2RlLmZyb21IVE1MTm9kZShodG1sTm9kZSk7XG5cbiAgICBuZXN0ZWROb2Rlc1N0YWNrLmFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSk7XG4gIH0pO1xuXG4gIGNvbnN0IG5lc3RlZE5vZGUgPSBuZXN0ZWROb2Rlc1N0YWNrLmdldE5lc3RlZE5vZGUoKTtcblxuICByZXR1cm4gbmVzdGVkTm9kZTtcbn1cblxuY2xhc3MgTmVzdGVkTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGh0bWxOb2RlLCBjaGlsZE5lc3RlZE5vZGVzKSB7XG4gICAgdGhpcy5odG1sTm9kZSA9IGh0bWxOb2RlO1xuICAgIHRoaXMuY2hpbGROZXN0ZWROb2RlcyA9IGNoaWxkTmVzdGVkTm9kZXM7XG4gIH1cblxuICBnZXRIVE1MTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sTm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTmVzdGVkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROZXN0ZWROb2RlcztcbiAgfVxuXG4gIGFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZSA9IG5lc3RlZE5vZGU7IC8vL1xuXG4gICAgdGhpcy5jaGlsZE5lc3RlZE5vZGVzLnB1c2goY2hpbGROZXN0ZWROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTE5vZGUoaHRtbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5lc3RlZE5vZGVzID0gW10sXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5ldyBOZXN0ZWROb2RlKGh0bWxOb2RlLCBjaGlsZE5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZE5lc3RlZE5vZGVzID0gW10sXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5ldyBOZXN0ZWROb2RlKGh0bWxOb2RlLCBjaGlsZE5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG59XG5cbmNsYXNzIE5lc3RlZE5vZGVTdGFjayB7XG4gIGNvbnN0cnVjdG9yKG5lc3RlZE5vZGVzKSB7XG4gICAgdGhpcy5uZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGVzO1xuICB9XG5cbiAgZ2V0TmVzdGVkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVzdGVkTm9kZXM7XG4gIH1cblxuICBnZXRMYXN0TmVzdGVkTm9kZSgpIHtcbiAgICBjb25zdCBsYXN0TmVzdGVkTm9kZSA9IGxhc3QodGhpcy5uZXN0ZWROb2Rlcyk7XG5cbiAgICByZXR1cm4gbGFzdE5lc3RlZE5vZGU7XG4gIH1cblxuICBnZXROZXN0ZWROb2RlKCkge1xuICAgIGNvbnN0IGZpcnN0TmVzdGVkTm9kZSA9IGZpcnN0KHRoaXMubmVzdGVkTm9kZXMpLFxuICAgICAgICAgIG5lc3RlZE5vZGUgPSBmaXJzdE5lc3RlZE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZXNMZW5ndGggPSB0aGlzLm5lc3RlZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IG5lc3RlZE5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IE5lc3RlZE5vZGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuYWRkTmVzdGVkTm9kZShuZXN0ZWROb2RlKTtcblxuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZGVjcmVtZW50KCkge1xuICAgIHRoaXMucmVtb3ZlTmVzdGVkTm9kZSgpO1xuXG4gICAgY29uc3QgZGVwdGggPSB0aGlzLmdldERlcHRoKCk7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBhZGROZXN0ZWROb2RlKG5lc3RlZE5vZGUpIHtcbiAgICBjb25zdCBsYXN0TmVzdGVkTm9kZSA9IHRoaXMuZ2V0TGFzdE5lc3RlZE5vZGUoKTtcblxuICAgIGxhc3ROZXN0ZWROb2RlLmFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSk7XG5cbiAgICB0aGlzLm5lc3RlZE5vZGVzLnB1c2gobmVzdGVkTm9kZSk7XG4gIH1cblxuICByZW1vdmVOZXN0ZWROb2RlKCkge1xuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSB0aGlzLm5lc3RlZE5vZGVzLnBvcCgpO1xuXG4gICAgcmV0dXJuIG5lc3RlZE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IE5lc3RlZE5vZGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuZXN0ZWROb2RlcyA9IFtcbiAgICAgICAgICAgIG5lc3RlZE5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIG5lc3RlZE5vZGVzU3RhY2sgPSBuZXcgTmVzdGVkTm9kZVN0YWNrKG5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2Rlc1N0YWNrO1xuICB9XG59XG4iXSwibmFtZXMiOlsibmVzdEhUTUxOb2RlcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwiaHRtbE5vZGVzIiwibmVzdGVkTm9kZXNTdGFjayIsIk5lc3RlZE5vZGVTdGFjayIsImZyb21Ob3RoaW5nIiwiZm9yRWFjaCIsImh0bWxOb2RlIiwiZGVwdGgiLCJuZXN0ZWROb2Rlc1N0YWNrRGVwdGgiLCJnZXREZXB0aCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsIm5lc3RlZE5vZGUiLCJOZXN0ZWROb2RlIiwiZnJvbUhUTUxOb2RlIiwiYWRkTmVzdGVkTm9kZSIsImdldE5lc3RlZE5vZGUiLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0SFRNTE5vZGUiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlIiwicHVzaCIsIm5lc3RlZE5vZGVzIiwiZ2V0TmVzdGVkTm9kZXMiLCJnZXRMYXN0TmVzdGVkTm9kZSIsImxhc3ROZXN0ZWROb2RlIiwiZmlyc3ROZXN0ZWROb2RlIiwibmVzdGVkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyZW1vdmVOZXN0ZWROb2RlIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNZ0JBOzs7ZUFBQUE7Ozt5QkFKZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFB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