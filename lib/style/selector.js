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
var _ruleNames = /*#__PURE__*/ _interop_require_wildcard(require("../ruleNames"));
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
var STRONG_TEXT_RULE_NAME = _ruleNames.default.STRONG_TEXT_RULE_NAME, ORDERED_LIST_RULE_NAME = _ruleNames.default.ORDERED_LIST_RULE_NAME, ORDERED_ITEM_RULE_NAME = _ruleNames.default.ORDERED_ITEM_RULE_NAME, UNORDERED_ITEM_RULE_NAME = _ruleNames.default.UNORDERED_ITEM_RULE_NAME, UNORDERED_LIST_RULE_NAME = _ruleNames.default.UNORDERED_LIST_RULE_NAME, STRONGLY_EMPHASISED_TEXT_RULE_NAME = _ruleNames.default.STRONGLY_EMPHASISED_TEXT_RULE_NAME;
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
        var ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(), ruleName = ruleNameTerminalNodeContent; ///
        if (ruleName === _ruleNames.DIVISION_RULE_NAME) {
            content = null;
        } else {
            content = _constants.EMPTY_STRING;
            var ruleNameValuesIncludesRuleName = ruleNameValues.includes(ruleName);
            if (ruleNameValuesIncludesRuleName) {
                var _elementMap_ruleName = _elementMap.default[ruleName], tagName = _elementMap_ruleName.tagName, className = _elementMap_ruleName.className;
                if (tagName !== null) {
                    content = "".concat(content).concat(tagName);
                }
                switch(ruleName){
                    case ORDERED_ITEM_RULE_NAME:
                        {
                            var tagName1 = _elementMap.default[ORDERED_LIST_RULE_NAME].tagName, content1 = "".concat(tagName1, " > ").concat(content1);
                            break;
                        }
                    case UNORDERED_ITEM_RULE_NAME:
                        {
                            var tagName2 = _elementMap.default[UNORDERED_LIST_RULE_NAME].tagName;
                            content = "".concat(tagName2, " > ").concat(content);
                            break;
                        }
                    case STRONGLY_EMPHASISED_TEXT_RULE_NAME:
                        {
                            var tagName3 = _elementMap.default[STRONG_TEXT_RULE_NAME].tagName;
                            content = "".concat(content, " > ").concat(tagName3);
                            break;
                        }
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJ1bGVOYW1lcyBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vZWxlbWVudE1hcFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBTVFJPTkdfVEVYVF9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfTElTVF9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIH0gPSBydWxlTmFtZXM7XG5cbmNvbnN0IHJ1bGVOYW1lVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhydWxlTmFtZXMpLFxuICAgICAgcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWxlY3Rvci9AcnVsZS1uYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMud2hpdGVzcGFjZSA9IHdoaXRlc3BhY2U7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBoYXNXaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLndoaXRlc3BhY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgbGV0IHNlbGVjdG9yID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB3aGl0ZXNwYWNlID0gd2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCB3aGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICB3aGl0ZXNwYWNlID0gKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICByZXR1cm4gd2hpdGVzcGFjZTtcbn1cblxuZnVuY3Rpb24gY29udGVudEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgY29udGVudDtcblxuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgaWYgKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcnVsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gRElWSVNJT05fUlVMRV9OQU1FKSB7XG4gICAgICBjb250ZW50ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgICAgY29uc3QgcnVsZU5hbWVWYWx1ZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVWYWx1ZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVWYWx1ZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHsgdGFnTmFtZSwgY2xhc3NOYW1lIH0gPSBlbGVtZW50TWFwW3J1bGVOYW1lXTtcblxuICAgICAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7dGFnTmFtZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICAgIGNhc2UgT1JERVJFRF9JVEVNX1JVTEVfTkFNRToge1xuICAgICAgICAgICAgY29uc3QgeyB0YWdOYW1lIH0gPSBlbGVtZW50TWFwW09SREVSRURfTElTVF9SVUxFX05BTUVdLFxuXG4gICAgICAgICAgICBjb250ZW50ID0gYCR7dGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBVTk9SREVSRURfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gZWxlbWVudE1hcFtVTk9SREVSRURfTElTVF9SVUxFX05BTUVdO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gYCR7dGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb25zdCB7IHRhZ05hbWUgfSA9IGVsZW1lbnRNYXBbU1RST05HX1RFWFRfUlVMRV9OQU1FXTtcblxuICAgICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9ID4gJHt0YWdOYW1lfWA7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0uJHtjbGFzc05hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDEsXG4gICAgICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7cmVtYWluaW5nQ29udGVudH1gO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvZmZzZXQgPSAwLFxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3IiLCJTVFJPTkdfVEVYVF9SVUxFX05BTUUiLCJydWxlTmFtZXMiLCJPUkRFUkVEX0xJU1RfUlVMRV9OQU1FIiwiT1JERVJFRF9JVEVNX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9JVEVNX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIlNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9SVUxFX05BTUUiLCJydWxlTmFtZVZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb250ZW50Iiwid2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJoYXNXaGl0ZXNwYWNlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3IiLCJjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMiLCJ3aGl0ZXNwYWNlRnJvbU5vZGUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCIsInJ1bGVOYW1lIiwiRElWSVNJT05fUlVMRV9OQU1FIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVWYWx1ZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJlbGVtZW50TWFwIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsIm9mZnNldCIsInJlbWFpbmluZ0NvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7OztpRUFsQkM7aUVBQ0M7cUJBRUc7eUJBQ0c7dUJBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMsd0JBS3VDQyxrQkFBUyxDQUxoREQsdUJBQ0FFLHlCQUl1Q0Qsa0JBQVMsQ0FKaERDLHdCQUNBQyx5QkFHdUNGLGtCQUFTLENBSGhERSx3QkFDQUMsMkJBRXVDSCxrQkFBUyxDQUZoREcsMEJBQ0FDLDJCQUN1Q0osa0JBQVMsQ0FEaERJLDBCQUNBQyxxQ0FBdUNMLGtCQUFTLENBQWhESztBQUVSLElBQU1DLGlCQUFpQkMsT0FBT0MsTUFBTSxDQUFDUixrQkFBUyxHQUN4Q1MsNEJBQTRCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTdCLElBQUEsQUFBTVoseUJBQU47YUFBTUEsU0FDUGEsT0FBTyxFQUFFQyxVQUFVO2dDQURaZDtRQUVqQixJQUFJLENBQUNhLE9BQU8sR0FBR0E7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