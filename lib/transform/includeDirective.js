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
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var IncludeDirectiveReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IncludeDirectiveReplacement, Replacement);
    function IncludeDirectiveReplacement() {
        _class_call_check(this, IncludeDirectiveReplacement);
        return _call_super(this, IncludeDirectiveReplacement, arguments);
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
                var node = divisionMarkdownNode, includeDirectiveReplacement = _.default.fromNodeAndTokens(IncludeDirectiveReplacement, node, tokens);
                return includeDirectiveReplacement;
            }
        }
    ]);
    return IncludeDirectiveReplacement;
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5jbHVkZURpcmVjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuL1wiO1xuXG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBhZGREaXZpc2lvbk1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLmdldERpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgaWdub3JlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmlzSWdub3JlZCgpO1xuXG4gICAgaWYgKCFpZ25vcmVkKSB7XG4gICAgICBjb25zdCB7IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyB9ID0gY29udGV4dDtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgICBsZXQgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcblxuICAgICAgY29uc3QgaW5jbHVkZWRUb2tlbnMgPSB0b2tlbnM7IC8vL1xuXG4gICAgICAoeyB0b2tlbnMgfSA9IGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxuICAgICAgICAgICAgc3RhcnQgPSB0b2tlbnNMZW5ndGgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uaW5jbHVkZWRUb2tlbnMpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldERpdmlzaW9uTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMoZGl2aXNpb25NYXJrZG93bk5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKEluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJhZGREaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaWdub3JlZCIsImlzSWdub3JlZCIsInRva2VucyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInB1c2giLCJnZXRUb2tlbnMiLCJpbmNsdWRlZFRva2VucyIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJub2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJnZXROb2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwiaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50IiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7dURBSkc7cUJBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLDRDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3QkMsT0FBTztnQkFDN0IsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLElBQ25EQyxVQUFVRixxQkFBcUJHLFNBQVM7Z0JBRTlDLElBQUksQ0FBQ0QsU0FBUzt3QkFlWkU7b0JBZEEsSUFBTSxBQUFFQyx3QkFBMEJOLFFBQTFCTTtvQkFFUkEsc0JBQXNCQyxJQUFJLENBQUNOO29CQUUzQixJQUFJSSxTQUFTLElBQUksQ0FBQ0csU0FBUztvQkFFM0IsSUFBTUMsaUJBQWlCSixRQUFRLEdBQUc7b0JBRS9CQSxTQUFXTCxRQUFYSztvQkFFSCxJQUFNSyxlQUFlTCxPQUFPTSxNQUFNLEVBQzVCQyxRQUFRRixjQUNSRyxjQUFjO29CQUVwQlIsQ0FBQUEsVUFBQUEsUUFBT1MsTUFBTSxPQUFiVCxTQUFBQTt3QkFBY087d0JBQU9DO3FCQUErQixDQUFwRFIsT0FBa0MscUJBQUdJO2dCQUN2QztnQkFFQSxJQUFNTSxPQUFPZCxzQkFDUGUsMkJBQTJCQyxJQUFBQSx1Q0FBZ0MsRUFBQ0Y7Z0JBRWxFLE9BQU9DO1lBQ1Q7OztZQUVBZCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWEsT0FBTyxJQUFJLENBQUNHLE9BQU8sSUFDbkJqQix1QkFBdUJjLE1BQU8sR0FBRztnQkFFdkMsT0FBT2Q7WUFDVDs7OztZQUVPa0IsS0FBQUE7bUJBQVAsU0FBT0Esa0NBQWtDbEIsb0JBQW9CLEVBQUVJLE1BQU07Z0JBQ25FLElBQU1VLE9BQU9kLHNCQUNQbUIsOEJBQThCQyxTQUFXLENBQUNDLGlCQUFpQixDQXRDaER4Qiw2QkFzQzhFaUIsTUFBTVY7Z0JBRXJHLE9BQU9lO1lBQ1Q7OztXQXpDbUJ0QjtFQUFvQ3VCLFNBQVcifQ==