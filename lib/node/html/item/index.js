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
                var wordOrPhrase = indexItem.getWordOrPhrase(), pageNumbers = indexItem.getPageNumbers(), indexSpanHTMLNode = _index.default.fromWordOrPhrase(wordOrPhrase), childNHTMLodes = [
                    indexSpanHTMLNode
                ];
                pageNumbers.forEach(function(pageNumber) {
                    var indexLinkHTMLNOde = _index1.default.fromPageNumber(pageNumber);
                    childNHTMLodes.push(indexLinkHTMLNOde);
                    var commaTextHTMLNode = _comma.default.fromNothing();
                    childNHTMLodes.push(commaTextHTMLNode);
                });
                childNHTMLodes.pop();
                var indexItemHTMLNode = _html.default.fromChildHTMLNodes(IndexItemHTMLNode, childNHTMLodes);
                return indexItemHTMLNode;
            }
        }
    ]);
    return IndexItemHTMLNode;
}(_html.default);
_define_property(IndexItemHTMLNode, "tagName", "li");
_define_property(IndexItemHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBDb21tYVRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHQvY29tbWFcIjtcbmltcG9ydCBJbmRleFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHQvaW5kZXhcIjtcbmltcG9ydCBJbmRleExpbmtIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmsvaW5kZXhcIjtcblxuaW1wb3J0IHsgSU5ERVhfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJpbmRleFwiO1xuXG4gIHN0YXRpYyBmcm9tSW5kZXhJdGVtKGluZGV4SXRlbSkge1xuICAgIGNvbnN0IHdvcmRPclBocmFzZSA9IGluZGV4SXRlbS5nZXRXb3JkT3JQaHJhc2UoKSxcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IGluZGV4SXRlbS5nZXRQYWdlTnVtYmVycygpLFxuICAgICAgICAgIGluZGV4U3BhbkhUTUxOb2RlID0gSW5kZXhUZXh0SFRNTE5vZGUuZnJvbVdvcmRPclBocmFzZSh3b3JkT3JQaHJhc2UpLFxuICAgICAgICAgIGNoaWxkTkhUTUxvZGVzID0gW1xuICAgICAgICAgICAgaW5kZXhTcGFuSFRNTE5vZGVcbiAgICAgICAgICBdO1xuXG4gICAgcGFnZU51bWJlcnMuZm9yRWFjaCgocGFnZU51bWJlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXhMaW5rSFRNTE5PZGUgPSBJbmRleExpbmtIVE1MTm9kZS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgY2hpbGROSFRNTG9kZXMucHVzaChpbmRleExpbmtIVE1MTk9kZSk7XG5cbiAgICAgIGNvbnN0IGNvbW1hVGV4dEhUTUxOb2RlID0gQ29tbWFUZXh0SFRNTE5vZGUuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgY2hpbGROSFRNTG9kZXMucHVzaChjb21tYVRleHRIVE1MTm9kZSk7XG4gICAgfSk7XG5cbiAgICBjaGlsZE5IVE1Mb2Rlcy5wb3AoKTtcblxuICAgIGNvbnN0IGluZGV4SXRlbUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkSFRNTE5vZGVzKEluZGV4SXRlbUhUTUxOb2RlLCBjaGlsZE5IVE1Mb2Rlcyk7XG5cbiAgICByZXR1cm4gaW5kZXhJdGVtSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEl0ZW1IVE1MTm9kZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJJTkRFWF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbUluZGV4SXRlbSIsImluZGV4SXRlbSIsIndvcmRPclBocmFzZSIsImdldFdvcmRPclBocmFzZSIsInBhZ2VOdW1iZXJzIiwiZ2V0UGFnZU51bWJlcnMiLCJpbmRleFNwYW5IVE1MTm9kZSIsIkluZGV4VGV4dEhUTUxOb2RlIiwiZnJvbVdvcmRPclBocmFzZSIsImNoaWxkTkhUTUxvZGVzIiwiZm9yRWFjaCIsInBhZ2VOdW1iZXIiLCJpbmRleExpbmtIVE1MTk9kZSIsIkluZGV4TGlua0hUTUxOb2RlIiwiZnJvbVBhZ2VOdW1iZXIiLCJwdXNoIiwiY29tbWFUZXh0SFRNTE5vZGUiLCJDb21tYVRleHRIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwicG9wIiwiaW5kZXhJdGVtSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBBOzREQUNTOzREQUNBOzZEQUNBO3dCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHVDQUE2QjtnQkFFOUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQkksU0FBU0gsVUFBVyxHQUFHO2dCQUU3QixPQUFPRztZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQzVCLElBQU1DLGVBQWVELFVBQVVFLGVBQWUsSUFDeENDLGNBQWNILFVBQVVJLGNBQWMsSUFDdENDLG9CQUFvQkMsY0FBaUIsQ0FBQ0MsZ0JBQWdCLENBQUNOLGVBQ3ZETyxpQkFBaUI7b0JBQ2ZIO2lCQUNEO2dCQUVQRixZQUFZTSxPQUFPLENBQUMsU0FBQ0M7b0JBQ25CLElBQU1DLG9CQUFvQkMsZUFBaUIsQ0FBQ0MsY0FBYyxDQUFDSDtvQkFFM0RGLGVBQWVNLElBQUksQ0FBQ0g7b0JBRXBCLElBQU1JLG9CQUFvQkMsY0FBaUIsQ0FBQ0MsV0FBVztvQkFFdkRULGVBQWVNLElBQUksQ0FBQ0M7Z0JBQ3RCO2dCQUVBUCxlQUFlVSxHQUFHO2dCQUVsQixJQUFNQyxvQkFBb0JDLGFBQVEsQ0FBQ0Msa0JBQWtCLENBdENwQzVCLG1CQXNDd0RlO2dCQUV6RSxPQUFPVztZQUNUOzs7V0F6Q21CMUI7RUFBMEIyQixhQUFRO0FBY3JELGlCQWRtQjNCLG1CQWNaNkIsV0FBVTtBQUVqQixpQkFoQm1CN0IsbUJBZ0JaOEIsYUFBWSJ9