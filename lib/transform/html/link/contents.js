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
var _contents = /*#__PURE__*/ _interop_require_default(require("../node/markdown/link/contents"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5rL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBMaW5lSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGluZVwiO1xuaW1wb3J0IENvbnRlbnRzTGlua01hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9saW5rL2NvbnRlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICAvLyBsZXQgY29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSA9IG51bGw7XG4gICAgLy9cbiAgICAvLyBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgLy8gICAgICAgaGVhZGluZ01hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cbiAgICAvL1xuICAgIC8vIGlmIChoZWFkaW5nTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgLy8gICBjb25zdCBpZGVudGlmaWVyID0gaGVhZGluZ01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgIC8vICAgICAgICAgbGluZU1hcmtkb3duTm9kZSA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGluZU1hcmtkb3duTm9kZSgpLFxuICAgIC8vICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm0gPSBMaW5lSFRNTFRyYW5zZm9ybS5mcm9tTGluZU1hcmtkb3duTm9kZShsaW5lTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAvLyAgICAgICAgIGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlua01hcmtkb3duTm9kZS5mcm9tTGluZUhUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGxpbmVIVE1MVHJhbnNmb3JtLCBpZGVudGlmaWVyKSxcbiAgICAvLyAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUsICAvLy9cbiAgICAvLyAgICAgICAgIHRva2VucyA9IGxpbmVIVE1MVHJhbnNmb3JtLmdldFRva2VucygpO1xuICAgIC8vXG4gICAgLy8gICBjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhDb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHJldHVybiBjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRleHQiLCJIVE1MVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSzsyREFDSTsrREFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFQyxPQUFPO1lBQ3JFLHdDQUF3QztZQUN4QyxFQUFFO1lBQ0Ysb0RBQW9EO1lBQ3BELHlDQUF5QztZQUN6QyxFQUFFO1lBQ0Ysc0NBQXNDO1lBQ3RDLGdFQUFnRTtZQUNoRSx3RUFBd0U7WUFDeEUsaUdBQWlHO1lBQ2pHLGlJQUFpSTtZQUNqSSxnREFBZ0Q7WUFDaEQsa0RBQWtEO1lBQ2xELEVBQUU7WUFDRiwwR0FBMEc7WUFDMUcsSUFBSTtZQUNKLEVBQUU7WUFDRixvQ0FBb0M7WUFDdEM7OztXQW5CbUJIO0VBQWtDSSxhQUFhIn0=