"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InlineTextMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _plain = /*#__PURE__*/ _interop_require_default(require("./text/plain"));
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
var InlineTextMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(InlineTextMarkdownNode, MarkdownNode);
    function InlineTextMarkdownNode() {
        _class_call_check(this, InlineTextMarkdownNode);
        return _call_super(this, InlineTextMarkdownNode, arguments);
    }
    _create_class(InlineTextMarkdownNode, [
        {
            key: "isEndPlainText",
            value: function isEndPlainText(context) {
                var endPlainText = this.fromFirstLastChildNode(function(firstLastChildNode) {
                    var endMarkdownNode = firstLastChildNode, endMarkdownNodePlainTextNode = _instanceof(endMarkdownNode, _plain.default), endPlainText = endMarkdownNodePlainTextNode; ///
                    return endPlainText;
                });
                return endPlainText;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(InlineTextMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return InlineTextMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2lubGluZVRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBQbGFpblRleHRNYXJrZG93bk5vZGUgZnJvbSBcIi4vdGV4dC9wbGFpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmxpbmVUZXh0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaXNFbmRQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGVuZFBsYWluVGV4dCA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBlbmRNYXJrZG93bk5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgZW5kTWFya2Rvd25Ob2RlUGxhaW5UZXh0Tm9kZSA9IChlbmRNYXJrZG93bk5vZGUgaW5zdGFuY2VvZiBQbGFpblRleHRNYXJrZG93bk5vZGUpLFxuICAgICAgICAgICAgZW5kUGxhaW5UZXh0ID0gZW5kTWFya2Rvd25Ob2RlUGxhaW5UZXh0Tm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gZW5kUGxhaW5UZXh0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVuZFBsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KElubGluZVRleHRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIklubGluZVRleHRNYXJrZG93bk5vZGUiLCJpc0VuZFBsYWluVGV4dCIsImNvbnRleHQiLCJlbmRQbGFpblRleHQiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlIiwiZW5kTWFya2Rvd25Ob2RlIiwiZW5kTWFya2Rvd25Ob2RlUGxhaW5UZXh0Tm9kZSIsIlBsYWluVGV4dE1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7K0RBSEk7NERBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsT0FBTztnQkFDcEIsSUFBTUMsZUFBZSxJQUFJLENBQUNDLHNCQUFzQixDQUFDLFNBQUNDO29CQUNoRCxJQUFNQyxrQkFBa0JELG9CQUNsQkUsK0JBQWdDRCxBQUFlLFlBQWZBLGlCQUEyQkUsY0FBcUIsR0FDaEZMLGVBQWVJLDhCQUErQixHQUFHO29CQUV2RCxPQUFPSjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBYjFHVCx3QkFhbUlVLFVBQVVDLFlBQVlDO1lBQVU7OztXQWJuS1o7RUFBK0JhLGlCQUFZIn0=