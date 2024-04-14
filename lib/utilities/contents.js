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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIG5lc3ROb2Rlcyhub2Rlcykge1xuICBjb25zdCBuZXN0ZWROb2Rlc1N0YWNrID0gTmVzdGVkTm9kZVN0YWNrLmZyb21Ob3RoaW5nKCk7XG5cbiAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gbm9kZS5nZXRMZXZlbCgpO1xuXG4gICAgbGV0IG5lc3RlZE5vZGVzU3RhY2tMZXZlbCA9IG5lc3RlZE5vZGVzU3RhY2suZ2V0TGV2ZWwoKVxuXG4gICAgd2hpbGUgKG5lc3RlZE5vZGVzU3RhY2tMZXZlbCA8IGxldmVsKSB7XG4gICAgICBuZXN0ZWROb2Rlc1N0YWNrTGV2ZWwgPSBuZXN0ZWROb2Rlc1N0YWNrLmluY3JlbWVudCgpO1xuICAgIH1cblxuICAgIHdoaWxlIChuZXN0ZWROb2Rlc1N0YWNrTGV2ZWwgPiBsZXZlbCkge1xuICAgICAgbmVzdGVkTm9kZXNTdGFja0xldmVsID0gbmVzdGVkTm9kZXNTdGFjay5kZWNyZW1lbnQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXN0ZWROb2RlID0gTmVzdGVkTm9kZS5mcm9tTm9kZShub2RlKTtcblxuICAgIG5lc3RlZE5vZGVzU3RhY2suYWRkTmVzdGVkTm9kZShuZXN0ZWROb2RlKTtcbiAgfSk7XG5cbiAgY29uc3QgbmVzdGVkTm9kZSA9IG5lc3RlZE5vZGVzU3RhY2suZ2V0TmVzdGVkTm9kZSgpO1xuXG4gIHJldHVybiBuZXN0ZWROb2RlO1xufVxuXG5jbGFzcyBOZXN0ZWROb2RlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgY2hpbGROZXN0ZWROb2Rlcykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5jaGlsZE5lc3RlZE5vZGVzID0gY2hpbGROZXN0ZWROb2RlcztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTmVzdGVkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROZXN0ZWROb2RlcztcbiAgfVxuXG4gIGFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZSA9IG5lc3RlZE5vZGU7IC8vL1xuXG4gICAgdGhpcy5jaGlsZE5lc3RlZE5vZGVzLnB1c2goY2hpbGROZXN0ZWROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlKSB7XG4gICAgY29uc3QgY2hpbGROZXN0ZWROb2RlcyA9IFtdLFxuICAgICAgICAgIG5lc3RlZE5vZGUgPSBuZXcgTmVzdGVkTm9kZShub2RlLCBjaGlsZE5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBbXSxcbiAgICAgICAgICBuZXN0ZWROb2RlID0gbmV3IE5lc3RlZE5vZGUobm9kZSwgY2hpbGROZXN0ZWROb2Rlcyk7XG5cbiAgICByZXR1cm4gbmVzdGVkTm9kZTtcbiAgfVxufVxuXG5jbGFzcyBOZXN0ZWROb2RlU3RhY2sge1xuICBjb25zdHJ1Y3RvcihuZXN0ZWROb2Rlcykge1xuICAgIHRoaXMubmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlcztcbiAgfVxuXG4gIGdldE5lc3RlZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5lc3RlZE5vZGVzO1xuICB9XG5cbiAgZ2V0TGFzdE5lc3RlZE5vZGUoKSB7XG4gICAgY29uc3QgbGFzdE5lc3RlZE5vZGUgPSBsYXN0KHRoaXMubmVzdGVkTm9kZXMpO1xuXG4gICAgcmV0dXJuIGxhc3ROZXN0ZWROb2RlO1xuICB9XG5cbiAgZ2V0TmVzdGVkTm9kZSgpIHtcbiAgICBjb25zdCBmaXJzdE5lc3RlZE5vZGUgPSBmaXJzdCh0aGlzLm5lc3RlZE5vZGVzKSxcbiAgICAgICAgICBuZXN0ZWROb2RlID0gZmlyc3ROZXN0ZWROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbmVzdGVkTm9kZTtcbiAgfVxuXG4gIGdldExldmVsKCkge1xuICAgIGNvbnN0IG5lc3RlZE5vZGVzTGVuZ3RoID0gdGhpcy5uZXN0ZWROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgbGV2ZWwgPSBuZXN0ZWROb2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9XG5cbiAgaW5jcmVtZW50KCkge1xuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBOZXN0ZWROb2RlLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSk7XG5cbiAgICBjb25zdCBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcblxuICAgIHJldHVybiBsZXZlbDtcbiAgfVxuXG4gIGRlY3JlbWVudCgpIHtcbiAgICB0aGlzLnJlbW92ZU5lc3RlZE5vZGUoKTtcblxuICAgIGNvbnN0IGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9XG5cbiAgYWRkTmVzdGVkTm9kZShuZXN0ZWROb2RlKSB7XG4gICAgY29uc3QgbGFzdE5lc3RlZE5vZGUgPSB0aGlzLmdldExhc3ROZXN0ZWROb2RlKCk7XG5cbiAgICBsYXN0TmVzdGVkTm9kZS5hZGROZXN0ZWROb2RlKG5lc3RlZE5vZGUpO1xuXG4gICAgdGhpcy5uZXN0ZWROb2Rlcy5wdXNoKG5lc3RlZE5vZGUpO1xuICB9XG5cbiAgcmVtb3ZlTmVzdGVkTm9kZSgpIHtcbiAgICBjb25zdCBuZXN0ZWROb2RlID0gdGhpcy5uZXN0ZWROb2Rlcy5wb3AoKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBOZXN0ZWROb2RlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbmVzdGVkTm9kZXMgPSBbXG4gICAgICAgICAgICBuZXN0ZWROb2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBuZXN0ZWROb2Rlc1N0YWNrID0gbmV3IE5lc3RlZE5vZGVTdGFjayhuZXN0ZWROb2Rlcyk7XG5cbiAgICByZXR1cm4gbmVzdGVkTm9kZXNTdGFjaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm5lc3ROb2RlcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0Iiwibm9kZXMiLCJuZXN0ZWROb2Rlc1N0YWNrIiwiTmVzdGVkTm9kZVN0YWNrIiwiZnJvbU5vdGhpbmciLCJmb3JFYWNoIiwibm9kZSIsImxldmVsIiwiZ2V0TGV2ZWwiLCJuZXN0ZWROb2Rlc1N0YWNrTGV2ZWwiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJuZXN0ZWROb2RlIiwiTmVzdGVkTm9kZSIsImZyb21Ob2RlIiwiYWRkTmVzdGVkTm9kZSIsImdldE5lc3RlZE5vZGUiLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Tm9kZSIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJjaGlsZE5lc3RlZE5vZGUiLCJwdXNoIiwibmVzdGVkTm9kZXMiLCJnZXROZXN0ZWROb2RlcyIsImdldExhc3ROZXN0ZWROb2RlIiwibGFzdE5lc3RlZE5vZGUiLCJmaXJzdE5lc3RlZE5vZGUiLCJuZXN0ZWROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJlbW92ZU5lc3RlZE5vZGUiLCJwb3AiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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