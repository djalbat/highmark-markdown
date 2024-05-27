"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OrderedListItemMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _index = require("../../utilities/index");
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var OrderedListItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(OrderedListItemMarkdownNode, MarkdownNode);
    var _super = _create_super(OrderedListItemMarkdownNode);
    function OrderedListItemMarkdownNode() {
        _class_call_check(this, OrderedListItemMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(OrderedListItemMarkdownNode, [
        {
            key: "value",
            value: function value(context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), markerTerminalNode = firstChildNode, value = valueFromMarkerTerminalNode(markerTerminalNode);
                return value;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.VALUE_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var value = this.value(context), attributeValue = value; ///
                return attributeValue;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = _constants.EMPTY_STRING;
                var childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode, index) {
                    var indexOdd = (0, _index.isIndexOdd)(index);
                    if (indexOdd) {
                        var markedTextChildNode = childNode, markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context);
                        childNodesHTML = "".concat(childNodesHTML).concat(markedTextChildNodeChildNodesHTML);
                    }
                });
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var domElement = this.getDOMElement(), childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode, index) {
                    var indexOdd = (0, _index.isIndexOdd)(index);
                    if (indexOdd) {
                        var markedTextChildNode = childNode; ///
                        markedTextChildNode.createChildNodeDOMElements(domElement, context);
                    }
                });
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(OrderedListItemMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return OrderedListItemMarkdownNode;
}(_markdown.default);
function valueFromMarkerTerminalNode(markerTerminalNode) {
    var content = markerTerminalNode.getContent(), matches = content.match(/(\d+)\./), secondMatch = second(matches), value = secondMatch; ///
    return value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL29yZGVyZWRMaXN0SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgaXNJbmRleE9kZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFZBTFVFX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyZWRMaXN0SXRlbU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBtYXJrZXJUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tTWFya2VyVGVybWluYWxOb2RlKG1hcmtlclRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gVkFMVUVfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTCA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhPZGQgPSBpc0luZGV4T2RkKGluZGV4KTtcblxuICAgICAgaWYgKGluZGV4T2RkKSB7XG4gICAgICAgIGNvbnN0IG1hcmtlZFRleHRDaGlsZE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtYXJrZWRUZXh0Q2hpbGROb2RlQ2hpbGROb2Rlc0hUTUwgPSBtYXJrZWRUZXh0Q2hpbGROb2RlLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfSR7bWFya2VkVGV4dENoaWxkTm9kZUNoaWxkTm9kZXNIVE1MfWA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhPZGQgPSBpc0luZGV4T2RkKGluZGV4KTtcblxuICAgICAgaWYgKGluZGV4T2RkKSB7XG4gICAgICAgIGNvbnN0IG1hcmtlZFRleHRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIG1hcmtlZFRleHRDaGlsZE5vZGUuY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoZG9tRWxlbWVudCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShPcmRlcmVkTGlzdEl0ZW1NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5mdW5jdGlvbiB2YWx1ZUZyb21NYXJrZXJUZXJtaW5hbE5vZGUobWFya2VyVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBtYXJrZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKFxcZCspXFwuLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB2YWx1ZSA9IHNlY29uZE1hdGNoOyAgLy8vXG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIl0sIm5hbWVzIjpbIk9yZGVyZWRMaXN0SXRlbU1hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJ2YWx1ZSIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwibWFya2VyVGVybWluYWxOb2RlIiwidmFsdWVGcm9tTWFya2VyVGVybWluYWxOb2RlIiwiYXR0cmlidXRlTmFtZSIsIlZBTFVFX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJFTVBUWV9TVFJJTkciLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJpbmRleE9kZCIsImlzSW5kZXhPZGQiLCJtYXJrZWRUZXh0Q2hpbGROb2RlIiwibWFya2VkVGV4dENoaWxkTm9kZUNoaWxkTm9kZXNIVE1MIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7K0RBRU47cUJBRUU7eUJBQ0U7OEJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILDRDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxpQkFBaUJQLE1BQU1LLGFBQ3ZCRyxxQkFBcUJELGdCQUNyQkosUUFBUU0sNEJBQTRCRDtnQkFFMUMsT0FBT0w7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjTixPQUFPO2dCQUNuQixJQUFNTSxnQkFBZ0JDLG9DQUFvQjtnQkFFMUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlUixPQUFPO2dCQUNwQixJQUFNRCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxVQUNuQlEsaUJBQWlCVCxPQUFPLEdBQUc7Z0JBRWpDLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVWLE9BQU87Z0JBQzlCLElBQUlXLGlCQUFpQkMsdUJBQVk7Z0JBRWpDLElBQU1YLGFBQWEsSUFBSSxDQUFDQyxhQUFhO2dCQUVyQ0QsV0FBV1ksT0FBTyxDQUFDLFNBQUNDLFdBQVdDO29CQUM3QixJQUFNQyxXQUFXQyxJQUFBQSxpQkFBVSxFQUFDRjtvQkFFNUIsSUFBSUMsVUFBVTt3QkFDWixJQUFNRSxzQkFBc0JKLFdBQ3RCSyxvQ0FBb0NELG9CQUFvQlQsZ0JBQWdCLENBQUNDLFFBQVFWO3dCQUV2RlcsaUJBQWlCLEFBQUMsR0FBbUJRLE9BQWpCUixnQkFBbUQsT0FBbENRO29CQUN2QztnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQnBCLE9BQU87Z0JBQ2hDLElBQU1xQixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQnJCLGFBQWEsSUFBSSxDQUFDQyxhQUFhO2dCQUVyQ0QsV0FBV1ksT0FBTyxDQUFDLFNBQUNDLFdBQVdDO29CQUM3QixJQUFNQyxXQUFXQyxJQUFBQSxpQkFBVSxFQUFDRjtvQkFFNUIsSUFBSUMsVUFBVTt3QkFDWixJQUFNRSxzQkFBc0JKLFdBQVcsR0FBRzt3QkFFMUNJLG9CQUFvQkUsMEJBQTBCLENBQUNDLFlBQVlyQjtvQkFDN0Q7Z0JBQ0Y7WUFDRjs7OztZQUVPdUIsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUV2QixVQUFVLEVBQUV3QixPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGdDQUFnQyxDQXpEMUc1Qiw2QkF5RHdJNkIsVUFBVXZCLFlBQVl3QjtZQUFVOzs7V0F6RHhLOUI7RUFBb0MrQixpQkFBWTtBQTREckUsU0FBU3JCLDRCQUE0QkQsa0JBQWtCO0lBQ3JELElBQU11QixVQUFVdkIsbUJBQW1Cd0IsVUFBVSxJQUN2Q0MsVUFBVUYsUUFBUUcsS0FBSyxDQUFDLFlBQ3hCQyxjQUFjakMsT0FBTytCLFVBQ3JCOUIsUUFBUWdDLGFBQWMsR0FBRztJQUUvQixPQUFPaEM7QUFDVCJ9