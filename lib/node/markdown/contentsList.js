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
    _create_class(ContentsListMarkdownNode, null, [
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsListMarkdownNode = null;
                var childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;
                if (nestedHeadingMarkdownNodesLength > 0) {
                    var ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = childNodesFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), opacity = null;
                    contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                }
                return contentsListMarkdownNode;
            }
        }
    ]);
    return ContentsListMarkdownNode;
}(_markdown.default);
function childNodesFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    var childNodes = nestedHeadingMarkdownNodes.map(function(nestedHeadingMarkdownNode) {
        var contentsItemMarkdownNode = _contentsItem.default.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context), childNode = contentsItemMarkdownNode; ///
        return childNode;
    });
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0l0ZW1cIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBjaGlsZE5lc3RlZE5vZGVzID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzLCAgLy8vXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IENPTlRFTlRTX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgb3BhY2l0eSA9IG51bGw7XG5cbiAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoaWxkTm9kZXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLm1hcCgobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5mcm9tQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlQW5kTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZSA9IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2RlO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJDT05URU5UU19MSVNUX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwibWFwIiwiY29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwiQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZUFuZE5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjaGlsZE5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMSTttRUFDWTt5QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRUMsT0FBTztnQkFDckUsSUFBSUMsMkJBQTJCO2dCQUUvQixJQUFNQyxtQkFBbUJILDBCQUEwQkksbUJBQW1CLElBQ2hFQyw2QkFBNkJGLGtCQUM3QkcsbUNBQW1DRCwyQkFBMkJFLE1BQU07Z0JBRTFFLElBQUlELG1DQUFtQyxHQUFHO29CQUN4QyxJQUFNRSxXQUFXQyxrQ0FBdUIsRUFDbENDLGFBQWFDLHlDQUF5Q04sNEJBQTRCSixVQUNsRlcsVUFBVTtvQkFFaEJWLDJCQUEyQlcsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBYnpEaEIsMEJBYW9GVSxVQUFVRSxZQUFZRTtnQkFDM0g7Z0JBRUEsT0FBT1Y7WUFDVDs7O1dBakJtQko7RUFBaUNlLGlCQUFZO0FBb0JsRSxTQUFTRix5Q0FBeUNOLDBCQUEwQixFQUFFSixPQUFPO0lBQ25GLElBQU1TLGFBQWFMLDJCQUEyQlUsR0FBRyxDQUFDLFNBQUNmO1FBQ2pELElBQU1nQiwyQkFBMkJDLHFCQUF3QixDQUFDQyx3REFBd0QsQ0FBQ3BCLDBCQUEwQkUsMkJBQTJCQyxVQUNsS2tCLFlBQVlILDBCQUEwQixHQUFHO1FBRS9DLE9BQU9HO0lBQ1Q7SUFFQSxPQUFPVDtBQUNUIn0=