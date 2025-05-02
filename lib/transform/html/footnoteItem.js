"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../node/html/item/footnote"));
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
var FootnoteItemHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(FootnoteItemHTMLTransform, HTMLTransform);
    function FootnoteItemHTMLTransform() {
        _class_call_check(this, FootnoteItemHTMLTransform);
        return _call_super(this, FootnoteItemHTMLTransform, arguments);
    }
    _create_class(FootnoteItemHTMLTransform, [
        {
            key: "getFootnoteItemHTMLNode",
            value: function getFootnoteItemHTMLNode() {
                var node = this.getNode(), footnoteItemHTMLNode = node; ///
                return footnoteItemHTMLNode;
            }
        }
    ], [
        {
            key: "fromLineTMLTransformAndIdentifier",
            value: function fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier) {
                var footnoteItemHTMLNode = _footnote.default.fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier), ascendantNode = footnoteItemHTMLNode, footnoteItemTransform = lineHTMLTransform.expand(FootnoteItemHTMLTransform, ascendantNode);
                return footnoteItemTransform;
            }
        }
    ]);
    return FootnoteItemHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZUl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbFwiXG5pbXBvcnQgRm9vdG5vdGVJdGVtSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbC9pdGVtL2Zvb3Rub3RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgZ2V0Rm9vdG5vdGVJdGVtSFRNTE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmVUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGxpbmVIVE1MVHJhbnNmb3JtLCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgZm9vdG5vdGVJdGVtSFRNTE5vZGUgPSBGb290bm90ZUl0ZW1IVE1MTm9kZS5mcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIpLFxuICAgICAgICAgIGFzY2VuZGFudE5vZGUgPSBmb290bm90ZUl0ZW1IVE1MTm9kZSwgLy8vXG4gICAgICAgICAgZm9vdG5vdGVJdGVtVHJhbnNmb3JtID0gbGluZUhUTUxUcmFuc2Zvcm0uZXhwYW5kKEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0sIGFzY2VuZGFudE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSXRlbVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJnZXRGb290bm90ZUl0ZW1IVE1MTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJmcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIiLCJsaW5lSFRNTFRyYW5zZm9ybSIsImlkZW50aWZpZXIiLCJGb290bm90ZUl0ZW1IVE1MTm9kZSIsImFzY2VuZGFudE5vZGUiLCJmb290bm90ZUl0ZW1UcmFuc2Zvcm0iLCJleHBhbmQiLCJIVE1MVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFISzsrREFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyx1QkFBdUJGLE1BQU0sR0FBRztnQkFFdEMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQ0FBa0NDLGlCQUFpQixFQUFFQyxVQUFVO2dCQUNwRSxJQUFNSCx1QkFBdUJJLGlCQUFvQixDQUFDSCxpQ0FBaUMsQ0FBQ0MsbUJBQW1CQyxhQUNqR0UsZ0JBQWdCTCxzQkFDaEJNLHdCQUF3Qkosa0JBQWtCSyxNQUFNLENBWHJDWCwyQkFXaUVTO2dCQUVsRixPQUFPQztZQUNUOzs7V0FkbUJWO0VBQWtDWSxhQUFhIn0=