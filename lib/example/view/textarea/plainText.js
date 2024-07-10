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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: 100%;\n  height: 24rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PlainTextTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(PlainTextTextarea, Textarea);
    var _super = _create_super(PlainTextTextarea);
    function PlainTextTextarea() {
        _class_call_check(this, PlainTextTextarea);
        return _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUGxhaW5UZXh0VGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBsYWluVGV4dDsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFBsYWluVGV4dChwbGFpblRleHQpO1xuICB9XG5cbiAgdXBkYXRlKHBsYWluVGV4dCkge1xuICAgIHRoaXMuc2V0UGxhaW5UZXh0KHBsYWluVGV4dCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNsZWFyUGxhaW5UZXh0VGV4dGFyZWEgPSB0aGlzLmNsZWFyLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHVwZGF0ZVBsYWluVGV4dFRleHRhcmVhID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgY2xlYXJQbGFpblRleHRUZXh0YXJlYSxcbiAgICAgIHVwZGF0ZVBsYWluVGV4dFRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBcInBsYWluLXRleHRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUGxhaW5UZXh0VGV4dGFyZWEpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI0cmVtO1xuICBcbmA7Il0sIm5hbWVzIjpbIlBsYWluVGV4dFRleHRhcmVhIiwic2V0UGxhaW5UZXh0IiwicGxhaW5UZXh0IiwidmFsdWUiLCJzZXRWYWx1ZSIsImNsZWFyIiwiRU1QVFlfU1RSSU5HIiwidXBkYXRlIiwicGFyZW50Q29udGV4dCIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJiaW5kIiwidXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlDQTs7O2VBQUE7OztvRUF2Q3NCOytEQUVEO3lCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSxrQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxTQUFTO2dCQUNwQixJQUFNQyxRQUFRRCxXQUFZLEdBQUc7Z0JBRTdCLElBQUksQ0FBQ0UsUUFBUSxDQUFDRDtZQUNoQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxZQUFZSSx1QkFBWTtnQkFFOUIsSUFBSSxDQUFDTCxZQUFZLENBQUNDO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9MLFNBQVM7Z0JBQ2QsSUFBSSxDQUFDRCxZQUFZLENBQUNDO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHlCQUF5QixJQUFJLENBQUNKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLElBQUksR0FDN0NDLDBCQUEwQixJQUFJLENBQUNKLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLElBQUk7Z0JBRXJELE9BQVE7b0JBQ05ELHdCQUFBQTtvQkFDQUUseUJBQUFBO2dCQUNGO1lBQ0Y7OztXQXpCSVg7RUFBMEJZLGlCQUFRO0FBMkJ0QyxpQkEzQklaLG1CQTJCR2EscUJBQW9CO0lBQ3pCQyxVQUFVO0lBQ1ZDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNoQiJ9