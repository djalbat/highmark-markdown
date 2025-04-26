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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udGVudHNMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBMaW5lVHJhbnNmb3JtIGZyb20gXCIuLi90cmFuc2Zvcm0vbGluZVwiO1xuaW1wb3J0IENvbnRlbnRzTGlua01hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9saW5rL2NvbnRlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua1RyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlua1RyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gaGVhZGluZ01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgbGluZU1hcmtkb3duTm9kZSA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGluZU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgbGluZVRyYW5zZm9ybSA9IExpbmVUcmFuc2Zvcm0uZnJvbUxpbmVNYXJrZG93bk5vZGUobGluZU1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpbmtNYXJrZG93bk5vZGUuZnJvbUxpbmVUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGxpbmVUcmFuc2Zvcm0sIGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gbGluZVRyYW5zZm9ybS5nZXRUb2tlbnMoKTtcblxuICAgICAgY29udGVudHNMaW5rVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlua1RyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaW5rVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaW5rVHJhbnNmb3JtIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImNvbnRlbnRzTGlua1RyYW5zZm9ybSIsIm5vZGUiLCJnZXROb2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJsaW5lTWFya2Rvd25Ob2RlIiwiZ2V0TGluZU1hcmtkb3duTm9kZSIsImxpbmVUcmFuc2Zvcm0iLCJMaW5lVHJhbnNmb3JtIiwiZnJvbUxpbmVNYXJrZG93bk5vZGUiLCJjb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJmcm9tTGluZVRyYW5zZm9ybUFuZElkZW50aWZpZXIiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7d0JBTEs7MkRBRUE7K0RBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRUMsT0FBTztnQkFDckUsSUFBSUMsd0JBQXdCO2dCQUU1QixJQUFNQyxPQUFPSCwwQkFBMEJJLE9BQU8sSUFDeENDLHNCQUFzQkYsTUFBTyxHQUFHO2dCQUV0QyxJQUFJRSx3QkFBd0IsTUFBTTtvQkFDaEMsSUFBTUMsYUFBYUQsb0JBQW9CQyxVQUFVLENBQUNMLFVBQzVDTSxtQkFBbUJGLG9CQUFvQkcsbUJBQW1CLElBQzFEQyxnQkFBZ0JDLGFBQWEsQ0FBQ0Msb0JBQW9CLENBQUNKLGtCQUFrQk4sVUFDckVXLDJCQUEyQkMsaUJBQXdCLENBQUNDLDhCQUE4QixDQUFDTCxlQUFlSCxhQUNsR0gsUUFBT1MsMEJBQ1BHLFNBQVNOLGNBQWNPLFNBQVM7b0JBRXRDZCx3QkFBd0JlLG1CQUFTLENBQUNDLGlCQUFpQixDQWZwQ3BCLHVCQWU0REssT0FBTVk7Z0JBQ25GO2dCQUVBLE9BQU9iO1lBQ1Q7OztXQW5CbUJKO0VBQThCbUIsbUJBQVMifQ==