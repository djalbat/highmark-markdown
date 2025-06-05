"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexItemHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _item = /*#__PURE__*/ _interop_require_default(require("../../../node/html/item"));
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
var IndexItemHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(IndexItemHTMLTransform, HTMLTransform);
    function IndexItemHTMLTransform() {
        _class_call_check(this, IndexItemHTMLTransform);
        return _call_super(this, IndexItemHTMLTransform, arguments);
    }
    _create_class(IndexItemHTMLTransform, [
        {
            key: "getIndexItemHTMLNode",
            value: function getIndexItemHTMLNode() {
                var htmlNode = this.getHTMLNode(), indexItemHTMLNode = htmlNode; ///
                return indexItemHTMLNode;
            }
        }
    ], [
        {
            key: "fromIndexItem",
            value: function fromIndexItem(indexItem) {
                var indexItemHTMLMode = _item.default.fromIndexItem(indexItem), htmlNode = indexItemHTMLMode, indexItemHTMLTransform = _html.default.fromHTMLNode(IndexItemHTMLTransform, htmlNode);
                return indexItemHTMLTransform;
            }
        }
    ]);
    return IndexItemHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pdGVtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBJbmRleEl0ZW1IVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhJdGVtSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRJbmRleEl0ZW1IVE1MTm9kZSgpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXMuZ2V0SFRNTE5vZGUoKSxcbiAgICAgICAgICBpbmRleEl0ZW1IVE1MTm9kZSA9IGh0bWxOb2RlOyAvLy9cblxuICAgIHJldHVybiBpbmRleEl0ZW1IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kZXhJdGVtKGluZGV4SXRlbSkge1xuICAgIGNvbnN0IGluZGV4SXRlbUhUTUxNb2RlID0gSW5kZXhJdGVtSFRNTE5vZGUuZnJvbUluZGV4SXRlbShpbmRleEl0ZW0pLFxuICAgICAgICAgIGh0bWxOb2RlID0gaW5kZXhJdGVtSFRNTE1vZGUsIC8vL1xuICAgICAgICAgIGluZGV4SXRlbUhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21IVE1MTm9kZShJbmRleEl0ZW1IVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kZXhJdGVtSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SXRlbUhUTUxUcmFuc2Zvcm0iLCJnZXRJbmRleEl0ZW1IVE1MTm9kZSIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJpbmRleEl0ZW1IVE1MTm9kZSIsImZyb21JbmRleEl0ZW0iLCJpbmRleEl0ZW0iLCJpbmRleEl0ZW1IVE1MTW9kZSIsIkluZGV4SXRlbUhUTUxOb2RlIiwiaW5kZXhJdGVtSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhLOzJEQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxvQkFBb0JGLFVBQVUsR0FBRztnQkFFdkMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUM1QixJQUFNQyxvQkFBb0JDLGFBQWlCLENBQUNILGFBQWEsQ0FBQ0MsWUFDcERKLFdBQVdLLG1CQUNYRSx5QkFBeUJDLGFBQWEsQ0FBQ0MsWUFBWSxDQVh4Q1gsd0JBV2lFRTtnQkFFbEYsT0FBT087WUFDVDs7O1dBZG1CVDtFQUErQlUsYUFBYSJ9