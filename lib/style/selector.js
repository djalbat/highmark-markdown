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
var STRONG_TEXT_RULE_NAME = _ruleNames.default.STRONG_TEXT_RULE_NAME, ORDERED_LIST_RULE_NAME = _ruleNames.default.ORDERED_LIST_RULE_NAME, UNORDERED_LIST_RULE_NAME = _ruleNames.default.UNORDERED_LIST_RULE_NAME, ORDERED_ITEM_RULE_NAME = _ruleNames.default.ORDERED_ITEM_RULE_NAME, UNORDERED_ITEM_RULE_NAME = _ruleNames.default.UNORDERED_ITEM_RULE_NAME, STRONGLY_EMPHASISED_TEXT_RULE_NAME = _ruleNames.default.STRONGLY_EMPHASISED_TEXT_RULE_NAME, _elementMap_STRONG_TEXT_RULE_NAME = _elementMap.default[STRONG_TEXT_RULE_NAME], strongTextTagName = _elementMap_STRONG_TEXT_RULE_NAME.tagName, _elementMap_ORDERED_LIST_RULE_NAME = _elementMap.default[ORDERED_LIST_RULE_NAME], orderedListTagName = _elementMap_ORDERED_LIST_RULE_NAME.tagName, _elementMap_UNORDERED_LIST_RULE_NAME = _elementMap.default[UNORDERED_LIST_RULE_NAME], unorderedListTagName = _elementMap_UNORDERED_LIST_RULE_NAME.tagName;
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
                            content = "".concat(orderedListTagName, " > ").concat(content);
                            break;
                        }
                    case UNORDERED_ITEM_RULE_NAME:
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
        }
    } else {
        var offset1 = 0, remainingContent1 = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset1);
        content = remainingContent1; ///
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJ1bGVOYW1lcyBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vZWxlbWVudE1hcFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBTVFJPTkdfVEVYVF9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfTElTVF9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIH0gPSBydWxlTmFtZXMsXG4gICAgICB7IHRhZ05hbWU6IHN0cm9uZ1RleHRUYWdOYW1lIH0gPSBlbGVtZW50TWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV0sXG4gICAgICB7IHRhZ05hbWU6IG9yZGVyZWRMaXN0VGFnTmFtZSB9ID0gZWxlbWVudE1hcFtPUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHsgdGFnTmFtZTogdW5vcmRlcmVkTGlzdFRhZ05hbWUgfSA9IGVsZW1lbnRNYXBbVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FXTtcblxuY29uc3QgcnVsZU5hbWVWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHJ1bGVOYW1lcyksXG4gICAgICBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlbGVjdG9yL0BydWxlLW5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIHdoaXRlc3BhY2UgPSAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gIHJldHVybiB3aGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50O1xuXG4gIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKTtcblxuICBpZiAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBydWxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBESVZJU0lPTl9SVUxFX05BTUUpIHtcbiAgICAgIGNvbnRlbnQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgICBjb25zdCBydWxlTmFtZVZhbHVlc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZVZhbHVlcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlTmFtZVZhbHVlc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgeyB0YWdOYW1lLCBjbGFzc05hbWUgfSA9IGVsZW1lbnRNYXBbcnVsZU5hbWVdO1xuXG4gICAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9JHt0YWdOYW1lfWA7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY2FzZSBPUkRFUkVEX0lURU1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb250ZW50ID0gYCR7b3JkZXJlZExpc3RUYWdOYW1lfSA+ICR7Y29udGVudH1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFVOT1JERVJFRF9JVEVNX1JVTEVfTkFNRToge1xuICAgICAgICAgICAgY29udGVudCA9IGAke3Vub3JkZXJlZExpc3RUYWdOYW1lfSA+ICR7Y29udGVudH1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSA+ICR7c3Ryb25nVGV4dFRhZ05hbWV9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fS4ke2NsYXNzTmFtZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMSxcbiAgICAgICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldChub2RlLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9JHtyZW1haW5pbmdDb250ZW50fWA7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG9mZnNldCA9IDAsXG4gICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldChub2RlLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvciIsIlNUUk9OR19URVhUX1JVTEVfTkFNRSIsInJ1bGVOYW1lcyIsIk9SREVSRURfTElTVF9SVUxFX05BTUUiLCJVTk9SREVSRURfTElTVF9SVUxFX05BTUUiLCJPUkRFUkVEX0lURU1fUlVMRV9OQU1FIiwiVU5PUkRFUkVEX0lURU1fUlVMRV9OQU1FIiwiU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSIsImVsZW1lbnRNYXAiLCJ0YWdOYW1lIiwic3Ryb25nVGV4dFRhZ05hbWUiLCJvcmRlcmVkTGlzdFRhZ05hbWUiLCJ1bm9yZGVyZWRMaXN0VGFnTmFtZSIsInJ1bGVOYW1lVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbnRlbnQiLCJ3aGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsImhhc1doaXRlc3BhY2UiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvciIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsIndoaXRlc3BhY2VGcm9tTm9kZSIsInJ1bGVOYW1lVGVybWluYWxOb2RlIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwicnVsZU5hbWUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZVZhbHVlc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImNsYXNzTmFtZSIsIm9mZnNldCIsInJlbWFpbmluZ0NvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBdUJxQkE7OztpRUFyQkM7aUVBQ0M7cUJBRUc7eUJBQ0c7dUJBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMsd0JBS3VDQyxrQkFBUyxDQUxoREQsdUJBQ0FFLHlCQUl1Q0Qsa0JBQVMsQ0FKaERDLHdCQUNBQywyQkFHdUNGLGtCQUFTLENBSGhERSwwQkFDQUMseUJBRXVDSCxrQkFBUyxDQUZoREcsd0JBQ0FDLDJCQUN1Q0osa0JBQVMsQ0FEaERJLDBCQUNBQyxxQ0FBdUNMLGtCQUFTLENBQWhESyxvQ0FDK0JDLG9DQUFBQSxtQkFBVSxDQUFDUCxzQkFBc0IsRUFBaEVRLEFBQVNDLG9CQUFzQkYsa0NBQS9CQyxTQUNnQ0QscUNBQUFBLG1CQUFVLENBQUNMLHVCQUF1QixFQUFsRU0sQUFBU0UscUJBQXVCSCxtQ0FBaENDLFNBQ2tDRCx1Q0FBQUEsbUJBQVUsQ0FBQ0oseUJBQXlCLEVBQXRFSyxBQUFTRyx1QkFBeUJKLHFDQUFsQ0M7QUFFUixJQUFNSSxpQkFBaUJDLE9BQU9DLE1BQU0sQ0FBQ2Isa0JBQVMsR0FDeENjLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUU3QixJQUFBLEFBQU1qQix5QkFBRCxBQUFMO2FBQU1BLFNBQ1BrQixPQUFPLEVBQUVDLFVBQVU7Z0NBRFpuQjtRQUVqQixJQUFJLENBQUNrQixPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIRG5COztZQU1uQm9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBSUMsV0FBVztnQkFFZixJQUFNUCxVQUFVUSx5QkFBeUJILE1BQU1DO2dCQUUvQyxJQUFJTixZQUFZLE1BQU07b0JBQ3BCLElBQU1DLGFBQWFRLG1CQUFtQko7b0JBRXRDRSxXQUFXLElBdEJJekIsU0FzQlNrQixTQUFTQztnQkFDbkM7Z0JBRUEsT0FBT007WUFDVDs7O1dBMUJtQnpCOztBQTZCckIsU0FBUzJCLG1CQUFtQkosSUFBSTtJQUM5QixJQUFNSyx1QkFBdUJaLDBCQUEwQk8sT0FDakRKLGFBQWNTLHlCQUF5QjtJQUU3QyxPQUFPVDtBQUNUO0FBRUEsU0FBU08seUJBQXlCSCxJQUFJLEVBQUVDLE1BQU07SUFDNUMsSUFBSU47SUFFSixJQUFNVSx1QkFBdUJaLDBCQUEwQk87SUFFdkQsSUFBSUsseUJBQXlCLE1BQU07UUFDakMsSUFBTUMsOEJBQThCRCxxQkFBcUJSLFVBQVUsSUFDN0RVLFdBQVdELDZCQUE2QixHQUFHO1FBRWpELElBQUlDLGFBQWFDLDZCQUFrQixFQUFFO1lBQ25DYixVQUFVO1FBQ1osT0FBTztZQUNMQSxVQUFVYyx1QkFBWTtZQUV0QixJQUFNQyxpQ0FBaUNwQixlQUFlcUIsUUFBUSxDQUFDSjtZQUUvRCxJQUFJRyxnQ0FBZ0M7Z0JBQ2xDLElBQStCekIsdUJBQUFBLG1CQUFVLENBQUNzQixTQUFTLEVBQTNDckIsVUFBdUJELHFCQUF2QkMsU0FBUzBCLFlBQWMzQixxQkFBZDJCO2dCQUVqQixJQUFJMUIsWUFBWSxNQUFNO29CQUNwQlMsVUFBVSxBQUFDLEdBQVlULE9BQVZTLFNBQWtCLE9BQVJUO2dCQUN6QjtnQkFFQSxPQUFRcUI7b0JBQ04sS0FBS3pCO3dCQUF3Qjs0QkFDM0JhLFVBQVUsQUFBQyxHQUEwQkEsT0FBeEJQLG9CQUFtQixPQUFhLE9BQVJPOzRCQUVyQzt3QkFDRjtvQkFFQSxLQUFLWjt3QkFBMEI7NEJBQzdCWSxVQUFVLEFBQUMsR0FBNEJBLE9BQTFCTixzQkFBcUIsT0FBYSxPQUFSTTs0QkFFdkM7d0JBQ0Y7b0JBRUEsS0FBS1g7d0JBQW9DOzRCQUN2Q1csVUFBVSxBQUFDLEdBQWVSLE9BQWJRLFNBQVEsT0FBdUIsT0FBbEJSOzRCQUUxQjt3QkFDRjtnQkFDRjtnQkFFQSxJQUFJeUIsY0FBYyxNQUFNO29CQUN0QmpCLFVBQVUsQUFBQyxHQUFhaUIsT0FBWGpCLFNBQVEsS0FBYSxPQUFWaUI7Z0JBQzFCO2dCQUVBLElBQU1DLFNBQVMsR0FDVEMsbUJBQW1CQyxJQUFBQSxnREFBdUMsRUFBQ2YsTUFBTUMsUUFBUVk7Z0JBRS9FbEIsVUFBVSxBQUFDLEdBQVltQixPQUFWbkIsU0FBMkIsT0FBakJtQjtZQUN6QjtRQUNGO0lBQ0YsT0FBTztRQUNMLElBQU1ELFVBQVMsR0FDVEMsb0JBQW1CQyxJQUFBQSxnREFBdUMsRUFBQ2YsTUFBTUMsUUFBUVk7UUFFL0VsQixVQUFVbUIsbUJBQWtCLEdBQUc7SUFDakM7SUFFQSxPQUFPbkI7QUFDVCJ9