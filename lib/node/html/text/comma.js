"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CommaTextHTMLNode;
    }
});
const _text = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text"));
const _constants = require("../../../constants");
const _markdown = require("../../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CommaTextHTMLNode extends _text.default {
    getRuleName() {
        const ruleName = _markdown.INDEX_TEXT_MARKDOWN_RULE_NAME;
        return ruleName;
    }
    text(context) {
        const text = _constants.COMMA; ///
        return text;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; //.
        return string;
    }
    static tagName = null;
    static className = null;
    static fromNothing() {
        return _text.default.fromNothing(CommaTextHTMLNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9jb21tYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHRcIjtcblxuaW1wb3J0IHsgQ09NTUEgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJTkRFWF9URVhUX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFUZXh0SFRNTE5vZGUgZXh0ZW5kcyBUZXh0SFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgdGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgdGV4dCA9IENPTU1BOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy5cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gVGV4dEhUTUxOb2RlLmZyb21Ob3RoaW5nKENvbW1hVGV4dEhUTUxOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbW1hVGV4dEhUTUxOb2RlIiwiVGV4dEhUTUxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIklOREVYX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwidGV4dCIsImNvbnRleHQiLCJDT01NQSIsImFzU3RyaW5nIiwic3RyaW5nIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7OzZEQUxJOzJCQUVIOzBCQUN3Qjs7Ozs7O0FBRS9CLE1BQU1BLDBCQUEwQkMsYUFBWTtJQUN6REMsY0FBYztRQUNaLE1BQU1DLFdBQVdDLHVDQUE2QjtRQUU5QyxPQUFPRDtJQUNUO0lBRUFFLEtBQUtDLE9BQU8sRUFBRTtRQUNaLE1BQU1ELE9BQU9FLGdCQUFLLEVBQUUsR0FBRztRQUV2QixPQUFPRjtJQUNUO0lBRUFHLFdBQVc7UUFDVCxNQUFNTCxXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQk8sU0FBU04sVUFBVyxHQUFHO1FBRTdCLE9BQU9NO0lBQ1Q7SUFFQSxPQUFPQyxVQUFVLEtBQUs7SUFFdEIsT0FBT0MsWUFBWSxLQUFLO0lBRXhCLE9BQU9DLGNBQWM7UUFBRSxPQUFPWCxhQUFZLENBQUNXLFdBQVcsQ0FBQ1o7SUFBb0I7QUFDN0UifQ==