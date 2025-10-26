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
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), firstDivisionMarkdownNode = first(divisionMarkdownNodes) || null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RvcG1vc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXJrZG93blwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IGZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLmdldEZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgIGlmIChmaXJzdERpdmlzaW9uTWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IHRoaXM7IC8vL1xuXG4gICAgZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXModG9wbW9zdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLmZvckVhY2hEaXZpc2lvbk1hcmtkb3duTm9kZSgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJZ25vcmVkKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JFYWNoRGl2aXNpb25NYXJrZG93bk5vZGUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldERpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldEZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdERpdmlzaW9uTWFya2Rvd25Ob2RlID0gZmlyc3QoZGl2aXNpb25NYXJrZG93bk5vZGVzKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBmb3JFYWNoRGl2aXNpb25NYXJrZG93bk5vZGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjYWxsYmFjayhkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DaGlsZE1hcmtkb3duTm9kZXMoY2hpbGRNYXJrZG93bk5vZGVzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjaGlsZE1hcmtkb3duTm9kZXMsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUb3Btb3N0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wbW9zdE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVG9wbW9zdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVG9wbW9zdE1hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXNvbHZlIiwiY29udGV4dCIsImZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRGaXJzdERpdmlzaW9uTWFya2Rvd25Ob2RlIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsInJlc29sdmVJbmNsdWRlcyIsImZvckVhY2hEaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVzb2x2ZUlnbm9yZWQiLCJyZXNvbHZlRW1iZWRkaW5ncyIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIm5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwiZnJvbUNoaWxkTWFya2Rvd25Ob2RlcyIsImNoaWxkTWFya2Rvd25Ob2RlcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjt5QkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyw0QkFBNEIsSUFBSSxDQUFDQyw0QkFBNEI7Z0JBRW5FLElBQUlELDhCQUE4QixNQUFNO29CQUN0QztnQkFDRjtnQkFFQSxJQUFNRSxzQkFBc0IsSUFBSSxFQUFFLEdBQUc7Z0JBRXJDRiwwQkFBMEJHLGVBQWUsQ0FBQ0QscUJBQXFCSDtnQkFFL0QsSUFBSSxDQUFDSywyQkFBMkIsQ0FBQyxTQUFDQztvQkFDaENBLHFCQUFxQkMsY0FBYyxDQUFDSixxQkFBcUJIO2dCQUMzRDtnQkFFQSxJQUFJLENBQUNLLDJCQUEyQixDQUFDLFNBQUNDO29CQUNoQ0EscUJBQXFCRSxpQkFBaUIsQ0FBQ1I7Z0JBQ3pDO1lBQ0Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLEVBQ1hDLHdCQUF3QkMsSUFBQUEsd0NBQTZCLEVBQUNGO2dCQUU1RCxPQUFPQztZQUNUOzs7WUFFQVQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1TLHdCQUF3QixJQUFJLENBQUNGLHdCQUF3QixJQUNyRFIsNEJBQTRCSixNQUFNYywwQkFBMEI7Z0JBRWxFLE9BQU9WO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCUSxRQUFRO2dCQUNsQyxJQUFNRix3QkFBd0IsSUFBSSxDQUFDRix3QkFBd0I7Z0JBRTNERSxzQkFBc0JHLE9BQU8sQ0FBQyxTQUFDUjtvQkFDN0JPLFNBQVNQO2dCQUNYO1lBQ0Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCVCxvQkFBb0I7Z0JBQzdDLElBQU1VLFlBQVlWLHNCQUF1QixHQUFHO2dCQUU1QyxJQUFJLENBQUNXLGVBQWUsQ0FBQ0Q7WUFDdkI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxrQkFBa0I7Z0JBQzlDLElBQU1DLFdBQVcsTUFDWEMsYUFBYUYsb0JBQ2JHLFVBQVUsTUFDVkMsYUFBYSxNQUNicEIsc0JBQXNCcUIsaUJBQVksQ0FBQ0MsMENBQTBDLENBdERsRTdCLHFCQXNEd0Z3QixVQUFVQyxZQUFZQyxTQUFTQztnQkFFeEksT0FBT3BCO1lBQ1Q7OztZQUVPc0IsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDTCxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNDLDBDQUEwQyxDQTNEMUk3QixxQkEyRGdLd0IsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBM0Q1TTNCO0VBQTRCNEIsaUJBQVkifQ==