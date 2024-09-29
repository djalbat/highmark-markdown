"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _query = require("../utilities/query");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var FootnoteReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnoteReplacement, Replacement);
    function FootnoteReplacement(node, tokens, number) {
        _class_call_check(this, FootnoteReplacement);
        var _this;
        _this = _call_super(this, FootnoteReplacement, [
            node,
            tokens
        ]);
        _this.number = number;
        return _this;
    }
    _create_class(FootnoteReplacement, [
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "setNumber",
            value: function setNumber(number) {
                this.number = number;
            }
        },
        {
            key: "isNumbered",
            value: function isNumbered() {
                var numbered = this.number !== null;
                return numbered;
            }
        },
        {
            key: "isUnnumbered",
            value: function isUnnumbered() {
                var numbered = this.isNumbered(), unnumbered = !numbered;
                return unnumbered;
            }
        },
        {
            key: "getFootnoteMarkdownNode",
            value: function getFootnoteMarkdownNode() {
                var node = this.getNode(), footnoteMarkdownNode = node; ///
                return footnoteMarkdownNode;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _Replacement;
                return (_Replacement = _replacement.default).fromNode.apply(_Replacement, [
                    FootnoteReplacement,
                    node
                ].concat(_to_consumable_array(remainingArguments)));
            }
        },
        {
            key: "fromFootnoteSubDivisionReplacement",
            value: function fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement) {
                var node = footnoteSubDivisionReplacement.getNode(), footnoteMarkdownNode = (0, _query.footnoteMarkdownNodeFromNode)(node), descendentNode = footnoteMarkdownNode, number = null, footnoteReplacement = footnoteSubDivisionReplacement.contract(FootnoteReplacement, descendentNode, number);
                return footnoteReplacement;
            }
        }
    ]);
    return FootnoteReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgeyBmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIG51bWJlcikge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBpc051bWJlcmVkKCkge1xuICAgIGNvbnN0IG51bWJlcmVkID0gKHRoaXMubnVtYmVyICE9PSBudWxsKTtcblxuICAgIHJldHVybiBudW1iZXJlZDtcbiAgfVxuXG4gIGlzVW5udW1iZXJlZCgpIHtcbiAgICBjb25zdCBudW1iZXJlZCA9IHRoaXMuaXNOdW1iZXJlZCgpLFxuICAgICAgICAgIHVubnVtYmVyZWQgPSAhbnVtYmVyZWQ7XG5cbiAgICByZXR1cm4gdW5udW1iZXJlZDtcbiAgfVxuXG4gIGdldEZvb3Rub3RlTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBmb290bm90ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIFJlcGxhY2VtZW50LmZyb21Ob2RlKEZvb3Rub3RlUmVwbGFjZW1lbnQsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpIHtcbiAgICBjb25zdCBub2RlID0gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZGVzY2VuZGVudE5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5jb250cmFjdChGb290bm90ZVJlcGxhY2VtZW50LCBkZXNjZW5kZW50Tm9kZSwgbnVtYmVyKTtcblxuICAgIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVSZXBsYWNlbWVudCIsIm5vZGUiLCJ0b2tlbnMiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJpc051bWJlcmVkIiwibnVtYmVyZWQiLCJpc1VubnVtYmVyZWQiLCJ1bm51bWJlcmVkIiwiZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUiLCJnZXROb2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJmcm9tTm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIlJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJkZXNjZW5kZW50Tm9kZSIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJjb250cmFjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSkc7cUJBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLG9DQUFOO2NBQU1BO2FBQUFBLG9CQUNQQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTTtnQ0FEYkg7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQU1DOztRQUVaLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFKR0g7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUYsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBWSxJQUFJLENBQUNKLE1BQU0sS0FBSztnQkFFbEMsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxXQUFXLElBQUksQ0FBQ0QsVUFBVSxJQUMxQkcsYUFBYSxDQUFDRjtnQkFFcEIsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxPQUFPLElBQUksQ0FBQ1UsT0FBTyxJQUNuQkMsdUJBQXVCWCxNQUFPLEdBQUc7Z0JBRXZDLE9BQU9XO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU1osSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2EscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQUFXQztnQkFBUCxPQUFPQSxDQUFBQSxlQUFBQSxvQkFBVyxFQUFDRixRQUFRLE9BQXBCRSxjQUFBQTtvQkFuQ25DZjtvQkFtQzZFQztpQkFBNEIsQ0FBdEVjLE9BQWdELHFCQUFHRDtZQUFxQjs7O1lBRXZIRSxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLDhCQUE4QjtnQkFDdEUsSUFBTWhCLE9BQU9nQiwrQkFBK0JOLE9BQU8sSUFDN0NDLHVCQUF1Qk0sSUFBQUEsbUNBQTRCLEVBQUNqQixPQUNwRGtCLGlCQUFpQlAsc0JBQ2pCVCxTQUFTLE1BQ1RpQixzQkFBc0JILCtCQUErQkksUUFBUSxDQTFDbERyQixxQkEwQ3dFbUIsZ0JBQWdCaEI7Z0JBRXpHLE9BQU9pQjtZQUNUOzs7V0E3Q21CcEI7RUFBNEJlLG9CQUFXIn0=