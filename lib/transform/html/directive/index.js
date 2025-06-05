"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexDirectiveHTMLTransform;
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
var IndexDirectiveHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(IndexDirectiveHTMLTransform, HTMLTransform);
    function IndexDirectiveHTMLTransform() {
        _class_call_check(this, IndexDirectiveHTMLTransform);
        return _call_super(this, IndexDirectiveHTMLTransform, arguments);
    }
    _create_class(IndexDirectiveHTMLTransform, [
        {
            key: "getIndexDirectiveHTMLNode",
            value: function getIndexDirectiveHTMLNode() {
                var htmlNode = this.getHTMLNode(), indexDirectiveHTMLNode = htmlNode; ///
                return indexDirectiveHTMLNode;
            }
        }
    ], [
        {
            key: "fromIndexDirectiveHTMLNode",
            value: function fromIndexDirectiveHTMLNode(indexDirectiveHTMLNde) {
                var htmlNode = indexDirectiveHTMLNde, indexDirectiveHTMLTransform = _html.default.fromHTMLNode(IndexDirectiveHTMLTransform, htmlNode);
                return indexDirectiveHTMLTransform;
            }
        }
    ]);
    return IndexDirectiveHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9kaXJlY3RpdmUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRJbmRleERpcmVjdGl2ZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpcy5nZXRIVE1MTm9kZSgpLFxuICAgICAgICAgIGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBodG1sTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gaW5kZXhEaXJlY3RpdmVIVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZShpbmRleERpcmVjdGl2ZUhUTUxOZGUpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IGluZGV4RGlyZWN0aXZlSFRNTE5kZSwgLy8vXG4gICAgICAgICAgaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiZ2V0SW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxOZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsNENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMseUJBQXlCRixVQUFVLEdBQUc7Z0JBRTVDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCQyxxQkFBcUI7Z0JBQ3JELElBQU1KLFdBQVdJLHVCQUNYQyw4QkFBOEJDLGFBQWEsQ0FBQ0MsWUFBWSxDQVY3Q1QsNkJBVTJFRTtnQkFFNUYsT0FBT0s7WUFDVDs7O1dBYm1CUDtFQUFvQ1EsYUFBYSJ9