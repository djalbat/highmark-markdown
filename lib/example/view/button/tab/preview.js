"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PreviewTabButton;
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
var PreviewTabButton = /*#__PURE__*/ function(TabButton) {
    _inherits(PreviewTabButton, TabButton);
    function PreviewTabButton() {
        _class_call_check(this, PreviewTabButton);
        return _call_super(this, PreviewTabButton, arguments);
    }
    _create_class(PreviewTabButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "Preview";
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var enablePreviewTabButton = this.enable.bind(this), disablePreviewTabButton = this.disable.bind(this); ///
                return {
                    enablePreviewTabButton: enablePreviewTabButton,
                    disablePreviewTabButton: disablePreviewTabButton
                };
            }
        }
    ]);
    return PreviewTabButton;
}(_tab.default);
_define_property(PreviewTabButton, "defaultProperties", {
    className: "preview"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi9wcmV2aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZXZpZXdUYWJCdXR0b24gZXh0ZW5kcyBUYWJCdXR0b24ge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIlByZXZpZXdcIjtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlUHJldmlld1RhYkJ1dHRvbiA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGRpc2FibGVQcmV2aWV3VGFiQnV0dG9uID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlbmFibGVQcmV2aWV3VGFiQnV0dG9uLFxuICAgICAgZGlzYWJsZVByZXZpZXdUYWJCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldmlld1wiXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmV2aWV3VGFiQnV0dG9uIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJlbmFibGVQcmV2aWV3VGFiQnV0dG9uIiwiZW5hYmxlIiwiYmluZCIsImRpc2FibGVQcmV2aWV3VGFiQnV0dG9uIiwiZGlzYWJsZSIsIlRhYkJ1dHRvbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzswREFGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMseUJBQXlCLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUM5Q0MsMEJBQTBCLElBQUksQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRTVELE9BQVE7b0JBQ05GLHdCQUFBQTtvQkFDQUcseUJBQUFBO2dCQUNGO1lBQ0Y7OztXQWJtQk47RUFBeUJRLFlBQVM7QUFlckQsaUJBZm1CUixrQkFlWlMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==