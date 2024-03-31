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
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = footnoteItemMarkdownNodes, opacity = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4vZm9vdG5vdGVJdGVtXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaWRlbnRpZmllcnMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgaWRlbnRpZmllcnMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLm1hcCgoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICAgICAgb3BhY2l0eSA9IGZhbHNlO1xuXG4gICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGVzID0gZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgIGlkZW50aWZpZXJzID0gZm9vdG5vdGVNYXJrZG93bk5vZGVzLnJlZHVjZSgoaWRlbnRpZmllcnMsIGZvb3Rub3RlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcnNJbmNsdWRlc0lkZW50aWZpZXIgPSBpZGVudGlmaWVycy5pbmNsdWRlcyhpZGVudGlmaWVyKTtcblxuICAgICAgICAgIGlmICghaWRlbnRpZmllcnNJbmNsdWRlc0lkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXJzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgbGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgobGlua01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgaW5kZXggPSBpZGVudGlmaWVycy5pbmRleE9mKGlkZW50aWZpZXIpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVNYXJrZG93bk5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSA9IEZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyKGZvb3Rub3RlTWFya2Rvd25Ob2RlLCBpZGVudGlmaWVyKTtcblxuICAgICAgaWRlbnRpZmllcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMucHVzaChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImlkZW50aWZpZXJzIiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyIsIm1hcCIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Iiwibm9kZSIsImxpbmtNYXJrZG93bk5vZGVzIiwibGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlcyIsImZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwicmVkdWNlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyc0luY2x1ZGVzSWRlbnRpZmllciIsImluY2x1ZGVzIiwicHVzaCIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsIkZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJzcGxpY2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JO21FQUNZO3lCQUVJO3FCQUNnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRCxJQUFBLEFBQU1BLDBDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxPQUFPO2dCQUNqQixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsNEJBQTRCRixZQUM1QkYsY0FBY0ksMEJBQTBCQyxHQUFHLENBQUMsU0FBQ0M7b0JBQzNDLElBQU1DLGFBQWFELHlCQUF5QkMsVUFBVSxDQUFDTjtvQkFFdkQsT0FBT007Z0JBQ1Q7Z0JBRU4sT0FBT1A7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQixFQUFFUixPQUFPO2dCQUMzRCxJQUFJUyw0QkFBNEI7Z0JBRWhDLElBQU1OLDRCQUE0Qk8sa0RBQWtERixzQkFBc0JSLFVBQ3BHVyxrQ0FBa0NSLDBCQUEwQlMsTUFBTTtnQkFFeEUsSUFBSUQsa0NBQWtDLEdBQUc7b0JBQ3ZDLElBQU1FLFdBQVdDLG1DQUF3QixFQUNuQ2IsYUFBYUUsMkJBQ2JZLFVBQVU7b0JBRWhCTiw0QkFBNEJPLGlCQUFZLENBQUNDLGdDQUFnQyxDQXhCMURuQiwyQkF3QnNGZSxVQUFVWixZQUFZYztnQkFDN0g7Z0JBRUEsT0FBT047WUFDVDs7O1dBNUJtQlg7RUFBa0NrQixpQkFBWTtBQStCbkUsU0FBU04sa0RBQWtERixvQkFBb0IsRUFBRVIsT0FBTztJQUN0RixJQUFNRyw0QkFBNEIsRUFBRSxFQUM5QmUsT0FBT1Ysc0JBQ1BXLG9CQUFvQkMsSUFBQUEsZ0NBQXlCLEVBQUNGLE9BQzlDRyx3QkFBd0JDLElBQUFBLG9DQUE2QixFQUFDSixPQUN0RG5CLGNBQWNzQixzQkFBc0JFLE1BQU0sQ0FBQyxTQUFDeEIsYUFBYXlCO1FBQ3ZELElBQU1sQixhQUFha0IscUJBQXFCbEIsVUFBVSxDQUFDTixVQUM3Q3lCLGdDQUFnQzFCLFlBQVkyQixRQUFRLENBQUNwQjtRQUUzRCxJQUFJLENBQUNtQiwrQkFBK0I7WUFDbEMxQixZQUFZNEIsSUFBSSxDQUFDckI7UUFDbkI7UUFFQSxPQUFPUDtJQUNULEdBQUcsRUFBRTtJQUVYb0Isa0JBQWtCUyxPQUFPLENBQUMsU0FBQ0M7UUFDekIsSUFBTXZCLGFBQWF1QixpQkFBaUJ2QixVQUFVLENBQUNOLFVBQ3pDOEIsUUFBUS9CLFlBQVlnQyxPQUFPLENBQUN6QjtRQUVsQyxJQUFJd0IsUUFBUSxDQUFDLEdBQUc7WUFDZCxJQUFNRSxRQUFRRixPQUNSRyxjQUFjLEdBQ2RULHVCQUF1QkgscUJBQXFCLENBQUNTLE1BQU0sRUFDbkR6QiwyQkFBMkI2QixxQkFBd0IsQ0FBQ0MscUNBQXFDLENBQUNYLHNCQUFzQmxCO1lBRXRIUCxZQUFZcUMsTUFBTSxDQUFDSixPQUFPQztZQUUxQjlCLDBCQUEwQndCLElBQUksQ0FBQ3RCO1FBQ2pDO0lBQ0Y7SUFFQSxPQUFPRjtBQUNUIn0=