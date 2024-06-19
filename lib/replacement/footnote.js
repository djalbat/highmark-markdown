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
var FootnoteReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnoteReplacement, Replacement);
    var _super = _create_super(FootnoteReplacement);
    function FootnoteReplacement(node, tokens, number) {
        _class_call_check(this, FootnoteReplacement);
        var _this;
        _this = _super.call(this, node, tokens);
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
            value: function fromNode(node, context) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Replacement;
                return (_Replacement = _replacement.default).fromNode.apply(_Replacement, [
                    FootnoteReplacement,
                    node,
                    context
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgeyBmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIG51bWJlcikge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBpc051bWJlcmVkKCkge1xuICAgIGNvbnN0IG51bWJlcmVkID0gKHRoaXMubnVtYmVyICE9PSBudWxsKTtcblxuICAgIHJldHVybiBudW1iZXJlZDtcbiAgfVxuXG4gIGlzVW5udW1iZXJlZCgpIHtcbiAgICBjb25zdCBudW1iZXJlZCA9IHRoaXMuaXNOdW1iZXJlZCgpLFxuICAgICAgICAgIHVubnVtYmVyZWQgPSAhbnVtYmVyZWQ7XG5cbiAgICByZXR1cm4gdW5udW1iZXJlZDtcbiAgfVxuXG4gIGdldEZvb3Rub3RlTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBmb290bm90ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIFJlcGxhY2VtZW50LmZyb21Ob2RlKEZvb3Rub3RlUmVwbGFjZW1lbnQsIG5vZGUsIGNvbnRleHQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpIHtcbiAgICBjb25zdCBub2RlID0gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZGVzY2VuZGVudE5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5jb250cmFjdChGb290bm90ZVJlcGxhY2VtZW50LCBkZXNjZW5kZW50Tm9kZSwgbnVtYmVyKTtcblxuICAgIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVSZXBsYWNlbWVudCIsIm5vZGUiLCJ0b2tlbnMiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJpc051bWJlcmVkIiwibnVtYmVyZWQiLCJpc1VubnVtYmVyZWQiLCJ1bm51bWJlcmVkIiwiZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUiLCJnZXROb2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJmcm9tTm9kZSIsImNvbnRleHQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJSZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiZGVzY2VuZGVudE5vZGUiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiY29udHJhY3QiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKRztxQkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsb0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsb0JBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxNQUFNO2dDQURiSDs7a0NBRVhDLE1BQU1DO1FBRVosTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRixNQUFNO2dCQUNkLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtZQUNoQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFZLElBQUksQ0FBQ0osTUFBTSxLQUFLO2dCQUVsQyxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELFdBQVcsSUFBSSxDQUFDRCxVQUFVLElBQzFCRyxhQUFhLENBQUNGO2dCQUVwQixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULE9BQU8sSUFBSSxDQUFDVSxPQUFPLElBQ25CQyx1QkFBdUJYLE1BQU8sR0FBRztnQkFFdkMsT0FBT1c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTWixJQUFJLEVBQUVhLE9BQU87Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFBV0M7Z0JBQVAsT0FBT0EsQ0FBQUEsZUFBQUEsb0JBQVcsRUFBQ0gsUUFBUSxDQUFwQkcsTUFBQUEsY0FBQUE7b0JBbkM1Q2hCO29CQW1Dc0ZDO29CQUFNYTtpQkFBK0IsQ0FBL0VFLE9BQXlELHFCQUFHRDtZQUFxQjs7O1lBRXpJRSxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLDhCQUE4QjtnQkFDdEUsSUFBTWpCLE9BQU9pQiwrQkFBK0JQLE9BQU8sSUFDN0NDLHVCQUF1Qk8sSUFBQUEsbUNBQTRCLEVBQUNsQixPQUNwRG1CLGlCQUFpQlIsc0JBQ2pCVCxTQUFTLE1BQ1RrQixzQkFBc0JILCtCQUErQkksUUFBUSxDQTFDbER0QixxQkEwQ3dFb0IsZ0JBQWdCakI7Z0JBRXpHLE9BQU9rQjtZQUNUOzs7V0E3Q21CckI7RUFBNEJnQixvQkFBVyJ9