"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Selector;
    }
});
var _ruleNames = /*#__PURE__*/ _interop_require_default(require("../ruleNames"));
var _elementMap = /*#__PURE__*/ _interop_require_default(require("../elementMap"));
var _query = require("../utilities/query");
var _constants = require("../constants");
var _content = require("../utilities/content");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var STRONG_TEXT_RULE_NAME = _ruleNames.default.STRONG_TEXT_RULE_NAME, ORDERED_LIST_RULE_NAME = _ruleNames.default.ORDERED_LIST_RULE_NAME, UNORDERED_LIST_RULE_NAME = _ruleNames.default.UNORDERED_LIST_RULE_NAME, ORDERED_LIST_ITEM_RULE_NAME = _ruleNames.default.ORDERED_LIST_ITEM_RULE_NAME, UNORDERED_LIST_ITEM_RULE_NAME = _ruleNames.default.UNORDERED_LIST_ITEM_RULE_NAME, STRONGLY_EMPHASISED_TEXT_RULE_NAME = _ruleNames.default.STRONGLY_EMPHASISED_TEXT_RULE_NAME, _elementMap_STRONG_TEXT_RULE_NAME = _elementMap.default[STRONG_TEXT_RULE_NAME], strongTextTagName = _elementMap_STRONG_TEXT_RULE_NAME.tagName, _elementMap_ORDERED_LIST_RULE_NAME = _elementMap.default[ORDERED_LIST_RULE_NAME], orderedListTagName = _elementMap_ORDERED_LIST_RULE_NAME.tagName, _elementMap_UNORDERED_LIST_RULE_NAME = _elementMap.default[UNORDERED_LIST_RULE_NAME], unorderedListTagName = _elementMap_UNORDERED_LIST_RULE_NAME.tagName;
var ruleNameValues = Object.values(_ruleNames.default), ruleNameTerminalNodeQuery = (0, _query.nodeQuery)("/selector/@rule-name");
var Selector = /*#__PURE__*/ function() {
    function Selector(content, whitespace) {
        _class_call_check(this, Selector);
        this.content = content;
        this.whitespace = whitespace;
    }
    _create_class(Selector, [
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "hasWhitespace",
            value: function hasWhitespace() {
                return this.whitespace;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selector = null;
                var content = contentFromNodeAndTokens(node, tokens);
                if (content !== null) {
                    var whitespace = whitespaceFromNode(node);
                    selector = new Selector(content, whitespace);
                }
                return selector;
            }
        }
    ]);
    return Selector;
}();
function whitespaceFromNode(node) {
    var ruleNameTerminalNode = ruleNameTerminalNodeQuery(node), whitespace = ruleNameTerminalNode !== null;
    return whitespace;
}
function contentFromNodeAndTokens(node, tokens) {
    var content;
    var ruleNameTerminalNode = ruleNameTerminalNodeQuery(node);
    if (ruleNameTerminalNode !== null) {
        content = _constants.EMPTY_STRING;
        var ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(), ruleName = ruleNameTerminalNodeContent, ruleNameValuesIncludesRuleName = ruleNameValues.includes(ruleName);
        if (ruleNameValuesIncludesRuleName) {
            var _elementMap_ruleName = _elementMap.default[ruleName], tagName = _elementMap_ruleName.tagName, className = _elementMap_ruleName.className;
            if (tagName !== null) {
                content = "".concat(content).concat(tagName);
            }
            switch(ruleName){
                case ORDERED_LIST_ITEM_RULE_NAME:
                    {
                        content = "".concat(orderedListTagName, " > ").concat(content);
                        break;
                    }
                case UNORDERED_LIST_ITEM_RULE_NAME:
                    {
                        content = "".concat(unorderedListTagName, " > ").concat(content);
                        break;
                    }
                case STRONGLY_EMPHASISED_TEXT_RULE_NAME:
                    {
                        content = "".concat(content, " > ").concat(strongTextTagName);
                        break;
                    }
            }
            if (className !== null) {
                content = "".concat(content, ".").concat(className);
            }
            var offset = 1, remainingContent = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset);
            content = "".concat(content).concat(remainingContent);
        }
    } else {
        var offset1 = 0, remainingContent1 = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset1);
        content = remainingContent1; ///
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJ1bGVOYW1lcyBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vZWxlbWVudE1hcFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBTVFJPTkdfVEVYVF9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfTElTVF9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBVTk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSB9ID0gcnVsZU5hbWVzLFxuICAgICAgeyB0YWdOYW1lOiBzdHJvbmdUZXh0VGFnTmFtZSB9ID0gZWxlbWVudE1hcFtTVFJPTkdfVEVYVF9SVUxFX05BTUVdLFxuICAgICAgeyB0YWdOYW1lOiBvcmRlcmVkTGlzdFRhZ05hbWUgfSA9IGVsZW1lbnRNYXBbT1JERVJFRF9MSVNUX1JVTEVfTkFNRV0sXG4gICAgICB7IHRhZ05hbWU6IHVub3JkZXJlZExpc3RUYWdOYW1lIH0gPSBlbGVtZW50TWFwW1VOT1JERVJFRF9MSVNUX1JVTEVfTkFNRV07XG5cbmNvbnN0IHJ1bGVOYW1lVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhydWxlTmFtZXMpLFxuICAgICAgcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWxlY3Rvci9AcnVsZS1uYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMud2hpdGVzcGFjZSA9IHdoaXRlc3BhY2U7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBoYXNXaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLndoaXRlc3BhY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgbGV0IHNlbGVjdG9yID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB3aGl0ZXNwYWNlID0gd2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCB3aGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICB3aGl0ZXNwYWNlID0gKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICByZXR1cm4gd2hpdGVzcGFjZTtcbn1cblxuZnVuY3Rpb24gY29udGVudEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgY29udGVudDtcblxuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgaWYgKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHJ1bGVOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVWYWx1ZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVWYWx1ZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lVmFsdWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgY29uc3QgeyB0YWdOYW1lLCBjbGFzc05hbWUgfSA9IGVsZW1lbnRNYXBbcnVsZU5hbWVdO1xuXG4gICAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3RhZ05hbWV9YDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIE9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtvcmRlcmVkTGlzdFRhZ05hbWV9ID4gJHtjb250ZW50fWA7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgVU5PUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7dW5vcmRlcmVkTGlzdFRhZ05hbWV9ID4gJHtjb250ZW50fWA7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSA+ICR7c3Ryb25nVGV4dFRhZ05hbWV9YDtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9LiR7Y2xhc3NOYW1lfWA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IDEsXG4gICAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9JHtyZW1haW5pbmdDb250ZW50fWA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG9mZnNldCA9IDAsXG4gICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldChub2RlLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvciIsIlNUUk9OR19URVhUX1JVTEVfTkFNRSIsInJ1bGVOYW1lcyIsIk9SREVSRURfTElTVF9SVUxFX05BTUUiLCJVTk9SREVSRURfTElTVF9SVUxFX05BTUUiLCJPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUiLCJVTk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSIsIlNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9SVUxFX05BTUUiLCJlbGVtZW50TWFwIiwidGFnTmFtZSIsInN0cm9uZ1RleHRUYWdOYW1lIiwib3JkZXJlZExpc3RUYWdOYW1lIiwidW5vcmRlcmVkTGlzdFRhZ05hbWUiLCJydWxlTmFtZVZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb250ZW50Iiwid2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJoYXNXaGl0ZXNwYWNlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3IiLCJjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMiLCJ3aGl0ZXNwYWNlRnJvbU5vZGUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZSIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCIsInJ1bGVOYW1lIiwicnVsZU5hbWVWYWx1ZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJjbGFzc05hbWUiLCJvZmZzZXQiLCJyZW1haW5pbmdDb250ZW50IiwicmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXNCcUJBOzs7Z0VBcEJDO2lFQUNDO3FCQUVHO3lCQUNHO3VCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFRQyx3QkFLdUNDLGtCQUFTLENBTGhERCx1QkFDQUUseUJBSXVDRCxrQkFBUyxDQUpoREMsd0JBQ0FDLDJCQUd1Q0Ysa0JBQVMsQ0FIaERFLDBCQUNBQyw4QkFFdUNILGtCQUFTLENBRmhERyw2QkFDQUMsZ0NBQ3VDSixrQkFBUyxDQURoREksK0JBQ0FDLHFDQUF1Q0wsa0JBQVMsQ0FBaERLLG9DQUMrQkMsb0NBQUFBLG1CQUFVLENBQUNQLHNCQUFzQixFQUFoRVEsQUFBU0Msb0JBQXNCRixrQ0FBL0JDLFNBQ2dDRCxxQ0FBQUEsbUJBQVUsQ0FBQ0wsdUJBQXVCLEVBQWxFTSxBQUFTRSxxQkFBdUJILG1DQUFoQ0MsU0FDa0NELHVDQUFB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