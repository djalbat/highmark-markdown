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
                var node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteMarkdownNodes = (0, _query.footnoteMarkdownNodesFromNode)(node), footnoteItemMarkdownNodes = [], identifierToFootnoteMarkdownNodeMap = {};
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
                var footnoteItemMarkdownNodesLength = footnoteItemMarkdownNodes.length;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4vZm9vdG5vdGVJdGVtXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaWRlbnRpZmllcnMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgaWRlbnRpZmllcnMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLm1hcCgoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXMgPSBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzID0gW10sXG4gICAgICAgICAgaWRlbnRpZmllclRvRm9vdG5vdGVNYXJrZG93bk5vZGVNYXAgPSB7fTtcblxuICAgIGZvb3Rub3RlTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChmb290bm90ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVNYXJrZG93bk5vZGU7XG4gICAgfSk7XG5cbiAgICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBpZGVudGlmaWVyVG9Gb290bm90ZU1hcmtkb3duTm9kZU1hcFtpZGVudGlmaWVyXSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpO1xuXG4gICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMucHVzaChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUpO1xuXG4gICAgICAgIGRlbGV0ZSBpZGVudGlmaWVyVG9Gb290bm90ZU1hcmtkb3duTm9kZU1hcFtpZGVudGlmaWVyXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXNMZW5ndGggPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgICBvcGFjaXR5ID0gbnVsbDtcblxuICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllcnMiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzIiwibWFwIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIm5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZXMiLCJmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwIiwiZm9yRWFjaCIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwibGlua01hcmtkb3duTm9kZSIsIkZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJwdXNoIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkk7bUVBQ1k7eUJBRUk7cUJBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE9BQU87Z0JBQ2pCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyw0QkFBNEJGLFlBQzVCRixjQUFjSSwwQkFBMEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMsYUFBYUQseUJBQXlCQyxVQUFVLENBQUNOO29CQUV2RCxPQUFPTTtnQkFDVDtnQkFFTixPQUFPUDtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVSLE9BQU87Z0JBQzNELElBQUlTLDRCQUE0QjtnQkFFaEMsSUFBTUMsT0FBT0Ysc0JBQ1BHLG9CQUFvQkMsSUFBQUEsZ0NBQXlCLEVBQUNGLE9BQzlDRyx3QkFBd0JDLElBQUFBLG9DQUE2QixFQUFDSixPQUN0RFAsNEJBQTRCLEVBQUUsRUFDOUJZLHNDQUFzQyxDQUFDO2dCQUU3Q0Ysc0JBQXNCRyxPQUFPLENBQUMsU0FBQ0M7b0JBQzdCLElBQU1YLGFBQWFXLHFCQUFxQlgsVUFBVSxDQUFDTjtvQkFFbkRlLG1DQUFtQyxDQUFDVCxXQUFXLEdBQUdXO2dCQUNwRDtnQkFFQU4sa0JBQWtCSyxPQUFPLENBQUMsU0FBQ0U7b0JBQ3pCLElBQU1aLGFBQWFZLGlCQUFpQlosVUFBVSxDQUFDTixVQUN6Q2lCLHVCQUF1QkYsbUNBQW1DLENBQUNULFdBQVcsSUFBSTtvQkFFaEYsSUFBSVcseUJBQXlCLE1BQU07d0JBQ2pDLElBQU1aLDJCQUEyQmMscUJBQXdCLENBQUNDLHFDQUFxQyxDQUFDSCxzQkFBc0JYO3dCQUV0SEgsMEJBQTBCa0IsSUFBSSxDQUFDaEI7d0JBRS9CLE9BQU9VLG1DQUFtQyxDQUFDVCxXQUFXO29CQUN4RDtnQkFDRjtnQkFFQSxJQUFNZ0Isa0NBQWtDbkIsMEJBQTBCb0IsTUFBTTtnQkFFeEUsSUFBSUQsa0NBQWtDLEdBQUc7b0JBQ3ZDLElBQU1FLFdBQVdDLG1DQUF3QixFQUNuQ3hCLGFBQWFFLDJCQUNidUIsVUFBVTtvQkFFaEJqQiw0QkFBNEJrQixpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0FoRDFEOUIsMkJBZ0RzRjBCLFVBQVV2QixZQUFZeUI7Z0JBQzdIO2dCQUVBLE9BQU9qQjtZQUNUOzs7V0FwRG1CWDtFQUFrQzZCLGlCQUFZIn0=