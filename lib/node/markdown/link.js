"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
var _attributeNames = require("../../attributeNames");
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var LinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(LinkMarkdownNode, MarkdownNode);
    var _super = _create_super(LinkMarkdownNode);
    function LinkMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, number) {
        _class_call_check(this, LinkMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, domElement);
        _this.number = number;
        return _this;
    }
    _create_class(LinkMarkdownNode, [
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
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), linkTerminalNode = firstChildNode, identifier = identifierFromLinkTerminalNode(linkTerminalNode);
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
                var identifier = this.identifier(context), attributeValue = "#".concat(identifier); ///
                return attributeValue;
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
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var content = this.content(context), textNode = document.createTextNode(content), domElement = textNode; ///
                this.addDOMElement(domElement);
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(LinkMarkdownNode.prototype), "clone", this).call(this, this.number);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var number = null, linkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(LinkMarkdownNode, ruleName, childNodes, opacity, number);
                return linkMarkdownNode;
            }
        }
    ]);
    return LinkMarkdownNode;
}(_markdown.default);
function identifierFromLinkTerminalNode(linkTerminalNode) {
    var content = linkTerminalNode.getContent(), matches = content.match(/\[\^([^\]]+)]/), secondMatch = second(matches), identifier = secondMatch; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBudW1iZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gKHRoaXMubnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBsaW5rVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21MaW5rVGVybWluYWxOb2RlKGxpbmtUZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgIyR7aWRlbnRpZmllcn1gOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgdGhpcy5hZGRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLm51bWJlcik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGxpbmtNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIG51bWJlcik7XG5cbiAgICByZXR1cm4gbGlua01hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpZGVudGlmaWVyRnJvbUxpbmtUZXJtaW5hbE5vZGUobGlua1Rlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjb250ZW50ID0gbGlua1Rlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9cXFtcXF4oW15cXF1dKyldLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBpZGVudGlmaWVyID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufSJdLCJuYW1lcyI6WyJMaW5rTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsIm51bWJlciIsImdldE51bWJlciIsInNldE51bWJlciIsImNvbnRlbnQiLCJjb250ZXh0IiwiRU1QVFlfU1RSSU5HIiwiaWRlbnRpZmllciIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImxpbmtUZXJtaW5hbE5vZGUiLCJpZGVudGlmaWVyRnJvbUxpbmtUZXJtaW5hbE5vZGUiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhZGRET01FbGVtZW50IiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsImxpbmtNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTsrREFFTjt5QkFFSTs4QkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCxpQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxpQkFDUEksUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE1BQU07Z0NBRHREVDs7a0NBRVhJLFVBQVVDLFlBQVlDLFNBQVNDLFlBQVlDO1FBRWpELE1BQUtDLE1BQU0sR0FBR0E7OztrQkFKR1Q7O1lBT25CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUYsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNRCxVQUFVLEFBQUMsSUFBSSxDQUFDSCxNQUFNLEtBQUssT0FDZixJQUFJLENBQUNBLE1BQU0sR0FDVEssdUJBQVk7Z0JBRWhDLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0YsT0FBTztnQkFDaEIsSUFBTVIsYUFBYSxJQUFJLENBQUNXLGFBQWEsSUFDL0JDLGlCQUFpQmhCLE1BQU1JLGFBQ3ZCYSxtQkFBbUJELGdCQUNuQkYsYUFBYUksK0JBQStCRDtnQkFFbEQsT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjUCxPQUFPO2dCQUNuQixJQUFNTyxnQkFBZ0JDLG1DQUFtQjtnQkFFekMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlVCxPQUFPO2dCQUNwQixJQUFNRSxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDRixVQUM3QlMsaUJBQWlCLEFBQUMsSUFBYyxPQUFYUCxhQUFjLEdBQUc7Z0JBRTVDLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVYLE9BQU87Z0JBQzlCLElBQU1ELFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDLFVBQ3ZCWSxpQkFBaUJiLFNBQVMsR0FBRztnQkFFbkMsT0FBT2E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJiLE9BQU87Z0JBQ2hDLElBQU1ELFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDLFVBQ3ZCYyxXQUFXQyxTQUFTQyxjQUFjLENBQUNqQixVQUNuQ0osYUFBYW1CLFVBQVUsR0FBRztnQkFFaEMsSUFBSSxDQUFDRyxhQUFhLENBQUN0QjtZQUNyQjs7O1lBRUF1QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsT0FBTyx1QkE1REUvQiw2QkE0REkrQixTQUFOLElBQUssYUFBTyxJQUFJLENBQUN0QixNQUFNO1lBQUc7Ozs7WUFFcEN1QixLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUM1QixRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFDbkUsSUFBTUcsU0FBUyxNQUNUd0IsbUJBQW1CQyxpQkFBWSxDQUFDRixnQ0FBZ0MsQ0FoRXJEaEMsa0JBZ0V3RUksVUFBVUMsWUFBWUMsU0FBU0c7Z0JBRXhILE9BQU93QjtZQUNUOzs7V0FuRW1CakM7RUFBeUJrQyxpQkFBWTtBQXNFMUQsU0FBU2YsK0JBQStCRCxnQkFBZ0I7SUFDdEQsSUFBTU4sVUFBVU0saUJBQWlCaUIsVUFBVSxJQUNyQ0MsVUFBVXhCLFFBQVF5QixLQUFLLENBQUMsa0JBQ3hCQyxjQUFjbkMsT0FBT2lDLFVBQ3JCckIsYUFBYXVCLGFBQWEsR0FBRztJQUVuQyxPQUFPdkI7QUFDVCJ9