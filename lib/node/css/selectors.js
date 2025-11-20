"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsCSSNode;
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
var SelectorsCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(SelectorsCSSNode, CSSNode);
    function SelectorsCSSNode() {
        _class_call_check(this, SelectorsCSSNode);
        return _call_super(this, SelectorsCSSNode, arguments);
    }
    _create_class(SelectorsCSSNode, [
        {
            key: "asCSS",
            value: function asCSS(context) {
                var css;
                var cssSelectorsString = context.cssSelectorsString;
                css = this.reduceChildNode(function(css, childNode) {
                    var childNodeCSS = childNode.asCSS(context);
                    css = css !== null ? "".concat(css).concat(childNodeCSS) : childNodeCSS; ///
                    return css;
                }, null);
                css = "".concat(cssSelectorsString, " ").concat(css);
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(SelectorsCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(SelectorsCSSNode, outerNode);
            }
        }
    ]);
    return SelectorsCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvcnNDU1NOb2RlIGV4dGVuZHMgQ1NTTm9kZSB7XG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBsZXQgY3NzO1xuXG4gICAgY29uc3QgeyBjc3NTZWxlY3RvcnNTdHJpbmcgfSA9IGNvbnRleHQ7XG5cbiAgICBjc3MgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY3NzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUNTUyA9IGNoaWxkTm9kZS5hc0NTUyhjb250ZXh0KTtcblxuICAgICAgY3NzID0gKGNzcyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICBgJHtjc3N9JHtjaGlsZE5vZGVDU1N9YCA6XG4gICAgICAgICAgICAgICAgY2hpbGROb2RlQ1NTOyAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBudWxsKTtcblxuICAgIGNzcyA9IGAke2Nzc1NlbGVjdG9yc1N0cmluZ30gJHtjc3N9YDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFNlbGVjdG9yc0NTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoU2VsZWN0b3JzQ1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yc0NTU05vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJjc3MiLCJjc3NTZWxlY3RvcnNTdHJpbmciLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVDU1MiLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzswREFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQUlDO2dCQUVKLElBQU0sQUFBRUMscUJBQXVCRixRQUF2QkU7Z0JBRVJELE1BQU0sSUFBSSxDQUFDRSxlQUFlLENBQUMsU0FBQ0YsS0FBS0c7b0JBQy9CLElBQU1DLGVBQWVELFVBQVVMLEtBQUssQ0FBQ0M7b0JBRXJDQyxNQUFNLEFBQUNBLFFBQVEsT0FDUCxBQUFDLEdBQVFJLE9BQU5KLEtBQW1CLE9BQWJJLGdCQUNQQSxjQUFjLEdBQUc7b0JBRTNCLE9BQU9KO2dCQUNULEdBQUc7Z0JBRUhBLE1BQU0sQUFBQyxHQUF3QkEsT0FBdEJDLG9CQUFtQixLQUFPLE9BQUpEO2dCQUUvQixPQUFPQTtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0FyQjlCUjtZQXFCa0Q7OztZQUU5RFUsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixZQUFPLENBQUNDLGFBQWEsQ0F2QjNDVixrQkF1QjhEVztZQUFZOzs7V0F2QjFFWDtFQUF5QlMsWUFBTyJ9