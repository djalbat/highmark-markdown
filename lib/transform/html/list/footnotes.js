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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2Zvb3Rub3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvbGlzdC9mb290bm90ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgZ2V0Rm9vdG5vdGVzTGlzdEhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpcy5nZXRIVE1MTm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MTm9kZSA9IGh0bWxOb2RlOyAvLy9cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTE5vZGU7XG4gIH1cblxuICBhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudEhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5hcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSk7XG4gIH1cblxuICByZW1vdmVGcm9tRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBmb290bm90ZXNMaXN0SFRNTE5vZGUgPSBGb290bm90ZXNMaXN0SFRNTE5vZGUuZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICBodG1sTm9kZSA9IGZvb3Rub3Rlc0xpc3RIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21IVE1MTm9kZShGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJnZXRGb290bm90ZXNMaXN0SFRNTE5vZGUiLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiZm9vdG5vdGVzTGlzdEhUTUxOb2RlIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZSIsInBhcmVudEhUTUxOb2RlIiwiYXBwZW5kVG8iLCJyZW1vdmVGcm9tRGl2aXNpb25IVE1MTm9kZSIsInJlbW92ZSIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwic3RhcnQiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsIkZvb3Rub3Rlc0xpc3RIVE1MTm9kZSIsImZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7MkRBSEs7Z0VBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsd0JBQXdCRixVQUFVLEdBQUc7Z0JBRTNDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCQyxnQkFBZ0I7Z0JBQ3ZDLElBQU1DLGlCQUFpQkQsa0JBQW1CLEdBQUc7Z0JBRTdDLElBQUksQ0FBQ0UsUUFBUSxDQUFDRDtZQUNoQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJILGdCQUFnQjtnQkFDekMsSUFBSSxDQUFDSSxNQUFNO1lBQ2I7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUNBQXVDQyxLQUFLLEVBQUVDLDBCQUEwQjtnQkFDN0UsSUFBTVQsd0JBQXdCVSxrQkFBcUIsQ0FBQ0gsc0NBQXNDLENBQUNDLE9BQU9DLDZCQUM1RlgsV0FBV0UsdUJBQ1hXLDZCQUE2QkMsYUFBYSxDQUFDQyxZQUFZLENBckI1Q2pCLDRCQXFCeUVFO2dCQUUxRixPQUFPYTtZQUNUOzs7V0F4Qm1CZjtFQUFtQ2dCLGFBQWEifQ==