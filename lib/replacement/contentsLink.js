"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _line = /*#__PURE__*/ _interop_require_default(require("../replacement/line"));
var _contentsLink = /*#__PURE__*/ _interop_require_default(require("../node/markdown/contentsLink"));
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
var ContentsLinkReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(ContentsLinkReplacement, Replacement);
    function ContentsLinkReplacement() {
        _class_call_check(this, ContentsLinkReplacement);
        return _call_super(this, ContentsLinkReplacement, arguments);
    }
    _create_class(ContentsLinkReplacement, null, [
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsLinkReplacement = null;
                var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                if (headingMarkdownNode !== null) {
                    var identifier = headingMarkdownNode.identifier(context), lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(), lineReplacement = _line.default.fromLineMarkdownNode(lineMarkdownNode, context), contentsLinkMarkdownNode = _contentsLink.default.fromLineReplacementAndIdentifier(lineReplacement, identifier), node1 = contentsLinkMarkdownNode, tokens = lineReplacement.getTokens();
                    contentsLinkReplacement = _replacement.default.fromNodeAndTokens(ContentsLinkReplacement, node1, tokens);
                }
                return contentsLinkReplacement;
            }
        }
    ]);
    return ContentsLinkReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBMaW5lUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50L2xpbmVcIjtcbmltcG9ydCBDb250ZW50c0xpbmtNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vY29udGVudHNMaW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua1JlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpbmtSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gaGVhZGluZ01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgbGluZU1hcmtkb3duTm9kZSA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGluZU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gTGluZVJlcGxhY2VtZW50LmZyb21MaW5lTWFya2Rvd25Ob2RlKGxpbmVNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaW5rTWFya2Rvd25Ob2RlID0gQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlLmZyb21MaW5lUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyKGxpbmVSZXBsYWNlbWVudCwgaWRlbnRpZmllciksXG4gICAgICAgICAgICBub2RlID0gY29udGVudHNMaW5rTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBsaW5lUmVwbGFjZW1lbnQuZ2V0VG9rZW5zKCk7XG5cbiAgICAgIGNvbnRlbnRzTGlua1JlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNMaW5rUmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlua1JlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaW5rUmVwbGFjZW1lbnQiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiY29udGVudHNMaW5rUmVwbGFjZW1lbnQiLCJub2RlIiwiZ2V0Tm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwibGluZU1hcmtkb3duTm9kZSIsImdldExpbmVNYXJrZG93bk5vZGUiLCJsaW5lUmVwbGFjZW1lbnQiLCJMaW5lUmVwbGFjZW1lbnQiLCJmcm9tTGluZU1hcmtkb3duTm9kZSIsImNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsImZyb21MaW5lUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSkc7MkRBQ0k7bUVBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVDLE9BQU87Z0JBQ3JFLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsT0FBT0gsMEJBQTBCSSxPQUFPLElBQ3hDQyxzQkFBc0JGLE1BQU8sR0FBRztnQkFFdEMsSUFBSUUsd0JBQXdCLE1BQU07b0JBQ2hDLElBQU1DLGFBQWFELG9CQUFvQkMsVUFBVSxDQUFDTCxVQUM1Q00sbUJBQW1CRixvQkFBb0JHLG1CQUFtQixJQUMxREMsa0JBQWtCQyxhQUFlLENBQUNDLG9CQUFvQixDQUFDSixrQkFBa0JOLFVBQ3pFVywyQkFBMkJDLHFCQUF3QixDQUFDQyxnQ0FBZ0MsQ0FBQ0wsaUJBQWlCSCxhQUN0R0gsUUFBT1MsMEJBQ1BHLFNBQVNOLGdCQUFnQk8sU0FBUztvQkFFeENkLDBCQUEwQmUsb0JBQVcsQ0FBQ0MsaUJBQWlCLENBZnhDcEIseUJBZWtFSyxPQUFNWTtnQkFDekY7Z0JBRUEsT0FBT2I7WUFDVDs7O1dBbkJtQko7RUFBZ0NtQixvQkFBVyJ9