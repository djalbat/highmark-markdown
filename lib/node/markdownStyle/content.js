"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentMarkdownStyleNode;
    }
});
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
const _string = require("../../utilities/string");
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentMarkdownStyleNode extends _markdownStyle.default {
    content(context) {
        const firstTokenIndex = this.getFirstTokenIndex(context), lastTokenIndex = this.getLastTokenIndex(context), start = firstTokenIndex, end = lastTokenIndex + 1;
        let { tokens } = context;
        tokens = tokens.slice(start, end);
        let content = _constants.EMPTY_STRING;
        tokens.forEach((token)=>{
            const tokenContent = token.getContent();
            content += tokenContent;
        });
        content = (0, _string.removeWhitespace)(content);
        content += _constants.CARRIAGE_RETURN;
        content += _constants.CARRIAGE_RETURN;
        return content;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdownStyle.default.fromRuleNameChildNodesOpacityAndPrecedence(ContentMarkdownStyleNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgcmVtb3ZlV2hpdGVzcGFjZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIENBUlJJQUdFX1JFVFVSTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudE1hcmtkb3duU3R5bGVOb2RlIGV4dGVuZHMgTWFya2Rvd25TdHlsZU5vZGUge1xuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdFRva2VuSW5kZXggPSB0aGlzLmdldEZpcnN0VG9rZW5JbmRleChjb250ZXh0KSxcbiAgICAgICAgICBsYXN0VG9rZW5JbmRleCA9IHRoaXMuZ2V0TGFzdFRva2VuSW5kZXgoY29udGV4dCksXG4gICAgICAgICAgc3RhcnQgPSBmaXJzdFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICBlbmQgPSBsYXN0VG9rZW5JbmRleCArIDE7XG5cbiAgICBsZXQgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgY29uc3QgdG9rZW5Db250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ICs9IHRva2VuQ29udGVudDtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQgPSByZW1vdmVXaGl0ZXNwYWNlKGNvbnRlbnQpO1xuXG4gICAgY29udGVudCArPSBDQVJSSUFHRV9SRVRVUk47XG4gICAgY29udGVudCArPSBDQVJSSUFHRV9SRVRVUk47XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duU3R5bGVOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDb250ZW50TWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRNYXJrZG93blN0eWxlTm9kZSIsIk1hcmtkb3duU3R5bGVOb2RlIiwiY29udGVudCIsImNvbnRleHQiLCJmaXJzdFRva2VuSW5kZXgiLCJnZXRGaXJzdFRva2VuSW5kZXgiLCJsYXN0VG9rZW5JbmRleCIsImdldExhc3RUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJ0b2tlbnMiLCJzbGljZSIsIkVNUFRZX1NUUklORyIsImZvckVhY2giLCJ0b2tlbiIsInRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJyZW1vdmVXaGl0ZXNwYWNlIiwiQ0FSUklBR0VfUkVUVVJOIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7c0VBTFM7d0JBRUc7MkJBQ2E7Ozs7OztBQUUvQixNQUFNQSxpQ0FBaUNDLHNCQUFpQjtJQUNyRUMsUUFBUUMsT0FBTyxFQUFFO1FBQ2YsTUFBTUMsa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNGLFVBQzFDRyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0osVUFDeENLLFFBQVFKLGlCQUNSSyxNQUFNSCxpQkFBaUI7UUFFN0IsSUFBSSxFQUFFSSxNQUFNLEVBQUUsR0FBR1A7UUFFakJPLFNBQVNBLE9BQU9DLEtBQUssQ0FBQ0gsT0FBT0M7UUFFN0IsSUFBSVAsVUFBVVUsdUJBQVk7UUFFMUJGLE9BQU9HLE9BQU8sQ0FBQyxDQUFDQztZQUNkLE1BQU1DLGVBQWVELE1BQU1FLFVBQVU7WUFFckNkLFdBQVdhO1FBQ2I7UUFFQWIsVUFBVWUsSUFBQUEsd0JBQWdCLEVBQUNmO1FBRTNCQSxXQUFXZ0IsMEJBQWU7UUFDMUJoQixXQUFXZ0IsMEJBQWU7UUFFMUIsT0FBT2hCO0lBQ1Q7SUFFQSxPQUFPaUIsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPdEIsc0JBQWlCLENBQUNrQiwwQ0FBMEMsQ0FBQ25CLDBCQUEwQm9CLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDM08ifQ==