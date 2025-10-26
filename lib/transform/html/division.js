"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
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
var DivisionHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(DivisionHTMLTransform, HTMLTransform);
    function DivisionHTMLTransform() {
        _class_call_check(this, DivisionHTMLTransform);
        return _call_super(this, DivisionHTMLTransform, arguments);
    }
    _create_class(DivisionHTMLTransform, [
        {
            key: "getDivisionHTMLNode",
            value: function getDivisionHTMLNode() {
                var htmlNode = this.getHTMLNode(), divisionHTMLNode = htmlNode; ///;
                return divisionHTMLNode;
            }
        },
        {
            key: "appendToTopmostHTMLNode",
            value: function appendToTopmostHTMLNode(topmostHTMLNode) {
                var htmlNode = this.getHTMLNode(), childNode = htmlNode, parentNode = topmostHTMLNode; ///
                parentNode.appendChildNode(childNode);
            }
        },
        {
            key: "paginate",
            value: function paginate(divisionHTMLNodes, context) {
                var divisionHTMLNode = this.getDivisionHTMLNode();
                divisionHTMLNode.paginate(divisionHTMLNodes, context);
            }
        }
    ], [
        {
            key: "fromDivisionHTMLNode",
            value: function fromDivisionHTMLNode(divisionHTMLNode) {
                var htmlNode = divisionHTMLNode, paragraphHTMLTransform = _html.default.fromHTMLNode(DivisionHTMLTransform, htmlNode);
                return paragraphHTMLTransform;
            }
        }
    ]);
    return DivisionHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldERpdmlzaW9uSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IGh0bWxOb2RlOyAgLy8vO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBhcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXMuZ2V0SFRNTE5vZGUoKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBodG1sTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRvcG1vc3RIVE1MTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgcGFnaW5hdGUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlKCk7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlLnBhZ2luYXRlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBkaXZpc2lvbkhUTUxOb2RlLCAvLy9cbiAgICAgICAgICBwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoRGl2aXNpb25IVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsImdldERpdmlzaW9uSFRNTE5vZGUiLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZSIsImFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlIiwidG9wbW9zdEhUTUxOb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInBhZ2luYXRlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJjb250ZXh0IiwiZnJvbURpdmlzaW9uSFRNTE5vZGUiLCJwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLG1CQUFtQkYsVUFBVyxJQUFJO2dCQUV4QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3QkMsZUFBZTtnQkFDckMsSUFBTUosV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JJLFlBQVlMLFVBQ1pNLGFBQWFGLGlCQUFpQixHQUFHO2dCQUV2Q0UsV0FBV0MsZUFBZSxDQUFDRjtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxpQkFBaUIsRUFBRUMsT0FBTztnQkFDakMsSUFBTVIsbUJBQW1CLElBQUksQ0FBQ0gsbUJBQW1CO2dCQUVqREcsaUJBQWlCTSxRQUFRLENBQUNDLG1CQUFtQkM7WUFDL0M7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCVCxnQkFBZ0I7Z0JBQzFDLElBQU1GLFdBQVdFLGtCQUNYVSx5QkFBeUJDLGFBQWEsQ0FBQ0MsWUFBWSxDQXhCeENoQix1QkF3QmdFRTtnQkFFakYsT0FBT1k7WUFDVDs7O1dBM0JtQmQ7RUFBOEJlLGFBQWEifQ==