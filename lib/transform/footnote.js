"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteTransform;
    }
});
var _transform = /*#__PURE__*/ _interop_require_default(require("../transform"));
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
var FootnoteTransform = /*#__PURE__*/ function(Transform) {
    _inherits(FootnoteTransform, Transform);
    function FootnoteTransform(node, tokens, number) {
        _class_call_check(this, FootnoteTransform);
        var _this;
        _this = _call_super(this, FootnoteTransform, [
            node,
            tokens
        ]);
        _this.number = number;
        return _this;
    }
    _create_class(FootnoteTransform, [
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
                var _Transform;
                return (_Transform = _transform.default).fromNode.apply(_Transform, [
                    FootnoteTransform,
                    node
                ].concat(_to_consumable_array(remainingArguments)));
            }
        },
        {
            key: "fromFootnoteSubDivisionTransform",
            value: function fromFootnoteSubDivisionTransform(footnoteSubDivisionTransform) {
                var node = footnoteSubDivisionTransform.getNode(), footnoteMarkdownNode = (0, _query.footnoteMarkdownNodeFromNode)(node), descendentNode = footnoteMarkdownNode, number = null, footnoteTransform = footnoteSubDivisionTransform.contract(FootnoteTransform, descendentNode, number);
                return footnoteTransform;
            }
        }
    ]);
    return FootnoteTransform;
}(_transform.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSBcIi4uL3RyYW5zZm9ybVwiO1xuXG5pbXBvcnQgeyBmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZVRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2VucywgbnVtYmVyKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIHNldE51bWJlcihudW1iZXIpIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGlzTnVtYmVyZWQoKSB7XG4gICAgY29uc3QgbnVtYmVyZWQgPSAodGhpcy5udW1iZXIgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG51bWJlcmVkO1xuICB9XG5cbiAgaXNVbm51bWJlcmVkKCkge1xuICAgIGNvbnN0IG51bWJlcmVkID0gdGhpcy5pc051bWJlcmVkKCksXG4gICAgICAgICAgdW5udW1iZXJlZCA9ICFudW1iZXJlZDtcblxuICAgIHJldHVybiB1bm51bWJlcmVkO1xuICB9XG5cbiAgZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gVHJhbnNmb3JtLmZyb21Ob2RlKEZvb3Rub3RlVHJhbnNmb3JtLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZVN1YkRpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0pIHtcbiAgICBjb25zdCBub2RlID0gZm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybS5nZXROb2RlKCksXG4gICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRlbnROb2RlID0gZm9vdG5vdGVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlVHJhbnNmb3JtID0gZm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybS5jb250cmFjdChGb290bm90ZVRyYW5zZm9ybSwgZGVzY2VuZGVudE5vZGUsIG51bWJlcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZVRyYW5zZm9ybSIsIm5vZGUiLCJ0b2tlbnMiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJpc051bWJlcmVkIiwibnVtYmVyZWQiLCJpc1VubnVtYmVyZWQiLCJ1bm51bWJlcmVkIiwiZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUiLCJnZXROb2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJmcm9tTm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIlRyYW5zZm9ybSIsImZyb21Gb290bm90ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJkZXNjZW5kZW50Tm9kZSIsImZvb3Rub3RlVHJhbnNmb3JtIiwiY29udHJhY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2dFQUpDO3FCQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQSxrQkFDUEMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE1BQU07Z0NBRGJIOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFNQzs7UUFFWixNQUFLQyxNQUFNLEdBQUdBOzs7a0JBSkdIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVGLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVksSUFBSSxDQUFDSixNQUFNLEtBQUs7Z0JBRWxDLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsV0FBVyxJQUFJLENBQUNELFVBQVUsSUFDMUJHLGFBQWEsQ0FBQ0Y7Z0JBRXBCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsT0FBTyxJQUFJLENBQUNVLE9BQU8sSUFDbkJDLHVCQUF1QlgsTUFBTyxHQUFHO2dCQUV2QyxPQUFPVztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNaLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdhLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFBV0M7Z0JBQVAsT0FBT0EsQ0FBQUEsYUFBQUEsa0JBQVMsRUFBQ0YsUUFBUSxPQUFsQkUsWUFBQUE7b0JBbkNuQ2Y7b0JBbUN5RUM7aUJBQTRCLENBQWxFYyxPQUE0QyxxQkFBR0Q7WUFBcUI7OztZQUVuSEUsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyw0QkFBNEI7Z0JBQ2xFLElBQU1oQixPQUFPZ0IsNkJBQTZCTixPQUFPLElBQzNDQyx1QkFBdUJNLElBQUFBLG1DQUE0QixFQUFDakIsT0FDcERrQixpQkFBaUJQLHNCQUNqQlQsU0FBUyxNQUNUaUIsb0JBQW9CSCw2QkFBNkJJLFFBQVEsQ0ExQzlDckIsbUJBMENrRW1CLGdCQUFnQmhCO2dCQUVuRyxPQUFPaUI7WUFDVDs7O1dBN0NtQnBCO0VBQTBCZSxrQkFBUyJ9