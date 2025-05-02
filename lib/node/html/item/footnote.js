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
            key: "asString",
            value: function asString() {
                var string = _ruleNames.FOOTNOTE_ITEM_RULE_NAME; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBGT09UTk9URV9JVEVNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVJdGVtSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEZPT1ROT1RFX0lURU1fUlVMRV9OQU1FOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBhbmNob3JIVE1MTm9kZSA9IEFuY2hvckhUTUxOb2RlLmZyb21JZGVudGlmaWVyKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGxpbmVIVE1MTm9kZSA9IGxpbmVIVE1MVHJhbnNmb3JtLmdldExpbmVIVE1MTm9kZSgpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBhbmNob3JIVE1MTm9kZSxcbiAgICAgICAgICAgIGxpbmVIVE1MTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhGb290bm90ZUl0ZW1IVE1MTm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUl0ZW1IVE1MTm9kZSIsImFzU3RyaW5nIiwic3RyaW5nIiwiRk9PVE5PVEVfSVRFTV9SVUxFX05BTUUiLCJmcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIiLCJsaW5lSFRNTFRyYW5zZm9ybSIsImlkZW50aWZpZXIiLCJhbmNob3JIVE1MTm9kZSIsIkFuY2hvckhUTUxOb2RlIiwiZnJvbUlkZW50aWZpZXIiLCJsaW5lSFRNTE5vZGUiLCJnZXRMaW5lSFRNTE5vZGUiLCJjaGlsZE5vZGVzIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21DaGlsZE5vZGVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7NkRBQ007eUJBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBU0Msa0NBQXVCLEVBQUUsR0FBRztnQkFFM0MsT0FBT0Q7WUFDVDs7OztZQU1PRSxLQUFBQTttQkFBUCxTQUFPQSxrQ0FBa0NDLGlCQUFpQixFQUFFQyxVQUFVO2dCQUNwRSxJQUFNQyxpQkFBaUJDLGVBQWMsQ0FBQ0MsY0FBYyxDQUFDSCxhQUMvQ0ksZUFBZUwsa0JBQWtCTSxlQUFlLElBQ2hEQyxhQUFhO29CQUNYTDtvQkFDQUc7aUJBQ0QsRUFDREcsdUJBQXVCQyxhQUFRLENBQUNDLGNBQWMsQ0FsQm5DZixzQkFrQjBEWTtnQkFFM0UsT0FBT0M7WUFDVDs7O1dBckJtQmI7RUFBNkJjLGFBQVE7QUFPeEQsaUJBUG1CZCxzQkFPWmdCLFdBQVU7QUFFakIsaUJBVG1CaEIsc0JBU1ppQixhQUFZIn0=