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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3RlTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBudW1iZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gKHRoaXMubnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBsaW5rVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbUxpbmtUZXJtaW5hbE5vZGUobGlua1Rlcm1pbmFsTm9kZSk7XG5cbiAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBsYXN0Q2hpbGQgPSBudWxsIH0gPSB0aGlzLmRvbUVsZW1lbnQ7XG5cbiAgICBpZiAobGFzdENoaWxkICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gbGFzdENoaWxkLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50O1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBjb25zdCB0ZXh0Tm9kZSAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmVudW1iZXIobnVtYmVyLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMudXBkYXRlKGNvbnRleHQpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLm51bWJlcik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlTGlua01hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShGb290bm90ZUxpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBudW1iZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua01hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpZGVudGlmaWVyRnJvbUxpbmtUZXJtaW5hbE5vZGUobGlua1Rlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjb250ZW50ID0gbGlua1Rlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9cXFtcXF4oW15cXF1dKyldLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBpZGVudGlmaWVyID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufSJdLCJuYW1lcyI6WyJGb290bm90ZUxpbmtNYXJrZG93bk5vZGUiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsIm51bWJlciIsImdldE51bWJlciIsInNldE51bWJlciIsImNvbnRlbnQiLCJjb250ZXh0IiwiRU1QVFlfU1RSSU5HIiwiaWRlbnRpZmllciIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwibGlua1Rlcm1pbmFsTm9kZSIsImlkZW50aWZpZXJGcm9tTGlua1Rlcm1pbmFsTm9kZSIsImNsZWFyIiwibGFzdENoaWxkIiwicGFyZW50RE9NRWxlbWVudCIsInJlbW92ZUNoaWxkIiwidXBkYXRlIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJyZW51bWJlciIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOO3lCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELHlDQUFOO2NBQU1BO2FBQUFBLHlCQUNQRyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsTUFBTTtnQ0FEdERSOztnQkFFakIsa0JBRmlCQTtZQUVYRztZQUFVQztZQUFZQztZQUFTQztZQUFZQzs7UUFFakQsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHUjs7WUFPbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRixNQUFNO2dCQUNkLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtZQUNoQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1ELFVBQVUsQUFBQyxJQUFJLENBQUNILE1BQU0sS0FBSyxPQUNmLElBQUksQ0FBQ0EsTUFBTSxHQUNUSyx1QkFBWTtnQkFFaEMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXRixPQUFPO2dCQUNoQixJQUFNRSxhQUFhLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQzFDLElBQU1DLG1CQUFtQkQsZ0JBQ25CRixhQUFhSSwrQkFBK0JEO29CQUVsRCxPQUFPSDtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksSUFBSSxDQUFDWixVQUFVLEtBQUssTUFBTTtvQkFDNUI7Z0JBQ0Y7Z0JBRUEsSUFBNkIsbUJBQUEsSUFBSSxDQUFDQSxVQUFVLCtCQUFmLGlCQUFyQmEsV0FBQUEsb0RBQVk7Z0JBRXBCLElBQUlBLGNBQWMsTUFBTTtvQkFDdEIsSUFBTWIsYUFBYWEsV0FDYkMsbUJBQW1CLElBQUksQ0FBQ2QsVUFBVTtvQkFFeENjLGlCQUFpQkMsV0FBVyxDQUFDZjtnQkFDL0I7WUFDRjs7O1lBRUFnQixLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1gsT0FBTztnQkFDWixJQUFJLElBQUksQ0FBQ0wsVUFBVSxLQUFLLE1BQU07b0JBQzVCO2dCQUNGO2dCQUVBLElBQU1JLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDO2dCQUU3QixJQUFJRCxZQUFZRSx1QkFBWSxFQUFFO29CQUM1QixJQUFNVyxXQUFZQyxTQUFTQyxjQUFjLENBQUNmLFVBQ3BDSixhQUFhaUIsVUFDYkgsbUJBQW1CLElBQUksQ0FBQ2QsVUFBVSxFQUFFLEdBQUc7b0JBRTdDYyxpQkFBaUJNLFdBQVcsQ0FBQ3BCO2dCQUMvQjtZQUNGOzs7WUFFQXFCLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTcEIsTUFBTSxFQUFFSSxPQUFPO2dCQUN0QixJQUFJLENBQUNGLFNBQVMsQ0FBQ0Y7Z0JBRWYsSUFBSSxDQUFDVyxLQUFLO2dCQUVWLElBQUksQ0FBQ0ksTUFBTSxDQUFDWDtZQUNkOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVSxPQUFPLHVCQXpFRTdCLHFDQXlFSTZCLFNBQU4sSUFBSyxhQUFPLElBQUksQ0FBQ3JCLE1BQU07WUFBRzs7OztZQUVwQ3NCLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQzNCLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUNuRSxJQUFNRyxTQUFTLE1BQ1R1QiwyQkFBMkJDLGlCQUFZLENBQUNGLGdDQUFnQyxDQTdFN0Q5QiwwQkE2RXdGRyxVQUFVQyxZQUFZQyxTQUFTRztnQkFFeEksT0FBT3VCO1lBQ1Q7OztXQWhGbUIvQjtFQUFpQ2dDLGlCQUFZO0FBbUZsRSxTQUFTZCwrQkFBK0JELGdCQUFnQjtJQUN0RCxJQUFNTixVQUFVTSxpQkFBaUJnQixVQUFVLElBQ3JDQyxVQUFVdkIsUUFBUXdCLEtBQUssQ0FBQyxrQkFDeEJDLGNBQWNuQyxPQUFPaUMsVUFDckJwQixhQUFhc0IsYUFBYSxHQUFHO0lBRW5DLE9BQU90QjtBQUNUIn0=