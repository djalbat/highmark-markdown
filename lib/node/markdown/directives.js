"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectivesMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var DirectivesMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DirectivesMarkdownNode, MarkdownNode);
    function DirectivesMarkdownNode() {
        _class_call_check(this, DirectivesMarkdownNode);
        return _call_super(this, DirectivesMarkdownNode, arguments);
    }
    _create_class(DirectivesMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var firstDirectiveMarkdownNode = this.getFirstDirectiveMarkdownNode(), firstDirectiveMarkdownNodeHTML = firstDirectiveMarkdownNode.asHTML(indent, context), html = firstDirectiveMarkdownNodeHTML; ///
                return html;
            }
        },
        {
            key: "getFirstDirectiveMarkdownNode",
            value: function getFirstDirectiveMarkdownNode() {
                var firstDirectiveMarkdownNode = this.fromFirstChildNode(function(firstChildNode) {
                    var firstDirectiveMarkdownNode = firstChildNode; ///
                    return firstDirectiveMarkdownNode;
                });
                return firstDirectiveMarkdownNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(DirectivesMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return DirectivesMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aXZlc01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdERpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0Rmlyc3REaXJlY3RpdmVNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBmaXJzdERpcmVjdGl2ZU1hcmtkb3duTm9kZUhUTUwgPSBmaXJzdERpcmVjdGl2ZU1hcmtkb3duTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gZmlyc3REaXJlY3RpdmVNYXJrZG93bk5vZGVIVE1MOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldEZpcnN0RGlyZWN0aXZlTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IGZpcnN0RGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdERpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiBmaXJzdERpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdERpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpcmVjdGl2ZXNNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZXNNYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiZmlyc3REaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJnZXRGaXJzdERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImZpcnN0RGlyZWN0aXZlTWFya2Rvd25Ob2RlSFRNTCIsImh0bWwiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRUMsT0FBTztnQkFDcEIsSUFBTUMsNkJBQTZCLElBQUksQ0FBQ0MsNkJBQTZCLElBQy9EQyxpQ0FBaUNGLDJCQUEyQkgsTUFBTSxDQUFDQyxRQUFRQyxVQUMzRUksT0FBT0QsZ0NBQWlDLEdBQUc7Z0JBRWpELE9BQU9DO1lBQ1Q7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsNkJBQTZCLElBQUksQ0FBQ0ksa0JBQWtCLENBQUMsU0FBQ0M7b0JBQzFELElBQU1MLDZCQUE2QkssZ0JBQWlCLEdBQUc7b0JBRXZELE9BQU9MO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0FuQjFHVix3QkFtQm1JVyxVQUFVQyxZQUFZQztZQUFVOzs7V0FuQm5LYjtFQUErQmMsaUJBQVkifQ==