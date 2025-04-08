"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AnchorMarkdownNode;
    }
});
var _occamparsers = require("occam-parsers");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
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
var AnchorMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(AnchorMarkdownNode, MarkdownNode);
    function AnchorMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, prepend, identifier) {
        _class_call_check(this, AnchorMarkdownNode);
        var _this;
        _this = _call_super(this, AnchorMarkdownNode, [
            ruleName,
            childNodes,
            opacity,
            precedence,
            domElement,
            prepend
        ]);
        _this.prepend = prepend;
        _this.identifier = identifier;
        return _this;
    }
    _create_class(AnchorMarkdownNode, [
        {
            key: "getPrepend",
            value: function getPrepend() {
                return this.prepend;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(AnchorMarkdownNode.prototype), "clone", this).call(this, this.prepend, this.identifier);
            }
        }
    ], [
        {
            key: "fromPrependAndIdentifier",
            value: function fromPrependAndIdentifier(prepend, identifier) {
                var epsilonNode = _occamparsers.EpsilonNode.fromNothing(), ruleName = _ruleNames.ANCHOR_RULE_NAME, childNodes = [
                    epsilonNode
                ], opacity = null, anchorMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(AnchorMarkdownNode, ruleName, childNodes, opacity, prepend, identifier);
                return anchorMarkdownNode;
            }
        }
    ]);
    return AnchorMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2FuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXBzaWxvbk5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFOQ0hPUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuY2hvck1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBwcmVwZW5kLCBpZGVudGlmaWVyKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIHByZXBlbmQpO1xuXG4gICAgdGhpcy5wcmVwZW5kID0gcHJlcGVuZDtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0UHJlcGVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVwZW5kO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLnByZXBlbmQsIHRoaXMuaWRlbnRpZmllcik7IH1cblxuICBzdGF0aWMgZnJvbVByZXBlbmRBbmRJZGVudGlmaWVyKHByZXBlbmQsIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IEVwc2lsb25Ob2RlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBBTkNIT1JfUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEFuY2hvck1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZXBlbmQsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGFuY2hvck1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFuY2hvck1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsInByZXBlbmQiLCJpZGVudGlmaWVyIiwiZ2V0UHJlcGVuZCIsImdldElkZW50aWZpZXIiLCJjb250ZW50IiwiY29udGV4dCIsIkVNUFRZX1NUUklORyIsImNsb25lIiwiZnJvbVByZXBlbmRBbmRJZGVudGlmaWVyIiwiZXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsImZyb21Ob3RoaW5nIiwiQU5DSE9SX1JVTEVfTkFNRSIsImFuY2hvck1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0QkFQTzsrREFFSDt5QkFFSTt5QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7YUFBQUEsbUJBQ1BDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0NBRG5FUDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBVUM7WUFBWUM7WUFBU0M7WUFBWUM7WUFBWUM7O1FBRTdELE1BQUtBLE9BQU8sR0FBR0E7UUFDZixNQUFLQyxVQUFVLEdBQUdBOzs7a0JBTERQOztZQVFuQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUQsVUFBVUUsdUJBQVk7Z0JBRTVCLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsT0FBTyx1QkF0QkViLCtCQXNCSWEsU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDUCxPQUFPLEVBQUUsSUFBSSxDQUFDQyxVQUFVO1lBQUc7Ozs7WUFFdERPLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QlIsT0FBTyxFQUFFQyxVQUFVO2dCQUNqRCxJQUFNUSxjQUFjQyx5QkFBVyxDQUFDQyxXQUFXLElBQ3JDaEIsV0FBV2lCLDJCQUFnQixFQUMzQmhCLGFBQWE7b0JBQ1hhO2lCQUNELEVBQ0RaLFVBQVUsTUFDVmdCLHFCQUFxQkMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBL0J2RHJCLG9CQStCNEVDLFVBQVVDLFlBQVlDLFNBQVNHLFNBQVNDO2dCQUVySSxPQUFPWTtZQUNUOzs7V0FsQ21CbkI7RUFBMkJvQixpQkFBWSJ9