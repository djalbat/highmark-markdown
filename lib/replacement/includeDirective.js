"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectiveReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _query = require("../utilities/query");
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
var IncludeDirectiveReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IncludeDirectiveReplacement, Replacement);
    var _super = _create_super(IncludeDirectiveReplacement);
    function IncludeDirectiveReplacement() {
        _class_call_check(this, IncludeDirectiveReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(IncludeDirectiveReplacement, [
        {
            key: "addDivisionMarkdownNode",
            value: function addDivisionMarkdownNode(context) {
                var divisionMarkdownNode = this.getDivisionMarkdownNode(), ignored = divisionMarkdownNode.isIgnored();
                if (!ignored) {
                    var _tokens;
                    var divisionMarkdownNodes = context.divisionMarkdownNodes;
                    divisionMarkdownNodes.push(divisionMarkdownNode);
                    var tokens = this.getTokens();
                    var includedTokens = tokens; ///
                    tokens = context.tokens;
                    var tokensLength = tokens.length, start = tokensLength, deleteCount = 0;
                    (_tokens = tokens).splice.apply(_tokens, [
                        start,
                        deleteCount
                    ].concat(_to_consumable_array(includedTokens)));
                }
                var node = divisionMarkdownNode, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                return subDivisionMarkdownNodes;
            }
        },
        {
            key: "getDivisionMarkdownNode",
            value: function getDivisionMarkdownNode() {
                var node = this.getNode(), divisionMarkdownNode = node; ///
                return divisionMarkdownNode;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodeAndTokens",
            value: function fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens) {
                var node = divisionMarkdownNode, includeDirectiveReplacement = _replacement.default.fromNodeAndTokens(IncludeDirectiveReplacement, node, tokens);
                return includeDirectiveReplacement;
            }
        }
    ]);
    return IncludeDirectiveReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmNsdWRlRGlyZWN0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5cbmltcG9ydCB7IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIGFkZERpdmlzaW9uTWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBpZ25vcmVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuaXNJZ25vcmVkKCk7XG5cbiAgICBpZiAoIWlnbm9yZWQpIHtcbiAgICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSBjb250ZXh0O1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGxldCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpO1xuXG4gICAgICBjb25zdCBpbmNsdWRlZFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICAgICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXG4gICAgICAgICAgICBzdGFydCA9IHRva2Vuc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICAgIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pbmNsdWRlZFRva2Vucyk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudCIsImFkZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJpZ25vcmVkIiwiaXNJZ25vcmVkIiwidG9rZW5zIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwicHVzaCIsImdldFRva2VucyIsImluY2x1ZGVkVG9rZW5zIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsIm5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImdldE5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMiLCJpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKRztxQkFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsNENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3QkMsT0FBTztnQkFDN0IsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLElBQ25EQyxVQUFVRixxQkFBcUJHLFNBQVM7Z0JBRTlDLElBQUksQ0FBQ0QsU0FBUzt3QkFlWkU7b0JBZEEsSUFBTSxBQUFFQyx3QkFBMEJOLFFBQTFCTTtvQkFFUkEsc0JBQXNCQyxJQUFJLENBQUNOO29CQUUzQixJQUFJSSxTQUFTLElBQUksQ0FBQ0csU0FBUztvQkFFM0IsSUFBTUMsaUJBQWlCSixRQUFRLEdBQUc7b0JBRS9CQSxTQUFXTCxRQUFYSztvQkFFSCxJQUFNSyxlQUFlTCxPQUFPTSxNQUFNLEVBQzVCQyxRQUFRRixjQUNSRyxjQUFjO29CQUVwQlIsQ0FBQUEsVUFBQUEsUUFBT1MsTUFBTSxDQUFiVCxNQUFBQSxTQUFBQTt3QkFBY087d0JBQU9DO3FCQUErQixDQUFwRFIsT0FBa0MscUJBQUdJO2dCQUN2QztnQkFFQSxJQUFNTSxPQUFPZCxzQkFDUGUsMkJBQTJCQyxJQUFBQSx1Q0FBZ0MsRUFBQ0Y7Z0JBRWxFLE9BQU9DO1lBQ1Q7OztZQUVBZCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWEsT0FBTyxJQUFJLENBQUNHLE9BQU8sSUFDbkJqQix1QkFBdUJjLE1BQU8sR0FBRztnQkFFdkMsT0FBT2Q7WUFDVDs7OztZQUVPa0IsS0FBQUE7bUJBQVAsU0FBT0Esa0NBQWtDbEIsb0JBQW9CLEVBQUVJLE1BQU07Z0JBQ25FLElBQU1VLE9BQU9kLHNCQUNQbUIsOEJBQThCQyxvQkFBVyxDQUFDQyxpQkFBaUIsQ0F0Q2hEeEIsNkJBc0M4RWlCLE1BQU1WO2dCQUVyRyxPQUFPZTtZQUNUOzs7V0F6Q21CdEI7RUFBb0N1QixvQkFBVyJ9