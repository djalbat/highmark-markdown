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
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../../node/html/item/footnote"));
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
                var htmlNode = this.getHTMLNode(), footnoteItemHTMLNode = htmlNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pdGVtL2Zvb3Rub3RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuaW1wb3J0IEZvb3Rub3RlSXRlbUhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvaXRlbS9mb290bm90ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldEZvb3Rub3RlSXRlbUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpcy5nZXRIVE1MTm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxOb2RlID0gaHRtbE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSXRlbUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllcihsaW5lSFRNTFRyYW5zZm9ybSwgaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxOb2RlID0gRm9vdG5vdGVJdGVtSFRNTE5vZGUuZnJvbUxpbmVUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGxpbmVIVE1MVHJhbnNmb3JtLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICBhc2NlbmRhbnROb2RlID0gZm9vdG5vdGVJdGVtSFRNTE5vZGUsIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSXRlbVRyYW5zZm9ybSA9IGxpbmVIVE1MVHJhbnNmb3JtLmV4cGFuZChGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLCBhc2NlbmRhbnROb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUl0ZW1UcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiZ2V0Rm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJmcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIiLCJsaW5lSFRNTFRyYW5zZm9ybSIsImlkZW50aWZpZXIiLCJGb290bm90ZUl0ZW1IVE1MTm9kZSIsImFzY2VuZGFudE5vZGUiLCJmb290bm90ZUl0ZW1UcmFuc2Zvcm0iLCJleHBhbmQiLCJIVE1MVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFISzsrREFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyx1QkFBdUJGLFVBQVUsR0FBRztnQkFFMUMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQ0FBa0NDLGlCQUFpQixFQUFFQyxVQUFVO2dCQUNwRSxJQUFNSCx1QkFBdUJJLGlCQUFvQixDQUFDSCxpQ0FBaUMsQ0FBQ0MsbUJBQW1CQyxhQUNqR0UsZ0JBQWdCTCxzQkFDaEJNLHdCQUF3Qkosa0JBQWtCSyxNQUFNLENBWHJDWCwyQkFXaUVTO2dCQUVsRixPQUFPQztZQUNUOzs7V0FkbUJWO0VBQWtDWSxhQUFhIn0=