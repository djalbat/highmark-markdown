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
var _occamdom = require("occam-dom");
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
                return (_Transform = _occamdom.Transform).fromNode.apply(_Transform, [
                    FootnoteTransform,
                    node
                ].concat(_to_consumable_array(remainingArguments)));
            }
        },
        {
            key: "fromFootnoteSubDivisionTransform",
            value: function fromFootnoteSubDivisionTransform(footnoteSubDivisionTransform) {
                var node = footnoteSubDivisionTransform.getNode(), footnoteMarkdownNode = footnoteMarkdownNodeFromNode(node), descendentNode = footnoteMarkdownNode, number = null, footnoteTransform = footnoteSubDivisionTransform.contract(FootnoteTransform, descendentNode, number);
                return footnoteTransform;
            }
        }
    ]);
    return FootnoteTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIG51bWJlcikge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBpc051bWJlcmVkKCkge1xuICAgIGNvbnN0IG51bWJlcmVkID0gKHRoaXMubnVtYmVyICE9PSBudWxsKTtcblxuICAgIHJldHVybiBudW1iZXJlZDtcbiAgfVxuXG4gIGlzVW5udW1iZXJlZCgpIHtcbiAgICBjb25zdCBudW1iZXJlZCA9IHRoaXMuaXNOdW1iZXJlZCgpLFxuICAgICAgICAgIHVubnVtYmVyZWQgPSAhbnVtYmVyZWQ7XG5cbiAgICByZXR1cm4gdW5udW1iZXJlZDtcbiAgfVxuXG4gIGdldEZvb3Rub3RlTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBmb290bm90ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIFRyYW5zZm9ybS5mcm9tTm9kZShGb290bm90ZVRyYW5zZm9ybSwgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZVN1YkRpdmlzaW9uVHJhbnNmb3JtKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBkZXNjZW5kZW50Tm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZVRyYW5zZm9ybSA9IGZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0uY29udHJhY3QoRm9vdG5vdGVUcmFuc2Zvcm0sIGRlc2NlbmRlbnROb2RlLCBudW1iZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVUcmFuc2Zvcm0iLCJub2RlIiwidG9rZW5zIiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwic2V0TnVtYmVyIiwiaXNOdW1iZXJlZCIsIm51bWJlcmVkIiwiaXNVbm51bWJlcmVkIiwidW5udW1iZXJlZCIsImdldEZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZnJvbU5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiZGVzY2VuZGVudE5vZGUiLCJmb290bm90ZVRyYW5zZm9ybSIsImNvbnRyYWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3QkFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQSxrQkFDUEMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE1BQU07Z0NBRGJIOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFNQzs7UUFFWixNQUFLQyxNQUFNLEdBQUdBOzs7a0JBSkdIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVGLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVksSUFBSSxDQUFDSixNQUFNLEtBQUs7Z0JBRWxDLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsV0FBVyxJQUFJLENBQUNELFVBQVUsSUFDMUJHLGFBQWEsQ0FBQ0Y7Z0JBRXBCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsT0FBTyxJQUFJLENBQUNVLE9BQU8sSUFDbkJDLHVCQUF1QlgsTUFBTyxHQUFHO2dCQUV2QyxPQUFPVztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNaLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdhLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFBV0M7Z0JBQVAsT0FBT0EsQ0FBQUEsYUFBQUEsbUJBQVMsRUFBQ0YsUUFBUSxPQUFsQkUsWUFBQUE7b0JBbkNuQ2Y7b0JBbUN5RUM7aUJBQTRCLENBQWxFYyxPQUE0QyxxQkFBR0Q7WUFBcUI7OztZQUVuSEUsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyw0QkFBNEI7Z0JBQ2xFLElBQU1oQixPQUFPZ0IsNkJBQTZCTixPQUFPLElBQzNDQyx1QkFBdUJNLDZCQUE2QmpCLE9BQ3BEa0IsaUJBQWlCUCxzQkFDakJULFNBQVMsTUFDVGlCLG9CQUFvQkgsNkJBQTZCSSxRQUFRLENBMUM5Q3JCLG1CQTBDa0VtQixnQkFBZ0JoQjtnQkFFbkcsT0FBT2lCO1lBQ1Q7OztXQTdDbUJwQjtFQUEwQmUsbUJBQVMifQ==