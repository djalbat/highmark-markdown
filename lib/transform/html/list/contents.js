"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../../node/html/list/contents"));
var _contents1 = /*#__PURE__*/ _interop_require_default(require("../../../transform/html/item/contents"));
var _contents2 = require("../../../utilities/contents");
var _html1 = require("../../../utilities/html");
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
var ContentsListHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(ContentsListHTMLTransform, HTMLTransform);
    function ContentsListHTMLTransform() {
        _class_call_check(this, ContentsListHTMLTransform);
        return _call_super(this, ContentsListHTMLTransform, arguments);
    }
    _create_class(ContentsListHTMLTransform, [
        {
            key: "replaceContentsDirectiveHTMLTransform",
            value: function replaceContentsDirectiveHTMLTransform(contentsDirectiveHTMLTransform) {
                var contentsDirectiveHTMLNode = contentsDirectiveHTMLTransform.getContentsDirectiveHTMLNode(), replacedHTMLNode = contentsDirectiveHTMLNode; ///
                _get(_get_prototype_of(ContentsListHTMLTransform.prototype), "replace", this).call(this, replacedHTMLNode);
            }
        }
    ], [
        {
            key: "fromTopmostHTMLNode",
            value: function fromTopmostHTMLNode(topmostHTMLNode, context) {
                var contentsListHTMLTransform = null;
                var node = topmostHTMLNode, headingHTMLNodes = (0, _html1.headingHTMLNodesFromNode)(node), headingHTMLNodesLength = headingHTMLNodes.length;
                if (headingHTMLNodesLength > 0) {
                    var nestedHeadingNodes = nestedHeadingNodesFromHeadingHTMLNodes(headingHTMLNodes), contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), htmlNode = contentsListHTMLNode; ///
                    contentsListHTMLTransform = _html.default.fromHTMLNode(ContentsListHTMLTransform, htmlNode);
                }
                return contentsListHTMLTransform;
            }
        },
        {
            key: "fromNestedHeadingNodes",
            value: function fromNestedHeadingNodes(nestedHeadingNodes, context) {
                var contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), htmlNode = contentsListHTMLNode, contentsListHTMLTransform = _html.default.fromHTMLNode(ContentsListHTMLTransform, htmlNode);
                return contentsListHTMLTransform;
            }
        }
    ]);
    return ContentsListHTMLTransform;
}(_html.default);
Object.assign(_contents1.default, {
    ContentsListHTMLTransform: ContentsListHTMLTransform
});
var _default = ContentsListHTMLTransform;
function nestedHeadingNodesFromHeadingHTMLNodes(headingHTMLNodes) {
    var htmlNodes = headingHTMLNodes, nestedNode = (0, _contents2.nestHTMLNodes)(htmlNodes), childNestedNodes = nestedNode.getChildNestedNodes(), nestedHeadingNodes = childNestedNodes; ///
    return nestedHeadingNodes;
}
function contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context) {
    var contentsItemHTMLTransforms = nestedHeadingNodes.map(function(nestedHeadingNode) {
        var contentsItemHTMLTransform = _contents1.default.fromNestedHeadingNode(nestedHeadingNode, context);
        return contentsItemHTMLTransform;
    });
    return contentsItemHTMLTransforms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0xpc3RIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IG5lc3RIVE1MTm9kZXMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRzXCI7XG5pbXBvcnQgeyBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuY2xhc3MgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICByZXBsYWNlQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZ2V0Q29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkSFRNTE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlOyAgLy8vXG5cbiAgICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkSFRNTE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRvcG1vc3RIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgaGVhZGluZ0hUTUxOb2RlcyA9IGhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBoZWFkaW5nSFRNTE5vZGVzTGVuZ3RoID0gaGVhZGluZ0hUTUxOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ0hUTUxOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5lc3RlZEhlYWRpbmdOb2RlcyA9IG5lc3RlZEhlYWRpbmdOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzKGhlYWRpbmdIVE1MTm9kZXMpLFxuICAgICAgICAgICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMgPSBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTm9kZXMobmVzdGVkSGVhZGluZ05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdEhUTUxOb2RlID0gQ29udGVudHNMaXN0SFRNTE5vZGUuZnJvbUNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICAgIGh0bWxOb2RlID0gY29udGVudHNMaXN0SFRNTE5vZGU7ICAvLy9cblxuICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zID0gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTE5vZGUgPSBDb250ZW50c0xpc3RIVE1MTm9kZS5mcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgIGh0bWxOb2RlID0gY29udGVudHNMaXN0SFRNTE5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLCB7ICAvLy9cbiAgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07XG5cbmZ1bmN0aW9uIG5lc3RlZEhlYWRpbmdOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzKGhlYWRpbmdIVE1MTm9kZXMpIHtcbiAgY29uc3QgaHRtbE5vZGVzID0gaGVhZGluZ0hUTUxOb2RlcywgLy8vXG4gICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0SFRNTE5vZGVzKGh0bWxOb2RlcyksXG4gICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgbmVzdGVkSGVhZGluZ05vZGVzID0gY2hpbGROZXN0ZWROb2RlczsgIC8vL1xuXG4gIHJldHVybiBuZXN0ZWRIZWFkaW5nTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdOb2RlcyhuZXN0ZWRIZWFkaW5nTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMgPSBuZXN0ZWRIZWFkaW5nTm9kZXMubWFwKChuZXN0ZWRIZWFkaW5nTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLmZyb21OZXN0ZWRIZWFkaW5nTm9kZShuZXN0ZWRIZWFkaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImdldENvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJyZXBsYWNlZEhUTUxOb2RlIiwicmVwbGFjZSIsImZyb21Ub3Btb3N0SFRNTE5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJjb250ZXh0IiwiY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsIm5vZGUiLCJoZWFkaW5nSFRNTE5vZGVzIiwiaGVhZGluZ0hUTUxOb2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ0hUTUxOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5lc3RlZEhlYWRpbmdOb2RlcyIsIm5lc3RlZEhlYWRpbmdOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzIiwiY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMiLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTm9kZXMiLCJjb250ZW50c0xpc3RIVE1MTm9kZSIsIkNvbnRlbnRzTGlzdEhUTUxOb2RlIiwiZnJvbUNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zIiwiaHRtbE5vZGUiLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdOb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsIkNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJodG1sTm9kZXMiLCJuZXN0ZWROb2RlIiwibmVzdEhUTUxOb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibWFwIiwibmVzdGVkSGVhZGluZ05vZGUiLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIiwiZnJvbU5lc3RlZEhlYWRpbmdOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrREE7OztlQUFBOzs7MkRBaEQwQjsrREFDTztnRUFDSzt5QkFFUjtxQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQ0FBc0NDLDhCQUE4QjtnQkFDbEUsSUFBTUMsNEJBQTRCRCwrQkFBK0JFLDRCQUE0QixJQUN2RkMsbUJBQW1CRiwyQkFBNEIsR0FBRztnQkFFeEQsdUJBTEVILHNDQUtJTSxXQUFOLElBQUssYUFBU0Q7WUFDaEI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUVDLE9BQU87Z0JBQ2pELElBQUlDLDRCQUE0QjtnQkFFaEMsSUFBTUMsT0FBT0gsaUJBQ1BJLG1CQUFtQkMsSUFBQUEsK0JBQXdCLEVBQUNGLE9BQzVDRyx5QkFBeUJGLGlCQUFpQkcsTUFBTTtnQkFFdEQsSUFBSUQseUJBQXlCLEdBQUc7b0JBQzlCLElBQU1FLHFCQUFxQkMsdUNBQXVDTCxtQkFDNURNLDZCQUE2QkMsaURBQWlESCxvQkFBb0JQLFVBQ2xHVyx1QkFBdUJDLGlCQUFvQixDQUFDQyw4QkFBOEIsQ0FBQ0osNkJBQzNFSyxXQUFXSCxzQkFBdUIsR0FBRztvQkFFM0NWLDRCQUE0QmMsYUFBYSxDQUFDQyxZQUFZLENBckJ0RHpCLDJCQXFCa0Z1QjtnQkFDcEY7Z0JBRUEsT0FBT2I7WUFDVDs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJWLGtCQUFrQixFQUFFUCxPQUFPO2dCQUN2RCxJQUFNUyw2QkFBNkJDLGlEQUFpREgsb0JBQW9CUCxVQUNsR1csdUJBQXVCQyxpQkFBb0IsQ0FBQ0MsOEJBQThCLENBQUNKLDZCQUMzRUssV0FBV0gsc0JBQ1hWLDRCQUE0QmMsYUFBYSxDQUFDQyxZQUFZLENBL0IxRHpCLDJCQStCc0Z1QjtnQkFFeEYsT0FBT2I7WUFDVDs7O1dBbENJVjtFQUFrQ3dCLGFBQWE7QUFxQ3JERyxPQUFPQyxNQUFNLENBQUNDLGtCQUF5QixFQUFFO0lBQ3ZDN0IsMkJBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLFNBQVNpQix1Q0FBdUNMLGdCQUFnQjtJQUM5RCxJQUFNa0IsWUFBWWxCLGtCQUNabUIsYUFBYUMsSUFBQUEsd0JBQWEsRUFBQ0YsWUFDM0JHLG1CQUFtQkYsV0FBV0csbUJBQW1CLElBQ2pEbEIscUJBQXFCaUIsa0JBQW1CLEdBQUc7SUFFakQsT0FBT2pCO0FBQ1Q7QUFFQSxTQUFTRyxpREFBaURILGtCQUFrQixFQUFFUCxPQUFPO0lBQ25GLElBQU1TLDZCQUE2QkYsbUJBQW1CbUIsR0FBRyxDQUFDLFNBQUNDO1FBQ3pELElBQU1DLDRCQUE0QlIsa0JBQXlCLENBQUNTLHFCQUFxQixDQUFDRixtQkFBbUIzQjtRQUVyRyxPQUFPNEI7SUFDVDtJQUVBLE9BQU9uQjtBQUNUIn0=