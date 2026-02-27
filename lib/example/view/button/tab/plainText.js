"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextTabButton;
    }
});
const _tab = /*#__PURE__*/ _interop_require_default(require("../../button/tab"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PlainTextTabButton extends _tab.default {
    childElements() {
        return "PlainText";
    }
    parentContext() {
        const enablePlainTextTabButton = this.enable.bind(this), disablePlainTextTabButton = this.disable.bind(this); ///
        return {
            enablePlainTextTabButton,
            disablePlainTextTabButton
        };
    }
    static defaultProperties = {
        className: "plainText"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi9wbGFpblRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5UZXh0VGFiQnV0dG9uIGV4dGVuZHMgVGFiQnV0dG9uIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCJQbGFpblRleHRcIjtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlUGxhaW5UZXh0VGFiQnV0dG9uID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZGlzYWJsZVBsYWluVGV4dFRhYkJ1dHRvbiA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZW5hYmxlUGxhaW5UZXh0VGFiQnV0dG9uLFxuICAgICAgZGlzYWJsZVBsYWluVGV4dFRhYkJ1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwbGFpblRleHRcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiUGxhaW5UZXh0VGFiQnV0dG9uIiwiVGFiQnV0dG9uIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJlbmFibGVQbGFpblRleHRUYWJCdXR0b24iLCJlbmFibGUiLCJiaW5kIiwiZGlzYWJsZVBsYWluVGV4dFRhYkJ1dHRvbiIsImRpc2FibGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs0REFGQzs7Ozs7O0FBRVAsTUFBTUEsMkJBQTJCQyxZQUFTO0lBQ3ZEQyxnQkFBZ0I7UUFDZCxPQUFPO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNoREMsNEJBQTRCLElBQUksQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7UUFFOUQsT0FBUTtZQUNORjtZQUNBRztRQUNGO0lBQ0Y7SUFFQSxPQUFPRSxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFDO0FBQ0gifQ==