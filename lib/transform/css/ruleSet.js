"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSetCSSTransform;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../transform/css"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var RuleSetCSSTransform = /*#__PURE__*/ function(CSSTransform) {
    _inherits(RuleSetCSSTransform, CSSTransform);
    function RuleSetCSSTransform() {
        _class_call_check(this, RuleSetCSSTransform);
        return _call_super(this, RuleSetCSSTransform, arguments);
    }
    _create_class(RuleSetCSSTransform, [
        {
            key: "getRuleSetCSSNode",
            value: function getRuleSetCSSNode() {
                var cssNode = this.getCSSNode(), ruleSetCSSNode = cssNode; ///
                return ruleSetCSSNode;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var ruleSetCSSNode = this.getRuleSetCSSNode();
                ruleSetCSSNode.resolve(context);
            }
        }
    ], [
        {
            key: "fromRuleSetCSSNode",
            value: function fromRuleSetCSSNode(ruleSetCSSNode) {
                var cssNode = ruleSetCSSNode, paragraphCSSTransform = _css.default.fromCSSNode(RuleSetCSSTransform, cssNode);
                return paragraphCSSTransform;
            }
        }
    ]);
    return RuleSetCSSTransform;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3J1bGVTZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0Q1NTVHJhbnNmb3JtIGV4dGVuZHMgQ1NTVHJhbnNmb3JtIHtcbiAgZ2V0UnVsZVNldENTU05vZGUoKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHRoaXMuZ2V0Q1NTTm9kZSgpLFxuICAgICAgICAgIHJ1bGVTZXRDU1NOb2RlID0gY3NzTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZVNldENTU05vZGU7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlU2V0Q1NTTm9kZSA9IHRoaXMuZ2V0UnVsZVNldENTU05vZGUoKTtcblxuICAgIHJ1bGVTZXRDU1NOb2RlLnJlc29sdmUoY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRDU1NOb2RlKHJ1bGVTZXRDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHJ1bGVTZXRDU1NOb2RlLCAvLy9cbiAgICAgICAgICBwYXJhZ3JhcGhDU1NUcmFuc2Zvcm0gPSBDU1NUcmFuc2Zvcm0uZnJvbUNTU05vZGUoUnVsZVNldENTU1RyYW5zZm9ybSwgY3NzTm9kZSk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoQ1NTVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldENTU1RyYW5zZm9ybSIsImdldFJ1bGVTZXRDU1NOb2RlIiwiY3NzTm9kZSIsImdldENTU05vZGUiLCJydWxlU2V0Q1NTTm9kZSIsInJlc29sdmUiLCJjb250ZXh0IiwiZnJvbVJ1bGVTZXRDU1NOb2RlIiwicGFyYWdyYXBoQ1NTVHJhbnNmb3JtIiwiQ1NTVHJhbnNmb3JtIiwiZnJvbUNTU05vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBEQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsaUJBQWlCRixTQUFTLEdBQUc7Z0JBRW5DLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNRixpQkFBaUIsSUFBSSxDQUFDSCxpQkFBaUI7Z0JBRTdDRyxlQUFlQyxPQUFPLENBQUNDO1lBQ3pCOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkgsY0FBYztnQkFDdEMsSUFBTUYsVUFBVUUsZ0JBQ1ZJLHdCQUF3QkMsWUFBWSxDQUFDQyxXQUFXLENBaEJyQ1YscUJBZ0IyREU7Z0JBRTVFLE9BQU9NO1lBQ1Q7OztXQW5CbUJSO0VBQTRCUyxZQUFZIn0=