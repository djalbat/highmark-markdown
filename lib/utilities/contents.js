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
const _necessary = require("necessary");
const { first, last } = _necessary.arrayUtilities;
function nestHTMLNodes(htmlNodes) {
    const nestedNodesStack = NestedNodeStack.fromNothing();
    htmlNodes.forEach((htmlNode)=>{
        const depth = htmlNode.depth();
        let nestedNodesStackDepth = nestedNodesStack.getDepth();
        while(nestedNodesStackDepth < depth){
            nestedNodesStackDepth = nestedNodesStack.increment();
        }
        while(nestedNodesStackDepth > depth){
            nestedNodesStackDepth = nestedNodesStack.decrement();
        }
        const nestedNode = NestedNode.fromHTMLNode(htmlNode);
        nestedNodesStack.addNestedNode(nestedNode);
    });
    const nestedNode = nestedNodesStack.getNestedNode();
    return nestedNode;
}
class NestedNode {
    constructor(htmlNode, childNestedNodes){
        this.htmlNode = htmlNode;
        this.childNestedNodes = childNestedNodes;
    }
    getHTMLNode() {
        return this.htmlNode;
    }
    getChildNestedNodes() {
        return this.childNestedNodes;
    }
    addNestedNode(nestedNode) {
        const childNestedNode = nestedNode; ///
        this.childNestedNodes.push(childNestedNode);
    }
    static fromHTMLNode(htmlNode) {
        const childNestedNodes = [], nestedNode = new NestedNode(htmlNode, childNestedNodes);
        return nestedNode;
    }
    static fromNothing() {
        const htmlNode = null, childNestedNodes = [], nestedNode = new NestedNode(htmlNode, childNestedNodes);
        return nestedNode;
    }
}
class NestedNodeStack {
    constructor(nestedNodes){
        this.nestedNodes = nestedNodes;
    }
    getNestedNodes() {
        return this.nestedNodes;
    }
    getLastNestedNode() {
        const lastNestedNode = last(this.nestedNodes);
        return lastNestedNode;
    }
    getNestedNode() {
        const firstNestedNode = first(this.nestedNodes), nestedNode = firstNestedNode; ///
        return nestedNode;
    }
    getDepth() {
        const nestedNodesLength = this.nestedNodes.length, depth = nestedNodesLength; ///
        return depth;
    }
    increment() {
        const nestedNode = NestedNode.fromNothing();
        this.addNestedNode(nestedNode);
        const depth = this.getDepth();
        return depth;
    }
    decrement() {
        this.removeNestedNode();
        const depth = this.getDepth();
        return depth;
    }
    addNestedNode(nestedNode) {
        const lastNestedNode = this.getLastNestedNode();
        lastNestedNode.addNestedNode(nestedNode);
        this.nestedNodes.push(nestedNode);
    }
    removeNestedNode() {
        const nestedNode = this.nestedNodes.pop();
        return nestedNode;
    }
    static fromNothing() {
        const nestedNode = NestedNode.fromNothing(), nestedNodes = [
            nestedNode
        ], nestedNodesStack = new NestedNodeStack(nestedNodes);
        return nestedNodesStack;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIG5lc3RIVE1MTm9kZXMoaHRtbE5vZGVzKSB7XG4gIGNvbnN0IG5lc3RlZE5vZGVzU3RhY2sgPSBOZXN0ZWROb2RlU3RhY2suZnJvbU5vdGhpbmcoKTtcblxuICBodG1sTm9kZXMuZm9yRWFjaCgoaHRtbE5vZGUpID0+IHtcbiAgICBjb25zdCBkZXB0aCA9IGh0bWxOb2RlLmRlcHRoKCk7XG5cbiAgICBsZXQgbmVzdGVkTm9kZXNTdGFja0RlcHRoID0gbmVzdGVkTm9kZXNTdGFjay5nZXREZXB0aCgpXG5cbiAgICB3aGlsZSAobmVzdGVkTm9kZXNTdGFja0RlcHRoIDwgZGVwdGgpIHtcbiAgICAgIG5lc3RlZE5vZGVzU3RhY2tEZXB0aCA9IG5lc3RlZE5vZGVzU3RhY2suaW5jcmVtZW50KCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKG5lc3RlZE5vZGVzU3RhY2tEZXB0aCA+IGRlcHRoKSB7XG4gICAgICBuZXN0ZWROb2Rlc1N0YWNrRGVwdGggPSBuZXN0ZWROb2Rlc1N0YWNrLmRlY3JlbWVudCgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBOZXN0ZWROb2RlLmZyb21IVE1MTm9kZShodG1sTm9kZSk7XG5cbiAgICBuZXN0ZWROb2Rlc1N0YWNrLmFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSk7XG4gIH0pO1xuXG4gIGNvbnN0IG5lc3RlZE5vZGUgPSBuZXN0ZWROb2Rlc1N0YWNrLmdldE5lc3RlZE5vZGUoKTtcblxuICByZXR1cm4gbmVzdGVkTm9kZTtcbn1cblxuY2xhc3MgTmVzdGVkTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGh0bWxOb2RlLCBjaGlsZE5lc3RlZE5vZGVzKSB7XG4gICAgdGhpcy5odG1sTm9kZSA9IGh0bWxOb2RlO1xuICAgIHRoaXMuY2hpbGROZXN0ZWROb2RlcyA9IGNoaWxkTmVzdGVkTm9kZXM7XG4gIH1cblxuICBnZXRIVE1MTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sTm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTmVzdGVkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROZXN0ZWROb2RlcztcbiAgfVxuXG4gIGFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZSA9IG5lc3RlZE5vZGU7IC8vL1xuXG4gICAgdGhpcy5jaGlsZE5lc3RlZE5vZGVzLnB1c2goY2hpbGROZXN0ZWROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTE5vZGUoaHRtbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5lc3RlZE5vZGVzID0gW10sXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5ldyBOZXN0ZWROb2RlKGh0bWxOb2RlLCBjaGlsZE5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZE5lc3RlZE5vZGVzID0gW10sXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5ldyBOZXN0ZWROb2RlKGh0bWxOb2RlLCBjaGlsZE5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG59XG5cbmNsYXNzIE5lc3RlZE5vZGVTdGFjayB7XG4gIGNvbnN0cnVjdG9yKG5lc3RlZE5vZGVzKSB7XG4gICAgdGhpcy5uZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGVzO1xuICB9XG5cbiAgZ2V0TmVzdGVkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVzdGVkTm9kZXM7XG4gIH1cblxuICBnZXRMYXN0TmVzdGVkTm9kZSgpIHtcbiAgICBjb25zdCBsYXN0TmVzdGVkTm9kZSA9IGxhc3QodGhpcy5uZXN0ZWROb2Rlcyk7XG5cbiAgICByZXR1cm4gbGFzdE5lc3RlZE5vZGU7XG4gIH1cblxuICBnZXROZXN0ZWROb2RlKCkge1xuICAgIGNvbnN0IGZpcnN0TmVzdGVkTm9kZSA9IGZpcnN0KHRoaXMubmVzdGVkTm9kZXMpLFxuICAgICAgICAgIG5lc3RlZE5vZGUgPSBmaXJzdE5lc3RlZE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBuZXN0ZWROb2RlO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZXNMZW5ndGggPSB0aGlzLm5lc3RlZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IG5lc3RlZE5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IE5lc3RlZE5vZGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuYWRkTmVzdGVkTm9kZShuZXN0ZWROb2RlKTtcblxuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZGVjcmVtZW50KCkge1xuICAgIHRoaXMucmVtb3ZlTmVzdGVkTm9kZSgpO1xuXG4gICAgY29uc3QgZGVwdGggPSB0aGlzLmdldERlcHRoKCk7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBhZGROZXN0ZWROb2RlKG5lc3RlZE5vZGUpIHtcbiAgICBjb25zdCBsYXN0TmVzdGVkTm9kZSA9IHRoaXMuZ2V0TGFzdE5lc3RlZE5vZGUoKTtcblxuICAgIGxhc3ROZXN0ZWROb2RlLmFkZE5lc3RlZE5vZGUobmVzdGVkTm9kZSk7XG5cbiAgICB0aGlzLm5lc3RlZE5vZGVzLnB1c2gobmVzdGVkTm9kZSk7XG4gIH1cblxuICByZW1vdmVOZXN0ZWROb2RlKCkge1xuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSB0aGlzLm5lc3RlZE5vZGVzLnBvcCgpO1xuXG4gICAgcmV0dXJuIG5lc3RlZE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IE5lc3RlZE5vZGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuZXN0ZWROb2RlcyA9IFtcbiAgICAgICAgICAgIG5lc3RlZE5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIG5lc3RlZE5vZGVzU3RhY2sgPSBuZXcgTmVzdGVkTm9kZVN0YWNrKG5lc3RlZE5vZGVzKTtcblxuICAgIHJldHVybiBuZXN0ZWROb2Rlc1N0YWNrO1xuICB9XG59XG4iXSwibmFtZXMiOlsibmVzdEhUTUxOb2RlcyIsImZpcnN0IiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiaHRtbE5vZGVzIiwibmVzdGVkTm9kZXNTdGFjayIsIk5lc3RlZE5vZGVTdGFjayIsImZyb21Ob3RoaW5nIiwiZm9yRWFjaCIsImh0bWxOb2RlIiwiZGVwdGgiLCJuZXN0ZWROb2Rlc1N0YWNrRGVwdGgiLCJnZXREZXB0aCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsIm5lc3RlZE5vZGUiLCJOZXN0ZWROb2RlIiwiZnJvbUhUTUxOb2RlIiwiYWRkTmVzdGVkTm9kZSIsImdldE5lc3RlZE5vZGUiLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0SFRNTE5vZGUiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlIiwicHVzaCIsIm5lc3RlZE5vZGVzIiwiZ2V0TmVzdGVkTm9kZXMiLCJnZXRMYXN0TmVzdGVkTm9kZSIsImxhc3ROZXN0ZWROb2RlIiwiZmlyc3ROZXN0ZWROb2RlIiwibmVzdGVkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyZW1vdmVOZXN0ZWROb2RlIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNZ0JBOzs7ZUFBQUE7OzsyQkFKZTtBQUUvQixNQUFNLEVBQUVDLEtBQUssRUFBRUMs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