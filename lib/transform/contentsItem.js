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
var _transform = /*#__PURE__*/ _interop_require_default(require("../transform"));
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
                var contentsItemTransform = _transform.default.fromNodeAndTokens(ContentsItemTransform, node1, tokens);
                return contentsItemTransform;
            }
        }
    ]);
    return ContentsItemTransform;
}(_transform.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udGVudHNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuLi90cmFuc2Zvcm1cIjtcbmltcG9ydCBDb250ZW50c0xpbmtUcmFuc2Zvcm0gZnJvbSBcIi4uL3RyYW5zZm9ybS9jb250ZW50c0xpbmtcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vY29udGVudHNJdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbVRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGdldENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGVudHNJdGVtTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHJhbnNmb3JtcyA9IFtdLFxuICAgICAgICAgIGNvbnRlbnRzTGlua1RyYW5zZm9ybSA9IENvbnRlbnRzTGlua1RyYW5zZm9ybS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0xpbmtUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUuYWRkQW5jaG9yKGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBjb250ZW50c0xpbmtUcmFuc2Zvcm07XG5cbiAgICAgIHRyYW5zZm9ybXMucHVzaCh0cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGNoaWxkTmVzdGVkTm9kZXMsICAvLy9cbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgQ29udGVudHNMaXN0VHJhbnNmb3JtIH0gPSBDb250ZW50c0l0ZW1UcmFuc2Zvcm0sXG4gICAgICAgICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0gPSBDb250ZW50c0xpc3RUcmFuc2Zvcm0uZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbnRlbnRzTGlzdFRyYW5zZm9ybTsgLy8vXG5cbiAgICAgIHRyYW5zZm9ybXMucHVzaCh0cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5mcm9tVHJhbnNmb3Jtcyh0cmFuc2Zvcm1zKSxcbiAgICAgICAgICBub2RlID0gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICB0cmFuc2Zvcm1zLmZvckVhY2goKHRyYW5zZm9ybSkgPT4ge1xuICAgICAgdHJhbnNmb3JtLmdldFRva2Vucyh0b2tlbnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudHNJdGVtVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzSXRlbVRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1UcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0l0ZW1UcmFuc2Zvcm0iLCJnZXRDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRleHQiLCJ0cmFuc2Zvcm1zIiwiY29udGVudHNMaW5rVHJhbnNmb3JtIiwiQ29udGVudHNMaW5rVHJhbnNmb3JtIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImFkZEFuY2hvciIsInRyYW5zZm9ybSIsInB1c2giLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJDb250ZW50c0xpc3RUcmFuc2Zvcm0iLCJjb250ZW50c0xpc3RUcmFuc2Zvcm0iLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tVHJhbnNmb3JtcyIsInRva2VucyIsImZvckVhY2giLCJnZXRUb2tlbnMiLCJjb250ZW50c0l0ZW1UcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7Z0VBSkM7bUVBQ1k7bUVBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsMkJBQTJCRixNQUFPLEdBQUc7Z0JBRTNDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRUMsT0FBTztnQkFDckUsSUFBTUMsYUFBYSxFQUFFLEVBQ2ZDLHdCQUF3QkMscUJBQXFCLENBQUNMLDZCQUE2QixDQUFDQywyQkFBMkJDO2dCQUU3RyxJQUFJRSwwQkFBMEIsTUFBTTtvQkFDbEMsSUFBTVAsT0FBT0ksMEJBQTBCSCxPQUFPLElBQ3hDUSxzQkFBc0JULE1BQU8sR0FBRztvQkFFdENTLG9CQUFvQkMsU0FBUyxDQUFDTDtvQkFFOUIsSUFBTU0sWUFBWUo7b0JBRWxCRCxXQUFXTSxJQUFJLENBQUNEO2dCQUNsQjtnQkFFQSxJQUFNRSxtQkFBbUJULDBCQUEwQlUsbUJBQW1CLElBQ2hFQyw2QkFBNkJGLGtCQUM3QkcsbUNBQW1DRCwyQkFBMkJFLE1BQU07Z0JBRTFFLElBQUlELG1DQUFtQyxHQUFHO29CQUN4QyxJQUFNLEFBQUVFLHdCQTVCT3BCLHNCQTRCUG9CLHVCQUNGQyx3QkFBd0JELHNCQUFzQkUsOEJBQThCLENBQUNMLDRCQUE0QlYsVUFDekdNLGFBQVlRLHVCQUF1QixHQUFHO29CQUU1Q2IsV0FBV00sSUFBSSxDQUFDRDtnQkFDbEI7Z0JBRUEsSUFBTVQsMkJBQTJCbUIscUJBQXdCLENBQUNDLGNBQWMsQ0FBQ2hCLGFBQ25FTixRQUFPRSwwQkFDUHFCLFNBQVMsRUFBRTtnQkFFakJqQixXQUFXa0IsT0FBTyxDQUFDLFNBQUNiO29CQUNsQkEsVUFBVWMsU0FBUyxDQUFDRjtnQkFDdEI7Z0JBRUEsSUFBTUcsd0JBQXdCQyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0EzQ3hDOUIsdUJBMkNnRUUsT0FBTXVCO2dCQUV2RixPQUFPRztZQUNUOzs7V0E5Q21CNUI7RUFBOEI2QixrQkFBUyJ9