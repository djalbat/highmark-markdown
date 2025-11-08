"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefaultMarkdownStyleElement;
    }
});
var _defaultMarkdown = /*#__PURE__*/ _interop_require_default(require("../../style/defaultMarkdown"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../styleElement/markdown"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var DefaultMarkdownStyleElement = /*#__PURE__*/ function(MarkdownStyleElement) {
    _inherits(DefaultMarkdownStyleElement, MarkdownStyleElement);
    function DefaultMarkdownStyleElement() {
        _class_call_check(this, DefaultMarkdownStyleElement);
        return _call_super(this, DefaultMarkdownStyleElement, arguments);
    }
    _create_class(DefaultMarkdownStyleElement, [
        {
            key: "update",
            value: function update(defaultMarkdownStyle) {
                var markdownStyle = defaultMarkdownStyle; ///
                _get(_get_prototype_of(DefaultMarkdownStyleElement.prototype), "update", this).call(this, markdownStyle);
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.update(_defaultMarkdown.default);
            }
        }
    ], [
        {
            key: "fromCSSSelectorsString",
            value: function fromCSSSelectorsString(Class, cssSelectorsString) {
                if (cssSelectorsString === undefined) {
                    cssSelectorsString = Class; ///
                    Class = DefaultMarkdownStyleElement; ///
                }
                var defaultMarkdownStyleElement = _markdown.default.fromCSSSelectorsString(Class, cssSelectorsString);
                defaultMarkdownStyleElement.reset();
            }
        }
    ]);
    return DefaultMarkdownStyleElement;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24vZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRlZmF1bHRNYXJrZG93blN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZS9kZWZhdWx0TWFya2Rvd25cIjtcbmltcG9ydCBNYXJrZG93blN0eWxlRWxlbWVudCBmcm9tIFwiLi4vLi4vc3R5bGVFbGVtZW50L21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudCBleHRlbmRzIE1hcmtkb3duU3R5bGVFbGVtZW50IHtcbiAgdXBkYXRlKGRlZmF1bHRNYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZSA9IGRlZmF1bHRNYXJrZG93blN0eWxlOyAvLy9cblxuICAgIHN1cGVyLnVwZGF0ZShtYXJrZG93blN0eWxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy51cGRhdGUoZGVmYXVsdE1hcmtkb3duU3R5bGUpXG4gIH1cblxuICBzdGF0aWMgZnJvbUNTU1NlbGVjdG9yc1N0cmluZyhDbGFzcywgY3NzU2VsZWN0b3JzU3RyaW5nKSB7XG4gICAgaWYgKGNzc1NlbGVjdG9yc1N0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjc3NTZWxlY3RvcnNTdHJpbmcgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50ID0gTWFya2Rvd25TdHlsZUVsZW1lbnQuZnJvbUNTU1NlbGVjdG9yc1N0cmluZyhDbGFzcywgY3NzU2VsZWN0b3JzU3RyaW5nKTtcblxuICAgIGRlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudC5yZXNldCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50IiwidXBkYXRlIiwiZGVmYXVsdE1hcmtkb3duU3R5bGUiLCJtYXJrZG93blN0eWxlIiwicmVzZXQiLCJmcm9tQ1NTU2VsZWN0b3JzU3RyaW5nIiwiQ2xhc3MiLCJjc3NTZWxlY3RvcnNTdHJpbmciLCJ1bmRlZmluZWQiLCJkZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQiLCJNYXJrZG93blN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7c0VBSFk7K0RBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLDRDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0Msb0JBQW9CO2dCQUN6QixJQUFNQyxnQkFBZ0JELHNCQUFzQixHQUFHO2dCQUUvQyx1QkFKaUJGLHdDQUlYQyxVQUFOLElBQUssYUFBUUU7WUFDZjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNILE1BQU0sQ0FBQ0Msd0JBQW9CO1lBQ2xDOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsS0FBSyxFQUFFQyxrQkFBa0I7Z0JBQ3JELElBQUlBLHVCQUF1QkMsV0FBVztvQkFDcENELHFCQUFxQkQsT0FBTyxHQUFHO29CQUUvQkEsUUFmZU4sNkJBZXVCLEdBQUc7Z0JBQzNDO2dCQUVBLElBQU1TLDhCQUE4QkMsaUJBQW9CLENBQUNMLHNCQUFzQixDQUFDQyxPQUFPQztnQkFFdkZFLDRCQUE0QkwsS0FBSztZQUNuQzs7O1dBckJtQko7RUFBb0NVLGlCQUFvQiJ9