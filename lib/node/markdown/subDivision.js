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
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = null, secondMarkdownNode = this.getSecondMarkdownNode();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2VtYmVkRGlyZWN0aXZlc1wiO1xuaW1wb3J0IEluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vaW5jbHVkZURpcmVjdGl2ZXNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVwbGFjZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgc2Vjb25kTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRTZWNvbmRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gc2Vjb25kTWFya2Rvd25Ob2RlLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgbGluZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHNlY29uZE1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0U2Vjb25kTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgbGluZXMgPSBzZWNvbmRNYXJrZG93bk5vZGUubGluZXMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2Vjb25kTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRTZWNvbmRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBodG1sID0gc2Vjb25kTWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBzZWNvbmRNYXJrZG93bk5vZGUgPSB0aGlzLmdldFNlY29uZE1hcmtkb3duTm9kZSgpO1xuXG4gICAgc2Vjb25kTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFNlY29uZE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHNlY29uZE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc2Vjb25kTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJyZXNvbHZlRW1iZWRkaW5ncyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIkVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJyZXBsYWNlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb3JFYWNoIiwicmVzb2x2ZUluY2x1ZGVzIiwiaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRET01FbGVtZW50Iiwic2Vjb25kTWFya2Rvd25Ob2RlIiwiZ2V0U2Vjb25kTWFya2Rvd25Ob2RlIiwiZG9tRWxlbWVudCIsImxpbmVzIiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsImNyZWF0ZURPTUVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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