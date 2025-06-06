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
        "\n\n  height: 100%;\n  \n"
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
            value: function update(divisionHTMLNode, context) {
                var plainText = divisionHTMLNode.asPlainText(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUGxhaW5UZXh0VGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBsYWluVGV4dDsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFBsYWluVGV4dChwbGFpblRleHQpO1xuICB9XG5cbiAgdXBkYXRlKGRpdmlzaW9uSFRNTE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBkaXZpc2lvbkhUTUxOb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRQbGFpblRleHQocGxhaW5UZXh0KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2xlYXJQbGFpblRleHRUZXh0YXJlYSA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjbGVhclBsYWluVGV4dFRleHRhcmVhLFxuICAgICAgdXBkYXRlUGxhaW5UZXh0VGV4dGFyZWFcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICBjbGFzc05hbWU6IFwicGxhaW4tdGV4dFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQbGFpblRleHRUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiAxMDAlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiUGxhaW5UZXh0VGV4dGFyZWEiLCJzZXRQbGFpblRleHQiLCJwbGFpblRleHQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2xlYXIiLCJFTVBUWV9TVFJJTkciLCJ1cGRhdGUiLCJkaXZpc2lvbkhUTUxOb2RlIiwiY29udGV4dCIsImFzUGxhaW5UZXh0IiwicGFyZW50Q29udGV4dCIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJiaW5kIiwidXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJDQTs7O2VBQUE7OztvRUF6Q3NCOytEQUVEO3lCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTUMsUUFBUUQsV0FBWSxHQUFHO2dCQUU3QixJQUFJLENBQUNFLFFBQVEsQ0FBQ0Q7WUFDaEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsWUFBWUksdUJBQVk7Z0JBRTlCLElBQUksQ0FBQ0wsWUFBWSxDQUFDQztZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxnQkFBZ0IsRUFBRUMsT0FBTztnQkFDOUIsSUFBTVAsWUFBWU0saUJBQWlCRSxXQUFXLENBQUNEO2dCQUUvQyxJQUFJLENBQUNSLFlBQVksQ0FBQ0M7WUFDcEI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMseUJBQXlCLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxJQUFJLENBQUMsSUFBSSxHQUM3Q0MsMEJBQTBCLElBQUksQ0FBQ1AsTUFBTSxDQUFDTSxJQUFJLENBQUMsSUFBSTtnQkFFckQsT0FBUTtvQkFDTkQsd0JBQUFBO29CQUNBRSx5QkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBM0JJZDtFQUEwQmUsaUJBQVE7QUE2QnRDLGlCQTdCSWYsbUJBNkJHZ0IscUJBQW9CO0lBQ3pCQyxVQUFVO0lBQ1ZDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNuQiJ9