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
            key: "identifiers",
            value: function identifiers(context) {
                var childNodes = this.getChildNodes(), footnoteItemMarkdownNodes = childNodes, identifiers = footnoteItemMarkdownNodes.map(function(footnoteItemMarkdownNode) {
                    var identifier = footnoteItemMarkdownNode.identifier(context);
                    return identifier;
                });
                return identifiers;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var footnotesListMarkdownNode = null;
                var footnoteItemMarkdownNodes = footnoteItemMarkdownNodesFromDivisionMarkdownNode(divisionMarkdownNode, context), footnoteItemMarkdownNodesLength = footnoteItemMarkdownNodes.length;
                if (footnoteItemMarkdownNodesLength > 0) {
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = footnoteItemMarkdownNodes, opacity = null;
                    footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
                }
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);
function footnoteItemMarkdownNodesFromDivisionMarkdownNode(divisionMarkdownNode, context) {
    var footnoteItemMarkdownNodes = [], node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteMarkdownNodes = (0, _query.footnoteMarkdownNodesFromNode)(node), identifiers = footnoteMarkdownNodes.reduce(function(identifiers, footnoteMarkdownNode) {
        var identifier = footnoteMarkdownNode.identifier(context), identifiersIncludesIdentifier = identifiers.includes(identifier);
        if (!identifiersIncludesIdentifier) {
            identifiers.push(identifier);
        }
        return identifiers;
    }, []);
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var identifier = linkMarkdownNode.identifier(context), index = identifiers.indexOf(identifier);
        if (index > -1) {
            var start = index, deleteCount = 1, footnoteMarkdownNode = footnoteMarkdownNodes[index], footnoteItemMarkdownNode = _footnoteItem.default.fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier);
            identifiers.splice(start, deleteCount);
            footnoteItemMarkdownNodes.push(footnoteItemMarkdownNode);
        }
    });
    return footnoteItemMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4vZm9vdG5vdGVJdGVtXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaWRlbnRpZmllcnMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgaWRlbnRpZmllcnMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLm1hcCgoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICAgICAgb3BhY2l0eSA9IG51bGw7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgbGlua01hcmtkb3duTm9kZXMgPSBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXMgPSBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgaWRlbnRpZmllcnMgPSBmb290bm90ZU1hcmtkb3duTm9kZXMucmVkdWNlKChpZGVudGlmaWVycywgZm9vdG5vdGVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyc0luY2x1ZGVzSWRlbnRpZmllciA9IGlkZW50aWZpZXJzLmluY2x1ZGVzKGlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgaWYgKCFpZGVudGlmaWVyc0luY2x1ZGVzSWRlbnRpZmllcikge1xuICAgICAgICAgICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaWRlbnRpZmllcnM7XG4gICAgICAgIH0sIFtdKTtcblxuICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBpbmRleCA9IGlkZW50aWZpZXJzLmluZGV4T2YoaWRlbnRpZmllcik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpO1xuXG4gICAgICBpZGVudGlmaWVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5wdXNoKGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllcnMiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzIiwibWFwIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJGT09UTk9URVNfTElTVF9SVUxFX05BTUUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJub2RlIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJyZWR1Y2UiLCJmb290bm90ZU1hcmtkb3duTm9kZSIsImlkZW50aWZpZXJzSW5jbHVkZXNJZGVudGlmaWVyIiwiaW5jbHVkZXMiLCJwdXNoIiwiZm9yRWFjaCIsImxpbmtNYXJrZG93bk5vZGUiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllciIsInNwbGljZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkk7bUVBQ1k7eUJBRUk7cUJBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE9BQU87Z0JBQ2pCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyw0QkFBNEJGLFlBQzVCRixjQUFjSSwwQkFBMEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMsYUFBYUQseUJBQXlCQyxVQUFVLENBQUNOO29CQUV2RCxPQUFPTTtnQkFDVDtnQkFFTixPQUFPUDtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVSLE9BQU87Z0JBQzNELElBQUlTLDRCQUE0QjtnQkFFaEMsSUFBTU4sNEJBQTRCTyxrREFBa0RGLHNCQUFzQlIsVUFDcEdXLGtDQUFrQ1IsMEJBQTBCUyxNQUFNO2dCQUV4RSxJQUFJRCxrQ0FBa0MsR0FBRztvQkFDdkMsSUFBTUUsV0FBV0MsbUNBQXdCLEVBQ25DYixhQUFhRSwyQkFDYlksVUFBVTtvQkFFaEJOLDRCQUE0Qk8saUJBQVksQ0FBQ0MsZ0NBQWdDLENBeEIxRG5CLDJCQXdCc0ZlLFVBQVVaLFlBQVljO2dCQUM3SDtnQkFFQSxPQUFPTjtZQUNUOzs7V0E1Qm1CWDtFQUFrQ2tCLGlCQUFZO0FBK0JuRSxTQUFTTixrREFBa0RGLG9CQUFvQixFQUFFUixPQUFPO0lBQ3RGLElBQU1HLDRCQUE0QixFQUFFLEVBQzlCZSxPQUFPVixzQkFDUFcsb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0YsT0FDOUNHLHdCQUF3QkMsSUFBQUEsb0NBQTZCLEVBQUNKLE9BQ3REbkIsY0FBY3NCLHNCQUFzQkUsTUFBTSxDQUFDLFNBQUN4QixhQUFheUI7UUFDdkQsSUFBTWxCLGFBQWFrQixxQkFBcUJsQixVQUFVLENBQUNOLFVBQzdDeUIsZ0NBQWdDMUIsWUFBWTJCLFFBQVEsQ0FBQ3BCO1FBRTNELElBQUksQ0FBQ21CLCtCQUErQjtZQUNsQzFCLFlBQVk0QixJQUFJLENBQUNyQjtRQUNuQjtRQUVBLE9BQU9QO0lBQ1QsR0FBRyxFQUFFO0lBRVhvQixrQkFBa0JTLE9BQU8sQ0FBQyxTQUFDQztRQUN6QixJQUFNdkIsYUFBYXVCLGlCQUFpQnZCLFVBQVUsQ0FBQ04sVUFDekM4QixRQUFRL0IsWUFBWWdDLE9BQU8sQ0FBQ3pCO1FBRWxDLElBQUl3QixRQUFRLENBQUMsR0FBRztZQUNkLElBQU1FLFFBQVFGLE9BQ1JHLGNBQWMsR0FDZFQsdUJBQXVCSCxxQkFBcUIsQ0FBQ1MsTUFBTSxFQUNuRHpCLDJCQUEyQjZCLHFCQUF3QixDQUFDQyxxQ0FBcUMsQ0FBQ1gsc0JBQXNCbEI7WUFFdEhQLFlBQVlxQyxNQUFNLENBQUNKLE9BQU9DO1lBRTFCOUIsMEJBQTBCd0IsSUFBSSxDQUFDdEI7UUFDakM7SUFDRjtJQUVBLE9BQU9GO0FBQ1QifQ==