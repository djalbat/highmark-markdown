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
var _prepends = require("../../prepends");
var _string = require("../../utilities/string");
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
var last = _necessary.arrayUtilities.last;
var HeadingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HeadingMarkdownNode, MarkdownNode);
    function HeadingMarkdownNode() {
        _class_call_check(this, HeadingMarkdownNode);
        return _call_super(this, HeadingMarkdownNode, arguments);
    }
    _create_class(HeadingMarkdownNode, [
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.constructor.depth;
                return depth;
            }
        },
        {
            key: "addAnchor",
            value: function addAnchor(context) {
                var prepend = _prepends.CONTENTS_PREPEND, identifier = this.identifier(context), anchorMarkdownNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), prependedChildNode = anchorMarkdownNode; ///
                this.prependChildNode(prependedChildNode);
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var plainText = this.asPlainText(context), identifier = identifierFromPlainText(plainText);
                return identifier;
            }
        },
        {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2hlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQW5jaG9yTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19QUkVQRU5EIH0gZnJvbSBcIi4uLy4uL3ByZXBlbmRzXCI7XG5pbXBvcnQgeyByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMsIHJlbW92ZWRMZWFkaW5nV2hpdGVzcGFjZSwgcmVtb3ZlTm9uQWxwaGFiZXRpY0FuZFNwYWNlQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCB7IGRlcHRoIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgYWRkQW5jaG9yKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gQ09OVEVOVFNfUFJFUEVORCxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tUHJlcGVuZEFuZElkZW50aWZpZXIocHJlcGVuZCwgaWRlbnRpZmllciksXG4gICAgICAgICAgcHJlcGVuZGVkQ2hpbGROb2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHRoaXMucHJlcGVuZENoaWxkTm9kZShwcmVwZW5kZWRDaGlsZE5vZGUpO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0TGluZU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGluZU1hcmtkb3duTm9kZSA9IGxhc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBsaW5lTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllckZyb21QbGFpblRleHQocGxhaW5UZXh0KSB7XG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC50b0xvd2VyQ2FzZSgpOyAgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlKHBsYWluVGV4dCk7ICAvLy9cblxuICBwbGFpblRleHQgPSByZW1vdmVOb25BbHBoYWJldGljQW5kU3BhY2VDaGFyYWN0ZXJzKHBsYWluVGV4dCk7IC8vL1xuXG4gIHBsYWluVGV4dCA9IHJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyhwbGFpblRleHQpOyAgLy8vXG5cbiAgY29uc3QgaWRlbnRpZmllciA9IHBsYWluVGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG4iXSwibmFtZXMiOlsiSGVhZGluZ01hcmtkb3duTm9kZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImdldERlcHRoIiwiZGVwdGgiLCJjb25zdHJ1Y3RvciIsImFkZEFuY2hvciIsImNvbnRleHQiLCJwcmVwZW5kIiwiQ09OVEVOVFNfUFJFUEVORCIsImlkZW50aWZpZXIiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJBbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tUHJlcGVuZEFuZElkZW50aWZpZXIiLCJwcmVwZW5kZWRDaGlsZE5vZGUiLCJwcmVwZW5kQ2hpbGROb2RlIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJpZGVudGlmaWVyRnJvbVBsYWluVGV4dCIsImdldExpbmVNYXJrZG93bk5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImxhc3RDaGlsZE5vZGUiLCJsaW5lTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJDbGFzcyIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsInRvTG93ZXJDYXNlIiwicmVtb3ZlZExlYWRpbmdXaGl0ZXNwYWNlIiwicmVtb3ZlTm9uQWxwaGFiZXRpY0FuZFNwYWNlQ2hhcmFjdGVycyIsInJlcGxhY2VTcGFjZXNXaXRoSHlwaGVucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7K0RBRU47NkRBQ007d0JBRUU7c0JBQ3lFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFHLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLFFBQVUsSUFBSSxDQUFDQyxXQUFXLENBQTFCRDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUMsVUFBVUMsMEJBQWdCLEVBQzFCQyxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDSCxVQUM3QkkscUJBQXFCQyxlQUFrQixDQUFDQyx3QkFBd0IsQ0FBQ0wsU0FBU0UsYUFDMUVJLHFCQUFxQkgsb0JBQW9CLEdBQUc7Z0JBRWxELElBQUksQ0FBQ0ksZ0JBQWdCLENBQUNEO1lBQ3hCOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdILE9BQU87Z0JBQ2hCLElBQU1TLFlBQVksSUFBSSxDQUFDQyxXQUFXLENBQUNWLFVBQzdCRyxhQUFhUSx3QkFBd0JGO2dCQUUzQyxPQUFPTjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxnQkFBZ0JyQixLQUFLbUIsYUFDckJHLG1CQUFtQkQsZUFBZ0IsR0FBRztnQkFFNUMsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLEtBQUssRUFBRUMsUUFBUSxFQUFFTixVQUFVLEVBQUVPLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBQUNDLE9BQU9DLFVBQVVOLFlBQVlPO1lBQVU7OztXQS9CekozQjtFQUE0QjRCLGlCQUFZO0FBa0M3RCxTQUFTVix3QkFBd0JGLFNBQVM7SUFDeENBLFlBQVlBLFVBQVVhLFdBQVcsSUFBSyxHQUFHO0lBRXpDYixZQUFZYyxJQUFBQSxnQ0FBd0IsRUFBQ2QsWUFBYSxHQUFHO0lBRXJEQSxZQUFZZSxJQUFBQSw2Q0FBcUMsRUFBQ2YsWUFBWSxHQUFHO0lBRWpFQSxZQUFZZ0IsSUFBQUEsZ0NBQXdCLEVBQUNoQixZQUFhLEdBQUc7SUFFckQsSUFBTU4sYUFBYU0sV0FBVyxHQUFHO0lBRWpDLE9BQU9OO0FBQ1QifQ==