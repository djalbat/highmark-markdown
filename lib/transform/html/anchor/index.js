"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexAnchorTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../../node/html/anchor/index"));
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
var IndexAnchorTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(IndexAnchorTMLTransform, HTMLTransform);
    function IndexAnchorTMLTransform() {
        _class_call_check(this, IndexAnchorTMLTransform);
        return _call_super(this, IndexAnchorTMLTransform, arguments);
    }
    _create_class(IndexAnchorTMLTransform, [
        {
            key: "appendToTopmostHTMLNode",
            value: function appendToTopmostHTMLNode(topmostHTMLNode) {
                var htmlNode = this.getHTMLNode(), childNode = htmlNode, parentNode = topmostHTMLNode; ///
                parentNode.appendChildNode(childNode);
            }
        }
    ], [
        {
            key: "fromPageNumber",
            value: function fromPageNumber(pageNumber) {
                var identifier = pageNumber, indexAnchorHTMLNode = _index.default.fromIdentifier(identifier), htmlNode = indexAnchorHTMLNode, indexAnchorHTMLTransform = _html.default.fromHTMLNode(IndexAnchorTMLTransform, htmlNode);
                return indexAnchorHTMLTransform;
            }
        }
    ]);
    return IndexAnchorTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9hbmNob3IvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbFwiXG5pbXBvcnQgQ29udGVudHNBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvci9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleEFuY2hvclRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBhcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXMuZ2V0SFRNTE5vZGUoKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBodG1sTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRvcG1vc3RIVE1MTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcGFnZU51bWJlciwgIC8vL1xuICAgICAgICAgIGluZGV4QW5jaG9ySFRNTE5vZGUgPSBDb250ZW50c0FuY2hvckhUTUxOb2RlLmZyb21JZGVudGlmaWVyKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGh0bWxOb2RlID0gaW5kZXhBbmNob3JIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoSW5kZXhBbmNob3JUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEFuY2hvclRNTFRyYW5zZm9ybSIsImFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlIiwidG9wbW9zdEhUTUxOb2RlIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJmcm9tUGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJpZGVudGlmaWVyIiwiaW5kZXhBbmNob3JIVE1MTm9kZSIsIkNvbnRlbnRzQW5jaG9ySFRNTE5vZGUiLCJmcm9tSWRlbnRpZmllciIsImluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhLOzREQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLGVBQWU7Z0JBQ3JDLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxZQUFZRixVQUNaRyxhQUFhSixpQkFBaUIsR0FBRztnQkFFdkNJLFdBQVdDLGVBQWUsQ0FBQ0Y7WUFDN0I7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFDOUIsSUFBTUMsYUFBYUQsWUFDYkUsc0JBQXNCQyxjQUFzQixDQUFDQyxjQUFjLENBQUNILGFBQzVEUCxXQUFXUSxxQkFDWEcsMkJBQTJCQyxhQUFhLENBQUNDLFlBQVksQ0FiMUNoQix5QkFhb0VHO2dCQUVyRixPQUFPVztZQUNUOzs7V0FoQm1CZDtFQUFnQ2UsYUFBYSJ9