"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../../node/html/list/index"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../../transform/html/item/index"));
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
var IndexListHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(IndexListHTMLTransform, HTMLTransform);
    function IndexListHTMLTransform() {
        _class_call_check(this, IndexListHTMLTransform);
        return _call_super(this, IndexListHTMLTransform, arguments);
    }
    _create_class(IndexListHTMLTransform, null, [
        {
            key: "fromIndexListAndLetter",
            value: function fromIndexListAndLetter(indexList, letter) {
                var indexListHTMLTransform = null;
                var indexItemHTMLTransforms = indexList.reduceIndexItemByLetter(letter, function(indexItem) {
                    var indexItemHTMLTransform = _index1.default.fromIndexItem(indexItem);
                    return indexItemHTMLTransform;
                }), indexItemHTMLTransformsLength = indexItemHTMLTransforms.length;
                if (indexItemHTMLTransformsLength > 0) {
                    var indexListHTMLNode = _index.default.fromIndexItemHTMLTransforms(indexItemHTMLTransforms), htmlNode = indexListHTMLNode; ///
                    indexListHTMLTransform = _html.default.fromHTMLNode(IndexListHTMLTransform, htmlNode);
                }
                return indexListHTMLTransform;
            }
        }
    ]);
    return IndexListHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBJbmRleExpc3RIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpc3QvaW5kZXhcIjtcbmltcG9ydCBJbmRleEl0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgc3RhdGljIGZyb21JbmRleExpc3RBbmRMZXR0ZXIoaW5kZXhMaXN0LCBsZXR0ZXIpIHtcbiAgICBsZXQgaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyA9IGluZGV4TGlzdC5yZWR1Y2VJbmRleEl0ZW1CeUxldHRlcihsZXR0ZXIsIChpbmRleEl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4SXRlbUhUTUxUcmFuc2Zvcm0gPSBJbmRleEl0ZW1IVE1MVHJhbnNmb3JtLmZyb21JbmRleEl0ZW0oaW5kZXhJdGVtKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluZGV4SXRlbUhUTUxUcmFuc2Zvcm07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5kZXhJdGVtSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBpbmRleEl0ZW1IVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhJdGVtSFRNTFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpbmRleExpc3RIVE1MTm9kZSA9IEluZGV4TGlzdEhUTUxOb2RlLmZyb21JbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyhpbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgICBodG1sTm9kZSA9IGluZGV4TGlzdEhUTUxOb2RlOyAvLy9cblxuICAgICAgaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tSW5kZXhMaXN0QW5kTGV0dGVyIiwiaW5kZXhMaXN0IiwibGV0dGVyIiwiaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSIsImluZGV4SXRlbUhUTUxUcmFuc2Zvcm1zIiwicmVkdWNlSW5kZXhJdGVtQnlMZXR0ZXIiLCJpbmRleEl0ZW0iLCJpbmRleEl0ZW1IVE1MVHJhbnNmb3JtIiwiSW5kZXhJdGVtSFRNTFRyYW5zZm9ybSIsImZyb21JbmRleEl0ZW0iLCJpbmRleEl0ZW1IVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsImluZGV4TGlzdEhUTUxOb2RlIiwiSW5kZXhMaXN0SFRNTE5vZGUiLCJmcm9tSW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMiLCJodG1sTm9kZSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpLOzREQUNJOzZEQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsU0FBUyxFQUFFQyxNQUFNO2dCQUM3QyxJQUFJQyx5QkFBeUI7Z0JBRTdCLElBQU1DLDBCQUEwQkgsVUFBVUksdUJBQXVCLENBQUNILFFBQVEsU0FBQ0k7b0JBQ25FLElBQU1DLHlCQUF5QkMsZUFBc0IsQ0FBQ0MsYUFBYSxDQUFDSDtvQkFFcEUsT0FBT0M7Z0JBQ1QsSUFDQUcsZ0NBQWdDTix3QkFBd0JPLE1BQU07Z0JBRXBFLElBQUlELGdDQUFnQyxHQUFHO29CQUNyQyxJQUFNRSxvQkFBb0JDLGNBQWlCLENBQUNDLDJCQUEyQixDQUFDViwwQkFDbEVXLFdBQVdILG1CQUFtQixHQUFHO29CQUV2Q1QseUJBQXlCYSxhQUFhLENBQUNDLFlBQVksQ0FmcENsQix3QkFlNkRnQjtnQkFDOUU7Z0JBRUEsT0FBT1o7WUFDVDs7O1dBbkJtQko7RUFBK0JpQixhQUFhIn0=