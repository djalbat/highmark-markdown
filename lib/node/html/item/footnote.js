"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemHTMLNode;
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
var FootnoteItemHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(FootnoteItemHTMLNode, HTMLNode);
    function FootnoteItemHTMLNode() {
        _class_call_check(this, FootnoteItemHTMLNode);
        return _call_super(this, FootnoteItemHTMLNode, arguments);
    }
    _create_class(FootnoteItemHTMLNode, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(FootnoteItemHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(FootnoteItemHTMLNode, outerNode);
            }
        }
    ]);
    return FootnoteItemHTMLNode;
} // "use strict";
 //
 // import { arrayUtilities } from "necessary";
 //
 // import MarkdownNode from "../../../node/markdown";
 // import AnchorMarkdownNode from "../../../node/markdown/anchor";
 //
 // import { FOOTNOTE_PREPEND } from "../../../prepends";
 // import { FOOTNOTES_ITEM_RULE_NAME } from "../../../ruleNames";
 //
 // const { first } = arrayUtilities;
 //
 // export default class FootnotesItemMarkdownNode extends MarkdownNode {
 //   static fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier) {
 //     const prepend = FOOTNOTE_PREPEND,
 //       anchorMarkdownNode = AnchorMarkdownNode.fromPrependAndIdentifier(prepend, identifier),
 //       secondFootnoteMarkdownNodeChildNode = removeSecondChildNode(footnoteMarkdownNode),
 //       paragraphMarkdownNode = secondFootnoteMarkdownNodeChildNode,  ///
 //       ruleName = FOOTNOTES_ITEM_RULE_NAME,
 //       childNodes = [
 //         anchorMarkdownNode,
 //         paragraphMarkdownNode
 //       ],
 //       opacity = null,
 //       footnotesItemMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesItemMarkdownNode, ruleName, childNodes, opacity);
 //
 //     return footnotesItemMarkdownNode;
 //   }
 // }
 //
 // function removeSecondChildNode(markdownNode) {
 //   const startIndex = 1,
 //     deleteCount = 1,
 //     removedChildNodes = markdownNode.spliceChildNodes(startIndex, deleteCount),
 //     firstRemovedChildNode = first(removedChildNodes),
 //     secondChildNode = firstRemovedChildNode; ///
 //
 //   return secondChildNode;
 // }
(_html.default);
_define_property(FootnoteItemHTMLNode, "tagName", "li");
_define_property(FootnoteItemHTMLNode, "className", "footnote");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVJdGVtSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJsaVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImZvb3Rub3RlXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRm9vdG5vdGVJdGVtSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEZvb3Rub3RlSXRlbUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG5cbi8vIFwidXNlIHN0cmljdFwiO1xuLy9cbi8vIGltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuLy9cbi8vIGltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd25cIjtcbi8vIGltcG9ydCBBbmNob3JNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd24vYW5jaG9yXCI7XG4vL1xuLy8gaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuLy8gaW1wb3J0IHsgRk9PVE5PVEVTX0lURU1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lc1wiO1xuLy9cbi8vIGNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuLy8gICBzdGF0aWMgZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpIHtcbi8vICAgICBjb25zdCBwcmVwZW5kID0gRk9PVE5PVEVfUFJFUEVORCxcbi8vICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tUHJlcGVuZEFuZElkZW50aWZpZXIocHJlcGVuZCwgaWRlbnRpZmllciksXG4vLyAgICAgICBzZWNvbmRGb290bm90ZU1hcmtkb3duTm9kZUNoaWxkTm9kZSA9IHJlbW92ZVNlY29uZENoaWxkTm9kZShmb290bm90ZU1hcmtkb3duTm9kZSksXG4vLyAgICAgICBwYXJhZ3JhcGhNYXJrZG93bk5vZGUgPSBzZWNvbmRGb290bm90ZU1hcmtkb3duTm9kZUNoaWxkTm9kZSwgIC8vL1xuLy8gICAgICAgcnVsZU5hbWUgPSBGT09UTk9URVNfSVRFTV9SVUxFX05BTUUsXG4vLyAgICAgICBjaGlsZE5vZGVzID0gW1xuLy8gICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUsXG4vLyAgICAgICAgIHBhcmFncmFwaE1hcmtkb3duTm9kZVxuLy8gICAgICAgXSxcbi8vICAgICAgIG9wYWNpdHkgPSBudWxsLFxuLy8gICAgICAgZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG4vL1xuLy8gICAgIHJldHVybiBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gcmVtb3ZlU2Vjb25kQ2hpbGROb2RlKG1hcmtkb3duTm9kZSkge1xuLy8gICBjb25zdCBzdGFydEluZGV4ID0gMSxcbi8vICAgICBkZWxldGVDb3VudCA9IDEsXG4vLyAgICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBtYXJrZG93bk5vZGUuc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCksXG4vLyAgICAgZmlyc3RSZW1vdmVkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuLy8gICAgIHNlY29uZENoaWxkTm9kZSA9IGZpcnN0UmVtb3ZlZENoaWxkTm9kZTsgLy8vXG4vL1xuLy8gICByZXR1cm4gc2Vjb25kQ2hpbGROb2RlO1xuLy8gfVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSXRlbUhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUtaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBTC9CRDtZQUt1RDs7O1lBRW5FRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQVA1Q0gsc0JBT21FSTtZQUFZOzs7V0FQL0VKO0VBVXJCLGdCQUFnQjtDQUNoQixFQUFFO0NBQ0YsOENBQThDO0NBQzlDLEVBQUU7Q0FDRixxREFBcUQ7Q0FDckQsa0VBQWtFO0NBQ2xFLEVBQUU7Q0FDRix3REFBd0Q7Q0FDeEQsaUVBQWlFO0NBQ2pFLEVBQUU7Q0FDRixvQ0FBb0M7Q0FDcEMsRUFBRTtDQUNGLHdFQUF3RTtDQUN4RSxzRkFBc0Y7Q0FDdEYsd0NBQXdDO0NBQ3hDLCtGQUErRjtDQUMvRiwyRkFBMkY7Q0FDM0YsMEVBQTBFO0NBQzFFLDZDQUE2QztDQUM3Qyx1QkFBdUI7Q0FDdkIsOEJBQThCO0NBQzlCLGdDQUFnQztDQUNoQyxXQUFXO0NBQ1gsd0JBQXdCO0NBQ3hCLDZJQUE2STtDQUM3SSxFQUFFO0NBQ0Ysd0NBQXdDO0NBQ3hDLE1BQU07Q0FDTixJQUFJO0NBQ0osRUFBRTtDQUNGLGlEQUFpRDtDQUNqRCwwQkFBMEI7Q0FDMUIsdUJBQXVCO0NBQ3ZCLGtGQUFrRjtDQUNsRix3REFBd0Q7Q0FDeEQsbURBQW1EO0NBQ25ELEVBQUU7Q0FDRiw0QkFBNEI7Q0FDNUIsSUFBSTtDQWhEOENFLGFBQVE7QUFDeEQsaUJBRG1CRixzQkFDWkssV0FBVTtBQUVqQixpQkFIbUJMLHNCQUdaTSxhQUFZIn0=