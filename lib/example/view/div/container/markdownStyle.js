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
var _container = /*#__PURE__*/ _interop_require_default(require("../../div/container"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../textarea/markdownStyle"));
var _markdownStyle1 = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree/markdownStyle"));
var _constants = require("../../../constants");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
        "\n\n  gap: 1rem;\n  height: 97rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkdownStyleContainerDiv = /*#__PURE__*/ function(ContainerDiv) {
    _inherits(MarkdownStyleContainerDiv, ContainerDiv);
    function MarkdownStyleContainerDiv() {
        _class_call_check(this, MarkdownStyleContainerDiv);
        return _call_super(this, MarkdownStyleContainerDiv, arguments);
    }
    _create_class(MarkdownStyleContainerDiv, [
        {
            key: "show",
            value: function show() {
                var displayStyle = _constants.FLEX;
                this.display(displayStyle);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                        onKeyUp: this.keyUpHandler
                    }),
                    /*#__PURE__*/ React.createElement(_markdownStyle1.default, null)
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), showMarkdownStyleContainerDiv = this.show.bind(this), hideMarkdownStyleContainerDiv = this.hide.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    showMarkdownStyleContainerDiv: showMarkdownStyleContainerDiv,
                    hideMarkdownStyleContainerDiv: hideMarkdownStyleContainerDiv
                });
            }
        }
    ]);
    return MarkdownStyleContainerDiv;
}(_container.default);
_define_property(MarkdownStyleContainerDiv, "Textarea", _markdownStyle.default);
_define_property(MarkdownStyleContainerDiv, "defaultProperties", {
    className: "markdown-style"
});
var _default = (0, _easywithstyle.default)(MarkdownStyleContainerDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgQ29udGFpbmVyRGl2IGZyb20gXCIuLi8uLi9kaXYvY29udGFpbmVyXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVRleHRhcmVhIGZyb20gXCIuLi8uLi90ZXh0YXJlYS9tYXJrZG93blN0eWxlXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVBhcnNlVGVlVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3RleHRhcmVhL3BhcnNlVHJlZS9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IEZMRVggfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZXh0ZW5kcyBDb250YWluZXJEaXYge1xuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXlTdHlsZSA9IEZMRVg7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxNYXJrZG93blN0eWxlVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+LFxuICAgICAgPE1hcmtkb3duU3R5bGVQYXJzZVRlZVRleHRhcmVhLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2LFxuICAgICAgaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBUZXh0YXJlYSA9IE1hcmtkb3duU3R5bGVUZXh0YXJlYTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duLXN0eWxlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYpYFxuXG4gIGdhcDogMXJlbTtcbiAgaGVpZ2h0OiA5N3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBcbmA7Il0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93IiwiZGlzcGxheVN0eWxlIiwiRkxFWCIsImRpc3BsYXkiLCJjaGlsZEVsZW1lbnRzIiwiTWFya2Rvd25TdHlsZVRleHRhcmVhIiwib25LZXlVcCIsImtleVVwSGFuZGxlciIsIk1hcmtkb3duU3R5bGVQYXJzZVRlZVRleHRhcmVhIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJiaW5kIiwiaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlIiwiQ29udGFpbmVyRGl2IiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkNBOzs7ZUFBQTs7O29FQTNDc0I7Z0VBRUc7b0VBQ1M7cUVBQ1E7eUJBRXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWVDLGVBQUk7Z0JBRXpCLElBQUksQ0FBQ0MsT0FBTyxDQUFDRjtZQUNmOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLHNCQUFxQjt3QkFBQ0MsU0FBUyxJQUFJLENBQUNDLFlBQVk7O2tDQUNqRCxvQkFBQ0MsdUJBQTZCO2lCQUUvQjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxnQ0FBZ0MsSUFBSSxDQUFDWixJQUFJLENBQUNhLElBQUksQ0FBQyxJQUFJLEdBQ25EQyxnQ0FBZ0MsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFaEUsT0FBUSx3Q0FDSEg7b0JBQ0hFLCtCQUFBQTtvQkFDQUUsK0JBQUFBOztZQUVKOzs7V0ExQklmO0VBQWtDaUIsa0JBQVk7QUE0QmxELGlCQTVCSWpCLDJCQTRCR2tCLFlBQVdaLHNCQUFxQjtBQUV2QyxpQkE5QklOLDJCQThCR21CLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3JCIn0=