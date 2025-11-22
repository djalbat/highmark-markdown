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
                var documentMarkdownNode = this, divisionMarkdownNode = this.getDivisionMarkdownNode();
                divisionMarkdownNode.resolveIncludes(documentMarkdownNode, context);
                this.forEachDivisionMarkdownNode(function(divisionMarkdownNode) {
                    divisionMarkdownNode.resolveIgnored(documentMarkdownNode, context);
                });
                this.forEachDivisionMarkdownNode(function(divisionMarkdownNode) {
                    divisionMarkdownNode.resolveEmbeddings(context);
                });
            }
        },
        {
            key: "getDivisionMarkdownNode",
            value: function getDivisionMarkdownNode() {
                var divisionMarkdownNode = null;
                var multiplicity = this.getMultiplicity();
                if (multiplicity === 1) {
                    var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), firstDivisionMarkdownNode = first(divisionMarkdownNodes);
                    divisionMarkdownNode = firstDivisionMarkdownNode; ///
                }
                return divisionMarkdownNode;
            }
        },
        {
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var childNodes = this.getChildNodes(), divisionMarkdownNodes = childNodes; ///
                return divisionMarkdownNodes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlcyhkb2N1bWVudE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLmZvckVhY2hEaXZpc2lvbk1hcmtkb3duTm9kZSgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJZ25vcmVkKGRvY3VtZW50TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZm9yRWFjaERpdmlzaW9uTWFya2Rvd25Ob2RlKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpIHtcbiAgICBsZXQgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKTtcblxuICAgIGlmIChtdWx0aXBsaWNpdHkgPT09IDEpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgICBmaXJzdERpdmlzaW9uTWFya2Rvd25Ob2RlID0gZmlyc3QoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBmaXJzdERpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGZvckVhY2hEaXZpc2lvbk1hcmtkb3duTm9kZShjYWxsYmFjaykge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNhbGxiYWNrKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNoaWxkTWFya2Rvd25Ob2RlcyhjaGlsZE1hcmtkb3duTm9kZXMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNoaWxkTWFya2Rvd25Ob2RlcywgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShEb2N1bWVudE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShEb2N1bWVudE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiRG9jdW1lbnRNYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicmVzb2x2ZSIsImNvbnRleHQiLCJkb2N1bWVudE1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXNvbHZlSW5jbHVkZXMiLCJmb3JFYWNoRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXNvbHZlSWdub3JlZCIsInJlc29sdmVFbWJlZGRpbmdzIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwicmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJmcm9tQ2hpbGRNYXJrZG93bk5vZGVzIiwiY2hpbGRNYXJrZG93bk5vZGVzIiwicnVsZU5hbWUiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7K0RBRU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyx1QkFBdUIsSUFBSSxFQUMzQkMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6REQscUJBQXFCRSxlQUFlLENBQUNILHNCQUFzQkQ7Z0JBRTNELElBQUksQ0FBQ0ssMkJBQTJCLENBQUMsU0FBQ0g7b0JBQ2hDQSxxQkFBcUJJLGNBQWMsQ0FBQ0wsc0JBQXNCRDtnQkFDNUQ7Z0JBRUEsSUFBSSxDQUFDSywyQkFBMkIsQ0FBQyxTQUFDSDtvQkFDaENBLHFCQUFxQkssaUJBQWlCLENBQUNQO2dCQUN6QztZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELHVCQUF1QjtnQkFFM0IsSUFBTU0sZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRXpDLElBQUlELGlCQUFpQixHQUFHO29CQUN0QixJQUFNRSx3QkFBd0IsSUFBSSxDQUFDQyx3QkFBd0IsSUFDckRDLDRCQUE0QmYsTUFBTWE7b0JBRXhDUix1QkFBdUJVLDJCQUEyQixHQUFHO2dCQUN2RDtnQkFFQSxPQUFPVjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1FLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CSix3QkFBd0JHLFlBQVksR0FBRztnQkFFN0MsT0FBT0g7WUFDVDs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJVLFFBQVE7Z0JBQ2xDLElBQU1MLHdCQUF3QixJQUFJLENBQUNDLHdCQUF3QjtnQkFFM0RELHNCQUFzQk0sT0FBTyxDQUFDLFNBQUNkO29CQUM3QmEsU0FBU2I7Z0JBQ1g7WUFDRjs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJmLG9CQUFvQjtnQkFDN0MsSUFBTWdCLFlBQVloQixzQkFBdUIsR0FBRztnQkFFNUMsSUFBSSxDQUFDaUIsZUFBZSxDQUFDRDtZQUN2Qjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJDLGtCQUFrQjtnQkFDOUMsSUFBTUMsV0FBVyxNQUNYVCxhQUFhUSxvQkFDYkUsVUFBVSxNQUNWQyxhQUFhLE1BQ2J2Qix1QkFBdUJ3QixpQkFBWSxDQUFDQywwQ0FBMEMsQ0F6RG5FOUIsc0JBeUQwRjBCLFVBQVVULFlBQVlVLFNBQVNDO2dCQUUxSSxPQUFPdkI7WUFDVDs7O1lBRU95QixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNKLFFBQVEsRUFBRVQsVUFBVSxFQUFFVSxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0MsMENBQTBDLENBOUQxSTlCLHNCQThEaUswQixVQUFVVCxZQUFZVSxTQUFTQztZQUFhOzs7V0E5RDdNNUI7RUFBNkI2QixpQkFBWSJ9