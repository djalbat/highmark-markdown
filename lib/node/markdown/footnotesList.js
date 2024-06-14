"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("./footnoteItem"));
var _ruleNames = require("../../ruleNames");
var _query = require("../../utilities/query");
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
var FootnotesListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnotesListMarkdownNode, MarkdownNode);
    var _super = _create_super(FootnotesListMarkdownNode);
    function FootnotesListMarkdownNode() {
        _class_call_check(this, FootnotesListMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(FootnotesListMarkdownNode, [
        {
            key: "identifierToNumberMap",
            value: function identifierToNumberMap(context) {
                var childNodes = this.getChildNodes(), footnoteItemMarkdownNodes = childNodes, identifierToNumberMap = footnoteItemMarkdownNodes.reduce(function(identifierToNumberMap, footnoteItemMarkdownNode, index) {
                    var number = index + 1, identifier = footnoteItemMarkdownNode.identifier(context);
                    identifierToNumberMap[identifier] = number;
                    return identifierToNumberMap;
                }, {});
                return identifierToNumberMap;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodeAndReplacements",
            value: function fromDivisionMarkdownNodeAndReplacements(divisionMarkdownNode, replacements, context) {
                var footnotesListMarkdownNode = null;
                replacements = replacements.map(function(replacement) {
                    var node = replacement.getNode(), footnoteMarkdownNode = (0, _query.footnoteMarkdownNodsFromNode)(node), descendentNode = footnoteMarkdownNode; ///
                    replacement = replacement.contract(descendentNode);
                    return replacement;
                });
                var node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), identifierToReplacementMap = {};
                replacements.forEach(function(replacement) {
                    var node = replacement.getNode(), footnoteMarkdownNode = node, identifier = footnoteMarkdownNode.identifier(context);
                    identifierToReplacementMap[identifier] = replacement;
                });
                replacements = [];
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context);
                    var replacement = identifierToReplacementMap[identifier] || null;
                    if (replacement !== null) {
                        var node = replacement.getNode(), footnoteMarkdownNode = node, footnoteItemMarkdownNode = _footnoteItem.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnoteItemMarkdownNode; ///
                        replacement = replacement.expand(ascendantNode);
                        delete identifierToReplacementMap[identifier];
                        replacements.push(replacement);
                    }
                });
                var replacementsLength = replacements.length;
                if (replacementsLength > 0) {
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = [], opacity = null;
                    footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
                }
                replacements.forEach(function(replacement) {
                    replacement.appendTo(footnotesListMarkdownNode, context);
                });
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4vZm9vdG5vdGVJdGVtXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBpZGVudGlmaWVyVG9OdW1iZXJNYXAoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgaWRlbnRpZmllclRvTnVtYmVyTWFwID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5yZWR1Y2UoKGlkZW50aWZpZXJUb051bWJlck1hcCwgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZGVudGlmaWVyVG9OdW1iZXJNYXBbaWRlbnRpZmllcl0gPSBudW1iZXI7XG5cbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyVG9OdW1iZXJNYXA7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJUb051bWJlck1hcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRSZXBsYWNlbWVudHMoZGl2aXNpb25NYXJrZG93bk5vZGUsIHJlcGxhY2VtZW50cywgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIHJlcGxhY2VtZW50cyA9IHJlcGxhY2VtZW50cy5tYXAoKHJlcGxhY2VtZW50KSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IG5vZGUgPSByZXBsYWNlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgICBkZXNjZW5kZW50Tm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICAgIHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQuY29udHJhY3QoZGVzY2VuZGVudE5vZGUpO1xuXG4gICAgICByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBsaW5rTWFya2Rvd25Ob2RlcyA9IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWRlbnRpZmllclRvUmVwbGFjZW1lbnRNYXAgPSB7fTtcblxuICAgIHJlcGxhY2VtZW50cy5mb3JFYWNoKChyZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGlkZW50aWZpZXJUb1JlcGxhY2VtZW50TWFwW2lkZW50aWZpZXJdID0gcmVwbGFjZW1lbnQ7XG4gICAgfSk7XG5cbiAgICByZXBsYWNlbWVudHMgPSBbXTtcblxuICAgIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGxldCByZXBsYWNlbWVudCA9IGlkZW50aWZpZXJUb1JlcGxhY2VtZW50TWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gcmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyKGZvb3Rub3RlTWFya2Rvd25Ob2RlLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICAgICAgYXNjZW5kYW50Tm9kZSA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudC5leHBhbmQoYXNjZW5kYW50Tm9kZSk7XG5cbiAgICAgICAgZGVsZXRlIGlkZW50aWZpZXJUb1JlcGxhY2VtZW50TWFwW2lkZW50aWZpZXJdO1xuXG4gICAgICAgIHJlcGxhY2VtZW50cy5wdXNoKHJlcGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50c0xlbmd0aCA9IHJlcGxhY2VtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gW10sIC8vL1xuICAgICAgICAgICAgb3BhY2l0eSA9IG51bGw7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuICAgIH1cblxuICAgIHJlcGxhY2VtZW50cy5mb3JFYWNoKChyZXBsYWNlbWVudCkgPT4ge1xuICAgICAgcmVwbGFjZW1lbnQuYXBwZW5kVG8oZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyVG9OdW1iZXJNYXAiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzIiwicmVkdWNlIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiaW5kZXgiLCJudW1iZXIiLCJpZGVudGlmaWVyIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kUmVwbGFjZW1lbnRzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudHMiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwibWFwIiwicmVwbGFjZW1lbnQiLCJub2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZHNGcm9tTm9kZSIsImRlc2NlbmRlbnROb2RlIiwiY29udHJhY3QiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJpZGVudGlmaWVyVG9SZXBsYWNlbWVudE1hcCIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJhc2NlbmRhbnROb2RlIiwiZXhwYW5kIiwicHVzaCIsInJlcGxhY2VtZW50c0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiYXBwZW5kVG8iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsrREFOSTttRUFDWTt5QkFFSTtxQkFDK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBQSxBQUFNQSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxPQUFPO2dCQUMzQixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsNEJBQTRCRixZQUM1QkYsd0JBQXdCSSwwQkFBMEJDLE1BQU0sQ0FBQyxTQUFDTCx1QkFBdUJNLDBCQUEwQkM7b0JBQ3pHLElBQU1DLFNBQVNELFFBQVEsR0FDakJFLGFBQWFILHlCQUF5QkcsVUFBVSxDQUFDUjtvQkFFdkRELHFCQUFxQixDQUFDUyxXQUFXLEdBQUdEO29CQUVwQyxPQUFPUjtnQkFDVCxHQUFHLENBQUM7Z0JBRVYsT0FBT0E7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSx3Q0FBd0NDLG9CQUFvQixFQUFFQyxZQUFZLEVBQUVYLE9BQU87Z0JBQ3hGLElBQUlZLDRCQUE0QjtnQkFFaENELGVBQWVBLGFBQWFFLEdBQUcsQ0FBQyxTQUFDQztvQkFDL0IsSUFBTUMsT0FBT0QsWUFBWUUsT0FBTyxJQUMxQkMsdUJBQXVCQyxJQUFBQSxtQ0FBNEIsRUFBQ0gsT0FDcERJLGlCQUFpQkYsc0JBQXVCLEdBQUc7b0JBRWpESCxjQUFjQSxZQUFZTSxRQUFRLENBQUNEO29CQUVuQyxPQUFPTDtnQkFDVDtnQkFFQSxJQUFNQyxPQUFPTCxzQkFDUFcsb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ1AsT0FDOUNRLDZCQUE2QixDQUFDO2dCQUVwQ1osYUFBYWEsT0FBTyxDQUFDLFNBQUNWO29CQUNwQixJQUFNQyxPQUFPRCxZQUFZRSxPQUFPLElBQzFCQyx1QkFBdUJGLE1BQ3ZCUCxhQUFhUyxxQkFBcUJULFVBQVUsQ0FBQ1I7b0JBRW5EdUIsMEJBQTBCLENBQUNmLFdBQVcsR0FBR007Z0JBQzNDO2dCQUVBSCxlQUFlLEVBQUU7Z0JBRWpCVSxrQkFBa0JHLE9BQU8sQ0FBQyxTQUFDQztvQkFDekIsSUFBTWpCLGFBQWFpQixpQkFBaUJqQixVQUFVLENBQUNSO29CQUUvQyxJQUFJYyxjQUFjUywwQkFBMEIsQ0FBQ2YsV0FBVyxJQUFJO29CQUU1RCxJQUFJTSxnQkFBZ0IsTUFBTTt3QkFDeEIsSUFBTUMsT0FBT0QsWUFBWUUsT0FBTyxJQUMxQkMsdUJBQXVCRixNQUN2QlYsMkJBQTJCcUIscUJBQXdCLENBQUNDLHNDQUFzQyxDQUFDVixzQkFBc0JULGFBQ2pIb0IsZ0JBQWdCdkIsMEJBQTBCLEdBQUc7d0JBRW5EUyxjQUFjQSxZQUFZZSxNQUFNLENBQUNEO3dCQUVqQyxPQUFPTCwwQkFBMEIsQ0FBQ2YsV0FBVzt3QkFFN0NHLGFBQWFtQixJQUFJLENBQUNoQjtvQkFDcEI7Z0JBQ0Y7Z0JBRUEsSUFBTWlCLHFCQUFxQnBCLGFBQWFxQixNQUFNO2dCQUU5QyxJQUFJRCxxQkFBcUIsR0FBRztvQkFDMUIsSUFBTUUsV0FBV0MsbUNBQXdCLEVBQ25DakMsYUFBYSxFQUFFLEVBQ2ZrQyxVQUFVO29CQUVoQnZCLDRCQUE0QndCLGlCQUFZLENBQUNDLGdDQUFnQyxDQXJFMUR2QywyQkFxRXNGbUMsVUFBVWhDLFlBQVlrQztnQkFDN0g7Z0JBRUF4QixhQUFhYSxPQUFPLENBQUMsU0FBQ1Y7b0JBQ3BCQSxZQUFZd0IsUUFBUSxDQUFDMUIsMkJBQTJCWjtnQkFDbEQ7Z0JBRUEsT0FBT1k7WUFDVDs7O1dBN0VtQmQ7RUFBa0NzQyxpQkFBWSJ9