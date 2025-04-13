"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HeadingMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/anchor"));
var _prepends = require("../../prepends");
var _string = require("../../utilities/string");
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
var HeadingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HeadingMarkdownNode, MarkdownNode);
    function HeadingMarkdownNode() {
        _class_call_check(this, HeadingMarkdownNode);
        return _call_super(this, HeadingMarkdownNode, arguments);
    }
    _create_class(HeadingMarkdownNode, [
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.constructor.depth;
                return depth;
            }
        },
        {
            key: "addAnchor",
            value: function addAnchor(context) {
                var prepend = _prepends.CONTENTS_PREPEND, identifier = this.identifier(context), anchorMarkdownNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), prependedChildNode = anchorMarkdownNode; ///
                this.prependChildNode(prependedChildNode);
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var plainText = this.asPlainText(context), identifier = identifierFromPlainText(plainText);
                return identifier;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HeadingMarkdownNode;
}(_markdown.default);
function identifierFromPlainText(plainText) {
    plainText = plainText.toLowerCase(); ///
    plainText = (0, _string.removedLeadingWhitespace)(plainText); ///
    plainText = (0, _string.removeNonAlphabeticAndSpaceCharacters)(plainText); ///
    plainText = (0, _string.replaceSpacesWithHyphens)(plainText); ///
    var identifier = plainText; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2hlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBBbmNob3JNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vYW5jaG9yXCI7XG5cbmltcG9ydCB7IENPTlRFTlRTX1BSRVBFTkQgfSBmcm9tIFwiLi4vLi4vcHJlcGVuZHNcIjtcbmltcG9ydCB7IHJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucywgcmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlLCByZW1vdmVOb25BbHBoYWJldGljQW5kU3BhY2VDaGFyYWN0ZXJzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IHsgZGVwdGggfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBhZGRBbmNob3IoY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBDT05URU5UU19QUkVQRU5ELFxuICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gQW5jaG9yTWFya2Rvd25Ob2RlLmZyb21QcmVwZW5kQW5kSWRlbnRpZmllcihwcmVwZW5kLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICBwcmVwZW5kZWRDaGlsZE5vZGUgPSBhbmNob3JNYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgdGhpcy5wcmVwZW5kQ2hpbGROb2RlKHByZXBlbmRlZENoaWxkTm9kZSk7XG4gIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSB0aGlzLmFzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5mdW5jdGlvbiBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnRvTG93ZXJDYXNlKCk7ICAvLy9cblxuICBwbGFpblRleHQgPSByZW1vdmVkTGVhZGluZ1doaXRlc3BhY2UocGxhaW5UZXh0KTsgIC8vL1xuXG4gIHBsYWluVGV4dCA9IHJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMocGxhaW5UZXh0KTsgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zKHBsYWluVGV4dCk7ICAvLy9cblxuICBjb25zdCBpZGVudGlmaWVyID0gcGxhaW5UZXh0OyAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nTWFya2Rvd25Ob2RlIiwiZ2V0RGVwdGgiLCJkZXB0aCIsImNvbnN0cnVjdG9yIiwiYWRkQW5jaG9yIiwiY29udGV4dCIsInByZXBlbmQiLCJDT05URU5UU19QUkVQRU5EIiwiaWRlbnRpZmllciIsImFuY2hvck1hcmtkb3duTm9kZSIsIkFuY2hvck1hcmtkb3duTm9kZSIsImZyb21QcmVwZW5kQW5kSWRlbnRpZmllciIsInByZXBlbmRlZENoaWxkTm9kZSIsInByZXBlbmRDaGlsZE5vZGUiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsImlkZW50aWZpZXJGcm9tUGxhaW5UZXh0IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJDbGFzcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZWRMZWFkaW5nV2hpdGVzcGFjZSIsInJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMiLCJyZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JOzZEQUNNO3dCQUVFO3NCQUN5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRixJQUFBLEFBQU1BLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsUUFBVSxJQUFJLENBQUNDLFdBQVcsQ0FBMUJEO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNQyxVQUFVQywwQkFBZ0IsRUFDMUJDLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNILFVBQzdCSSxxQkFBcUJDLGVBQWtCLENBQUNDLHdCQUF3QixDQUFDTCxTQUFTRSxhQUMxRUkscUJBQXFCSCxvQkFBb0IsR0FBRztnQkFFbEQsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQ0Q7WUFDeEI7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0gsT0FBTztnQkFDaEIsSUFBTVMsWUFBWSxJQUFJLENBQUNDLFdBQVcsQ0FBQ1YsVUFDN0JHLGFBQWFRLHdCQUF3QkY7Z0JBRTNDLE9BQU9OO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNMLGdDQUFnQyxDQUFDQyxPQUFPQyxVQUFVQyxZQUFZQztZQUFVOzs7V0F2QnpKckI7RUFBNEJzQixpQkFBWTtBQTBCN0QsU0FBU04sd0JBQXdCRixTQUFTO0lBQ3hDQSxZQUFZQSxVQUFVUyxXQUFXLElBQUssR0FBRztJQUV6Q1QsWUFBWVUsSUFBQUEsZ0NBQXdCLEVBQUNWLFlBQWEsR0FBRztJQUVyREEsWUFBWVcsSUFBQUEsNkNBQXFDLEVBQUNYLFlBQVksR0FBRztJQUVqRUEsWUFBWVksSUFBQUEsZ0NBQXdCLEVBQUNaLFlBQWEsR0FBRztJQUVyRCxJQUFNTixhQUFhTSxXQUFXLEdBQUc7SUFFakMsT0FBT047QUFDVCJ9