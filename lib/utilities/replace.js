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
    replaceNode: function() {
        return replaceNode;
    },
    replaceTokens: function() {
        return replaceTokens;
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
function replaceNode(replacementNode, replacedNode, parentNode) {
    var replacedChildNode = replacedNode, replacementChildNode = replacementNode; ///
    parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
}
function replaceTokens(replacementTokens, replacedNode, tokens) {
    var _tokens;
    var nonTerminalNode = replacedNode, lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1, deleteCount = end - start;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementTokens)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwbGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gcmVwbGFjZW1lbnROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHJlcGxhY2VkTm9kZSwgIC8vL1xuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG4iXSwibmFtZXMiOlsicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZWROb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJ0b2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLFdBQVc7ZUFBWEE7O0lBT0FDLGFBQWE7ZUFBYkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQVCxTQUFTRCxZQUFZRSxlQUFlLEVBQUVDLFlBQVksRUFBRUMsVUFBVTtJQUNuRSxJQUFNQyxvQkFBb0JGLGNBQ3BCRyx1QkFBdUJKLGlCQUFpQixHQUFHO0lBRWpERSxXQUFXRyxnQkFBZ0IsQ0FBQ0YsbUJBQW1CQztBQUNqRDtBQUVPLFNBQVNMLGNBQWNPLGlCQUFpQixFQUFFTCxZQUFZLEVBQUVNLE1BQU07UUFVbkVBO0lBVEEsSUFBTUMsa0JBQWtCUCxjQUNsQlEsdUJBQXVCRCxnQkFBZ0JFLHVCQUF1QixJQUM5REMsd0JBQXdCSCxnQkFBZ0JJLHdCQUF3QixJQUNoRUMsNEJBQTRCTixPQUFPTyxPQUFPLENBQUNMLHVCQUMzQ00sNkJBQTZCUixPQUFPTyxPQUFPLENBQUNILHdCQUM1Q0ssUUFBUUQsNEJBQ1JFLE1BQU1KLDRCQUE0QixHQUNsQ0ssY0FBY0QsTUFBTUQ7SUFFMUJULENBQUFBLFVBQUFBLFFBQU9ZLE1BQU0sQ0FBYlosTUFBQUEsU0FBQUE7UUFBY1M7UUFBT0U7S0FBa0MsQ0FBdkRYLE9BQWtDLHFCQUFHRDtBQUN2QyJ9