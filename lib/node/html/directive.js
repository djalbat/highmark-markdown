"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectiveHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DirectiveHTMLNode extends _html.default {
    mount(parentDOMElement, siblingDOMElement, context) {
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
    ///
    }
    asHTML(indent, context) {
        const html = _constants.EMPTY_STRING;
        return html;
    }
    asPlainText(context) {
        const plainText = _constants.EMPTY_STRING;
        return plainText;
    }
    static fromNothing(Class) {
        return _html.default.fromNothing(Class);
    }
    static fromOuterNode(Class, outerNode) {
        return _html.default.fromOuterNode(Class, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGlyZWN0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGl2ZUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIC8vL1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhDbGFzcyk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlSFRNTE5vZGUiLCJIVE1MTm9kZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsInVubW91bnQiLCJhc0hUTUwiLCJpbmRlbnQiLCJodG1sIiwiRU1QVFlfU1RSSU5HIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs2REFKQTsyQkFFUTs7Ozs7O0FBRWQsTUFBTUEsMEJBQTBCQyxhQUFRO0lBQ3JEQyxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU8sRUFBRTtRQUNsRCxPQUFPRDtJQUNUO0lBRUFFLFFBQVFILGdCQUFnQixFQUFFO0lBQ3hCLEdBQUc7SUFDTDtJQUVBSSxPQUFPQyxNQUFNLEVBQUVILE9BQU8sRUFBRTtRQUN0QixNQUFNSSxPQUFPQyx1QkFBWTtRQUV6QixPQUFPRDtJQUNUO0lBRUFFLFlBQVlOLE9BQU8sRUFBRTtRQUNuQixNQUFNTyxZQUFZRix1QkFBWTtRQUU5QixPQUFPRTtJQUNUO0lBRUEsT0FBT0MsWUFBWUMsS0FBSyxFQUFFO1FBQUUsT0FBT2IsYUFBUSxDQUFDWSxXQUFXLENBQUNDO0lBQVE7SUFFaEUsT0FBT0MsY0FBY0QsS0FBSyxFQUFFRSxTQUFTLEVBQUU7UUFBRSxPQUFPZixhQUFRLENBQUNjLGFBQWEsQ0FBQ0QsT0FBT0U7SUFBWTtBQUM1RiJ9