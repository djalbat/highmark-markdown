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
var ruleNameNodeQuery = (0, _query.nodeQuery)("/selector/ruleName");
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
    var ruleNameNode = ruleNameNodeQuery(node), whitespace = ruleNameNode !== null;
    return whitespace;
}
function contentFromNodeAndTokens(node, tokens) {
    var content;
    var ruleNameNode = ruleNameNodeQuery(node);
    if (ruleNameNode !== null) {
        var ruleName = ruleNameFromRuleNameNode(ruleNameNode);
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
                    case _markdown.ORDERED_ITEM_MARKDOWN_RULE_NAME:
                        {
                            var tagName1 = _tagName.default[_markdown.ORDERED_LIST_MARKDOWN_RULE_NAME], content1 = "".concat(tagName1, " > ").concat(content1);
                            break;
                        }
                    case _markdown.UNORDERED_ITEM_MARKDOWN_RULE_NAME:
                        {
                            var tagName2 = _tagName.default[_markdown.UNORDERED_LIST_MARKDOWN_RULE_NAME];
                            content = "".concat(tagName2, " > ").concat(content);
                            break;
                        }
                    case _markdown.STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME:
                        {
                            var tagName3 = _tagName.default[_markdown.STRONG_TEXT_MARKDOWN_RULE_NAME];
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
function ruleNameFromRuleNameNode(ruleNameNode) {
    var ruleNameTerminalNode = ruleNameNode.fromFirstChildNode(function(firstChildNode) {
        var ruleNameTerminalNode = firstChildNode; ///
        return ruleNameTerminalNode;
    }), ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(), ruleName = ruleNameTerminalNodeContent; ///
    return ruleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHRhZ05hbWVNYXAgZnJvbSBcIi4uL21hcC90YWdOYW1lXCI7XG5pbXBvcnQgY2xhc3NOYW1lTWFwIGZyb20gXCIuLi9tYXAvY2xhc3NOYW1lXCI7XG5pbXBvcnQgbWFya2Rvd25SdWxlTmFtZXMgZnJvbSBcIi4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcbmltcG9ydCB7IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSxcbiAgICAgICAgIFNUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRSxcbiAgICAgICAgIE9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUsXG4gICAgICAgICBPUkRFUkVEX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FLFxuICAgICAgICAgVU5PUkRFUkVEX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FLFxuICAgICAgICAgVU5PUkRFUkVEX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FLFxuICAgICAgICAgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcblxuY29uc3QgcnVsZU5hbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2VsZWN0b3IvcnVsZU5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBydWxlTmFtZU5vZGUgPSBydWxlTmFtZU5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgd2hpdGVzcGFjZSA9IChydWxlTmFtZU5vZGUgIT09IG51bGwpO1xuXG4gIHJldHVybiB3aGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50O1xuXG4gIGNvbnN0IHJ1bGVOYW1lTm9kZSA9IHJ1bGVOYW1lTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gIGlmIChydWxlTmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJ1bGVOYW1lTm9kZShydWxlTmFtZU5vZGUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUpIHtcbiAgICAgIGNvbnRlbnQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgICBjb25zdCBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbWFya2Rvd25SdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtydWxlTmFtZV07XG5cbiAgICAgICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3RhZ05hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgICBjYXNlIE9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW09SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUVdLFxuXG4gICAgICAgICAgICBjb250ZW50ID0gYCR7dGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBVTk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW1VOT1JERVJFRF9MSVNUX01BUktET1dOX1JVTEVfTkFNRV07XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHt0YWdOYW1lfSA+ICR7Y29udGVudH1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW1NUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRV07XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSA+ICR7dGFnTmFtZX1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVNYXBbcnVsZU5hbWVdO1xuXG4gICAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0uJHtjbGFzc05hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDEsXG4gICAgICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7cmVtYWluaW5nQ29udGVudH1gO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvZmZzZXQgPSAwLFxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lRnJvbVJ1bGVOYW1lTm9kZShydWxlTmFtZU5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGUgPSBydWxlTmFtZU5vZGUuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBydWxlTmFtZVRlcm1pbmFsTm9kZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHJ1bGVOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBydWxlTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvciIsInJ1bGVOYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29udGVudCIsIndoaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzV2hpdGVzcGFjZSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yIiwiY29udGVudEZyb21Ob2RlQW5kVG9rZW5zIiwid2hpdGVzcGFjZUZyb21Ob2RlIiwicnVsZU5hbWVOb2RlIiwicnVsZU5hbWUiLCJydWxlTmFtZUZyb21SdWxlTmFtZU5vZGUiLCJESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUiLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwibWFya2Rvd25SdWxlTmFtZXMiLCJpbmNsdWRlcyIsInRhZ05hbWUiLCJ0YWdOYW1lTWFwIiwiT1JERVJFRF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsIk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJVTk9SREVSRURfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUiLCJVTk9SREVSRURfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwiU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lTWFwIiwib2Zmc2V0IiwicmVtYWluaW5nQ29udGVudCIsInJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldCIsInJ1bGVOYW1lVGVybWluYWxOb2RlIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBbUJxQkE7Ozs4REFqQkU7Z0VBQ0U7Z0VBQ0s7cUJBRUo7eUJBQ0c7dUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTeEQsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYseUJBQU47YUFBTUEsU0FDUEcsT0FBTyxFQUFFQyxVQUFVO2dDQURaSjtRQUVqQixJQUFJLENBQUNHLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhESjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBSUMsV0FBVztnQkFFZixJQUFNUCxVQUFVUSx5QkFBeUJILE1BQU1DO2dCQUUvQyxJQUFJTixZQUFZLE1BQU07b0JBQ3BCLElBQU1DLGFBQWFRLG1CQUFtQko7b0JBRXRDRSxXQUFXLElBdEJJVixTQXNCU0csU0FBU0M7Z0JBQ25DO2dCQUVBLE9BQU9NO1lBQ1Q7OztXQTFCbUJWOztBQTZCckIsU0FBU1ksbUJBQW1CSixJQUFJO0lBQzlCLElBQU1LLGVBQWVaLGtCQUFrQk8sT0FDakNKLGFBQWNTLGlCQUFpQjtJQUVyQyxPQUFPVDtBQUNUO0FBRUEsU0FBU08seUJBQXlCSCxJQUFJLEVBQUVDLE1BQU07SUFDNUMsSUFBSU47SUFFSixJQUFNVSxlQUFlWixrQkFBa0JPO0lBRXZDLElBQUlLLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1DLFdBQVdDLHlCQUF5QkY7UUFFMUMsSUFBSUMsYUFBYUUscUNBQTJCLEVBQUU7WUFDNUNiLFVBQVU7UUFDWixPQUFPO1lBQ0xBLFVBQVVjLHVCQUFZO1lBRXRCLElBQU1DLDRCQUE0QkMsaUJBQWlCLENBQUNDLFFBQVEsQ0FBQ047WUFFN0QsSUFBSUksMkJBQTJCO2dCQUM3QixJQUFNRyxVQUFVQyxnQkFBVSxDQUFDUixTQUFTO2dCQUVwQyxJQUFJTyxZQUFZLE1BQU07b0JBQ3BCbEIsVUFBVSxBQUFDLEdBQVlrQixPQUFWbEIsU0FBa0IsT0FBUmtCO2dCQUN6QjtnQkFFQSxPQUFRUDtvQkFDTixLQUFLUyx5Q0FBK0I7d0JBQUU7NEJBQ3BDLElBQU1GLFdBQVVDLGdCQUFVLENBQUNFLHlDQUErQixDQUFDLEVBRTNEckIsV0FBVSxBQUFDLEdBQWVBLE9BQWJrQixVQUFRLE9BQWEsT0FBUmxCOzRCQUUxQjt3QkFDRjtvQkFFQSxLQUFLc0IsMkNBQWlDO3dCQUFFOzRCQUN0QyxJQUFNSixXQUFVQyxnQkFBVSxDQUFDSSwyQ0FBaUMsQ0FBQzs0QkFFN0R2QixVQUFVLEFBQUMsR0FBZUEsT0FBYmtCLFVBQVEsT0FBYSxPQUFSbEI7NEJBRTFCO3dCQUNGO29CQUVBLEtBQUt3QixxREFBMkM7d0JBQUU7NEJBQ2hELElBQU1OLFdBQVVDLGdCQUFVLENBQUNNLHdDQUE4QixDQUFDOzRCQUUxRHpCLFVBQVUsQUFBQyxHQUFla0IsT0FBYmxCLFNBQVEsT0FBYSxPQUFSa0I7NEJBRTFCO3dCQUNGO2dCQUNGO2dCQUVBLElBQU1RLFlBQVlDLGtCQUFZLENBQUNoQixTQUFTO2dCQUV4QyxJQUFJZSxjQUFjLE1BQU07b0JBQ3RCMUIsVUFBVSxBQUFDLEdBQWEwQixPQUFYMUIsU0FBUSxLQUFhLE9BQVYwQjtnQkFDMUI7Z0JBRUEsSUFBTUUsU0FBUyxHQUNUQyxtQkFBbUJDLElBQUFBLGdEQUF1QyxFQUFDekIsTUFBTUMsUUFBUXNCO2dCQUUvRTVCLFVBQVUsQUFBQyxHQUFZNkIsT0FBVjdCLFNBQTJCLE9BQWpCNkI7WUFDekI7UUFDRjtJQUNGLE9BQU87UUFDTCxJQUFNRCxVQUFTLEdBQ1RDLG9CQUFtQkMsSUFBQUEsZ0RBQXVDLEVBQUN6QixNQUFNQyxRQUFRc0I7UUFFL0U1QixVQUFVNkIsbUJBQWtCLEdBQUc7SUFDakM7SUFFQSxPQUFPN0I7QUFDVDtBQUVBLFNBQVNZLHlCQUF5QkYsWUFBWTtJQUM1QyxJQUFNcUIsdUJBQXVCckIsYUFBYXNCLGtCQUFrQixDQUFDLFNBQUNDO1FBQ3RELElBQU1GLHVCQUF1QkUsZ0JBQWlCLEdBQUc7UUFFakQsT0FBT0Y7SUFDVCxJQUNBRyw4QkFBOEJILHFCQUFxQjdCLFVBQVUsSUFDN0RTLFdBQVd1Qiw2QkFBNkIsR0FBRztJQUVqRCxPQUFPdkI7QUFDVCJ9