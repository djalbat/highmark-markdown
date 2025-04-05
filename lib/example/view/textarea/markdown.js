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
        "\n\n  resize: vertical;\n  min-height: 12rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkdownTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(MarkdownTextarea, Textarea);
    function MarkdownTextarea() {
        _class_call_check(this, MarkdownTextarea);
        return _call_super(this, MarkdownTextarea, arguments);
    }
    _create_class(MarkdownTextarea, [
        {
            key: "getMarkdown",
            value: function getMarkdown() {
                var value = this.getValue(), markdown = value; ///
                return markdown;
            }
        },
        {
            key: "setMarkdown",
            value: function setMarkdown(markdown) {
                var value = markdown; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getMarkdown = this.getMarkdown.bind(this), setMarkdown = this.setMarkdown.bind(this);
                return {
                    getMarkdown: getMarkdown,
                    setMarkdown: setMarkdown
                };
            }
        }
    ]);
    return MarkdownTextarea;
}(_textarea.default);
_define_property(MarkdownTextarea, "defaultProperties", {
    className: "markdown",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(MarkdownTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgTWFya2Rvd25UZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TWFya2Rvd24oKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbWFya2Rvd24gPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gbWFya2Rvd247XG4gIH1cblxuICBzZXRNYXJrZG93bihtYXJrZG93bikge1xuICAgIGNvbnN0IHZhbHVlID0gbWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE1hcmtkb3duID0gdGhpcy5zZXRNYXJrZG93bi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRNYXJrZG93bixcbiAgICAgIHNldE1hcmtkb3duXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYXJrZG93blRleHRhcmVhKWBcblxuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAxMnJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duVGV4dGFyZWEiLCJnZXRNYXJrZG93biIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXJrZG93biIsInNldE1hcmtkb3duIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQ0E7OztlQUFBOzs7b0VBbENzQjsrREFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsV0FBV0YsT0FBTyxHQUFHO2dCQUUzQixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlELFFBQVE7Z0JBQ2xCLElBQU1GLFFBQVFFLFVBQVUsR0FBRztnQkFFM0IsSUFBSSxDQUFDRSxRQUFRLENBQUNKO1lBQ2hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1OLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQ3hDSCxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDRyxJQUFJLENBQUMsSUFBSTtnQkFFOUMsT0FBUTtvQkFDTlAsYUFBQUE7b0JBQ0FJLGFBQUFBO2dCQUNGO1lBQ0Y7OztXQXRCSUw7RUFBeUJTLGlCQUFRO0FBd0JyQyxpQkF4QklULGtCQXdCR1UscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hDLFlBQVk7QUFDZDtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNiIn0=