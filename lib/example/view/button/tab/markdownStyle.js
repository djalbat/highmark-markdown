"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyleTabButton;
    }
});
var _tab = /*#__PURE__*/ _interop_require_default(require("../../button/tab"));
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
var MarkdownStyleTabButton = /*#__PURE__*/ function(TabButton) {
    _inherits(MarkdownStyleTabButton, TabButton);
    function MarkdownStyleTabButton() {
        _class_call_check(this, MarkdownStyleTabButton);
        return _call_super(this, MarkdownStyleTabButton, arguments);
    }
    _create_class(MarkdownStyleTabButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "Markdown style";
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var enableMarkdownStyleTabButton = this.enable.bind(this), disableMarkdownStyleTabButton = this.disable.bind(this); ///
                return {
                    enableMarkdownStyleTabButton: enableMarkdownStyleTabButton,
                    disableMarkdownStyleTabButton: disableMarkdownStyleTabButton
                };
            }
        }
    ]);
    return MarkdownStyleTabButton;
}(_tab.default);
_define_property(MarkdownStyleTabButton, "defaultProperties", {
    className: "markdown-style"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGVUYWJCdXR0b24gZXh0ZW5kcyBUYWJCdXR0b24ge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIk1hcmtkb3duIHN0eWxlXCI7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGVuYWJsZU1hcmtkb3duU3R5bGVUYWJCdXR0b24gPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZU1hcmtkb3duU3R5bGVUYWJCdXR0b24gPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlbmFibGVNYXJrZG93blN0eWxlVGFiQnV0dG9uLFxuICAgICAgZGlzYWJsZU1hcmtkb3duU3R5bGVUYWJCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd24tc3R5bGVcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZVRhYkJ1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0IiwiZW5hYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbiIsImVuYWJsZSIsImJpbmQiLCJkaXNhYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbiIsImRpc2FibGUiLCJUYWJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MERBRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLCtCQUErQixJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDcERDLGdDQUFnQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUVuRSxPQUFRO29CQUNORiw4QkFBQUE7b0JBQ0FHLCtCQUFBQTtnQkFDRjtZQUNGOzs7V0FibUJOO0VBQStCUSxZQUFTO0FBZTNELGlCQWZtQlIsd0JBZVpTLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=