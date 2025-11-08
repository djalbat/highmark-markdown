"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VerbatimCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
var _targets = require("../../targets");
var _constants = require("../../constants");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var VerbatimCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(VerbatimCSSNode, CSSNode);
    function VerbatimCSSNode() {
        _class_call_check(this, VerbatimCSSNode);
        return _call_super(this, VerbatimCSSNode, arguments);
    }
    _create_class(VerbatimCSSNode, [
        {
            key: "getTarget",
            value: function getTarget() {
                var target = this.fromFirstChildNode(function(firstChildNode) {
                    var targetCSSNode = firstChildNode, target = targetCSSNode.getTarget();
                    return target;
                });
                return target;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(context) {
                var css = _constants.EMPTY_STRING;
                var target;
                target = context.target;
                if (target === _targets.WEB_TARGET) {
                    css = _get(_get_prototype_of(VerbatimCSSNode.prototype), "asCSS", this).call(this, context);
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(VerbatimCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(VerbatimCSSNode, outerNode);
            }
        }
    ]);
    return VerbatimCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy92ZXJiYXRpbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5cbmltcG9ydCB7IFdFQl9UQVJHRVQgfSBmcm9tIFwiLi4vLi4vdGFyZ2V0c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJiYXRpbUNTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgZ2V0VGFyZ2V0KCkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0Q1NTTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldENTU05vZGUuZ2V0VGFyZ2V0KCk7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBsZXQgdGFyZ2V0O1xuXG4gICAgKHsgdGFyZ2V0IH0gPSBjb250ZXh0KTtcblxuICAgIGlmICh0YXJnZXQgPT09IFdFQl9UQVJHRVQpIHtcbiAgICAgIGNzcyA9IHN1cGVyLmFzQ1NTKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFZlcmJhdGltQ1NTTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIENTU05vZGUuZnJvbU91dGVyTm9kZShWZXJiYXRpbUNTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJWZXJiYXRpbUNTU05vZGUiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInRhcmdldENTU05vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJXRUJfVEFSR0VUIiwiZnJvbU5vdGhpbmciLCJDU1NOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MERBTEQ7dUJBRU87eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ3RDLElBQU1DLGdCQUFnQkQsZ0JBQ2hCRixTQUFTRyxjQUFjSixTQUFTO29CQUV0QyxPQUFPQztnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQUlQO2dCQUVEQSxTQUFXSyxRQUFYTDtnQkFFSCxJQUFJQSxXQUFXUSxtQkFBVSxFQUFFO29CQUN6QkYsTUFBTSx1QkFwQlNSLDRCQW9CSE0sU0FBTixJQUFLLGFBQU9DO2dCQUNwQjtnQkFFQSxPQUFPQztZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0ExQjlCWDtZQTBCaUQ7OztZQUU3RGEsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixZQUFPLENBQUNDLGFBQWEsQ0E1QjNDYixpQkE0QjZEYztZQUFZOzs7V0E1QnpFZDtFQUF3QlksWUFBTyJ9