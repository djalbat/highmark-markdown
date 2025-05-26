"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get insertAfter () {
        return insertAfter;
    }
});
function insertAfter(domElement, parentDOMElement, siblingDOMElement) {
    var nextSiblingDOMElement = siblingDOMElement !== null ? siblingDOMElement.nextSibling : parentDOMElement.firstChild; ///
    parentDOMElement.insertBefore(domElement, nextSiblingDOMElement);
}
var _default = {
    insertAfter: insertAfter
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIHtcbiAgY29uc3QgbmV4dFNpYmxpbmdET01FbGVtZW50ID0gKHNpYmxpbmdET01FbGVtZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDsgLy8vXG5cbiAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbmV4dFNpYmxpbmdET01FbGVtZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbnNlcnRBZnRlclxufTtcbiJdLCJuYW1lcyI6WyJpbnNlcnRBZnRlciIsImRvbUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJuZXh0U2libGluZ0RPTUVsZW1lbnQiLCJuZXh0U2libGluZyIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVVBO2VBQUE7O1FBUmdCQTtlQUFBQTs7O0FBQVQsU0FBU0EsWUFBWUMsVUFBVSxFQUFFQyxnQkFBZ0IsRUFBRUMsaUJBQWlCO0lBQ3pFLElBQU1DLHdCQUF3QixBQUFDRCxzQkFBc0IsT0FDcEJBLGtCQUFrQkUsV0FBVyxHQUMzQkgsaUJBQWlCSSxVQUFVLEVBQUUsR0FBRztJQUVuRUosaUJBQWlCSyxZQUFZLENBQUNOLFlBQVlHO0FBQzVDO0lBRUEsV0FBZTtJQUNiSixhQUFBQTtBQUNGIn0=