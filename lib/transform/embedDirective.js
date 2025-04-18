"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectiveTransform;
    }
});
var _transform = /*#__PURE__*/ _interop_require_default(require("../transform"));
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
var EmbedDirectiveTransform = /*#__PURE__*/ function(Transform) {
    _inherits(EmbedDirectiveTransform, Transform);
    function EmbedDirectiveTransform() {
        _class_call_check(this, EmbedDirectiveTransform);
        return _call_super(this, EmbedDirectiveTransform, arguments);
    }
    _create_class(EmbedDirectiveTransform, [
        {
            key: "addAfterSubDivisionMarkdownNode",
            value: function addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context) {
                var existingNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(EmbedDirectiveTransform.prototype), "addAfter", this).call(this, existingNode, parentNode, context);
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
                var node = divisionMarkdownNode, embedDirectiveTransform = _transform.default.fromNodeAndTokens(EmbedDirectiveTransform, node, tokens);
                return embedDirectiveTransform;
            }
        }
    ]);
    return EmbedDirectiveTransform;
}(_transform.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZW1iZWREaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSBcIi4uL3RyYW5zZm9ybVwiO1xuXG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBhZGRBZnRlclN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIuYWRkQWZ0ZXIoZXhpc3RpbmdOb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KTtcblxuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpOyAgLy8vXG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG4gIH1cblxuICBnZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhFbWJlZERpcmVjdGl2ZVRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtIiwiYWRkQWZ0ZXJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb250ZXh0IiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsImFkZEFmdGVyIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJub2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJnZXROb2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwidG9rZW5zIiwiZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7Z0VBSkM7cUJBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NDLHVCQUF1QixFQUFFQyxvQkFBb0IsRUFBRUMsd0JBQXdCLEVBQUVDLE9BQU87Z0JBQzlHLElBQU1DLGVBQWVKLHlCQUNmSyxhQUFhSixzQkFBdUIsR0FBRztnQkFFN0MsdUJBTGlCSCxvQ0FLWFEsWUFBTixJQUFLLGFBQVVGLGNBQWNDLFlBQVlGO2dCQUV6Q0YsdUJBQXVCLElBQUksQ0FBQ00sdUJBQXVCLElBQUssR0FBRztnQkFFM0QsSUFBTUMsT0FBT1Asc0JBQXVCLEdBQUc7Z0JBRXZDUSxJQUFBQSx1Q0FBZ0MsRUFBQ0QsTUFBTU47WUFDekM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNFLE9BQU8sSUFDbkJULHVCQUF1Qk8sTUFBTyxHQUFHO2dCQUV2QyxPQUFPUDtZQUNUOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLGtDQUFrQ1Ysb0JBQW9CLEVBQUVXLE1BQU07Z0JBQ25FLElBQU1KLE9BQU9QLHNCQUNQWSwwQkFBMEJDLGtCQUFTLENBQUNDLGlCQUFpQixDQXZCMUNqQix5QkF1Qm9FVSxNQUFNSTtnQkFFM0YsT0FBT0M7WUFDVDs7O1dBMUJtQmY7RUFBZ0NnQixrQkFBUyJ9