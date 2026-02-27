"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexAnchorHTMLNode;
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
class IndexAnchorHTMLNode extends _anchor.default {
    static fromIdentifier(identifier) {
        const prepend = _prepends.INDEX_PREPEND, indexAnchorHTMLNode = _html.default.fromNothing(IndexAnchorHTMLNode, prepend, identifier);
        return indexAnchorHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBJTkRFWF9QUkVQRU5EIH0gZnJvbSBcIi4uLy4uLy4uL3ByZXBlbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4QW5jaG9ySFRNTE5vZGUgZXh0ZW5kcyBBbmNob3JIVE1MTm9kZSB7XG4gIHN0YXRpYyBmcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IElOREVYX1BSRVBFTkQsXG4gICAgICAgICAgaW5kZXhBbmNob3JIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKEluZGV4QW5jaG9ySFRNTE5vZGUsIHByZXBlbmQsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGluZGV4QW5jaG9ySFRNTE5vZGU7XG4gIH1cbn0iXSwibmFtZXMiOlsiSW5kZXhBbmNob3JIVE1MTm9kZSIsIkFuY2hvckhUTUxOb2RlIiwiZnJvbUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicHJlcGVuZCIsIklOREVYX1BSRVBFTkQiLCJpbmRleEFuY2hvckhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7Ozs2REFMQTsrREFDTTswQkFFRzs7Ozs7O0FBRWYsTUFBTUEsNEJBQTRCQyxlQUFjO0lBQzdELE9BQU9DLGVBQWVDLFVBQVUsRUFBRTtRQUNoQyxNQUFNQyxVQUFVQyx1QkFBYSxFQUN2QkMsc0JBQXNCQyxhQUFRLENBQUNDLFdBQVcsQ0FBQ1IscUJBQXFCSSxTQUFTRDtRQUUvRSxPQUFPRztJQUNUO0FBQ0YifQ==