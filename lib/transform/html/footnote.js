"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteHTMLTransform;
    }
});
var _occamdom = require("occam-dom");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var FootnoteHTMLTransform = /*#__PURE__*/ function(Transform) {
    _inherits(FootnoteHTMLTransform, Transform);
    function FootnoteHTMLTransform() {
        _class_call_check(this, FootnoteHTMLTransform);
        return _call_super(this, FootnoteHTMLTransform, arguments);
    }
    _create_class(FootnoteHTMLTransform, [
        {
            key: "removeFromDivisionHTMLNode",
            value: function removeFromDivisionHTMLNode(divisionHTMLNode, context) {
                var parentNode = divisionHTMLNode; ///
                _get(_get_prototype_of(FootnoteHTMLTransform.prototype), "removeFrom", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromFootnoteHTMLNode",
            value: function fromFootnoteHTMLNode(footnoteHTMLNde, context) {
                var node = footnoteHTMLNde, footnoteHTMLTransform = _occamdom.Transform.fromNode(FootnoteHTMLTransform, node, context);
                return footnoteHTMLTransform;
            }
        }
    ]);
    return FootnoteHTMLTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICByZW1vdmVGcm9tRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRpdmlzaW9uSFRNTE5vZGU7ICAvLy9cblxuICAgIHN1cGVyLnJlbW92ZUZyb20ocGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTmRlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGZvb3Rub3RlSFRNTE5kZSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGUoRm9vdG5vdGVIVE1MVHJhbnNmb3JtLCBub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZUhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJyZW1vdmVGcm9tRGl2aXNpb25IVE1MTm9kZSIsImRpdmlzaW9uSFRNTE5vZGUiLCJjb250ZXh0IiwicGFyZW50Tm9kZSIsInJlbW92ZUZyb20iLCJmcm9tRm9vdG5vdGVIVE1MTm9kZSIsImZvb3Rub3RlSFRNTE5kZSIsIm5vZGUiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7d0JBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkMsZ0JBQWdCLEVBQUVDLE9BQU87Z0JBQ2xELElBQU1DLGFBQWFGLGtCQUFtQixHQUFHO2dCQUV6Qyx1QkFKaUJGLGtDQUlYSyxjQUFOLElBQUssYUFBWUQsWUFBWUQ7WUFDL0I7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCQyxlQUFlLEVBQUVKLE9BQU87Z0JBQ2xELElBQU1LLE9BQU9ELGlCQUNQRSx3QkFBd0JDLG1CQUFTLENBQUNDLFFBQVEsQ0FUL0JYLHVCQVN1RFEsTUFBTUw7Z0JBRTlFLE9BQU9NO1lBQ1Q7OztXQVptQlQ7RUFBOEJVLG1CQUFTIn0=