"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexAnchorHTMLNode;
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
var IndexAnchorHTMLNode = /*#__PURE__*/ function(AnchorHTMLNode) {
    _inherits(IndexAnchorHTMLNode, AnchorHTMLNode);
    function IndexAnchorHTMLNode() {
        _class_call_check(this, IndexAnchorHTMLNode);
        return _call_super(this, IndexAnchorHTMLNode, arguments);
    }
    _create_class(IndexAnchorHTMLNode, null, [
        {
            key: "fromIdentifier",
            value: function fromIdentifier(identifier) {
                var prepend = _prepends.INDEX_PREPEND, indexAnchorHTMLNode = _html.default.fromNothing(IndexAnchorHTMLNode, prepend, identifier);
                return indexAnchorHTMLNode;
            }
        }
    ]);
    return IndexAnchorHTMLNode;
}(_anchor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBJTkRFWF9QUkVQRU5EIH0gZnJvbSBcIi4uLy4uLy4uL3ByZXBlbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4QW5jaG9ySFRNTE5vZGUgZXh0ZW5kcyBBbmNob3JIVE1MTm9kZSB7XG4gIHN0YXRpYyBmcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IElOREVYX1BSRVBFTkQsXG4gICAgICAgICAgaW5kZXhBbmNob3JIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKEluZGV4QW5jaG9ySFRNTE5vZGUsIHByZXBlbmQsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGluZGV4QW5jaG9ySFRNTE5vZGU7XG4gIH1cbn0iXSwibmFtZXMiOlsiSW5kZXhBbmNob3JIVE1MTm9kZSIsImZyb21JZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInByZXBlbmQiLCJJTkRFWF9QUkVQRU5EIiwiaW5kZXhBbmNob3JIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJBbmNob3JIVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7NkRBQ007d0JBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVU7Z0JBQzlCLElBQU1DLFVBQVVDLHVCQUFhLEVBQ3ZCQyxzQkFBc0JDLGFBQVEsQ0FBQ0MsV0FBVyxDQUgvQlAscUJBR3FERyxTQUFTRDtnQkFFL0UsT0FBT0c7WUFDVDs7O1dBTm1CTDtFQUE0QlEsZUFBYyJ9