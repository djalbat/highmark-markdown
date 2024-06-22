"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesItemReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require("../node/markdown/footnotesItem"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var FootnotesItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnotesItemReplacement, Replacement);
    var _super = _create_super(FootnotesItemReplacement);
    function FootnotesItemReplacement() {
        _class_call_check(this, FootnotesItemReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(FootnotesItemReplacement, [
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
                return _replacement.default.fromNode(FootnotesItemReplacement, node, context);
            }
        },
        {
            key: "fromFootnoteReplacementAndIdentifier",
            value: function fromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier) {
                var footnoteMarkdownNode = footnoteReplacement.getFootnoteMarkdownNode(), footnotesItemMarkdownNode = _footnotesItem.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnotesItemMarkdownNode, footnotesItemReplacement = footnoteReplacement.expand(FootnotesItemReplacement, ascendantNode);
                return footnotesItemReplacement;
            }
        }
    ]);
    return FootnotesItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5cbmltcG9ydCBGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBnZXRGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7IHJldHVybiBSZXBsYWNlbWVudC5mcm9tTm9kZShGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQsIG5vZGUsIGNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllcihmb290bm90ZVJlcGxhY2VtZW50LCBpZGVudGlmaWVyKSB7XG4gICAgICBjb25zdCBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyKGZvb3Rub3RlTWFya2Rvd25Ob2RlLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGFzY2VuZGFudE5vZGUgPSBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZXhwYW5kKEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCwgYXNjZW5kYW50Tm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiZ2V0Rm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSIsImZyb21Ob2RlIiwiY29udGV4dCIsIlJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsImlkZW50aWZpZXIiLCJmb290bm90ZU1hcmtkb3duTm9kZSIsImdldEZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyIiwiYXNjZW5kYW50Tm9kZSIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImV4cGFuZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSkc7b0VBRWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLDRCQUE0QkYsTUFBTSxHQUFHO2dCQUUzQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNILElBQUksRUFBRUksT0FBTztnQkFBSSxPQUFPQyxvQkFBVyxDQUFDRixRQUFRLENBUnpDTCwwQkFRb0VFLE1BQU1JO1lBQVU7OztZQUVoR0UsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDQyxtQkFBbUIsRUFBRUMsVUFBVTtnQkFDdkUsSUFBTUMsdUJBQXVCRixvQkFBb0JHLHVCQUF1QixJQUNsRVIsNEJBQTRCUyxzQkFBeUIsQ0FBQ0Msc0NBQXNDLENBQUNILHNCQUFzQkQsYUFDbkhLLGdCQUFnQlgsMkJBQ2hCWSwyQkFBMkJQLG9CQUFvQlEsTUFBTSxDQWQ1Q2pCLDBCQWN1RWU7Z0JBRXhGLE9BQU9DO1lBQ1Q7OztXQWpCbUJoQjtFQUFpQ08sb0JBQVcifQ==