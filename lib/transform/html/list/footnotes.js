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
            key: "getFootnotesListHTMLNode",
            value: function getFootnotesListHTMLNode() {
                var htmlNode = this.getHTMLNode(), footnotesListHTMLNode = htmlNode; ///
                return footnotesListHTMLNode;
            }
        },
        {
            key: "appendToDivisionHTMLNode",
            value: function appendToDivisionHTMLNode(divisionHTMLNode) {
                var parentHTMLNode = divisionHTMLNode; ///
                this.appendTo(parentHTMLNode);
            }
        }
    ], [
        {
            key: "fromStartAndFootnoteItemHTMLTransforms",
            value: function fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms) {
                var footnotesListHTMLTransform = null;
                var footnoteItemHTMLTransformsLength = footnoteItemHTMLTransforms.length;
                if (footnoteItemHTMLTransformsLength > 0) {
                    var footnotesListHTMLNode = _footnotes.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms), htmlNode = footnotesListHTMLNode; ///
                    footnotesListHTMLTransform = _html.default.fromHTMLNode(FootnotesListHTMLTransform, htmlNode);
                }
                return footnotesListHTMLTransform;
            }
        }
    ]);
    return FootnotesListHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2Zvb3Rub3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvbGlzdC9mb290bm90ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgZ2V0Rm9vdG5vdGVzTGlzdEhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpcy5nZXRIVE1MTm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MTm9kZSA9IGh0bWxOb2RlOyAvLy9cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTE5vZGU7XG4gIH1cblxuICBhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudEhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5hcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZm9vdG5vdGVzTGlzdEhUTUxOb2RlID0gRm9vdG5vdGVzTGlzdEhUTUxOb2RlLmZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgICBodG1sTm9kZSA9IGZvb3Rub3Rlc0xpc3RIVE1MTm9kZTsgLy8vXG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsImdldEZvb3Rub3Rlc0xpc3RIVE1MTm9kZSIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJmb290bm90ZXNMaXN0SFRNTE5vZGUiLCJhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUiLCJkaXZpc2lvbkhUTUxOb2RlIiwicGFyZW50SFRNTE5vZGUiLCJhcHBlbmRUbyIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwic3RhcnQiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJGb290bm90ZXNMaXN0SFRNTE5vZGUiLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFISztnRUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLHdCQUF3QkYsVUFBVSxHQUFHO2dCQUUzQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkMsZ0JBQWdCO2dCQUN2QyxJQUFNQyxpQkFBaUJELGtCQUFtQixHQUFHO2dCQUU3QyxJQUFJLENBQUNFLFFBQVEsQ0FBQ0Q7WUFDaEI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsdUNBQXVDQyxLQUFLLEVBQUVDLDBCQUEwQjtnQkFDN0UsSUFBSUMsNkJBQTZCO2dCQUVqQyxJQUFNQyxtQ0FBbUNGLDJCQUEyQkcsTUFBTTtnQkFFMUUsSUFBSUQsbUNBQW1DLEdBQUc7b0JBQ3hDLElBQU1ULHdCQUF3Qlcsa0JBQXFCLENBQUNOLHNDQUFzQyxDQUFDQyxPQUFPQyw2QkFDNUZULFdBQVdFLHVCQUF1QixHQUFHO29CQUUzQ1EsNkJBQTZCSSxhQUFhLENBQUNDLFlBQVksQ0F2QnhDakIsNEJBdUJxRUU7Z0JBQ3RGO2dCQUVBLE9BQU9VO1lBQ1Q7OztXQTNCbUJaO0VBQW1DZ0IsYUFBYSJ9