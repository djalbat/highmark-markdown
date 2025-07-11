"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageNumberTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _pageNumber = /*#__PURE__*/ _interop_require_default(require("../../node/html/pageNumber"));
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
var PageNumberTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(PageNumberTMLTransform, HTMLTransform);
    function PageNumberTMLTransform() {
        _class_call_check(this, PageNumberTMLTransform);
        return _call_super(this, PageNumberTMLTransform, arguments);
    }
    _create_class(PageNumberTMLTransform, [
        {
            key: "getPageNumberHTMLNode",
            value: function getPageNumberHTMLNode() {
                var htmlNode = this.getHTMLNode(), pageNumberHTMLNode = htmlNode; ///
                return pageNumberHTMLNode;
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
            key: "fromPageNumber",
            value: function fromPageNumber(pageNumber) {
                var pageNumberHTMLNode = _pageNumber.default.fromPageNumber(pageNumber), htmlNode = pageNumberHTMLNode, paragraphHTMLTransform = _html.default.fromHTMLNode(PageNumberTMLTransform, htmlNode);
                return paragraphHTMLTransform;
            }
        }
    ]);
    return PageNumberTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9wYWdlTnVtYmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU51bWJlclRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRQYWdlTnVtYmVySFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgcGFnZU51bWJlckhUTUxOb2RlID0gaHRtbE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBwYWdlTnVtYmVySFRNTE5vZGU7XG4gIH1cblxuICBhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudEhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5hcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJIVE1MTm9kZSA9IFBhZ2VOdW1iZXJIVE1MTm9kZS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSxcbiAgICAgICAgICBodG1sTm9kZSA9IHBhZ2VOdW1iZXJIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgcGFyYWdyYXBoSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKFBhZ2VOdW1iZXJUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFnZU51bWJlclRNTFRyYW5zZm9ybSIsImdldFBhZ2VOdW1iZXJIVE1MTm9kZSIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUiLCJkaXZpc2lvbkhUTUxOb2RlIiwicGFyZW50SFRNTE5vZGUiLCJhcHBlbmRUbyIsImZyb21QYWdlTnVtYmVyIiwicGFnZU51bWJlciIsIlBhZ2VOdW1iZXJIVE1MTm9kZSIsInBhcmFncmFwaEhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFISztpRUFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLHFCQUFxQkYsVUFBVyxHQUFHO2dCQUV6QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkMsZ0JBQWdCO2dCQUN2QyxJQUFNQyxpQkFBaUJELGtCQUFtQixHQUFHO2dCQUU3QyxJQUFJLENBQUNFLFFBQVEsQ0FBQ0Q7WUFDaEI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFDOUIsSUFBTU4scUJBQXFCTyxtQkFBa0IsQ0FBQ0YsY0FBYyxDQUFDQyxhQUN2RFIsV0FBV0Usb0JBQ1hRLHlCQUF5QkMsYUFBYSxDQUFDQyxZQUFZLENBakJ4Q2Qsd0JBaUJpRUU7Z0JBRWxGLE9BQU9VO1lBQ1Q7OztXQXBCbUJaO0VBQStCYSxhQUFhIn0=