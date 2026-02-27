"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PreviewTabButton;
    }
});
const _tab = /*#__PURE__*/ _interop_require_default(require("../../button/tab"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PreviewTabButton extends _tab.default {
    childElements() {
        return "Preview";
    }
    parentContext() {
        const enablePreviewTabButton = this.enable.bind(this), disablePreviewTabButton = this.disable.bind(this); ///
        return {
            enablePreviewTabButton,
            disablePreviewTabButton
        };
    }
    static defaultProperties = {
        className: "preview"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi9wcmV2aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZXZpZXdUYWJCdXR0b24gZXh0ZW5kcyBUYWJCdXR0b24ge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIlByZXZpZXdcIjtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlUHJldmlld1RhYkJ1dHRvbiA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGRpc2FibGVQcmV2aWV3VGFiQnV0dG9uID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlbmFibGVQcmV2aWV3VGFiQnV0dG9uLFxuICAgICAgZGlzYWJsZVByZXZpZXdUYWJCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldmlld1wiXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmV2aWV3VGFiQnV0dG9uIiwiVGFiQnV0dG9uIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJlbmFibGVQcmV2aWV3VGFiQnV0dG9uIiwiZW5hYmxlIiwiYmluZCIsImRpc2FibGVQcmV2aWV3VGFiQnV0dG9uIiwiZGlzYWJsZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzREQUZDOzs7Ozs7QUFFUCxNQUFNQSx5QkFBeUJDLFlBQVM7SUFDckRDLGdCQUFnQjtRQUNkLE9BQU87SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyx5QkFBeUIsSUFBSSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQzlDQywwQkFBMEIsSUFBSSxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUU1RCxPQUFRO1lBQ05GO1lBQ0FHO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUM7QUFDSCJ9