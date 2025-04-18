"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubDivisionTransform;
    }
});
var _transform = /*#__PURE__*/ _interop_require_default(require("../transform"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var SubDivisionTransform = /*#__PURE__*/ function(Transform) {
    _inherits(SubDivisionTransform, Transform);
    function SubDivisionTransform(node, tokens, subDivisionMarkdownNode) {
        _class_call_check(this, SubDivisionTransform);
        var _this;
        _this = _call_super(this, SubDivisionTransform, [
            node,
            tokens
        ]);
        _this.subDivisionMarkdownNode = subDivisionMarkdownNode;
        return _this;
    }
    _create_class(SubDivisionTransform, [
        {
            key: "getSubDivisionMarkdownNode",
            value: function getSubDivisionMarkdownNode() {
                return this.subDivisionMarkdownNode;
            }
        },
        {
            key: "appendToDivisionMarkdownNode",
            value: function appendToDivisionMarkdownNode(divisionMarkdownNode, context) {
                var parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(SubDivisionTransform.prototype), "appendTo", this).call(this, parentNode, context);
            }
        },
        {
            key: "prependToDivisionMarkdownNode",
            value: function prependToDivisionMarkdownNode(divisionMarkdownNode, context) {
                var parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(SubDivisionTransform.prototype), "prependTo", this).call(this, parentNode, context);
            }
        },
        {
            key: "removeFromDivisionMarkdownNode",
            value: function removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var removedNode = this.subDivisionMarkdownNode, parentNode = divisionMarkdownNode;
                _get(_get_prototype_of(SubDivisionTransform.prototype), "removeFrom", this).call(this, removedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(Class, subDivisionMarkdownNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Transform;
                var node = subDivisionMarkdownNode, subDivisionTransform = (_Transform = _transform.default).fromNode.apply(_Transform, [
                    Class,
                    node,
                    subDivisionMarkdownNode
                ].concat(_to_consumable_array(remainingArguments)));
                return subDivisionTransform;
            }
        }
    ]);
    return SubDivisionTransform;
}(_transform.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSBcIi4uL3RyYW5zZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJEaXZpc2lvblRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgICBzdXBlcihub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5zdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBhcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzdXBlci5hcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHByZXBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzdXBlci5wcmVwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZW1vdmVkTm9kZSA9IHRoaXMuc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTtcblxuICAgIHN1cGVyLnJlbW92ZUZyb20ocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShDbGFzcywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJub2RlIiwidG9rZW5zIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJwYXJlbnROb2RlIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZSIsInByZXBlbmRUbyIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlRnJvbSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiVHJhbnNmb3JtIiwic3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJmcm9tTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7Z0VBRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBLHFCQUNQQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsdUJBQXVCO2dDQUQ5Qkg7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQU1DOztRQUVaLE1BQUtDLHVCQUF1QixHQUFHQTs7O2tCQUpkSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsdUJBQXVCO1lBQ3JDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQ3hELElBQU1DLGFBQWFGLHNCQUF1QixHQUFHO2dCQUU3Qyx1QkFkaUJOLGlDQWNYUyxZQUFOLElBQUssYUFBVUQsWUFBWUQ7WUFDN0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCSixvQkFBb0IsRUFBRUMsT0FBTztnQkFDekQsSUFBTUMsYUFBYUYsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQXBCaUJOLGlDQW9CWFcsYUFBTixJQUFLLGFBQVdILFlBQVlEO1lBQzlCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQk4sb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzFELElBQU1NLGNBQWMsSUFBSSxDQUFDVix1QkFBdUIsRUFDMUNLLGFBQWFGO2dCQUVuQix1QkEzQmlCTixpQ0EyQlhjLGNBQU4sSUFBSyxhQUFZRCxhQUFhTCxZQUFZRDtZQUM1Qzs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLEtBQUssRUFBRWIsdUJBQXVCO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHYyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBRXpEQztnQkFEN0IsSUFBTWpCLE9BQU9FLHlCQUNQZ0IsdUJBQXVCRCxDQUFBQSxhQUFBQSxrQkFBUyxFQUFDRSxRQUFRLE9BQWxCRixZQUFBQTtvQkFBbUJGO29CQUFPZjtvQkFBTUU7aUJBQStDLENBQS9FZSxPQUF5RCxxQkFBR0Q7Z0JBRXpGLE9BQU9FO1lBQ1Q7OztXQW5DbUJuQjtFQUE2QmtCLGtCQUFTIn0=