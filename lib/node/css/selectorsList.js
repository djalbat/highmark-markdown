"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsListCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
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
var SelectorsListCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(SelectorsListCSSNode, CSSNode);
    function SelectorsListCSSNode() {
        _class_call_check(this, SelectorsListCSSNode);
        return _call_super(this, SelectorsListCSSNode, arguments);
    }
    _create_class(SelectorsListCSSNode, [
        {
            key: "asCSS",
            value: function asCSS(context) {
                var css = this.reduceChildNode(function(css, childNode) {
                    var childNodeCSS = childNode.asCSS(context);
                    css = css !== null ? "".concat(css, ",\n").concat(childNodeCSS) : childNodeCSS; ///
                    return css;
                }, null);
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(SelectorsListCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(SelectorsListCSSNode, outerNode);
            }
        }
    ]);
    return SelectorsListCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9zZWxlY3RvcnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzTGlzdENTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjc3MsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlQ1NTID0gY2hpbGROb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgICBjc3MgPSAoY3NzICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgIGAke2Nzc30sXG4ke2NoaWxkTm9kZUNTU31gIDpcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVDU1M7IC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoU2VsZWN0b3JzTGlzdENTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoU2VsZWN0b3JzTGlzdENTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnNMaXN0Q1NTTm9kZSIsImFzQ1NTIiwiY29udGV4dCIsImNzcyIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUNTUyIsImZyb21Ob3RoaW5nIiwiQ1NTTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQU1DLE1BQU0sSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QsS0FBS0U7b0JBQ3JDLElBQU1DLGVBQWVELFVBQVVKLEtBQUssQ0FBQ0M7b0JBRXJDQyxNQUFNLEFBQUNBLFFBQVEsT0FDUCxBQUFDLEdBQ2JHLE9BRGVILEtBQUksT0FDTixPQUFiRyxnQkFDY0EsY0FBYyxHQUFHO29CQUUzQixPQUFPSDtnQkFDVCxHQUFHO2dCQUVILE9BQU9BO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLFlBQU8sQ0FBQ0QsV0FBVyxDQWhCOUJQO1lBZ0JzRDs7O1lBRWxFUyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLFlBQU8sQ0FBQ0MsYUFBYSxDQWxCM0NULHNCQWtCa0VVO1lBQVk7OztXQWxCOUVWO0VBQTZCUSxZQUFPIn0=