"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
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
var ContentCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(ContentCSSNode, CSSNode);
    function ContentCSSNode() {
        _class_call_check(this, ContentCSSNode);
        return _call_super(this, ContentCSSNode, arguments);
    }
    _create_class(ContentCSSNode, [
        {
            key: "content",
            value: function content(context) {
                var markdownStyleNode = this.getMarkdownStyleNode(), contentMarkdownStyleNode = markdownStyleNode, content = contentMarkdownStyleNode.content(context);
                return content;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(ContentCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(ContentCSSNode, outerNode);
            }
        }
    ]);
    return ContentCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudENTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZU5vZGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVOb2RlKCksXG4gICAgICAgICAgY29udGVudE1hcmtkb3duU3R5bGVOb2RlID0gbWFya2Rvd25TdHlsZU5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gY29udGVudE1hcmtkb3duU3R5bGVOb2RlLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoQ29udGVudENTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoQ29udGVudENTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50Q1NTTm9kZSIsImNvbnRlbnQiLCJjb250ZXh0IiwibWFya2Rvd25TdHlsZU5vZGUiLCJnZXRNYXJrZG93blN0eWxlTm9kZSIsImNvbnRlbnRNYXJrZG93blN0eWxlTm9kZSIsImZyb21Ob3RoaW5nIiwiQ1NTTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUMsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDQywyQkFBMkJGLG1CQUMzQkYsVUFBVUkseUJBQXlCSixPQUFPLENBQUNDO2dCQUVqRCxPQUFPRDtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0FUOUJOO1lBU2dEOzs7WUFFNURRLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsWUFBTyxDQUFDQyxhQUFhLENBWDNDUixnQkFXNERTO1lBQVk7OztXQVh4RVQ7RUFBdUJPLFlBQU8ifQ==