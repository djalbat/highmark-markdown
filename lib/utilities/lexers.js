"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get markdownLexerFromNothing () {
        return markdownLexerFromNothing;
    },
    get markdownStyleLexerFromNothing () {
        return markdownStyleLexerFromNothing;
    }
});
var _lexer = /*#__PURE__*/ _interop_require_default(require("../markdown/lexer"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/lexer"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function markdownLexerFromNothing() {
    var markdownLexer = _lexer.default.fromNothing();
    return markdownLexer;
}
function markdownStyleLexerFromNothing() {
    var markdownStyleLexer = _lexer1.default.fromNothing();
    return markdownStyleLexer;
}
var _default = {
    markdownLexerFromNothing: markdownLexerFromNothing,
    markdownStyleLexerFromNothing: markdownStyleLexerFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25MZXhlciBmcm9tIFwiLi4vbWFya2Rvd24vbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTGV4ZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvbGV4ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duTGV4ZXJGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxuICByZXR1cm4gbWFya2Rvd25MZXhlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duU3R5bGVMZXhlckZyb21Ob3RoaW5nKCkge1xuICBjb25zdCBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxuICByZXR1cm4gbWFya2Rvd25TdHlsZUxleGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1hcmtkb3duTGV4ZXJGcm9tTm90aGluZyxcbiAgbWFya2Rvd25TdHlsZUxleGVyRnJvbU5vdGhpbmdcbn07XG4iXSwibmFtZXMiOlsibWFya2Rvd25MZXhlckZyb21Ob3RoaW5nIiwibWFya2Rvd25TdHlsZUxleGVyRnJvbU5vdGhpbmciLCJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpQkE7ZUFBQTs7UUFaZ0JBO2VBQUFBOztRQU1BQztlQUFBQTs7OzREQVRVOzZEQUNLOzs7Ozs7QUFFeEIsU0FBU0Q7SUFDZCxJQUFNRSxnQkFBZ0JDLGNBQWEsQ0FBQ0MsV0FBVztJQUUvQyxPQUFPRjtBQUNUO0FBRU8sU0FBU0Q7SUFDZCxJQUFNSSxxQkFBcUJDLGVBQWtCLENBQUNGLFdBQVc7SUFFekQsT0FBT0M7QUFDVDtJQUVBLFdBQWU7SUFDYkwsMEJBQUFBO0lBQ0FDLCtCQUFBQTtBQUNGIn0=