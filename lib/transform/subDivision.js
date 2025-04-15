"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubDivisionReplacement;
    }
});
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
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
var SubDivisionReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(SubDivisionReplacement, Replacement);
    function SubDivisionReplacement(node, tokens, subDivisionMarkdownNode) {
        _class_call_check(this, SubDivisionReplacement);
        var _this;
        _this = _call_super(this, SubDivisionReplacement, [
            node,
            tokens
        ]);
        _this.subDivisionMarkdownNode = subDivisionMarkdownNode;
        return _this;
    }
    _create_class(SubDivisionReplacement, [
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
                _get(_get_prototype_of(SubDivisionReplacement.prototype), "appendTo", this).call(this, parentNode, context);
            }
        },
        {
            key: "prependToDivisionMarkdownNode",
            value: function prependToDivisionMarkdownNode(divisionMarkdownNode, context) {
                var parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(SubDivisionReplacement.prototype), "prependTo", this).call(this, parentNode, context);
            }
        },
        {
            key: "removeFromDivisionMarkdownNode",
            value: function removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var removedNode = this.subDivisionMarkdownNode, parentNode = divisionMarkdownNode;
                _get(_get_prototype_of(SubDivisionReplacement.prototype), "removeFrom", this).call(this, removedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(Class, subDivisionMarkdownNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Replacement;
                var node = subDivisionMarkdownNode, subDivisionReplacement = (_Replacement = _.default).fromNode.apply(_Replacement, [
                    Class,
                    node,
                    subDivisionMarkdownNode
                ].concat(_to_consumable_array(remainingArguments)));
                return subDivisionReplacement;
            }
        }
    ]);
    return SubDivisionReplacement;
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGl2aXNpb25SZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLmFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcHJlcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLnByZXBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlbW92ZWROb2RlID0gdGhpcy5zdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuXG4gICAgc3VwZXIucmVtb3ZlRnJvbShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKENsYXNzLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJEaXZpc2lvblJlcGxhY2VtZW50Iiwibm9kZSIsInRva2VucyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwicGFyZW50Tm9kZSIsImFwcGVuZFRvIiwicHJlcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJwcmVwZW5kVG8iLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVkTm9kZSIsInJlbW92ZUZyb20iLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIlJlcGxhY2VtZW50Iiwic3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZyb21Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt1REFGRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVULElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7YUFBQUEsdUJBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyx1QkFBdUI7Z0NBRDlCSDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBTUM7O1FBRVosTUFBS0MsdUJBQXVCLEdBQUdBOzs7a0JBSmRIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCx1QkFBdUI7WUFDckM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDeEQsSUFBTUMsYUFBYUYsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQWRpQk4sbUNBY1hTLFlBQU4sSUFBSyxhQUFVRCxZQUFZRDtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJKLG9CQUFvQixFQUFFQyxPQUFPO2dCQUN6RCxJQUFNQyxhQUFhRixzQkFBdUIsR0FBRztnQkFFN0MsdUJBcEJpQk4sbUNBb0JYVyxhQUFOLElBQUssYUFBV0gsWUFBWUQ7WUFDOUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCTixvQkFBb0IsRUFBRUMsT0FBTztnQkFDMUQsSUFBTU0sY0FBYyxJQUFJLENBQUNWLHVCQUF1QixFQUMxQ0ssYUFBYUY7Z0JBRW5CLHVCQTNCaUJOLG1DQTJCWGMsY0FBTixJQUFLLGFBQVlELGFBQWFMLFlBQVlEO1lBQzVDOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsS0FBSyxFQUFFYix1QkFBdUI7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdjLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFFdkRDO2dCQUQvQixJQUFNakIsT0FBT0UseUJBQ1BnQix5QkFBeUJELENBQUFBLGVBQUFBLFNBQVcsRUFBQ0UsUUFBUSxPQUFwQkYsY0FBQUE7b0JBQXFCRjtvQkFBT2Y7b0JBQU1FO2lCQUErQyxDQUFqRmUsT0FBMkQscUJBQUdEO2dCQUU3RixPQUFPRTtZQUNUOzs7V0FuQ21CbkI7RUFBK0JrQixTQUFXIn0=