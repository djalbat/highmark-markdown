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
    var node = divisionMarkdownNode, footnoteItemMarkdownNodes = [], identifierToFootnoteMarkdownNodeMap = {}, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteMarkdownNodes = (0, _query.footnoteMarkdownNodesFromNode)(node);
    footnoteMarkdownNodes.forEach(function(footnoteMarkdownNode) {
        var identifier = footnoteMarkdownNode.identifier(context);
        identifierToFootnoteMarkdownNodeMap[identifier] = footnoteMarkdownNode;
    });
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var identifier = linkMarkdownNode.identifier(context), footnoteMarkdownNode = identifierToFootnoteMarkdownNodeMap[identifier] || null;
        if (footnoteMarkdownNode !== null) {
            var footnoteItemMarkdownNode = _footnoteItem.default.fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier);
            footnoteItemMarkdownNodes.push(footnoteItemMarkdownNode);
            delete identifierToFootnoteMarkdownNodeMap[identifier];
        }
    });
    return footnoteItemMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4vZm9vdG5vdGVJdGVtXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaWRlbnRpZmllcnMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgaWRlbnRpZmllcnMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLm1hcCgoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICAgICAgb3BhY2l0eSA9IG51bGw7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgaWRlbnRpZmllclRvRm9vdG5vdGVNYXJrZG93bk5vZGVNYXAgPSB7fSxcbiAgICAgICAgbGlua01hcmtkb3duTm9kZXMgPSBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXMgPSBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICBmb290bm90ZU1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgIGlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVNYXJrZG93bk5vZGU7XG4gIH0pO1xuXG4gIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gaWRlbnRpZmllclRvRm9vdG5vdGVNYXJrZG93bk5vZGVNYXBbaWRlbnRpZmllcl0gfHwgbnVsbDtcblxuICAgIGlmIChmb290bm90ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpO1xuXG4gICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLnB1c2goZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlKTtcblxuICAgICAgZGVsZXRlIGlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwW2lkZW50aWZpZXJdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImlkZW50aWZpZXJzIiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyIsIm1hcCIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Iiwibm9kZSIsImlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb3JFYWNoIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllciIsInB1c2giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsrREFOSTttRUFDWTt5QkFFSTtxQkFDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUQsSUFBQSxBQUFNQSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsT0FBTztnQkFDakIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLDRCQUE0QkYsWUFDNUJGLGNBQWNJLDBCQUEwQkMsR0FBRyxDQUFDLFNBQUNDO29CQUMzQyxJQUFNQyxhQUFhRCx5QkFBeUJDLFVBQVUsQ0FBQ047b0JBRXZELE9BQU9NO2dCQUNUO2dCQUVOLE9BQU9QO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRVIsT0FBTztnQkFDM0QsSUFBSVMsNEJBQTRCO2dCQUVoQyxJQUFNTiw0QkFBNEJPLGtEQUFrREYsc0JBQXNCUixVQUNwR1csa0NBQWtDUiwwQkFBMEJTLE1BQU07Z0JBRXhFLElBQUlELGtDQUFrQyxHQUFHO29CQUN2QyxJQUFNRSxXQUFXQyxtQ0FBd0IsRUFDbkNiLGFBQWFFLDJCQUNiWSxVQUFVO29CQUVoQk4sNEJBQTRCTyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0F4QjFEbkIsMkJBd0JzRmUsVUFBVVosWUFBWWM7Z0JBQzdIO2dCQUVBLE9BQU9OO1lBQ1Q7OztXQTVCbUJYO0VBQWtDa0IsaUJBQVk7QUErQm5FLFNBQVNOLGtEQUFrREYsb0JBQW9CLEVBQUVSLE9BQU87SUFDdEYsSUFBTWtCLE9BQU9WLHNCQUNQTCw0QkFBNEIsRUFBRSxFQUM5QmdCLHNDQUFzQyxDQUFDLEdBQ3ZDQyxvQkFBb0JDLElBQUFBLGdDQUF5QixFQUFDSCxPQUM5Q0ksd0JBQXdCQyxJQUFBQSxvQ0FBNkIsRUFBQ0w7SUFFNURJLHNCQUFzQkUsT0FBTyxDQUFDLFNBQUNDO1FBQzdCLElBQU1uQixhQUFhbUIscUJBQXFCbkIsVUFBVSxDQUFDTjtRQUVuRG1CLG1DQUFtQyxDQUFDYixXQUFXLEdBQUdtQjtJQUNwRDtJQUVBTCxrQkFBa0JJLE9BQU8sQ0FBQyxTQUFDRTtRQUN6QixJQUFNcEIsYUFBYW9CLGlCQUFpQnBCLFVBQVUsQ0FBQ04sVUFDekN5Qix1QkFBdUJOLG1DQUFtQyxDQUFDYixXQUFXLElBQUk7UUFFaEYsSUFBSW1CLHlCQUF5QixNQUFNO1lBQ2pDLElBQU1wQiwyQkFBMkJzQixxQkFBd0IsQ0FBQ0MscUNBQXFDLENBQUNILHNCQUFzQm5CO1lBRXRISCwwQkFBMEIwQixJQUFJLENBQUN4QjtZQUUvQixPQUFPYyxtQ0FBbUMsQ0FBQ2IsV0FBVztRQUN4RDtJQUNGO0lBRUEsT0FBT0g7QUFDVCJ9