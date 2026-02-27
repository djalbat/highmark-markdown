"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLTabButton;
    }
});
const _tab = /*#__PURE__*/ _interop_require_default(require("../../button/tab"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HTMLTabButton extends _tab.default {
    childElements() {
        return "HTML";
    }
    parentContext() {
        const enableHTMLTabButton = this.enable.bind(this), disableHTMLTabButton = this.disable.bind(this); ///
        return {
            enableHTMLTabButton,
            disableHTMLTabButton
        };
    }
    static defaultProperties = {
        className: "html"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi9odG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUTUxUYWJCdXR0b24gZXh0ZW5kcyBUYWJCdXR0b24ge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIkhUTUxcIjtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlSFRNTFRhYkJ1dHRvbiA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGRpc2FibGVIVE1MVGFiQnV0dG9uID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlbmFibGVIVE1MVGFiQnV0dG9uLFxuICAgICAgZGlzYWJsZUhUTUxUYWJCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaHRtbFwiXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIVE1MVGFiQnV0dG9uIiwiVGFiQnV0dG9uIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJlbmFibGVIVE1MVGFiQnV0dG9uIiwiZW5hYmxlIiwiYmluZCIsImRpc2FibGVIVE1MVGFiQnV0dG9uIiwiZGlzYWJsZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzREQUZDOzs7Ozs7QUFFUCxNQUFNQSxzQkFBc0JDLFlBQVM7SUFDbERDLGdCQUFnQjtRQUNkLE9BQU87SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQzNDQyx1QkFBdUIsSUFBSSxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUV6RCxPQUFRO1lBQ05GO1lBQ0FHO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUM7QUFDSCJ9