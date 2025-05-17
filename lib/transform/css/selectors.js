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
            key: "appendToSelectorsListCSSNode",
            value: function appendToSelectorsListCSSNode(selectorsListCSSNode) {
                var cssNode = selectorsListCSSNode; ///
                this.appendTo(cssNode);
            }
        },
        {
            key: "mergeWithSelectorsCSSNode",
            value: function mergeWithSelectorsCSSNode(selectorsCSSNode) {
                var cssNode = selectorsCSSNode; ///
                cssNode = this.mergeWith(cssNode);
                selectorsCSSNode = cssNode; ///
                var selectorsCSSTransform = SelectorsCSSTransform.fromSelectorsCSSNode(selectorsCSSNode);
                return selectorsCSSTransform;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3NlbGVjdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU1RyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2Nzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yc0NTU1RyYW5zZm9ybSBleHRlbmRzIENTU1RyYW5zZm9ybSB7XG4gIGFwcGVuZFRvU2VsZWN0b3JzTGlzdENTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpIHtcbiAgICBjb25zdCBjc3NOb2RlID0gc2VsZWN0b3JzTGlzdENTU05vZGU7IC8vL1xuXG4gICAgdGhpcy5hcHBlbmRUbyhjc3NOb2RlKTtcbiAgfVxuXG4gIG1lcmdlV2l0aFNlbGVjdG9yc0NTU05vZGUoc2VsZWN0b3JzQ1NTTm9kZSkge1xuICAgIGxldCBjc3NOb2RlID0gc2VsZWN0b3JzQ1NTTm9kZTsgLy8vXG5cbiAgICBjc3NOb2RlID0gdGhpcy5tZXJnZVdpdGgoY3NzTm9kZSk7XG5cbiAgICBzZWxlY3RvcnNDU1NOb2RlID0gY3NzTm9kZTsgIC8vL1xuXG4gICAgY29uc3Qgc2VsZWN0b3JzQ1NTVHJhbnNmb3JtID0gU2VsZWN0b3JzQ1NTVHJhbnNmb3JtLmZyb21TZWxlY3RvcnNDU1NOb2RlKHNlbGVjdG9yc0NTU05vZGUpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0NTU1RyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JzQ1NTTm9kZShzZWxlY3RvcnNDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHNlbGVjdG9yc0NTU05vZGUsIC8vL1xuICAgICAgICAgIHNlbGVjdG9yc0NTU1RyYW5zZm9ybSA9IENTU1RyYW5zZm9ybS5mcm9tQ1NTTm9kZShTZWxlY3RvcnNDU1NUcmFuc2Zvcm0sIGNzc05vZGUpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0NTU1RyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yc0NTU1RyYW5zZm9ybSIsImFwcGVuZFRvU2VsZWN0b3JzTGlzdENTU05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTTm9kZSIsImNzc05vZGUiLCJhcHBlbmRUbyIsIm1lcmdlV2l0aFNlbGVjdG9yc0NTU05vZGUiLCJzZWxlY3RvcnNDU1NOb2RlIiwibWVyZ2VXaXRoIiwic2VsZWN0b3JzQ1NTVHJhbnNmb3JtIiwiZnJvbVNlbGVjdG9yc0NTU05vZGUiLCJDU1NUcmFuc2Zvcm0iLCJmcm9tQ1NTTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MERBRkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkMsb0JBQW9CO2dCQUMvQyxJQUFNQyxVQUFVRCxzQkFBc0IsR0FBRztnQkFFekMsSUFBSSxDQUFDRSxRQUFRLENBQUNEO1lBQ2hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQkMsZ0JBQWdCO2dCQUN4QyxJQUFJSCxVQUFVRyxrQkFBa0IsR0FBRztnQkFFbkNILFVBQVUsSUFBSSxDQUFDSSxTQUFTLENBQUNKO2dCQUV6QkcsbUJBQW1CSCxTQUFVLEdBQUc7Z0JBRWhDLElBQU1LLHdCQUF3QlIsQUFkYkEsc0JBY21DUyxvQkFBb0IsQ0FBQ0g7Z0JBRXpFLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCSCxnQkFBZ0I7Z0JBQzFDLElBQU1ILFVBQVVHLGtCQUNWRSx3QkFBd0JFLFlBQVksQ0FBQ0MsV0FBVyxDQXJCckNYLHVCQXFCNkRHO2dCQUU5RSxPQUFPSztZQUNUOzs7V0F4Qm1CUjtFQUE4QlUsWUFBWSJ9