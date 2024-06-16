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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var ContentsItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(ContentsItemReplacement, Replacement);
    var _super = _create_super(ContentsItemReplacement);
    function ContentsItemReplacement() {
        _class_call_check(this, ContentsItemReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsItemReplacement, null, [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                return _replacement.default.fromNodeAndTokens(ContentsItemReplacement, node, tokens);
            }
        },
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
                var contentsItemReplacement = ContentsItemReplacement.fromNodeAndTokens(node1, tokens);
                return contentsItemReplacement;
            }
        }
    ]);
    return ContentsItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBDb250ZW50c0xpbmtSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnQvY29udGVudHNMaW5rXCI7XG5pbXBvcnQgQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0l0ZW1SZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucykgeyByZXR1cm4gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNJdGVtUmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7IH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50cyA9IFtdLFxuICAgICAgICAgIGNvbnRlbnRzTGlua1JlcGxhY2VtZW50ID0gQ29udGVudHNMaW5rUmVwbGFjZW1lbnQuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNMaW5rUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUuYWRkQW5jaG9yKGNvbnRleHQpO1xuXG4gICAgICBjb25zdCByZXBsYWNlbWVudCA9IGNvbnRlbnRzTGlua1JlcGxhY2VtZW50O1xuXG4gICAgICByZXBsYWNlbWVudHMucHVzaChyZXBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBDb250ZW50c0xpc3RSZXBsYWNlbWVudCB9ID0gQ29udGVudHNJdGVtUmVwbGFjZW1lbnQsXG4gICAgICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudCA9IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50LmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICByZXBsYWNlbWVudCA9IGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50OyAvLy9cblxuICAgICAgcmVwbGFjZW1lbnRzLnB1c2gocmVwbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5mcm9tUmVwbGFjZW1lbnRzKHJlcGxhY2VtZW50cyksXG4gICAgICAgICAgbm9kZSA9IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgcmVwbGFjZW1lbnRzLmZvckVhY2goKHJlcGxhY2VtZW50KSA9PiB7XG4gICAgICByZXBsYWNlbWVudC5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50ID0gQ29udGVudHNJdGVtUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1SZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzSXRlbVJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiUmVwbGFjZW1lbnQiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwicmVwbGFjZW1lbnRzIiwiY29udGVudHNMaW5rUmVwbGFjZW1lbnQiLCJDb250ZW50c0xpbmtSZXBsYWNlbWVudCIsImdldE5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiYWRkQW5jaG9yIiwicmVwbGFjZW1lbnQiLCJwdXNoIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiQ29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21SZXBsYWNlbWVudHMiLCJmb3JFYWNoIiwiZ2V0VG9rZW5zIiwiY29udGVudHNJdGVtUmVwbGFjZW1lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSkc7bUVBQ1k7bUVBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUFJLE9BQU9DLG9CQUFXLENBQUNILGlCQUFpQixDQUQxREQseUJBQ29GRSxNQUFNQztZQUFTOzs7WUFFL0dFLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVDLE9BQU87Z0JBQ3JFLElBQU1DLGVBQWUsRUFBRSxFQUNqQkMsMEJBQTBCQyxxQkFBdUIsQ0FBQ0wsNkJBQTZCLENBQUNDLDJCQUEyQkM7Z0JBRWpILElBQUlFLDRCQUE0QixNQUFNO29CQUNwQyxJQUFNUCxPQUFPSSwwQkFBMEJLLE9BQU8sSUFDeENDLHNCQUFzQlYsTUFBTyxHQUFHO29CQUV0Q1Usb0JBQW9CQyxTQUFTLENBQUNOO29CQUU5QixJQUFNTyxjQUFjTDtvQkFFcEJELGFBQWFPLElBQUksQ0FBQ0Q7Z0JBQ3BCO2dCQUVBLElBQU1FLG1CQUFtQlYsMEJBQTBCVyxtQkFBbUIsSUFDaEVDLDZCQUE2QkYsa0JBQzdCRyxtQ0FBbUNELDJCQUEyQkUsTUFBTTtnQkFFMUUsSUFBSUQsbUNBQW1DLEdBQUc7b0JBQ3hDLElBQU0sQUFBRUUsMEJBdkJPckIsd0JBdUJQcUIseUJBQ0ZDLDBCQUEwQkQsd0JBQXdCRSw4QkFBOEIsQ0FBQ0wsNEJBQTRCWCxVQUM3R08sZUFBY1EseUJBQXlCLEdBQUc7b0JBRWhEZCxhQUFhTyxJQUFJLENBQUNEO2dCQUNwQjtnQkFFQSxJQUFNVSwyQkFBMkJDLHFCQUF3QixDQUFDQyxnQkFBZ0IsQ0FBQ2xCLGVBQ3JFTixRQUFPc0IsMEJBQ1ByQixTQUFTLEVBQUU7Z0JBRWpCSyxhQUFhbUIsT0FBTyxDQUFDLFNBQUNiO29CQUNwQkEsWUFBWWMsU0FBUyxDQUFDekI7Z0JBQ3hCO2dCQUVBLElBQU0wQiwwQkFBMEI3QixBQXRDZkEsd0JBc0N1Q0MsaUJBQWlCLENBQUNDLE9BQU1DO2dCQUVoRixPQUFPMEI7WUFDVDs7O1dBekNtQjdCO0VBQWdDSSxvQkFBVyJ9