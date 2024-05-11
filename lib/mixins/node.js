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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function removeChildNode(childNode) {
    var childNodes = this.getChildNodes(), index = childNodes.indexOf(childNode), start = index, deleteCount = 1;
    childNodes.splice(start, deleteCount);
}
function prependChildNode(childNode) {
    var childNodes = this.getChildNodes();
    childNodes.unshift(childNode);
}
function appendChildNode(childNode) {
    var childNodes = this.getChildNodes();
    childNodes.push(childNode);
}
function replaceChildNodes(replacedChildNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = this.getChildNodes(), index = childNodes.indexOf(replacedChildNode), start = index, deleteCount = 1;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}
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
    removeChildNode: removeChildNode,
    appendChildNode: appendChildNode,
    prependChildNode: prependChildNode,
    replaceChildNodes: replaceChildNodes,
    getDescendantNodes: getDescendantNodes
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLnVuc2hpZnQoY2hpbGROb2RlKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGVzKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY2VuZGFudE5vZGVzKGRlc2NlbmRhbnROb2RlcyA9IFtdKSB7XG4gIGNvbnN0IGRlc2NlbmRhbnROb2RlID0gdGhpczsgLy8vXG5cbiAgZGVzY2VuZGFudE5vZGVzLnB1c2goZGVzY2VuZGFudE5vZGUpO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZS5nZXREZXNjZW5kYW50Tm9kZXMoZGVzY2VuZGFudE5vZGVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjZW5kYW50Tm9kZXM7XG59XG5cbmNvbnN0IG5vZGVNaXhpbnMgPSB7XG4gIHJlbW92ZUNoaWxkTm9kZSxcbiAgYXBwZW5kQ2hpbGROb2RlLFxuICBwcmVwZW5kQ2hpbGROb2RlLFxuICByZXBsYWNlQ2hpbGROb2RlcyxcbiAgZ2V0RGVzY2VuZGFudE5vZGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlTWl4aW5zO1xuIl0sIm5hbWVzIjpbInJlbW92ZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInByZXBlbmRDaGlsZE5vZGUiLCJ1bnNoaWZ0IiwiYXBwZW5kQ2hpbGROb2RlIiwicHVzaCIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJnZXREZXNjZW5kYW50Tm9kZXMiLCJkZXNjZW5kYW50Tm9kZXMiLCJkZXNjZW5kYW50Tm9kZSIsImZvckVhY2giLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vZGVNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNERBOzs7ZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTFEQSxTQUFTQSxnQkFBZ0JDLFNBQVM7SUFDaEMsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLFFBQVFGLFdBQVdHLE9BQU8sQ0FBQ0osWUFDM0JLLFFBQVFGLE9BQ1JHLGNBQWM7SUFFcEJMLFdBQVdNLE1BQU0sQ0FBQ0YsT0FBT0M7QUFDM0I7QUFFQSxTQUFTRSxpQkFBaUJSLFNBQVM7SUFDakMsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckNELFdBQVdRLE9BQU8sQ0FBQ1Q7QUFDckI7QUFFQSxTQUFTVSxnQkFBZ0JWLFNBQVM7SUFDaEMsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckNELFdBQVdVLElBQUksQ0FBQ1g7QUFDbEI7QUFFQSxTQUFTWSxrQkFBa0JDLGlCQUFpQixFQUFFQyxxQkFBcUI7UUFNakViO0lBTEEsSUFBTUEsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLFFBQVFGLFdBQVdHLE9BQU8sQ0FBQ1Msb0JBQzNCUixRQUFRRixPQUNSRyxjQUFjO0lBRXBCTCxDQUFBQSxjQUFBQSxZQUFXTSxNQUFNLENBQWpCTixNQUFBQSxhQUFBQTtRQUFrQkk7UUFBT0M7S0FBc0MsQ0FBL0RMLE9BQXNDLHFCQUFHYTtBQUMzQztBQUVBLFNBQVNDO1FBQW1CQyxrQkFBQUEsaUVBQWtCLEVBQUU7SUFDOUMsSUFBTUMsaUJBQWlCLElBQUksRUFBRSxHQUFHO0lBRWhDRCxnQkFBZ0JMLElBQUksQ0FBQ007SUFFckIsSUFBTWhCLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXaUIsT0FBTyxDQUFDLFNBQUNsQjtRQUNsQixJQUFNbUIsMkJBQTJCbkIsVUFBVW9CLGlCQUFpQjtRQUU1RCxJQUFJRCwwQkFBMEI7WUFDNUIsSUFBTUUsa0JBQWtCckIsV0FBWSxHQUFHO1lBRXZDcUIsZ0JBQWdCTixrQkFBa0IsQ0FBQ0M7UUFDckM7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxJQUFNTSxhQUFhO0lBQ2pCdkIsaUJBQUFBO0lBQ0FXLGlCQUFBQTtJQUNBRixrQkFBQUE7SUFDQUksbUJBQUFBO0lBQ0FHLG9CQUFBQTtBQUNGO0lBRUEsV0FBZU8ifQ==