"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteAnchorHTMLNode;
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
class FootnoteAnchorHTMLNode extends _anchor.default {
    static fromIdentifier(identifier) {
        const prepend = _prepends.FOOTNOTE_PREPEND, footnoteAnchorHTMLNode = _html.default.fromNothing(FootnoteAnchorHTMLNode, prepend, identifier);
        return footnoteAnchorHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yL2Zvb3Rub3RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBGT09UTk9URV9QUkVQRU5EIH0gZnJvbSBcIi4uLy4uLy4uL3ByZXBlbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlQW5jaG9ySFRNTE5vZGUgZXh0ZW5kcyBBbmNob3JIVE1MTm9kZSB7XG4gIHN0YXRpYyBmcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFX1BSRVBFTkQsXG4gICAgICAgICAgZm9vdG5vdGVBbmNob3JIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKEZvb3Rub3RlQW5jaG9ySFRNTE5vZGUsIHByZXBlbmQsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlQW5jaG9ySFRNTE5vZGU7XG4gIH1cbn0iXSwibmFtZXMiOlsiRm9vdG5vdGVBbmNob3JIVE1MTm9kZSIsIkFuY2hvckhUTUxOb2RlIiwiZnJvbUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicHJlcGVuZCIsIkZPT1ROT1RFX1BSRVBFTkQiLCJmb290bm90ZUFuY2hvckhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7Ozs2REFMQTsrREFDTTswQkFFTTs7Ozs7O0FBRWxCLE1BQU1BLCtCQUErQkMsZUFBYztJQUNoRSxPQUFPQyxlQUFlQyxVQUFVLEVBQUU7UUFDaEMsTUFBTUMsVUFBVUMsMEJBQWdCLEVBQzFCQyx5QkFBeUJDLGFBQVEsQ0FBQ0MsV0FBVyxDQUFDUix3QkFBd0JJLFNBQVNEO1FBRXJGLE9BQU9HO0lBQ1Q7QUFDRiJ9