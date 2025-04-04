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
                var node = divisionMarkdownNode, includeDirectiveReplacement = _replacement.default.fromNodeAndTokens(IncludeDirectiveReplacement, node, tokens);
                return includeDirectiveReplacement;
            }
        }
    ]);
    return IncludeDirectiveReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmNsdWRlRGlyZWN0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5cbmltcG9ydCB7IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIGFkZERpdmlzaW9uTWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBpZ25vcmVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuaXNJZ25vcmVkKCk7XG5cbiAgICBpZiAoIWlnbm9yZWQpIHtcbiAgICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSBjb250ZXh0O1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGxldCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpO1xuXG4gICAgICBjb25zdCBpbmNsdWRlZFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICAgICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXG4gICAgICAgICAgICBzdGFydCA9IHRva2Vuc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICAgIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pbmNsdWRlZFRva2Vucyk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudCIsImFkZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJpZ25vcmVkIiwiaXNJZ25vcmVkIiwidG9rZW5zIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwicHVzaCIsImdldFRva2VucyIsImluY2x1ZGVkVG9rZW5zIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsIm5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImdldE5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMiLCJpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKRztxQkFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsNENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyxPQUFPO2dCQUM3QixJQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUIsSUFDbkRDLFVBQVVGLHFCQUFxQkcsU0FBUztnQkFFOUMsSUFBSSxDQUFDRCxTQUFTO3dCQWVaRTtvQkFkQSxJQUFNLEFBQUVDLHdCQUEwQk4sUUFBMUJNO29CQUVSQSxzQkFBc0JDLElBQUksQ0FBQ047b0JBRTNCLElBQUlJLFNBQVMsSUFBSSxDQUFDRyxTQUFTO29CQUUzQixJQUFNQyxpQkFBaUJKLFFBQVEsR0FBRztvQkFFL0JBLFNBQVdMLFFBQVhLO29CQUVILElBQU1LLGVBQWVMLE9BQU9NLE1BQU0sRUFDNUJDLFFBQVFGLGNBQ1JHLGNBQWM7b0JBRXBCUixDQUFBQSxVQUFBQSxRQUFPUyxNQUFNLE9BQWJULFNBQUFBO3dCQUFjTzt3QkFBT0M7cUJBQStCLENBQXBEUixPQUFrQyxxQkFBR0k7Z0JBQ3ZDO2dCQUVBLElBQU1NLE9BQU9kLHNCQUNQZSwyQkFBMkJDLElBQUFBLHVDQUFnQyxFQUFDRjtnQkFFbEUsT0FBT0M7WUFDVDs7O1lBRUFkLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYSxPQUFPLElBQUksQ0FBQ0csT0FBTyxJQUNuQmpCLHVCQUF1QmMsTUFBTyxHQUFHO2dCQUV2QyxPQUFPZDtZQUNUOzs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSxrQ0FBa0NsQixvQkFBb0IsRUFBRUksTUFBTTtnQkFDbkUsSUFBTVUsT0FBT2Qsc0JBQ1BtQiw4QkFBOEJDLG9CQUFXLENBQUNDLGlCQUFpQixDQXRDaER4Qiw2QkFzQzhFaUIsTUFBTVY7Z0JBRXJHLE9BQU9lO1lBQ1Q7OztXQXpDbUJ0QjtFQUFvQ3VCLG9CQUFXIn0=