"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostHTMLNode;
    }
});
var _occamdom = require("occam-dom");
var _necessary = require("necessary");
var _queries = /*#__PURE__*/ _interop_require_default(require("../../queries"));
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("../../map/node/html"));
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
var push = _necessary.arrayUtilities.push, topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
var TopmostHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(TopmostHTMLNode, HTMLNode);
    function TopmostHTMLNode() {
        _class_call_check(this, TopmostHTMLNode);
        return _call_super(this, TopmostHTMLNode, arguments);
    }
    _create_class(TopmostHTMLNode, [
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.childNodes.forEach(function(childNode) {
                    childNode.mount(parentDOMElement, siblingDOMElement, context);
                });
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                this.childNodes.forEach(function(childNode) {
                    childNode.unmount(parentDOMElement, context);
                });
            }
        },
        {
            key: "asHTML",
            value: function asHTML(context) {
                var html;
                var indent = null, childNodesHTML = this.childNodesAsHTML(indent, context);
                html = childNodesHTML; ///
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText;
                var childNodesPlainText = this.childNodesAsPlainText(context);
                plainText = childNodesPlainText; ///
                return plainText;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(TopmostHTMLNode);
            }
        },
        {
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode) {
                var node = divisionMarkdownNode, nodes = nodesFromNodeAndQueries(node, _queries.default), topmostHTMLNode = topmostNodeFromOuterNodes(ClassFromOuterNode, nodes);
                return topmostHTMLNode;
            }
        }
    ]);
    return TopmostHTMLNode;
}(_html.default);
function ClassFromOuterNode(outerNode) {
    var Class;
    if (outerNode === null) {
        Class = TopmostHTMLNode; ///
    } else {
        var nonTerminalNode = outerNode, ruleName = nonTerminalNode.getRuleName();
        Class = _html1.default[ruleName] || _html.default;
    }
    return Class;
}
function nodesFromNodeAndQueries(node, queries) {
    var nodes = [];
    queries.forEach(function(query) {
        var queryNodes = query.execute(node);
        push(nodes, queryNodes);
    });
    return nodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtOb2RlLCBub2RlVXRpbGl0aWVzfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHF1ZXJpZXMgZnJvbSBcIi4uLy4uL3F1ZXJpZXNcIjtcbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgaHRtbE5vZGVNYXAgZnJvbSBcIi4uLy4uL21hcC9ub2RlL2h0bWxcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyB9ID0gbm9kZVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWw7XG5cbiAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBodG1sID0gY2hpbGROb2Rlc0hUTUw7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBwbGFpblRleHQ7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICBwbGFpblRleHQgPSBjaGlsZE5vZGVzUGxhaW5UZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoVG9wbW9zdEhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBub2RlcyA9IG5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzKG5vZGUsIHF1ZXJpZXMpLFxuICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMoQ2xhc3NGcm9tT3V0ZXJOb2RlLCBub2Rlcyk7XG5cbiAgICByZXR1cm4gdG9wbW9zdEhUTUxOb2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIENsYXNzRnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgbGV0IENsYXNzO1xuXG4gIGlmIChvdXRlck5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RIVE1MTm9kZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG91dGVyTm9kZSwgIC8vL1xuICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIENsYXNzID0gaHRtbE5vZGVNYXBbcnVsZU5hbWVdIHx8IEhUTUxOb2RlO1xuICB9XG5cbiAgcmV0dXJuIENsYXNzO1xufVxuXG5mdW5jdGlvbiBub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyhub2RlLCBxdWVyaWVzKSB7XG4gIGNvbnN0IG5vZGVzID0gW107XG5cbiAgcXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5Tm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgcHVzaChub2RlcywgcXVlcnlOb2Rlcyk7XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJUb3Btb3N0SFRNTE5vZGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJ0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIiwibm9kZVV0aWxpdGllcyIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwidW5tb3VudCIsImFzSFRNTCIsImh0bWwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJub2RlIiwibm9kZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyIsInF1ZXJpZXMiLCJ0b3Btb3N0SFRNTE5vZGUiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJDbGFzcyIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJodG1sTm9kZU1hcCIsInF1ZXJ5IiwicXVlcnlOb2RlcyIsImV4ZWN1dGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3dCQVZhO3lCQUNIOzhEQUVYOzJEQUNDOzREQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ0YsQUFBRUUsNEJBQThCQyx1QkFBYSxDQUEzQ0Q7QUFFTyxJQUFBLEFBQU1ILGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRUMsT0FBTztnQkFDaEQsSUFBSSxDQUFDQyxVQUFVLENBQUNDLE9BQU8sQ0FBQyxTQUFDQztvQkFDdkJBLFVBQVVOLEtBQUssQ0FBQ0Msa0JBQWtCQyxtQkFBbUJDO2dCQUN2RDtZQUNGOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFOLGdCQUFnQixFQUFFRSxPQUFPO2dCQUMvQixJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDO29CQUN2QkEsVUFBVUMsT0FBTyxDQUFDTixrQkFBa0JFO2dCQUN0QztZQUNGOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9MLE9BQU87Z0JBQ1osSUFBSU07Z0JBRUosSUFBTUMsU0FBUyxNQUNUQyxpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0YsUUFBUVA7Z0JBRXJETSxPQUFPRSxnQkFBaUIsR0FBRztnQkFFM0IsT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZVixPQUFPO2dCQUNqQixJQUFJVztnQkFFSixJQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ2I7Z0JBRXZEVyxZQUFZQyxxQkFBc0IsR0FBRztnQkFFckMsT0FBT0Q7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBbEMvQnRCO1lBa0NrRDs7O1lBRTlEd0IsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0I7Z0JBQ2xELElBQU1DLE9BQU9ELHNCQUNQRSxRQUFRQyx3QkFBd0JGLE1BQU1HLGdCQUFPLEdBQzdDQyxrQkFBa0IzQiwwQkFBMEI0QixvQkFBb0JKO2dCQUV0RSxPQUFPRztZQUNUOzs7V0ExQ21COUI7RUFBd0J1QixhQUFRO0FBNkNyRCxTQUFTUSxtQkFBbUJDLFNBQVM7SUFDbkMsSUFBSUM7SUFFSixJQUFJRCxjQUFjLE1BQU07UUFDdEJDLFFBQVFqQyxpQkFBa0IsR0FBRztJQUMvQixPQUFPO1FBQ0wsSUFBTWtDLGtCQUFrQkYsV0FDdEJHLFdBQVdELGdCQUFnQkUsV0FBVztRQUV4Q0gsUUFBUUksY0FBVyxDQUFDRixTQUFTLElBQUlaLGFBQVE7SUFDM0M7SUFFQSxPQUFPVTtBQUNUO0FBRUEsU0FBU0wsd0JBQXdCRixJQUFJLEVBQUVHLE9BQU87SUFDNUMsSUFBTUYsUUFBUSxFQUFFO0lBRWhCRSxRQUFRbkIsT0FBTyxDQUFDLFNBQUM0QjtRQUNmLElBQU1DLGFBQWFELE1BQU1FLE9BQU8sQ0FBQ2Q7UUFFakN6QixLQUFLMEIsT0FBT1k7SUFDZDtJQUVBLE9BQU9aO0FBQ1QifQ==