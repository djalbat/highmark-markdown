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
var DIVISION_RULE_NAME = _ruleNames.default.DIVISION_RULE_NAME, STRONG_TEXT_RULE_NAME = _ruleNames.default.STRONG_TEXT_RULE_NAME, ORDERED_LIST_RULE_NAME = _ruleNames.default.ORDERED_LIST_RULE_NAME, UNORDERED_LIST_RULE_NAME = _ruleNames.default.UNORDERED_LIST_RULE_NAME, ORDERED_LIST_ITEM_RULE_NAME = _ruleNames.default.ORDERED_LIST_ITEM_RULE_NAME, UNORDERED_LIST_ITEM_RULE_NAME = _ruleNames.default.UNORDERED_LIST_ITEM_RULE_NAME, STRONGLY_EMPHASISED_TEXT_RULE_NAME = _ruleNames.default.STRONGLY_EMPHASISED_TEXT_RULE_NAME, _elementMap_STRONG_TEXT_RULE_NAME = _elementMap.default[STRONG_TEXT_RULE_NAME], strongTextTagName = _elementMap_STRONG_TEXT_RULE_NAME.tagName, _elementMap_ORDERED_LIST_RULE_NAME = _elementMap.default[ORDERED_LIST_RULE_NAME], orderedListTagName = _elementMap_ORDERED_LIST_RULE_NAME.tagName, _elementMap_UNORDERED_LIST_RULE_NAME = _elementMap.default[UNORDERED_LIST_RULE_NAME], unorderedListTagName = _elementMap_UNORDERED_LIST_RULE_NAME.tagName;
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
                case DIVISION_RULE_NAME:
                    {
                        content = null;
                        break;
                    }
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
            if (ruleName === DIVISION_RULE_NAME) {
                content = null;
            } else {
                var offset = 1, remainingContent = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset);
                content = "".concat(content).concat(remainingContent);
            }
        }
    } else {
        var offset1 = 0, remainingContent1 = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset1);
        content = remainingContent1; ///
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJ1bGVOYW1lcyBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vZWxlbWVudE1hcFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgIFNUUk9OR19URVhUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICBPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIH0gPSBydWxlTmFtZXMsXG4gICAgICB7IHRhZ05hbWU6IHN0cm9uZ1RleHRUYWdOYW1lIH0gPSBlbGVtZW50TWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV0sXG4gICAgICB7IHRhZ05hbWU6IG9yZGVyZWRMaXN0VGFnTmFtZSB9ID0gZWxlbWVudE1hcFtPUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHsgdGFnTmFtZTogdW5vcmRlcmVkTGlzdFRhZ05hbWUgfSA9IGVsZW1lbnRNYXBbVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FXTtcblxuY29uc3QgcnVsZU5hbWVWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHJ1bGVOYW1lcyksXG4gICAgICBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlbGVjdG9yL0BydWxlLW5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIHdoaXRlc3BhY2UgPSAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gIHJldHVybiB3aGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50O1xuXG4gIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKTtcblxuICBpZiAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcnVsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50LCAvLy9cbiAgICAgICAgICBydWxlTmFtZVZhbHVlc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZVZhbHVlcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAocnVsZU5hbWVWYWx1ZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICBjb25zdCB7IHRhZ05hbWUsIGNsYXNzTmFtZSB9ID0gZWxlbWVudE1hcFtydWxlTmFtZV07XG5cbiAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7dGFnTmFtZX1gO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgRElWSVNJT05fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29udGVudCA9IGAke29yZGVyZWRMaXN0VGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBVTk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHt1bm9yZGVyZWRMaXN0VGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9ID4gJHtzdHJvbmdUZXh0VGFnTmFtZX1gO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0uJHtjbGFzc05hbWV9YDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVOYW1lID09PSBESVZJU0lPTl9SVUxFX05BTUUpIHtcbiAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAxLFxuICAgICAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3JlbWFpbmluZ0NvbnRlbnR9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gMCxcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiRElWSVNJT05fUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiU1RST05HX1RFWFRfUlVMRV9OQU1FIiwiT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FIiwiU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSIsImVsZW1lbnRNYXAiLCJ0YWdOYW1lIiwic3Ryb25nVGV4dFRhZ05hbWUiLCJvcmRlcmVkTGlzdFRhZ05hbWUiLCJ1bm9yZGVyZWRMaXN0VGFnTmFtZSIsInJ1bGVOYW1lVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbnRlbnQiLCJ3aGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsImhhc1doaXRlc3BhY2UiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvciIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsIndoaXRlc3BhY2VGcm9tTm9kZSIsInJ1bGVOYW1lVGVybWluYWxOb2RlIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwicnVsZU5hbWUiLCJydWxlTmFtZVZhbHVlc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImNsYXNzTmFtZSIsIm9mZnNldCIsInJlbWFpbmluZ0NvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBdUJxQkE7OztnRUFyQkM7aUVBQ0M7cUJBRUc7eUJBQ0c7dUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQVFDLHFCQU11Q0Msa0JBQVMsQ0FOaERELG9CQUNBRSx3QkFLdUNELGtCQUFT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