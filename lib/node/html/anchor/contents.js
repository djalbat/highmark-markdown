"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsAnchorHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../html"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../../node/html/anchor"));
var _prepends = require("../../../prepends");
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
var ContentsAnchorHTMLNode = /*#__PURE__*/ function(AnchorHTMLNode) {
    _inherits(ContentsAnchorHTMLNode, AnchorHTMLNode);
    function ContentsAnchorHTMLNode() {
        _class_call_check(this, ContentsAnchorHTMLNode);
        return _call_super(this, ContentsAnchorHTMLNode, arguments);
    }
    _create_class(ContentsAnchorHTMLNode, null, [
        {
            key: "fromIdentifier",
            value: function fromIdentifier(identifier) {
                var prepend = _prepends.CONTENTS_PREPEND, contentsAnchorHTMLNode = _html.default.fromNothing(ContentsAnchorHTMLNode, prepend, identifier);
                return contentsAnchorHTMLNode;
            }
        }
    ]);
    return ContentsAnchorHTMLNode;
}(_anchor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19QUkVQRU5EIH0gZnJvbSBcIi4uLy4uLy4uL3ByZXBlbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzQW5jaG9ySFRNTE5vZGUgZXh0ZW5kcyBBbmNob3JIVE1MTm9kZSB7XG4gIHN0YXRpYyBmcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IENPTlRFTlRTX1BSRVBFTkQsXG4gICAgICAgICAgY29udGVudHNBbmNob3JIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKENvbnRlbnRzQW5jaG9ySFRNTE5vZGUsIHByZXBlbmQsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzQW5jaG9ySFRNTE5vZGU7XG4gIH1cbn0iXSwibmFtZXMiOlsiQ29udGVudHNBbmNob3JIVE1MTm9kZSIsImZyb21JZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInByZXBlbmQiLCJDT05URU5UU19QUkVQRU5EIiwiY29udGVudHNBbmNob3JIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJBbmNob3JIVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7NkRBQ007d0JBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUM5QixJQUFNQyxVQUFVQywwQkFBZ0IsRUFDMUJDLHlCQUF5QkMsYUFBUSxDQUFDQyxXQUFXLENBSGxDUCx3QkFHMkRHLFNBQVNEO2dCQUVyRixPQUFPRztZQUNUOzs7V0FObUJMO0VBQStCUSxlQUFjIn0=