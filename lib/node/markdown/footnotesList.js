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
var _necessary = require("necessary");
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
var prune = _necessary.arrayUtilities.prune;
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
            key: "fromFootnoteReplacementsAndDivisionMarkdownNode",
            value: function fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context) {
                var footnotesListMarkdownNode = null;
                var node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteItemReplacements = [];
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context), footnoteReplacement = prune(footnoteReplacements, function(footnoteReplacement) {
                        var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteMarkdownNodeIdentifier = footnoteMarkdownNode.identifier(context);
                        if (footnoteMarkdownNodeIdentifier === identifier) {
                            return true;
                        }
                    }) || null;
                    if (footnoteReplacement !== null) {
                        var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteItemMarkdownNode = _footnoteItem.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnoteItemMarkdownNode, footnoteItemReplacement = footnoteReplacement.expand(ascendantNode);
                        footnoteItemReplacements.push(footnoteItemReplacement);
                    }
                });
                var footnoteItemReplacementsLength = footnoteItemReplacements.length;
                if (footnoteItemReplacementsLength > 0) {
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = [], opacity = null;
                    footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
                }
                footnoteItemReplacements.forEach(function(footnotesItemReplacement) {
                    footnotesItemReplacement.appendTo(footnotesListMarkdownNode, context);
                });
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuL2Zvb3Rub3RlSXRlbVwiO1xuXG5pbXBvcnQgeyBGT09UTk9URVNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IHBydW5lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGlkZW50aWZpZXJUb051bWJlck1hcChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyVG9OdW1iZXJNYXAgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLnJlZHVjZSgoaWRlbnRpZmllclRvTnVtYmVyTWFwLCBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXIgPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlkZW50aWZpZXJUb051bWJlck1hcFtpZGVudGlmaWVyXSA9IG51bWJlcjtcblxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXJUb051bWJlck1hcDtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllclRvTnVtYmVyTWFwO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMgPSBbXTtcblxuICAgIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZVJlcGxhY2VtZW50ID0gcHJ1bmUoZm9vdG5vdGVSZXBsYWNlbWVudHMsIChmb290bm90ZVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBmb290bm90ZVJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlSWRlbnRpZmllciA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGZvb3Rub3RlTWFya2Rvd25Ob2RlSWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgICBhc2NlbmRhbnROb2RlID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQgPSBmb290bm90ZVJlcGxhY2VtZW50LmV4cGFuZChhc2NlbmRhbnROb2RlKTtcblxuICAgICAgICBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMucHVzaChmb290bm90ZUl0ZW1SZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHNMZW5ndGggPSBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IFtdLCAvLy9cbiAgICAgICAgICAgIG9wYWNpdHkgPSBudWxsO1xuXG4gICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcbiAgICB9XG5cbiAgICBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMuZm9yRWFjaCgoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQuYXBwZW5kVG8oZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJwcnVuZSIsImFycmF5VXRpbGl0aWVzIiwiaWRlbnRpZmllclRvTnVtYmVyTWFwIiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyIsInJlZHVjZSIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsImluZGV4IiwibnVtYmVyIiwiaWRlbnRpZmllciIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVSZXBsYWNlbWVudHMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJub2RlIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzIiwiZm9yRWFjaCIsImxpbmtNYXJrZG93bk5vZGUiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiZ2V0Tm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVJZGVudGlmaWVyIiwiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJhc2NlbmRhbnROb2RlIiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQiLCJleHBhbmQiLCJwdXNoIiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJGT09UTk9URVNfTElTVF9SVUxFX05BTUUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJhcHBlbmRUbyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVOO21FQUNZO3lCQUVJO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxPQUFPO2dCQUMzQixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsNEJBQTRCRixZQUM1QkYsd0JBQXdCSSwwQkFBMEJDLE1BQU0sQ0FBQyxTQUFDTCx1QkFBdUJNLDBCQUEwQkM7b0JBQ3pHLElBQU1DLFNBQVNELFFBQVEsR0FDakJFLGFBQWFILHlCQUF5QkcsVUFBVSxDQUFDUjtvQkFFdkRELHFCQUFxQixDQUFDUyxXQUFXLEdBQUdEO29CQUVwQyxPQUFPUjtnQkFDVCxHQUFHLENBQUM7Z0JBRVYsT0FBT0E7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSxnREFBZ0RDLG9CQUFvQixFQUFFQyxvQkFBb0IsRUFBRVgsT0FBTztnQkFDeEcsSUFBSVksNEJBQTRCO2dCQUVoQyxJQUFNQyxPQUFPRixzQkFDUEcsb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0YsT0FDOUNHLDJCQUEyQixFQUFFO2dCQUVuQ0Ysa0JBQWtCRyxPQUFPLENBQUMsU0FBQ0M7b0JBQ3pCLElBQU1WLGFBQWFVLGlCQUFpQlYsVUFBVSxDQUFDUixVQUN6Q21CLHNCQUFzQnRCLE1BQU1hLHNCQUFzQixTQUFDUzt3QkFDakQsSUFBTU4sT0FBT00sb0JBQW9CQyxPQUFPLElBQ2xDQyx1QkFBdUJSLE1BQ3ZCUyxpQ0FBaUNELHFCQUFxQmIsVUFBVSxDQUFDUjt3QkFFdkUsSUFBSXNCLG1DQUFtQ2QsWUFBWTs0QkFDakQsT0FBTzt3QkFDVDtvQkFDRixNQUFNO29CQUVaLElBQUlXLHdCQUF3QixNQUFNO3dCQUNoQyxJQUFNTixPQUFPTSxvQkFBb0JDLE9BQU8sSUFDbENDLHVCQUF1QlIsTUFDdkJSLDJCQUEyQmtCLHFCQUF3QixDQUFDQyxzQ0FBc0MsQ0FBQ0gsc0JBQXNCYixhQUNqSGlCLGdCQUFnQnBCLDBCQUNoQnFCLDBCQUEwQlAsb0JBQW9CUSxNQUFNLENBQUNGO3dCQUUzRFQseUJBQXlCWSxJQUFJLENBQUNGO29CQUNoQztnQkFDRjtnQkFFQSxJQUFNRyxpQ0FBaUNiLHlCQUF5QmMsTUFBTTtnQkFFdEUsSUFBSUQsaUNBQWlDLEdBQUc7b0JBQ3RDLElBQU1FLFdBQVdDLG1DQUF3QixFQUNuQy9CLGFBQWEsRUFBRSxFQUNmZ0MsVUFBVTtvQkFFaEJyQiw0QkFBNEJzQixpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0FyRDFEdkMsMkJBcURzRm1DLFVBQVU5QixZQUFZZ0M7Z0JBQzdIO2dCQUVBakIseUJBQXlCQyxPQUFPLENBQUMsU0FBQ21CO29CQUNoQ0EseUJBQXlCQyxRQUFRLENBQUN6QiwyQkFBMkJaO2dCQUMvRDtnQkFFQSxPQUFPWTtZQUNUOzs7V0E3RG1CaEI7RUFBa0NzQyxpQkFBWSJ9