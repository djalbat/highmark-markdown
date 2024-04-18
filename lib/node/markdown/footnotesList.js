"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("./footnoteItem"));
var _ruleNames = require("../../ruleNames");
var _query = require("../../utilities/query");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var FootnotesListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnotesListMarkdownNode, MarkdownNode);
    var _super = _create_super(FootnotesListMarkdownNode);
    function FootnotesListMarkdownNode() {
        _class_call_check(this, FootnotesListMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(FootnotesListMarkdownNode, [
        {
            key: "identifierToNumberMap",
            value: function identifierToNumberMap(context) {
                var childNodes = this.getChildNodes(), footnoteItemMarkdownNodes = childNodes, identifierToNumberMap = footnoteItemMarkdownNodes.reduce(function(identifierToNumberMap, footnoteItemMarkdownNode, index) {
                    var number = index + 1, identifier = footnoteItemMarkdownNode.identifier(context);
                    identifierToNumberMap[identifier] = number;
                    return identifierToNumberMap;
                }, {});
                return identifierToNumberMap;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var footnotesListMarkdownNode = null;
                var node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteMarkdownNodes = (0, _query.footnoteMarkdownNodesFromNode)(node), footnoteItemMarkdownNodes = [], identifierToFootnoteMarkdownNodeMap = {};
                footnoteMarkdownNodes.forEach(function(footnoteMarkdownNode) {
                    var identifier = footnoteMarkdownNode.identifier(context);
                    identifierToFootnoteMarkdownNodeMap[identifier] = footnoteMarkdownNode;
                });
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context), footnoteMarkdownNode = identifierToFootnoteMarkdownNodeMap[identifier] || null;
                    if (footnoteMarkdownNode !== null) {
                        var footnoteItemMarkdownNode = _footnoteItem.default.fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier);
                        footnoteItemMarkdownNodes.push(footnoteItemMarkdownNode);
                        delete identifierToFootnoteMarkdownNodeMap[identifier];
                    }
                });
                var footnoteItemMarkdownNodesLength = footnoteItemMarkdownNodes.length;
                if (footnoteItemMarkdownNodesLength > 0) {
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = footnoteItemMarkdownNodes, opacity = null;
                    footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
                }
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4vZm9vdG5vdGVJdGVtXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaWRlbnRpZmllclRvTnVtYmVyTWFwKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJUb051bWJlck1hcCA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMucmVkdWNlKChpZGVudGlmaWVyVG9OdW1iZXJNYXAsIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWRlbnRpZmllclRvTnVtYmVyTWFwW2lkZW50aWZpZXJdID0gbnVtYmVyO1xuXG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllclRvTnVtYmVyTWFwO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyVG9OdW1iZXJNYXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgbGlua01hcmtkb3duTm9kZXMgPSBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlcyA9IGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgICBpZGVudGlmaWVyVG9Gb290bm90ZU1hcmtkb3duTm9kZU1hcCA9IHt9O1xuXG4gICAgZm9vdG5vdGVNYXJrZG93bk5vZGVzLmZvckVhY2goKGZvb3Rub3RlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgaWRlbnRpZmllclRvRm9vdG5vdGVNYXJrZG93bk5vZGVNYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZU1hcmtkb3duTm9kZTtcbiAgICB9KTtcblxuICAgIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICAgIGlmIChmb290bm90ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllcik7XG5cbiAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5wdXNoKGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgZGVsZXRlIGlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwW2lkZW50aWZpZXJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgICAgIG9wYWNpdHkgPSBudWxsO1xuXG4gICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyVG9OdW1iZXJNYXAiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzIiwicmVkdWNlIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiaW5kZXgiLCJudW1iZXIiLCJpZGVudGlmaWVyIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwibm9kZSIsImxpbmtNYXJrZG93bk5vZGVzIiwibGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlcyIsImZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaWRlbnRpZmllclRvRm9vdG5vdGVNYXJrZG93bk5vZGVNYXAiLCJmb3JFYWNoIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllciIsInB1c2giLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJGT09UTk9URVNfTElTVF9SVUxFX05BTUUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkk7bUVBQ1k7eUJBRUk7cUJBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsT0FBTztnQkFDM0IsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLDRCQUE0QkYsWUFDNUJGLHdCQUF3QkksMEJBQTBCQyxNQUFNLENBQUMsU0FBQ0wsdUJBQXVCTSwwQkFBMEJDO29CQUN6RyxJQUFNQyxTQUFTRCxRQUFRLEdBQ2pCRSxhQUFhSCx5QkFBeUJHLFVBQVUsQ0FBQ1I7b0JBRXZERCxxQkFBcUIsQ0FBQ1MsV0FBVyxHQUFHRDtvQkFFcEMsT0FBT1I7Z0JBQ1QsR0FBRyxDQUFDO2dCQUVWLE9BQU9BO1lBQ1Q7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRVYsT0FBTztnQkFDM0QsSUFBSVcsNEJBQTRCO2dCQUVoQyxJQUFNQyxPQUFPRixzQkFDUEcsb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0YsT0FDOUNHLHdCQUF3QkMsSUFBQUEsb0NBQTZCLEVBQUNKLE9BQ3REVCw0QkFBNEIsRUFBRSxFQUM5QmMsc0NBQXNDLENBQUM7Z0JBRTdDRixzQkFBc0JHLE9BQU8sQ0FBQyxTQUFDQztvQkFDN0IsSUFBTVgsYUFBYVcscUJBQXFCWCxVQUFVLENBQUNSO29CQUVuRGlCLG1DQUFtQyxDQUFDVCxXQUFXLEdBQUdXO2dCQUNwRDtnQkFFQU4sa0JBQWtCSyxPQUFPLENBQUMsU0FBQ0U7b0JBQ3pCLElBQU1aLGFBQWFZLGlCQUFpQlosVUFBVSxDQUFDUixVQUN6Q21CLHVCQUF1QkYsbUNBQW1DLENBQUNULFdBQVcsSUFBSTtvQkFFaEYsSUFBSVcseUJBQXlCLE1BQU07d0JBQ2pDLElBQU1kLDJCQUEyQmdCLHFCQUF3QixDQUFDQyxxQ0FBcUMsQ0FBQ0gsc0JBQXNCWDt3QkFFdEhMLDBCQUEwQm9CLElBQUksQ0FBQ2xCO3dCQUUvQixPQUFPWSxtQ0FBbUMsQ0FBQ1QsV0FBVztvQkFDeEQ7Z0JBQ0Y7Z0JBRUEsSUFBTWdCLGtDQUFrQ3JCLDBCQUEwQnNCLE1BQU07Z0JBRXhFLElBQUlELGtDQUFrQyxHQUFHO29CQUN2QyxJQUFNRSxXQUFXQyxtQ0FBd0IsRUFDbkMxQixhQUFhRSwyQkFDYnlCLFVBQVU7b0JBRWhCakIsNEJBQTRCa0IsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBbkQxRGhDLDJCQW1Ec0Y0QixVQUFVekIsWUFBWTJCO2dCQUM3SDtnQkFFQSxPQUFPakI7WUFDVDs7O1dBdkRtQmI7RUFBa0MrQixpQkFBWSJ9