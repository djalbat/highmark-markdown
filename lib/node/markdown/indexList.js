"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var IndexListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(IndexListMarkdownNode, MarkdownNode);
    var _super = _create_super(IndexListMarkdownNode);
    function IndexListMarkdownNode() {
        _class_call_check(this, IndexListMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(IndexListMarkdownNode, [
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText = null;
                return plainText;
            }
        }
    ], [
        {
            key: "fromIndexItemReplacements",
            value: function fromIndexItemReplacements(indexItemReplacements) {
                var indexListMarkdownNode = null;
                var indexItemReplacementsLength = indexItemReplacements.length;
                if (indexItemReplacementsLength > 0) {
                    var ruleName = _ruleNames.INDEX_LIST_RULE_NAME, childNodes = indexItemReplacements.map(function(indexItemReplacement) {
                        var indexItemReplacementNode = indexItemReplacement.getIndexItemMarkdownNode(), childNode = indexItemReplacementNode; ///
                        return childNode;
                    }), opacity = null;
                    indexListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(IndexListMarkdownNode, ruleName, childNodes, opacity);
                }
                return indexListMarkdownNode;
            }
        }
    ]);
    return IndexListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2luZGV4TGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBJTkRFWF9MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IG51bGw7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRleEl0ZW1SZXBsYWNlbWVudHMoaW5kZXhJdGVtUmVwbGFjZW1lbnRzKSB7XG4gICAgbGV0IGluZGV4TGlzdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleEl0ZW1SZXBsYWNlbWVudHNMZW5ndGggPSBpbmRleEl0ZW1SZXBsYWNlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4SXRlbVJlcGxhY2VtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gSU5ERVhfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gaW5kZXhJdGVtUmVwbGFjZW1lbnRzLm1hcCgoaW5kZXhJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXhJdGVtUmVwbGFjZW1lbnROb2RlID0gaW5kZXhJdGVtUmVwbGFjZW1lbnQuZ2V0SW5kZXhJdGVtTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGluZGV4SXRlbVJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG9wYWNpdHkgPSBudWxsO1xuXG4gICAgICBpbmRleExpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoSW5kZXhMaXN0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4TGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlzdE1hcmtkb3duTm9kZSIsImFzUGxhaW5UZXh0IiwiY29udGV4dCIsInBsYWluVGV4dCIsImZyb21JbmRleEl0ZW1SZXBsYWNlbWVudHMiLCJpbmRleEl0ZW1SZXBsYWNlbWVudHMiLCJpbmRleExpc3RNYXJrZG93bk5vZGUiLCJpbmRleEl0ZW1SZXBsYWNlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsIklOREVYX0xJU1RfUlVMRV9OQU1FIiwiY2hpbGROb2RlcyIsIm1hcCIsImluZGV4SXRlbVJlcGxhY2VtZW50IiwiaW5kZXhJdGVtUmVwbGFjZW1lbnROb2RlIiwiZ2V0SW5kZXhJdGVtTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKSTt5QkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLHNDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxPQUFPO2dCQUNqQixJQUFNQyxZQUFZO2dCQUVsQixPQUFPQTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMscUJBQXFCO2dCQUNwRCxJQUFJQyx3QkFBd0I7Z0JBRTVCLElBQU1DLDhCQUE4QkYsc0JBQXNCRyxNQUFNO2dCQUVoRSxJQUFJRCw4QkFBOEIsR0FBRztvQkFDbkMsSUFBTUUsV0FBV0MsK0JBQW9CLEVBQy9CQyxhQUFhTixzQkFBc0JPLEdBQUcsQ0FBQyxTQUFDQzt3QkFDdEMsSUFBTUMsMkJBQTJCRCxxQkFBcUJFLHdCQUF3QixJQUN4RUMsWUFBWUYsMEJBQTJCLEdBQUc7d0JBRWhELE9BQU9FO29CQUNULElBQ0FDLFVBQVU7b0JBRWhCWCx3QkFBd0JZLGlCQUFZLENBQUNDLGdDQUFnQyxDQXRCdERuQix1QkFzQjhFUyxVQUFVRSxZQUFZTTtnQkFDckg7Z0JBRUEsT0FBT1g7WUFDVDs7O1dBMUJtQk47RUFBOEJrQixpQkFBWSJ9