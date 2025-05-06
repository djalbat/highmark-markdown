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
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
            // let contentsLinkHTMLTransform = null;
            //
            // const node = nestedHeadingMarkdownNode.getNode(),
            //       headingMarkdownNode = node;  ///
            //
            // if (headingMarkdownNode !== null) {
            //   const identifier = headingMarkdownNode.identifier(context),
            //         lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(),
            //         lineHTMLTransform = LineHTMLTransform.fromLineMarkdownNode(lineMarkdownNode, context),
            //         contentsLinkMarkdownNode = ContentsLinkMarkdownNode.fromLineHTMLTransformAndIdentifier(lineHTMLTransform, identifier),
            //         node = contentsLinkMarkdownNode,  ///
            //         tokens = lineHTMLTransform.getTokens();
            //
            //   contentsLinkHTMLTransform = HTMLTransform.fromNodeAndTokens(ContentsLinkHTMLTransform, node, tokens);
            // }
            //
            // return contentsLinkHTMLTransform;
            }
        }
    ]);
    return ContentsLinkHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5rL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBMaW5lSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGluZVwiO1xuaW1wb3J0IENvbnRlbnRzTGlua01hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmsvY29udGVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIC8vIGxldCBjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtID0gbnVsbDtcbiAgICAvL1xuICAgIC8vIGNvbnN0IG5vZGUgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldE5vZGUoKSxcbiAgICAvLyAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuICAgIC8vXG4gICAgLy8gaWYgKGhlYWRpbmdNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAvLyAgIGNvbnN0IGlkZW50aWZpZXIgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgLy8gICAgICAgICBsaW5lTWFya2Rvd25Ob2RlID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXRMaW5lTWFya2Rvd25Ob2RlKCksXG4gICAgLy8gICAgICAgICBsaW5lSFRNTFRyYW5zZm9ybSA9IExpbmVIVE1MVHJhbnNmb3JtLmZyb21MaW5lTWFya2Rvd25Ob2RlKGxpbmVNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgIC8vICAgICAgICAgY29udGVudHNMaW5rTWFya2Rvd25Ob2RlID0gQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlLmZyb21MaW5lSFRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIpLFxuICAgIC8vICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSwgIC8vL1xuICAgIC8vICAgICAgICAgdG9rZW5zID0gbGluZUhUTUxUcmFuc2Zvcm0uZ2V0VG9rZW5zKCk7XG4gICAgLy9cbiAgICAvLyAgIGNvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gcmV0dXJuIGNvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsIkhUTUxUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpLOzJEQUNJOytEQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVDLE9BQU87WUFDckUsd0NBQXdDO1lBQ3hDLEVBQUU7WUFDRixvREFBb0Q7WUFDcEQseUNBQXlDO1lBQ3pDLEVBQUU7WUFDRixzQ0FBc0M7WUFDdEMsZ0VBQWdFO1lBQ2hFLHdFQUF3RTtZQUN4RSxpR0FBaUc7WUFDakcsaUlBQWlJO1lBQ2pJLGdEQUFnRDtZQUNoRCxrREFBa0Q7WUFDbEQsRUFBRTtZQUNGLDBHQUEwRztZQUMxRyxJQUFJO1lBQ0osRUFBRTtZQUNGLG9DQUFvQztZQUN0Qzs7O1dBbkJtQkg7RUFBa0NJLGFBQWEifQ==