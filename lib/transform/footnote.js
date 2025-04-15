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
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
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
                return (_Replacement = _.default).fromNode.apply(_Replacement, [
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
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi9cIjtcblxuaW1wb3J0IHsgZm9vdG5vdGVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBudW1iZXIpIHtcbiAgICBzdXBlcihub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgc2V0TnVtYmVyKG51bWJlcikge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICB9XG5cbiAgaXNOdW1iZXJlZCgpIHtcbiAgICBjb25zdCBudW1iZXJlZCA9ICh0aGlzLm51bWJlciAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbnVtYmVyZWQ7XG4gIH1cblxuICBpc1VubnVtYmVyZWQoKSB7XG4gICAgY29uc3QgbnVtYmVyZWQgPSB0aGlzLmlzTnVtYmVyZWQoKSxcbiAgICAgICAgICB1bm51bWJlcmVkID0gIW51bWJlcmVkO1xuXG4gICAgcmV0dXJuIHVubnVtYmVyZWQ7XG4gIH1cblxuICBnZXRGb290bm90ZU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gZm9vdG5vdGVNYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBSZXBsYWNlbWVudC5mcm9tTm9kZShGb290bm90ZVJlcGxhY2VtZW50LCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSB7XG4gICAgY29uc3Qgbm9kZSA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRlbnROb2RlID0gZm9vdG5vdGVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuY29udHJhY3QoRm9vdG5vdGVSZXBsYWNlbWVudCwgZGVzY2VuZGVudE5vZGUsIG51bWJlcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlUmVwbGFjZW1lbnQiLCJub2RlIiwidG9rZW5zIiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwic2V0TnVtYmVyIiwiaXNOdW1iZXJlZCIsIm51bWJlcmVkIiwiaXNVbm51bWJlcmVkIiwidW5udW1iZXJlZCIsImdldEZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZnJvbU5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJSZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiZGVzY2VuZGVudE5vZGUiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiY29udHJhY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3VEQUpHO3FCQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTthQUFBQSxvQkFDUEMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE1BQU07Z0NBRGJIOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFNQzs7UUFFWixNQUFLQyxNQUFNLEdBQUdBOzs7a0JBSkdIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVGLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVksSUFBSSxDQUFDSixNQUFNLEtBQUs7Z0JBRWxDLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsV0FBVyxJQUFJLENBQUNELFVBQVUsSUFDMUJHLGFBQWEsQ0FBQ0Y7Z0JBRXBCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsT0FBTyxJQUFJLENBQUNVLE9BQU8sSUFDbkJDLHVCQUF1QlgsTUFBTyxHQUFHO2dCQUV2QyxPQUFPVztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNaLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdhLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFBV0M7Z0JBQVAsT0FBT0EsQ0FBQUEsZUFBQUEsU0FBVyxFQUFDRixRQUFRLE9BQXBCRSxjQUFBQTtvQkFuQ25DZjtvQkFtQzZFQztpQkFBNEIsQ0FBdEVjLE9BQWdELHFCQUFHRDtZQUFxQjs7O1lBRXZIRSxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLDhCQUE4QjtnQkFDdEUsSUFBTWhCLE9BQU9nQiwrQkFBK0JOLE9BQU8sSUFDN0NDLHVCQUF1Qk0sSUFBQUEsbUNBQTRCLEVBQUNqQixPQUNwRGtCLGlCQUFpQlAsc0JBQ2pCVCxTQUFTLE1BQ1RpQixzQkFBc0JILCtCQUErQkksUUFBUSxDQTFDbERyQixxQkEwQ3dFbUIsZ0JBQWdCaEI7Z0JBRXpHLE9BQU9pQjtZQUNUOzs7V0E3Q21CcEI7RUFBNEJlLFNBQVcifQ==