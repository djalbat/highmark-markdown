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
var _contents = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/item/contents"));
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
                var transforms = [], contentsLinkHTMLTransform = _contents1.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
                if (contentsLinkHTMLTransform !== null) {
                    var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                    headingMarkdownNode.addAnchor(context);
                    var transform = contentsLinkHTMLTransform;
                    transforms.push(transform);
                }
                var childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;
                if (nestedHeadingMarkdownNodesLength > 0) {
                    var ContentsListHTMLTransform = ContentsItemHTMLTransform.ContentsListHTMLTransform, contentsListHTMLTransform = ContentsListHTMLTransform.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), transform1 = contentsListHTMLTransform; ///
                    transforms.push(transform1);
                }
                var contentsItemMarkdownNode = _contents.default.fromHTMLTransforms(transforms), node1 = contentsItemMarkdownNode, tokens = [];
                transforms.forEach(function(transform) {
                    transform.getTokens(tokens);
                });
                var contentsItemHTMLTransform = _html.default.fromNodeAndTokens(ContentsItemHTMLTransform, node1, tokens);
                return contentsItemHTMLTransform;
            }
        }
    ]);
    return ContentsItemHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pdGVtL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd24vaXRlbS9jb250ZW50c1wiO1xuaW1wb3J0IENvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9odG1sL2xpbmsvY29udGVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRyYW5zZm9ybXMgPSBbXSxcbiAgICAgICAgICBjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtID0gQ29udGVudHNMaW5rSFRNTFRyYW5zZm9ybS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlLmFkZEFuY2hvcihjb250ZXh0KTtcblxuICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29udGVudHNMaW5rSFRNTFRyYW5zZm9ybTtcblxuICAgICAgdHJhbnNmb3Jtcy5wdXNoKHRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIH0gPSBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLFxuICAgICAgICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07IC8vL1xuXG4gICAgICB0cmFuc2Zvcm1zLnB1c2godHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUuZnJvbUhUTUxUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgIHRyYW5zZm9ybXMuZm9yRWFjaCgodHJhbnNmb3JtKSA9PiB7XG4gICAgICB0cmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIiwiZ2V0Q29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwidHJhbnNmb3JtcyIsImNvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0iLCJDb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImFkZEFuY2hvciIsInRyYW5zZm9ybSIsInB1c2giLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21IVE1MVHJhbnNmb3JtcyIsInRva2VucyIsImZvckVhY2giLCJnZXRUb2tlbnMiLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSzsrREFDVztnRUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQywyQkFBMkJGLE1BQU8sR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFQyxPQUFPO2dCQUNyRSxJQUFNQyxhQUFhLEVBQUUsRUFDZkMsNEJBQTRCQyxrQkFBeUIsQ0FBQ0wsNkJBQTZCLENBQUNDLDJCQUEyQkM7Z0JBRXJILElBQUlFLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNUCxPQUFPSSwwQkFBMEJILE9BQU8sSUFDeENRLHNCQUFzQlQsTUFBTyxHQUFHO29CQUV0Q1Msb0JBQW9CQyxTQUFTLENBQUNMO29CQUU5QixJQUFNTSxZQUFZSjtvQkFFbEJELFdBQVdNLElBQUksQ0FBQ0Q7Z0JBQ2xCO2dCQUVBLElBQU1FLG1CQUFtQlQsMEJBQTBCVSxtQkFBbUIsSUFDaEVDLDZCQUE2QkYsa0JBQzdCRyxtQ0FBbUNELDJCQUEyQkUsTUFBTTtnQkFFMUUsSUFBSUQsbUNBQW1DLEdBQUc7b0JBQ3hDLElBQU0sQUFBRUUsNEJBNUJPcEIsMEJBNEJQb0IsMkJBQ0ZDLDRCQUE0QkQsMEJBQTBCRSw4QkFBOEIsQ0FBQ0wsNEJBQTRCVixVQUNqSE0sYUFBWVEsMkJBQTJCLEdBQUc7b0JBRWhEYixXQUFXTSxJQUFJLENBQUNEO2dCQUNsQjtnQkFFQSxJQUFNVCwyQkFBMkJtQixpQkFBd0IsQ0FBQ0Msa0JBQWtCLENBQUNoQixhQUN2RU4sUUFBT0UsMEJBQ1BxQixTQUFTLEVBQUU7Z0JBRWpCakIsV0FBV2tCLE9BQU8sQ0FBQyxTQUFDYjtvQkFDbEJBLFVBQVVjLFNBQVMsQ0FBQ0Y7Z0JBQ3RCO2dCQUVBLElBQU1HLDRCQUE0QkMsYUFBYSxDQUFDQyxpQkFBaUIsQ0EzQ2hEOUIsMkJBMkM0RUUsT0FBTXVCO2dCQUVuRyxPQUFPRztZQUNUOzs7V0E5Q21CNUI7RUFBa0M2QixhQUFhIn0=