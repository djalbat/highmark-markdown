"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../../node/html/list/footnotes"));
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
var FootnotesListHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(FootnotesListHTMLTransform, HTMLTransform);
    function FootnotesListHTMLTransform() {
        _class_call_check(this, FootnotesListHTMLTransform);
        return _call_super(this, FootnotesListHTMLTransform, arguments);
    }
    _create_class(FootnotesListHTMLTransform, [
        {
            key: "appendToDivisionHTMLNode",
            value: function appendToDivisionHTMLNode(divisionHTMLNode) {
                var parentHTMLNode = divisionHTMLNode;
                this.appendTo(parentHTMLNode);
            }
        }
    ], [
        {
            key: "fromStartAndFootnoteItemHTMLTransforms",
            value: function fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms) {
                var footnotesListHTMLNode = _footnotes.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms), htmlNode = footnotesListHTMLNode, footnotesListHTMLTransform = _html.default.fromHTNLNOde(FootnotesListHTMLTransform, htmlNode);
                return footnotesListHTMLTransform;
            }
        }
    ]);
    return FootnotesListHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbC9saXN0L2Zvb3Rub3Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudEhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZTtcblxuICAgIHRoaXMuYXBwZW5kVG8ocGFyZW50SFRNTE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RIVE1MTm9kZSA9IEZvb3Rub3Rlc0xpc3RIVE1MTm9kZS5mcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgIGh0bWxOb2RlID0gZm9vdG5vdGVzTGlzdEhUTUxOb2RlLCAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsImFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZSIsImRpdmlzaW9uSFRNTE5vZGUiLCJwYXJlbnRIVE1MTm9kZSIsImFwcGVuZFRvIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJzdGFydCIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVzTGlzdEhUTUxOb2RlIiwiRm9vdG5vdGVzTGlzdEhUTUxOb2RlIiwiaHRtbE5vZGUiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFROTE5PZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhLO2dFQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQUEsQUFBTUEsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCQyxnQkFBZ0I7Z0JBQ3ZDLElBQU1DLGlCQUFpQkQ7Z0JBRXZCLElBQUksQ0FBQ0UsUUFBUSxDQUFDRDtZQUNoQjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSx1Q0FBdUNDLEtBQUssRUFBRUMsMEJBQTBCO2dCQUM3RSxJQUFNQyx3QkFBd0JDLGtCQUFxQixDQUFDSixzQ0FBc0MsQ0FBQ0MsT0FBT0MsNkJBQzVGRyxXQUFXRix1QkFDWEcsNkJBQTZCQyxhQUFhLENBQUNDLFlBQVksQ0FWNUNiLDRCQVV5RVU7Z0JBRTFGLE9BQU9DO1lBQ1Q7OztXQWJtQlg7RUFBbUNZLGFBQWEifQ==