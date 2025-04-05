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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../textarea/parseTree/markdown"));
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
        "\n\n  margin-top: 1rem;\n  height: 32rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var InnerMarkdownParseTreeTextarea = /*#__PURE__*/ function(MarkdownParseTreeTextarea) {
    _inherits(InnerMarkdownParseTreeTextarea, MarkdownParseTreeTextarea);
    function InnerMarkdownParseTreeTextarea() {
        _class_call_check(this, InnerMarkdownParseTreeTextarea);
        return _call_super(this, InnerMarkdownParseTreeTextarea, arguments);
    }
    _create_class(InnerMarkdownParseTreeTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var clearInnerMarkdownParseTreeTextarea = this.clear.bind(this), updateInnerMarkdownParseTreeTextarea = this.update.bind(this); ///
                return {
                    clearInnerMarkdownParseTreeTextarea: clearInnerMarkdownParseTreeTextarea,
                    updateInnerMarkdownParseTreeTextarea: updateInnerMarkdownParseTreeTextarea
                };
            }
        }
    ]);
    return InnerMarkdownParseTreeTextarea;
}(_markdown.default);
_define_property(InnerMarkdownParseTreeTextarea, "defaultProperties", {
    className: "outer"
});
var _default = (0, _easywithstyle.default)(InnerMarkdownParseTreeTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duL2lubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi4vLi4vLi4vdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duXCI7XG5cbmNsYXNzIElubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIE1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNsZWFySW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgY2xlYXJJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEsXG4gICAgICB1cGRhdGVJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWFcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwib3V0ZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKWBcblxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDMycmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwicGFyZW50Q29udGV4dCIsImNsZWFySW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXIiLCJiaW5kIiwidXBkYXRlSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlIiwiTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7b0VBcEJzQjsrREFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLCtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsc0NBQXNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUMxREMsdUNBQXVDLElBQUksQ0FBQ0MsTUFBTSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXhFLE9BQVE7b0JBQ05GLHFDQUFBQTtvQkFDQUcsc0NBQUFBO2dCQUNGO1lBQ0Y7OztXQVRJTDtFQUF1Q08saUJBQXlCO0FBV3BFLGlCQVhJUCxnQ0FXR1EscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDViJ9