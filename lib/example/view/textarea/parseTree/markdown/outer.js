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
var OuterMarkdownParseTreeTextarea = /*#__PURE__*/ function(MarkdownParseTreeTextarea) {
    _inherits(OuterMarkdownParseTreeTextarea, MarkdownParseTreeTextarea);
    function OuterMarkdownParseTreeTextarea() {
        _class_call_check(this, OuterMarkdownParseTreeTextarea);
        return _call_super(this, OuterMarkdownParseTreeTextarea, arguments);
    }
    _create_class(OuterMarkdownParseTreeTextarea, [
        {
            key: "update",
            value: function update(parseTree) {
                parseTree.shiftLine();
                parseTree.shiftLine();
                _get(_get_prototype_of(OuterMarkdownParseTreeTextarea.prototype), "update", this).call(this, parseTree);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var clearOuterMarkdownParseTreeTextarea = this.clear.bind(this), updateOuterMarkdownParseTreeTextarea = this.update.bind(this); ///
                return {
                    clearOuterMarkdownParseTreeTextarea: clearOuterMarkdownParseTreeTextarea,
                    updateOuterMarkdownParseTreeTextarea: updateOuterMarkdownParseTreeTextarea
                };
            }
        }
    ]);
    return OuterMarkdownParseTreeTextarea;
}(_markdown.default);
_define_property(OuterMarkdownParseTreeTextarea, "defaultProperties", {
    className: "outer"
});
var _default = (0, _easywithstyle.default)(OuterMarkdownParseTreeTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duL291dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi4vLi4vLi4vdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duXCI7XG5cbmNsYXNzIE91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIE1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEge1xuICB1cGRhdGUocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpO1xuICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTtcblxuICAgIHN1cGVyLnVwZGF0ZShwYXJzZVRyZWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjbGVhck91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlT3V0ZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNsZWFyT3V0ZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhLFxuICAgICAgdXBkYXRlT3V0ZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm91dGVyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSlgXG5cbiAgZmxleDogMTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcmVudENvbnRleHQiLCJjbGVhck91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyIiwiYmluZCIsInVwZGF0ZU91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsIk1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkJBOzs7ZUFBQTs7O29FQTNCc0I7K0RBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLCtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsU0FBUztnQkFDZEEsVUFBVUMsU0FBUztnQkFDbkJELFVBQVVDLFNBQVM7Z0JBRW5CLHVCQUxFSCwyQ0FLSUMsVUFBTixJQUFLLGFBQVFDO1lBQ2Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsc0NBQXNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUMxREMsdUNBQXVDLElBQUksQ0FBQ1AsTUFBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXhFLE9BQVE7b0JBQ05GLHFDQUFBQTtvQkFDQUcsc0NBQUFBO2dCQUNGO1lBQ0Y7OztXQWhCSVI7RUFBdUNTLGlCQUF5QjtBQWtCcEUsaUJBbEJJVCxnQ0FrQkdVLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ1oifQ==