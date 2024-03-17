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
            key: "fromDocumentMarkdownNode",
            value: function fromDocumentMarkdownNode(documentMarkdownNode, context) {
                var footnotesListMarkdownNode = null;
                var footnoteItemMarkdownNodes = footnoteItemMarkdownNodesFromDocumentMarkdownNode(documentMarkdownNode, context), footnoteItemMarkdownNodesLength = footnoteItemMarkdownNodes.length;
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
function footnoteItemMarkdownNodesFromDocumentMarkdownNode(documentMarkdownNode, context) {
    var footnoteItemMarkdownNodes = [], node = documentMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteMarkdownNodes = (0, _query.footnoteMarkdownNodesFromNode)(node), identifiers = footnoteMarkdownNodes.map(function(footnoteMarkdownNode) {
        var identifier = footnoteMarkdownNode.identifier(context);
        return identifier;
    });
    linkMarkdownNodes.forEach(function(linkMarkdownNode) {
        var linkMarkdownNodeIdentifier = linkMarkdownNode.identifier(context), identifier = linkMarkdownNodeIdentifier, index = identifiers.indexOf(identifier);
        if (index > -1) {
            var footnoteMarkdownNode = footnoteMarkdownNodes[index], footnoteItemMarkdownNode = _footnoteItem.default.fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier);
            footnoteItemMarkdownNodes.push(footnoteItemMarkdownNode);
        }
    });
    return footnoteItemMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IEZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi9mb290bm90ZUl0ZW1cIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBpZGVudGlmaWVycyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVycyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMubWFwKChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNMZW5ndGggPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgICBvcGFjaXR5ID0gZmFsc2U7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICBub2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgbGlua01hcmtkb3duTm9kZXMgPSBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXMgPSBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgaWRlbnRpZmllcnMgPSBmb290bm90ZU1hcmtkb3duTm9kZXMubWFwKChmb290bm90ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZU1hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgICAgIH0pO1xuXG4gIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBsaW5rTWFya2Rvd25Ob2RlSWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZUlkZW50aWZpZXIsICAvLy9cbiAgICAgICAgICBpbmRleCA9IGlkZW50aWZpZXJzLmluZGV4T2YoaWRlbnRpZmllcik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpO1xuXG4gICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLnB1c2goZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVycyIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMiLCJtYXAiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiZnJvbURvY3VtZW50TWFya2Rvd25Ob2RlIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0Zyb21Eb2N1bWVudE1hcmtkb3duTm9kZSIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsIkZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIm5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZXMiLCJmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZm9yRWFjaCIsImxpbmtNYXJrZG93bk5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlSWRlbnRpZmllciIsImluZGV4IiwiaW5kZXhPZiIsIkZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsrREFQSTttRUFFWTt5QkFFSTtxQkFDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUQsSUFBQSxBQUFNQSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsT0FBTztnQkFDakIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLDRCQUE0QkYsWUFDNUJGLGNBQWNJLDBCQUEwQkMsR0FBRyxDQUFDLFNBQUNDO29CQUMzQyxJQUFNQyxhQUFhRCx5QkFBeUJDLFVBQVUsQ0FBQ047b0JBRXZELE9BQU9NO2dCQUNUO2dCQUVOLE9BQU9QO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRVIsT0FBTztnQkFDM0QsSUFBSVMsNEJBQTRCO2dCQUVoQyxJQUFNTiw0QkFBNEJPLGtEQUFrREYsc0JBQXNCUixVQUNwR1csa0NBQWtDUiwwQkFBMEJTLE1BQU07Z0JBRXhFLElBQUlELGtDQUFrQyxHQUFHO29CQUN2QyxJQUFNRSxXQUFXQyxtQ0FBd0IsRUFDbkNiLGFBQWFFLDJCQUNiWSxVQUFVO29CQUVoQk4sNEJBQTRCTyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0F4QjFEbkIsMkJBd0JzRmUsVUFBVVosWUFBWWM7Z0JBQzdIO2dCQUVBLE9BQU9OO1lBQ1Q7OztXQTVCbUJYO0VBQWtDa0IsaUJBQVk7QUErQm5FLFNBQVNOLGtEQUFrREYsb0JBQW9CLEVBQUVSLE9BQU87SUFDdEYsSUFBTUcsNEJBQTRCLEVBQUUsRUFDOUJlLE9BQU9WLHNCQUNQVyxvQkFBb0JDLElBQUFBLGdDQUF5QixFQUFDRixPQUM5Q0csd0JBQXdCQyxJQUFBQSxvQ0FBNkIsRUFBQ0osT0FDdERuQixjQUFjc0Isc0JBQXNCakIsR0FBRyxDQUFDLFNBQUNtQjtRQUN2QyxJQUFNakIsYUFBYWlCLHFCQUFxQmpCLFVBQVUsQ0FBQ047UUFFbkQsT0FBT007SUFDVDtJQUVOYSxrQkFBa0JLLE9BQU8sQ0FBQyxTQUFDQztRQUN6QixJQUFNQyw2QkFBNkJELGlCQUFpQm5CLFVBQVUsQ0FBQ04sVUFDekRNLGFBQWFvQiw0QkFDYkMsUUFBUTVCLFlBQVk2QixPQUFPLENBQUN0QjtRQUVsQyxJQUFJcUIsUUFBUSxDQUFDLEdBQUc7WUFDZCxJQUFNSix1QkFBdUJGLHFCQUFxQixDQUFDTSxNQUFNLEVBQ25EdEIsMkJBQTJCd0IscUJBQXdCLENBQUNDLHFDQUFxQyxDQUFDUCxzQkFBc0JqQjtZQUV0SEgsMEJBQTBCNEIsSUFBSSxDQUFDMUI7UUFDakM7SUFDRjtJQUVBLE9BQU9GO0FBQ1QifQ==