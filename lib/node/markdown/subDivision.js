"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubDivisionMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _verticalSpace = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/verticalSpace"));
var _embedDirectives = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/embedDirectives"));
var _includeDirectives = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/includeDirectives"));
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
var second = _necessary.arrayUtilities.second;
var SubDivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(SubDivisionMarkdownNode, MarkdownNode);
    var _super = _create_super(SubDivisionMarkdownNode);
    function SubDivisionMarkdownNode() {
        _class_call_check(this, SubDivisionMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(SubDivisionMarkdownNode, [
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = this, embedDirectivesSubDivisionReplacement = _embedDirectives.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                if (embedDirectivesSubDivisionReplacement !== null) {
                    var subDivisionMarkdownNodes = embedDirectivesSubDivisionReplacement.replaceSubDivisionMarkdownNode(divisionMarkdownNode, context);
                    subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                        subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
                    });
                }
            }
        },
        {
            key: "resolveIncludes",
            value: function resolveIncludes(divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = this, includeDirectivesSubDivisionReplacement = _includeDirectives.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                if (includeDirectivesSubDivisionReplacement !== null) {
                    includeDirectivesSubDivisionReplacement.removeSubDivisionMarkdownNode(divisionMarkdownNode, context);
                }
            }
        },
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                var secondMarkdownNode = this.getSecondMarkdownNode(), domElement = secondMarkdownNode.getDOMElement();
                return domElement;
            }
        },
        {
            key: "lines",
            value: function lines(context) {
                var secondMarkdownNode = this.getSecondMarkdownNode(), lines = secondMarkdownNode.lines(context);
                return lines;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var secondMarkdownNode = this.getSecondMarkdownNode(), html = secondMarkdownNode.asHTML(indent, context);
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var secondMarkdownNode = this.getSecondMarkdownNode(), plainText = secondMarkdownNode.asPlainText(context);
                return plainText;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var secondMarkdownNode = this.getSecondMarkdownNode(), domElement = null;
                secondMarkdownNode.createDOMElement(context);
                return domElement;
            }
        },
        {
            key: "getSecondMarkdownNode",
            value: function getSecondMarkdownNode() {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), secondMarkdownNode = secondChildNode; ///
                return secondMarkdownNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return SubDivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IFZlcnRpY2FsU3BhY2VNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vdmVydGljYWxTcGFjZVwiO1xuaW1wb3J0IEVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2VtYmVkRGlyZWN0aXZlc1wiO1xuaW1wb3J0IEluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vaW5jbHVkZURpcmVjdGl2ZXNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVwbGFjZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgc2Vjb25kTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRTZWNvbmRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gc2Vjb25kTWFya2Rvd25Ob2RlLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgbGluZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHNlY29uZE1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0U2Vjb25kTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgbGluZXMgPSBzZWNvbmRNYXJrZG93bk5vZGUubGluZXMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2Vjb25kTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRTZWNvbmRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBodG1sID0gc2Vjb25kTWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3Qgc2Vjb25kTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRTZWNvbmRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBwbGFpblRleHQgPSBzZWNvbmRNYXJrZG93bk5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3Qgc2Vjb25kTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRTZWNvbmRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIHNlY29uZE1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRTZWNvbmRNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBzZWNvbmRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHNlY29uZE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJFbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwicmVwbGFjZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9yRWFjaCIsInJlc29sdmVJbmNsdWRlcyIsImluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIkluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0RE9NRWxlbWVudCIsInNlY29uZE1hcmtkb3duTm9kZSIsImdldFNlY29uZE1hcmtkb3duTm9kZSIsImRvbUVsZW1lbnQiLCJsaW5lcyIsImFzSFRNTCIsImluZGVudCIsImh0bWwiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNyZWF0ZURPTUVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTsrREFFTjtvRUFDYTtzRUFDWTt3RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLElBQUEsQUFBTUQsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzdDLElBQU1DLDBCQUEwQixJQUFJLEVBQzlCQyx3Q0FBd0NDLHdCQUFxQyxDQUFDQywyQkFBMkIsQ0FBQ0gseUJBQXlCRDtnQkFFekksSUFBSUUsMENBQTBDLE1BQU07b0JBQ2xELElBQU1HLDJCQUEyQkgsc0NBQXNDSSw4QkFBOEIsQ0FBQ1Asc0JBQXNCQztvQkFFNUhLLHlCQUF5QkUsT0FBTyxDQUFDLFNBQUNOO3dCQUNoQ0Esd0JBQXdCSCxpQkFBaUIsQ0FBQ0Msc0JBQXNCQztvQkFDbEU7Z0JBQ0Y7WUFDRjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JULG9CQUFvQixFQUFFQyxPQUFPO2dCQUMzQyxJQUFNQywwQkFBMEIsSUFBSSxFQUM5QlEsMENBQTBDQywwQkFBdUMsQ0FBQ04sMkJBQTJCLENBQUNILHlCQUF5QkQ7Z0JBRTdJLElBQUlTLDRDQUE0QyxNQUFNO29CQUNwREEsd0NBQXdDRSw2QkFBNkIsQ0FBQ1osc0JBQXNCQztnQkFDOUY7WUFDRjs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxxQkFBcUIsSUFDL0NDLGFBQWFGLG1CQUFtQkQsYUFBYTtnQkFFbkQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNaEIsT0FBTztnQkFDWCxJQUFNYSxxQkFBcUIsSUFBSSxDQUFDQyxxQkFBcUIsSUFDL0NFLFFBQVFILG1CQUFtQkcsS0FBSyxDQUFDaEI7Z0JBRXZDLE9BQU9nQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRWxCLE9BQU87Z0JBQ3BCLElBQU1hLHFCQUFxQixJQUFJLENBQUNDLHFCQUFxQixJQUMvQ0ssT0FBT04sbUJBQW1CSSxNQUFNLENBQUNDLFFBQVFsQjtnQkFFL0MsT0FBT21CO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWXBCLE9BQU87Z0JBQ2pCLElBQU1hLHFCQUFxQixJQUFJLENBQUNDLHFCQUFxQixJQUMvQ08sWUFBWVIsbUJBQW1CTyxXQUFXLENBQUNwQjtnQkFFakQsT0FBT3FCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCdEIsT0FBTztnQkFDdEIsSUFBTWEscUJBQXFCLElBQUksQ0FBQ0MscUJBQXFCLElBQy9DQyxhQUFhO2dCQUVuQkYsbUJBQW1CUyxnQkFBZ0IsQ0FBQ3RCO2dCQUVwQyxPQUFPZTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1TLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0I3QixPQUFPMkIsYUFDekJWLHFCQUFxQlksaUJBQWlCLEdBQUc7Z0JBRS9DLE9BQU9aO1lBQ1Q7Ozs7WUFFT2EsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVKLFVBQVUsRUFBRUssT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0FwRTFHL0IseUJBb0VvSWdDLFVBQVVKLFlBQVlLO1lBQVU7OztXQXBFcEtqQztFQUFnQ2tDLGlCQUFZIn0=