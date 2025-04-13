"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InlineListingMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _string = require("../../utilities/string");
var _entities = require("../../utilities/entities");
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
var InlineListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(InlineListingMarkdownNode, MarkdownNode);
    function InlineListingMarkdownNode() {
        _class_call_check(this, InlineListingMarkdownNode);
        return _call_super(this, InlineListingMarkdownNode, arguments);
    }
    _create_class(InlineListingMarkdownNode, null, [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: // content(context) {
            //   const content = this.fromFirstChildNode((firstChildNode) => {
            //     let content;
            //
            //     const backtickedLiteralTerminalNode = firstChildNode; ///
            //
            //     content = backtickedLiteralTerminalNode.getContent();
            //
            //     content = removeBackticks(content); ///
            //
            //     content = replaceEntities(content); ///
            //
            //     return content;
            //   });
            //
            //   return content;
            // }
            function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(InlineListingMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return InlineListingMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2lubGluZUxpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgcmVtb3ZlQmFja3RpY2tzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHJlcGxhY2VFbnRpdGllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZW50aXRpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5saW5lTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIC8vIGNvbnRlbnQoY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgLy8gICAgIGxldCBjb250ZW50O1xuICAvL1xuICAvLyAgICAgY29uc3QgYmFja3RpY2tlZExpdGVyYWxUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgLy8vXG4gIC8vXG4gIC8vICAgICBjb250ZW50ID0gYmFja3RpY2tlZExpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuICAvL1xuICAvLyAgICAgY29udGVudCA9IHJlbW92ZUJhY2t0aWNrcyhjb250ZW50KTsgLy8vXG4gIC8vXG4gIC8vICAgICBjb250ZW50ID0gcmVwbGFjZUVudGl0aWVzKGNvbnRlbnQpOyAvLy9cbiAgLy9cbiAgLy8gICAgIHJldHVybiBjb250ZW50O1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIHJldHVybiBjb250ZW50O1xuICAvLyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoSW5saW5lTGlzdGluZ01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiSW5saW5lTGlzdGluZ01hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7K0RBTEk7c0JBRU87d0JBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFtQlpDLEtBQUFBO21CQUFQLEFBbEJBLHFCQUFxQjtZQUNyQixrRUFBa0U7WUFDbEUsbUJBQW1CO1lBQ25CLEVBQUU7WUFDRixnRUFBZ0U7WUFDaEUsRUFBRTtZQUNGLDREQUE0RDtZQUM1RCxFQUFFO1lBQ0YsOENBQThDO1lBQzlDLEVBQUU7WUFDRiw4Q0FBOEM7WUFDOUMsRUFBRTtZQUNGLHNCQUFzQjtZQUN0QixRQUFRO1lBQ1IsRUFBRTtZQUNGLG9CQUFvQjtZQUNwQixJQUFJO1lBRUosU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0FuQjFHRCwyQkFtQnNJRSxVQUFVQyxZQUFZQztZQUFVOzs7V0FuQnRLSjtFQUFrQ0ssaUJBQVkifQ==