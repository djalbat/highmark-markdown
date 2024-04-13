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
function nestNodes(nodes, levels) {
    var nestedNodesStack = NestedNodeStack.fromNothing();
    nodes.forEach(function(node, index) {
        var level = levels[index];
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
    var topmostNestedNodes = nestedNodesStack.getTopmostNestedNodes(), nestedNodes = topmostNestedNodes; ///
    return nestedNodes;
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
            key: "getTopmostNestedNodes",
            value: function getTopmostNestedNodes() {
                var firstNestedNode = first(this.nestedNodes), firstNestedNodeChildNestedNodes = firstNestedNode.getChildNestedNodes(), topmostNestedNodes = firstNestedNodeChildNestedNodes; ///
                return topmostNestedNodes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbmVzdE5vZGVzKG5vZGVzLCBsZXZlbHMpIHtcbiAgY29uc3QgbmVzdGVkTm9kZXNTdGFjayA9IE5lc3RlZE5vZGVTdGFjay5mcm9tTm90aGluZygpO1xuXG4gIG5vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSBsZXZlbHNbaW5kZXhdO1xuXG4gICAgbGV0IG5lc3RlZE5vZGVzU3RhY2tMZXZlbCA9IG5lc3RlZE5vZGVzU3RhY2suZ2V0TGV2ZWwoKVxuXG4gICAgd2hpbGUgKG5lc3RlZE5vZGVzU3RhY2tMZXZlbCA8IGxldmVsKSB7XG4gICAgICBuZXN0ZWROb2Rlc1N0YWNrTGV2ZWwgPSBuZXN0ZWROb2Rlc1N0YWNrLmluY3JlbWVudCgpO1xuICAgIH1cblxuICAgIHdoaWxlIChuZXN0ZWROb2Rlc1N0YWNrTGV2ZWwgPiBsZXZlbCkge1xuICAgICAgbmVzdGVkTm9kZXNTdGFja0xldmVsID0gbmVzdGVkTm9kZXNTdGFjay5kZWNyZW1lbnQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXN0ZWROb2RlID0gTmVzdGVkTm9kZS5mcm9tTm9kZShub2RlKTtcblxuICAgIG5lc3RlZE5vZGVzU3RhY2suYWRkTmVzdGVkTm9kZShuZXN0ZWROb2RlKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9wbW9zdE5lc3RlZE5vZGVzID0gbmVzdGVkTm9kZXNTdGFjay5nZXRUb3Btb3N0TmVzdGVkTm9kZXMoKSxcbiAgICAgICAgbmVzdGVkTm9kZXMgPSB0b3Btb3N0TmVzdGVkTm9kZXM7IC8vL1xuXG4gIHJldHVybiBuZXN0ZWROb2Rlcztcbn1cblxuY2xhc3MgTmVzdGVkTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGNoaWxkTmVzdGVkTm9kZXMpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuY2hpbGROZXN0ZWROb2RlcyA9IGNoaWxkTmVzdGVkTm9kZXM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRDaGlsZE5lc3RlZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTmVzdGVkTm9kZXM7XG4gIH1cblxuICBhZGROZXN0ZWROb2RlKG5lc3RlZE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5lc3RlZE5vZGUgPSBuZXN0ZWROb2RlOyAvLy9cblxuICAgIHRoaXMuY2hpbGROZXN0ZWROb2Rlcy5wdXNoKGNoaWxkTmVzdGVkTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZXMgPSBbXSxcbiAgICAgICAgICBuZXN0ZWROb2RlID0gbmV3IE5lc3RlZE5vZGUobm9kZSwgY2hpbGROZXN0ZWROb2Rlcyk7XG5cbiAgICByZXR1cm4gbmVzdGVkTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZE5lc3RlZE5vZGVzID0gW10sXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5ldyBOZXN0ZWROb2RlKG5vZGUsIGNoaWxkTmVzdGVkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5lc3RlZE5vZGU7XG4gIH1cbn1cblxuY2xhc3MgTmVzdGVkTm9kZVN0YWNrIHtcbiAgY29uc3RydWN0b3IobmVzdGVkTm9kZXMpIHtcbiAgICB0aGlzLm5lc3RlZE5vZGVzID0gbmVzdGVkTm9kZXM7XG4gIH1cblxuICBnZXROZXN0ZWROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5uZXN0ZWROb2RlcztcbiAgfVxuXG4gIGdldExhc3ROZXN0ZWROb2RlKCkge1xuICAgIGNvbnN0IGxhc3ROZXN0ZWROb2RlID0gbGFzdCh0aGlzLm5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBsYXN0TmVzdGVkTm9kZTtcbiAgfVxuXG4gIGdldFRvcG1vc3ROZXN0ZWROb2RlcygpIHtcbiAgICBjb25zdCBmaXJzdE5lc3RlZE5vZGUgPSBmaXJzdCh0aGlzLm5lc3RlZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdE5lc3RlZE5vZGVDaGlsZE5lc3RlZE5vZGVzID0gZmlyc3ROZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgICB0b3Btb3N0TmVzdGVkTm9kZXMgPSBmaXJzdE5lc3RlZE5vZGVDaGlsZE5lc3RlZE5vZGVzOyAvLy9cblxuICAgIHJldHVybiB0b3Btb3N0TmVzdGVkTm9kZXM7XG4gIH1cblxuICBnZXRMZXZlbCgpIHtcbiAgICBjb25zdCBuZXN0ZWROb2Rlc0xlbmd0aCA9IHRoaXMubmVzdGVkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGxldmVsID0gbmVzdGVkTm9kZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBsZXZlbDtcbiAgfVxuXG4gIGluY3JlbWVudCgpIHtcbiAgICBjb25zdCBuZXN0ZWROb2RlID0gTmVzdGVkTm9kZS5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5hZGROZXN0ZWROb2RlKG5lc3RlZE5vZGUpO1xuXG4gICAgY29uc3QgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH1cblxuICBkZWNyZW1lbnQoKSB7XG4gICAgdGhpcy5yZW1vdmVOZXN0ZWROb2RlKCk7XG5cbiAgICBjb25zdCBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcblxuICAgIHJldHVybiBsZXZlbDtcbiAgfVxuXG4gIGFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSkge1xuICAgIGNvbnN0IGxhc3ROZXN0ZWROb2RlID0gdGhpcy5nZXRMYXN0TmVzdGVkTm9kZSgpO1xuXG4gICAgbGFzdE5lc3RlZE5vZGUuYWRkTmVzdGVkTm9kZShuZXN0ZWROb2RlKTtcblxuICAgIHRoaXMubmVzdGVkTm9kZXMucHVzaChuZXN0ZWROb2RlKTtcbiAgfVxuXG4gIHJlbW92ZU5lc3RlZE5vZGUoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IHRoaXMubmVzdGVkTm9kZXMucG9wKCk7XG5cbiAgICByZXR1cm4gbmVzdGVkTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuZXN0ZWROb2RlID0gTmVzdGVkTm9kZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5lc3RlZE5vZGVzID0gW1xuICAgICAgICAgICAgbmVzdGVkTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbmVzdGVkTm9kZXNTdGFjayA9IG5ldyBOZXN0ZWROb2RlU3RhY2sobmVzdGVkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5lc3RlZE5vZGVzU3RhY2s7XG4gIH1cbn0iXSwibmFtZXMiOlsibmVzdE5vZGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJub2RlcyIsImxldmVscyIsIm5lc3RlZE5vZGVzU3RhY2siLCJOZXN0ZWROb2RlU3RhY2siLCJmcm9tTm90aGluZyIsImZvckVhY2giLCJub2RlIiwiaW5kZXgiLCJsZXZlbCIsIm5lc3RlZE5vZGVzU3RhY2tMZXZlbCIsImdldExldmVsIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwibmVzdGVkTm9kZSIsIk5lc3RlZE5vZGUiLCJmcm9tTm9kZSIsImFkZE5lc3RlZE5vZGUiLCJ0b3Btb3N0TmVzdGVkTm9kZXMiLCJnZXRUb3Btb3N0TmVzdGVkTm9kZXMiLCJuZXN0ZWROb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXROb2RlIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsImNoaWxkTmVzdGVkTm9kZSIsInB1c2giLCJnZXROZXN0ZWROb2RlcyIsImdldExhc3ROZXN0ZWROb2RlIiwibGFzdE5lc3RlZE5vZGUiLCJmaXJzdE5lc3RlZE5vZGUiLCJmaXJzdE5lc3RlZE5vZGVDaGlsZE5lc3RlZE5vZGVzIiwibmVzdGVkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyZW1vdmVOZXN0ZWROb2RlIiwicG9wIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWdCQTs7O2VBQUFBOzs7eUJBSmU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQVFDLFFBQWdCQyx5QkFBYyxDQUE5QkQsT0FBT0UsT0FBU0QseUJBQWMsQ0FBdkJDO0FBRVIsU0FBU0gsVUFBVUksS0FBSyxFQUFFQyxNQUFNO0lBQ3JDLElBQU1DLG1CQUFtQkMsZ0JBQWdCQyxXQUFXO0lBRXBESixNQUFNSyxPQUFPLENBQUMsU0FBQ0MsTUFBTUM7UUFDbkIsSUFBTUMsUUFBUVAsTUFBTSxDQUFDTSxNQUFNO1FBRTNCLElBQUlFLHdCQUF3QlAsaUJBQWlCUSxRQUFRO1FBRXJELE1BQU9ELHdCQUF3QkQsTUFBTztZQUNwQ0Msd0JBQXdCUCxpQkFBaUJTLFNBQVM7UUFDcEQ7UUFFQSxNQUFPRix3QkFBd0JELE1BQU87WUFDcENDLHdCQUF3QlAsaUJBQWlCVSxTQUFTO1FBQ3BEO1FBRUEsSUFBTUMsYUFBYUMsV0FBV0MsUUFBUSxDQUFDVDtRQUV2Q0osaUJBQWlCYyxhQUFhLENBQUNIO0lBQ2pDO0lBRUEsSUFBTUkscUJBQXFCZixpQkFBaUJnQixxQkFBcUIsSUFDM0RDLGNBQWNGLG9CQUFvQixHQUFHO0lBRTNDLE9BQU9FO0FBQ1Q7QUFFQSxJQUFBLEFBQU1MLDJCQUFELEFBQUw7YUFBTUEsV0FDUVIsSUFBSSxFQUFF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