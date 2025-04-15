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
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
var _contentsLink = /*#__PURE__*/ _interop_require_default(require(".//contentsLink"));
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
                var transforms = [], contentsLinkReplacement = _contentsLink.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
                if (contentsLinkReplacement !== null) {
                    var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                    headingMarkdownNode.addAnchor(context);
                    var transform = contentsLinkReplacement;
                    transforms.push(transform);
                }
                var childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;
                if (nestedHeadingMarkdownNodesLength > 0) {
                    var ContentsListReplacement = ContentsItemReplacement.ContentsListReplacement, contentsListReplacement = ContentsListReplacement.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), transform1 = contentsListReplacement; ///
                    transforms.push(transform1);
                }
                var contentsItemMarkdownNode = _contentsItem.default.fromReplacements(transforms), node1 = contentsItemMarkdownNode, tokens = [];
                transforms.forEach(function(transform) {
                    transform.getTokens(tokens);
                });
                var contentsItemReplacement = _.default.fromNodeAndTokens(ContentsItemReplacement, node1, tokens);
                return contentsItemReplacement;
            }
        }
    ]);
    return ContentsItemReplacement;
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udGVudHNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4vXCI7XG5pbXBvcnQgQ29udGVudHNMaW5rUmVwbGFjZW1lbnQgZnJvbSBcIi4vL2NvbnRlbnRzTGlua1wiO1xuaW1wb3J0IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNJdGVtUmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIGdldENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGVudHNJdGVtTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHJhbnNmb3JtcyA9IFtdLFxuICAgICAgICAgIGNvbnRlbnRzTGlua1JlcGxhY2VtZW50ID0gQ29udGVudHNMaW5rUmVwbGFjZW1lbnQuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNMaW5rUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUuYWRkQW5jaG9yKGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBjb250ZW50c0xpbmtSZXBsYWNlbWVudDtcblxuICAgICAgdHJhbnNmb3Jtcy5wdXNoKHRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBDb250ZW50c0xpc3RSZXBsYWNlbWVudCB9ID0gQ29udGVudHNJdGVtUmVwbGFjZW1lbnQsXG4gICAgICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudCA9IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50LmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBjb250ZW50c0xpc3RSZXBsYWNlbWVudDsgLy8vXG5cbiAgICAgIHRyYW5zZm9ybXMucHVzaCh0cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5mcm9tUmVwbGFjZW1lbnRzKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgIHRyYW5zZm9ybXMuZm9yRWFjaCgodHJhbnNmb3JtKSA9PiB7XG4gICAgICB0cmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0l0ZW1SZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzSXRlbVJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNJdGVtUmVwbGFjZW1lbnQiLCJnZXRDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRleHQiLCJ0cmFuc2Zvcm1zIiwiY29udGVudHNMaW5rUmVwbGFjZW1lbnQiLCJDb250ZW50c0xpbmtSZXBsYWNlbWVudCIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJhZGRBbmNob3IiLCJ0cmFuc2Zvcm0iLCJwdXNoIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiQ29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21SZXBsYWNlbWVudHMiLCJ0b2tlbnMiLCJmb3JFYWNoIiwiZ2V0VG9rZW5zIiwiY29udGVudHNJdGVtUmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt1REFKRzttRUFDWTttRUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQywyQkFBMkJGLE1BQU8sR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFQyxPQUFPO2dCQUNyRSxJQUFNQyxhQUFhLEVBQUUsRUFDZkMsMEJBQTBCQyxxQkFBdUIsQ0FBQ0wsNkJBQTZCLENBQUNDLDJCQUEyQkM7Z0JBRWpILElBQUlFLDRCQUE0QixNQUFNO29CQUNwQyxJQUFNUCxPQUFPSSwwQkFBMEJILE9BQU8sSUFDeENRLHNCQUFzQlQsTUFBTyxHQUFHO29CQUV0Q1Msb0JBQW9CQyxTQUFTLENBQUNMO29CQUU5QixJQUFNTSxZQUFZSjtvQkFFbEJELFdBQVdNLElBQUksQ0FBQ0Q7Z0JBQ2xCO2dCQUVBLElBQU1FLG1CQUFtQlQsMEJBQTBCVSxtQkFBbUIsSUFDaEVDLDZCQUE2QkYsa0JBQzdCRyxtQ0FBbUNELDJCQUEyQkUsTUFBTTtnQkFFMUUsSUFBSUQsbUNBQW1DLEdBQUc7b0JBQ3hDLElBQU0sQUFBRUUsMEJBNUJPcEIsd0JBNEJQb0IseUJBQ0ZDLDBCQUEwQkQsd0JBQXdCRSw4QkFBOEIsQ0FBQ0wsNEJBQTRCVixVQUM3R00sYUFBWVEseUJBQXlCLEdBQUc7b0JBRTlDYixXQUFXTSxJQUFJLENBQUNEO2dCQUNsQjtnQkFFQSxJQUFNVCwyQkFBMkJtQixxQkFBd0IsQ0FBQ0MsZ0JBQWdCLENBQUNoQixhQUNyRU4sUUFBT0UsMEJBQ1BxQixTQUFTLEVBQUU7Z0JBRWpCakIsV0FBV2tCLE9BQU8sQ0FBQyxTQUFDYjtvQkFDbEJBLFVBQVVjLFNBQVMsQ0FBQ0Y7Z0JBQ3RCO2dCQUVBLElBQU1HLDBCQUEwQkMsU0FBVyxDQUFDQyxpQkFBaUIsQ0EzQzVDOUIseUJBMkNzRUUsT0FBTXVCO2dCQUU3RixPQUFPRztZQUNUOzs7V0E5Q21CNUI7RUFBZ0M2QixTQUFXIn0=