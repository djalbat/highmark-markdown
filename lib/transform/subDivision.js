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
var _occamdom = require("occam-dom");
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
                var node = subDivisionMarkdownNode, subDivisionTransform = (_Transform = _occamdom.Transform).fromNode.apply(_Transform, [
                    Class,
                    node,
                    subDivisionMarkdownNode
                ].concat(_to_consumable_array(remainingArguments)));
                return subDivisionTransform;
            }
        }
    ]);
    return SubDivisionTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGl2aXNpb25UcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMuc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIuYXBwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBwcmVwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIucHJlcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVtb3ZlZE5vZGUgPSB0aGlzLnN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7XG5cbiAgICBzdXBlci5yZW1vdmVGcm9tKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoQ2xhc3MsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlKENsYXNzLCBub2RlLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YkRpdmlzaW9uVHJhbnNmb3JtIiwibm9kZSIsInRva2VucyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwicGFyZW50Tm9kZSIsImFwcGVuZFRvIiwicHJlcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJwcmVwZW5kVG8iLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVkTm9kZSIsInJlbW92ZUZyb20iLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIlRyYW5zZm9ybSIsInN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZnJvbU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3dCQUZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUEscUJBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyx1QkFBdUI7Z0NBRDlCSDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBTUM7O1FBRVosTUFBS0MsdUJBQXVCLEdBQUdBOzs7a0JBSmRIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCx1QkFBdUI7WUFDckM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDeEQsSUFBTUMsYUFBYUYsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQWRpQk4saUNBY1hTLFlBQU4sSUFBSyxhQUFVRCxZQUFZRDtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJKLG9CQUFvQixFQUFFQyxPQUFPO2dCQUN6RCxJQUFNQyxhQUFhRixzQkFBdUIsR0FBRztnQkFFN0MsdUJBcEJpQk4saUNBb0JYVyxhQUFOLElBQUssYUFBV0gsWUFBWUQ7WUFDOUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCTixvQkFBb0IsRUFBRUMsT0FBTztnQkFDMUQsSUFBTU0sY0FBYyxJQUFJLENBQUNWLHVCQUF1QixFQUMxQ0ssYUFBYUY7Z0JBRW5CLHVCQTNCaUJOLGlDQTJCWGMsY0FBTixJQUFLLGFBQVlELGFBQWFMLFlBQVlEO1lBQzVDOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsS0FBSyxFQUFFYix1QkFBdUI7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdjLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFFekRDO2dCQUQ3QixJQUFNakIsT0FBT0UseUJBQ1BnQix1QkFBdUJELENBQUFBLGFBQUFBLG1CQUFTLEVBQUNFLFFBQVEsT0FBbEJGLFlBQUFBO29CQUFtQkY7b0JBQU9mO29CQUFNRTtpQkFBK0MsQ0FBL0VlLE9BQXlELHFCQUFHRDtnQkFFekYsT0FBT0U7WUFDVDs7O1dBbkNtQm5CO0VBQTZCa0IsbUJBQVMifQ==