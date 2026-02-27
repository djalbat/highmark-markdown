"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CSSTabButton;
    }
});
const _tab = /*#__PURE__*/ _interop_require_default(require("../../button/tab"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CSSTabButton extends _tab.default {
    childElements() {
        return "CSS";
    }
    parentContext() {
        const enableCSSTabButton = this.enable.bind(this), disableCSSTabButton = this.disable.bind(this); ///
        return {
            enableCSSTabButton,
            disableCSSTabButton
        };
    }
    static defaultProperties = {
        className: "css"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi9jc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1NTVGFiQnV0dG9uIGV4dGVuZHMgVGFiQnV0dG9uIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCJDU1NcIjtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlQ1NTVGFiQnV0dG9uID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZGlzYWJsZUNTU1RhYkJ1dHRvbiA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZW5hYmxlQ1NTVGFiQnV0dG9uLFxuICAgICAgZGlzYWJsZUNTU1RhYkJ1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjc3NcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiQ1NTVGFiQnV0dG9uIiwiVGFiQnV0dG9uIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJlbmFibGVDU1NUYWJCdXR0b24iLCJlbmFibGUiLCJiaW5kIiwiZGlzYWJsZUNTU1RhYkJ1dHRvbiIsImRpc2FibGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs0REFGQzs7Ozs7O0FBRVAsTUFBTUEscUJBQXFCQyxZQUFTO0lBQ2pEQyxnQkFBZ0I7UUFDZCxPQUFPO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMscUJBQXFCLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUMxQ0Msc0JBQXNCLElBQUksQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7UUFFeEQsT0FBUTtZQUNORjtZQUNBRztRQUNGO0lBQ0Y7SUFFQSxPQUFPRSxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFDO0FBQ0gifQ==