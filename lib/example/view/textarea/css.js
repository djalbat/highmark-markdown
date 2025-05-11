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
var CSSTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(CSSTextarea, Textarea);
    function CSSTextarea() {
        _class_call_check(this, CSSTextarea);
        return _call_super(this, CSSTextarea, arguments);
    }
    _create_class(CSSTextarea, [
        {
            key: "setCSS",
            value: function setCSS(css) {
                var value = css; ///
                this.setValue(value);
            }
        },
        {
            key: "clearCSS",
            value: function clearCSS() {
                var css = _constants.EMPTY_STRING;
                this.setCSS(css);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setCSS = this.setCSS.bind(this), clearCSS = this.clearCSS.bind(this);
                return {
                    setCSS: setCSS,
                    clearCSS: clearCSS
                };
            }
        }
    ]);
    return CSSTextarea;
}(_textarea.default);
_define_property(CSSTextarea, "defaultProperties", {
    readOnly: true,
    className: "css",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(CSSTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5pbXBvcnQge0VNUFRZX1NUUklOR30gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBDU1NUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IHZhbHVlID0gY3NzOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyQ1NTKCkge1xuICAgIGNvbnN0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldENTUyA9IHRoaXMuc2V0Q1NTLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJDU1MgPSB0aGlzLmNsZWFyQ1NTLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldENTUyxcbiAgICAgIGNsZWFyQ1NTXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBcImNzc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ1NTVGV4dGFyZWEpYFxuXG4gIGhlaWdodDogMTAwJTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkNTU1RleHRhcmVhIiwic2V0Q1NTIiwiY3NzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImNsZWFyQ1NTIiwiRU1QVFlfU1RSSU5HIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQ0E7OztlQUFBOzs7b0VBbkNzQjsrREFFRDt5QkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEsNEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxHQUFHO2dCQUNSLElBQU1DLFFBQVFELEtBQU0sR0FBRztnQkFFdkIsSUFBSSxDQUFDRSxRQUFRLENBQUNEO1lBQ2hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILE1BQU1JLHVCQUFZO2dCQUV4QixJQUFJLENBQUNMLE1BQU0sQ0FBQ0M7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTixTQUFTLElBQUksQ0FBQ0EsTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUM5QkgsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLElBQUk7Z0JBRXhDLE9BQVE7b0JBQ05QLFFBQUFBO29CQUNBSSxVQUFBQTtnQkFDRjtZQUNGOzs7V0FyQklMO0VBQW9CUyxpQkFBUTtBQXVCaEMsaUJBdkJJVCxhQXVCR1UscUJBQW9CO0lBQ3pCQyxVQUFVO0lBQ1ZDLFdBQVc7SUFDWEMsWUFBWTtBQUNkO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2QifQ==