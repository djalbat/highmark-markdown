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
var _css1 = require("../../utilities/css");
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
            key: "getSelectorsCSSNodes",
            value: function getSelectorsCSSNodes() {
                var node = this, selectorsCSSNodes = (0, _css1.selectorsCSSNodesFromNode)(node);
                return selectorsCSSNodes;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9zZWxlY3RvcnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcblxuaW1wb3J0IHsgc2VsZWN0b3JzQ1NTTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yc0xpc3RDU1NOb2RlIGV4dGVuZHMgQ1NTTm9kZSB7XG4gIGdldFNlbGVjdG9yc0NTU05vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIHNlbGVjdG9yc0NTU05vZGVzID0gc2VsZWN0b3JzQ1NTTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNDU1NOb2RlcztcbiAgfVxuXG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY3NzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUNTUyA9IGNoaWxkTm9kZS5hc0NTUyhjb250ZXh0KTtcblxuICAgICAgY3NzID0gKGNzcyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICBgJHtjc3N9LFxuJHtjaGlsZE5vZGVDU1N9YCA6XG4gICAgICAgICAgICAgICAgY2hpbGROb2RlQ1NTOyAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFNlbGVjdG9yc0xpc3RDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKFNlbGVjdG9yc0xpc3RDU1NOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JzTGlzdENTU05vZGUiLCJnZXRTZWxlY3RvcnNDU1NOb2RlcyIsIm5vZGUiLCJzZWxlY3RvcnNDU1NOb2RlcyIsInNlbGVjdG9yc0NTU05vZGVzRnJvbU5vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJjc3MiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVDU1MiLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzswREFKRDtvQkFFc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksRUFDWEMsb0JBQW9CQyxJQUFBQSwrQkFBeUIsRUFBQ0Y7Z0JBRXBELE9BQU9DO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFDWCxJQUFNQyxNQUFNLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUNELEtBQUtFO29CQUNyQyxJQUFNQyxlQUFlRCxVQUFVSixLQUFLLENBQUNDO29CQUVyQ0MsTUFBTSxBQUFDQSxRQUFRLE9BQ1AsQUFBQyxHQUNiRyxPQURlSCxLQUFJLE9BQ04sT0FBYkcsZ0JBQ2NBLGNBQWMsR0FBRztvQkFFM0IsT0FBT0g7Z0JBQ1QsR0FBRztnQkFFSCxPQUFPQTtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0F2QjlCWDtZQXVCc0Q7OztZQUVsRWEsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixZQUFPLENBQUNDLGFBQWEsQ0F6QjNDYixzQkF5QmtFYztZQUFZOzs7V0F6QjlFZDtFQUE2QlksWUFBTyJ9