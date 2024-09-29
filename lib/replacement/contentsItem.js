"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _contentsLink = /*#__PURE__*/ _interop_require_default(require("../replacement/contentsLink"));
var _contentsItem = /*#__PURE__*/ _interop_require_default(require("../node/markdown/contentsItem"));
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
var ContentsItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(ContentsItemReplacement, Replacement);
    function ContentsItemReplacement() {
        _class_call_check(this, ContentsItemReplacement);
        return _call_super(this, ContentsItemReplacement, arguments);
    }
    _create_class(ContentsItemReplacement, [
        {
            key: "getContentsItemMarkdownNode",
            value: function getContentsItemMarkdownNode() {
                var node = this.getNode(), contentsItemMarkdownNode = node; ///
                return contentsItemMarkdownNode;
            }
        }
    ], [
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var replacements = [], contentsLinkReplacement = _contentsLink.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
                if (contentsLinkReplacement !== null) {
                    var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                    headingMarkdownNode.addAnchor(context);
                    var replacement = contentsLinkReplacement;
                    replacements.push(replacement);
                }
                var childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;
                if (nestedHeadingMarkdownNodesLength > 0) {
                    var ContentsListReplacement = ContentsItemReplacement.ContentsListReplacement, contentsListReplacement = ContentsListReplacement.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), replacement1 = contentsListReplacement; ///
                    replacements.push(replacement1);
                }
                var contentsItemMarkdownNode = _contentsItem.default.fromReplacements(replacements), node1 = contentsItemMarkdownNode, tokens = [];
                replacements.forEach(function(replacement) {
                    replacement.getTokens(tokens);
                });
                var contentsItemReplacement = _replacement.default.fromNodeAndTokens(ContentsItemReplacement, node1, tokens);
                return contentsItemReplacement;
            }
        }
    ]);
    return ContentsItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBDb250ZW50c0xpbmtSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnQvY29udGVudHNMaW5rXCI7XG5pbXBvcnQgQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0l0ZW1SZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgZ2V0Q29udGVudHNJdGVtTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudHMgPSBbXSxcbiAgICAgICAgICBjb250ZW50c0xpbmtSZXBsYWNlbWVudCA9IENvbnRlbnRzTGlua1JlcGxhY2VtZW50LmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzTGlua1JlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlLmFkZEFuY2hvcihjb250ZXh0KTtcblxuICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBjb250ZW50c0xpbmtSZXBsYWNlbWVudDtcblxuICAgICAgcmVwbGFjZW1lbnRzLnB1c2gocmVwbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGNoaWxkTmVzdGVkTm9kZXMsICAvLy9cbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgQ29udGVudHNMaXN0UmVwbGFjZW1lbnQgfSA9IENvbnRlbnRzSXRlbVJlcGxhY2VtZW50LFxuICAgICAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBDb250ZW50c0xpc3RSZXBsYWNlbWVudC5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBjb250ZW50c0xpc3RSZXBsYWNlbWVudDsgLy8vXG5cbiAgICAgIHJlcGxhY2VtZW50cy5wdXNoKHJlcGxhY2VtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUuZnJvbVJlcGxhY2VtZW50cyhyZXBsYWNlbWVudHMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgIHJlcGxhY2VtZW50cy5mb3JFYWNoKChyZXBsYWNlbWVudCkgPT4ge1xuICAgICAgcmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0l0ZW1SZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzSXRlbVJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNJdGVtUmVwbGFjZW1lbnQiLCJnZXRDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRleHQiLCJyZXBsYWNlbWVudHMiLCJjb250ZW50c0xpbmtSZXBsYWNlbWVudCIsIkNvbnRlbnRzTGlua1JlcGxhY2VtZW50IiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImFkZEFuY2hvciIsInJlcGxhY2VtZW50IiwicHVzaCIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIkNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiY29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tUmVwbGFjZW1lbnRzIiwidG9rZW5zIiwiZm9yRWFjaCIsImdldFRva2VucyIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50IiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSkc7bUVBQ1k7bUVBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLDJCQUEyQkYsTUFBTyxHQUFHO2dCQUUzQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVDLE9BQU87Z0JBQ3JFLElBQU1DLGVBQWUsRUFBRSxFQUNqQkMsMEJBQTBCQyxxQkFBdUIsQ0FBQ0wsNkJBQTZCLENBQUNDLDJCQUEyQkM7Z0JBRWpILElBQUlFLDRCQUE0QixNQUFNO29CQUNwQyxJQUFNUCxPQUFPSSwwQkFBMEJILE9BQU8sSUFDeENRLHNCQUFzQlQsTUFBTyxHQUFHO29CQUV0Q1Msb0JBQW9CQyxTQUFTLENBQUNMO29CQUU5QixJQUFNTSxjQUFjSjtvQkFFcEJELGFBQWFNLElBQUksQ0FBQ0Q7Z0JBQ3BCO2dCQUVBLElBQU1FLG1CQUFtQlQsMEJBQTBCVSxtQkFBbUIsSUFDaEVDLDZCQUE2QkYsa0JBQzdCRyxtQ0FBbUNELDJCQUEyQkUsTUFBTTtnQkFFMUUsSUFBSUQsbUNBQW1DLEdBQUc7b0JBQ3hDLElBQU0sQUFBRUUsMEJBNUJPcEIsd0JBNEJQb0IseUJBQ0ZDLDBCQUEwQkQsd0JBQXdCRSw4QkFBOEIsQ0FBQ0wsNEJBQTRCVixVQUM3R00sZUFBY1EseUJBQXlCLEdBQUc7b0JBRWhEYixhQUFhTSxJQUFJLENBQUNEO2dCQUNwQjtnQkFFQSxJQUFNVCwyQkFBMkJtQixxQkFBd0IsQ0FBQ0MsZ0JBQWdCLENBQUNoQixlQUNyRU4sUUFBT0UsMEJBQ1BxQixTQUFTLEVBQUU7Z0JBRWpCakIsYUFBYWtCLE9BQU8sQ0FBQyxTQUFDYjtvQkFDcEJBLFlBQVljLFNBQVMsQ0FBQ0Y7Z0JBQ3hCO2dCQUVBLElBQU1HLDBCQUEwQkMsb0JBQVcsQ0FBQ0MsaUJBQWlCLENBM0M1QzlCLHlCQTJDc0VFLE9BQU11QjtnQkFFN0YsT0FBT0c7WUFDVDs7O1dBOUNtQjVCO0VBQWdDNkIsb0JBQVcifQ==