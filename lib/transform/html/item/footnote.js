"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../../node/html/item/footnote"));
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
var FootnoteItemHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(FootnoteItemHTMLTransform, HTMLTransform);
    function FootnoteItemHTMLTransform() {
        _class_call_check(this, FootnoteItemHTMLTransform);
        return _call_super(this, FootnoteItemHTMLTransform, arguments);
    }
    _create_class(FootnoteItemHTMLTransform, [
        {
            key: "getFootnoteItemHTMLNode",
            value: function getFootnoteItemHTMLNode() {
                var htmlNode = this.getHTMLNode(), footnoteItemHTMLNode = htmlNode; ///
                return footnoteItemHTMLNode;
            }
        }
    ], [
        {
            key: "fromParagraphHTMLNOdeAndIdentifier",
            value: function fromParagraphHTMLNOdeAndIdentifier(paragraphHTMLNode, identifier) {
                var footnoteItemHTMLNode = _footnote.default.fromParagraphTMLNodeAndIdentifier(paragraphHTMLNode, identifier), htmlNode = footnoteItemHTMLNode, footnoteItemTransform = _html.default.fromHTMLNode(FootnoteItemHTMLTransform, htmlNode);
                return footnoteItemTransform;
            }
        }
    ]);
    return FootnoteItemHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pdGVtL2Zvb3Rub3RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuaW1wb3J0IEZvb3Rub3RlSXRlbUhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvaXRlbS9mb290bm90ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldEZvb3Rub3RlSXRlbUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpcy5nZXRIVE1MTm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxOb2RlID0gaHRtbE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSXRlbUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIocGFyYWdyYXBoSFRNTE5vZGUsIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MTm9kZSA9IEZvb3Rub3RlSXRlbUhUTUxOb2RlLmZyb21QYXJhZ3JhcGhUTUxOb2RlQW5kSWRlbnRpZmllcihwYXJhZ3JhcGhIVE1MTm9kZSwgaWRlbnRpZmllciksXG4gICAgICAgICAgaHRtbE5vZGUgPSBmb290bm90ZUl0ZW1IVE1MTm9kZSwgLy8vXG4gICAgICAgICAgZm9vdG5vdGVJdGVtVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSXRlbVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJnZXRGb290bm90ZUl0ZW1IVE1MTm9kZSIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJmb290bm90ZUl0ZW1IVE1MTm9kZSIsImZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIiLCJwYXJhZ3JhcGhIVE1MTm9kZSIsImlkZW50aWZpZXIiLCJGb290bm90ZUl0ZW1IVE1MTm9kZSIsImZyb21QYXJhZ3JhcGhUTUxOb2RlQW5kSWRlbnRpZmllciIsImZvb3Rub3RlSXRlbVRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhLOytEQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsdUJBQXVCRixVQUFVLEdBQUc7Z0JBRTFDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxpQkFBaUIsRUFBRUMsVUFBVTtnQkFDckUsSUFBTUgsdUJBQXVCSSxpQkFBb0IsQ0FBQ0MsaUNBQWlDLENBQUNILG1CQUFtQkMsYUFDakdMLFdBQVdFLHNCQUNYTSx3QkFBd0JDLGFBQWEsQ0FBQ0MsWUFBWSxDQVh2Q1osMkJBV21FRTtnQkFFcEYsT0FBT1E7WUFDVDs7O1dBZG1CVjtFQUFrQ1csYUFBYSJ9