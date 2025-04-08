"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingStartMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _className = /*#__PURE__*/ _interop_require_default(require("./className"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var BlockListingStartMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockListingStartMarkdownNode, MarkdownNode);
    function BlockListingStartMarkdownNode() {
        _class_call_check(this, BlockListingStartMarkdownNode);
        return _call_super(this, BlockListingStartMarkdownNode, arguments);
    }
    _create_class(BlockListingStartMarkdownNode, [
        {
            key: "className",
            value: function className(context) {
                var className = this.fromSecondChildNode(function(secondChildNode) {
                    var className = null;
                    var secondChildNodeClassNameMarkdownNode = _instanceof(secondChildNode, _className.default);
                    if (secondChildNodeClassNameMarkdownNode) {
                        var classNameMarkdownNode = secondChildNode; ///
                        className = classNameMarkdownNode.className(context);
                    }
                    return className;
                });
                return className;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(BlockListingStartMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return BlockListingStartMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZ1N0YXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQ2xhc3NOYW1lTWFya2Rvd25Ob2RlIGZyb20gXCIuL2NsYXNzTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mcm9tU2Vjb25kQ2hpbGROb2RlKChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBjbGFzc05hbWUgPSBudWxsO1xuXG4gICAgICBjb25zdCBzZWNvbmRDaGlsZE5vZGVDbGFzc05hbWVNYXJrZG93bk5vZGUgPSAoc2Vjb25kQ2hpbGROb2RlIGluc3RhbmNlb2YgQ2xhc3NOYW1lTWFya2Rvd25Ob2RlKVxuXG4gICAgICBpZiAoc2Vjb25kQ2hpbGROb2RlQ2xhc3NOYW1lTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZU1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lTWFya2Rvd25Ob2RlLmNsYXNzTmFtZShjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShCbG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZUNsYXNzTmFtZU1hcmtkb3duTm9kZSIsIkNsYXNzTmFtZU1hcmtkb3duTm9kZSIsImNsYXNzTmFtZU1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7K0RBSEk7Z0VBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQUEsQUFBTUEsOENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNRCxZQUFZLElBQUksQ0FBQ0UsbUJBQW1CLENBQUMsU0FBQ0M7b0JBQzFDLElBQUlILFlBQVk7b0JBRWhCLElBQU1JLHVDQUF3Q0QsQUFBZSxZQUFmQSxpQkFBMkJFLGtCQUFxQjtvQkFFOUYsSUFBSUQsc0NBQXNDO3dCQUN4QyxJQUFNRSx3QkFBd0JILGlCQUFpQixHQUFHO3dCQUVsREgsWUFBWU0sc0JBQXNCTixTQUFTLENBQUNDO29CQUM5QztvQkFFQSxPQUFPRDtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBbkIxR1IsK0JBbUIwSVMsVUFBVUMsWUFBWUM7WUFBVTs7O1dBbkIxS1g7RUFBc0NZLGlCQUFZIn0=