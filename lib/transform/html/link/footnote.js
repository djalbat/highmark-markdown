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
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _division = /*#__PURE__*/ _interop_require_default(require("../../../node/html/division"));
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
                var htmlNode = this.getHTMLNode(), footnoteLinkHHTMLNode = htmlNode; ///
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
                var htmlNode = footnoteLinkHTMLNode, footnoteLinkHTMLTransform = _html.default.fromHTMLNode(FootnoteLinkHTMLTransform, htmlNode);
                return footnoteLinkHTMLTransform;
            }
        }
    ]);
    return FootnoteLinkHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5rL2Zvb3Rub3RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuaW1wb3J0IERpdmlzaW9uSFRNTE5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvaHRtbC9kaXZpc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldERpdmlzaW9uSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlTGlua0hUTUxOb2RlKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmZpbmRBbmNlc3Rvck5vZGUoKGFuY2VzdG9yTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5jZXN0b3JOb2RlRGl2aXNpb25IVE1MTm9kZSA9IChhbmNlc3Rvck5vZGUgaW5zdGFuY2VvZiBEaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGFuY2VzdG9yTm9kZURpdmlzaW9uSFRNTE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIGdldENvbnRhaW5pbmdIVE1MTm9kZSgpIHtcbiAgICBsZXQgY29udGFpbmluZ0hUTUxOb2RlO1xuXG4gICAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlTGlua0hUTUxOb2RlKCk7XG5cbiAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5zb21lQW5jZXN0b3JOb2RlKChhbmNlc3Rvck5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yTm9kZURpdmlzaW9uSFRNTE5vZGUgPSAoYW5jZXN0b3JOb2RlIGluc3RhbmNlb2YgRGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIGlmIChhbmNlc3Rvck5vZGVEaXZpc2lvbkhUTUxOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb250YWluaW5nSFRNTE5vZGUgPSBhbmNlc3Rvck5vZGU7ICAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBjb250YWluaW5nSFRNTE5vZGU7XG4gIH1cblxuICBnZXRGb290bm90ZUxpbmtIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXMuZ2V0SFRNTE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtISFRNTE5vZGUgPSBodG1sTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rSEhUTUxOb2RlO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlTGlua0hUTUxOb2RlKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGUoZm9vdG5vdGVMaW5rSFRNTE5vZGUpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSIsImdldERpdmlzaW9uSFRNTE5vZGUiLCJmb290bm90ZUxpbmtIVE1MTm9kZSIsImdldEZvb3Rub3RlTGlua0hUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZSIsImZpbmRBbmNlc3Rvck5vZGUiLCJhbmNlc3Rvck5vZGUiLCJhbmNlc3Rvck5vZGVEaXZpc2lvbkhUTUxOb2RlIiwiRGl2aXNpb25IVE1MTm9kZSIsImdldENvbnRhaW5pbmdIVE1MTm9kZSIsImNvbnRhaW5pbmdIVE1MTm9kZSIsInNvbWVBbmNlc3Rvck5vZGUiLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiZm9vdG5vdGVMaW5rSEhUTUxOb2RlIiwiaWRlbnRpZmllciIsImNvbnRleHQiLCJmcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7MkRBSEs7K0RBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuREMsbUJBQW1CRixxQkFBcUJHLGdCQUFnQixDQUFDLFNBQUNDO29CQUN4RCxJQUFNQywrQkFBZ0NELEFBQVksWUFBWkEsY0FBd0JFLGlCQUFnQjtvQkFFOUUsSUFBSUQsOEJBQThCO3dCQUNoQyxPQUFPO29CQUNUO2dCQUNGO2dCQUVOLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTVIsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6REQscUJBQXFCUyxnQkFBZ0IsQ0FBQyxTQUFDTDtvQkFDckMsSUFBTUMsK0JBQWdDRCxBQUFZLFlBQVpBLGNBQXdCRSxpQkFBZ0I7b0JBRTlFLElBQUlELDhCQUE4Qjt3QkFDaEMsT0FBTztvQkFDVDtvQkFFQUcscUJBQXFCSixjQUFlLEdBQUc7Z0JBQ3pDO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBUCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLHdCQUF3QkYsVUFBVSxHQUFHO2dCQUUzQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQU1kLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuRFksYUFBYWIscUJBQXFCYSxVQUFVLENBQUNDO2dCQUVuRCxPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QmYsb0JBQW9CO2dCQUNsRCxJQUFNVSxXQUFXVixzQkFDWGdCLDRCQUE0QkMsYUFBYSxDQUFDQyxZQUFZLENBaEQzQ3BCLDJCQWdEdUVZO2dCQUV4RixPQUFPTTtZQUNUOzs7V0FuRG1CbEI7RUFBa0NtQixhQUFhIn0=