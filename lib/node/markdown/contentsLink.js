"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _attributeNames = require("../../attributeNames");
var _ruleNames = require("../../ruleNames");
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
var push = _necessary.arrayUtilities.push;
var ContentsLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsLinkMarkdownNode, MarkdownNode);
    var _super = _create_super(ContentsLinkMarkdownNode);
    function ContentsLinkMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, identifier) {
        _class_call_check(this, ContentsLinkMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, domElement);
        _this.identifier = identifier;
        return _this;
    }
    _create_class(ContentsLinkMarkdownNode, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = "#".concat(this.identifier);
                return attributeValue;
            }
        }
    ], [
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsLinkMarkdownNode = null;
                var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                if (headingMarkdownNode !== null) {
                    var replacementTokens = context.replacementTokens, headingMarkdownNodeOffset = offsetFromNode(headingMarkdownNode, context), headingMarkdownNodeTokens = tokensFromNode(headingMarkdownNode, context), headingMarkdownNodeChildNodes = childNodesFromNode(headingMarkdownNode);
                    push(replacementTokens, headingMarkdownNodeTokens);
                    replaceChildNodesTokens(headingMarkdownNodeChildNodes, headingMarkdownNodeTokens, headingMarkdownNodeOffset, context);
                    var childNodes = headingMarkdownNodeChildNodes, ruleName = _ruleNames.CONTENTS_LINK_RULE_NAME, opacity = null, identifier = headingMarkdownNode.identifier(context);
                    contentsLinkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, identifier);
                }
                return contentsLinkMarkdownNode;
            }
        }
    ]);
    return ContentsLinkMarkdownNode;
}(_markdown.default);
function offsetFromNode(node, context) {
    var tokens = context.tokens, nonTerminalNode = node, firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), offset = firstSignificantTokenIndex; ///
    return offset;
}
function tokensFromNode(node, context) {
    var tokens;
    tokens = context.tokens;
    var nonTerminalNode = node, lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end);
    tokens = tokens.map(function(token) {
        token = token.clone(); ///
        return token;
    });
    return tokens;
}
function childNodesFromNode(node) {
    var childNodes;
    var nonTerminalNode = node; ///
    childNodes = nonTerminalNode.getChildNodes();
    childNodes = childNodes.map(function(childNode) {
        childNode = childNode.clone(); ///
        return childNode;
    });
    return childNodes;
}
function replaceNodeTokens(node, replacementTokens, offset, context) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        replaceTerminalNodeTokens(terminalNode, replacementTokens, offset, context);
    } else {
        var nonTerminalNode = node; ///
        replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, offset, context);
    }
}
function replaceChildNodesTokens(childNodes, tokens, offset, context) {
    childNodes.forEach(function(childNode) {
        var node = childNode; ///
        replaceNodeTokens(node, tokens, offset, context);
    });
}
function replaceTerminalNodeTokens(terminalNode, tokens, offset, context) {
    var index, significantToken;
    var temporaryTokens = tokens; ///
    tokens = context.tokens;
    significantToken = terminalNode.getSignificantToken();
    index = tokens.indexOf(significantToken);
    index -= offset;
    tokens = temporaryTokens; ///
    var token = tokens[index];
    significantToken = token; ///
    terminalNode.setSignificantToken(significantToken);
}
function replaceNonTerminalNodeTokens(nonTerminalNode, tokens, offset, context) {
    var childNodes = nonTerminalNode.getChildNodes();
    replaceChildNodesTokens(childNodes, tokens, offset, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgQ09OVEVOVFNfTElOS19SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBpZGVudGlmaWVyKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBgIyR7dGhpcy5pZGVudGlmaWVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyByZXBsYWNlbWVudFRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVPZmZzZXQgPSBvZmZzZXRGcm9tTm9kZShoZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSwgLy8vXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlVG9rZW5zID0gdG9rZW5zRnJvbU5vZGUoaGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXNGcm9tTm9kZShoZWFkaW5nTWFya2Rvd25Ob2RlKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudFRva2VucywgaGVhZGluZ01hcmtkb3duTm9kZVRva2Vucyk7XG5cbiAgICAgIHJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zKGhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzLCBoZWFkaW5nTWFya2Rvd25Ob2RlVG9rZW5zLCBoZWFkaW5nTWFya2Rvd25Ob2RlT2Zmc2V0LCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gQ09OVEVOVFNfTElOS19SVUxFX05BTUUsXG4gICAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0xpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBpZGVudGlmaWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaW5rTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIG9mZnNldCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4OyAgLy8vXG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gdG9rZW5zRnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICBsZXQgdG9rZW5zO1xuXG4gICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTtcblxuICB0b2tlbnMgPSB0b2tlbnMubWFwKCh0b2tlbikgPT4geyAgLy8vXG4gICAgdG9rZW4gPSB0b2tlbi5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGNoaWxkTm9kZXNGcm9tTm9kZShub2RlKSB7XG4gIGxldCBjaGlsZE5vZGVzO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5tYXAoKGNoaWxkTm9kZSkgPT4geyAvLy9cbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJlcGxhY2VUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCBjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgY29udGV4dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgdG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpIHtcbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHRva2Vucywgb2Zmc2V0LCBjb250ZXh0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMsIG9mZnNldCwgY29udGV4dCkge1xuICBsZXQgaW5kZXgsXG4gICAgICBzaWduaWZpY2FudFRva2VuO1xuXG4gIGNvbnN0IHRlbXBvcmFyeVRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gIGluZGV4IC09IG9mZnNldDtcblxuICB0b2tlbnMgPSB0ZW1wb3JhcnlUb2tlbnM7IC8vL1xuXG4gIGNvbnN0IHRva2VuID0gdG9rZW5zW2luZGV4XTtcblxuICBzaWduaWZpY2FudFRva2VuID0gdG9rZW47ICAvLy9cblxuICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucywgb2Zmc2V0LCBjb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIHJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucywgb2Zmc2V0LCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImF0dHJpYnV0ZU5hbWUiLCJjb250ZXh0IiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGVudHNMaW5rTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJoZWFkaW5nTWFya2Rvd25Ob2RlT2Zmc2V0Iiwib2Zmc2V0RnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlVG9rZW5zIiwidG9rZW5zRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNGcm9tTm9kZSIsInJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zIiwiQ09OVEVOVFNfTElOS19SVUxFX05BTUUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm9mZnNldCIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsIm1hcCIsInRva2VuIiwiY2xvbmUiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2RlIiwicmVwbGFjZU5vZGVUb2tlbnMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2VucyIsImZvckVhY2giLCJpbmRleCIsInNpZ25pZmljYW50VG9rZW4iLCJ0ZW1wb3JhcnlUb2tlbnMiLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2V0U2lnbmlmaWNhbnRUb2tlbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTsrREFFTjs4QkFFVzt5QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVP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