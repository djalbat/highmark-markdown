"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemTransform;
    }
});
var _occamdom = require("occam-dom");
var _contentsLink = /*#__PURE__*/ _interop_require_default(require("../transform/contentsLink"));
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
var ContentsItemTransform = /*#__PURE__*/ function(Transform) {
    _inherits(ContentsItemTransform, Transform);
    function ContentsItemTransform() {
        _class_call_check(this, ContentsItemTransform);
        return _call_super(this, ContentsItemTransform, arguments);
    }
    _create_class(ContentsItemTransform, [
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
                var transforms = [], contentsLinkTransform = _contentsLink.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
                if (contentsLinkTransform !== null) {
                    var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                    headingMarkdownNode.addAnchor(context);
                    var transform = contentsLinkTransform;
                    transforms.push(transform);
                }
                var childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;
                if (nestedHeadingMarkdownNodesLength > 0) {
                    var ContentsListTransform = ContentsItemTransform.ContentsListTransform, contentsListTransform = ContentsListTransform.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), transform1 = contentsListTransform; ///
                    transforms.push(transform1);
                }
                var contentsItemMarkdownNode = _contentsItem.default.fromTransforms(transforms), node1 = contentsItemMarkdownNode, tokens = [];
                transforms.forEach(function(transform) {
                    transform.getTokens(tokens);
                });
                var contentsItemTransform = _occamdom.Transform.fromNodeAndTokens(ContentsItemTransform, node1, tokens);
                return contentsItemTransform;
            }
        }
    ]);
    return ContentsItemTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vX2xlZ2FjeS9jb250ZW50c0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IENvbnRlbnRzTGlua1RyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2NvbnRlbnRzTGlua1wiO1xuaW1wb3J0IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNJdGVtVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgZ2V0Q29udGVudHNJdGVtTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgY29udGVudHNMaW5rVHJhbnNmb3JtID0gQ29udGVudHNMaW5rVHJhbnNmb3JtLmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzTGlua1RyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgaGVhZGluZ01hcmtkb3duTm9kZS5hZGRBbmNob3IoY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGNvbnRlbnRzTGlua1RyYW5zZm9ybTtcblxuICAgICAgdHJhbnNmb3Jtcy5wdXNoKHRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBDb250ZW50c0xpc3RUcmFuc2Zvcm0gfSA9IENvbnRlbnRzSXRlbVRyYW5zZm9ybSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdFRyYW5zZm9ybS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHJhbnNmb3JtID0gY29udGVudHNMaXN0VHJhbnNmb3JtOyAvLy9cblxuICAgICAgdHJhbnNmb3Jtcy5wdXNoKHRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudHNJdGVtTWFya2Rvd25Ob2RlID0gQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlLmZyb21UcmFuc2Zvcm1zKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgIHRyYW5zZm9ybXMuZm9yRWFjaCgodHJhbnNmb3JtKSA9PiB7XG4gICAgICB0cmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0l0ZW1UcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNJdGVtVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzSXRlbVRyYW5zZm9ybSIsImdldENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiY29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInRyYW5zZm9ybXMiLCJjb250ZW50c0xpbmtUcmFuc2Zvcm0iLCJDb250ZW50c0xpbmtUcmFuc2Zvcm0iLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiYWRkQW5jaG9yIiwidHJhbnNmb3JtIiwicHVzaCIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIkNvbnRlbnRzTGlzdFRyYW5zZm9ybSIsImNvbnRlbnRzTGlzdFRyYW5zZm9ybSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21UcmFuc2Zvcm1zIiwidG9rZW5zIiwiZm9yRWFjaCIsImdldFRva2VucyIsImNvbnRlbnRzSXRlbVRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozt3QkFMSzttRUFFUTttRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQywyQkFBMkJGLE1BQU8sR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFQyxPQUFPO2dCQUNyRSxJQUFNQyxhQUFhLEVBQUUsRUFDZkMsd0JBQXdCQyxxQkFBcUIsQ0FBQ0wsNkJBQTZCLENBQUNDLDJCQUEyQkM7Z0JBRTdHLElBQUlFLDBCQUEwQixNQUFNO29CQUNsQyxJQUFNUCxPQUFPSSwwQkFBMEJILE9BQU8sSUFDeENRLHNCQUFzQlQsTUFBTyxHQUFHO29CQUV0Q1Msb0JBQW9CQyxTQUFTLENBQUNMO29CQUU5QixJQUFNTSxZQUFZSjtvQkFFbEJELFdBQVdNLElBQUksQ0FBQ0Q7Z0JBQ2xCO2dCQUVBLElBQU1FLG1CQUFtQlQsMEJBQTBCVSxtQkFBbUIsSUFDaEVDLDZCQUE2QkYsa0JBQzdCRyxtQ0FBbUNELDJCQUEyQkUsTUFBTTtnQkFFMUUsSUFBSUQsbUNBQW1DLEdBQUc7b0JBQ3hDLElBQU0sQUFBRUUsd0JBNUJPcEIsc0JBNEJQb0IsdUJBQ0ZDLHdCQUF3QkQsc0JBQXNCRSw4QkFBOEIsQ0FBQ0wsNEJBQTRCVixVQUN6R00sYUFBWVEsdUJBQXVCLEdBQUc7b0JBRTVDYixXQUFXTSxJQUFJLENBQUNEO2dCQUNsQjtnQkFFQSxJQUFNVCwyQkFBMkJtQixxQkFBd0IsQ0FBQ0MsY0FBYyxDQUFDaEIsYUFDbkVOLFFBQU9FLDBCQUNQcUIsU0FBUyxFQUFFO2dCQUVqQmpCLFdBQVdrQixPQUFPLENBQUMsU0FBQ2I7b0JBQ2xCQSxVQUFVYyxTQUFTLENBQUNGO2dCQUN0QjtnQkFFQSxJQUFNRyx3QkFBd0JDLG1CQUFTLENBQUNDLGlCQUFpQixDQTNDeEM5Qix1QkEyQ2dFRSxPQUFNdUI7Z0JBRXZGLE9BQU9HO1lBQ1Q7OztXQTlDbUI1QjtFQUE4QjZCLG1CQUFTIn0=