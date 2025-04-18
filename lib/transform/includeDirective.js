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
var _transform = /*#__PURE__*/ _interop_require_default(require("../transform"));
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
                var node = divisionMarkdownNode, includeDirectiveTransform = _transform.default.fromNodeAndTokens(IncludeDirectiveTransform, node, tokens);
                return includeDirectiveTransform;
            }
        }
    ]);
    return IncludeDirectiveTransform;
}(_transform.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5jbHVkZURpcmVjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtXCI7XG5cbmltcG9ydCB7IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgYWRkRGl2aXNpb25NYXJrZG93bk5vZGUoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIGlnbm9yZWQgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5pc0lnbm9yZWQoKTtcblxuICAgIGlmICghaWdub3JlZCkge1xuICAgICAgY29uc3QgeyBkaXZpc2lvbk1hcmtkb3duTm9kZXMgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgbGV0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCk7XG5cbiAgICAgIGNvbnN0IGluY2x1ZGVkVG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAgICAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICAgICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW5zTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmluY2x1ZGVkVG9rZW5zKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBnZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKEluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0iLCJhZGREaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaWdub3JlZCIsImlzSWdub3JlZCIsInRva2VucyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInB1c2giLCJnZXRUb2tlbnMiLCJpbmNsdWRlZFRva2VucyIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJub2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJnZXROb2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwiaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztnRUFKQztxQkFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyxPQUFPO2dCQUM3QixJQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUIsSUFDbkRDLFVBQVVGLHFCQUFxQkcsU0FBUztnQkFFOUMsSUFBSSxDQUFDRCxTQUFTO3dCQWVaRTtvQkFkQSxJQUFNLEFBQUVDLHdCQUEwQk4sUUFBMUJNO29CQUVSQSxzQkFBc0JDLElBQUksQ0FBQ047b0JBRTNCLElBQUlJLFNBQVMsSUFBSSxDQUFDRyxTQUFTO29CQUUzQixJQUFNQyxpQkFBaUJKLFFBQVEsR0FBRztvQkFFL0JBLFNBQVdMLFFBQVhLO29CQUVILElBQU1LLGVBQWVMLE9BQU9NLE1BQU0sRUFDNUJDLFFBQVFGLGNBQ1JHLGNBQWM7b0JBRXBCUixDQUFBQSxVQUFBQSxRQUFPUyxNQUFNLE9BQWJULFNBQUFBO3dCQUFjTzt3QkFBT0M7cUJBQStCLENBQXBEUixPQUFrQyxxQkFBR0k7Z0JBQ3ZDO2dCQUVBLElBQU1NLE9BQU9kLHNCQUNQZSwyQkFBMkJDLElBQUFBLHVDQUFnQyxFQUFDRjtnQkFFbEUsT0FBT0M7WUFDVDs7O1lBRUFkLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYSxPQUFPLElBQUksQ0FBQ0csT0FBTyxJQUNuQmpCLHVCQUF1QmMsTUFBTyxHQUFHO2dCQUV2QyxPQUFPZDtZQUNUOzs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSxrQ0FBa0NsQixvQkFBb0IsRUFBRUksTUFBTTtnQkFDbkUsSUFBTVUsT0FBT2Qsc0JBQ1BtQiw0QkFBNEJDLGtCQUFTLENBQUNDLGlCQUFpQixDQXRDNUN4QiwyQkFzQ3dFaUIsTUFBTVY7Z0JBRS9GLE9BQU9lO1lBQ1Q7OztXQXpDbUJ0QjtFQUFrQ3VCLGtCQUFTIn0=