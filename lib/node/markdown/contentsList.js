"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsListMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var ContentsListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsListMarkdownNode, MarkdownNode);
    function ContentsListMarkdownNode() {
        _class_call_check(this, ContentsListMarkdownNode);
        return _call_super(this, ContentsListMarkdownNode, arguments);
    }
    _create_class(ContentsListMarkdownNode, [
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText = null;
                return plainText;
            }
        }
    ], [
        {
            key: "fromContentsItemReplacements",
            value: function fromContentsItemReplacements(contentsItemReplacements) {
                var ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = contentsItemReplacements.map(function(contentsItemReplacement) {
                    var contentsItemReplacementNode = contentsItemReplacement.getContentsItemMarkdownNode(), childNode = contentsItemReplacementNode; ///
                    return childNode;
                }), opacity = null, contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                return contentsListMarkdownNode;
            }
        }
    ]);
    return ContentsListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IG51bGw7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50c0l0ZW1SZXBsYWNlbWVudHMoY29udGVudHNJdGVtUmVwbGFjZW1lbnRzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05URU5UU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY29udGVudHNJdGVtUmVwbGFjZW1lbnRzLm1hcCgoY29udGVudHNJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50Tm9kZSA9IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50LmdldENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNJdGVtUmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImFzUGxhaW5UZXh0IiwiY29udGV4dCIsInBsYWluVGV4dCIsImZyb21Db250ZW50c0l0ZW1SZXBsYWNlbWVudHMiLCJjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMiLCJydWxlTmFtZSIsIkNPTlRFTlRTX0xJU1RfUlVMRV9OQU1FIiwiY2hpbGROb2RlcyIsIm1hcCIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50IiwiY29udGVudHNJdGVtUmVwbGFjZW1lbnROb2RlIiwiZ2V0Q29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwib3BhY2l0eSIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKSTt5QkFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxPQUFPO2dCQUNqQixJQUFNQyxZQUFZO2dCQUVsQixPQUFPQTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCO2dCQUMxRCxJQUFNQyxXQUFXQyxrQ0FBdUIsRUFDbENDLGFBQWFILHlCQUF5QkksR0FBRyxDQUFDLFNBQUNDO29CQUN6QyxJQUFNQyw4QkFBOEJELHdCQUF3QkUsMkJBQTJCLElBQ2pGQyxZQUFZRiw2QkFBOEIsR0FBRztvQkFFbkQsT0FBT0U7Z0JBQ1QsSUFDQUMsVUFBVSxNQUNWQywyQkFBMkJDLGlCQUFZLENBQUNDLGdDQUFnQyxDQWhCN0RqQiwwQkFnQndGTSxVQUFVRSxZQUFZTTtnQkFFL0gsT0FBT0M7WUFDVDs7O1dBbkJtQmY7RUFBaUNnQixpQkFBWSJ9