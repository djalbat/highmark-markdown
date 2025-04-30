"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesItemTransform;
    }
});
var _occamdom = require("occam-dom");
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../node/markdown/item/footnotes"));
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
var FootnotesItemTransform = /*#__PURE__*/ function(Transform) {
    _inherits(FootnotesItemTransform, Transform);
    function FootnotesItemTransform() {
        _class_call_check(this, FootnotesItemTransform);
        return _call_super(this, FootnotesItemTransform, arguments);
    }
    _create_class(FootnotesItemTransform, [
        {
            key: "getFootnotesItemMarkdownNode",
            value: function getFootnotesItemMarkdownNode() {
                var node = this.getNode(), footnotesItemMarkdownNode = node; ///
                return footnotesItemMarkdownNode;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                return _occamdom.Transform.fromNode(FootnotesItemTransform, node, context);
            }
        },
        {
            key: "fromFootnoteTransformAndIdentifier",
            value: function fromFootnoteTransformAndIdentifier(footnoteTransform, identifier) {
                var footnoteMarkdownNode = footnoteTransform.getFootnoteMarkdownNode(), footnotesItemMarkdownNode = _footnotes.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnotesItemMarkdownNode, footnotesItemTransform = footnoteTransform.expand(FootnotesItemTransform, ascendantNode);
                return footnotesItemTransform;
            }
        }
    ]);
    return FootnotesItemTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vX2xlZ2FjeS9mb290bm90ZXNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2l0ZW0vZm9vdG5vdGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBnZXRGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7IHJldHVybiBUcmFuc2Zvcm0uZnJvbU5vZGUoRm9vdG5vdGVzSXRlbVRyYW5zZm9ybSwgbm9kZSwgY29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlVHJhbnNmb3JtQW5kSWRlbnRpZmllcihmb290bm90ZVRyYW5zZm9ybSwgaWRlbnRpZmllcikge1xuICAgICAgY29uc3QgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZVRyYW5zZm9ybS5nZXRGb290bm90ZU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgYXNjZW5kYW50Tm9kZSA9IGZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzSXRlbVRyYW5zZm9ybSA9IGZvb3Rub3RlVHJhbnNmb3JtLmV4cGFuZChGb290bm90ZXNJdGVtVHJhbnNmb3JtLCBhc2NlbmRhbnROb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZXNJdGVtVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzSXRlbVRyYW5zZm9ybSIsImdldEZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tTm9kZSIsImNvbnRleHQiLCJUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVUcmFuc2Zvcm1BbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVUcmFuc2Zvcm0iLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJnZXRGb290bm90ZU1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tRm9vdG5vdGVzTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllciIsImFzY2VuZGFudE5vZGUiLCJmb290bm90ZXNJdGVtVHJhbnNmb3JtIiwiZXhwYW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt3QkFKSztnRUFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyw0QkFBNEJGLE1BQU0sR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTSCxJQUFJLEVBQUVJLE9BQU87Z0JBQUksT0FBT0MsbUJBQVMsQ0FBQ0YsUUFBUSxDQVJ2Q0wsd0JBUWdFRSxNQUFNSTtZQUFVOzs7WUFFNUZFLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsaUJBQWlCLEVBQUVDLFVBQVU7Z0JBQ25FLElBQU1DLHVCQUF1QkYsa0JBQWtCRyx1QkFBdUIsSUFDaEVSLDRCQUE0QlMsa0JBQXlCLENBQUNDLHNDQUFzQyxDQUFDSCxzQkFBc0JELGFBQ25ISyxnQkFBZ0JYLDJCQUNoQlkseUJBQXlCUCxrQkFBa0JRLE1BQU0sQ0FkeENqQix3QkFjaUVlO2dCQUVsRixPQUFPQztZQUNUOzs7V0FqQm1CaEI7RUFBK0JPLG1CQUFTIn0=