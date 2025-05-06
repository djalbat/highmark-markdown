"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../../node/html/anchor"));
var _ruleNames = require("../../../ruleNames");
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
var FootnoteItemHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(FootnoteItemHTMLNode, HTMLNode);
    function FootnoteItemHTMLNode() {
        _class_call_check(this, FootnoteItemHTMLNode);
        return _call_super(this, FootnoteItemHTMLNode, arguments);
    }
    _create_class(FootnoteItemHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _ruleNames.FOOTNOTE_ITEM_RULE_NAME; ///
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
            key: "fromLineTMLTransformAndIdentifier",
            value: function fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier) {
                var anchorHTMLNode = _anchor.default.fromIdentifier(identifier), lineHTMLNode = lineHTMLTransform.getLineHTMLNode(), childNodes = [
                    anchorHTMLNode,
                    lineHTMLNode
                ], footnoteItemHTMLNode = _html.default.fromChildNodes(FootnoteItemHTMLNode, childNodes);
                return footnoteItemHTMLNode;
            }
        }
    ]);
    return FootnoteItemHTMLNode;
}(_html.default);
_define_property(FootnoteItemHTMLNode, "tagName", "li");
_define_property(FootnoteItemHTMLNode, "className", "footnote");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBGT09UTk9URV9JVEVNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVJdGVtSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVfSVRFTV9SVUxFX05BTUU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBhbmNob3JIVE1MTm9kZSA9IEFuY2hvckhUTUxOb2RlLmZyb21JZGVudGlmaWVyKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGxpbmVIVE1MTm9kZSA9IGxpbmVIVE1MVHJhbnNmb3JtLmdldExpbmVIVE1MTm9kZSgpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBhbmNob3JIVE1MTm9kZSxcbiAgICAgICAgICAgIGxpbmVIVE1MTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhGb290bm90ZUl0ZW1IVE1MTm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUl0ZW1IVE1MTm9kZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJGT09UTk9URV9JVEVNX1JVTEVfTkFNRSIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbUxpbmVUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyIiwibGluZUhUTUxUcmFuc2Zvcm0iLCJpZGVudGlmaWVyIiwiYW5jaG9ySFRNTE5vZGUiLCJBbmNob3JIVE1MTm9kZSIsImZyb21JZGVudGlmaWVyIiwibGluZUhUTUxOb2RlIiwiZ2V0TGluZUhUTUxOb2RlIiwiY2hpbGROb2RlcyIsImZvb3Rub3RlSXRlbUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBOzZEQUNNO3lCQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLGtDQUF1QixFQUFFLEdBQUc7Z0JBRTdDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUYsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0JJLFNBQVNILFVBQVcsR0FBRztnQkFFN0IsT0FBT0c7WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQSxrQ0FBa0NDLGlCQUFpQixFQUFFQyxVQUFVO2dCQUNwRSxJQUFNQyxpQkFBaUJDLGVBQWMsQ0FBQ0MsY0FBYyxDQUFDSCxhQUMvQ0ksZUFBZUwsa0JBQWtCTSxlQUFlLElBQ2hEQyxhQUFhO29CQUNYTDtvQkFDQUc7aUJBQ0QsRUFDREcsdUJBQXVCQyxhQUFRLENBQUNDLGNBQWMsQ0F6Qm5DakIsc0JBeUIwRGM7Z0JBRTNFLE9BQU9DO1lBQ1Q7OztXQTVCbUJmO0VBQTZCZ0IsYUFBUTtBQWN4RCxpQkFkbUJoQixzQkFjWmtCLFdBQVU7QUFFakIsaUJBaEJtQmxCLHNCQWdCWm1CLGFBQVkifQ==