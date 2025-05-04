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
                var node = this.getNode(), divisionHTMLNode = node; ///;
                return divisionHTMLNode;
            }
        },
        {
            key: "appendToTopmostHTMLNode",
            value: function appendToTopmostHTMLNode(topmostHTMLNode) {
                var node = this.getNode(), childNode = node, parentNode = topmostHTMLNode; ///
                parentNode.appendChildNode(childNode);
            }
        },
        {
            key: "resolve",
            value: function resolve(divisionHTMLNodes, pageNumber, context) {
                var divisionHTMLNode = this.getDivisionHTMLNode();
                pageNumber = divisionHTMLNode.resolve(divisionHTMLNodes, pageNumber, context);
                return pageNumber;
            }
        }
    ], [
        {
            key: "fromDivisionHTMLNode",
            value: function fromDivisionHTMLNode(divisionHTMLNode) {
                var htmlNode = divisionHTMLNode, paragraphHTMLTransform = _html.default.fromHTNLNOde(DivisionHTMLTransform, htmlNode);
                return paragraphHTMLTransform;
            }
        }
    ]);
    return DivisionHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldERpdmlzaW9uSFRNTE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBub2RlOyAgLy8vO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBhcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY2hpbGROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRvcG1vc3RIVE1MTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgcmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgcGFnZU51bWJlciwgY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGUoKTtcblxuICAgIHBhZ2VOdW1iZXIgPSBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmUoZGl2aXNpb25IVE1MTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gZGl2aXNpb25IVE1MTm9kZSwgLy8vXG4gICAgICAgICAgcGFyYWdyYXBoSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKERpdmlzaW9uSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJnZXREaXZpc2lvbkhUTUxOb2RlIiwibm9kZSIsImdldE5vZGUiLCJkaXZpc2lvbkhUTUxOb2RlIiwiYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJjaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGROb2RlIiwicmVzb2x2ZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwicGFnZU51bWJlciIsImNvbnRleHQiLCJmcm9tRGl2aXNpb25IVE1MTm9kZSIsImh0bWxOb2RlIiwicGFyYWdyYXBoSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFROTE5PZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsbUJBQW1CRixNQUFPLElBQUk7Z0JBRXBDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyxlQUFlO2dCQUNyQyxJQUFNSixPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkksWUFBWUwsTUFDWk0sYUFBYUYsaUJBQWlCLEdBQUc7Z0JBRXZDRSxXQUFXQyxlQUFlLENBQUNGO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGlCQUFpQixFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQzVDLElBQU1ULG1CQUFtQixJQUFJLENBQUNILG1CQUFtQjtnQkFFakRXLGFBQWFSLGlCQUFpQk0sT0FBTyxDQUFDQyxtQkFBbUJDLFlBQVlDO2dCQUVyRSxPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQlYsZ0JBQWdCO2dCQUMxQyxJQUFNVyxXQUFXWCxrQkFDWFkseUJBQXlCQyxhQUFhLENBQUNDLFlBQVksQ0ExQnhDbEIsdUJBMEJnRWU7Z0JBRWpGLE9BQU9DO1lBQ1Q7OztXQTdCbUJoQjtFQUE4QmlCLGFBQWEifQ==