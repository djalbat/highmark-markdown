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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/anchor"));
var _prepends = require("../../prepends");
var _ruleNames = require("../../ruleNames");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQW5jaG9yTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBGT09UTk9URV9QUkVQRU5EIH0gZnJvbSBcIi4uLy4uL3ByZXBlbmRzXCI7XG5pbXBvcnQgeyBGT09UTk9URVNfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgc3RhdGljIGZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyKGZvb3Rub3RlTWFya2Rvd25Ob2RlLCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFX1BSRVBFTkQsXG4gICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gQW5jaG9yTWFya2Rvd25Ob2RlLmZyb21QcmVwZW5kQW5kSWRlbnRpZmllcihwcmVwZW5kLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICBzZWNvbmRGb290bm90ZU1hcmtkb3duTm9kZUNoaWxkTm9kZSA9IHJlbW92ZVNlY29uZENoaWxkTm9kZShmb290bm90ZU1hcmtkb3duTm9kZSksXG4gICAgICAgICAgcGFyYWdyYXBoTWFya2Rvd25Ob2RlID0gc2Vjb25kRm9vdG5vdGVNYXJrZG93bk5vZGVDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IEZPT1ROT1RFU19JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlLFxuICAgICAgICAgICAgcGFyYWdyYXBoTWFya2Rvd25Ob2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIHJldHVybiBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNlY29uZENoaWxkTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgY29uc3Qgc3RhcnRJbmRleCA9IDEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBtYXJrZG93bk5vZGUuc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCksXG4gICAgICAgIGZpcnN0UmVtb3ZlZENoaWxkTm9kZSA9IGZpcnN0KHJlbW92ZWRDaGlsZE5vZGVzKSxcbiAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gZmlyc3RSZW1vdmVkQ2hpbGROb2RlOyAvLy9cblxuICByZXR1cm4gc2Vjb25kQ2hpbGROb2RlO1xufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJmb290bm90ZU1hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJwcmVwZW5kIiwiRk9PVE5PVEVfUFJFUEVORCIsImFuY2hvck1hcmtkb3duTm9kZSIsIkFuY2hvck1hcmtkb3duTm9kZSIsImZyb21QcmVwZW5kQW5kSWRlbnRpZmllciIsInNlY29uZEZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlIiwicmVtb3ZlU2Vjb25kQ2hpbGROb2RlIiwicGFyYWdyYXBoTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJGT09UTk9URVNfSVRFTV9SVUxFX05BTUUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsImZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIm1hcmtkb3duTm9kZSIsInN0YXJ0SW5kZXgiLCJkZWxldGVDb3VudCIsInJlbW92ZWRDaGlsZE5vZGVzIiwic3BsaWNlQ2hpbGROb2RlcyIsImZpcnN0UmVtb3ZlZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7K0RBRU47NkRBQ007d0JBRUU7eUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSx1Q0FBdUNDLG9CQUFvQixFQUFFQyxVQUFVO2dCQUM1RSxJQUFNQyxVQUFVQywwQkFBZ0IsRUFDMUJDLHFCQUFxQkMsZUFBa0IsQ0FBQ0Msd0JBQXdCLENBQUNKLFNBQVNELGFBQzFFTSxzQ0FBc0NDLHNCQUFzQlIsdUJBQzVEUyx3QkFBd0JGLHFDQUN4QkcsV0FBV0MsbUNBQXdCLEVBQ25DQyxhQUFhO29CQUNYUjtvQkFDQUs7aUJBQ0QsRUFDREksVUFBVSxNQUNWQyw0QkFBNEJDLGlCQUFZLENBQUNDLGdDQUFnQyxDQVo5RHBCLDJCQVkwRmMsVUFBVUUsWUFBWUM7Z0JBRWpJLE9BQU9DO1lBQ1Q7OztXQWZtQmxCO0VBQWtDbUIsaUJBQVk7QUFrQm5FLFNBQVNQLHNCQUFzQlMsWUFBWTtJQUN6QyxJQUFNQyxhQUFhLEdBQ2JDLGNBQWMsR0FDZEMsb0JBQW9CSCxhQUFhSSxnQkFBZ0IsQ0FBQ0gsWUFBWUMsY0FDOURHLHdCQUF3QnpCLE1BQU11QixvQkFDOUJHLGtCQUFrQkQsdUJBQXVCLEdBQUc7SUFFbEQsT0FBT0M7QUFDVCJ9