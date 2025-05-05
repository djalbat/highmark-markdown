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
        if (ruleName === _ruleNames.DIVISION_RULE_NAME) {
            content = null;
        } else {
            content = _constants.EMPTY_STRING;
            var ruleNamesIncludesRuleName = _ruleNames.default.includes(ruleName);
            if (ruleNamesIncludesRuleName) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJ1bGVOYW1lcyBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vbWFwL3RhZ05hbWVcIjtcbmltcG9ydCBjbGFzc05hbWVNYXAgZnJvbSBcIi4uL21hcC9jbGFzc05hbWVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHsgU1RST05HX1RFWFRfUlVMRV9OQU1FLFxuICAgICAgICBPUkRFUkVEX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICBPUkRFUkVEX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBVTk9SREVSRURfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSB9ID0gcnVsZU5hbWVzO1xuXG5jb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlbGVjdG9yL0BydWxlLW5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIHdoaXRlc3BhY2UgPSAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gIHJldHVybiB3aGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50O1xuXG4gIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKTtcblxuICBpZiAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBydWxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBESVZJU0lPTl9SVUxFX05BTUUpIHtcbiAgICAgIGNvbnRlbnQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgICBjb25zdCBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRhZ05hbWVNYXBbcnVsZU5hbWVdO1xuXG4gICAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9JHt0YWdOYW1lfWA7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY2FzZSBPUkRFUkVEX0lURU1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtPUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcblxuICAgICAgICAgICAgY29udGVudCA9IGAke3RhZ05hbWV9ID4gJHtjb250ZW50fWA7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgVU5PUkRFUkVEX0lURU1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtVTk9SREVSRURfTElTVF9SVUxFX05BTUVdO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gYCR7dGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTmFtZU1hcFtTVFJPTkdfVEVYVF9SVUxFX05BTUVdO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0gPiAke3RhZ05hbWV9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lTWFwW3J1bGVOYW1lXTtcblxuICAgICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9LiR7Y2xhc3NOYW1lfWA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSAxLFxuICAgICAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3JlbWFpbmluZ0NvbnRlbnR9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gMCxcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiU1RST05HX1RFWFRfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIk9SREVSRURfSVRFTV9SVUxFX05BTUUiLCJVTk9SREVSRURfSVRFTV9SVUxFX05BTUUiLCJVTk9SREVSRURfTElTVF9SVUxFX05BTUUiLCJTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbnRlbnQiLCJ3aGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsImhhc1doaXRlc3BhY2UiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvciIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsIndoaXRlc3BhY2VGcm9tTm9kZSIsInJ1bGVOYW1lVGVybWluYWxOb2RlIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwicnVsZU5hbWUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJ0YWdOYW1lIiwidGFnTmFtZU1hcCIsImNsYXNzTmFtZSIsImNsYXNzTmFtZU1hcCIsIm9mZnNldCIsInJlbWFpbmluZ0NvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7OztpRUFsQkM7OERBQ0M7Z0VBQ0U7cUJBRUM7eUJBQ0c7dUJBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMsd0JBS3VDQyxrQkFBUyxDQUxoREQsdUJBQ0FFLHlCQUl1Q0Qsa0JBQVMsQ0FKaERDLHdCQUNBQyx5QkFHdUNGLGtCQUFTLENBSGhERSx3QkFDQUMsMkJBRXVDSCxrQkFBUyxDQUZoREcsMEJBQ0FDLDJCQUN1Q0osa0JBQVMsQ0FEaERJLDBCQUNBQyxxQ0FBdUNMLGtCQUFTLENBQWhESztBQUVSLElBQU1DLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUU3QixJQUFBLEFBQU1ULHlCQUFOO2FBQU1BLFNBQ1BVLE9BQU8sRUFBRUMsVUFBVTtnQ0FEWlg7UUFFakIsSUFBSSxDQUFDVSxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIRFg7O1lBTW5CWSxLQUFB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