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
var FootnotesItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnotesItemReplacement, Replacement);
    function FootnotesItemReplacement() {
        _class_call_check(this, FootnotesItemReplacement);
        return _call_super(this, FootnotesItemReplacement, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNJdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgZ2V0Rm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkgeyByZXR1cm4gUmVwbGFjZW1lbnQuZnJvbU5vZGUoRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LCBub2RlLCBjb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgY29uc3QgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZVJlcGxhY2VtZW50LmdldEZvb3Rub3RlTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVzTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllciksXG4gICAgICAgICAgICBhc2NlbmRhbnROb2RlID0gZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQgPSBmb290bm90ZVJlcGxhY2VtZW50LmV4cGFuZChGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQsIGFzY2VuZGFudE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImdldEZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tTm9kZSIsImNvbnRleHQiLCJSZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllciIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJnZXRGb290bm90ZU1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tRm9vdG5vdGVzTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllciIsImFzY2VuZGFudE5vZGUiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJleHBhbmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O2tFQUhHO29FQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLDRCQUE0QkYsTUFBTSxHQUFHO2dCQUUzQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNILElBQUksRUFBRUksT0FBTztnQkFBSSxPQUFPQyxvQkFBVyxDQUFDRixRQUFRLENBUnpDTCwwQkFRb0VFLE1BQU1JO1lBQVU7OztZQUVoR0UsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDQyxtQkFBbUIsRUFBRUMsVUFBVTtnQkFDdkUsSUFBTUMsdUJBQXVCRixvQkFBb0JHLHVCQUF1QixJQUNsRVIsNEJBQTRCUyxzQkFBeUIsQ0FBQ0Msc0NBQXNDLENBQUNILHNCQUFzQkQsYUFDbkhLLGdCQUFnQlgsMkJBQ2hCWSwyQkFBMkJQLG9CQUFvQlEsTUFBTSxDQWQ1Q2pCLDBCQWN1RWU7Z0JBRXhGLE9BQU9DO1lBQ1Q7OztXQWpCbUJoQjtFQUFpQ08sb0JBQVcifQ==