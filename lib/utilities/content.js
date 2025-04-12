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
    contentFromNodeAndTokens: function() {
        return contentFromNodeAndTokens;
    },
    remainingContentFromNodeTokensAndOffset: function() {
        return remainingContentFromNodeTokensAndOffset;
    }
});
var _constants = require("../constants");
function contentFromNodeAndTokens(node, tokens) {
    var offset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var content = _constants.EMPTY_STRING;
    var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);
    var lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);
    firstSignificantTokenIndex += offset;
    for(var index = firstSignificantTokenIndex; index <= lastSignificantTokenIndex; index++){
        var token = tokens[index], tokenContent = token.getContent();
        content += tokenContent;
    }
    return content;
}
function remainingContentFromNodeTokensAndOffset(node, tokens, offset) {
    var content = contentFromNodeAndTokens(node, tokens, offset), remainingContent = content; ///
    return remainingContent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucywgb2Zmc2V0ID0gMCkge1xuICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICs9IG9mZnNldDtcblxuICBmb3IgKGxldCBpbmRleCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4OyBpbmRleCA8PSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaW5kZXhdLFxuICAgICAgICAgIHRva2VuQ29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgKz0gdG9rZW5Db250ZW50O1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpIHtcbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMsIG9mZnNldCksXG4gICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50OyAvLy9cblxuICByZXR1cm4gcmVtYWluaW5nQ29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiLCJub2RlIiwidG9rZW5zIiwib2Zmc2V0IiwiY29udGVudCIsIkVNUFRZX1NUUklORyIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4IiwidG9rZW4iLCJ0b2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwicmVtYWluaW5nQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSx3QkFBd0I7ZUFBeEJBOztJQW1CQUMsdUNBQXVDO2VBQXZDQTs7O3lCQXJCYTtBQUV0QixTQUFTRCx5QkFBeUJFLElBQUksRUFBRUMsTUFBTTtRQUFFQyxTQUFBQSxpRUFBUztJQUM5RCxJQUFJQyxVQUFVQyx1QkFBWTtJQUUxQixJQUFJQyw2QkFBNkJMLEtBQUtNLDZCQUE2QixDQUFDTDtJQUVwRSxJQUFNTSw0QkFBNEJQLEtBQUtRLDRCQUE0QixDQUFDUDtJQUVwRUksOEJBQThCSDtJQUU5QixJQUFLLElBQUlPLFFBQVFKLDRCQUE0QkksU0FBU0YsMkJBQTJCRSxRQUFTO1FBQ3hGLElBQU1DLFFBQVFULE1BQU0sQ0FBQ1EsTUFBTSxFQUNyQkUsZUFBZUQsTUFBTUUsVUFBVTtRQUVyQ1QsV0FBV1E7SUFDYjtJQUVBLE9BQU9SO0FBQ1Q7QUFFTyxTQUFTSix3Q0FBd0NDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxNQUFNO0lBQzFFLElBQU1DLFVBQVVMLHlCQUF5QkUsTUFBTUMsUUFBUUMsU0FDakRXLG1CQUFtQlYsU0FBUyxHQUFHO0lBRXJDLE9BQU9VO0FBQ1QifQ==