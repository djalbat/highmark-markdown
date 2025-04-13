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
            // content(context) {
            //   const content = EMPTY_STRING;
            //
            //   return content;
            // }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2FuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXBzaWxvbk5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFOQ0hPUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuY2hvck1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBwcmVwZW5kLCBpZGVudGlmaWVyKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIHByZXBlbmQpO1xuXG4gICAgdGhpcy5wcmVwZW5kID0gcHJlcGVuZDtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0UHJlcGVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVwZW5kO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgLy8gY29udGVudChjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcbiAgLy9cbiAgLy8gICByZXR1cm4gY29udGVudDtcbiAgLy8gfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5wcmVwZW5kLCB0aGlzLmlkZW50aWZpZXIpOyB9XG5cbiAgc3RhdGljIGZyb21QcmVwZW5kQW5kSWRlbnRpZmllcihwcmVwZW5kLCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSBFcHNpbG9uTm9kZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gQU5DSE9SX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgZXBzaWxvbk5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShBbmNob3JNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVwZW5kLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBhbmNob3JNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBbmNob3JNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJwcmVwZW5kIiwiaWRlbnRpZmllciIsImdldFByZXBlbmQiLCJnZXRJZGVudGlmaWVyIiwiY2xvbmUiLCJmcm9tUHJlcGVuZEFuZElkZW50aWZpZXIiLCJlcHNpbG9uTm9kZSIsIkVwc2lsb25Ob2RlIiwiZnJvbU5vdGhpbmciLCJBTkNIT1JfUlVMRV9OQU1FIiwiYW5jaG9yTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzRCQVBPOytEQUVIO3lCQUVJO3lCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQSxtQkFDUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQ0FEbkVQOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFVQztZQUFZQztZQUFTQztZQUFZQztZQUFZQzs7UUFFN0QsTUFBS0EsT0FBTyxHQUFHQTtRQUNmLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFMRFA7O1lBUW5CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBLHFCQUFxQjtZQUNyQixrQ0FBa0M7WUFDbEMsRUFBRTtZQUNGLG9CQUFvQjtZQUNwQixJQUFJO1lBRUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVSxPQUFPLHVCQXRCRVYsK0JBc0JJVSxTQUFOLElBQUssYUFBTyxJQUFJLENBQUNKLE9BQU8sRUFBRSxJQUFJLENBQUNDLFVBQVU7WUFBRzs7OztZQUV0REksS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCTCxPQUFPLEVBQUVDLFVBQVU7Z0JBQ2pELElBQU1LLGNBQWNDLHlCQUFXLENBQUNDLFdBQVcsSUFDckNiLFdBQVdjLDJCQUFnQixFQUMzQmIsYUFBYTtvQkFDWFU7aUJBQ0QsRUFDRFQsVUFBVSxNQUNWYSxxQkFBcUJDLGlCQUFZLENBQUNDLGdDQUFnQyxDQS9CdkRsQixvQkErQjRFQyxVQUFVQyxZQUFZQyxTQUFTRyxTQUFTQztnQkFFckksT0FBT1M7WUFDVDs7O1dBbENtQmhCO0VBQTJCaUIsaUJBQVkifQ==