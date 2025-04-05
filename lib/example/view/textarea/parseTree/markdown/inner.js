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
            key: "update",
            value: function update(parseTree) {
                parseTree.shiftLine();
                parseTree.shiftLine();
                _get(_get_prototype_of(InnerMarkdownParseTreeTextarea.prototype), "update", this).call(this, parseTree);
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duL2lubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi4vLi4vLi4vdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duXCI7XG5cbmNsYXNzIElubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIE1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEge1xuICB1cGRhdGUocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpO1xuICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTtcblxuICAgIHN1cGVyLnVwZGF0ZShwYXJzZVRyZWUpO1xuXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNsZWFySW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgY2xlYXJJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEsXG4gICAgICB1cGRhdGVJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWFcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwib3V0ZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKWBcblxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDMycmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyZW50Q29udGV4dCIsImNsZWFySW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXIiLCJiaW5kIiwidXBkYXRlSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4QkE7OztlQUFBOzs7b0VBNUJzQjsrREFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsK0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxTQUFTO2dCQUNkQSxVQUFVQyxTQUFTO2dCQUNuQkQsVUFBVUMsU0FBUztnQkFFbkIsdUJBTEVILDJDQUtJQyxVQUFOLElBQUssYUFBUUM7WUFFZjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQ0FBc0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQzFEQyx1Q0FBdUMsSUFBSSxDQUFDUCxNQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFeEUsT0FBUTtvQkFDTkYscUNBQUFBO29CQUNBRyxzQ0FBQUE7Z0JBQ0Y7WUFDRjs7O1dBakJJUjtFQUF1Q1MsaUJBQXlCO0FBbUJwRSxpQkFuQklULGdDQW1CR1UscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDWiJ9