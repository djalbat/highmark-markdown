"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorCSSTransform;
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
var SelectorCSSTransform = /*#__PURE__*/ function(CSSTransform) {
    _inherits(SelectorCSSTransform, CSSTransform);
    function SelectorCSSTransform() {
        _class_call_check(this, SelectorCSSTransform);
        return _call_super(this, SelectorCSSTransform, arguments);
    }
    _create_class(SelectorCSSTransform, [
        {
            key: "mergeWithSelectorCSSNode",
            value: function mergeWithSelectorCSSNode(selectorCSSNode) {
                var cssNode = selectorCSSNode, clone = true;
                this.mergeWith(cssNode, clone);
            }
        }
    ], [
        {
            key: "fromSelectorCSSNode",
            value: function fromSelectorCSSNode(selectorCSSNode) {
                var cssNode = selectorCSSNode, selectorCSSTransform = _css.default.fromCSSNode(SelectorCSSTransform, cssNode);
                return selectorCSSTransform;
            }
        }
    ]);
    return SelectorCSSTransform;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JDU1NUcmFuc2Zvcm0gZXh0ZW5kcyBDU1NUcmFuc2Zvcm0ge1xuICBtZXJnZVdpdGhTZWxlY3RvckNTU05vZGUoc2VsZWN0b3JDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHNlbGVjdG9yQ1NTTm9kZSwgLy8vXG4gICAgICAgICAgY2xvbmUgPSB0cnVlO1xuXG4gICAgdGhpcy5tZXJnZVdpdGgoY3NzTm9kZSwgY2xvbmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvckNTU05vZGUoc2VsZWN0b3JDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHNlbGVjdG9yQ1NTTm9kZSwgLy8vXG4gICAgICAgICAgc2VsZWN0b3JDU1NUcmFuc2Zvcm0gPSBDU1NUcmFuc2Zvcm0uZnJvbUNTU05vZGUoU2VsZWN0b3JDU1NUcmFuc2Zvcm0sIGNzc05vZGUpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yQ1NTVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JDU1NUcmFuc2Zvcm0iLCJtZXJnZVdpdGhTZWxlY3RvckNTU05vZGUiLCJzZWxlY3RvckNTU05vZGUiLCJjc3NOb2RlIiwiY2xvbmUiLCJtZXJnZVdpdGgiLCJmcm9tU2VsZWN0b3JDU1NOb2RlIiwic2VsZWN0b3JDU1NUcmFuc2Zvcm0iLCJDU1NUcmFuc2Zvcm0iLCJmcm9tQ1NTTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MERBRkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkMsZUFBZTtnQkFDdEMsSUFBTUMsVUFBVUQsaUJBQ1ZFLFFBQVE7Z0JBRWQsSUFBSSxDQUFDQyxTQUFTLENBQUNGLFNBQVNDO1lBQzFCOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkosZUFBZTtnQkFDeEMsSUFBTUMsVUFBVUQsaUJBQ1ZLLHVCQUF1QkMsWUFBWSxDQUFDQyxXQUFXLENBVnBDVCxzQkFVMkRHO2dCQUU1RSxPQUFPSTtZQUNUOzs7V0FibUJQO0VBQTZCUSxZQUFZIn0=