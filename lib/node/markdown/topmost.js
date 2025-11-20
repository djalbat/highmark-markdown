"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _markdown1 = require("../../utilities/markdown");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var first = _necessary.arrayUtilities.first;
var TopmostMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(TopmostMarkdownNode, MarkdownNode);
    function TopmostMarkdownNode() {
        _class_call_check(this, TopmostMarkdownNode);
        return _call_super(this, TopmostMarkdownNode, arguments);
    }
    _create_class(TopmostMarkdownNode, [
        {
            key: "resolve",
            value: function resolve(context) {
                var firstDivisionMarkdownNode = this.getFirstDivisionMarkdownNode();
                if (firstDivisionMarkdownNode === null) {
                    return;
                }
                var topmostMarkdownNode = this; ///
                firstDivisionMarkdownNode.resolveIncludes(topmostMarkdownNode, context);
                this.forEachDivisionMarkdownNode(function(divisionMarkdownNode) {
                    divisionMarkdownNode.resolveIgnored(topmostMarkdownNode, context);
                });
                this.forEachDivisionMarkdownNode(function(divisionMarkdownNode) {
                    divisionMarkdownNode.resolveEmbeddings(context);
                });
            }
        },
        {
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var node = this, divisionMarkdownNodes = (0, _markdown1.divisionMarkdownNodesFromNode)(node);
                return divisionMarkdownNodes;
            }
        },
        {
            key: "getFirstDivisionMarkdownNode",
            value: function getFirstDivisionMarkdownNode() {
                var firstDivisionMarkdownNode = null;
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNodesLength = divisionMarkdownNodes.length;
                if (divisionMarkdownNodesLength > 0) {
                    firstDivisionMarkdownNode = first(divisionMarkdownNodes);
                }
                return firstDivisionMarkdownNode;
            }
        },
        {
            key: "forEachDivisionMarkdownNode",
            value: function forEachDivisionMarkdownNode(callback) {
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes();
                divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                    callback(divisionMarkdownNode);
                });
            }
        },
        {
            key: "removeDivisionMarkdownNode",
            value: function removeDivisionMarkdownNode(divisionMarkdownNode) {
                var childNode = divisionMarkdownNode; ///
                this.removeChildNode(childNode);
            }
        }
    ], [
        {
            key: "fromChildMarkdownNodes",
            value: function fromChildMarkdownNodes(childMarkdownNodes) {
                var ruleName = null, childNodes = childMarkdownNodes, opacity = null, precedence = null, topmostMarkdownNode = _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(TopmostMarkdownNode, ruleName, childNodes, opacity, precedence);
                return topmostMarkdownNode;
            }
        },
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(TopmostMarkdownNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TopmostMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RvcG1vc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXJrZG93blwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IGZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLmdldEZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgIGlmIChmaXJzdERpdmlzaW9uTWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IHRoaXM7IC8vL1xuXG4gICAgZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXModG9wbW9zdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLmZvckVhY2hEaXZpc2lvbk1hcmtkb3duTm9kZSgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJZ25vcmVkKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JFYWNoRGl2aXNpb25NYXJrZG93bk5vZGUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldERpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldEZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgbGV0IGZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXNMZW5ndGggPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUgPSBmaXJzdChkaXZpc2lvbk1hcmtkb3duTm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdERpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgZm9yRWFjaERpdmlzaW9uTWFya2Rvd25Ob2RlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY2FsbGJhY2soZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGRNYXJrZG93bk5vZGVzKGNoaWxkTWFya2Rvd25Ob2Rlcykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbnVsbCxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2hpbGRNYXJrZG93bk5vZGVzLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgdG9wbW9zdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVG9wbW9zdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFRvcG1vc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRvcG1vc3RNYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicmVzb2x2ZSIsImNvbnRleHQiLCJmaXJzdERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0Rmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSIsInRvcG1vc3RNYXJrZG93bk5vZGUiLCJyZXNvbHZlSW5jbHVkZXMiLCJmb3JFYWNoRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlc29sdmVJZ25vcmVkIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJub2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjYWxsYmFjayIsImZvckVhY2giLCJyZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNoaWxkTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsImZyb21DaGlsZE1hcmtkb3duTm9kZXMiLCJjaGlsZE1hcmtkb3duTm9kZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7K0RBRU47eUJBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUMsNEJBQTRCLElBQUksQ0FBQ0MsNEJBQTRCO2dCQUVuRSxJQUFJRCw4QkFBOEIsTUFBTTtvQkFDdEM7Z0JBQ0Y7Z0JBRUEsSUFBTUUsc0JBQXNCLElBQUksRUFBRSxHQUFHO2dCQUVyQ0YsMEJBQTBCRyxlQUFlLENBQUNELHFCQUFxQkg7Z0JBRS9ELElBQUksQ0FBQ0ssMkJBQTJCLENBQUMsU0FBQ0M7b0JBQ2hDQSxxQkFBcUJDLGNBQWMsQ0FBQ0oscUJBQXFCSDtnQkFDM0Q7Z0JBRUEsSUFBSSxDQUFDSywyQkFBMkIsQ0FBQyxTQUFDQztvQkFDaENBLHFCQUFxQkUsaUJBQWlCLENBQUNSO2dCQUN6QztZQUNGOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxFQUNYQyx3QkFBd0JDLElBQUFBLHdDQUE2QixFQUFDRjtnQkFFNUQsT0FBT0M7WUFDVDs7O1lBRUFULEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCw0QkFBNEI7Z0JBRWhDLElBQU1VLHdCQUF3QixJQUFJLENBQUNGLHdCQUF3QixJQUNyREksOEJBQThCRixzQkFBc0JHLE1BQU07Z0JBRWhFLElBQUlELDhCQUE4QixHQUFHO29CQUNuQ1osNEJBQTRCSixNQUFNYztnQkFDcEM7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJVLFFBQVE7Z0JBQ2xDLElBQU1KLHdCQUF3QixJQUFJLENBQUNGLHdCQUF3QjtnQkFFM0RFLHNCQUFzQkssT0FBTyxDQUFDLFNBQUNWO29CQUM3QlMsU0FBU1Q7Z0JBQ1g7WUFDRjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJYLG9CQUFvQjtnQkFDN0MsSUFBTVksWUFBWVosc0JBQXVCLEdBQUc7Z0JBRTVDLElBQUksQ0FBQ2EsZUFBZSxDQUFDRDtZQUN2Qjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJDLGtCQUFrQjtnQkFDOUMsSUFBTUMsV0FBVyxNQUNYQyxhQUFhRixvQkFDYkcsVUFBVSxNQUNWQyxhQUFhLE1BQ2J0QixzQkFBc0J1QixpQkFBWSxDQUFDQywwQ0FBMEMsQ0E1RGxFL0IscUJBNER3RjBCLFVBQVVDLFlBQVlDLFNBQVNDO2dCQUV4SSxPQUFPdEI7WUFDVDs7O1lBRU93QixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNMLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0MsMENBQTBDLENBakUxSS9CLHFCQWlFZ0swQixVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0FqRTVNN0I7RUFBNEI4QixpQkFBWSJ9