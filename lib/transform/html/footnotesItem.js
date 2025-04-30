"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesItemHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../node/html/item/footnote"));
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
var FootnotesItemHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(FootnotesItemHTMLTransform, HTMLTransform);
    function FootnotesItemHTMLTransform() {
        _class_call_check(this, FootnotesItemHTMLTransform);
        return _call_super(this, FootnotesItemHTMLTransform, arguments);
    }
    _create_class(FootnotesItemHTMLTransform, [
        {
            key: "getFootnoteItemHTMLNode",
            value: function getFootnoteItemHTMLNode() {
                var node = this.getNode(), footnoteItemHTMLNode = node; ///
                return footnoteItemHTMLNode;
            }
        }
    ], [
        {
            key: "fromFootnoteHTMLTransformAndIdentifier",
            value: function fromFootnoteHTMLTransformAndIdentifier(footnoteHTMLTransform, identifier, context) {
                var footnoteItemHTMLNode = _footnote.default.fromFootnotesHTMLTransformAndIdentifier(footnoteHTMLTransform, identifier), ascendantNode = footnoteItemHTMLNode, footnotesItemTransform = footnoteHTMLTransform.expand(FootnotesItemTransform, ascendantNode);
                return footnotesItemTransform;
            }
        }
    ]);
    return FootnotesItemHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuaW1wb3J0IEZvb3Rub3RlSXRlbUhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWwvaXRlbS9mb290bm90ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNJdGVtSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRGb290bm90ZUl0ZW1IVE1MTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmb290bm90ZUl0ZW1IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllcihmb290bm90ZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MTm9kZSA9IEZvb3Rub3RlSXRlbUhUTUxOb2RlLmZyb21Gb290bm90ZXNIVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllcihmb290bm90ZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIpLFxuICAgICAgICAgIGFzY2VuZGFudE5vZGUgPSBmb290bm90ZUl0ZW1IVE1MTm9kZSwgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzSXRlbVRyYW5zZm9ybSA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5leHBhbmQoRm9vdG5vdGVzSXRlbVRyYW5zZm9ybSwgYXNjZW5kYW50Tm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzSXRlbVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0l0ZW1IVE1MVHJhbnNmb3JtIiwiZ2V0Rm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3RlSXRlbUhUTUxOb2RlIiwiZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJpZGVudGlmaWVyIiwiY29udGV4dCIsIkZvb3Rub3RlSXRlbUhUTUxOb2RlIiwiZnJvbUZvb3Rub3Rlc0hUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyIiwiYXNjZW5kYW50Tm9kZSIsImZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0iLCJleHBhbmQiLCJGb290bm90ZXNJdGVtVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7MkRBSEs7K0RBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsdUJBQXVCRixNQUFNLEdBQUc7Z0JBRXRDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUNBQXVDQyxxQkFBcUIsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUN0RixJQUFNSix1QkFBdUJLLGlCQUFvQixDQUFDQyx1Q0FBdUMsQ0FBQ0osdUJBQXVCQyxhQUMzR0ksZ0JBQWdCUCxzQkFDaEJRLHlCQUF5Qk4sc0JBQXNCTyxNQUFNLENBQUNDLHdCQUF3Qkg7Z0JBRXBGLE9BQU9DO1lBQ1Q7OztXQWRtQlo7RUFBbUNlLGFBQWEifQ==