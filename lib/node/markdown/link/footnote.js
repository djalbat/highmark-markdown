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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
var _constants = require("../../../constants");
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
var second = _necessary.arrayUtilities.second;
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
            // content(context) {
            //   const content = (this.number !== null) ?
            //                     this.number :
            //                       EMPTY_STRING;
            //
            //   return content;
            // }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsvZm9vdG5vdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUxpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCwgbnVtYmVyKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgc2V0TnVtYmVyKG51bWJlcikge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICB9XG5cbiAgLy8gY29udGVudChjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgY29udGVudCA9ICh0aGlzLm51bWJlciAhPT0gbnVsbCkgP1xuICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyIDpcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgLy9cbiAgLy8gICByZXR1cm4gY29udGVudDtcbiAgLy8gfVxuXG4gIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmtUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tTGlua1Rlcm1pbmFsTm9kZShsaW5rVGVybWluYWxOb2RlKTtcblxuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGxhc3RDaGlsZCA9IG51bGwgfSA9IHRoaXMuZG9tRWxlbWVudDtcblxuICAgIGlmIChsYXN0Q2hpbGQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBsYXN0Q2hpbGQsICAvLy9cbiAgICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50ICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRleHROb2RlICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZW51bWJlcihudW1iZXIsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNldE51bWJlcihudW1iZXIpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy51cGRhdGUoY29udGV4dCk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMubnVtYmVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IG51bWJlciA9IG51bGwsXG4gICAgICAgICAgZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3RlTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIG51bWJlcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tTGlua1Rlcm1pbmFsTm9kZShsaW5rVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBsaW5rVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL1xcW1xcXihbXlxcXV0rKV0vKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGlkZW50aWZpZXIgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59Il0sIm5hbWVzIjpbIkZvb3Rub3RlTGlua01hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkb21FbGVtZW50IiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwic2V0TnVtYmVyIiwiaWRlbnRpZmllciIsImNvbnRleHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImxpbmtUZXJtaW5hbE5vZGUiLCJpZGVudGlmaWVyRnJvbUxpbmtUZXJtaW5hbE5vZGUiLCJjbGVhciIsImxhc3RDaGlsZCIsInBhcmVudERPTUVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInVwZGF0ZSIsImNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsInJlbnVtYmVyIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7K0RBRU47eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLElBQUEsQUFBTUQseUNBQU47Y0FBTUE7YUFBQUEseUJBQ1BHLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxNQUFNO2dDQUR0RFI7O2dCQUVqQixrQkFGaUJBO1lBRVhHO1lBQVVDO1lBQVlDO1lBQVNDO1lBQVlDOztRQUVqRCxNQUFLQyxNQUFNLEdBQUdBOzs7a0JBSkdSOztZQU9uQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVGLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQSxxQkFBcUI7WUFDckIsNkNBQTZDO1lBQzdDLG9DQUFvQztZQUNwQyxzQ0FBc0M7WUFDdEMsRUFBRTtZQUNGLG9CQUFvQjtZQUNwQixJQUFJO1lBRUpHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUNoQixJQUFNRCxhQUFhLElBQUksQ0FBQ0Usa0JBQWtCLENBQUMsU0FBQ0M7b0JBQzFDLElBQU1DLG1CQUFtQkQsZ0JBQ25CSCxhQUFhSywrQkFBK0JEO29CQUVsRCxPQUFPSjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksSUFBSSxDQUFDVixVQUFVLEtBQUssTUFBTTtvQkFDNUI7Z0JBQ0Y7Z0JBRUEsSUFBNkIsbUJBQUEsSUFBSSxDQUFDQSxVQUFVLCtCQUFmLGlCQUFyQlcsV0FBQUEsb0RBQVk7Z0JBRXBCLElBQUlBLGNBQWMsTUFBTTtvQkFDdEIsSUFBTVgsYUFBYVcsV0FDYkMsbUJBQW1CLElBQUksQ0FBQ1osVUFBVTtvQkFFeENZLGlCQUFpQkMsV0FBVyxDQUFDYjtnQkFDL0I7WUFDRjs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPVCxPQUFPO2dCQUNaLElBQUksSUFBSSxDQUFDTCxVQUFVLEtBQUssTUFBTTtvQkFDNUI7Z0JBQ0Y7Z0JBRUEsSUFBTWUsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1Y7Z0JBRTdCLElBQUlVLFlBQVlDLHVCQUFZLEVBQUU7b0JBQzVCLElBQU1DLFdBQVlDLFNBQVNDLGNBQWMsQ0FBQ0osVUFDcENmLGFBQWFpQixVQUNiTCxtQkFBbUIsSUFBSSxDQUFDWixVQUFVLEVBQUUsR0FBRztvQkFFN0NZLGlCQUFpQlEsV0FBVyxDQUFDcEI7Z0JBQy9CO1lBQ0Y7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNwQixNQUFNLEVBQUVJLE9BQU87Z0JBQ3RCLElBQUksQ0FBQ0YsU0FBUyxDQUFDRjtnQkFFZixJQUFJLENBQUNTLEtBQUs7Z0JBRVYsSUFBSSxDQUFDSSxNQUFNLENBQUNUO1lBQ2Q7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFVLE9BQU8sdUJBekVFN0IscUNBeUVJNkIsU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDckIsTUFBTTtZQUFHOzs7O1lBRXBDc0IsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDM0IsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ25FLElBQU1HLFNBQVMsTUFDVHVCLDJCQUEyQkMsaUJBQVksQ0FBQ0YsZ0NBQWdDLENBN0U3RDlCLDBCQTZFd0ZHLFVBQVVDLFlBQVlDLFNBQVNHO2dCQUV4SSxPQUFPdUI7WUFDVDs7O1dBaEZtQi9CO0VBQWlDZ0MsaUJBQVk7QUFtRmxFLFNBQVNoQiwrQkFBK0JELGdCQUFnQjtJQUN0RCxJQUFNTyxVQUFVUCxpQkFBaUJrQixVQUFVLElBQ3JDQyxVQUFVWixRQUFRYSxLQUFLLENBQUMsa0JBQ3hCQyxjQUFjbkMsT0FBT2lDLFVBQ3JCdkIsYUFBYXlCLGFBQWEsR0FBRztJQUVuQyxPQUFPekI7QUFDVCJ9