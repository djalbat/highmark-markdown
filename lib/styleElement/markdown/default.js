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
var _defaultMarkdownStyle = /*#__PURE__*/ _interop_require_default(require("../../defaultMarkdownStyle"));
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
                this.update(_defaultMarkdownStyle.default);
            }
        }
    ], [
        {
            key: "fromSelectorsString",
            value: function fromSelectorsString(Class, selectorsString) {
                if (selectorsString === undefined) {
                    selectorsString = Class; ///
                    Class = DefaultMarkdownStyleElement; ///
                }
                var defaultMarkdownStyleElement = _markdown.default.fromSelectorsString(Class, selectorsString);
                defaultMarkdownStyleElement.reset();
            }
        }
    ]);
    return DefaultMarkdownStyleElement;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24vZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRlZmF1bHRNYXJrZG93blN0eWxlIGZyb20gXCIuLi8uLi9kZWZhdWx0TWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVFbGVtZW50IGZyb20gXCIuLi8uLi9zdHlsZUVsZW1lbnQvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50IGV4dGVuZHMgTWFya2Rvd25TdHlsZUVsZW1lbnQge1xuICB1cGRhdGUoZGVmYXVsdE1hcmtkb3duU3R5bGUpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gZGVmYXVsdE1hcmtkb3duU3R5bGU7IC8vL1xuXG4gICAgc3VwZXIudXBkYXRlKG1hcmtkb3duU3R5bGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnVwZGF0ZShkZWZhdWx0TWFya2Rvd25TdHlsZSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JzU3RyaW5nKENsYXNzLCBzZWxlY3RvcnNTdHJpbmcpIHtcbiAgICBpZiAoc2VsZWN0b3JzU3RyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yc1N0cmluZyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBEZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQgPSBNYXJrZG93blN0eWxlRWxlbWVudC5mcm9tU2VsZWN0b3JzU3RyaW5nKENsYXNzLCBzZWxlY3RvcnNTdHJpbmcpO1xuXG4gICAgZGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50LnJlc2V0KCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQiLCJ1cGRhdGUiLCJkZWZhdWx0TWFya2Rvd25TdHlsZSIsIm1hcmtkb3duU3R5bGUiLCJyZXNldCIsImZyb21TZWxlY3RvcnNTdHJpbmciLCJDbGFzcyIsInNlbGVjdG9yc1N0cmluZyIsInVuZGVmaW5lZCIsImRlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudCIsIk1hcmtkb3duU3R5bGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyRUFIWTsrREFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsNENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxvQkFBb0I7Z0JBQ3pCLElBQU1DLGdCQUFnQkQsc0JBQXNCLEdBQUc7Z0JBRS9DLHVCQUppQkYsd0NBSVhDLFVBQU4sSUFBSyxhQUFRRTtZQUNmOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0gsTUFBTSxDQUFDQyw2QkFBb0I7WUFDbEM7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxLQUFLLEVBQUVDLGVBQWU7Z0JBQy9DLElBQUlBLG9CQUFvQkMsV0FBVztvQkFDakNELGtCQUFrQkQsT0FBTyxHQUFHO29CQUU1QkEsUUFmZU4sNkJBZXVCLEdBQUc7Z0JBQzNDO2dCQUVBLElBQU1TLDhCQUE4QkMsaUJBQW9CLENBQUNMLG1CQUFtQixDQUFDQyxPQUFPQztnQkFFcEZFLDRCQUE0QkwsS0FBSztZQUNuQzs7O1dBckJtQko7RUFBb0NVLGlCQUFvQiJ9