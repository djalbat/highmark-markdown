"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var IndexListHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(IndexListHTMLNode, HTMLNode);
    function IndexListHTMLNode() {
        _class_call_check(this, IndexListHTMLNode);
        return _call_super(this, IndexListHTMLNode, arguments);
    }
    _create_class(IndexListHTMLNode, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(IndexListHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(IndexListHTMLNode, outerNode);
            }
        }
    ]);
    return IndexListHTMLNode;
} // "use strict";
 //
 // import MarkdownNode from "../../../node/markdown";
 //
 // import { INDEX_LIST_RULE_NAME } from "../../../ruleNames";
 //
 // export default class IndexListMarkdownNode extends MarkdownNode {
 //   static fromIndexItemReplacements(indexItemReplacements) {
 //     const ruleName = INDEX_LIST_RULE_NAME,
 //       childNodes = indexItemReplacements.map((indexItemReplacement) => {
 //         const indexItemReplacementNode = indexItemReplacement.getIndexItemMarkdownNode(),
 //           childNode = indexItemReplacementNode;  ///
 //
 //         return childNode;
 //       }),
 //       opacity = null,
 //       indexListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexListMarkdownNode, ruleName, childNodes, opacity);
 //
 //     return indexListMarkdownNode;
 //   }
 // }
(_html.default);
_define_property(IndexListHTMLNode, "tagName", "ul");
_define_property(IndexListHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaXN0SFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImluZGV4XCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoSW5kZXhMaXN0SFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEluZGV4TGlzdEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG5cbi8vIFwidXNlIHN0cmljdFwiO1xuLy9cbi8vIGltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd25cIjtcbi8vXG4vLyBpbXBvcnQgeyBJTkRFWF9MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9ydWxlTmFtZXNcIjtcbi8vXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleExpc3RNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuLy8gICBzdGF0aWMgZnJvbUluZGV4SXRlbVJlcGxhY2VtZW50cyhpbmRleEl0ZW1SZXBsYWNlbWVudHMpIHtcbi8vICAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX0xJU1RfUlVMRV9OQU1FLFxuLy8gICAgICAgY2hpbGROb2RlcyA9IGluZGV4SXRlbVJlcGxhY2VtZW50cy5tYXAoKGluZGV4SXRlbVJlcGxhY2VtZW50KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGluZGV4SXRlbVJlcGxhY2VtZW50Tm9kZSA9IGluZGV4SXRlbVJlcGxhY2VtZW50LmdldEluZGV4SXRlbU1hcmtkb3duTm9kZSgpLFxuLy8gICAgICAgICAgIGNoaWxkTm9kZSA9IGluZGV4SXRlbVJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuLy9cbi8vICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbi8vICAgICAgIH0pLFxuLy8gICAgICAgb3BhY2l0eSA9IG51bGwsXG4vLyAgICAgICBpbmRleExpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoSW5kZXhMaXN0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG4vL1xuLy8gICAgIHJldHVybiBpbmRleExpc3RNYXJrZG93bk5vZGU7XG4vLyAgIH1cbi8vIH1cbiJdLCJuYW1lcyI6WyJJbmRleExpc3RIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFLWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQUwvQkQ7WUFLb0Q7OztZQUVoRUcsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixhQUFRLENBQUNDLGFBQWEsQ0FQNUNILG1CQU9nRUk7WUFBWTs7O1dBUDVFSjtFQVVyQixnQkFBZ0I7Q0FDaEIsRUFBRTtDQUNGLHFEQUFxRDtDQUNyRCxFQUFFO0NBQ0YsNkRBQTZEO0NBQzdELEVBQUU7Q0FDRixvRUFBb0U7Q0FDcEUsOERBQThEO0NBQzlELDZDQUE2QztDQUM3QywyRUFBMkU7Q0FDM0UsNEZBQTRGO0NBQzVGLHVEQUF1RDtDQUN2RCxFQUFFO0NBQ0YsNEJBQTRCO0NBQzVCLFlBQVk7Q0FDWix3QkFBd0I7Q0FDeEIscUlBQXFJO0NBQ3JJLEVBQUU7Q0FDRixvQ0FBb0M7Q0FDcEMsTUFBTTtDQUNOLElBQUk7Q0E5QjJDRSxhQUFRO0FBQ3JELGlCQURtQkYsbUJBQ1pLLFdBQVU7QUFFakIsaUJBSG1CTCxtQkFHWk0sYUFBWSJ9