"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HeadingMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/anchor"));
var _childNodes = require("../../utilities/childNodes");
var _string = require("../../utilities/string");
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
var last = _necessary.arrayUtilities.last;
var HeadingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HeadingMarkdownNode, MarkdownNode);
    var _super = _create_super(HeadingMarkdownNode);
    function HeadingMarkdownNode() {
        _class_call_check(this, HeadingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(HeadingMarkdownNode, [
        {
            key: "getLevel",
            value: function getLevel() {
                var level = this.constructor.level;
                return level;
            }
        },
        {
            key: "addAnchor",
            value: function addAnchor(context) {
                var identifier = this.identifier(context), anchorMarkdownNode = _anchor.default.fromIdentifier(identifier), childNode = anchorMarkdownNode; ///
                this.prependChildNode(childNode);
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var childNodes = this.getChildNodes(), plainText = (0, _childNodes.plainTextFromChildNodes)(childNodes, context), identifier = identifierFromPlainText(plainText);
                return identifier;
            }
        },
        {
            // childNodesAsHTML(indent, context) {
            //   const lineMarkdownNode = this.getLineMarkdownNode(),
            //         lineMarkdownNodeHTML = lineMarkdownNode.asHTML(indent, context),
            //         childNodesHTML = lineMarkdownNodeHTML;  ///
            //
            //   return childNodesHTML;
            // }
            //
            // createChildNodeDOMElements(context) {
            //   const lastChildNode = this.getLineMarkdownNode(),
            //         lineMarkdownNodeHTML = lastChildNode, ///
            //         lineMarkdownNodeHTMLDOMElement = lineMarkdownNodeHTML.createDOMElement(context),
            //         domElement = lineMarkdownNodeHTMLDOMElement;  ///
            //
            //   this.addDOMElement(domElement);
            // }
            key: "getLineMarkdownNode",
            value: function getLineMarkdownNode() {
                var childNodes = this.getChildNodes(), lastChildNode = last(childNodes), lineMarkdownNode = lastChildNode; ///
                return lineMarkdownNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HeadingMarkdownNode;
}(_markdown.default);
function identifierFromPlainText(plainText) {
    plainText = plainText.toLowerCase(); ///
    plainText = (0, _string.removedLeadingWhitespace)(plainText); ///
    plainText = (0, _string.removeNonAlphabeticAndSpaceCharacters)(plainText); ///
    plainText = (0, _string.replaceSpacesWithHyphens)(plainText); ///
    var identifier = plainText; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2hlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQW5jaG9yTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuaW1wb3J0IHsgcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zLCByZW1vdmVkTGVhZGluZ1doaXRlc3BhY2UsIHJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkaW5nTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgY29uc3QgeyBsZXZlbCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBsZXZlbDtcbiAgfVxuXG4gIGFkZEFuY2hvcihjb250ZXh0KSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBBbmNob3JNYXJrZG93bk5vZGUuZnJvbUlkZW50aWZpZXIoaWRlbnRpZmllciksXG4gICAgICAgICAgY2hpbGROb2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHRoaXMucHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICAvLyBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGxpbmVNYXJrZG93bk5vZGUgPSB0aGlzLmdldExpbmVNYXJrZG93bk5vZGUoKSxcbiAgLy8gICAgICAgICBsaW5lTWFya2Rvd25Ob2RlSFRNTCA9IGxpbmVNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gIC8vICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBsaW5lTWFya2Rvd25Ob2RlSFRNTDsgIC8vL1xuICAvL1xuICAvLyAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgbGFzdENoaWxkTm9kZSA9IHRoaXMuZ2V0TGluZU1hcmtkb3duTm9kZSgpLFxuICAvLyAgICAgICAgIGxpbmVNYXJrZG93bk5vZGVIVE1MID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gIC8vICAgICAgICAgbGluZU1hcmtkb3duTm9kZUhUTUxET01FbGVtZW50ID0gbGluZU1hcmtkb3duTm9kZUhUTUwuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSxcbiAgLy8gICAgICAgICBkb21FbGVtZW50ID0gbGluZU1hcmtkb3duTm9kZUhUTUxET01FbGVtZW50OyAgLy8vXG4gIC8vXG4gIC8vICAgdGhpcy5hZGRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuICAvLyB9XG5cbiAgZ2V0TGluZU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGluZU1hcmtkb3duTm9kZSA9IGxhc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBsaW5lTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC50b0xvd2VyQ2FzZSgpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlKHBsYWluVGV4dCk7ICAvLy9cblxuICBwbGFpblRleHQgPSByZW1vdmVOb25BbHBoYWJldGljQW5kU3BhY2VDaGFyYWN0ZXJzKHBsYWluVGV4dCk7IC8vL1xuXG4gIHBsYWluVGV4dCA9IHJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyhwbGFpblRleHQpOyAgLy8vXG5cbiAgY29uc3QgaWRlbnRpZmllciA9IHBsYWluVGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG4iXSwibmFtZXMiOlsiSGVhZGluZ01hcmtkb3duTm9kZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImdldExldmVsIiwibGV2ZWwiLCJjb25zdHJ1Y3RvciIsImFkZEFuY2hvciIsImNvbnRleHQiLCJpZGVudGlmaWVyIiwiYW5jaG9yTWFya2Rvd25Ob2RlIiwiQW5jaG9yTWFya2Rvd25Ob2RlIiwiZnJvbUlkZW50aWZpZXIiLCJjaGlsZE5vZGUiLCJwcmVwZW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwbGFpblRleHQiLCJwbGFpblRleHRGcm9tQ2hpbGROb2RlcyIsImlkZW50aWZpZXJGcm9tUGxhaW5UZXh0IiwiZ2V0TGluZU1hcmtkb3duTm9kZSIsImxhc3RDaGlsZE5vZGUiLCJsaW5lTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJDbGFzcyIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsInRvTG93ZXJDYXNlIiwicmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlIiwicmVtb3ZlTm9uQWxwaGFiZXRpY0FuZFNwYWNlQ2hhcmFjdGVycyIsInJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTsrREFFTjs2REFDTTswQkFFUztzQkFDa0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUcsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELG9DQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLFFBQVUsSUFBSSxDQUFDQyxXQUFXLENBQTFCRDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUMsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0QsVUFDN0JFLHFCQUFxQkMsZUFBa0IsQ0FBQ0MsY0FBYyxDQUFDSCxhQUN2REksWUFBWUgsb0JBQW9CLEdBQUc7Z0JBRXpDLElBQUksQ0FBQ0ksZ0JBQWdCLENBQUNEO1lBQ3hCOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdELE9BQU87Z0JBQ2hCLElBQU1PLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxZQUFZQyxJQUFBQSxtQ0FBdUIsRUFBQ0gsWUFBWVAsVUFDaERDLGFBQWFVLHdCQUF3QkY7Z0JBRTNDLE9BQU9SO1lBQ1Q7OztZQUVBLHNDQUFzQztZQUN0Qyx5REFBeUQ7WUFDekQsMkVBQTJFO1lBQzNFLHNEQUFzRDtZQUN0RCxFQUFFO1lBQ0YsMkJBQTJCO1lBQzNCLElBQUk7WUFDSixFQUFFO1lBQ0Ysd0NBQXdDO1lBQ3hDLHNEQUFzRDtZQUN0RCxvREFBb0Q7WUFDcEQsMkZBQTJGO1lBQzNGLDREQUE0RDtZQUM1RCxFQUFFO1lBQ0Ysb0NBQW9DO1lBQ3BDLElBQUk7WUFFSlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CSyxnQkFBZ0JuQixLQUFLYSxhQUNyQk8sbUJBQW1CRCxlQUFnQixHQUFHO2dCQUU1QyxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVWLFVBQVUsRUFBRVcsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0FBQ0MsT0FBT0MsVUFBVVYsWUFBWVc7WUFBVTs7O1dBaER6SnpCO0VBQTRCMEIsaUJBQVk7QUFtRDdELFNBQVNSLHdCQUF3QkYsU0FBUztJQUN4Q0EsWUFBWUEsVUFBVVcsV0FBVyxJQUFLLEdBQUc7SUFFekNYLFlBQVlZLElBQUFBLGdDQUF3QixFQUFDWixZQUFhLEdBQUc7SUFFckRBLFlBQVlhLElBQUFBLDZDQUFxQyxFQUFDYixZQUFZLEdBQUc7SUFFakVBLFlBQVljLElBQUFBLGdDQUF3QixFQUFDZCxZQUFhLEdBQUc7SUFFckQsSUFBTVIsYUFBYVEsV0FBVyxHQUFHO0lBRWpDLE9BQU9SO0FBQ1QifQ==