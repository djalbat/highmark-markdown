"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cssFromMarkdownStyleAndSelectorString: function() {
        return cssFromMarkdownStyleAndSelectorString;
    },
    cssFromMarkdownStyleAndSelectorsList: function() {
        return cssFromMarkdownStyleAndSelectorsList;
    },
    default: function() {
        return _default;
    }
});
var _division = /*#__PURE__*/ _interop_require_default(require("../style/division"));
var _selectorsList = /*#__PURE__*/ _interop_require_default(require("../style/selectorsList"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/parser"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var markdownStyleLexer = _lexer.default.fromNothing(), markdownStyleParser = _parser.default.fromNothing();
function cssFromMarkdownStyleAndSelectorsList(markdownStyle, selectorsList) {
    var css = _constants.EMPTY_STRING;
    var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), node = parser.parse(tokens);
    if (node !== null) {
        var division = _division.default.fromNodeTokensAndSelectorsList(node, tokens, selectorsList);
        css = division.asCSS();
    }
    return css;
}
function cssFromMarkdownStyleAndSelectorString(markdownStyle, selectorString) {
    var selectorsList = _selectorsList.default.fromSelectorsString(selectorString), css = cssFromMarkdownStyleAndSelectorsList(markdownStyle, selectorsList);
    return css;
}
var _default = {
    cssFromMarkdownStyleAndSelectorsList: cssFromMarkdownStyleAndSelectorsList,
    cssFromMarkdownStyleAndSelectorString: cssFromMarkdownStyleAndSelectorString
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGl2aXNpb24gZnJvbSBcIi4uL3N0eWxlL2RpdmlzaW9uXCI7XG5pbXBvcnQgU2VsZWN0b3JzTGlzdCBmcm9tIFwiLi4vc3R5bGUvc2VsZWN0b3JzTGlzdFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVMZXhlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVQYXJzZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvcGFyc2VyXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnNMaXN0KG1hcmtkb3duU3R5bGUsIHNlbGVjdG9yc0xpc3QpIHtcbiAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgIHBhcnNlciA9ICBtYXJrZG93blN0eWxlUGFyc2VyLCAgLy8vXG4gICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRpdmlzaW9uID0gRGl2aXNpb24uZnJvbU5vZGVUb2tlbnNBbmRTZWxlY3RvcnNMaXN0KG5vZGUsIHRva2Vucywgc2VsZWN0b3JzTGlzdCk7XG5cbiAgICBjc3MgPSBkaXZpc2lvbi5hc0NTUygpO1xuICB9XG5cbiAgcmV0dXJuIGNzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc0Zyb21NYXJrZG93blN0eWxlQW5kU2VsZWN0b3JTdHJpbmcobWFya2Rvd25TdHlsZSwgc2VsZWN0b3JTdHJpbmcpIHtcbiAgY29uc3Qgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvclN0cmluZyksXG4gICAgICAgIGNzcyA9IGNzc0Zyb21NYXJrZG93blN0eWxlQW5kU2VsZWN0b3JzTGlzdChtYXJrZG93blN0eWxlLCBzZWxlY3RvcnNMaXN0KTtcblxuICByZXR1cm4gY3NzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNzc0Zyb21NYXJrZG93blN0eWxlQW5kU2VsZWN0b3JzTGlzdCxcbiAgY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvclN0cmluZ1xufTtcbiJdLCJuYW1lcyI6WyJjc3NGcm9tTWFya2Rvd25TdHlsZUFuZFNlbGVjdG9yU3RyaW5nIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnNMaXN0IiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsIm1hcmtkb3duU3R5bGUiLCJzZWxlY3RvcnNMaXN0IiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJkaXZpc2lvbiIsIkRpdmlzaW9uIiwiZnJvbU5vZGVUb2tlbnNBbmRTZWxlY3RvcnNMaXN0IiwiYXNDU1MiLCJzZWxlY3RvclN0cmluZyIsIlNlbGVjdG9yc0xpc3QiLCJmcm9tU2VsZWN0b3JzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE4QmdCQSxxQ0FBcUM7ZUFBckNBOztJQWxCQUMsb0NBQW9DO2VBQXBDQTs7SUF5QmhCLE9BR0U7ZUFIRjs7OytEQW5DcUI7b0VBQ0s7NERBQ0s7NkRBQ0M7eUJBRUg7Ozs7OztBQUU3QixJQUFNQyxxQkFBcUJDLGNBQWtCLENBQUNDLFdBQVcsSUFDbkRDLHNCQUFzQkMsZUFBbUIsQ0FBQ0YsV0FBVztBQUVwRCxTQUFTSCxxQ0FBcUNNLGFBQWEsRUFBRUMsYUFBYTtJQUMvRSxJQUFJQyxNQUFNQyx1QkFBWTtJQUV0QixJQUFNQyxRQUFRVCxvQkFDUlUsU0FBVVAscUJBQ1ZRLFVBQVVOLGVBQ1ZPLFNBQVNILE1BQU1JLFFBQVEsQ0FBQ0YsVUFDeEJHLE9BQU9KLE9BQU9LLEtBQUssQ0FBQ0g7SUFFMUIsSUFBSUUsU0FBUyxNQUFNO1FBQ2pCLElBQU1FLFdBQVdDLGlCQUFRLENBQUNDLDhCQUE4QixDQUFDSixNQUFNRixRQUFRTjtRQUV2RUMsTUFBTVMsU0FBU0csS0FBSztJQUN0QjtJQUVBLE9BQU9aO0FBQ1Q7QUFFTyxTQUFTVCxzQ0FBc0NPLGFBQWEsRUFBRWUsY0FBYztJQUNqRixJQUFNZCxnQkFBZ0JlLHNCQUFhLENBQUNDLG1CQUFtQixDQUFDRixpQkFDbERiLE1BQU1SLHFDQUFxQ00sZUFBZUM7SUFFaEUsT0FBT0M7QUFDVDtJQUVBLFdBQWU7SUFDYlIsc0NBQUFBO0lBQ0FELHVDQUFBQTtBQUNGIn0=