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
    function SubDivisionReplacement(node, tokens, removedNode) {
        _class_call_check(this, SubDivisionReplacement);
        var _this;
        _this = _super.call(this, node, tokens);
        _this.removedNode = removedNode;
        return _this;
    }
    _create_class(SubDivisionReplacement, [
        {
            key: "getRemovedNode",
            value: function getRemovedNode() {
                return this.removedNode;
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
            key: "removeFromDivisionMarkdownNode",
            value: function removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(SubDivisionReplacement.prototype), "removeFrom", this).call(this, this.removedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(Class, subDivisionMarkdownNode, context) {
                var node = subDivisionMarkdownNode, removedNode = subDivisionMarkdownNode, subDivisionReplacement = _replacement.default.fromNode(Class, node, context, removedNode);
                return subDivisionReplacement;
            }
        }
    ]);
    return SubDivisionReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJEaXZpc2lvblJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIHJlbW92ZWROb2RlKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMucmVtb3ZlZE5vZGUgPSByZW1vdmVkTm9kZTtcbiAgfVxuXG4gIGdldFJlbW92ZWROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZWROb2RlO1xuICB9XG5cbiAgYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIuYXBwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLnJlbW92ZUZyb20odGhpcy5yZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKENsYXNzLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcmVtb3ZlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlKENsYXNzLCBub2RlLCBjb250ZXh0LCByZW1vdmVkTm9kZSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJub2RlIiwidG9rZW5zIiwicmVtb3ZlZE5vZGUiLCJnZXRSZW1vdmVkTm9kZSIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJwYXJlbnROb2RlIiwiYXBwZW5kVG8iLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVGcm9tIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiQ2xhc3MiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7a0VBRkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVULElBQUEsQUFBTUEsdUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsdUJBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxXQUFXO2dDQURsQkg7O2tDQUVYQyxNQUFNQztRQUVaLE1BQUtDLFdBQVcsR0FBR0E7OztrQkFKRkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFdBQVc7WUFDekI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDeEQsSUFBTUMsYUFBYUYsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQWRpQk4sbUNBY1hTLFlBQU4sSUFBSyxhQUFVRCxZQUFZRDtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0JKLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMxRCxJQUFNQyxhQUFhRixzQkFBdUIsR0FBRztnQkFFN0MsdUJBcEJpQk4sbUNBb0JYVyxjQUFOLElBQUssYUFBWSxJQUFJLENBQUNSLFdBQVcsRUFBRUssWUFBWUQ7WUFDakQ7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyxLQUFLLEVBQUVDLHVCQUF1QixFQUFFUCxPQUFPO2dCQUN4RSxJQUFNTixPQUFPYSx5QkFDUFgsY0FBY1cseUJBQ2RDLHlCQUF5QkMsb0JBQVcsQ0FBQ0MsUUFBUSxDQUFDSixPQUFPWixNQUFNTSxTQUFTSjtnQkFFMUUsT0FBT1k7WUFDVDs7O1dBN0JtQmY7RUFBK0JnQixvQkFBVyJ9