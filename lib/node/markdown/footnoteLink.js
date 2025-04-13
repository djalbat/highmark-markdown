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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3RlTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBudW1iZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICAvLyBjb250ZW50KGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBjb250ZW50ID0gKHRoaXMubnVtYmVyICE9PSBudWxsKSA/XG4gIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIgOlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICAvL1xuICAvLyAgIHJldHVybiBjb250ZW50O1xuICAvLyB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGlua1Rlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21MaW5rVGVybWluYWxOb2RlKGxpbmtUZXJtaW5hbE5vZGUpO1xuXG4gICAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgICB9KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbGFzdENoaWxkID0gbnVsbCB9ID0gdGhpcy5kb21FbGVtZW50O1xuXG4gICAgaWYgKGxhc3RDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGxhc3RDaGlsZCwgIC8vL1xuICAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDtcblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoY29udGV4dCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnQgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgY29uc3QgdGV4dE5vZGUgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbnVtYmVyKG51bWJlciwgY29udGV4dCkge1xuICAgIHRoaXMuc2V0TnVtYmVyKG51bWJlcik7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnVwZGF0ZShjb250ZXh0KTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5udW1iZXIpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZUxpbmtNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgbnVtYmVyKTtcblxuICAgIHJldHVybiBmb290bm90ZUxpbmtNYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllckZyb21MaW5rVGVybWluYWxOb2RlKGxpbmtUZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY29udGVudCA9IGxpbmtUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXFxbXFxeKFteXFxdXSspXS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn0iXSwibmFtZXMiOlsiRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJpZGVudGlmaWVyIiwiY29udGV4dCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwibGlua1Rlcm1pbmFsTm9kZSIsImlkZW50aWZpZXJGcm9tTGlua1Rlcm1pbmFsTm9kZSIsImNsZWFyIiwibGFzdENoaWxkIiwicGFyZW50RE9NRWxlbWVudCIsInJlbW92ZUNoaWxkIiwidXBkYXRlIiwiY29udGVudCIsIkVNUFRZX1NUUklORyIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwicmVudW1iZXIiLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCx5Q0FBTjtjQUFNQTthQUFBQSx5QkFDUEcsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE1BQU07Z0NBRHREUjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7WUFBVUM7WUFBWUM7WUFBU0M7WUFBWUM7O1FBRWpELE1BQUtDLE1BQU0sR0FBR0E7OztrQkFKR1I7O1lBT25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUYsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBLHFCQUFxQjtZQUNyQiw2Q0FBNkM7WUFDN0Msb0NBQW9DO1lBQ3BDLHNDQUFzQztZQUN0QyxFQUFFO1lBQ0Ysb0JBQW9CO1lBQ3BCLElBQUk7WUFFSkcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQU1ELGFBQWEsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDMUMsSUFBTUMsbUJBQW1CRCxnQkFDbkJILGFBQWFLLCtCQUErQkQ7b0JBRWxELE9BQU9KO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxJQUFJLENBQUNWLFVBQVUsS0FBSyxNQUFNO29CQUM1QjtnQkFDRjtnQkFFQSxJQUE2QixtQkFBQSxJQUFJLENBQUNBLFVBQVUsK0JBQWYsaUJBQXJCVyxXQUFBQSxvREFBWTtnQkFFcEIsSUFBSUEsY0FBYyxNQUFNO29CQUN0QixJQUFNWCxhQUFhVyxXQUNiQyxtQkFBbUIsSUFBSSxDQUFDWixVQUFVO29CQUV4Q1ksaUJBQWlCQyxXQUFXLENBQUNiO2dCQUMvQjtZQUNGOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9ULE9BQU87Z0JBQ1osSUFBSSxJQUFJLENBQUNMLFVBQVUsS0FBSyxNQUFNO29CQUM1QjtnQkFDRjtnQkFFQSxJQUFNZSxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDVjtnQkFFN0IsSUFBSVUsWUFBWUMsdUJBQVksRUFBRTtvQkFDNUIsSUFBTUMsV0FBWUMsU0FBU0MsY0FBYyxDQUFDSixVQUNwQ2YsYUFBYWlCLFVBQ2JMLG1CQUFtQixJQUFJLENBQUNaLFVBQVUsRUFBRSxHQUFHO29CQUU3Q1ksaUJBQWlCUSxXQUFXLENBQUNwQjtnQkFDL0I7WUFDRjs7O1lBRUFxQixLQUFBQTttQkFBQUEsU0FBQUEsU0FBU3BCLE1BQU0sRUFBRUksT0FBTztnQkFDdEIsSUFBSSxDQUFDRixTQUFTLENBQUNGO2dCQUVmLElBQUksQ0FBQ1MsS0FBSztnQkFFVixJQUFJLENBQUNJLE1BQU0sQ0FBQ1Q7WUFDZDs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsT0FBTyx1QkF6RUU3QixxQ0F5RUk2QixTQUFOLElBQUssYUFBTyxJQUFJLENBQUNyQixNQUFNO1lBQUc7Ozs7WUFFcENzQixLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUMzQixRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFDbkUsSUFBTUcsU0FBUyxNQUNUdUIsMkJBQTJCQyxpQkFBWSxDQUFDRixnQ0FBZ0MsQ0E3RTdEOUIsMEJBNkV3RkcsVUFBVUMsWUFBWUMsU0FBU0c7Z0JBRXhJLE9BQU91QjtZQUNUOzs7V0FoRm1CL0I7RUFBaUNnQyxpQkFBWTtBQW1GbEUsU0FBU2hCLCtCQUErQkQsZ0JBQWdCO0lBQ3RELElBQU1PLFVBQVVQLGlCQUFpQmtCLFVBQVUsSUFDckNDLFVBQVVaLFFBQVFhLEtBQUssQ0FBQyxrQkFDeEJDLGNBQWNuQyxPQUFPaUMsVUFDckJ2QixhQUFheUIsYUFBYSxHQUFHO0lBRW5DLE9BQU96QjtBQUNUIn0=