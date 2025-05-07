"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _line = /*#__PURE__*/ _interop_require_default(require("../../../transform/html/line"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../../node/html/link/contents"));
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
var ContentsLinkHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(ContentsLinkHTMLTransform, HTMLTransform);
    function ContentsLinkHTMLTransform() {
        _class_call_check(this, ContentsLinkHTMLTransform);
        return _call_super(this, ContentsLinkHTMLTransform, arguments);
    }
    _create_class(ContentsLinkHTMLTransform, null, [
        {
            key: "fromNestedHeadingNode",
            value: function fromNestedHeadingNode(nestedHeadingNode, context) {
                var contentsLinkHTMLTransform = null;
                var htmlNode = nestedHeadingNode.getHTMLNode(), headingHTMLNode = htmlNode; ///
                if (headingHTMLNode !== null) {
                    var identifier = headingHTMLNode.identifier(context), lineHTMLNode = headingHTMLNode.getLineHTMLNode(), lineHTMLTransform = _line.default.fromLineHTMLNode(lineHTMLNode, context), contentsLinkHTMLNode = _contents.default.fromLineHTMLTransformAndIdentifier(lineHTMLTransform, identifier), htmlNode1 = contentsLinkHTMLNode; ///
                    contentsLinkHTMLTransform = _html.default.fromHTMLNode(ContentsLinkHTMLTransform, htmlNode1);
                }
                return contentsLinkHTMLTransform;
            }
        }
    ]);
    return ContentsLinkHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5rL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBMaW5lSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGluZVwiO1xuaW1wb3J0IENvbnRlbnRzTGlua0hUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvbGluay9jb250ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ05vZGUobmVzdGVkSGVhZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBodG1sTm9kZSA9IG5lc3RlZEhlYWRpbmdOb2RlLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgaGVhZGluZ0hUTUxOb2RlID0gaHRtbE5vZGU7ICAvLy9cblxuICAgIGlmIChoZWFkaW5nSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBoZWFkaW5nSFRNTE5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICAgIGxpbmVIVE1MTm9kZSA9IGhlYWRpbmdIVE1MTm9kZS5nZXRMaW5lSFRNTE5vZGUoKSxcbiAgICAgICAgICAgIGxpbmVIVE1MVHJhbnNmb3JtID0gTGluZUhUTUxUcmFuc2Zvcm0uZnJvbUxpbmVIVE1MTm9kZShsaW5lSFRNTE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaW5rSFRNTE5vZGUgPSBDb250ZW50c0xpbmtIVE1MTm9kZS5mcm9tTGluZUhUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGxpbmVIVE1MVHJhbnNmb3JtLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGh0bWxOb2RlID0gY29udGVudHNMaW5rSFRNTE5vZGU7ICAvLy9cblxuICAgICAgY29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKENvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaW5rSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0iLCJmcm9tTmVzdGVkSGVhZGluZ05vZGUiLCJuZXN0ZWRIZWFkaW5nTm9kZSIsImNvbnRleHQiLCJjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsImhlYWRpbmdIVE1MTm9kZSIsImlkZW50aWZpZXIiLCJsaW5lSFRNTE5vZGUiLCJnZXRMaW5lSFRNTE5vZGUiLCJsaW5lSFRNTFRyYW5zZm9ybSIsIkxpbmVIVE1MVHJhbnNmb3JtIiwiZnJvbUxpbmVIVE1MTm9kZSIsImNvbnRlbnRzTGlua0hUTUxOb2RlIiwiQ29udGVudHNMaW5rSFRNTE5vZGUiLCJmcm9tTGluZUhUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSks7MkRBQ0k7K0RBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRUMsT0FBTztnQkFDckQsSUFBSUMsNEJBQTRCO2dCQUVoQyxJQUFNQyxXQUFXSCxrQkFBa0JJLFdBQVcsSUFDeENDLGtCQUFrQkYsVUFBVyxHQUFHO2dCQUV0QyxJQUFJRSxvQkFBb0IsTUFBTTtvQkFDNUIsSUFBTUMsYUFBYUQsZ0JBQWdCQyxVQUFVLENBQUNMLFVBQ3hDTSxlQUFlRixnQkFBZ0JHLGVBQWUsSUFDOUNDLG9CQUFvQkMsYUFBaUIsQ0FBQ0MsZ0JBQWdCLENBQUNKLGNBQWNOLFVBQ3JFVyx1QkFBdUJDLGlCQUFvQixDQUFDQyxrQ0FBa0MsQ0FBQ0wsbUJBQW1CSCxhQUNsR0gsWUFBV1Msc0JBQXVCLEdBQUc7b0JBRTNDViw0QkFBNEJhLGFBQWEsQ0FBQ0MsWUFBWSxDQWR2Q2xCLDJCQWNtRUs7Z0JBQ3BGO2dCQUVBLE9BQU9EO1lBQ1Q7OztXQWxCbUJKO0VBQWtDaUIsYUFBYSJ9