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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
    _create_class(FootnotesItemReplacement, null, [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Replacement;
                return (_Replacement = _replacement.default).fromNode.apply(_Replacement, [
                    FootnotesItemReplacement,
                    node,
                    context
                ].concat(_to_consumable_array(remainingArguments)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5cbmltcG9ydCBGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBSZXBsYWNlbWVudC5mcm9tTm9kZShGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQsIG5vZGUsIGNvbnRleHQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyKGZvb3Rub3RlUmVwbGFjZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVSZXBsYWNlbWVudC5nZXRGb290bm90ZU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgYXNjZW5kYW50Tm9kZSA9IGZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50ID0gZm9vdG5vdGVSZXBsYWNlbWVudC5leHBhbmQoRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LCBhc2NlbmRhbnROb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJmcm9tTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwicmVtYWluaW5nQXJndW1lbnRzIiwiUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiaWRlbnRpZmllciIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUiLCJmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyIiwiYXNjZW5kYW50Tm9kZSIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImV4cGFuZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSkc7b0VBRWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLE9BQU87Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFBV0M7Z0JBQVAsT0FBT0EsQ0FBQUEsZUFBQUEsb0JBQVcsRUFBQ0osUUFBUSxDQUFwQkksTUFBQUEsY0FBQUE7b0JBRDVDTDtvQkFDMkZFO29CQUFNQztpQkFBK0IsQ0FBcEZFLE9BQThELHFCQUFHRDtZQUFxQjs7O1lBRTlJRSxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNDLG1CQUFtQixFQUFFQyxVQUFVO2dCQUN2RSxJQUFNQyx1QkFBdUJGLG9CQUFvQkcsdUJBQXVCLElBQ2xFQyw0QkFBNEJDLHNCQUF5QixDQUFDQyxzQ0FBc0MsQ0FBQ0osc0JBQXNCRCxhQUNuSE0sZ0JBQWdCSCwyQkFDaEJJLDJCQUEyQlIsb0JBQW9CUyxNQUFNLENBUDVDaEIsMEJBT3VFYztnQkFFeEYsT0FBT0M7WUFDVDs7O1dBVm1CZjtFQUFpQ0ssb0JBQVcifQ==