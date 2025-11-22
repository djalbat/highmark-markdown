"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentMarkdownNode;
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
var DocumentMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DocumentMarkdownNode, MarkdownNode);
    function DocumentMarkdownNode() {
        _class_call_check(this, DocumentMarkdownNode);
        return _call_super(this, DocumentMarkdownNode, arguments);
    }
    _create_class(DocumentMarkdownNode, [
        {
            key: "resolve",
            value: function resolve(context) {
                var firstDivisionMarkdownNode = this.getFirstDivisionMarkdownNode();
                if (firstDivisionMarkdownNode === null) {
                    return;
                }
                var documentMarkdownNode = this; ///
                firstDivisionMarkdownNode.resolveIncludes(documentMarkdownNode, context);
                this.forEachDivisionMarkdownNode(function(divisionMarkdownNode) {
                    divisionMarkdownNode.resolveIgnored(documentMarkdownNode, context);
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
                var ruleName = null, childNodes = childMarkdownNodes, opacity = null, precedence = null, documentMarkdownNode = _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(DocumentMarkdownNode, ruleName, childNodes, opacity, precedence);
                return documentMarkdownNode;
            }
        },
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(DocumentMarkdownNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return DocumentMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0Rmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSgpO1xuXG4gICAgaWYgKGZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZSA9IHRoaXM7IC8vL1xuXG4gICAgZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5mb3JFYWNoRGl2aXNpb25NYXJrZG93bk5vZGUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSWdub3JlZChkb2N1bWVudE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvckVhY2hEaXZpc2lvbk1hcmtkb3duTm9kZSgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgZ2V0Rmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSgpIHtcbiAgICBsZXQgZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZGl2aXNpb25NYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSA9IGZpcnN0KGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBmb3JFYWNoRGl2aXNpb25NYXJrZG93bk5vZGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjYWxsYmFjayhkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DaGlsZE1hcmtkb3duTm9kZXMoY2hpbGRNYXJrZG93bk5vZGVzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjaGlsZE1hcmtkb3duTm9kZXMsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBkb2N1bWVudE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRG9jdW1lbnRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkb2N1bWVudE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRG9jdW1lbnRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50TWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInJlc29sdmUiLCJjb250ZXh0IiwiZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldEZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJkb2N1bWVudE1hcmtkb3duTm9kZSIsInJlc29sdmVJbmNsdWRlcyIsImZvckVhY2hEaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVzb2x2ZUlnbm9yZWQiLCJyZXNvbHZlRW1iZWRkaW5ncyIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIm5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwiZnJvbUNoaWxkTWFya2Rvd25Ob2RlcyIsImNoaWxkTWFya2Rvd25Ob2RlcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjt5QkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyw0QkFBNEIsSUFBSSxDQUFDQyw0QkFBNEI7Z0JBRW5FLElBQUlELDhCQUE4QixNQUFNO29CQUN0QztnQkFDRjtnQkFFQSxJQUFNRSx1QkFBdUIsSUFBSSxFQUFFLEdBQUc7Z0JBRXRDRiwwQkFBMEJHLGVBQWUsQ0FBQ0Qsc0JBQXNCSDtnQkFFaEUsSUFBSSxDQUFDSywyQkFBMkIsQ0FBQyxTQUFDQztvQkFDaENBLHFCQUFxQkMsY0FBYyxDQUFDSixzQkFBc0JIO2dCQUM1RDtnQkFFQSxJQUFJLENBQUNLLDJCQUEyQixDQUFDLFNBQUNDO29CQUNoQ0EscUJBQXFCRSxpQkFBaUIsQ0FBQ1I7Z0JBQ3pDO1lBQ0Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLEVBQ1hDLHdCQUF3QkMsSUFBQUEsd0NBQTZCLEVBQUNGO2dCQUU1RCxPQUFPQztZQUNUOzs7WUFFQVQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELDRCQUE0QjtnQkFFaEMsSUFBTVUsd0JBQXdCLElBQUksQ0FBQ0Ysd0JBQXdCLElBQ3JESSw4QkFBOEJGLHNCQUFzQkcsTUFBTTtnQkFFaEUsSUFBSUQsOEJBQThCLEdBQUc7b0JBQ25DWiw0QkFBNEJKLE1BQU1jO2dCQUNwQztnQkFFQSxPQUFPVjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QlUsUUFBUTtnQkFDbEMsSUFBTUosd0JBQXdCLElBQUksQ0FBQ0Ysd0JBQXdCO2dCQUUzREUsc0JBQXNCSyxPQUFPLENBQUMsU0FBQ1Y7b0JBQzdCUyxTQUFTVDtnQkFDWDtZQUNGOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQlgsb0JBQW9CO2dCQUM3QyxJQUFNWSxZQUFZWixzQkFBdUIsR0FBRztnQkFFNUMsSUFBSSxDQUFDYSxlQUFlLENBQUNEO1lBQ3ZCOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsa0JBQWtCO2dCQUM5QyxJQUFNQyxXQUFXLE1BQ1hDLGFBQWFGLG9CQUNiRyxVQUFVLE1BQ1ZDLGFBQWEsTUFDYnRCLHVCQUF1QnVCLGlCQUFZLENBQUNDLDBDQUEwQyxDQTVEbkUvQixzQkE0RDBGMEIsVUFBVUMsWUFBWUMsU0FBU0M7Z0JBRTFJLE9BQU90QjtZQUNUOzs7WUFFT3dCLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0wsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxpQkFBWSxDQUFDQywwQ0FBMEMsQ0FqRTFJL0Isc0JBaUVpSzBCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQWpFN003QjtFQUE2QjhCLGlCQUFZIn0=