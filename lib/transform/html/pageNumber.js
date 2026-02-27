"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageNumberTMLTransform;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
const _pageNumber = /*#__PURE__*/ _interop_require_default(require("../../node/html/pageNumber"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PageNumberTMLTransform extends _html.default {
    getPageNumberHTMLNode() {
        const htmlNode = this.getHTMLNode(), pageNumberHTMLNode = htmlNode; ///
        return pageNumberHTMLNode;
    }
    appendToDivisionHTMLNode(divisionHTMLNode) {
        const parentHTMLNode = divisionHTMLNode; ///
        this.appendTo(parentHTMLNode);
    }
    static fromPageNumber(pageNumber) {
        const pageNumberHTMLNode = _pageNumber.default.fromPageNumber(pageNumber), htmlNode = pageNumberHTMLNode, paragraphHTMLTransform = _html.default.fromHTMLNode(PageNumberTMLTransform, htmlNode);
        return paragraphHTMLTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9wYWdlTnVtYmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU51bWJlclRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRQYWdlTnVtYmVySFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgcGFnZU51bWJlckhUTUxOb2RlID0gaHRtbE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBwYWdlTnVtYmVySFRNTE5vZGU7XG4gIH1cblxuICBhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudEhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5hcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJIVE1MTm9kZSA9IFBhZ2VOdW1iZXJIVE1MTm9kZS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSxcbiAgICAgICAgICBodG1sTm9kZSA9IHBhZ2VOdW1iZXJIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgcGFyYWdyYXBoSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKFBhZ2VOdW1iZXJUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFnZU51bWJlclRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJnZXRQYWdlTnVtYmVySFRNTE5vZGUiLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwicGFnZU51bWJlckhUTUxOb2RlIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZSIsInBhcmVudEhUTUxOb2RlIiwiYXBwZW5kVG8iLCJmcm9tUGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJQYWdlTnVtYmVySFRNTE5vZGUiLCJwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7OzZEQUhLO21FQUNLOzs7Ozs7QUFFaEIsTUFBTUEsK0JBQStCQyxhQUFhO0lBQy9EQyx3QkFBd0I7UUFDdEIsTUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLHFCQUFxQkYsVUFBVyxHQUFHO1FBRXpDLE9BQU9FO0lBQ1Q7SUFFQUMseUJBQXlCQyxnQkFBZ0IsRUFBRTtRQUN6QyxNQUFNQyxpQkFBaUJELGtCQUFtQixHQUFHO1FBRTdDLElBQUksQ0FBQ0UsUUFBUSxDQUFDRDtJQUNoQjtJQUVBLE9BQU9FLGVBQWVDLFVBQVUsRUFBRTtRQUNoQyxNQUFNTixxQkFBcUJPLG1CQUFrQixDQUFDRixjQUFjLENBQUNDLGFBQ3ZEUixXQUFXRSxvQkFDWFEseUJBQXlCWixhQUFhLENBQUNhLFlBQVksQ0FBQ2Qsd0JBQXdCRztRQUVsRixPQUFPVTtJQUNUO0FBQ0YifQ==