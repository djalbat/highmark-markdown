"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectiveReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _query = require("../utilities/query");
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
var EmbedDirectiveReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(EmbedDirectiveReplacement, Replacement);
    function EmbedDirectiveReplacement() {
        _class_call_check(this, EmbedDirectiveReplacement);
        return _call_super(this, EmbedDirectiveReplacement, arguments);
    }
    _create_class(EmbedDirectiveReplacement, [
        {
            key: "addAfterSubDivisionMarkdownNode",
            value: function addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context) {
                var existingNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(EmbedDirectiveReplacement.prototype), "addAfter", this).call(this, existingNode, parentNode, context);
                divisionMarkdownNode = this.getDivisionMarkdownNode(); ///
                var node = divisionMarkdownNode; ///
                (0, _query.subDivisionMarkdownNodesFromNode)(node, subDivisionMarkdownNodes);
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
                var node = divisionMarkdownNode, embedDirectiveReplacement = _replacement.default.fromNodeAndTokens(EmbedDirectiveReplacement, node, tokens);
                return embedDirectiveReplacement;
            }
        }
    ]);
    return EmbedDirectiveReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9lbWJlZERpcmVjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgYWRkQWZ0ZXJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLmFkZEFmdGVyKGV4aXN0aW5nTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKTsgIC8vL1xuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMpO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKEVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gZW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJhZGRBZnRlclN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbnRleHQiLCJleGlzdGluZ05vZGUiLCJwYXJlbnROb2RlIiwiYWRkQWZ0ZXIiLCJnZXREaXZpc2lvbk1hcmtkb3duTm9kZSIsIm5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImdldE5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMiLCJ0b2tlbnMiLCJlbWJlZERpcmVjdGl2ZVJlcGxhY2VtZW50IiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSkc7cUJBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NDLHVCQUF1QixFQUFFQyxvQkFBb0IsRUFBRUMsd0JBQXdCLEVBQUVDLE9BQU87Z0JBQzlHLElBQU1DLGVBQWVKLHlCQUNmSyxhQUFhSixzQkFBdUIsR0FBRztnQkFFN0MsdUJBTGlCSCxzQ0FLWFEsWUFBTixJQUFLLGFBQVVGLGNBQWNDLFlBQVlGO2dCQUV6Q0YsdUJBQXVCLElBQUksQ0FBQ00sdUJBQXVCLElBQUssR0FBRztnQkFFM0QsSUFBTUMsT0FBT1Asc0JBQXVCLEdBQUc7Z0JBRXZDUSxJQUFBQSx1Q0FBZ0MsRUFBQ0QsTUFBTU47WUFDekM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNFLE9BQU8sSUFDbkJULHVCQUF1Qk8sTUFBTyxHQUFHO2dCQUV2QyxPQUFPUDtZQUNUOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLGtDQUFrQ1Ysb0JBQW9CLEVBQUVXLE1BQU07Z0JBQ25FLElBQU1KLE9BQU9QLHNCQUNQWSw0QkFBNEJDLG9CQUFXLENBQUNDLGlCQUFpQixDQXZCOUNqQiwyQkF1QjBFVSxNQUFNSTtnQkFFakcsT0FBT0M7WUFDVDs7O1dBMUJtQmY7RUFBa0NnQixvQkFBVyJ9