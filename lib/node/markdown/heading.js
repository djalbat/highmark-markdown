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
                var childNodes = this.getChildNodes(), plainText = (0, _childNodes.plainTextFromChildNodes)(childNodes, context), identifier = identifierFromPlainText(plainText);
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
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), lineMarkdownNode = secondChildNode, lineMarkdownNodeHTML = lineMarkdownNode.asHTML(indent, context), childNodesHTML = lineMarkdownNodeHTML; ///
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), lineMarkdownNodeHTML = secondChildNode, lineMarkdownNodeHTMLDOMElement = lineMarkdownNodeHTML.createDOMElement(context), domElement = lineMarkdownNodeHTMLDOMElement; ///
                this.addDOMElement(domElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2hlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQW5jaG9yTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuaW1wb3J0IHsgcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zLCByZW1vdmVkTGVhZGluZ1doaXRlc3BhY2UsIHJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBnZXRMZXZlbCgpIHtcbiAgICBjb25zdCB7IGxldmVsIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9XG5cbiAgYWRkQW5jaG9yKGNvbnRleHQpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBhbmNob3JNYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgdGhpcy5wcmVwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tUGxhaW5UZXh0KHBsYWluVGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIHBvc2l0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBsaW5lTWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgbGluZU1hcmtkb3duTm9kZUhUTUwgPSBsaW5lTWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gbGluZU1hcmtkb3duTm9kZUhUTUw7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGxpbmVNYXJrZG93bk5vZGVIVE1MID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBsaW5lTWFya2Rvd25Ob2RlSFRNTERPTUVsZW1lbnQgPSBsaW5lTWFya2Rvd25Ob2RlSFRNTC5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBsaW5lTWFya2Rvd25Ob2RlSFRNTERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHRoaXMuYWRkRE9NRWxlbWVudChkb21FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tUGxhaW5UZXh0KHBsYWluVGV4dCkge1xuICBwbGFpblRleHQgPSBwbGFpblRleHQudG9Mb3dlckNhc2UoKTsgIC8vL1xuXG4gIHBsYWluVGV4dCA9IHJlbW92ZWRMZWFkaW5nV2hpdGVzcGFjZShwbGFpblRleHQpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcmVtb3ZlTm9uQWxwaGFiZXRpY0FuZFNwYWNlQ2hhcmFjdGVycyhwbGFpblRleHQpOyAvLy9cblxuICBwbGFpblRleHQgPSByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMocGxhaW5UZXh0KTsgIC8vL1xuXG4gIGNvbnN0IGlkZW50aWZpZXIgPSBwbGFpblRleHQ7IC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRpbmdNYXJrZG93bk5vZGUiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImdldExldmVsIiwibGV2ZWwiLCJjb25zdHJ1Y3RvciIsImFkZEFuY2hvciIsImNvbnRleHQiLCJpZGVudGlmaWVyIiwiYW5jaG9yTWFya2Rvd25Ob2RlIiwiQW5jaG9yTWFya2Rvd25Ob2RlIiwiZnJvbUlkZW50aWZpZXIiLCJjaGlsZE5vZGUiLCJwcmVwZW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwbGFpblRleHQiLCJwbGFpblRleHRGcm9tQ2hpbGROb2RlcyIsImlkZW50aWZpZXJGcm9tUGxhaW5UZXh0IiwicG9zaXRpb24iLCJ0b2tlbnMiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50Iiwic2Vjb25kQ2hpbGROb2RlIiwibGluZU1hcmtkb3duTm9kZSIsImxpbmVNYXJrZG93bk5vZGVIVE1MIiwiYXNIVE1MIiwiY2hpbGROb2Rlc0hUTUwiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImxpbmVNYXJrZG93bk5vZGVIVE1MRE9NRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiYWRkRE9NRWxlbWVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiQ2xhc3MiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZWRMZWFkaW5nV2hpdGVzcGFjZSIsInJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMiLCJyZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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