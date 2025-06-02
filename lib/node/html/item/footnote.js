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
var _prepends = require("../../../prepends");
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
                var ruleName = _markdown.FOOTNOTE_ITEM_MARKDOWN_RULE_NAME; ///
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
                var prepend = _prepends.FOOTNOTE_PREPEND, anchorHTMLNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), lineHTMLNode = lineHTMLTransform.getLineHTMLNode(), childHTMLNodes = [
                    anchorHTMLNode,
                    lineHTMLNode
                ], footnoteItemHTMLNode = _html.default.fromChildHTMLNodes(FootnoteItemHTMLNode, childHTMLNodes);
                return footnoteItemHTMLNode;
            }
        }
    ]);
    return FootnoteItemHTMLNode;
}(_html.default);
_define_property(FootnoteItemHTMLNode, "tagName", "li");
_define_property(FootnoteItemHTMLNode, "className", "footnote");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBGT09UTk9URV9QUkVQRU5EIH0gZnJvbSBcIi4uLy4uLy4uL3ByZXBlbmRzXCI7XG5pbXBvcnQgeyBGT09UTk9URV9JVEVNX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVJdGVtSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gRk9PVE5PVEVfUFJFUEVORCxcbiAgICAgICAgICBhbmNob3JIVE1MTm9kZSA9IEFuY2hvckhUTUxOb2RlLmZyb21QcmVwZW5kQW5kSWRlbnRpZmllcihwcmVwZW5kLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICBsaW5lSFRNTE5vZGUgPSBsaW5lSFRNTFRyYW5zZm9ybS5nZXRMaW5lSFRNTE5vZGUoKSxcbiAgICAgICAgICBjaGlsZEhUTUxOb2RlcyA9IFtcbiAgICAgICAgICAgIGFuY2hvckhUTUxOb2RlLFxuICAgICAgICAgICAgbGluZUhUTUxOb2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZEhUTUxOb2RlcyhGb290bm90ZUl0ZW1IVE1MTm9kZSwgY2hpbGRIVE1MTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSXRlbUhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiRk9PVE5PVEVfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21MaW5lVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllciIsImxpbmVIVE1MVHJhbnNmb3JtIiwiaWRlbnRpZmllciIsInByZXBlbmQiLCJGT09UTk9URV9QUkVQRU5EIiwiYW5jaG9ySFRNTE5vZGUiLCJBbmNob3JIVE1MTm9kZSIsImZyb21QcmVwZW5kQW5kSWRlbnRpZmllciIsImxpbmVIVE1MTm9kZSIsImdldExpbmVIVE1MTm9kZSIsImNoaWxkSFRNTE5vZGVzIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5BOzZEQUNNO3dCQUVNO3dCQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQ0FBZ0MsRUFBRSxHQUFHO2dCQUV0RCxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1GLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCSSxTQUFTSCxVQUFXLEdBQUc7Z0JBRTdCLE9BQU9HO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0NBQWtDQyxpQkFBaUIsRUFBRUMsVUFBVTtnQkFDcEUsSUFBTUMsVUFBVUMsMEJBQWdCLEVBQzFCQyxpQkFBaUJDLGVBQWMsQ0FBQ0Msd0JBQXdCLENBQUNKLFNBQVNELGFBQ2xFTSxlQUFlUCxrQkFBa0JRLGVBQWUsSUFDaERDLGlCQUFpQjtvQkFDZkw7b0JBQ0FHO2lCQUNELEVBQ0RHLHVCQUF1QkMsYUFBUSxDQUFDQyxrQkFBa0IsQ0ExQnZDbkIsc0JBMEI4RGdCO2dCQUUvRSxPQUFPQztZQUNUOzs7V0E3Qm1CakI7RUFBNkJrQixhQUFRO0FBY3hELGlCQWRtQmxCLHNCQWNab0IsV0FBVTtBQUVqQixpQkFoQm1CcEIsc0JBZ0JacUIsYUFBWSJ9