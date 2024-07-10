"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CSSTabButton;
    }
});
var _tab = /*#__PURE__*/ _interop_require_default(require("../../button/tab"));
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
var CSSTabButton = /*#__PURE__*/ function(TabButton) {
    _inherits(CSSTabButton, TabButton);
    var _super = _create_super(CSSTabButton);
    function CSSTabButton() {
        _class_call_check(this, CSSTabButton);
        return _super.apply(this, arguments);
    }
    _create_class(CSSTabButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "CSS";
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var enableCSSTabButton = this.enable.bind(this), disableCSSTabButton = this.disable.bind(this); ///
                return {
                    enableCSSTabButton: enableCSSTabButton,
                    disableCSSTabButton: disableCSSTabButton
                };
            }
        }
    ]);
    return CSSTabButton;
}(_tab.default);
_define_property(CSSTabButton, "defaultProperties", {
    className: "css"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYnV0dG9uL3RhYi9jc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1NTVGFiQnV0dG9uIGV4dGVuZHMgVGFiQnV0dG9uIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCJDU1NcIjtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlQ1NTVGFiQnV0dG9uID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZGlzYWJsZUNTU1RhYkJ1dHRvbiA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZW5hYmxlQ1NTVGFiQnV0dG9uLFxuICAgICAgZGlzYWJsZUNTU1RhYkJ1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjc3NcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiQ1NTVGFiQnV0dG9uIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJlbmFibGVDU1NUYWJCdXR0b24iLCJlbmFibGUiLCJiaW5kIiwiZGlzYWJsZUNTU1RhYkJ1dHRvbiIsImRpc2FibGUiLCJUYWJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MERBRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBQSxBQUFNQSw2QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQixJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDMUNDLHNCQUFzQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUV4RCxPQUFRO29CQUNORixvQkFBQUE7b0JBQ0FHLHFCQUFBQTtnQkFDRjtZQUNGOzs7V0FibUJOO0VBQXFCUSxZQUFTO0FBZWpELGlCQWZtQlIsY0FlWlMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==