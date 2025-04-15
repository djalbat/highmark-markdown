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
var _tagName = /*#__PURE__*/ _interop_require_default(require("../map/tagName"));
var _className = /*#__PURE__*/ _interop_require_default(require("../map/className"));
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
                var tagName = _tagName.default[ruleName];
                if (tagName !== null) {
                    content = "".concat(content).concat(tagName);
                }
                switch(ruleName){
                    case ORDERED_ITEM_RULE_NAME:
                        {
                            var tagName1 = _tagName.default[ORDERED_LIST_RULE_NAME], content1 = "".concat(tagName1, " > ").concat(content1);
                            break;
                        }
                    case UNORDERED_ITEM_RULE_NAME:
                        {
                            var tagName2 = _tagName.default[UNORDERED_LIST_RULE_NAME];
                            content = "".concat(tagName2, " > ").concat(content);
                            break;
                        }
                    case STRONGLY_EMPHASISED_TEXT_RULE_NAME:
                        {
                            var tagName3 = _tagName.default[STRONG_TEXT_RULE_NAME];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJ1bGVOYW1lcyBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vbWFwL3RhZ05hbWVcIjtcbmltcG9ydCBjbGFzc05hbWVNYXAgZnJvbSBcIi4uL21hcC9jbGFzc05hbWVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHsgU1RST05HX1RFWFRfUlVMRV9OQU1FLFxuICAgICAgICBPUkRFUkVEX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICBPUkRFUkVEX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBVTk9SREVSRURfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSB9ID0gcnVsZU5hbWVzO1xuXG5jb25zdCBydWxlTmFtZVZhbHVlcyA9IE9iamVjdC52YWx1ZXMocnVsZU5hbWVzKSxcbiAgICAgIHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2VsZWN0b3IvQHJ1bGUtbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCB3aGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLndoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaGFzV2hpdGVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy53aGl0ZXNwYWNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGxldCBzZWxlY3RvciA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgd2hpdGVzcGFjZSA9IHdoaXRlc3BhY2VGcm9tTm9kZShub2RlKTtcblxuICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdoaXRlc3BhY2VGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgd2hpdGVzcGFjZSA9IChydWxlTmFtZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHdoaXRlc3BhY2U7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IGNvbnRlbnQ7XG5cbiAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gIGlmIChydWxlTmFtZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHJ1bGVOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IERJVklTSU9OX1JVTEVfTkFNRSkge1xuICAgICAgY29udGVudCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lVmFsdWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lVmFsdWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lVmFsdWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtydWxlTmFtZV07XG5cbiAgICAgICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3RhZ05hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgICBjYXNlIE9SREVSRURfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW09SREVSRURfTElTVF9SVUxFX05BTUVdLFxuXG4gICAgICAgICAgICBjb250ZW50ID0gYCR7dGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBVTk9SREVSRURfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW1VOT1JERVJFRF9MSVNUX1JVTEVfTkFNRV07XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHt0YWdOYW1lfSA+ICR7Y29udGVudH1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV07XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSA+ICR7dGFnTmFtZX1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVNYXBbcnVsZU5hbWVdO1xuXG4gICAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0uJHtjbGFzc05hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDEsXG4gICAgICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7cmVtYWluaW5nQ29udGVudH1gO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvZmZzZXQgPSAwLFxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3IiLCJTVFJPTkdfVEVYVF9SVUxFX05BTUUiLCJydWxlTmFtZXMiLCJPUkRFUkVEX0xJU1RfUlVMRV9OQU1FIiwiT1JERVJFRF9JVEVNX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9JVEVNX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIlNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9SVUxFX05BTUUiLCJydWxlTmFtZVZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb250ZW50Iiwid2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJoYXNXaGl0ZXNwYWNlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3IiLCJjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMiLCJ3aGl0ZXNwYWNlRnJvbU5vZGUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCIsInJ1bGVOYW1lIiwiRElWSVNJT05fUlVMRV9OQU1FIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVWYWx1ZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJ0YWdOYW1lIiwidGFnTmFtZU1hcCIsImNsYXNzTmFtZSIsImNsYXNzTmFtZU1hcCIsIm9mZnNldCIsInJlbWFpbmluZ0NvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBcUJxQkE7OztpRUFuQkM7OERBQ0M7Z0VBQ0U7cUJBRUM7eUJBQ0c7dUJBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMsd0JBS3VDQyxrQkFBUyxDQUxoREQsdUJBQ0FFLHlCQUl1Q0Qsa0JBQVMsQ0FKaERDLHdCQUNBQyx5QkFHdUNGLGtCQUFTLENBSGhERSx3QkFDQUMsMkJBRXVDSCxrQkFBUyxDQUZoREcsMEJBQ0FDLDJCQUN1Q0osa0JBQVMsQ0FEaERJLDBCQUNBQyxxQ0FBdUNMLGtCQUFTLENBQWhESztBQUVSLElBQU1DLGlCQUFpQkMsT0FBT0MsTUFBTSxDQUFDUixrQkFBUyxHQUN4Q1MsNEJBQTRCQyxJQUFBQSxn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