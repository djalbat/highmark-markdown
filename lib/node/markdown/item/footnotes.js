"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesItemMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/anchor"));
var _prepends = require("../../../prepends");
var _ruleNames = require("../../../ruleNames");
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
var FootnotesItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnotesItemMarkdownNode, MarkdownNode);
    function FootnotesItemMarkdownNode() {
        _class_call_check(this, FootnotesItemMarkdownNode);
        return _call_super(this, FootnotesItemMarkdownNode, arguments);
    }
    _create_class(FootnotesItemMarkdownNode, null, [
        {
            key: "fromFootnotesMarkdownNodeAndIdentifier",
            value: function fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier) {
                var prepend = _prepends.FOOTNOTE_PREPEND, anchorMarkdownNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), secondFootnoteMarkdownNodeChildNode = removeSecondChildNode(footnoteMarkdownNode), paragraphMarkdownNode = secondFootnoteMarkdownNodeChildNode, ruleName = _ruleNames.FOOTNOTES_ITEM_RULE_NAME, childNodes = [
                    anchorMarkdownNode,
                    paragraphMarkdownNode
                ], opacity = null, footnotesItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesItemMarkdownNode, ruleName, childNodes, opacity);
                return footnotesItemMarkdownNode;
            }
        }
    ]);
    return FootnotesItemMarkdownNode;
}(_markdown.default);
function removeSecondChildNode(markdownNode) {
    var startIndex = 1, deleteCount = 1, removedChildNodes = markdownNode.spliceChildNodes(startIndex, deleteCount), firstRemovedChildNode = first(removedChildNodes), secondChildNode = firstRemovedChildNode; ///
    return secondChildNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2l0ZW0vZm9vdG5vdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEFuY2hvck1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9hbmNob3JcIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVTX0lURU1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVzTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllcikge1xuICAgIGNvbnN0IHByZXBlbmQgPSBGT09UTk9URV9QUkVQRU5ELFxuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tUHJlcGVuZEFuZElkZW50aWZpZXIocHJlcGVuZCwgaWRlbnRpZmllciksXG4gICAgICAgICAgc2Vjb25kRm9vdG5vdGVNYXJrZG93bk5vZGVDaGlsZE5vZGUgPSByZW1vdmVTZWNvbmRDaGlsZE5vZGUoZm9vdG5vdGVNYXJrZG93bk5vZGUpLFxuICAgICAgICAgIHBhcmFncmFwaE1hcmtkb3duTm9kZSA9IHNlY29uZEZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBGT09UTk9URVNfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSxcbiAgICAgICAgICAgIHBhcmFncmFwaE1hcmtkb3duTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTZWNvbmRDaGlsZE5vZGUobWFya2Rvd25Ob2RlKSB7XG4gIGNvbnN0IHN0YXJ0SW5kZXggPSAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gbWFya2Rvd25Ob2RlLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQpLFxuICAgICAgICBmaXJzdFJlbW92ZWRDaGlsZE5vZGUgPSBmaXJzdChyZW1vdmVkQ2hpbGROb2RlcyksXG4gICAgICAgIHNlY29uZENoaWxkTm9kZSA9IGZpcnN0UmVtb3ZlZENoaWxkTm9kZTsgLy8vXG5cbiAgcmV0dXJuIHNlY29uZENoaWxkTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwicHJlcGVuZCIsIkZPT1ROT1RFX1BSRVBFTkQiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJBbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tUHJlcGVuZEFuZElkZW50aWZpZXIiLCJzZWNvbmRGb290bm90ZU1hcmtkb3duTm9kZUNoaWxkTm9kZSIsInJlbW92ZVNlY29uZENoaWxkTm9kZSIsInBhcmFncmFwaE1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiRk9PVE5PVEVTX0lURU1fUlVMRV9OQU1FIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJtYXJrZG93bk5vZGUiLCJzdGFydEluZGV4IiwiZGVsZXRlQ291bnQiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInNwbGljZUNoaWxkTm9kZXMiLCJmaXJzdFJlbW92ZWRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVOOzZEQUNNO3dCQUVFO3lCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EsdUNBQXVDQyxvQkFBb0IsRUFBRUMsVUFBVTtnQkFDNUUsSUFBTUMsVUFBVUMsMEJBQWdCLEVBQzFCQyxxQkFBcUJDLGVBQWtCLENBQUNDLHdCQUF3QixDQUFDSixTQUFTRCxhQUMxRU0sc0NBQXNDQyxzQkFBc0JSLHVCQUM1RFMsd0JBQXdCRixxQ0FDeEJHLFdBQVdDLG1DQUF3QixFQUNuQ0MsYUFBYTtvQkFDWFI7b0JBQ0FLO2lCQUNELEVBQ0RJLFVBQVUsTUFDVkMsNEJBQTRCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0FaOURwQiwyQkFZMEZjLFVBQVVFLFlBQVlDO2dCQUVqSSxPQUFPQztZQUNUOzs7V0FmbUJsQjtFQUFrQ21CLGlCQUFZO0FBa0JuRSxTQUFTUCxzQkFBc0JTLFlBQVk7SUFDekMsSUFBTUMsYUFBYSxHQUNiQyxjQUFjLEdBQ2RDLG9CQUFvQkgsYUFBYUksZ0JBQWdCLENBQUNILFlBQVlDLGNBQzlERyx3QkFBd0J6QixNQUFNdUIsb0JBQzlCRyxrQkFBa0JELHVCQUF1QixHQUFHO0lBRWxELE9BQU9DO0FBQ1QifQ==