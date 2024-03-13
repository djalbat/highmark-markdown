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
            value: function getIdentifiers(context) {
                var childNodes = this.getChildNodes(), footnoteItemMarkdownNodes = childNodes, identifiers = footnoteItemMarkdownNodes.map(function(footnoteItemMarkdownNode) {
                    var identifier = footnoteItemMarkdownNode.getIdentifier(context);
                    return identifier;
                });
                return identifiers;
            }
        }
    ], [
        {
            key: "fromDocumentMarkdownNode",
            value: function fromDocumentMarkdownNode(documentMarkdownNode, context) {
                var footnotesListMarkdownNode = null;
                var footnoteItemMarkdownNodes = footnoteItemMarkdownNodesFromDocumentMarkdownNode(documentMarkdownNode, context), footnoteItemMarkdownNodesLength = footnoteItemMarkdownNodes.length;
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
function footnoteItemMarkdownNodesFromDocumentMarkdownNode(documentMarkdownNode, context) {
    var footnoteItemMarkdownNodes = [], footnoteMarkdownNodes = (0, _query.footnoteMarkdownNodesFromNode)(documentMarkdownNode), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(documentMarkdownNode), identifiers = footnoteMarkdownNodes.map(function(footnoteMarkdownNode) {
        var identifier = footnoteMarkdownNode.getIdentifier(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IEZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi9mb290bm90ZUl0ZW1cIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBnZXRJZGVudGlmaWVycyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVycyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMubWFwKChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuZ2V0SWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNMZW5ndGggPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZTtcblxuICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXMgPSBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSksXG4gICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSksXG4gICAgICAgIGlkZW50aWZpZXJzID0gZm9vdG5vdGVNYXJrZG93bk5vZGVzLm1hcCgoZm9vdG5vdGVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVNYXJrZG93bk5vZGUuZ2V0SWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgICAgICB9KTtcblxuICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGluZGV4ID0gaWRlbnRpZmllcnMuaW5kZXhPZihpZGVudGlmaWVyKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllcik7XG5cbiAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMucHVzaChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImdldElkZW50aWZpZXJzIiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyIsImlkZW50aWZpZXJzIiwibWFwIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJmcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUiLCJkb2N1bWVudE1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIiwiYW1iaWd1b3VzIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsImZvb3Rub3RlTWFya2Rvd25Ob2RlcyIsImZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJmb3JFYWNoIiwibGlua01hcmtkb3duTm9kZSIsImluZGV4IiwiaW5kZXhPZiIsIkZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsrREFQSTttRUFFWTt5QkFFSTtxQkFDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUQsSUFBQSxBQUFNQSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsT0FBTztnQkFDcEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLDRCQUE0QkYsWUFDNUJHLGNBQWNELDBCQUEwQkUsR0FBRyxDQUFDLFNBQUNDO29CQUMzQyxJQUFNQyxhQUFhRCx5QkFBeUJFLGFBQWEsQ0FBQ1I7b0JBRTFELE9BQU9PO2dCQUNUO2dCQUVOLE9BQU9IO1lBQ1Q7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRVYsT0FBTztnQkFDM0QsSUFBSVcsNEJBQTRCO2dCQUVoQyxJQUFNUiw0QkFBNEJTLGtEQUFrREYsc0JBQXNCVixVQUNwR2Esa0NBQWtDViwwQkFBMEJXLE1BQU07Z0JBRXhFLElBQUlELGtDQUFrQyxHQUFHO29CQUN2QyxJQUFNRSxXQUFXQyxtQ0FBd0IsRUFDbkNmLGFBQWFFLDJCQUNiYyxZQUFZO29CQUVsQk4sNEJBQTRCTyxpQkFBWSxDQUFDQyxrQ0FBa0MsQ0F4QjVEckIsMkJBd0J3RmlCLFVBQVVkLFlBQVlnQjtnQkFDL0g7Z0JBRUEsT0FBT047WUFDVDs7O1dBNUJtQmI7RUFBa0NvQixpQkFBWTtBQStCbkUsU0FBU04sa0RBQWtERixvQkFBb0IsRUFBRVYsT0FBTztJQUN0RixJQUFNRyw0QkFBNEIsRUFBRSxFQUM5QmlCLHdCQUF3QkMsSUFBQUEsb0NBQTZCLEVBQUNYLHVCQUN0RFksb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ2IsdUJBQzlDTixjQUFjZ0Isc0JBQXNCZixHQUFHLENBQUMsU0FBQ21CO1FBQ3ZDLElBQU1qQixhQUFhaUIscUJBQXFCaEIsYUFBYSxDQUFDUjtRQUV0RCxPQUFPTztJQUNUO0lBRU5lLGtCQUFrQkcsT0FBTyxDQUFDLFNBQUNDO1FBQ3pCLElBQU1uQixhQUFhbUIsaUJBQWlCbEIsYUFBYSxJQUMzQ21CLFFBQVF2QixZQUFZd0IsT0FBTyxDQUFDckI7UUFFbEMsSUFBSW9CLFFBQVEsQ0FBQyxHQUFHO1lBQ2QsSUFBTUgsdUJBQXVCSixxQkFBcUIsQ0FBQ08sTUFBTSxFQUNuRHJCLDJCQUEyQnVCLHFCQUF3QixDQUFDQyxxQ0FBcUMsQ0FBQ04sc0JBQXNCakI7WUFFdEhKLDBCQUEwQjRCLElBQUksQ0FBQ3pCO1FBQ2pDO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUIn0=