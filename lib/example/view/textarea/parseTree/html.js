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
var HTMLParseTreeTextarea = /*#__PURE__*/ function(ParseTreeTextarea) {
    _inherits(HTMLParseTreeTextarea, ParseTreeTextarea);
    function HTMLParseTreeTextarea() {
        _class_call_check(this, HTMLParseTreeTextarea);
        return _call_super(this, HTMLParseTreeTextarea, arguments);
    }
    _create_class(HTMLParseTreeTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var showHTMLParseTreeTextarea = this.show.bind(this), hideHTMLParseTreeTextarea = this.hide.bind(this), clearHTMLParseTreeTextarea = this.clear.bind(this), updateHTMLParseTreeTextarea = this.update.bind(this); ///
                return {
                    showHTMLParseTreeTextarea: showHTMLParseTreeTextarea,
                    hideHTMLParseTreeTextarea: hideHTMLParseTreeTextarea,
                    clearHTMLParseTreeTextarea: clearHTMLParseTreeTextarea,
                    updateHTMLParseTreeTextarea: updateHTMLParseTreeTextarea
                };
            }
        }
    ]);
    return HTMLParseTreeTextarea;
}(_parseTree.default);
_define_property(HTMLParseTreeTextarea, "defaultProperties", {
    className: "html"
});
var _default = (0, _easywithstyle.default)(HTMLParseTreeTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi4vLi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5cbmNsYXNzIEhUTUxQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIFBhcnNlVHJlZVRleHRhcmVhIHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEgPSB0aGlzLmNsZWFyLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhLFxuICAgICAgaGlkZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSxcbiAgICAgIGNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhLFxuICAgICAgdXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImh0bWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSFRNTFBhcnNlVHJlZVRleHRhcmVhKWBcblxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDQ4cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwicGFyZW50Q29udGV4dCIsInNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJzaG93IiwiYmluZCIsImhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlIiwiY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhciIsInVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBCQTs7O2VBQUE7OztvRUF4QnNCO2dFQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsNEJBQTRCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUMvQ0MsNEJBQTRCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUMvQ0csNkJBQTZCLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixJQUFJLENBQUMsSUFBSSxHQUNqREssOEJBQThCLElBQUksQ0FBQ0MsTUFBTSxDQUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRS9ELE9BQVE7b0JBQ05GLDJCQUFBQTtvQkFDQUcsMkJBQUFBO29CQUNBRSw0QkFBQUE7b0JBQ0FFLDZCQUFBQTtnQkFDRjtZQUNGOzs7V0FiSVQ7RUFBOEJXLGtCQUFpQjtBQWVuRCxpQkFmSVgsdUJBZUdZLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2QifQ==