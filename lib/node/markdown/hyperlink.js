"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
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
var HyperlinkLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HyperlinkLinkMarkdownNode, MarkdownNode);
    function HyperlinkLinkMarkdownNode() {
        _class_call_check(this, HyperlinkLinkMarkdownNode);
        return _call_super(this, HyperlinkLinkMarkdownNode, arguments);
    }
    _create_class(HyperlinkLinkMarkdownNode, [
        {
            key: "url",
            value: function url(context) {
                var multiplicity = this.getMultiplicity();
                var urlTerminalNode;
                if (multiplicity === 1) {
                    urlTerminalNode = this.fromFirstChildNode(function(firstChildNode) {
                        var urlTerminalNode = firstChildNode; ///
                        return urlTerminalNode;
                    });
                } else {
                    urlTerminalNode = this.fromSecondLastChildNode(function(secondLastChildNode) {
                        var urlTerminalNode = secondLastChildNode; ///
                        return urlTerminalNode;
                    });
                }
                var urlTerminalNodeContent = urlTerminalNode.getContent(), url = urlTerminalNodeContent; ///
                return url;
            }
        },
        {
            key: "inlineText",
            value: function inlineText(context) {
                var inlineText = null;
                var multiplicity = this.getMultiplicity();
                if (multiplicity > 1) {
                    inlineText = this.fromSecondChildNode(function(secondChildNode) {
                        var indent = null, inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context);
                        inlineText = inlineTextMarkdownNodeHTML; ///
                    });
                }
                return inlineText;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(HyperlinkLinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HyperlinkLinkMarkdownNode;
}(_markdown.default);
Object.assign(HyperlinkLinkMarkdownNode.prototype, _content.default);
var _default = HyperlinkLinkMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2h5cGVybGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IGNvbnRlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250ZW50XCI7XG5cbmNsYXNzIEh5cGVybGlua0xpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICB1cmwoY29udGV4dCkge1xuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCk7XG5cbiAgICBsZXQgdXJsVGVybWluYWxOb2RlO1xuXG4gICAgaWYgKG11bHRpcGxpY2l0eSA9PT0gMSkge1xuICAgICAgdXJsVGVybWluYWxOb2RlID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybFRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAvLy9cblxuICAgICAgICByZXR1cm4gdXJsVGVybWluYWxOb2RlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybFRlcm1pbmFsTm9kZSA9IHRoaXMuZnJvbVNlY29uZExhc3RDaGlsZE5vZGUoKHNlY29uZExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdXJsVGVybWluYWxOb2RlID0gc2Vjb25kTGFzdENoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHVybFRlcm1pbmFsTm9kZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVybFRlcm1pbmFsTm9kZUNvbnRlbnQgPSB1cmxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHVybCA9IHVybFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGlubGluZVRleHQoY29udGV4dCkge1xuICAgIGxldCBpbmxpbmVUZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCk7XG5cbiAgICBpZiAobXVsdGlwbGljaXR5ID4gMSkge1xuICAgICAgaW5saW5lVGV4dCA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGVudCA9IG51bGwsXG4gICAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCA9IGlubGluZVRleHRNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaW5saW5lVGV4dCA9IGlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MOyAgLy8vXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5saW5lVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEh5cGVybGlua0xpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEh5cGVybGlua0xpbmtNYXJrZG93bk5vZGUucHJvdG90eXBlLCBjb250ZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgSHlwZXJsaW5rTGlua01hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJIeXBlcmxpbmtMaW5rTWFya2Rvd25Ob2RlIiwidXJsIiwiY29udGV4dCIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsInVybFRlcm1pbmFsTm9kZSIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwidXJsVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJpbmxpbmVUZXh0IiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsImluZGVudCIsImlubGluZVRleHRNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCIsImFzSFRNTCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNEQTs7O2VBQUE7OzsrREFwRHlCOzhEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUNULElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUV6QyxJQUFJQztnQkFFSixJQUFJRixpQkFBaUIsR0FBRztvQkFDdEJFLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO3dCQUN6QyxJQUFNRixrQkFBa0JFLGdCQUFnQixHQUFHO3dCQUUzQyxPQUFPRjtvQkFDVDtnQkFDRixPQUFPO29CQUNMQSxrQkFBa0IsSUFBSSxDQUFDRyx1QkFBdUIsQ0FBQyxTQUFDQzt3QkFDOUMsSUFBTUosa0JBQWtCSSxxQkFBcUIsR0FBRzt3QkFFaEQsT0FBT0o7b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBTUsseUJBQXlCTCxnQkFBZ0JNLFVBQVUsSUFDbkRWLE1BQU1TLHdCQUF3QixHQUFHO2dCQUV2QyxPQUFPVDtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdWLE9BQU87Z0JBQ2hCLElBQUlVLGFBQWE7Z0JBRWpCLElBQU1ULGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUV6QyxJQUFJRCxlQUFlLEdBQUc7b0JBQ3BCUyxhQUFhLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsU0FBQ0M7d0JBQ3JDLElBQU1DLFNBQVMsTUFDVEMseUJBQXlCRixpQkFDekJHLDZCQUE2QkQsdUJBQXVCRSxNQUFNLENBQUNILFFBQVFiO3dCQUV6RVUsYUFBYUssNEJBQTZCLEdBQUc7b0JBQy9DO2dCQUNGO2dCQUVBLE9BQU9MO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0E1Q3pIbkIsMkJBNENxSm9CLFVBQVVDLFlBQVlDO1lBQVU7OztXQTVDckx0QjtFQUFrQ3VCLGlCQUFZO0FBK0NwREMsT0FBT0MsTUFBTSxDQUFDekIsMEJBQTBCMEIsU0FBUyxFQUFFQyxnQkFBYTtJQUVoRSxXQUFlM0IifQ==