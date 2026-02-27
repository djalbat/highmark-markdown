"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsAnchorHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../html"));
const _anchor = /*#__PURE__*/ _interop_require_default(require("../../../node/html/anchor"));
const _prepends = require("../../../prepends");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentsAnchorHTMLNode extends _anchor.default {
    static fromIdentifier(identifier) {
        const prepend = _prepends.CONTENTS_PREPEND, contentsAnchorHTMLNode = _html.default.fromNothing(ContentsAnchorHTMLNode, prepend, identifier);
        return contentsAnchorHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19QUkVQRU5EIH0gZnJvbSBcIi4uLy4uLy4uL3ByZXBlbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzQW5jaG9ySFRNTE5vZGUgZXh0ZW5kcyBBbmNob3JIVE1MTm9kZSB7XG4gIHN0YXRpYyBmcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IENPTlRFTlRTX1BSRVBFTkQsXG4gICAgICAgICAgY29udGVudHNBbmNob3JIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKENvbnRlbnRzQW5jaG9ySFRNTE5vZGUsIHByZXBlbmQsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzQW5jaG9ySFRNTE5vZGU7XG4gIH1cbn0iXSwibmFtZXMiOlsiQ29udGVudHNBbmNob3JIVE1MTm9kZSIsIkFuY2hvckhUTUxOb2RlIiwiZnJvbUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicHJlcGVuZCIsIkNPTlRFTlRTX1BSRVBFTkQiLCJjb250ZW50c0FuY2hvckhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7Ozs2REFMQTsrREFDTTswQkFFTTs7Ozs7O0FBRWxCLE1BQU1BLCtCQUErQkMsZUFBYztJQUNoRSxPQUFPQyxlQUFlQyxVQUFVLEVBQUU7UUFDaEMsTUFBTUMsVUFBVUMsMEJBQWdCLEVBQzFCQyx5QkFBeUJDLGFBQVEsQ0FBQ0MsV0FBVyxDQUFDUix3QkFBd0JJLFNBQVNEO1FBRXJGLE9BQU9HO0lBQ1Q7QUFDRiJ9