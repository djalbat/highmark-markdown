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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IEZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi9mb290bm90ZUl0ZW1cIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBpZGVudGlmaWVycyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVycyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMubWFwKChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNMZW5ndGggPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZTtcblxuICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICBub2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgbGlua01hcmtkb3duTm9kZXMgPSBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXMgPSBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgaWRlbnRpZmllcnMgPSBmb290bm90ZU1hcmtkb3duTm9kZXMubWFwKChmb290bm90ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZU1hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgICAgIH0pO1xuXG4gIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBsaW5rTWFya2Rvd25Ob2RlSWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZUlkZW50aWZpZXIsICAvLy9cbiAgICAgICAgICBpbmRleCA9IGlkZW50aWZpZXJzLmluZGV4T2YoaWRlbnRpZmllcik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpO1xuXG4gICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLnB1c2goZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVycyIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMiLCJtYXAiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiZnJvbURvY3VtZW50TWFya2Rvd25Ob2RlIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0Zyb21Eb2N1bWVudE1hcmtkb3duTm9kZSIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsIkZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSIsImFtYmlndW91cyIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJub2RlIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZSIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwibGlua01hcmtkb3duTm9kZUlkZW50aWZpZXIiLCJpbmRleCIsImluZGV4T2YiLCJGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJmcm9tRm9vdG5vdGVNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7K0RBUEk7bUVBRVk7eUJBRUk7cUJBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE9BQU87Z0JBQ2pCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyw0QkFBNEJGLFlBQzVCRixjQUFjSSwwQkFBMEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMsYUFBYUQseUJBQXlCQyxVQUFVLENBQUNOO29CQUV2RCxPQUFPTTtnQkFDVDtnQkFFTixPQUFPUDtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVSLE9BQU87Z0JBQzNELElBQUlTLDRCQUE0QjtnQkFFaEMsSUFBTU4sNEJBQTRCTyxrREFBa0RGLHNCQUFzQlIsVUFDcEdXLGtDQUFrQ1IsMEJBQTBCUyxNQUFNO2dCQUV4RSxJQUFJRCxrQ0FBa0MsR0FBRztvQkFDdkMsSUFBTUUsV0FBV0MsbUNBQXdCLEVBQ25DYixhQUFhRSwyQkFDYlksWUFBWTtvQkFFbEJOLDRCQUE0Qk8saUJBQVksQ0FBQ0Msa0NBQWtDLENBeEI1RG5CLDJCQXdCd0ZlLFVBQVVaLFlBQVljO2dCQUMvSDtnQkFFQSxPQUFPTjtZQUNUOzs7V0E1Qm1CWDtFQUFrQ2tCLGlCQUFZO0FBK0JuRSxTQUFTTixrREFBa0RGLG9CQUFvQixFQUFFUixPQUFPO0lBQ3RGLElBQU1HLDRCQUE0QixFQUFFLEVBQzlCZSxPQUFPVixzQkFDUFcsb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0YsT0FDOUNHLHdCQUF3QkMsSUFBQUEsb0NBQTZCLEVBQUNKLE9BQ3REbkIsY0FBY3NCLHNCQUFzQmpCLEdBQUcsQ0FBQyxTQUFDbUI7UUFDdkMsSUFBTWpCLGFBQWFpQixxQkFBcUJqQixVQUFVLENBQUNOO1FBRW5ELE9BQU9NO0lBQ1Q7SUFFTmEsa0JBQWtCSyxPQUFPLENBQUMsU0FBQ0M7UUFDekIsSUFBTUMsNkJBQTZCRCxpQkFBaUJuQixVQUFVLENBQUNOLFVBQ3pETSxhQUFhb0IsNEJBQ2JDLFFBQVE1QixZQUFZNkIsT0FBTyxDQUFDdEI7UUFFbEMsSUFBSXFCLFFBQVEsQ0FBQyxHQUFHO1lBQ2QsSUFBTUosdUJBQXVCRixxQkFBcUIsQ0FBQ00sTUFBTSxFQUNuRHRCLDJCQUEyQndCLHFCQUF3QixDQUFDQyxxQ0FBcUMsQ0FBQ1Asc0JBQXNCakI7WUFFdEhILDBCQUEwQjRCLElBQUksQ0FBQzFCO1FBQ2pDO0lBQ0Y7SUFFQSxPQUFPRjtBQUNUIn0=