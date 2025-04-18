"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectiveTransform;
    }
});
var _occamdom = require("occam-dom");
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
var IncludeDirectiveTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IncludeDirectiveTransform, Transform);
    function IncludeDirectiveTransform() {
        _class_call_check(this, IncludeDirectiveTransform);
        return _call_super(this, IncludeDirectiveTransform, arguments);
    }
    _create_class(IncludeDirectiveTransform, [
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
                var node = divisionMarkdownNode, includeDirectiveTransform = _occamdom.Transform.fromNodeAndTokens(IncludeDirectiveTransform, node, tokens);
                return includeDirectiveTransform;
            }
        }
    ]);
    return IncludeDirectiveTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5jbHVkZURpcmVjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGFkZERpdmlzaW9uTWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBpZ25vcmVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuaXNJZ25vcmVkKCk7XG5cbiAgICBpZiAoIWlnbm9yZWQpIHtcbiAgICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSBjb250ZXh0O1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGxldCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpO1xuXG4gICAgICBjb25zdCBpbmNsdWRlZFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICAgICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXG4gICAgICAgICAgICBzdGFydCA9IHRva2Vuc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICAgIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pbmNsdWRlZFRva2Vucyk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhJbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtIiwiYWRkRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXREaXZpc2lvbk1hcmtkb3duTm9kZSIsImlnbm9yZWQiLCJpc0lnbm9yZWQiLCJ0b2tlbnMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwdXNoIiwiZ2V0VG9rZW5zIiwiaW5jbHVkZWRUb2tlbnMiLCJ0b2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwibm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZ2V0Tm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyIsImluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7d0JBSks7cUJBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLE9BQU87Z0JBQzdCLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuREMsVUFBVUYscUJBQXFCRyxTQUFTO2dCQUU5QyxJQUFJLENBQUNELFNBQVM7d0JBZVpFO29CQWRBLElBQU0sQUFBRUMsd0JBQTBCTixRQUExQk07b0JBRVJBLHNCQUFzQkMsSUFBSSxDQUFDTjtvQkFFM0IsSUFBSUksU0FBUyxJQUFJLENBQUNHLFNBQVM7b0JBRTNCLElBQU1DLGlCQUFpQkosUUFBUSxHQUFHO29CQUUvQkEsU0FBV0wsUUFBWEs7b0JBRUgsSUFBTUssZUFBZUwsT0FBT00sTUFBTSxFQUM1QkMsUUFBUUYsY0FDUkcsY0FBYztvQkFFcEJSLENBQUFBLFVBQUFBLFFBQU9TLE1BQU0sT0FBYlQsU0FBQUE7d0JBQWNPO3dCQUFPQztxQkFBK0IsQ0FBcERSLE9BQWtDLHFCQUFHSTtnQkFDdkM7Z0JBRUEsSUFBTU0sT0FBT2Qsc0JBQ1BlLDJCQUEyQkMsSUFBQUEsdUNBQWdDLEVBQUNGO2dCQUVsRSxPQUFPQztZQUNUOzs7WUFFQWQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1hLE9BQU8sSUFBSSxDQUFDRyxPQUFPLElBQ25CakIsdUJBQXVCYyxNQUFPLEdBQUc7Z0JBRXZDLE9BQU9kO1lBQ1Q7Ozs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLGtDQUFrQ2xCLG9CQUFvQixFQUFFSSxNQUFNO2dCQUNuRSxJQUFNVSxPQUFPZCxzQkFDUG1CLDRCQUE0QkMsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBdEM1Q3hCLDJCQXNDd0VpQixNQUFNVjtnQkFFL0YsT0FBT2U7WUFDVDs7O1dBekNtQnRCO0VBQWtDdUIsbUJBQVMifQ==