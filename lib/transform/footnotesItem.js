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
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
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
                return _.default.fromNode(FootnotesItemReplacement, node, context);
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
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGVzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuL1wiO1xuaW1wb3J0IEZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIGdldEZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHsgcmV0dXJuIFJlcGxhY2VtZW50LmZyb21Ob2RlKEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCwgbm9kZSwgY29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyKGZvb3Rub3RlUmVwbGFjZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXRGb290bm90ZU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgYXNjZW5kYW50Tm9kZSA9IGZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50ID0gZm9vdG5vdGVSZXBsYWNlbWVudC5leHBhbmQoRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LCBhc2NlbmRhbnROb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJnZXRGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbU5vZGUiLCJjb250ZXh0IiwiUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiaWRlbnRpZmllciIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUiLCJGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJhc2NlbmRhbnROb2RlIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiZXhwYW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozt1REFIRztvRUFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyw0QkFBNEJGLE1BQU0sR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTSCxJQUFJLEVBQUVJLE9BQU87Z0JBQUksT0FBT0MsU0FBVyxDQUFDRixRQUFRLENBUnpDTCwwQkFRb0VFLE1BQU1JO1lBQVU7OztZQUVoR0UsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDQyxtQkFBbUIsRUFBRUMsVUFBVTtnQkFDdkUsSUFBTUMsdUJBQXVCRixvQkFBb0JHLHVCQUF1QixJQUNsRVIsNEJBQTRCUyxzQkFBeUIsQ0FBQ0Msc0NBQXNDLENBQUNILHNCQUFzQkQsYUFDbkhLLGdCQUFnQlgsMkJBQ2hCWSwyQkFBMkJQLG9CQUFvQlEsTUFBTSxDQWQ1Q2pCLDBCQWN1RWU7Z0JBRXhGLE9BQU9DO1lBQ1Q7OztXQWpCbUJoQjtFQUFpQ08sU0FBVyJ9