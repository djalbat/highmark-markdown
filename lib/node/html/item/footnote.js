"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../../node/html/anchor"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var FootnoteItemHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(FootnoteItemHTMLNode, HTMLNode);
    function FootnoteItemHTMLNode() {
        _class_call_check(this, FootnoteItemHTMLNode);
        return _call_super(this, FootnoteItemHTMLNode, arguments);
    }
    _create_class(FootnoteItemHTMLNode, null, [
        {
            key: "fromFootnotesHTMLTransformAndIdentifier",
            value: function fromFootnotesHTMLTransformAndIdentifier(footnoteHTMLTransform, identifier) {
                var anchorHTMLNode = _anchor.default.fromIdentifier(identifier), paragraphHTMLNode = footnoteHTMLTransform.getParagraphHTMLNode(), childNodes = [
                    anchorHTMLNode,
                    paragraphHTMLNode
                ], footnotesItemHTMLNode = _html.default.fromChildNodes(FootnoteItemHTMLNode, childNodes);
                return footnotesItemHTMLNode;
            }
        }
    ]);
    return FootnoteItemHTMLNode;
}(_html.default);
_define_property(FootnoteItemHTMLNode, "tagName", "li");
_define_property(FootnoteItemHTMLNode, "className", "footnote");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUl0ZW1IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiZm9vdG5vdGVcIjtcblxuICBzdGF0aWMgZnJvbUZvb3Rub3Rlc0hUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSwgaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGFuY2hvckhUTUxOb2RlID0gQW5jaG9ySFRNTE5vZGUuZnJvbUlkZW50aWZpZXIoaWRlbnRpZmllciksXG4gICAgICAgICAgcGFyYWdyYXBoSFRNTE5vZGUgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm0uZ2V0UGFyYWdyYXBoSFRNTE5vZGUoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgYW5jaG9ySFRNTE5vZGUsXG4gICAgICAgICAgICBwYXJhZ3JhcGhIVE1MTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZm9vdG5vdGVzSXRlbUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkTm9kZXMoRm9vdG5vdGVJdGVtSFRNTE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0l0ZW1IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSXRlbUhUTUxOb2RlIiwiZnJvbUZvb3Rub3Rlc0hUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiaWRlbnRpZmllciIsImFuY2hvckhUTUxOb2RlIiwiQW5jaG9ySFRNTE5vZGUiLCJmcm9tSWRlbnRpZmllciIsInBhcmFncmFwaEhUTUxOb2RlIiwiZ2V0UGFyYWdyYXBoSFRNTE5vZGUiLCJjaGlsZE5vZGVzIiwiZm9vdG5vdGVzSXRlbUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhBOzZEQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBS1pDLEtBQUFBO21CQUFQLFNBQU9BLHdDQUF3Q0MscUJBQXFCLEVBQUVDLFVBQVU7Z0JBQzlFLElBQU1DLGlCQUFpQkMsZUFBYyxDQUFDQyxjQUFjLENBQUNILGFBQy9DSSxvQkFBb0JMLHNCQUFzQk0sb0JBQW9CLElBQzlEQyxhQUFhO29CQUNYTDtvQkFDQUc7aUJBQ0QsRUFDREcsd0JBQXdCQyxhQUFRLENBQUNDLGNBQWMsQ0FacENaLHNCQVkyRFM7Z0JBRTVFLE9BQU9DO1lBQ1Q7OztXQWZtQlY7RUFBNkJXLGFBQVE7QUFDeEQsaUJBRG1CWCxzQkFDWmEsV0FBVTtBQUVqQixpQkFIbUJiLHNCQUdaYyxhQUFZIn0=