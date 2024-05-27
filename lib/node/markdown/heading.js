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
var _necessary = require("necessary");
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
var second = _necessary.arrayUtilities.second;
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
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), markedTextChildNode = secondChildNode, markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context), childNodesHTML = markedTextChildNodeChildNodesHTML;
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var domElement = this.getDOMElement(), childNodes = this.getChildNodes(), secondChildNode = second(childNodes), markedTextChildNode = secondChildNode; ///
                markedTextChildNode.createChildNodeDOMElements(domElement, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2hlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQW5jaG9yTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuaW1wb3J0IHsgcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zLCByZW1vdmVkTGVhZGluZ1doaXRlc3BhY2UsIHJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBnZXRMZXZlbCgpIHtcbiAgICBjb25zdCB7IGxldmVsIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9XG5cbiAgYWRkQW5jaG9yKGNvbnRleHQpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBhbmNob3JNYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgdGhpcy5wcmVwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGVmdFRyaW1tZWQgPSB0cnVlLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgcG9zaXRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHBvc2l0aW9uID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIG1hcmtlZFRleHRDaGlsZE5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBtYXJrZWRUZXh0Q2hpbGROb2RlQ2hpbGROb2Rlc0hUTUwgPSBtYXJrZWRUZXh0Q2hpbGROb2RlLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IG1hcmtlZFRleHRDaGlsZE5vZGVDaGlsZE5vZGVzSFRNTDtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBtYXJrZWRUZXh0Q2hpbGROb2RlID0gc2Vjb25kQ2hpbGROb2RlOyAgLy8vXG5cbiAgICBtYXJrZWRUZXh0Q2hpbGROb2RlLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGRvbUVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC50b0xvd2VyQ2FzZSgpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlKHBsYWluVGV4dCk7ICAvLy9cblxuICBwbGFpblRleHQgPSByZW1vdmVOb25BbHBoYWJldGljQW5kU3BhY2VDaGFyYWN0ZXJzKHBsYWluVGV4dCk7IC8vL1xuXG4gIHBsYWluVGV4dCA9IHJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyhwbGFpblRleHQpOyAgLy8vXG5cbiAgY29uc3QgaWRlbnRpZmllciA9IHBsYWluVGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG4iXSwibmFtZXMiOlsiSGVhZGluZ01hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwiZ2V0TGV2ZWwiLCJsZXZlbCIsImNvbnN0cnVjdG9yIiwiYWRkQW5jaG9yIiwiY29udGV4dCIsImlkZW50aWZpZXIiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJBbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tSWRlbnRpZmllciIsImNoaWxkTm9kZSIsInByZXBlbmRDaGlsZE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImxlZnRUcmltbWVkIiwicGxhaW5UZXh0IiwicGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMiLCJpZGVudGlmaWVyRnJvbVBsYWluVGV4dCIsInBvc2l0aW9uIiwidG9rZW5zIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsInNlY29uZENoaWxkTm9kZSIsIm1hcmtlZFRleHRDaGlsZE5vZGUiLCJtYXJrZWRUZXh0Q2hpbGROb2RlQ2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIkNsYXNzIiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVkTGVhZGluZ1doaXRlc3BhY2UiLCJyZW1vdmVOb25BbHBoYWJldGljQW5kU3BhY2VDaGFyYWN0ZXJzIiwicmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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