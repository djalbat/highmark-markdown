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
            key: "getIdentifiers",
            value: function getIdentifiers() {
                var childNodes = this.getChildNodes(), footnoteItemMarkdownNodes = childNodes, identifiers = footnoteItemMarkdownNodes.map(function(footnoteItemMarkdownNode) {
                    var identifier = footnoteItemMarkdownNode.getIdentifier();
                    return identifier;
                });
                return identifiers;
            }
        }
    ], [
        {
            key: "fromDocumentMarkdownNode",
            value: function fromDocumentMarkdownNode(documentMarkdownNode) {
                var footnotesListMarkdownNode = null;
                var footnoteItemMarkdownNodes = footnoteItemMarkdownNodesFromDocumentMarkdownNode(documentMarkdownNode), footnoteItemMarkdownNodesLength = footnoteItemMarkdownNodes.length;
                if (footnoteItemMarkdownNodesLength > 0) {
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = footnoteItemMarkdownNodes, ambiguous = false;
                    footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndAmbiguous(FootnotesListMarkdownNode, ruleName, childNodes, ambiguous);
                }
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);
function footnoteItemMarkdownNodesFromDocumentMarkdownNode(documentMarkdownNode) {
    var footnoteItemMarkdownNodes = [], footnoteMarkdownNodes = (0, _query.footnoteMarkdownNodesFromNode)(documentMarkdownNode), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(documentMarkdownNode), identifiers = footnoteMarkdownNodes.map(function(footnoteMarkdownNode) {
        var identifier = footnoteMarkdownNode.getIdentifier();
        return identifier;
    });
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var identifier = linkMarkdownNode.getIdentifier(), index = identifiers.indexOf(identifier);
        if (index > -1) {
            var footnoteMarkdownNode = footnoteMarkdownNodes[index], footnoteItemMarkdownNode = _footnoteItem.default.fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier);
            footnoteItemMarkdownNodes.push(footnoteItemMarkdownNode);
        }
    });
    return footnoteItemMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IEZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi9mb290bm90ZUl0ZW1cIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBnZXRJZGVudGlmaWVycygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJzID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5tYXAoKGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudE1hcmtkb3duTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2U7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKSB7XG4gIGNvbnN0IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGVzID0gZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUpLFxuICAgICAgICBsaW5rTWFya2Rvd25Ob2RlcyA9IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUpLFxuICAgICAgICBpZGVudGlmaWVycyA9IGZvb3Rub3RlTWFya2Rvd25Ob2Rlcy5tYXAoKGZvb3Rub3RlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgICAgICB9KTtcblxuICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGluZGV4ID0gaWRlbnRpZmllcnMuaW5kZXhPZihpZGVudGlmaWVyKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllcik7XG5cbiAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMucHVzaChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImdldElkZW50aWZpZXJzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzIiwiaWRlbnRpZmllcnMiLCJtYXAiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImZyb21Eb2N1bWVudE1hcmtkb3duTm9kZSIsImRvY3VtZW50TWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJGT09UTk9URVNfTElTVF9SVUxFX05BTUUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZSIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwiaW5kZXgiLCJpbmRleE9mIiwiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllciIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OytEQVBJO21FQUVZO3lCQUVJO3FCQUNnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRCxJQUFBLEFBQU1BLDBDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsNEJBQTRCRixZQUM1QkcsY0FBY0QsMEJBQTBCRSxHQUFHLENBQUMsU0FBQ0M7b0JBQzNDLElBQU1DLGFBQWFELHlCQUF5QkUsYUFBYTtvQkFFekQsT0FBT0Q7Z0JBQ1Q7Z0JBRU4sT0FBT0g7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQjtnQkFDbEQsSUFBSUMsNEJBQTRCO2dCQUVoQyxJQUFNUiw0QkFBNEJTLGtEQUFrREYsdUJBQzlFRyxrQ0FBa0NWLDBCQUEwQlcsTUFBTTtnQkFFeEUsSUFBSUQsa0NBQWtDLEdBQUc7b0JBQ3ZDLElBQU1FLFdBQVdDLG1DQUF3QixFQUNuQ2YsYUFBYUUsMkJBQ2JjLFlBQVk7b0JBRWxCTiw0QkFBNEJPLGlCQUFZLENBQUNDLGtDQUFrQyxDQXhCNURwQiwyQkF3QndGZ0IsVUFBVWQsWUFBWWdCO2dCQUMvSDtnQkFFQSxPQUFPTjtZQUNUOzs7V0E1Qm1CWjtFQUFrQ21CLGlCQUFZO0FBK0JuRSxTQUFTTixrREFBa0RGLG9CQUFvQjtJQUM3RSxJQUFNUCw0QkFBNEIsRUFBRSxFQUM5QmlCLHdCQUF3QkMsSUFBQUEsb0NBQTZCLEVBQUNYLHVCQUN0RFksb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ2IsdUJBQzlDTixjQUFjZ0Isc0JBQXNCZixHQUFHLENBQUMsU0FBQ21CO1FBQ3ZDLElBQU1qQixhQUFhaUIscUJBQXFCaEIsYUFBYTtRQUVyRCxPQUFPRDtJQUNUO0lBRU5lLGtCQUFrQkcsT0FBTyxDQUFDLFNBQUNDO1FBQ3pCLElBQU1uQixhQUFhbUIsaUJBQWlCbEIsYUFBYSxJQUMzQ21CLFFBQVF2QixZQUFZd0IsT0FBTyxDQUFDckI7UUFFbEMsSUFBSW9CLFFBQVEsQ0FBQyxHQUFHO1lBQ2QsSUFBTUgsdUJBQXVCSixxQkFBcUIsQ0FBQ08sTUFBTSxFQUNuRHJCLDJCQUEyQnVCLHFCQUF3QixDQUFDQyxxQ0FBcUMsQ0FBQ04sc0JBQXNCakI7WUFFdEhKLDBCQUEwQjRCLElBQUksQ0FBQ3pCO1FBQ2pDO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUIn0=