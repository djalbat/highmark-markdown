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
var _childNodes = require("../../utilities/childNodes");
var _string = require("../../utilities/string");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var HeadingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HeadingMarkdownNode, MarkdownNode);
    var _super = _create_super(HeadingMarkdownNode);
    function HeadingMarkdownNode() {
        _class_call_check(this, HeadingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(HeadingMarkdownNode, [
        {
            key: "getLevel",
            value: function getLevel() {
                var level = this.constructor.level;
                return level;
            }
        },
        {
            key: "addAnchor",
            value: function addAnchor(context) {
                var identifier = this.identifier(context), anchorMarkdownNode = _anchor.default.fromIdentifier(identifier), childNode = anchorMarkdownNode; ///
                this.prependChildNode(childNode);
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var childNodes = this.getChildNodes(), leftTrimmed = true, plainText = (0, _childNodes.plainTextFromChildNodes)(childNodes, context, leftTrimmed), identifier = identifierFromPlainText(plainText);
                return identifier;
            }
        },
        {
            key: "position",
            value: function position(context) {
                var tokens = context.tokens, firstSignificantToken = this.getFirstSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), position = firstSignificantTokenIndex; ///
                return position;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2hlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBBbmNob3JNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vYW5jaG9yXCI7XG5cbmltcG9ydCB7IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jaGlsZE5vZGVzXCI7XG5pbXBvcnQgeyByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMsIHJlbW92ZWRMZWFkaW5nV2hpdGVzcGFjZSwgcmVtb3ZlTm9uQWxwaGFiZXRpY0FuZFNwYWNlQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBnZXRMZXZlbCgpIHtcbiAgICBjb25zdCB7IGxldmVsIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9XG5cbiAgYWRkQW5jaG9yKGNvbnRleHQpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBhbmNob3JNYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgdGhpcy5wcmVwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGVmdFRyaW1tZWQgPSB0cnVlLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgcG9zaXRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHBvc2l0aW9uID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC50b0xvd2VyQ2FzZSgpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlKHBsYWluVGV4dCk7ICAvLy9cblxuICBwbGFpblRleHQgPSByZW1vdmVOb25BbHBoYWJldGljQW5kU3BhY2VDaGFyYWN0ZXJzKHBsYWluVGV4dCk7IC8vL1xuXG4gIHBsYWluVGV4dCA9IHJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyhwbGFpblRleHQpOyAgLy8vXG5cbiAgY29uc3QgaWRlbnRpZmllciA9IHBsYWluVGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG4iXSwibmFtZXMiOlsiSGVhZGluZ01hcmtkb3duTm9kZSIsImdldExldmVsIiwibGV2ZWwiLCJjb25zdHJ1Y3RvciIsImFkZEFuY2hvciIsImNvbnRleHQiLCJpZGVudGlmaWVyIiwiYW5jaG9yTWFya2Rvd25Ob2RlIiwiQW5jaG9yTWFya2Rvd25Ob2RlIiwiZnJvbUlkZW50aWZpZXIiLCJjaGlsZE5vZGUiLCJwcmVwZW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJsZWZ0VHJpbW1lZCIsInBsYWluVGV4dCIsInBsYWluVGV4dEZyb21DaGlsZE5vZGVzIiwiaWRlbnRpZmllckZyb21QbGFpblRleHQiLCJwb3NpdGlvbiIsInRva2VucyIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiQ2xhc3MiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZWRMZWFkaW5nV2hpdGVzcGFjZSIsInJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMiLCJyZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkk7NkRBQ007MEJBRVM7c0JBQ2tFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNGLElBQUEsQUFBTUEsb0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsUUFBVSxJQUFJLENBQUNDLFdBQVcsQ0FBMUJEO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNQyxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDRCxVQUM3QkUscUJBQXFCQyxlQUFrQixDQUFDQyxjQUFjLENBQUNILGFBQ3ZESSxZQUFZSCxvQkFBb0IsR0FBRztnQkFFekMsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQ0Q7WUFDeEI7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0QsT0FBTztnQkFDaEIsSUFBTU8sYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGNBQWMsTUFDZEMsWUFBWUMsSUFBQUEsbUNBQXVCLEVBQUNKLFlBQVlQLFNBQVNTLGNBQ3pEUixhQUFhVyx3QkFBd0JGO2dCQUUzQyxPQUFPVDtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNiLE9BQU87Z0JBQ2QsSUFBTSxBQUFFYyxTQUFXZCxRQUFYYyxRQUNGQyx3QkFBd0IsSUFBSSxDQUFDQyx3QkFBd0IsSUFDckRDLDZCQUE2QkgsT0FBT0ksT0FBTyxDQUFDSCx3QkFDNUNGLFdBQVdJLDRCQUE0QixHQUFHO2dCQUVoRCxPQUFPSjtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVkLFVBQVUsRUFBRWUsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0FBQ0MsT0FBT0MsVUFBVWQsWUFBWWU7WUFBVTs7O1dBakN6SjNCO0VBQTRCNEIsaUJBQVk7QUFvQzdELFNBQVNYLHdCQUF3QkYsU0FBUztJQUN4Q0EsWUFBWUEsVUFBVWMsV0FBVyxJQUFLLEdBQUc7SUFFekNkLFlBQVllLElBQUFBLGdDQUF3QixFQUFDZixZQUFhLEdBQUc7SUFFckRBLFlBQVlnQixJQUFBQSw2Q0FBcUMsRUFBQ2hCLFlBQVksR0FBRztJQUVqRUEsWUFBWWlCLElBQUFBLGdDQUF3QixFQUFDakIsWUFBYSxHQUFHO0lBRXJELElBQU1ULGFBQWFTLFdBQVcsR0FBRztJQUVqQyxPQUFPVDtBQUNUIn0=