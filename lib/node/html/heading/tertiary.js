"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TertiaryHeadingHTMLNode;
    }
});
var _heading = /*#__PURE__*/ _interop_require_default(require("../../../node/html/heading"));
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
var TertiaryHeadingHTMLNode = /*#__PURE__*/ function(HeadingHTMLNode) {
    _inherits(TertiaryHeadingHTMLNode, HeadingHTMLNode);
    function TertiaryHeadingHTMLNode() {
        _class_call_check(this, TertiaryHeadingHTMLNode);
        return _call_super(this, TertiaryHeadingHTMLNode, arguments);
    }
    _create_class(TertiaryHeadingHTMLNode, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _heading.default.fromNothing(TertiaryHeadingHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _heading.default.fromOuterNode(TertiaryHeadingHTMLNode, outerNode);
            }
        }
    ]);
    return TertiaryHeadingHTMLNode;
}(_heading.default);
_define_property(TertiaryHeadingHTMLNode, "lines", 2.25);
_define_property(TertiaryHeadingHTMLNode, "tagName", "h3");
_define_property(TertiaryHeadingHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy90ZXJ0aWFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhlYWRpbmdIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2hlYWRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVydGlhcnlIZWFkaW5nSFRNTE5vZGUgZXh0ZW5kcyBIZWFkaW5nSFRNTE5vZGUge1xuICBzdGF0aWMgbGluZXMgPSAyLjI1O1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJoM1wiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhlYWRpbmdIVE1MTm9kZS5mcm9tTm90aGluZyhUZXJ0aWFyeUhlYWRpbmdIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhlYWRpbmdIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKFRlcnRpYXJ5SGVhZGluZ0hUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiVGVydGlhcnlIZWFkaW5nSFRNTE5vZGUiLCJmcm9tTm90aGluZyIsIkhlYWRpbmdIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJsaW5lcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBT1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxnQkFBZSxDQUFDRCxXQUFXLENBUHRDRDtZQU9pRTs7O1lBRTdFRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGdCQUFlLENBQUNDLGFBQWEsQ0FUbkRILHlCQVM2RUk7WUFBWTs7O1dBVHpGSjtFQUFnQ0UsZ0JBQWU7QUFDbEUsaUJBRG1CRix5QkFDWkssU0FBUTtBQUVmLGlCQUhtQkwseUJBR1pNLFdBQVU7QUFFakIsaUJBTG1CTix5QkFLWk8sYUFBWSJ9