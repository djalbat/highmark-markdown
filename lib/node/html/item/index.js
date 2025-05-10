"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexItemHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _comma = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text/comma"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text/index"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../../node/html/link/index"));
var _markdown = require("../../../ruleNames/markdown");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var IndexItemHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(IndexItemHTMLNode, HTMLNode);
    function IndexItemHTMLNode() {
        _class_call_check(this, IndexItemHTMLNode);
        return _call_super(this, IndexItemHTMLNode, arguments);
    }
    _create_class(IndexItemHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.INDEX_ITEM_MARKDOWN_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromIndexItem",
            value: function fromIndexItem(indexItem) {
                var wordOrPhrase = indexItem.getWordOrPhrase(), pageNumbers = indexItem.getPageNumbers(), indexSpanHTMLNode = _index.default.fromWordOrPhrase(wordOrPhrase), childNodes = [
                    indexSpanHTMLNode
                ];
                pageNumbers.forEach(function(pageNumber) {
                    var indexLinkHTMLNOde = _index1.default.fromPageNumber(pageNumber);
                    childNodes.push(indexLinkHTMLNOde);
                    var commaTextHTMLNode = _comma.default.fromNothing();
                    childNodes.push(commaTextHTMLNode);
                });
                childNodes.pop();
                var indexItemHTMLNode = _html.default.fromChildNodes(IndexItemHTMLNode, childNodes);
                return indexItemHTMLNode;
            }
        }
    ]);
    return IndexItemHTMLNode;
}(_html.default);
_define_property(IndexItemHTMLNode, "tagName", "li");
_define_property(IndexItemHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBDb21tYVRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHQvY29tbWFcIjtcbmltcG9ydCBJbmRleFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHQvaW5kZXhcIjtcbmltcG9ydCBJbmRleExpbmtIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmsvaW5kZXhcIjtcblxuaW1wb3J0IHsgSU5ERVhfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJpbmRleFwiO1xuXG4gIHN0YXRpYyBmcm9tSW5kZXhJdGVtKGluZGV4SXRlbSkge1xuICAgIGNvbnN0IHdvcmRPclBocmFzZSA9IGluZGV4SXRlbS5nZXRXb3JkT3JQaHJhc2UoKSxcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IGluZGV4SXRlbS5nZXRQYWdlTnVtYmVycygpLFxuICAgICAgICAgIGluZGV4U3BhbkhUTUxOb2RlID0gSW5kZXhUZXh0SFRNTE5vZGUuZnJvbVdvcmRPclBocmFzZSh3b3JkT3JQaHJhc2UpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBpbmRleFNwYW5IVE1MTm9kZVxuICAgICAgICAgIF07XG5cbiAgICBwYWdlTnVtYmVycy5mb3JFYWNoKChwYWdlTnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBpbmRleExpbmtIVE1MTk9kZSA9IEluZGV4TGlua0hUTUxOb2RlLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgICBjaGlsZE5vZGVzLnB1c2goaW5kZXhMaW5rSFRNTE5PZGUpO1xuXG4gICAgICBjb25zdCBjb21tYVRleHRIVE1MTm9kZSA9IENvbW1hVGV4dEhUTUxOb2RlLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMucHVzaChjb21tYVRleHRIVE1MTm9kZSk7XG4gICAgfSk7XG5cbiAgICBjaGlsZE5vZGVzLnBvcCgpO1xuXG4gICAgY29uc3QgaW5kZXhJdGVtSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhJbmRleEl0ZW1IVE1MTm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gaW5kZXhJdGVtSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEl0ZW1IVE1MTm9kZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJJTkRFWF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbUluZGV4SXRlbSIsImluZGV4SXRlbSIsIndvcmRPclBocmFzZSIsImdldFdvcmRPclBocmFzZSIsInBhZ2VOdW1iZXJzIiwiZ2V0UGFnZU51bWJlcnMiLCJpbmRleFNwYW5IVE1MTm9kZSIsIkluZGV4VGV4dEhUTUxOb2RlIiwiZnJvbVdvcmRPclBocmFzZSIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwicGFnZU51bWJlciIsImluZGV4TGlua0hUTUxOT2RlIiwiSW5kZXhMaW5rSFRNTE5vZGUiLCJmcm9tUGFnZU51bWJlciIsInB1c2giLCJjb21tYVRleHRIVE1MTm9kZSIsIkNvbW1hVGV4dEhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJwb3AiLCJpbmRleEl0ZW1IVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbUNoaWxkTm9kZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQQTs0REFDUzs0REFDQTs2REFDQTt3QkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsdUNBQTZCO2dCQUU5QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1GLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCSSxTQUFTSCxVQUFXLEdBQUc7Z0JBRTdCLE9BQU9HO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFDNUIsSUFBTUMsZUFBZUQsVUFBVUUsZUFBZSxJQUN4Q0MsY0FBY0gsVUFBVUksY0FBYyxJQUN0Q0Msb0JBQW9CQyxjQUFpQixDQUFDQyxnQkFBZ0IsQ0FBQ04sZUFDdkRPLGFBQWE7b0JBQ1hIO2lCQUNEO2dCQUVQRixZQUFZTSxPQUFPLENBQUMsU0FBQ0M7b0JBQ25CLElBQU1DLG9CQUFvQkMsZUFBaUIsQ0FBQ0MsY0FBYyxDQUFDSDtvQkFFM0RGLFdBQVdNLElBQUksQ0FBQ0g7b0JBRWhCLElBQU1JLG9CQUFvQkMsY0FBaUIsQ0FBQ0MsV0FBVztvQkFFdkRULFdBQVdNLElBQUksQ0FBQ0M7Z0JBQ2xCO2dCQUVBUCxXQUFXVSxHQUFHO2dCQUVkLElBQU1DLG9CQUFvQkMsYUFBUSxDQUFDQyxjQUFjLENBdENoQzVCLG1CQXNDb0RlO2dCQUVyRSxPQUFPVztZQUNUOzs7V0F6Q21CMUI7RUFBMEIyQixhQUFRO0FBY3JELGlCQWRtQjNCLG1CQWNaNkIsV0FBVTtBQUVqQixpQkFoQm1CN0IsbUJBZ0JaOEIsYUFBWSJ9