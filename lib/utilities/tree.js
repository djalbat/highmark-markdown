"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "nestNodes", {
    enumerable: true,
    get: function() {
        return nestNodes;
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
function nestNodes(nodes) {
    var nestedNodesStack = NestedNodeStack.fromNothing();
    nodes.forEach(function(node) {
        var level = node.getLevel();
        var nestedNodesStackLevel = nestedNodesStack.getLevel();
        while(nestedNodesStackLevel < level){
            nestedNodesStackLevel = nestedNodesStack.increment();
        }
        while(nestedNodesStackLevel > level){
            nestedNodesStackLevel = nestedNodesStack.decrement();
        }
        var nestedNode = NestedNode.fromNode(node);
        nestedNodesStack.addNestedNode(nestedNode);
    });
    var nestedNode = nestedNodesStack.getNestedNode();
    return nestedNode;
}
var NestedNode = /*#__PURE__*/ function() {
    function NestedNode(node, childNestedNodes) {
        _class_call_check(this, NestedNode);
        this.node = node;
        this.childNestedNodes = childNestedNodes;
    }
    _create_class(NestedNode, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
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
            key: "fromNode",
            value: function fromNode(node) {
                var childNestedNodes = [], nestedNode = new NestedNode(node, childNestedNodes);
                return nestedNode;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var node = null, childNestedNodes = [], nestedNode = new NestedNode(node, childNestedNodes);
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
            key: "getLevel",
            value: function getLevel() {
                var nestedNodesLength = this.nestedNodes.length, level = nestedNodesLength; ///
                return level;
            }
        },
        {
            key: "increment",
            value: function increment() {
                var nestedNode = NestedNode.fromNothing();
                this.addNestedNode(nestedNode);
                var level = this.getLevel();
                return level;
            }
        },
        {
            key: "decrement",
            value: function decrement() {
                this.removeNestedNode();
                var level = this.getLevel();
                return level;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbmVzdE5vZGVzKG5vZGVzKSB7XG4gIGNvbnN0IG5lc3RlZE5vZGVzU3RhY2sgPSBOZXN0ZWROb2RlU3RhY2suZnJvbU5vdGhpbmcoKTtcblxuICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSBub2RlLmdldExldmVsKCk7XG5cbiAgICBsZXQgbmVzdGVkTm9kZXNTdGFja0xldmVsID0gbmVzdGVkTm9kZXNTdGFjay5nZXRMZXZlbCgpXG5cbiAgICB3aGlsZSAobmVzdGVkTm9kZXNTdGFja0xldmVsIDwgbGV2ZWwpIHtcbiAgICAgIG5lc3RlZE5vZGVzU3RhY2tMZXZlbCA9IG5lc3RlZE5vZGVzU3RhY2suaW5jcmVtZW50KCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKG5lc3RlZE5vZGVzU3RhY2tMZXZlbCA+IGxldmVsKSB7XG4gICAgICBuZXN0ZWROb2Rlc1N0YWNrTGV2ZWwgPSBuZXN0ZWROb2Rlc1N0YWNrLmRlY3JlbWVudCgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBOZXN0ZWROb2RlLmZyb21Ob2RlKG5vZGUpO1xuXG4gICAgbmVzdGVkTm9kZXNTdGFjay5hZGROZXN0ZWROb2RlKG5lc3RlZE5vZGUpO1xuICB9KTtcblxuICBjb25zdCBuZXN0ZWROb2RlID0gbmVzdGVkTm9kZXNTdGFjay5nZXROZXN0ZWROb2RlKCk7XG5cbiAgcmV0dXJuIG5lc3RlZE5vZGU7XG59XG5cbmNsYXNzIE5lc3RlZE5vZGUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBjaGlsZE5lc3RlZE5vZGVzKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmNoaWxkTmVzdGVkTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0Q2hpbGROZXN0ZWROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5lc3RlZE5vZGVzO1xuICB9XG5cbiAgYWRkTmVzdGVkTm9kZShuZXN0ZWROb2RlKSB7XG4gICAgY29uc3QgY2hpbGROZXN0ZWROb2RlID0gbmVzdGVkTm9kZTsgLy8vXG5cbiAgICB0aGlzLmNoaWxkTmVzdGVkTm9kZXMucHVzaChjaGlsZE5lc3RlZE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5lc3RlZE5vZGVzID0gW10sXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5ldyBOZXN0ZWROb2RlKG5vZGUsIGNoaWxkTmVzdGVkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5lc3RlZE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IFtdLFxuICAgICAgICAgIG5lc3RlZE5vZGUgPSBuZXcgTmVzdGVkTm9kZShub2RlLCBjaGlsZE5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG59XG5cbmNsYXNzIE5lc3RlZE5vZGVTdGFjayB7XG4gIGNvbnN0cnVjdG9yKG5lc3RlZE5vZGVzKSB7XG4gICAgdGhpcy5uZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGVzO1xuICB9XG5cbiAgZ2V0TmVzdGVkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVzdGVkTm9kZXM7XG4gIH1cblxuICBnZXRMYXN0TmVzdGVkTm9kZSgpIHtcbiAgICBjb25zdCBsYXN0TmVzdGVkTm9kZSA9IGxhc3QodGhpcy5uZXN0ZWROb2Rlcyk7XG5cbiAgICByZXR1cm4gbGFzdE5lc3RlZE5vZGU7XG4gIH1cblxuICBnZXROZXN0ZWROb2RlKCkge1xuICAgIGNvbnN0IGZpcnN0TmVzdGVkTm9kZSA9IGZpcnN0KHRoaXMubmVzdGVkTm9kZXMpLFxuICAgICAgICAgIG5lc3RlZE5vZGUgPSBmaXJzdE5lc3RlZE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG5cbiAgZ2V0TGV2ZWwoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZXNMZW5ndGggPSB0aGlzLm5lc3RlZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBsZXZlbCA9IG5lc3RlZE5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IE5lc3RlZE5vZGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuYWRkTmVzdGVkTm9kZShuZXN0ZWROb2RlKTtcblxuICAgIGNvbnN0IGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9XG5cbiAgZGVjcmVtZW50KCkge1xuICAgIHRoaXMucmVtb3ZlTmVzdGVkTm9kZSgpO1xuXG4gICAgY29uc3QgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH1cblxuICBhZGROZXN0ZWROb2RlKG5lc3RlZE5vZGUpIHtcbiAgICBjb25zdCBsYXN0TmVzdGVkTm9kZSA9IHRoaXMuZ2V0TGFzdE5lc3RlZE5vZGUoKTtcblxuICAgIGxhc3ROZXN0ZWROb2RlLmFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSk7XG5cbiAgICB0aGlzLm5lc3RlZE5vZGVzLnB1c2gobmVzdGVkTm9kZSk7XG4gIH1cblxuICByZW1vdmVOZXN0ZWROb2RlKCkge1xuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSB0aGlzLm5lc3RlZE5vZGVzLnBvcCgpO1xuXG4gICAgcmV0dXJuIG5lc3RlZE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IE5lc3RlZE5vZGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuZXN0ZWROb2RlcyA9IFtcbiAgICAgICAgICAgIG5lc3RlZE5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIG5lc3RlZE5vZGVzU3RhY2sgPSBuZXcgTmVzdGVkTm9kZVN0YWNrKG5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2Rlc1N0YWNrO1xuICB9XG59XG4iXSwibmFtZXMiOlsibmVzdE5vZGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJub2RlcyIsIm5lc3RlZE5vZGVzU3RhY2siLCJOZXN0ZWROb2RlU3RhY2siLCJmcm9tTm90aGluZyIsImZvckVhY2giLCJub2RlIiwibGV2ZWwiLCJnZXRMZXZlbCIsIm5lc3RlZE5vZGVzU3RhY2tMZXZlbCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsIm5lc3RlZE5vZGUiLCJOZXN0ZWROb2RlIiwiZnJvbU5vZGUiLCJhZGROZXN0ZWROb2RlIiwiZ2V0TmVzdGVkTm9kZSIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXROb2RlIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsImNoaWxkTmVzdGVkTm9kZSIsInB1c2giLCJuZXN0ZWROb2RlcyIsImdldE5lc3RlZE5vZGVzIiwiZ2V0TGFzdE5lc3RlZE5vZGUiLCJsYXN0TmVzdGVkTm9kZSIsImZpcnN0TmVzdGVkTm9kZSIsIm5lc3RlZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmVtb3ZlTmVzdGVkTm9kZSIsInBvcCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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