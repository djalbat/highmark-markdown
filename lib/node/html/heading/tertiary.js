"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TertiaryHeadingHTMLNode;
    }
});
const _heading = /*#__PURE__*/ _interop_require_default(require("../../../node/html/heading"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TertiaryHeadingHTMLNode extends _heading.default {
    static depth = 3;
    static lines = 2.25;
    static tagName = "h3";
    static className = null;
    static fromNothing() {
        return _heading.default.fromNothing(TertiaryHeadingHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _heading.default.fromOuterNode(TertiaryHeadingHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy90ZXJ0aWFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhlYWRpbmdIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2hlYWRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVydGlhcnlIZWFkaW5nSFRNTE5vZGUgZXh0ZW5kcyBIZWFkaW5nSFRNTE5vZGUge1xuICBzdGF0aWMgZGVwdGggPSAzO1xuXG4gIHN0YXRpYyBsaW5lcyA9IDIuMjU7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImgzXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSGVhZGluZ0hUTUxOb2RlLmZyb21Ob3RoaW5nKFRlcnRpYXJ5SGVhZGluZ0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSGVhZGluZ0hUTUxOb2RlLmZyb21PdXRlck5vZGUoVGVydGlhcnlIZWFkaW5nSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJ0aWFyeUhlYWRpbmdIVE1MTm9kZSIsIkhlYWRpbmdIVE1MTm9kZSIsImRlcHRoIiwibGluZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2dFQUZPOzs7Ozs7QUFFYixNQUFNQSxnQ0FBZ0NDLGdCQUFlO0lBQ2xFLE9BQU9DLFFBQVEsRUFBRTtJQUVqQixPQUFPQyxRQUFRLEtBQUs7SUFFcEIsT0FBT0MsVUFBVSxLQUFLO0lBRXRCLE9BQU9DLFlBQVksS0FBSztJQUV4QixPQUFPQyxjQUFjO1FBQUUsT0FBT0wsZ0JBQWUsQ0FBQ0ssV0FBVyxDQUFDTjtJQUEwQjtJQUVwRixPQUFPTyxjQUFjQyxTQUFTLEVBQUU7UUFBRSxPQUFPUCxnQkFBZSxDQUFDTSxhQUFhLENBQUNQLHlCQUF5QlE7SUFBWTtBQUM5RyJ9