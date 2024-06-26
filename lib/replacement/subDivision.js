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
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var SubDivisionReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(SubDivisionReplacement, Replacement);
    var _super = _create_super(SubDivisionReplacement);
    function SubDivisionReplacement(node, tokens, subDivisionMarkdownNode) {
        _class_call_check(this, SubDivisionReplacement);
        var _this;
        _this = _super.call(this, node, tokens);
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
                var node = subDivisionMarkdownNode, subDivisionReplacement = (_Replacement = _replacement.default).fromNode.apply(_Replacement, [
                    Class,
                    node,
                    subDivisionMarkdownNode
                ].concat(_to_consumable_array(remainingArguments)));
                return subDivisionReplacement;
            }
        }
    ]);
    return SubDivisionReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJEaXZpc2lvblJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMuc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIuYXBwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBwcmVwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIucHJlcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVtb3ZlZE5vZGUgPSB0aGlzLnN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7XG5cbiAgICBzdXBlci5yZW1vdmVGcm9tKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoQ2xhc3MsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZShDbGFzcywgbm9kZSwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJub2RlIiwidG9rZW5zIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJwYXJlbnROb2RlIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZSIsInByZXBlbmRUbyIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlRnJvbSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiUmVwbGFjZW1lbnQiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZnJvbU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2tFQUZHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsSUFBQSxBQUFNQSx1Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSx1QkFDUEMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLHVCQUF1QjtnQ0FEOUJIOztrQ0FFWEMsTUFBTUM7UUFFWixNQUFLQyx1QkFBdUIsR0FBR0E7OztrQkFKZEg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELHVCQUF1QjtZQUNyQzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkJDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUN4RCxJQUFNQyxhQUFhRixzQkFBdUIsR0FBRztnQkFFN0MsdUJBZGlCTixtQ0FjWFMsWUFBTixJQUFLLGFBQVVELFlBQVlEO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4Qkosb0JBQW9CLEVBQUVDLE9BQU87Z0JBQ3pELElBQU1DLGFBQWFGLHNCQUF1QixHQUFHO2dCQUU3Qyx1QkFwQmlCTixtQ0FvQlhXLGFBQU4sSUFBSyxhQUFXSCxZQUFZRDtZQUM5Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0JOLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMxRCxJQUFNTSxjQUFjLElBQUksQ0FBQ1YsdUJBQXVCLEVBQzFDSyxhQUFhRjtnQkFFbkIsdUJBM0JpQk4sbUNBMkJYYyxjQUFOLElBQUssYUFBWUQsYUFBYUwsWUFBWUQ7WUFDNUM7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyxLQUFLLEVBQUViLHVCQUF1QjtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQUV2REM7Z0JBRC9CLElBQU1qQixPQUFPRSx5QkFDUGdCLHlCQUF5QkQsQ0FBQUEsZUFBQUEsb0JBQVcsRUFBQ0UsUUFBUSxDQUFwQkYsTUFBQUEsY0FBQUE7b0JBQXFCRjtvQkFBT2Y7b0JBQU1FO2lCQUErQyxDQUFqRmUsT0FBMkQscUJBQUdEO2dCQUU3RixPQUFPRTtZQUNUOzs7V0FuQ21CbkI7RUFBK0JrQixvQkFBVyJ9