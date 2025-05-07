"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsDirectiveHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
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
var ContentsDirectiveHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(ContentsDirectiveHTMLTransform, HTMLTransform);
    function ContentsDirectiveHTMLTransform() {
        _class_call_check(this, ContentsDirectiveHTMLTransform);
        return _call_super(this, ContentsDirectiveHTMLTransform, arguments);
    }
    _create_class(ContentsDirectiveHTMLTransform, [
        {
            key: "getContentsDirectiveHTMLNode",
            value: function getContentsDirectiveHTMLNode() {
                var htmlNode = this.getHTMLNode(), contentsDirectiveHTMLNode = htmlNode; ///
                return contentsDirectiveHTMLNode;
            }
        }
    ], [
        {
            key: "fromContentsDirectiveHTMLNode",
            value: function fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNde) {
                var htmlNode = contentsDirectiveHTMLNde, contentsDirectiveHTMLTransform = _html.default.fromHTMLNode(ContentsDirectiveHTMLTransform, htmlNode);
                return contentsDirectiveHTMLTransform;
            }
        }
    ]);
    return ContentsDirectiveHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9kaXJlY3RpdmUvY29udGVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRDb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpcy5nZXRIVE1MTm9kZSgpLFxuICAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPSBodG1sTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZShjb250ZW50c0RpcmVjdGl2ZUhUTUxOZGUpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5kZSwgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiZ2V0Q29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwiZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsK0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLDRCQUE0QkYsVUFBVSxHQUFHO2dCQUUvQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMsd0JBQXdCO2dCQUMzRCxJQUFNSixXQUFXSSwwQkFDWEMsaUNBQWlDQyxhQUFhLENBQUNDLFlBQVksQ0FWaERULGdDQVVpRkU7Z0JBRWxHLE9BQU9LO1lBQ1Q7OztXQWJtQlA7RUFBdUNRLGFBQWEifQ==