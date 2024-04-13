"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "replaceTokens", {
    enumerable: true,
    get: function() {
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
function replaceTokens(replacedChildNode, replacementTokens, context) {
    var _tokens;
    var tokens = context.tokens, nonTerminalNode = replacedChildNode, lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), start = firstSignificantTokenIndex, deleteCount = lastSignificantTokenIndex - firstSignificantTokenIndex; ///
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementTokens)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVRva2VucyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHJlcGxhY2VkQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IC0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG4iXSwibmFtZXMiOlsicmVwbGFjZVRva2VucyIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJjb250ZXh0IiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsU0FBU0EsY0FBY0MsaUJBQWlCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO1FBVXpFQztJQVRBLElBQU0sQUFBRUEsU0FBV0QsUUFBWEMsUUFDRkMsa0JBQWtCSixtQkFDbEJLLHVCQUF1QkQsZ0JBQWdCRSx1QkFBdUIsSUFDOURDLHdCQUF3QkgsZ0JBQWdCSSx3QkFBd0IsSUFDaEVDLDRCQUE0Qk4sT0FBT08sT0FBTyxDQUFDTCx1QkFDM0NNLDZCQUE2QlIsT0FBT08sT0FBTyxDQUFDSCx3QkFDNUNLLFFBQVFELDRCQUNSRSxjQUFjSiw0QkFBNEJFLDRCQUE0QixHQUFHO0lBRS9FUixDQUFBQSxVQUFBQSxRQUFPVyxNQUFNLENBQWJYLE1BQUFBLFNBQUFBO1FBQWNTO1FBQU9DO0tBQWtDLENBQXZEVixPQUFrQyxxQkFBR0Y7QUFDdkMifQ==