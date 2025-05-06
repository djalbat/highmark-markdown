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
var _contents = /*#__PURE__*/ _interop_require_default(require("../../../node/html/item/contents"));
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
            key: "getContentsItemHTMLNode",
            value: function getContentsItemHTMLNode() {
                var node = this.getNode(), contentsItemHTMLNode = node; ///
                return contentsItemHTMLNode;
            }
        }
    ], [
        {
            key: "fromNestedHeadingHTMLNode",
            value: function fromNestedHeadingHTMLNode(nestedHeadingHTMLNode, context) {
                var transforms = [], contentsLinkHTMLTransform = _contents1.default.fromNestedHeadingHTMLNode(nestedHeadingHTMLNode, context);
                if (contentsLinkHTMLTransform !== null) {
                    var node = nestedHeadingHTMLNode.getNode(), headingHTMLNode = node; ///
                    headingHTMLNode.addAnchor(context);
                    var transform = contentsLinkHTMLTransform;
                    transforms.push(transform);
                }
                var childNestedNodes = nestedHeadingHTMLNode.getChildNestedNodes(), nestedHeadingHTMLNodes = childNestedNodes, nestedHeadingHTMLNodesLength = nestedHeadingHTMLNodes.length;
                if (nestedHeadingHTMLNodesLength > 0) {
                    var ContentsListHTMLTransform = ContentsItemHTMLTransform.ContentsListHTMLTransform, contentsListHTMLTransform = ContentsListHTMLTransform.fromNestedHeadingHTMLNodes(nestedHeadingHTMLNodes, context), transform1 = contentsListHTMLTransform; ///
                    transforms.push(transform1);
                }
                var contentsItemHTMLNode = _contents.default.fromHTMLTransforms(transforms), node1 = contentsItemHTMLNode, tokens = [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pdGVtL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1IVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2l0ZW0vY29udGVudHNcIjtcbmltcG9ydCBDb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9saW5rL2NvbnRlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgZ2V0Q29udGVudHNJdGVtSFRNTE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRlbnRzSXRlbUhUTUxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nSFRNTE5vZGUobmVzdGVkSGVhZGluZ0hUTUxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHJhbnNmb3JtcyA9IFtdLFxuICAgICAgICAgIGNvbnRlbnRzTGlua0hUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtLmZyb21OZXN0ZWRIZWFkaW5nSFRNTE5vZGUobmVzdGVkSGVhZGluZ0hUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ0hUTUxOb2RlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGhlYWRpbmdIVE1MTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgaGVhZGluZ0hUTUxOb2RlLmFkZEFuY2hvcihjb250ZXh0KTtcblxuICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29udGVudHNMaW5rSFRNTFRyYW5zZm9ybTtcblxuICAgICAgdHJhbnNmb3Jtcy5wdXNoKHRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdIVE1MTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ0hUTUxOb2RlcyA9IGNoaWxkTmVzdGVkTm9kZXMsICAvLy9cbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nSFRNTE5vZGVzTGVuZ3RoID0gbmVzdGVkSGVhZGluZ0hUTUxOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobmVzdGVkSGVhZGluZ0hUTUxOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSB9ID0gQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtLmZyb21OZXN0ZWRIZWFkaW5nSFRNTE5vZGVzKG5lc3RlZEhlYWRpbmdIVE1MTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHJhbnNmb3JtID0gY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTsgLy8vXG5cbiAgICAgIHRyYW5zZm9ybXMucHVzaCh0cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxOb2RlID0gQ29udGVudHNJdGVtSFRNTE5vZGUuZnJvbUhUTUxUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0l0ZW1IVE1MTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgdHJhbnNmb3Jtcy5mb3JFYWNoKCh0cmFuc2Zvcm0pID0+IHtcbiAgICAgIHRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJnZXRDb250ZW50c0l0ZW1IVE1MTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiY29udGVudHNJdGVtSFRNTE5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ0hUTUxOb2RlIiwibmVzdGVkSGVhZGluZ0hUTUxOb2RlIiwiY29udGV4dCIsInRyYW5zZm9ybXMiLCJjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIiwiQ29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSIsImhlYWRpbmdIVE1MTm9kZSIsImFkZEFuY2hvciIsInRyYW5zZm9ybSIsInB1c2giLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsIm5lc3RlZEhlYWRpbmdIVE1MTm9kZXMiLCJuZXN0ZWRIZWFkaW5nSFRNTE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tTmVzdGVkSGVhZGluZ0hUTUxOb2RlcyIsIkNvbnRlbnRzSXRlbUhUTUxOb2RlIiwiZnJvbUhUTUxUcmFuc2Zvcm1zIiwidG9rZW5zIiwiZm9yRWFjaCIsImdldFRva2VucyIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpLOytEQUNPO2dFQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLHVCQUF1QkYsTUFBTyxHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMscUJBQXFCLEVBQUVDLE9BQU87Z0JBQzdELElBQU1DLGFBQWEsRUFBRSxFQUNmQyw0QkFBNEJDLGtCQUF5QixDQUFDTCx5QkFBeUIsQ0FBQ0MsdUJBQXVCQztnQkFFN0csSUFBSUUsOEJBQThCLE1BQU07b0JBQ3RDLElBQU1QLE9BQU9JLHNCQUFzQkgsT0FBTyxJQUNwQ1Esa0JBQWtCVCxNQUFPLEdBQUc7b0JBRWxDUyxnQkFBZ0JDLFNBQVMsQ0FBQ0w7b0JBRTFCLElBQU1NLFlBQVlKO29CQUVsQkQsV0FBV00sSUFBSSxDQUFDRDtnQkFDbEI7Z0JBRUEsSUFBTUUsbUJBQW1CVCxzQkFBc0JVLG1CQUFtQixJQUM1REMseUJBQXlCRixrQkFDekJHLCtCQUErQkQsdUJBQXVCRSxNQUFNO2dCQUVsRSxJQUFJRCwrQkFBK0IsR0FBRztvQkFDcEMsSUFBTSxBQUFFRSw0QkE1Qk9wQiwwQkE0QlBvQiwyQkFDRkMsNEJBQTRCRCwwQkFBMEJFLDBCQUEwQixDQUFDTCx3QkFBd0JWLFVBQ3pHTSxhQUFZUSwyQkFBMkIsR0FBRztvQkFFaERiLFdBQVdNLElBQUksQ0FBQ0Q7Z0JBQ2xCO2dCQUVBLElBQU1ULHVCQUF1Qm1CLGlCQUFvQixDQUFDQyxrQkFBa0IsQ0FBQ2hCLGFBQy9ETixRQUFPRSxzQkFDUHFCLFNBQVMsRUFBRTtnQkFFakJqQixXQUFXa0IsT0FBTyxDQUFDLFNBQUNiO29CQUNsQkEsVUFBVWMsU0FBUyxDQUFDRjtnQkFDdEI7Z0JBRUEsSUFBTUcsNEJBQTRCQyxhQUFhLENBQUNDLGlCQUFpQixDQTNDaEQ5QiwyQkEyQzRFRSxPQUFNdUI7Z0JBRW5HLE9BQU9HO1lBQ1Q7OztXQTlDbUI1QjtFQUFrQzZCLGFBQWEifQ==