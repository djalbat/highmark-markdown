"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../../node/html/item/contents"));
var _contents1 = /*#__PURE__*/ _interop_require_default(require("../../../transform/html/link/contents"));
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
var ContentsItemHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(ContentsItemHTMLTransform, HTMLTransform);
    function ContentsItemHTMLTransform() {
        _class_call_check(this, ContentsItemHTMLTransform);
        return _call_super(this, ContentsItemHTMLTransform, arguments);
    }
    _create_class(ContentsItemHTMLTransform, [
        {
            key: "getContentsItemHTMLNode",
            value: function getContentsItemHTMLNode() {
                var node = this.getNode(), contentsItemHTMLNode = node; ///
                return contentsItemHTMLNode;
            }
        }
    ], [
        {
            key: "fromNestedHeadingNode",
            value: function fromNestedHeadingNode(nestedHeadingNode, context) {
                var transforms = [], contentsLinkHTMLTransform = _contents1.default.fromNestedHeadingNode(nestedHeadingNode, context);
                if (contentsLinkHTMLTransform !== null) {
                    var node = nestedHeadingNode.getNode(), headingHTMLNode = node; ///
                    headingHTMLNode.addAnchor(context);
                    var transform = contentsLinkHTMLTransform;
                    transforms.push(transform);
                }
                var childNestedNodes = nestedHeadingNode.getChildNestedNodes(), nestedHeadingNodes = childNestedNodes, nestedHeadingNodesLength = nestedHeadingNodes.length;
                if (nestedHeadingNodesLength > 0) {
                    var ContentsListHTMLTransform = ContentsItemHTMLTransform.ContentsListHTMLTransform, contentsListHTMLTransform = ContentsListHTMLTransform.fromNestedHeadingNodes(nestedHeadingNodes, context), transform1 = contentsListHTMLTransform; ///
                    transforms.push(transform1);
                }
                var contentsItemHTMLNode = _contents.default.fromHTMLTransforms(transforms), node1 = contentsItemHTMLNode, tokens = [];
                transforms.forEach(function(transform) {
                    transform.getTokens(tokens);
                });
                var contentsItemHTMLTransform = _html.default.fromNodeAndTokens(ContentsItemHTMLTransform, node1, tokens);
                return contentsItemHTMLTransform;
            }
        }
    ]);
    return ContentsItemHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pdGVtL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1IVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2l0ZW0vY29udGVudHNcIjtcbmltcG9ydCBDb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9saW5rL2NvbnRlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgZ2V0Q29udGVudHNJdGVtSFRNTE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRlbnRzSXRlbUhUTUxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTm9kZShuZXN0ZWRIZWFkaW5nTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRyYW5zZm9ybXMgPSBbXSxcbiAgICAgICAgICBjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtID0gQ29udGVudHNMaW5rSFRNTFRyYW5zZm9ybS5mcm9tTmVzdGVkSGVhZGluZ05vZGUobmVzdGVkSGVhZGluZ05vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXN0ZWRIZWFkaW5nTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgICBoZWFkaW5nSFRNTE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIGhlYWRpbmdIVE1MTm9kZS5hZGRBbmNob3IoY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGNvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm07XG5cbiAgICAgIHRyYW5zZm9ybXMucHVzaCh0cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ05vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIG5lc3RlZEhlYWRpbmdOb2Rlc0xlbmd0aCA9IG5lc3RlZEhlYWRpbmdOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobmVzdGVkSGVhZGluZ05vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIH0gPSBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLFxuICAgICAgICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbU5lc3RlZEhlYWRpbmdOb2RlcyhuZXN0ZWRIZWFkaW5nTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHJhbnNmb3JtID0gY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTsgLy8vXG5cbiAgICAgIHRyYW5zZm9ybXMucHVzaCh0cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxOb2RlID0gQ29udGVudHNJdGVtSFRNTE5vZGUuZnJvbUhUTUxUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0l0ZW1IVE1MTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgdHJhbnNmb3Jtcy5mb3JFYWNoKCh0cmFuc2Zvcm0pID0+IHtcbiAgICAgIHRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJnZXRDb250ZW50c0l0ZW1IVE1MTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiY29udGVudHNJdGVtSFRNTE5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ05vZGUiLCJuZXN0ZWRIZWFkaW5nTm9kZSIsImNvbnRleHQiLCJ0cmFuc2Zvcm1zIiwiY29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSIsIkNvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0iLCJoZWFkaW5nSFRNTE5vZGUiLCJhZGRBbmNob3IiLCJ0cmFuc2Zvcm0iLCJwdXNoIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21OZXN0ZWRIZWFkaW5nTm9kZXMiLCJDb250ZW50c0l0ZW1IVE1MTm9kZSIsImZyb21IVE1MVHJhbnNmb3JtcyIsInRva2VucyIsImZvckVhY2giLCJnZXRUb2tlbnMiLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSzsrREFDTztnRUFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyx1QkFBdUJGLE1BQU8sR0FBRztnQkFFdkMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNyRCxJQUFNQyxhQUFhLEVBQUUsRUFDZkMsNEJBQTRCQyxrQkFBeUIsQ0FBQ0wscUJBQXFCLENBQUNDLG1CQUFtQkM7Z0JBRXJHLElBQUlFLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNUCxPQUFPSSxrQkFBa0JILE9BQU8sSUFDaENRLGtCQUFrQlQsTUFBTyxHQUFHO29CQUVsQ1MsZ0JBQWdCQyxTQUFTLENBQUNMO29CQUUxQixJQUFNTSxZQUFZSjtvQkFFbEJELFdBQVdNLElBQUksQ0FBQ0Q7Z0JBQ2xCO2dCQUVBLElBQU1FLG1CQUFtQlQsa0JBQWtCVSxtQkFBbUIsSUFDeERDLHFCQUFxQkYsa0JBQ3JCRywyQkFBMkJELG1CQUFtQkUsTUFBTTtnQkFFMUQsSUFBSUQsMkJBQTJCLEdBQUc7b0JBQ2hDLElBQU0sQUFBRUUsNEJBNUJPcEIsMEJBNEJQb0IsMkJBQ0ZDLDRCQUE0QkQsMEJBQTBCRSxzQkFBc0IsQ0FBQ0wsb0JBQW9CVixVQUNqR00sYUFBWVEsMkJBQTJCLEdBQUc7b0JBRWhEYixXQUFXTSxJQUFJLENBQUNEO2dCQUNsQjtnQkFFQSxJQUFNVCx1QkFBdUJtQixpQkFBb0IsQ0FBQ0Msa0JBQWtCLENBQUNoQixhQUMvRE4sUUFBT0Usc0JBQ1BxQixTQUFTLEVBQUU7Z0JBRWpCakIsV0FBV2tCLE9BQU8sQ0FBQyxTQUFDYjtvQkFDbEJBLFVBQVVjLFNBQVMsQ0FBQ0Y7Z0JBQ3RCO2dCQUVBLElBQU1HLDRCQUE0QkMsYUFBYSxDQUFDQyxpQkFBaUIsQ0EzQ2hEOUIsMkJBMkM0RUUsT0FBTXVCO2dCQUVuRyxPQUFPRztZQUNUOzs7V0E5Q21CNUI7RUFBa0M2QixhQUFhIn0=