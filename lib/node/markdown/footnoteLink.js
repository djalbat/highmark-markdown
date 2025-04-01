"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteLinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
var _prepends = require("../../prepends");
var _attributeNames = require("../../attributeNames");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var FootnoteLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnoteLinkMarkdownNode, MarkdownNode);
    function FootnoteLinkMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, number) {
        _class_call_check(this, FootnoteLinkMarkdownNode);
        var _this;
        _this = _call_super(this, FootnoteLinkMarkdownNode, [
            ruleName,
            childNodes,
            opacity,
            precedence,
            domElement
        ]);
        _this.number = number;
        return _this;
    }
    _create_class(FootnoteLinkMarkdownNode, [
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "setNumber",
            value: function setNumber(number) {
                this.number = number;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = this.number !== null ? this.number : _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var identifier = this.fromFirstChildNode(function(firstChildNode) {
                    var linkTerminalNode = firstChildNode, identifier = identifierFromLinkTerminalNode(linkTerminalNode);
                    return identifier;
                });
                return identifier;
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
                var prepend = _prepends.FOOTNOTE_PREPEND, identifier = this.identifier(context), attributeValue = "#".concat(prepend, "-").concat(identifier); ///
                return attributeValue;
            }
        },
        {
            key: "clear",
            value: function clear() {
                if (this.domElement === null) {
                    return;
                }
                var _this_domElement = this.domElement, _this_domElement_lastChild = _this_domElement.lastChild, lastChild = _this_domElement_lastChild === void 0 ? null : _this_domElement_lastChild;
                if (lastChild !== null) {
                    var domElement = lastChild, parentDOMElement = this.domElement;
                    parentDOMElement.removeChild(domElement);
                }
            }
        },
        {
            key: "update",
            value: function update(context) {
                if (this.domElement === null) {
                    return;
                }
                var content = this.content(context);
                if (content !== _constants.EMPTY_STRING) {
                    var textNode = document.createTextNode(content), domElement = textNode, parentDOMElement = this.domElement; ///
                    parentDOMElement.appendChild(domElement);
                }
            }
        },
        {
            key: "renumber",
            value: function renumber(number, context) {
                this.setNumber(number);
                this.clear();
                this.update(context);
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.content(context), childNodesHTML = content; ///
                return childNodesHTML;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(FootnoteLinkMarkdownNode.prototype), "clone", this).call(this, this.number);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var number = null, footnoteLinkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnoteLinkMarkdownNode, ruleName, childNodes, opacity, number);
                return footnoteLinkMarkdownNode;
            }
        }
    ]);
    return FootnoteLinkMarkdownNode;
}(_markdown.default);
function identifierFromLinkTerminalNode(linkTerminalNode) {
    var content = linkTerminalNode.getContent(), matches = content.match(/\[\^([^\]]+)]/), secondMatch = second(matches), identifier = secondMatch; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3RlTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUxpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCwgbnVtYmVyKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgc2V0TnVtYmVyKG51bWJlcikge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9ICh0aGlzLm51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGlua1Rlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21MaW5rVGVybWluYWxOb2RlKGxpbmtUZXJtaW5hbE5vZGUpO1xuXG4gICAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgICB9KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gRk9PVE5PVEVfUFJFUEVORCxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke3ByZXBlbmR9LSR7aWRlbnRpZmllcn1gOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGxhc3RDaGlsZCA9IG51bGwgfSA9IHRoaXMuZG9tRWxlbWVudDtcblxuICAgIGlmIChsYXN0Q2hpbGQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBsYXN0Q2hpbGQsICAvLy9cbiAgICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50ICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRleHROb2RlICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZW51bWJlcihudW1iZXIsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNldE51bWJlcihudW1iZXIpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy51cGRhdGUoY29udGV4dCk7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5udW1iZXIpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZUxpbmtNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgbnVtYmVyKTtcblxuICAgIHJldHVybiBmb290bm90ZUxpbmtNYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllckZyb21MaW5rVGVybWluYWxOb2RlKGxpbmtUZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY29udGVudCA9IGxpbmtUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXFxbXFxeKFteXFxdXSspXS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn0iXSwibmFtZXMiOlsiRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsIm51bWJlciIsImdldE51bWJlciIsInNldE51bWJlciIsImNvbnRlbnQiLCJjb250ZXh0IiwiRU1QVFlfU1RSSU5HIiwiaWRlbnRpZmllciIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwibGlua1Rlcm1pbmFsTm9kZSIsImlkZW50aWZpZXJGcm9tTGlua1Rlcm1pbmFsTm9kZSIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJwcmVwZW5kIiwiRk9PVE5PVEVfUFJFUEVORCIsImNsZWFyIiwibGFzdENoaWxkIiwicGFyZW50RE9NRWxlbWVudCIsInJlbW92ZUNoaWxkIiwidXBkYXRlIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJyZW51bWJlciIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVOO3lCQUVJO3dCQUNJOzhCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHlDQUFOO2NBQU1BO2FBQUFBLHlCQUNQSSxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsTUFBTTtnQ0FEdERUOztnQkFFakIsa0JBRmlCQTtZQUVYSTtZQUFVQztZQUFZQztZQUFTQztZQUFZQzs7UUFFakQsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHVDs7WUFPbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRixNQUFNO2dCQUNkLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtZQUNoQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1ELFVBQVUsQUFBQyxJQUFJLENBQUNILE1BQU0sS0FBSyxPQUNmLElBQUksQ0FB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