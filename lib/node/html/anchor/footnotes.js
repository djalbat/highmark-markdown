"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesAnchorHTMLNode;
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
var FootnotesAnchorHTMLNode = /*#__PURE__*/ function(AnchorHTMLNode) {
    _inherits(FootnotesAnchorHTMLNode, AnchorHTMLNode);
    function FootnotesAnchorHTMLNode() {
        _class_call_check(this, FootnotesAnchorHTMLNode);
        return _call_super(this, FootnotesAnchorHTMLNode, arguments);
    }
    _create_class(FootnotesAnchorHTMLNode, null, [
        {
            key: "fromIdentifier",
            value: function fromIdentifier(identifier) {
                var prepend = _prepends.FOOTNOTES_PREPEND, footnotesAnchorHTMLNode = _html.default.fromNothing(FootnotesAnchorHTMLNode, prepend, identifier);
                return footnotesAnchorHTMLNode;
            }
        }
    ]);
    return FootnotesAnchorHTMLNode;
}(_anchor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yL2Zvb3Rub3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9odG1sXCI7XG5pbXBvcnQgQW5jaG9ySFRNTE5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvaHRtbC9hbmNob3JcIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVTX1BSRVBFTkQgfSBmcm9tIFwiLi4vLi4vLi4vcHJlcGVuZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzQW5jaG9ySFRNTE5vZGUgZXh0ZW5kcyBBbmNob3JIVE1MTm9kZSB7XG4gIHN0YXRpYyBmcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFU19QUkVQRU5ELFxuICAgICAgICAgIGZvb3Rub3Rlc0FuY2hvckhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRm9vdG5vdGVzQW5jaG9ySFRNTE5vZGUsIHByZXBlbmQsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0FuY2hvckhUTUxOb2RlO1xuICB9XG59Il0sIm5hbWVzIjpbIkZvb3Rub3Rlc0FuY2hvckhUTUxOb2RlIiwiZnJvbUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicHJlcGVuZCIsIkZPT1ROT1RFU19QUkVQRU5EIiwiZm9vdG5vdGVzQW5jaG9ySFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwiQW5jaG9ySFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBOzZEQUNNO3dCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFDOUIsSUFBTUMsVUFBVUMsMkJBQWlCLEVBQzNCQywwQkFBMEJDLGFBQVEsQ0FBQ0MsV0FBVyxDQUhuQ1AseUJBRzZERyxTQUFTRDtnQkFFdkYsT0FBT0c7WUFDVDs7O1dBTm1CTDtFQUFnQ1EsZUFBYyJ9