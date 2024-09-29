"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
var _constants = require("../../constants");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  height: 48rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PlainTextTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(PlainTextTextarea, Textarea);
    function PlainTextTextarea() {
        _class_call_check(this, PlainTextTextarea);
        return _call_super(this, PlainTextTextarea, arguments);
    }
    _create_class(PlainTextTextarea, [
        {
            key: "setPlainText",
            value: function setPlainText(plainText) {
                var value = plainText; ///
                this.setValue(value);
            }
        },
        {
            key: "clear",
            value: function clear() {
                var plainText = _constants.EMPTY_STRING;
                this.setPlainText(plainText);
            }
        },
        {
            key: "update",
            value: function update(plainText) {
                this.setPlainText(plainText);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var clearPlainTextTextarea = this.clear.bind(this), updatePlainTextTextarea = this.update.bind(this);
                return {
                    clearPlainTextTextarea: clearPlainTextTextarea,
                    updatePlainTextTextarea: updatePlainTextTextarea
                };
            }
        }
    ]);
    return PlainTextTextarea;
}(_textarea.default);
_define_property(PlainTextTextarea, "defaultProperties", {
    readOnly: true,
    className: "plain-text"
});
var _default = (0, _easywithstyle.default)(PlainTextTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUGxhaW5UZXh0VGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBsYWluVGV4dDsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFBsYWluVGV4dChwbGFpblRleHQpO1xuICB9XG5cbiAgdXBkYXRlKHBsYWluVGV4dCkge1xuICAgIHRoaXMuc2V0UGxhaW5UZXh0KHBsYWluVGV4dCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNsZWFyUGxhaW5UZXh0VGV4dGFyZWEgPSB0aGlzLmNsZWFyLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHVwZGF0ZVBsYWluVGV4dFRleHRhcmVhID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgY2xlYXJQbGFpblRleHRUZXh0YXJlYSxcbiAgICAgIHVwZGF0ZVBsYWluVGV4dFRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBcInBsYWluLXRleHRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUGxhaW5UZXh0VGV4dGFyZWEpYFxuXG4gIGhlaWdodDogNDhyZW07XG4gIFxuYDsiXSwibmFtZXMiOlsiUGxhaW5UZXh0VGV4dGFyZWEiLCJzZXRQbGFpblRleHQiLCJwbGFpblRleHQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2xlYXIiLCJFTVBUWV9TVFJJTkciLCJ1cGRhdGUiLCJwYXJlbnRDb250ZXh0IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImJpbmQiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsIlRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJyZWFkT25seSIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUNBOzs7ZUFBQTs7O29FQXZDc0I7K0RBRUQ7eUJBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU1DLFFBQVFELFdBQVksR0FBRztnQkFFN0IsSUFBSSxDQUFDRSxRQUFRLENBQUNEO1lBQ2hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILFlBQVlJLHVCQUFZO2dCQUU5QixJQUFJLENBQUNMLFlBQVksQ0FBQ0M7WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0wsU0FBUztnQkFDZCxJQUFJLENBQUNELFlBQVksQ0FBQ0M7WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMseUJBQXlCLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxJQUFJLENBQUMsSUFBSSxHQUM3Q0MsMEJBQTBCLElBQUksQ0FBQ0osTUFBTSxDQUFDRyxJQUFJLENBQUMsSUFBSTtnQkFFckQsT0FBUTtvQkFDTkQsd0JBQUFBO29CQUNBRSx5QkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBekJJWDtFQUEwQlksaUJBQVE7QUEyQnRDLGlCQTNCSVosbUJBMkJHYSxxQkFBb0I7SUFDekJDLFVBQVU7SUFDVkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2hCIn0=