"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkTransform;
    }
});
var _occamdom = require("occam-dom");
var _line = /*#__PURE__*/ _interop_require_default(require("../transform/line"));
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
var ContentsLinkTransform = /*#__PURE__*/ function(Transform) {
    _inherits(ContentsLinkTransform, Transform);
    function ContentsLinkTransform() {
        _class_call_check(this, ContentsLinkTransform);
        return _call_super(this, ContentsLinkTransform, arguments);
    }
    _create_class(ContentsLinkTransform, null, [
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsLinkTransform = null;
                var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                if (headingMarkdownNode !== null) {
                    var identifier = headingMarkdownNode.identifier(context), lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(), lineTransform = _line.default.fromLineMarkdownNode(lineMarkdownNode, context), contentsLinkMarkdownNode = _contents.default.fromLineTransformAndIdentifier(lineTransform, identifier), node1 = contentsLinkMarkdownNode, tokens = lineTransform.getTokens();
                    contentsLinkTransform = _occamdom.Transform.fromNodeAndTokens(ContentsLinkTransform, node1, tokens);
                }
                return contentsLinkTransform;
            }
        }
    ]);
    return ContentsLinkTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vX2xlZ2FjeS9jb250ZW50c0xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IExpbmVUcmFuc2Zvcm0gZnJvbSBcIi4uL3RyYW5zZm9ybS9saW5lXCI7XG5pbXBvcnQgQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2xpbmsvY29udGVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNMaW5rVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNMaW5rVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldE5vZGUoKSxcbiAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBsaW5lTWFya2Rvd25Ob2RlID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXRMaW5lTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICBsaW5lVHJhbnNmb3JtID0gTGluZVRyYW5zZm9ybS5mcm9tTGluZU1hcmtkb3duTm9kZShsaW5lTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlua01hcmtkb3duTm9kZS5mcm9tTGluZVRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZVRyYW5zZm9ybSwgaWRlbnRpZmllciksXG4gICAgICAgICAgICBub2RlID0gY29udGVudHNMaW5rTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBsaW5lVHJhbnNmb3JtLmdldFRva2VucygpO1xuXG4gICAgICBjb250ZW50c0xpbmtUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNMaW5rVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpbmtUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtUcmFuc2Zvcm0iLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiY29udGVudHNMaW5rVHJhbnNmb3JtIiwibm9kZSIsImdldE5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImxpbmVNYXJrZG93bk5vZGUiLCJnZXRMaW5lTWFya2Rvd25Ob2RlIiwibGluZVRyYW5zZm9ybSIsIkxpbmVUcmFuc2Zvcm0iLCJmcm9tTGluZU1hcmtkb3duTm9kZSIsImNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsImZyb21MaW5lVHJhbnNmb3JtQW5kSWRlbnRpZmllciIsInRva2VucyIsImdldFRva2VucyIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozt3QkFMSzsyREFFQTsrREFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFQyxPQUFPO2dCQUNyRSxJQUFJQyx3QkFBd0I7Z0JBRTVCLElBQU1DLE9BQU9ILDBCQUEwQkksT0FBTyxJQUN4Q0Msc0JBQXNCRixNQUFPLEdBQUc7Z0JBRXRDLElBQUlFLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNQyxhQUFhRCxvQkFBb0JDLFVBQVUsQ0FBQ0wsVUFDNUNNLG1CQUFtQkYsb0JBQW9CRyxtQkFBbUIsSUFDMURDLGdCQUFnQkMsYUFBYSxDQUFDQyxvQkFBb0IsQ0FBQ0osa0JBQWtCTixVQUNyRVcsMkJBQTJCQyxpQkFBd0IsQ0FBQ0MsOEJBQThCLENBQUNMLGVBQWVILGFBQ2xHSCxRQUFPUywwQkFDUEcsU0FBU04sY0FBY08sU0FBUztvQkFFdENkLHdCQUF3QmUsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBZnBDcEIsdUJBZTRESyxPQUFNWTtnQkFDbkY7Z0JBRUEsT0FBT2I7WUFDVDs7O1dBbkJtQko7RUFBOEJtQixtQkFBUyJ9