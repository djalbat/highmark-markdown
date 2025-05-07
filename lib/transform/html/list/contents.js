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
                var contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), htmlNode = contentsListHTMLNode; ///
                contentsItemHTMLTransforms.forEach(function(contentsItemHTMLTransform) {
                    contentsItemHTMLTransform.getTokens(tokens);
                });
                var contentsListHTMLTransform = _html.default.fromHTMLNode(ContentsListHTMLTransform, htmlNode);
                return contentsListHTMLTransform;
            }
        },
        {
            key: "fromTopmostHTMLNode",
            value: function fromTopmostHTMLNode(topmostHTMLNode, context) {
                var contentsListHTMLTransform = null;
                var node = topmostHTMLNode, headingHTMLNodes = (0, _html1.headingHTMLNodesFromNode)(node), headingHTMLNodesLength = headingHTMLNodes.length;
                if (headingHTMLNodesLength > 0) {
                    var nestedHeadingNodes = nestedHeadingNodesFromHeadingHTMLNodes(headingHTMLNodes), contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), htmlNode = contentsListHTMLNode; ///
                    contentsItemHTMLTransforms.forEach(function(contentsItemHTMLTransform) {
                        contentsItemHTMLTransform.getTokens(tokens);
                    });
                    contentsListHTMLTransform = _html.default.fromHTMLNode(ContentsListHTMLTransform, htmlNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0xpc3RIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IG5lc3RIVE1MTm9kZXMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRzXCI7XG5pbXBvcnQgeyBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuY2xhc3MgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICAvLyByZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvbkhUTUxUcmFuc2Zvcm0oY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBzdWJEaXZpc2lvbkhUTUxOb2RlID0gY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0uZ2V0U3ViRGl2aXNpb25IVE1MTm9kZSgpLFxuICAvLyAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uSFRNTE5vZGU7ICAvLy9cbiAgLy9cbiAgLy8gICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgY29udGV4dClcbiAgLy8gfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zID0gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTE5vZGUgPSBDb250ZW50c0xpc3RIVE1MTm9kZS5mcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgIGh0bWxOb2RlID0gY29udGVudHNMaXN0SFRNTE5vZGU7ICAvLy9cblxuICAgIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gdG9wbW9zdEhUTUxOb2RlLCAvLy9cbiAgICAgICAgICBoZWFkaW5nSFRNTE5vZGVzID0gaGVhZGluZ0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGhlYWRpbmdIVE1MTm9kZXNMZW5ndGggPSBoZWFkaW5nSFRNTE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChoZWFkaW5nSFRNTE5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmVzdGVkSGVhZGluZ05vZGVzID0gbmVzdGVkSGVhZGluZ05vZGVzRnJvbUhlYWRpbmdIVE1MTm9kZXMoaGVhZGluZ0hUTUxOb2RlcyksXG4gICAgICAgICAgICBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyA9IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdOb2RlcyhuZXN0ZWRIZWFkaW5nTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0SFRNTE5vZGUgPSBDb250ZW50c0xpc3RIVE1MTm9kZS5mcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgICAgaHRtbE5vZGUgPSBjb250ZW50c0xpc3RIVE1MTm9kZTsgIC8vL1xuXG4gICAgICBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0sIHsgIC8vL1xuICBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcblxuZnVuY3Rpb24gbmVzdGVkSGVhZGluZ05vZGVzRnJvbUhlYWRpbmdIVE1MTm9kZXMoaGVhZGluZ0hUTUxOb2Rlcykge1xuICBjb25zdCBodG1sTm9kZXMgPSBoZWFkaW5nSFRNTE5vZGVzLCAvLy9cbiAgICAgICAgbmVzdGVkTm9kZSA9IG5lc3RIVE1MTm9kZXMoaHRtbE5vZGVzKSxcbiAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICBuZXN0ZWRIZWFkaW5nTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzOyAgLy8vXG5cbiAgcmV0dXJuIG5lc3RlZEhlYWRpbmdOb2Rlcztcbn1cblxuZnVuY3Rpb24gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyA9IG5lc3RlZEhlYWRpbmdOb2Rlcy5tYXAoKG5lc3RlZEhlYWRpbmdOb2RlKSA9PiB7XG4gICAgY29uc3QgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0uZnJvbU5lc3RlZEhlYWRpbmdOb2RlKG5lc3RlZEhlYWRpbmdOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXM7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21OZXN0ZWRIZWFkaW5nTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTm9kZXMiLCJjb250ZXh0IiwiY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMiLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTm9kZXMiLCJjb250ZW50c0xpc3RIVE1MTm9kZSIsIkNvbnRlbnRzTGlzdEhUTUxOb2RlIiwiZnJvbUNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zIiwiaHRtbE5vZGUiLCJmb3JFYWNoIiwiY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSIsImdldFRva2VucyIsInRva2VucyIsImNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIiwiZnJvbVRvcG1vc3RIVE1MTm9kZSIsInRvcG1vc3RIVE1MTm9kZSIsIm5vZGUiLCJoZWFkaW5nSFRNTE5vZGVzIiwiaGVhZGluZ0hUTUxOb2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ0hUTUxOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5lc3RlZEhlYWRpbmdOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSIsImh0bWxOb2RlcyIsIm5lc3RlZE5vZGUiLCJuZXN0SFRNTE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJtYXAiLCJuZXN0ZWRIZWFkaW5nTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkRBOzs7ZUFBQTs7OzJEQXpEMEI7K0RBQ087Z0VBQ0s7eUJBRVI7cUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFRR0MsS0FBQUE7bUJBQVAsQUFQQSx5R0FBeUc7WUFDekcsb0dBQW9HO1lBQ3BHLG1EQUFtRDtZQUNuRCxFQUFFO1lBQ0YseUNBQXlDO1lBQ3pDLElBQUk7WUFFSixTQUFPQSx1QkFBdUJDLGtCQUFrQixFQUFFQyxPQUFPO2dCQUN2RCxJQUFNQyw2QkFBNkJDLGlEQUFpREgsb0JBQW9CQyxVQUNsR0csdUJBQXVCQyxpQkFBb0IsQ0FBQ0MsOEJBQThCLENBQUNKLDZCQUMzRUssV0FBV0gsc0JBQXVCLEdBQUc7Z0JBRTNDRiwyQkFBMkJNLE9BQU8sQ0FBQyxTQUFDQztvQkFDbENBLDBCQUEwQkMsU0FBUyxDQUFDQztnQkFDdEM7Z0JBRUEsSUFBTUMsNEJBQTRCQyxhQUFhLENBQUNDLFlBQVksQ0FqQjFEaEIsMkJBaUJzRlM7Z0JBRXhGLE9BQU9LO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGVBQWUsRUFBRWYsT0FBTztnQkFDakQsSUFBSVcsNEJBQTRCO2dCQUVoQyxJQUFNSyxPQUFPRCxpQkFDUEUsbUJBQW1CQyxJQUFBQSwrQkFBd0IsRUFBQ0YsT0FDNUNHLHlCQUF5QkYsaUJBQWlCRyxNQUFNO2dCQUV0RCxJQUFJRCx5QkFBeUIsR0FBRztvQkFDOUIsSUFBTXBCLHFCQUFxQnNCLHVDQUF1Q0osbUJBQzVEaEIsNkJBQTZCQyxpREFBaURILG9CQUFvQkMsVUFDbEdHLHVCQUF1QkMsaUJBQW9CLENBQUNDLDhCQUE4QixDQUFDSiw2QkFDM0VLLFdBQVdILHNCQUF1QixHQUFHO29CQUUzQ0YsMkJBQTJCTSxPQUFPLENBQUMsU0FBQ0M7d0JBQ2xDQSwwQkFBMEJDLFNBQVMsQ0FBQ0M7b0JBQ3RDO29CQUVBQyw0QkFBNEJDLGFBQWEsQ0FBQ0MsWUFBWSxDQXZDdERoQiwyQkF1Q2tGUztnQkFDcEY7Z0JBRUEsT0FBT0s7WUFDVDs7O1dBM0NJZDtFQUFrQ2UsYUFBYTtBQThDckRVLE9BQU9DLE1BQU0sQ0FBQ0Msa0JBQXlCLEVBQUU7SUFDdkMzQiwyQkFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRWYsU0FBU3dCLHVDQUF1Q0osZ0JBQWdCO0lBQzlELElBQU1RLFlBQVlSLGtCQUNaUyxhQUFhQyxJQUFBQSx3QkFBYSxFQUFDRixZQUMzQkcsbUJBQW1CRixXQUFXRyxtQkFBbUIsSUFDakQ5QixxQkFBcUI2QixrQkFBbUIsR0FBRztJQUVqRCxPQUFPN0I7QUFDVDtBQUVBLFNBQVNHLGlEQUFpREgsa0JBQWtCLEVBQUVDLE9BQU87SUFDbkYsSUFBTUMsNkJBQTZCRixtQkFBbUIrQixHQUFHLENBQUMsU0FBQ0M7UUFDekQsSUFBTXZCLDRCQUE0QmdCLGtCQUF5QixDQUFDUSxxQkFBcUIsQ0FBQ0QsbUJBQW1CL0I7UUFFckcsT0FBT1E7SUFDVDtJQUVBLE9BQU9QO0FBQ1QifQ==