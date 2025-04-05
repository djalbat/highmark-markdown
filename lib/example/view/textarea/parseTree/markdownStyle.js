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
        "\n\n  flex: 1;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkdownStyleParseTreeTextarea = /*#__PURE__*/ function(ParseTreeTextarea) {
    _inherits(MarkdownStyleParseTreeTextarea, ParseTreeTextarea);
    function MarkdownStyleParseTreeTextarea() {
        _class_call_check(this, MarkdownStyleParseTreeTextarea);
        return _call_super(this, MarkdownStyleParseTreeTextarea, arguments);
    }
    _create_class(MarkdownStyleParseTreeTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var clearMarkdownStyleParseTreeTextarea = this.clear.bind(this), updateMarkdownStyleParseTreeTextarea = this.update.bind(this); ///
                return {
                    clearMarkdownStyleParseTreeTextarea: clearMarkdownStyleParseTreeTextarea,
                    updateMarkdownStyleParseTreeTextarea: updateMarkdownStyleParseTreeTextarea
                };
            }
        }
    ]);
    return MarkdownStyleParseTreeTextarea;
}(_parseTree.default);
_define_property(MarkdownStyleParseTreeTextarea, "defaultProperties", {
    className: "markdown-style"
});
var _default = (0, _easywithstyle.default)(MarkdownStyleParseTreeTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi4vLi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5cbmNsYXNzIE1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIFBhcnNlVHJlZVRleHRhcmVhIHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhLFxuICAgICAgdXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duLXN0eWxlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSlgXG5cbiAgZmxleDogMTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsInBhcmVudENvbnRleHQiLCJjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyIiwiYmluZCIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNCQTs7O2VBQUE7OztvRUFwQnNCO2dFQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSwrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNDQUFzQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDMURDLHVDQUF1QyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUV4RSxPQUFRO29CQUNORixxQ0FBQUE7b0JBQ0FHLHNDQUFBQTtnQkFDRjtZQUNGOzs7V0FUSUw7RUFBdUNPLGtCQUFpQjtBQVc1RCxpQkFYSVAsZ0NBV0dRLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ1YifQ==