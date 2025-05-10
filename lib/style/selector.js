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
var _tagName = /*#__PURE__*/ _interop_require_default(require("../map/tagName"));
var _className = /*#__PURE__*/ _interop_require_default(require("../map/className"));
var _markdown = /*#__PURE__*/ _interop_require_wildcard(require("../ruleNames/markdown"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var STRONG_TEXT_MARKDOWN_RULE_NAME = _markdown.default.STRONG_TEXT_MARKDOWN_RULE_NAME, ORDERED_LIST_MARKDOWN_RULE_NAME = _markdown.default.ORDERED_LIST_MARKDOWN_RULE_NAME, ORDERED_ITEM_MARKDOWN_RULE_NAME = _markdown.default.ORDERED_ITEM_MARKDOWN_RULE_NAME, UNORDERED_ITEM_MARKDOWN_RULE_NAME = _markdown.default.UNORDERED_ITEM_MARKDOWN_RULE_NAME, UNORDERED_LIST_MARKDOWN_RULE_NAME = _markdown.default.UNORDERED_LIST_MARKDOWN_RULE_NAME, STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME = _markdown.default.STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME;
var ruleNameTerminalNodeQuery = (0, _query.nodeQuery)("/selector/@rule-name");
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
        var ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(), ruleName = ruleNameTerminalNodeContent; ///
        if (ruleName === _markdown.DIVISION_MARKDOWN_RULE_NAME) {
            content = null;
        } else {
            content = _constants.EMPTY_STRING;
            var ruleNamesIncludesRuleName = _markdown.default.includes(ruleName);
            if (ruleNamesIncludesRuleName) {
                var tagName = _tagName.default[ruleName];
                if (tagName !== null) {
                    content = "".concat(content).concat(tagName);
                }
                switch(ruleName){
                    case ORDERED_ITEM_MARKDOWN_RULE_NAME:
                        {
                            var tagName1 = _tagName.default[ORDERED_LIST_MARKDOWN_RULE_NAME], content1 = "".concat(tagName1, " > ").concat(content1);
                            break;
                        }
                    case UNORDERED_ITEM_MARKDOWN_RULE_NAME:
                        {
                            var tagName2 = _tagName.default[UNORDERED_LIST_MARKDOWN_RULE_NAME];
                            content = "".concat(tagName2, " > ").concat(content);
                            break;
                        }
                    case STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME:
                        {
                            var tagName3 = _tagName.default[STRONG_TEXT_MARKDOWN_RULE_NAME];
                            content = "".concat(content, " > ").concat(tagName3);
                            break;
                        }
                }
                var className = _className.default[ruleName];
                if (className !== null) {
                    content = "".concat(content, ".").concat(className);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHRhZ05hbWVNYXAgZnJvbSBcIi4uL21hcC90YWdOYW1lXCI7XG5pbXBvcnQgY2xhc3NOYW1lTWFwIGZyb20gXCIuLi9tYXAvY2xhc3NOYW1lXCI7XG5pbXBvcnQgbWFya2Rvd25SdWxlTmFtZXMgZnJvbSBcIi4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gPSBtYXJrZG93blJ1bGVOYW1lcztcblxuY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWxlY3Rvci9AcnVsZS1uYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMud2hpdGVzcGFjZSA9IHdoaXRlc3BhY2U7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBoYXNXaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLndoaXRlc3BhY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgbGV0IHNlbGVjdG9yID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB3aGl0ZXNwYWNlID0gd2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCB3aGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICB3aGl0ZXNwYWNlID0gKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICByZXR1cm4gd2hpdGVzcGFjZTtcbn1cblxuZnVuY3Rpb24gY29udGVudEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgY29udGVudDtcblxuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgaWYgKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcnVsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FKSB7XG4gICAgICBjb250ZW50ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgICAgY29uc3QgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IG1hcmtkb3duUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRhZ05hbWVNYXBbcnVsZU5hbWVdO1xuXG4gICAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9JHt0YWdOYW1lfWA7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY2FzZSBPUkRFUkVEX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtPUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FXSxcblxuICAgICAgICAgICAgY29udGVudCA9IGAke3RhZ05hbWV9ID4gJHtjb250ZW50fWA7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgVU5PUkRFUkVEX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gYCR7dGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtTVFJPTkdfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUVdO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0gPiAke3RhZ05hbWV9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lTWFwW3J1bGVOYW1lXTtcblxuICAgICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9LiR7Y2xhc3NOYW1lfWA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSAxLFxuICAgICAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3JlbWFpbmluZ0NvbnRlbnR9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gMCxcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwibWFya2Rvd25SdWxlTmFtZXMiLCJPUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FIiwiT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRSIsIlNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29udGVudCIsIndoaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzV2hpdGVzcGFjZSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yIiwiY29udGVudEZyb21Ob2RlQW5kVG9rZW5zIiwid2hpdGVzcGFjZUZyb21Ob2RlIiwicnVsZU5hbWVUZXJtaW5hbE5vZGUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJydWxlTmFtZSIsIkRJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInRhZ05hbWUiLCJ0YWdOYW1lTWFwIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lTWFwIiwib2Zmc2V0IiwicmVtYWluaW5nQ29udGVudCIsInJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7OzhEQWxCRTtnRUFDRTtnRUFDSztxQkFFSjt5QkFDRzt1QkFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFRQyxpQ0FLZ0RDLGlCQUFpQixDQUxqRUQsZ0NBQ0FFLGtDQUlnREQsaUJBQWlCLENBSmpFQyxpQ0FDQUMsa0NBR2dERixpQkFBaUIsQ0FIakVFLGlDQUNBQyxvQ0FF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