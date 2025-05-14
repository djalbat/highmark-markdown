"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsCSSTransform;
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
var SelectorsCSSTransform = /*#__PURE__*/ function(CSSTransform) {
    _inherits(SelectorsCSSTransform, CSSTransform);
    function SelectorsCSSTransform() {
        _class_call_check(this, SelectorsCSSTransform);
        return _call_super(this, SelectorsCSSTransform, arguments);
    }
    _create_class(SelectorsCSSTransform, [
        {
            key: "mergeWithSelectorsCSSNode",
            value: function mergeWithSelectorsCSSNode(selectorsListCSSNode) {
                var cssNode = selectorsListCSSNode; ///
                this.mergeWith(cssNode);
            }
        }
    ], [
        {
            key: "fromSelectorsCSSNode",
            value: function fromSelectorsCSSNode(selectorsCSSNode) {
                var cssNode = selectorsCSSNode, selectorsCSSTransform = _css.default.fromCSSNode(SelectorsCSSTransform, cssNode);
                return selectorsCSSTransform;
            }
        }
    ]);
    return SelectorsCSSTransform;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3NlbGVjdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU1RyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2Nzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yc0NTU1RyYW5zZm9ybSBleHRlbmRzIENTU1RyYW5zZm9ybSB7XG4gIG1lcmdlV2l0aFNlbGVjdG9yc0NTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpIHtcbiAgICBjb25zdCBjc3NOb2RlID0gc2VsZWN0b3JzTGlzdENTU05vZGU7IC8vL1xuXG4gICAgdGhpcy5tZXJnZVdpdGgoY3NzTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc0NTU05vZGUoc2VsZWN0b3JzQ1NTTm9kZSkge1xuICAgIGNvbnN0IGNzc05vZGUgPSBzZWxlY3RvcnNDU1NOb2RlLCAvLy9cbiAgICAgICAgICBzZWxlY3RvcnNDU1NUcmFuc2Zvcm0gPSBDU1NUcmFuc2Zvcm0uZnJvbUNTU05vZGUoU2VsZWN0b3JzQ1NTVHJhbnNmb3JtLCBjc3NOb2RlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNDU1NUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnNDU1NUcmFuc2Zvcm0iLCJtZXJnZVdpdGhTZWxlY3RvcnNDU1NOb2RlIiwic2VsZWN0b3JzTGlzdENTU05vZGUiLCJjc3NOb2RlIiwibWVyZ2VXaXRoIiwiZnJvbVNlbGVjdG9yc0NTU05vZGUiLCJzZWxlY3RvcnNDU1NOb2RlIiwic2VsZWN0b3JzQ1NTVHJhbnNmb3JtIiwiQ1NTVHJhbnNmb3JtIiwiZnJvbUNTU05vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBEQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJDLG9CQUFvQjtnQkFDNUMsSUFBTUMsVUFBVUQsc0JBQXNCLEdBQUc7Z0JBRXpDLElBQUksQ0FBQ0UsU0FBUyxDQUFDRDtZQUNqQjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJDLGdCQUFnQjtnQkFDMUMsSUFBTUgsVUFBVUcsa0JBQ1ZDLHdCQUF3QkMsWUFBWSxDQUFDQyxXQUFXLENBVHJDVCx1QkFTNkRHO2dCQUU5RSxPQUFPSTtZQUNUOzs7V0FabUJQO0VBQThCUSxZQUFZIn0=