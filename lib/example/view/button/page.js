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
var _easy = require("easy");
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
        "\n\n  color: black;\n  border: 1px solid black;\n  padding: 0.5rem;\n  font-size: 1.7rem;\n  background: transparent;  \n  font-family: serif;\n  margin-left: 1rem;\n  \n  cursor: pointer;\n  font-weight: normal;\n\n  [disabled] {\n    cursor: auto;\n    font-weight: bold;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PageButton = /*#__PURE__*/ function(Button) {
    _inherits(PageButton, Button);
    var _super = _create_super(PageButton);
    function PageButton() {
        _class_call_check(this, PageButton);
        return _super.apply(this, arguments);
    }
    _create_class(PageButton, [
        {
            key: "getIndex",
            value: function getIndex() {
                var index = this.properties.index;
                return index;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var index = this.getIndex(), childElements = "".concat(index + 1);
                return childElements;
            }
        }
    ]);
    return PageButton;
}(_easy.Button);
_define_property(PageButton, "ignoredProperties", [
    "index"
]);
_define_property(PageButton, "defaultProperties", {
    className: "page"
});
var _default = (0, _easywithstyle.default)(PageButton)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIFBhZ2VCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBnZXRJbmRleCgpIHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleCgpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBgJHtpbmRleCArIDF9YDtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiaW5kZXhcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFnZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQYWdlQnV0dG9uKWBcblxuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIFxuICBmb250LWZhbWlseTogc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gIFtkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogYXV0bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiUGFnZUJ1dHRvbiIsImdldEluZGV4IiwiaW5kZXgiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsIkJ1dHRvbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2QkE7OztlQUFBOzs7b0VBM0JzQjtvQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsMkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxRQUFVLElBQUksQ0FBQ0MsVUFBVSxDQUF6QkQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRixRQUFRLElBQUksQ0FBQ0QsUUFBUSxJQUNyQkcsZ0JBQWdCLEFBQUMsR0FBWSxPQUFWRixRQUFRO2dCQUVqQyxPQUFPRTtZQUNUOzs7V0FaSUo7RUFBbUJLLFlBQU07QUFjN0IsaUJBZElMLFlBY0dNLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBbEJJTixZQWtCR08scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDVCJ9