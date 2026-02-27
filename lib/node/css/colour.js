"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColourCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ColourCSSNode extends _css.default {
    content() {
        const markdownStyleNode = this.getMarkdownStyleNode(), content = markdownStyleNode.content();
        return content;
    }
    asCSS(context) {
        const content = this.content(), css = content; ///
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(ColourCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(ColourCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9jb2xvdXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJDU1NOb2RlIGV4dGVuZHMgQ1NTTm9kZSB7XG4gIGNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZU5vZGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVOb2RlKCksXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGVOb2RlLmNvbnRlbnQoKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoKSxcbiAgICAgICAgICBjc3MgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKENvbG91ckNTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoQ29sb3VyQ1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufSJdLCJuYW1lcyI6WyJDb2xvdXJDU1NOb2RlIiwiQ1NTTm9kZSIsImNvbnRlbnQiLCJtYXJrZG93blN0eWxlTm9kZSIsImdldE1hcmtkb3duU3R5bGVOb2RlIiwiYXNDU1MiLCJjb250ZXh0IiwiY3NzIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzREQUZEOzs7Ozs7QUFFTCxNQUFNQSxzQkFBc0JDLFlBQU87SUFDaERDLFVBQVU7UUFDUixNQUFNQyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsSUFDN0NGLFVBQVVDLGtCQUFrQkQsT0FBTztRQUV6QyxPQUFPQTtJQUNUO0lBRUFHLE1BQU1DLE9BQU8sRUFBRTtRQUNiLE1BQU1KLFVBQVUsSUFBSSxDQUFDQSxPQUFPLElBQ3RCSyxNQUFNTCxTQUFTLEdBQUc7UUFFeEIsT0FBT0s7SUFDVDtJQUVBLE9BQU9DLGNBQWM7UUFBRSxPQUFPUCxZQUFPLENBQUNPLFdBQVcsQ0FBQ1I7SUFBZ0I7SUFFbEUsT0FBT1MsY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT1QsWUFBTyxDQUFDUSxhQUFhLENBQUNULGVBQWVVO0lBQVk7QUFDNUYifQ==