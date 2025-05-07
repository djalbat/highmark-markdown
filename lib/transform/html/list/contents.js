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
var ContentsListHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(ContentsListHTMLTransform, HTMLTransform);
    function ContentsListHTMLTransform() {
        _class_call_check(this, ContentsListHTMLTransform);
        return _call_super(this, ContentsListHTMLTransform, arguments);
    }
    _create_class(ContentsListHTMLTransform, null, [
        {
            key: "fromNestedHeadingNodes",
            value: // replaceContentsDirectiveSubdivisionHTMLTransform(contentsDirectiveSubDivisionHTMLTransform, context) {
            //   const subDivisionHTMLNode = contentsDirectiveSubDivisionHTMLTransform.getSubDivisionHTMLNode(),
            //         replacedNode = subDivisionHTMLNode;  ///
            //
            //   super.replace(replacedNode, context)
            // }
            function fromNestedHeadingNodes(nestedHeadingNodes, context) {
                var contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), node = contentsListHTMLNode, tokens = [];
                contentsItemHTMLTransforms.forEach(function(contentsItemHTMLTransform) {
                    contentsItemHTMLTransform.getTokens(tokens);
                });
                var contentsListHTMLTransform = _html.default.fromNodeAndTokens(ContentsListHTMLTransform, node, tokens);
                return contentsListHTMLTransform;
            }
        },
        {
            key: "fromTopmostHTMLNode",
            value: function fromTopmostHTMLNode(topmostHTMLNode, context) {
                var contentsListHTMLTransform = null;
                var node = topmostHTMLNode, headingHTMLNodes = (0, _html1.headingHTMLNodesFromNode)(node), headingHTMLNodesLength = headingHTMLNodes.length;
                if (headingHTMLNodesLength > 0) {
                    var nestedHeadingNodes = nestedHeadingNodesFromHeadingHTMLNodes(headingHTMLNodes), contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), node1 = contentsListHTMLNode, tokens = [];
                    contentsItemHTMLTransforms.forEach(function(contentsItemHTMLTransform) {
                        contentsItemHTMLTransform.getTokens(tokens);
                    });
                    contentsListHTMLTransform = _html.default.fromNodeAndTokens(ContentsListHTMLTransform, node1, tokens);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0xpc3RIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IG5lc3RIVE1MTm9kZXMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRzXCI7XG5pbXBvcnQgeyBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuY2xhc3MgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICAvLyByZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvbkhUTUxUcmFuc2Zvcm0oY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBzdWJEaXZpc2lvbkhUTUxOb2RlID0gY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0uZ2V0U3ViRGl2aXNpb25IVE1MTm9kZSgpLFxuICAvLyAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uSFRNTE5vZGU7ICAvLy9cbiAgLy9cbiAgLy8gICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgY29udGV4dClcbiAgLy8gfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zID0gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTE5vZGUgPSBDb250ZW50c0xpc3RIVE1MTm9kZS5mcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpc3RIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLmdldFRva2Vucyh0b2tlbnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRvcG1vc3RIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgaGVhZGluZ0hUTUxOb2RlcyA9IGhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBoZWFkaW5nSFRNTE5vZGVzTGVuZ3RoID0gaGVhZGluZ0hUTUxOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ0hUTUxOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5lc3RlZEhlYWRpbmdOb2RlcyA9IG5lc3RlZEhlYWRpbmdOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzKGhlYWRpbmdIVE1MTm9kZXMpLFxuICAgICAgICAgICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMgPSBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTm9kZXMobmVzdGVkSGVhZGluZ05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdEhUTUxOb2RlID0gQ29udGVudHNMaXN0SFRNTE5vZGUuZnJvbUNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpc3RIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgICBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLCB7ICAvLy9cbiAgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07XG5cbmZ1bmN0aW9uIG5lc3RlZEhlYWRpbmdOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzKGhlYWRpbmdIVE1MTm9kZXMpIHtcbiAgY29uc3QgaHRtbE5vZGVzID0gaGVhZGluZ0hUTUxOb2RlcywgLy8vXG4gICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0SFRNTE5vZGVzKGh0bWxOb2RlcyksXG4gICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgbmVzdGVkSGVhZGluZ05vZGVzID0gY2hpbGROZXN0ZWROb2RlczsgIC8vL1xuXG4gIHJldHVybiBuZXN0ZWRIZWFkaW5nTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdOb2RlcyhuZXN0ZWRIZWFkaW5nTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMgPSBuZXN0ZWRIZWFkaW5nTm9kZXMubWFwKChuZXN0ZWRIZWFkaW5nTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLmZyb21OZXN0ZWRIZWFkaW5nTm9kZShuZXN0ZWRIZWFkaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tTmVzdGVkSGVhZGluZ05vZGVzIiwibmVzdGVkSGVhZGluZ05vZGVzIiwiY29udGV4dCIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zIiwiY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ05vZGVzIiwiY29udGVudHNMaXN0SFRNTE5vZGUiLCJDb250ZW50c0xpc3RIVE1MTm9kZSIsImZyb21Db250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyIsIm5vZGUiLCJ0b2tlbnMiLCJmb3JFYWNoIiwiY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSIsImdldFRva2VucyIsImNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJmcm9tVG9wbW9zdEhUTUxOb2RlIiwidG9wbW9zdEhUTUxOb2RlIiwiaGVhZGluZ0hUTUxOb2RlcyIsImhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdIVE1MTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuZXN0ZWRIZWFkaW5nTm9kZXNGcm9tSGVhZGluZ0hUTUxOb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsIkNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJodG1sTm9kZXMiLCJuZXN0ZWROb2RlIiwibmVzdEhUTUxOb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibWFwIiwibmVzdGVkSGVhZGluZ05vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ05vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZEQTs7O2VBQUE7OzsyREEzRDBCOytEQUNPO2dFQUNLO3lCQUVSO3FCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBUUdDLEtBQUFBO21CQUFQLEFBUEEseUdBQXlHO1lBQ3pHLG9HQUFvRztZQUNwRyxtREFBbUQ7WUFDbkQsRUFBRTtZQUNGLHlDQUF5QztZQUN6QyxJQUFJO1lBRUosU0FBT0EsdUJBQXVCQyxrQkFBa0IsRUFBRUMsT0FBTztnQkFDdkQsSUFBTUMsNkJBQTZCQyxpREFBaURILG9CQUFvQkMsVUFDbEdHLHVCQUF1QkMsaUJBQW9CLENBQUNDLDhCQUE4QixDQUFDSiw2QkFDM0VLLE9BQU9ILHNCQUNQSSxTQUFTLEVBQUU7Z0JBRWpCTiwyQkFBMkJPLE9BQU8sQ0FBQyxTQUFDQztvQkFDbENBLDBCQUEwQkMsU0FBUyxDQUFDSDtnQkFDdEM7Z0JBRUEsSUFBTUksNEJBQTRCQyxhQUFhLENBQUNDLGlCQUFpQixDQWxCL0RoQiwyQkFrQjJGUyxNQUFNQztnQkFFbkcsT0FBT0k7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsZUFBZSxFQUFFZixPQUFPO2dCQUNqRCxJQUFJVyw0QkFBNEI7Z0JBRWhDLElBQU1MLE9BQU9TLGlCQUNQQyxtQkFBbUJDLElBQUFBLCtCQUF3QixFQUFDWCxPQUM1Q1kseUJBQXlCRixpQkFBaUJHLE1BQU07Z0JBRXRELElBQUlELHlCQUF5QixHQUFHO29CQUM5QixJQUFNbkIscUJBQXFCcUIsdUNBQXVDSixtQkFDNURmLDZCQUE2QkMsaURBQWlESCxvQkFBb0JDLFVBQ2xHRyx1QkFBdUJDLGlCQUFvQixDQUFDQyw4QkFBOEIsQ0FBQ0osNkJBQzNFSyxRQUFPSCxzQkFDUEksU0FBUyxFQUFFO29CQUVqQk4sMkJBQTJCTyxPQUFPLENBQUMsU0FBQ0M7d0JBQ2xDQSwwQkFBMEJDLFNBQVMsQ0FBQ0g7b0JBQ3RDO29CQUVBSSw0QkFBNEJDLGFBQWEsQ0FBQ0MsaUJBQWlCLENBekMzRGhCLDJCQXlDdUZTLE9BQU1DO2dCQUMvRjtnQkFFQSxPQUFPSTtZQUNUOzs7V0E3Q0lkO0VBQWtDZSxhQUFhO0FBZ0RyRFMsT0FBT0MsTUFBTSxDQUFDQyxrQkFBeUIsRUFBRTtJQUN2QzFCLDJCQUFBQTtBQUNGO0lBRUEsV0FBZUE7QUFFZixTQUFTdUIsdUNBQXVDSixnQkFBZ0I7SUFDOUQsSUFBTVEsWUFBWVIsa0JBQ1pTLGFBQWFDLElBQUFBLHdCQUFhLEVBQUNGLFlBQzNCRyxtQkFBbUJGLFdBQVdHLG1CQUFtQixJQUNqRDdCLHFCQUFxQjRCLGtCQUFtQixHQUFHO0lBRWpELE9BQU81QjtBQUNUO0FBRUEsU0FBU0csaURBQWlESCxrQkFBa0IsRUFBRUMsT0FBTztJQUNuRixJQUFNQyw2QkFBNkJGLG1CQUFtQjhCLEdBQUcsQ0FBQyxTQUFDQztRQUN6RCxJQUFNckIsNEJBQTRCYyxrQkFBeUIsQ0FBQ1EscUJBQXFCLENBQUNELG1CQUFtQjlCO1FBRXJHLE9BQU9TO0lBQ1Q7SUFFQSxPQUFPUjtBQUNUIn0=