"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OrderedItemMarkdownNode;
    }
});
var _necessary = require("necessary");
var _item = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/item"));
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
var second = _necessary.arrayUtilities.second;
var OrderedItemMarkdownNode = /*#__PURE__*/ function(ItemNode) {
    _inherits(OrderedItemMarkdownNode, ItemNode);
    function OrderedItemMarkdownNode() {
        _class_call_check(this, OrderedItemMarkdownNode);
        return _call_super(this, OrderedItemMarkdownNode, arguments);
    }
    _create_class(OrderedItemMarkdownNode, [
        {
            key: "value",
            value: function value(context) {
                var value = this.fromFirstChildNode(function(firstChildNode) {
                    var markerTerminalNode = firstChildNode, value = valueFromMarkerTerminalNode(markerTerminalNode);
                    return value;
                });
                return value;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _item.default.fromRuleNameChildNodesAndOpacity(OrderedItemMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return OrderedItemMarkdownNode;
}(_item.default);
function valueFromMarkerTerminalNode(markerTerminalNode) {
    var content = markerTerminalNode.getContent(), matches = content.match(/(\d+)\./), secondMatch = second(matches), value = secondMatch; ///
    return value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2l0ZW0vb3JkZXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBJdGVtTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9pdGVtXCI7XG5cbmNvbnN0IHsgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJlZEl0ZW1NYXJrZG93bk5vZGUgZXh0ZW5kcyBJdGVtTm9kZSB7XG4gIHZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbWFya2VyVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tTWFya2VyVGVybWluYWxOb2RlKG1hcmtlclRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gSXRlbU5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoT3JkZXJlZEl0ZW1NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5mdW5jdGlvbiB2YWx1ZUZyb21NYXJrZXJUZXJtaW5hbE5vZGUobWFya2VyVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBtYXJrZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKFxcZCspXFwuLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB2YWx1ZSA9IHNlY29uZE1hdGNoOyAgLy8vXG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIl0sIm5hbWVzIjpbIk9yZGVyZWRJdGVtTWFya2Rvd25Ob2RlIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJ2YWx1ZSIsImNvbnRleHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsIm1hcmtlclRlcm1pbmFsTm9kZSIsInZhbHVlRnJvbU1hcmtlclRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIkl0ZW1Ob2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7MkRBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTUQsUUFBUSxJQUFJLENBQUNFLGtCQUFrQixDQUFDLFNBQUNDO29CQUNyQyxJQUFNQyxxQkFBcUJELGdCQUNyQkgsUUFBUUssNEJBQTRCRDtvQkFFMUMsT0FBT0o7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGFBQVEsQ0FBQ0osZ0NBQWdDLENBWnRHVCx5QkFZZ0lVLFVBQVVDLFlBQVlDO1lBQVU7OztXQVpoS1o7RUFBZ0NhLGFBQVE7QUFlN0QsU0FBU0wsNEJBQTRCRCxrQkFBa0I7SUFDckQsSUFBTU8sVUFBVVAsbUJBQW1CUSxVQUFVLElBQ3ZDQyxVQUFVRixRQUFRRyxLQUFLLENBQUMsWUFDeEJDLGNBQWNqQixPQUFPZSxVQUNyQmIsUUFBUWUsYUFBYyxHQUFHO0lBRS9CLE9BQU9mO0FBQ1QifQ==