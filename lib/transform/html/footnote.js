"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
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
var FootnoteHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(FootnoteHTMLTransform, HTMLTransform);
    function FootnoteHTMLTransform() {
        _class_call_check(this, FootnoteHTMLTransform);
        return _call_super(this, FootnoteHTMLTransform, arguments);
    }
    _create_class(FootnoteHTMLTransform, [
        {
            key: "removeFromDivisionHTMLNode",
            value: function removeFromDivisionHTMLNode(divisionHTMLNode, context) {
                var parentHTNLNode = divisionHTMLNode; ///
                _get(_get_prototype_of(FootnoteHTMLTransform.prototype), "removeFrom", this).call(this, parentHTNLNode, context);
            }
        }
    ], [
        {
            key: "fromFootnoteHTMLNode",
            value: function fromFootnoteHTMLNode(footnoteHTMLNde, context) {
                var htmlNode = footnoteHTMLNde, footnoteHTMLTransform = _html.default.fromHTNLNOde(FootnoteHTMLTransform, htmlNode, context);
                return footnoteHTMLTransform;
            }
        }
    ]);
    return FootnoteHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIHJlbW92ZUZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnRIVE5MTm9kZSA9IGRpdmlzaW9uSFRNTE5vZGU7IC8vL1xuXG4gICAgc3VwZXIucmVtb3ZlRnJvbShwYXJlbnRIVE5MTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTmRlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBmb290bm90ZUhUTUxOZGUsIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKEZvb3Rub3RlSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsInJlbW92ZUZyb21EaXZpc2lvbkhUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZSIsImNvbnRleHQiLCJwYXJlbnRIVE5MTm9kZSIsInJlbW92ZUZyb20iLCJmcm9tRm9vdG5vdGVIVE1MTm9kZSIsImZvb3Rub3RlSFRNTE5kZSIsImh0bWxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE5MTk9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCQyxnQkFBZ0IsRUFBRUMsT0FBTztnQkFDbEQsSUFBTUMsaUJBQWlCRixrQkFBa0IsR0FBRztnQkFFNUMsdUJBSmlCRixrQ0FJWEssY0FBTixJQUFLLGFBQVlELGdCQUFnQkQ7WUFDbkM7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCQyxlQUFlLEVBQUVKLE9BQU87Z0JBQ2xELElBQU1LLFdBQVdELGlCQUNYRSx3QkFBd0JDLGFBQWEsQ0FBQ0MsWUFBWSxDQVR2Q1gsdUJBUytEUSxVQUFVTDtnQkFFMUYsT0FBT007WUFDVDs7O1dBWm1CVDtFQUE4QlUsYUFBYSJ9