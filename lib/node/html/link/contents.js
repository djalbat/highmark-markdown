"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _prepends = require("../../../prepends");
var _attributeNames = require("../../../attributeNames");
var _markdown = require("../../../ruleNames/markdown");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var ContentsLinkHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(ContentsLinkHTMLNode, HTMLNode);
    function ContentsLinkHTMLNode(outerNode, parentNode, childNodes, domElement, identifier) {
        _class_call_check(this, ContentsLinkHTMLNode);
        var _this;
        _this = _call_super(this, ContentsLinkHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.identifier = identifier;
        return _this;
    }
    _create_class(ContentsLinkHTMLNode, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.CONTENTS_LINK_MARKDOWN_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var prepend = _prepends.CONTENTS_PREPEND, attributeValue = "#".concat(prepend, "-").concat(this.identifier);
                return attributeValue;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromLineHTMLTransformAndIdentifier",
            value: function fromLineHTMLTransformAndIdentifier(lineHTMLTransform, identifier) {
                var lineHTMLNode = lineHTMLTransform.getLineHTMLNode(), childNodes = [
                    lineHTMLNode
                ], contentsLinkHTMLNode = _html.default.fromChildNodes(ContentsLinkHTMLNode, childNodes, identifier);
                return contentsLinkHTMLNode;
            }
        }
    ]);
    return ContentsLinkHTMLNode;
}(_html.default);
_define_property(ContentsLinkHTMLNode, "tagName", "a");
_define_property(ContentsLinkHTMLNode, "className", "contents-link");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9jb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgQ09OVEVOVFNfTElOS19NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQ09OVEVOVFNfTElOS19NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBDT05URU5UU19QUkVQRU5ELFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke3ByZXBlbmR9LSR7dGhpcy5pZGVudGlmaWVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiY29udGVudHMtbGlua1wiO1xuXG4gIHN0YXRpYyBmcm9tTGluZUhUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGxpbmVIVE1MVHJhbnNmb3JtLCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgbGluZUhUTUxOb2RlID0gbGluZUhUTUxUcmFuc2Zvcm0uZ2V0TGluZUhUTUxOb2RlKCksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIGxpbmVIVE1MTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgY29udGVudHNMaW5rSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhDb250ZW50c0xpbmtIVE1MTm9kZSwgY2hpbGROb2RlcywgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gY29udGVudHNMaW5rSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsImlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIkNPTlRFTlRTX0xJTktfTUFSS0RPV05fUlVMRV9OQU1FIiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJwcmVwZW5kIiwiQ09OVEVOVFNfUFJFUEVORCIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbUxpbmVIVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllciIsImxpbmVIVE1MVHJhbnNmb3JtIiwibGluZUhUTUxOb2RlIiwiZ2V0TGluZUhUTUxOb2RlIiwiY29udGVudHNMaW5rSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21DaGlsZE5vZGVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTkE7d0JBRVk7OEJBQ0c7d0JBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUEscUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEbERMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpETDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQ0FBZ0M7Z0JBRWpELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsT0FBTztnQkFDbkIsSUFBTUQsZ0JBQWdCRSxtQ0FBbUI7Z0JBRXpDLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUYsT0FBTztnQkFDcEIsSUFBTUcsVUFBVUMsMEJBQWdCLEVBQzFCRixpQkFBaUIsQUFBQyxJQUFjLE9BQVhDLFNBQVEsS0FBbUIsT0FBaEIsSUFBSSxDQUFDVCxVQUFVO2dCQUVyRCxPQUFPUTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCVSxTQUFTVCxVQUFXLEdBQUc7Z0JBRTdCLE9BQU9TO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxpQkFBaUIsRUFBRWQsVUFBVTtnQkFDckUsSUFBTWUsZUFBZUQsa0JBQWtCRSxlQUFlLElBQ2hEbEIsYUFBYTtvQkFDWGlCO2lCQUNELEVBQ0RFLHVCQUF1QkMsYUFBUSxDQUFDQyxjQUFjLENBOUNuQ3hCLHNCQThDMERHLFlBQVlFO2dCQUV2RixPQUFPaUI7WUFDVDs7O1dBakRtQnRCO0VBQTZCdUIsYUFBUTtBQXFDeEQsaUJBckNtQnZCLHNCQXFDWnlCLFdBQVU7QUFFakIsaUJBdkNtQnpCLHNCQXVDWjBCLGFBQVkifQ==