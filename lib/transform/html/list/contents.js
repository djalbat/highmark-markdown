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
            key: "fromNestedHeadingHTMLNodes",
            value: // replaceContentsDirectiveSubdivisionHTMLTransform(contentsDirectiveSubDivisionHTMLTransform, context) {
            //   const subDivisionHTMLNode = contentsDirectiveSubDivisionHTMLTransform.getSubDivisionHTMLNode(),
            //         replacedNode = subDivisionHTMLNode;  ///
            //
            //   super.replace(replacedNode, context)
            // }
            function fromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context) {
                var contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), node = contentsListHTMLNode, tokens = [];
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
                    var nestedHeadingHTMLNodes = nestedHeadingHTMLNodesFromHeadingHTMLNodes(headingHTMLNodes), contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), node1 = contentsListHTMLNode, tokens = [];
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
function nestedHeadingHTMLNodesFromHeadingHTMLNodes(headingHTMLNodes) {
    var htmlNodes = headingHTMLNodes, nestedNode = (0, _contents2.nestHTMLNodes)(htmlNodes), childNestedNodes = nestedNode.getChildNestedNodes(), nestedHeadingHTMLNodes = childNestedNodes; ///
    return nestedHeadingHTMLNodes;
}
function contentsItemHTMLTransformsFromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context) {
    var contentsItemHTMLTransforms = nestedHeadingHTMLNodes.map(function(nestedHeadingHTMLNode) {
        var contentsItemHTMLTransform = _contents1.default.fromNestedHeadingHTMLNode(nestedHeadingHTMLNode, context);
        return contentsItemHTMLTransform;
    });
    return contentsItemHTMLTransforms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0xpc3RIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IG5lc3RIVE1MTm9kZXMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRzXCI7XG5pbXBvcnQgeyBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuY2xhc3MgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICAvLyByZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvbkhUTUxUcmFuc2Zvcm0oY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBzdWJEaXZpc2lvbkhUTUxOb2RlID0gY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0uZ2V0U3ViRGl2aXNpb25IVE1MTm9kZSgpLFxuICAvLyAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uSFRNTE5vZGU7ICAvLy9cbiAgLy9cbiAgLy8gICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgY29udGV4dClcbiAgLy8gfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ0hUTUxOb2RlcyhuZXN0ZWRIZWFkaW5nSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMgPSBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nSFRNTE5vZGVzKG5lc3RlZEhlYWRpbmdIVE1MTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnRzTGlzdEhUTUxOb2RlID0gQ29udGVudHNMaXN0SFRNTE5vZGUuZnJvbUNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICBub2RlID0gY29udGVudHNMaXN0SFRNTE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSB0b3Btb3N0SFRNTE5vZGUsIC8vL1xuICAgICAgICAgIGhlYWRpbmdIVE1MTm9kZXMgPSBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaGVhZGluZ0hUTUxOb2Rlc0xlbmd0aCA9IGhlYWRpbmdIVE1MTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGhlYWRpbmdIVE1MTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXN0ZWRIZWFkaW5nSFRNTE5vZGVzID0gbmVzdGVkSGVhZGluZ0hUTUxOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzKGhlYWRpbmdIVE1MTm9kZXMpLFxuICAgICAgICAgICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMgPSBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nSFRNTE5vZGVzKG5lc3RlZEhlYWRpbmdIVE1MTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0SFRNTE5vZGUgPSBDb250ZW50c0xpc3RIVE1MTm9kZS5mcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlzdEhUTUxOb2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0sIHsgIC8vL1xuICBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcblxuZnVuY3Rpb24gbmVzdGVkSGVhZGluZ0hUTUxOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzKGhlYWRpbmdIVE1MTm9kZXMpIHtcbiAgY29uc3QgaHRtbE5vZGVzID0gaGVhZGluZ0hUTUxOb2RlcywgLy8vXG4gICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0SFRNTE5vZGVzKGh0bWxOb2RlcyksXG4gICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgbmVzdGVkSGVhZGluZ0hUTUxOb2RlcyA9IGNoaWxkTmVzdGVkTm9kZXM7ICAvLy9cblxuICByZXR1cm4gbmVzdGVkSGVhZGluZ0hUTUxOb2Rlcztcbn1cblxuZnVuY3Rpb24gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ0hUTUxOb2RlcyhuZXN0ZWRIZWFkaW5nSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zID0gbmVzdGVkSGVhZGluZ0hUTUxOb2Rlcy5tYXAoKG5lc3RlZEhlYWRpbmdIVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLmZyb21OZXN0ZWRIZWFkaW5nSFRNTE5vZGUobmVzdGVkSGVhZGluZ0hUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXM7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21OZXN0ZWRIZWFkaW5nSFRNTE5vZGVzIiwibmVzdGVkSGVhZGluZ0hUTUxOb2RlcyIsImNvbnRleHQiLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdIVE1MTm9kZXMiLCJjb250ZW50c0xpc3RIVE1MTm9kZSIsIkNvbnRlbnRzTGlzdEhUTUxOb2RlIiwiZnJvbUNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zIiwibm9kZSIsInRva2VucyIsImZvckVhY2giLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIiwiZ2V0VG9rZW5zIiwiY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyIsImZyb21Ub3Btb3N0SFRNTE5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJoZWFkaW5nSFRNTE5vZGVzIiwiaGVhZGluZ0hUTUxOb2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ0hUTUxOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5lc3RlZEhlYWRpbmdIVE1MTm9kZXNGcm9tSGVhZGluZ0hUTUxOb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsIkNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJodG1sTm9kZXMiLCJuZXN0ZWROb2RlIiwibmVzdEhUTUxOb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibWFwIiwibmVzdGVkSGVhZGluZ0hUTUxOb2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdIVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkRBOzs7ZUFBQTs7OzJEQTNEMEI7K0RBQ087Z0VBQ0s7eUJBRVI7cUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFRR0MsS0FBQUE7bUJBQVAsQUFQQSx5R0FBeUc7WUFDekcsb0dBQW9HO1lBQ3BHLG1EQUFtRDtZQUNuRCxFQUFFO1lBQ0YseUNBQXlDO1lBQ3pDLElBQUk7WUFFSixTQUFPQSwyQkFBMkJDLHNCQUFzQixFQUFFQyxPQUFPO2dCQUMvRCxJQUFNQyw2QkFBNkJDLHFEQUFxREgsd0JBQXdCQyxVQUMxR0csdUJBQXVCQyxpQkFBb0IsQ0FBQ0MsOEJBQThCLENBQUNKLDZCQUMzRUssT0FBT0gsc0JBQ1BJLFNBQVMsRUFBRTtnQkFFakJOLDJCQUEyQk8sT0FBTyxDQUFDLFNBQUNDO29CQUNsQ0EsMEJBQTBCQyxTQUFTLENBQUNIO2dCQUN0QztnQkFFQSxJQUFNSSw0QkFBNEJDLGFBQWEsQ0FBQ0MsaUJBQWlCLENBbEIvRGhCLDJCQWtCMkZTLE1BQU1DO2dCQUVuRyxPQUFPSTtZQUNUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUVmLE9BQU87Z0JBQ2pELElBQUlXLDRCQUE0QjtnQkFFaEMsSUFBTUwsT0FBT1MsaUJBQ1BDLG1CQUFtQkMsSUFBQUEsK0JBQXdCLEVBQUNYLE9BQzVDWSx5QkFBeUJGLGlCQUFpQkcsTUFBTTtnQkFFdEQsSUFBSUQseUJBQXlCLEdBQUc7b0JBQzlCLElBQU1uQix5QkFBeUJxQiwyQ0FBMkNKLG1CQUNwRWYsNkJBQTZCQyxxREFBcURILHdCQUF3QkMsVUFDMUdHLHVCQUF1QkMsaUJBQW9CLENBQUNDLDhCQUE4QixDQUFDSiw2QkFDM0VLLFFBQU9ILHNCQUNQSSxTQUFTLEVBQUU7b0JBRWpCTiwyQkFBMkJPLE9BQU8sQ0FBQyxTQUFDQzt3QkFDbENBLDBCQUEwQkMsU0FBUyxDQUFDSDtvQkFDdEM7b0JBRUFJLDRCQUE0QkMsYUFBYSxDQUFDQyxpQkFBaUIsQ0F6QzNEaEIsMkJBeUN1RlMsT0FBTUM7Z0JBQy9GO2dCQUVBLE9BQU9JO1lBQ1Q7OztXQTdDSWQ7RUFBa0NlLGFBQWE7QUFnRHJEUyxPQUFPQyxNQUFNLENBQUNDLGtCQUF5QixFQUFFO0lBQ3ZDMUIsMkJBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLFNBQVN1QiwyQ0FBMkNKLGdCQUFnQjtJQUNsRSxJQUFNUSxZQUFZUixrQkFDWlMsYUFBYUMsSUFBQUEsd0JBQWEsRUFBQ0YsWUFDM0JHLG1CQUFtQkYsV0FBV0csbUJBQW1CLElBQ2pEN0IseUJBQXlCNEIsa0JBQW1CLEdBQUc7SUFFckQsT0FBTzVCO0FBQ1Q7QUFFQSxTQUFTRyxxREFBcURILHNCQUFzQixFQUFFQyxPQUFPO0lBQzNGLElBQU1DLDZCQUE2QkYsdUJBQXVCOEIsR0FBRyxDQUFDLFNBQUNDO1FBQzdELElBQU1yQiw0QkFBNEJjLGtCQUF5QixDQUFDUSx5QkFBeUIsQ0FBQ0QsdUJBQXVCOUI7UUFFN0csT0FBT1M7SUFDVDtJQUVBLE9BQU9SO0FBQ1QifQ==