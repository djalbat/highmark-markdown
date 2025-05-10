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
var _parseTree = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree"));
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
        "\n\n  margin-top: 1rem;\n  height: 48rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CSSParseTreeTextarea = /*#__PURE__*/ function(ParseTreeTextarea) {
    _inherits(CSSParseTreeTextarea, ParseTreeTextarea);
    function CSSParseTreeTextarea() {
        _class_call_check(this, CSSParseTreeTextarea);
        return _call_super(this, CSSParseTreeTextarea, arguments);
    }
    _create_class(CSSParseTreeTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var showCSSParseTreeTextarea = this.show.bind(this), hideCSSParseTreeTextarea = this.hide.bind(this), clearCSSParseTreeTextarea = this.clear.bind(this), updateCSSParseTreeTextarea = this.update.bind(this); ///
                return {
                    showCSSParseTreeTextarea: showCSSParseTreeTextarea,
                    hideCSSParseTreeTextarea: hideCSSParseTreeTextarea,
                    clearCSSParseTreeTextarea: clearCSSParseTreeTextarea,
                    updateCSSParseTreeTextarea: updateCSSParseTreeTextarea
                };
            }
        }
    ]);
    return CSSParseTreeTextarea;
}(_parseTree.default);
_define_property(CSSParseTreeTextarea, "defaultProperties", {
    className: "css"
});
var _default = (0, _easywithstyle.default)(CSSParseTreeTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2Nzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuLi8uLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcblxuY2xhc3MgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBQYXJzZVRyZWVUZXh0YXJlYSB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjbGVhckNTU1BhcnNlVHJlZVRleHRhcmVhID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVDU1NQYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEsXG4gICAgICBoaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEsXG4gICAgICBjbGVhckNTU1BhcnNlVHJlZVRleHRhcmVhLFxuICAgICAgdXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWFcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY3NzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENTU1BhcnNlVHJlZVRleHRhcmVhKWBcblxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDQ4cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhIiwic2hvdyIsImJpbmQiLCJoaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlIiwiY2xlYXJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyIiwidXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJ1cGRhdGUiLCJQYXJzZVRyZWVUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7b0VBeEJzQjtnRUFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywyQkFBMkIsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQzlDQywyQkFBMkIsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQzlDRyw0QkFBNEIsSUFBSSxDQUFDQyxLQUFLLENBQUNKLElBQUksQ0FBQyxJQUFJLEdBQ2hESyw2QkFBNkIsSUFBSSxDQUFDQyxNQUFNLENBQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFOUQsT0FBUTtvQkFDTkYsMEJBQUFBO29CQUNBRywwQkFBQUE7b0JBQ0FFLDJCQUFBQTtvQkFDQUUsNEJBQUFBO2dCQUNGO1lBQ0Y7OztXQWJJVDtFQUE2Qlcsa0JBQWlCO0FBZWxELGlCQWZJWCxzQkFlR1kscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDZCJ9