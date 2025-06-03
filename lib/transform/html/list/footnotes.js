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
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../../../node/html/list/footnotes"));
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
                var parentHTMLNode = divisionHTMLNode; ///
                this.appendTo(parentHTMLNode);
            }
        },
        {
            key: "removeFromDivisionHTMLNode",
            value: function removeFromDivisionHTMLNode(divisionHTMLNode) {
                this.remove();
            }
        }
    ], [
        {
            key: "fromStartAndFootnoteItemHTMLTransforms",
            value: function fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms) {
                var footnotesListHTMLNode = _footnotes.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms), htmlNode = footnotesListHTMLNode, footnotesListHTMLTransform = _html.default.fromHTMLNode(FootnotesListHTMLTransform, htmlNode);
                return footnotesListHTMLTransform;
            }
        }
    ]);
    return FootnotesListHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2Zvb3Rub3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvbGlzdC9mb290bm90ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnRIVE1MTm9kZSA9IGRpdmlzaW9uSFRNTE5vZGU7ICAvLy9cblxuICAgIHRoaXMuYXBwZW5kVG8ocGFyZW50SFRNTE5vZGUpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbURpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKSB7XG4gICAgY29uc3QgZm9vdG5vdGVzTGlzdEhUTUxOb2RlID0gRm9vdG5vdGVzTGlzdEhUTUxOb2RlLmZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgaHRtbE5vZGUgPSBmb290bm90ZXNMaXN0SFRNTE5vZGUsIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZSIsInBhcmVudEhUTUxOb2RlIiwiYXBwZW5kVG8iLCJyZW1vdmVGcm9tRGl2aXNpb25IVE1MTm9kZSIsInJlbW92ZSIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwic3RhcnQiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImZvb3Rub3Rlc0xpc3RIVE1MTm9kZSIsIkZvb3Rub3Rlc0xpc3RIVE1MTm9kZSIsImh0bWxOb2RlIiwiZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFISztnRUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkMsZ0JBQWdCO2dCQUN2QyxJQUFNQyxpQkFBaUJELGtCQUFtQixHQUFHO2dCQUU3QyxJQUFJLENBQUNFLFFBQVEsQ0FBQ0Q7WUFDaEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCSCxnQkFBZ0I7Z0JBQ3pDLElBQUksQ0FBQ0ksTUFBTTtZQUNiOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVDQUF1Q0MsS0FBSyxFQUFFQywwQkFBMEI7Z0JBQzdFLElBQU1DLHdCQUF3QkMsa0JBQXFCLENBQUNKLHNDQUFzQyxDQUFDQyxPQUFPQyw2QkFDNUZHLFdBQVdGLHVCQUNYRyw2QkFBNkJDLGFBQWEsQ0FBQ0MsWUFBWSxDQWQ1Q2YsNEJBY3lFWTtnQkFFMUYsT0FBT0M7WUFDVDs7O1dBakJtQmI7RUFBbUNjLGFBQWEifQ==