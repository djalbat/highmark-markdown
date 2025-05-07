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
                var htmlNode = this.getHTMLNode(), contentsItemHTMLNode = htmlNode; ///
                return contentsItemHTMLNode;
            }
        }
    ], [
        {
            key: "fromNestedHeadingNode",
            value: function fromNestedHeadingNode(nestedHeadingNode, context) {
                var htmlTransforms = [], contentsLinkHTMLTransform = _contents1.default.fromNestedHeadingNode(nestedHeadingNode, context);
                if (contentsLinkHTMLTransform !== null) {
                    var htmlNode = nestedHeadingNode.getHTMLNode(), headingHTMLNode = htmlNode; ///
                    headingHTMLNode.anchor(context);
                    var htmlTransform = contentsLinkHTMLTransform; ///
                    htmlTransforms.push(htmlTransform);
                }
                var childNestedNodes = nestedHeadingNode.getChildNestedNodes(), nestedHeadingNodes = childNestedNodes, nestedHeadingNodesLength = nestedHeadingNodes.length;
                if (nestedHeadingNodesLength > 0) {
                    var ContentsListHTMLTransform = ContentsItemHTMLTransform.ContentsListHTMLTransform, contentsListHTMLTransform = ContentsListHTMLTransform.fromNestedHeadingNodes(nestedHeadingNodes, context), htmlTransform1 = contentsListHTMLTransform; ///
                    htmlTransforms.push(htmlTransform1);
                }
                var contentsItemHTMLNode = _contents.default.fromHTMLTransforms(htmlTransforms), htmlNode1 = contentsItemHTMLNode, contentsItemHTMLTransform = _html.default.fromHTMLNode(ContentsItemHTMLTransform, htmlNode1);
                return contentsItemHTMLTransform;
            }
        }
    ]);
    return ContentsItemHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pdGVtL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1IVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2l0ZW0vY29udGVudHNcIjtcbmltcG9ydCBDb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9saW5rL2NvbnRlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgZ2V0Q29udGVudHNJdGVtSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgY29udGVudHNJdGVtSFRNTE5vZGUgPSBodG1sTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTm9kZShuZXN0ZWRIZWFkaW5nTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGh0bWxUcmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgY29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0uZnJvbU5lc3RlZEhlYWRpbmdOb2RlKG5lc3RlZEhlYWRpbmdOb2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBodG1sTm9kZSA9IG5lc3RlZEhlYWRpbmdOb2RlLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgICBoZWFkaW5nSFRNTE5vZGUgPSBodG1sTm9kZTsgIC8vL1xuXG4gICAgICBoZWFkaW5nSFRNTE5vZGUuYW5jaG9yKGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBodG1sVHJhbnNmb3JtID0gY29udGVudHNMaW5rSFRNTFRyYW5zZm9ybTsgIC8vL1xuXG4gICAgICBodG1sVHJhbnNmb3Jtcy5wdXNoKGh0bWxUcmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ05vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIG5lc3RlZEhlYWRpbmdOb2Rlc0xlbmd0aCA9IG5lc3RlZEhlYWRpbmdOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobmVzdGVkSGVhZGluZ05vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIH0gPSBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLFxuICAgICAgICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbU5lc3RlZEhlYWRpbmdOb2RlcyhuZXN0ZWRIZWFkaW5nTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgaHRtbFRyYW5zZm9ybSA9IGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07IC8vL1xuXG4gICAgICBodG1sVHJhbnNmb3Jtcy5wdXNoKGh0bWxUcmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxOb2RlID0gQ29udGVudHNJdGVtSFRNTE5vZGUuZnJvbUhUTUxUcmFuc2Zvcm1zKGh0bWxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICBodG1sTm9kZSA9IGNvbnRlbnRzSXRlbUhUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSIsImdldENvbnRlbnRzSXRlbUhUTUxOb2RlIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsImNvbnRlbnRzSXRlbUhUTUxOb2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdOb2RlIiwibmVzdGVkSGVhZGluZ05vZGUiLCJjb250ZXh0IiwiaHRtbFRyYW5zZm9ybXMiLCJjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIiwiQ29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSIsImhlYWRpbmdIVE1MTm9kZSIsImFuY2hvciIsImh0bWxUcmFuc2Zvcm0iLCJwdXNoIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21OZXN0ZWRIZWFkaW5nTm9kZXMiLCJDb250ZW50c0l0ZW1IVE1MTm9kZSIsImZyb21IVE1MVHJhbnNmb3JtcyIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSzsrREFDTztnRUFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyx1QkFBdUJGLFVBQVcsR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNyRCxJQUFNQyxpQkFBaUIsRUFBRSxFQUNuQkMsNEJBQTRCQyxrQkFBeUIsQ0FBQ0wscUJBQXFCLENBQUNDLG1CQUFtQkM7Z0JBRXJHLElBQUlFLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNUCxXQUFXSSxrQkFBa0JILFdBQVcsSUFDeENRLGtCQUFrQlQsVUFBVyxHQUFHO29CQUV0Q1MsZ0JBQWdCQyxNQUFNLENBQUNMO29CQUV2QixJQUFNTSxnQkFBZ0JKLDJCQUE0QixHQUFHO29CQUVyREQsZUFBZU0sSUFBSSxDQUFDRDtnQkFDdEI7Z0JBRUEsSUFBTUUsbUJBQW1CVCxrQkFBa0JVLG1CQUFtQixJQUN4REMscUJBQXFCRixrQkFDckJHLDJCQUEyQkQsbUJBQW1CRSxNQUFNO2dCQUUxRCxJQUFJRCwyQkFBMkIsR0FBRztvQkFDaEMsSUFBTSxBQUFFRSw0QkE1Qk9wQiwwQkE0QlBvQiwyQkFDRkMsNEJBQTRCRCwwQkFBMEJFLHNCQUFzQixDQUFDTCxvQkFBb0JWLFVBQ2pHTSxpQkFBZ0JRLDJCQUEyQixHQUFHO29CQUVwRGIsZUFBZU0sSUFBSSxDQUFDRDtnQkFDdEI7Z0JBRUEsSUFBTVQsdUJBQXVCbUIsaUJBQW9CLENBQUNDLGtCQUFrQixDQUFDaEIsaUJBQy9ETixZQUFXRSxzQkFDWHFCLDRCQUE0QkMsYUFBYSxDQUFDQyxZQUFZLENBckMzQzNCLDJCQXFDdUVFO2dCQUV4RixPQUFPdUI7WUFDVDs7O1dBeENtQnpCO0VBQWtDMEIsYUFBYSJ9