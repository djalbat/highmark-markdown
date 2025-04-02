"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexAnchorReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../node/markdown/anchor"));
var _prepends = require("../prepends");
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
var IndexAnchorReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexAnchorReplacement, Replacement);
    function IndexAnchorReplacement() {
        _class_call_check(this, IndexAnchorReplacement);
        return _call_super(this, IndexAnchorReplacement, arguments);
    }
    _create_class(IndexAnchorReplacement, [
        {
            key: "getAnchorMarkdownNode",
            value: function getAnchorMarkdownNode() {
                var node = this.getNode(), anchorMarkdownNode = node; ///
                return anchorMarkdownNode;
            }
        }
    ], [
        {
            key: "fromPageNumber",
            value: function fromPageNumber(pageNumber, context) {
                var prepend = _prepends.INDEX_PREPEND, identifier = pageNumber, anchorMarkdownNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), node = anchorMarkdownNode, tokens = [], indexAnchorReplacement = _replacement.default.fromNodeAndTokens(IndexAnchorReplacement, node, tokens);
                return indexAnchorReplacement;
            }
        }
    ]);
    return IndexAnchorReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleEFuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuaW1wb3J0IEFuY2hvck1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9hbmNob3JcIjtcblxuaW1wb3J0IHsgSU5ERVhfUFJFUEVORCB9IGZyb20gXCIuLi9wcmVwZW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleEFuY2hvclJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBnZXRBbmNob3JNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBhbmNob3JNYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBJTkRFWF9QUkVQRU5ELFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBwYWdlTnVtYmVyLCAgLy8vXG4gICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gQW5jaG9yTWFya2Rvd25Ob2RlLmZyb21QcmVwZW5kQW5kSWRlbnRpZmllcihwcmVwZW5kLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICBub2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gW10sXG4gICAgICAgICAgaW5kZXhBbmNob3JSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKEluZGV4QW5jaG9yUmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gaW5kZXhBbmNob3JSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4QW5jaG9yUmVwbGFjZW1lbnQiLCJnZXRBbmNob3JNYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImFuY2hvck1hcmtkb3duTm9kZSIsImZyb21QYWdlTnVtYmVyIiwicGFnZU51bWJlciIsImNvbnRleHQiLCJwcmVwZW5kIiwiSU5ERVhfUFJFUEVORCIsImlkZW50aWZpZXIiLCJBbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tUHJlcGVuZEFuZElkZW50aWZpZXIiLCJ0b2tlbnMiLCJpbmRleEFuY2hvclJlcGxhY2VtZW50IiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTEc7NkRBQ087d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxxQkFBcUJGLE1BQU8sR0FBRztnQkFFckMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ3ZDLElBQU1DLFVBQVVDLHVCQUFhLEVBQ3ZCQyxhQUFhSixZQUNiRixxQkFBcUJPLGVBQWtCLENBQUNDLHdCQUF3QixDQUFDSixTQUFTRSxhQUMxRVIsT0FBT0Usb0JBQ1BTLFNBQVMsRUFBRSxFQUNYQyx5QkFBeUJDLG9CQUFXLENBQUNDLGlCQUFpQixDQWQzQ2hCLHdCQWNvRUUsTUFBTVc7Z0JBRTNGLE9BQU9DO1lBQ1Q7OztXQWpCbUJkO0VBQStCZSxvQkFBVyJ9