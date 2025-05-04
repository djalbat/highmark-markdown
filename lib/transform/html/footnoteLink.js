"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteLinkHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _division = /*#__PURE__*/ _interop_require_default(require("../../node/html/division"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var FootnoteLinkHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(FootnoteLinkHTMLTransform, HTMLTransform);
    function FootnoteLinkHTMLTransform() {
        _class_call_check(this, FootnoteLinkHTMLTransform);
        return _call_super(this, FootnoteLinkHTMLTransform, arguments);
    }
    _create_class(FootnoteLinkHTMLTransform, [
        {
            key: "getDivisionHTMLNode",
            value: function getDivisionHTMLNode() {
                var footnoteLinkHTMLNode = this.getFootnoteLinkHTMLNode(), divisionHTMLNode = footnoteLinkHTMLNode.findAncestorNode(function(ancestorNode) {
                    var ancestorNodeDivisionHTMLNode = _instanceof(ancestorNode, _division.default);
                    if (ancestorNodeDivisionHTMLNode) {
                        return true;
                    }
                });
                return divisionHTMLNode;
            }
        },
        {
            key: "getContainingHTMLNode",
            value: function getContainingHTMLNode() {
                var containingHTMLNode;
                var footnoteLinkHTMLNode = this.getFootnoteLinkHTMLNode();
                footnoteLinkHTMLNode.someAncestorNode(function(ancestorNode) {
                    var ancestorNodeDivisionHTMLNode = _instanceof(ancestorNode, _division.default);
                    if (ancestorNodeDivisionHTMLNode) {
                        return true;
                    }
                    containingHTMLNode = ancestorNode; ///
                });
                return containingHTMLNode;
            }
        },
        {
            key: "getFootnoteLinkHTMLNode",
            value: function getFootnoteLinkHTMLNode() {
                var node = this.getNode(), footnoteLinkHHTMLNode = node; ///
                return footnoteLinkHHTMLNode;
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var footnoteLinkHTMLNode = this.getFootnoteLinkHTMLNode(), identifier = footnoteLinkHTMLNode.identifier(context);
                return identifier;
            }
        }
    ], [
        {
            key: "fromFootnoteLinkHTMLNode",
            value: function fromFootnoteLinkHTMLNode(footnoteLinkHTMLNode) {
                var htmlNode = footnoteLinkHTMLNode, footnoteLinkHTMLTransform = _html.default.fromHTNLNOde(FootnoteLinkHTMLTransform, htmlNode);
                return footnoteLinkHTMLTransform;
            }
        }
    ]);
    return FootnoteLinkHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZUxpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbFwiXG5pbXBvcnQgRGl2aXNpb25IVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL2RpdmlzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgZ2V0RGl2aXNpb25IVE1MTm9kZSgpIHtcbiAgICBjb25zdCBmb290bm90ZUxpbmtIVE1MTm9kZSA9IHRoaXMuZ2V0Rm9vdG5vdGVMaW5rSFRNTE5vZGUoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gZm9vdG5vdGVMaW5rSFRNTE5vZGUuZmluZEFuY2VzdG9yTm9kZSgoYW5jZXN0b3JOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmNlc3Rvck5vZGVEaXZpc2lvbkhUTUxOb2RlID0gKGFuY2VzdG9yTm9kZSBpbnN0YW5jZW9mIERpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoYW5jZXN0b3JOb2RlRGl2aXNpb25IVE1MTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgZ2V0Q29udGFpbmluZ0hUTUxOb2RlKCkge1xuICAgIGxldCBjb250YWluaW5nSFRNTE5vZGU7XG5cbiAgICBjb25zdCBmb290bm90ZUxpbmtIVE1MTm9kZSA9IHRoaXMuZ2V0Rm9vdG5vdGVMaW5rSFRNTE5vZGUoKTtcblxuICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlLnNvbWVBbmNlc3Rvck5vZGUoKGFuY2VzdG9yTm9kZSkgPT4ge1xuICAgICAgY29uc3QgYW5jZXN0b3JOb2RlRGl2aXNpb25IVE1MTm9kZSA9IChhbmNlc3Rvck5vZGUgaW5zdGFuY2VvZiBEaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgaWYgKGFuY2VzdG9yTm9kZURpdmlzaW9uSFRNTE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5pbmdIVE1MTm9kZSA9IGFuY2VzdG9yTm9kZTsgIC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5pbmdIVE1MTm9kZTtcbiAgfVxuXG4gIGdldEZvb3Rub3RlTGlua0hUTUxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtISFRNTE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmb290bm90ZUxpbmtISFRNTE5vZGU7XG4gIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZUxpbmtIVE1MTm9kZSA9IHRoaXMuZ2V0Rm9vdG5vdGVMaW5rSFRNTE5vZGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rSFRNTE5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZUxpbmtIVE1MTm9kZShmb290bm90ZUxpbmtIVE1MTm9kZSkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gZm9vdG5vdGVMaW5rSFRNTE5vZGUsICAvLy9cbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFROTE5PZGUoRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwiZ2V0RGl2aXNpb25IVE1MTm9kZSIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwiZ2V0Rm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZmluZEFuY2VzdG9yTm9kZSIsImFuY2VzdG9yTm9kZSIsImFuY2VzdG9yTm9kZURpdmlzaW9uSFRNTE5vZGUiLCJEaXZpc2lvbkhUTUxOb2RlIiwiZ2V0Q29udGFpbmluZ0hUTUxOb2RlIiwiY29udGFpbmluZ0hUTUxOb2RlIiwic29tZUFuY2VzdG9yTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiZm9vdG5vdGVMaW5rSEhUTUxOb2RlIiwiaWRlbnRpZmllciIsImNvbnRleHQiLCJmcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJodG1sTm9kZSIsImZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTkxOT2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFISzsrREFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuREMsbUJBQW1CRixxQkFBcUJHLGdCQUFnQixDQUFDLFNBQUNDO29CQUN4RCxJQUFNQywrQkFBZ0NELEFBQVksWUFBWkEsY0FBd0JFLGlCQUFnQjtvQkFFOUUsSUFBSUQsOEJBQThCO3dCQUNoQyxPQUFPO29CQUNUO2dCQUNGO2dCQUVOLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTVIsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6REQscUJBQXFCUyxnQkFBZ0IsQ0FBQyxTQUFDTDtvQkFDckMsSUFBTUMsK0JBQWdDRCxBQUFZLFlBQVpBLGNBQXdCRSxpQkFBZ0I7b0JBRTlFLElBQUlELDhCQUE4Qjt3QkFDaEMsT0FBTztvQkFDVDtvQkFFQUcscUJBQXFCSixjQUFlLEdBQUc7Z0JBQ3pDO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBUCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLHdCQUF3QkYsTUFBTSxHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQU1kLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuRFksYUFBYWIscUJBQXFCYSxVQUFVLENBQUNDO2dCQUVuRCxPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QmYsb0JBQW9CO2dCQUNsRCxJQUFNZ0IsV0FBV2hCLHNCQUNYaUIsNEJBQTRCQyxhQUFhLENBQUNDLFlBQVksQ0FoRDNDckIsMkJBZ0R1RWtCO2dCQUV4RixPQUFPQztZQUNUOzs7V0FuRG1CbkI7RUFBa0NvQixhQUFhIn0=