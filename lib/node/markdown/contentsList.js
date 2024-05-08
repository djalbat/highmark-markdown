"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsListMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _contentsItem = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/contentsItem"));
var _ruleNames = require("../../ruleNames");
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
var ContentsListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsListMarkdownNode, MarkdownNode);
    var _super = _create_super(ContentsListMarkdownNode);
    function ContentsListMarkdownNode() {
        _class_call_check(this, ContentsListMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsListMarkdownNode, [
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var childNodes = this.getChildNodes(), contentsItemMarkdownNodes = childNodes; ///
                contentsItemMarkdownNodes.forEach(function(contentsItemMarkdownNode) {
                    contentsItemMarkdownNode.getTokens(tokens);
                });
                return tokens;
            }
        }
    ], [
        {
            key: "fromNestedHeadingMarkdownNodes",
            value: function fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
                var ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = nestedHeadingMarkdownNodes.map(function(nestedHeadingMarkdownNode) {
                    var contentsItemMarkdownNode = _contentsItem.default.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context), childNode = contentsItemMarkdownNode; ///
                    return childNode;
                }), opacity = null, contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                return contentsListMarkdownNode;
            }
        }
    ]);
    return ContentsListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0l0ZW1cIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgY29udGVudHNJdGVtTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05URU5UU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMubWFwKChuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUuZnJvbUNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZUFuZE5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUoQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImdldFRva2VucyIsInRva2VucyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29udGVudHNJdGVtTWFya2Rvd25Ob2RlcyIsImZvckVhY2giLCJjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRleHQiLCJydWxlTmFtZSIsIkNPTlRFTlRTX0xJU1RfUlVMRV9OQU1FIiwibWFwIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21Db250ZW50c0xpc3RNYXJrZG93bk5vZGVBbmROZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwib3BhY2l0eSIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7K0RBTEk7bUVBQ1k7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxBQUFNQSx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVDLFNBQUFBLGlFQUFTLEVBQUU7Z0JBQ25CLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyw0QkFBNEJGLFlBQWEsR0FBRztnQkFFbERFLDBCQUEwQkMsT0FBTyxDQUFDLFNBQUNDO29CQUNqQ0EseUJBQXlCTixTQUFTLENBQUNDO2dCQUNyQztnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUVDLE9BQU87Z0JBQ3ZFLElBQU1DLFdBQVdDLGtDQUF1QixFQUNsQ1QsYUFBYU0sMkJBQTJCSSxHQUFHLENBQUMsU0FBQ0M7b0JBQzNDLElBQU1QLDJCQUEyQlEscUJBQXdCLENBQUNDLHdEQUF3RCxDQWZ6R2hCLDBCQWVvSWMsMkJBQTJCSixVQUNsS08sWUFBWVYsMEJBQTBCLEdBQUc7b0JBRS9DLE9BQU9VO2dCQUNULElBQ0FDLFVBQVUsTUFDVkMsMkJBQTJCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0FyQjdEckIsMEJBcUJ3RlcsVUFBVVIsWUFBWWU7Z0JBRS9ILE9BQU9DO1lBQ1Q7OztXQXhCbUJuQjtFQUFpQ29CLGlCQUFZIn0=