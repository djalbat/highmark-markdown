"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
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
var ContentsItemHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(ContentsItemHTMLNode, HTMLNode);
    function ContentsItemHTMLNode() {
        _class_call_check(this, ContentsItemHTMLNode);
        return _call_super(this, ContentsItemHTMLNode, arguments);
    }
    _create_class(ContentsItemHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.CONTENTS_ITEM_MARKDOWN_RULE_NAME;
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
            key: "fromHTMLTransforms",
            value: function fromHTMLTransforms(htmlTransforms) {
                var htmlNodes = htmlTransforms.map(function(htmlTransform) {
                    var htmlNode = htmlTransform.getHTMLNode();
                    return htmlNode;
                }), childNodes = htmlNodes, contentsItemHTMLNode = _html.default.fromChildNodes(ContentsItemHTMLNode, childNodes);
                return contentsItemHTMLNode;
            }
        }
    ]);
    return ContentsItemHTMLNode;
}(_html.default);
_define_property(ContentsItemHTMLNode, "tagName", "li");
_define_property(ContentsItemHTMLNode, "className", "contents");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9jb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRFTlRTX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJjb250ZW50c1wiO1xuXG4gIHN0YXRpYyBmcm9tSFRNTFRyYW5zZm9ybXMoaHRtbFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBodG1sTm9kZXMgPSBodG1sVHJhbnNmb3Jtcy5tYXAoKGh0bWxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxOb2RlID0gaHRtbFRyYW5zZm9ybS5nZXRIVE1MTm9kZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gaHRtbE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGh0bWxOb2RlcywgLy8vXG4gICAgICAgICAgY29udGVudHNJdGVtSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhDb250ZW50c0l0ZW1IVE1MTm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0l0ZW1IVE1MTm9kZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJDT05URU5UU19JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbUhUTUxUcmFuc2Zvcm1zIiwiaHRtbFRyYW5zZm9ybXMiLCJodG1sTm9kZXMiLCJtYXAiLCJodG1sVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsImNoaWxkTm9kZXMiLCJjb250ZW50c0l0ZW1IVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbUNoaWxkTm9kZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKQTt3QkFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsMENBQWdDO2dCQUVqRCxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1GLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCSSxTQUFTSCxVQUFXLEdBQUc7Z0JBRTdCLE9BQU9HO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjO2dCQUN0QyxJQUFNQyxZQUFZRCxlQUFlRSxHQUFHLENBQUMsU0FBQ0M7b0JBQzlCLElBQU1DLFdBQVdELGNBQWNFLFdBQVc7b0JBRTFDLE9BQU9EO2dCQUNULElBQ0FFLGFBQWFMLFdBQ2JNLHVCQUF1QkMsYUFBUSxDQUFDQyxjQUFjLENBekJuQ2hCLHNCQXlCMERhO2dCQUUzRSxPQUFPQztZQUNUOzs7V0E1Qm1CZDtFQUE2QmUsYUFBUTtBQWN4RCxpQkFkbUJmLHNCQWNaaUIsV0FBVTtBQUVqQixpQkFoQm1CakIsc0JBZ0Jaa0IsYUFBWSJ9