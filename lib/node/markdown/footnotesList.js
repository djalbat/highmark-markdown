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
                var node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteMarkdownNodes = (0, _query.footnoteMarkdownNodesFromNode)(node), linkMarkdownNodesLength = linkMarkdownNodes.length, footnoteMarkdownNodesLength = footnoteMarkdownNodes.length;
                if (linkMarkdownNodesLength > 0 && footnoteMarkdownNodesLength > 0) {
                    var footnoteItemMarkdownNodes = [], identifierToFootnoteMarkdownNodeMap = {};
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
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = footnoteItemMarkdownNodes, opacity = null;
                    footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity);
                }
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4vZm9vdG5vdGVJdGVtXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaWRlbnRpZmllcnMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgaWRlbnRpZmllcnMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLm1hcCgoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXMgPSBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBsaW5rTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGxpbmtNYXJrZG93bk5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXNMZW5ndGggPSBmb290bm90ZU1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKChsaW5rTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApICYmIChmb290bm90ZU1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSkge1xuICAgICAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICAgICAgaWRlbnRpZmllclRvRm9vdG5vdGVNYXJrZG93bk5vZGVNYXAgPSB7fTtcblxuICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGVzLmZvckVhY2goKGZvb3Rub3RlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZU1hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICAgIGlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVNYXJrZG93bk5vZGU7XG4gICAgICB9KTtcblxuICAgICAgbGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgobGlua01hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKGZvb3Rub3RlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5wdXNoKGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgICBkZWxldGUgaWRlbnRpZmllclRvRm9vdG5vdGVNYXJrZG93bk5vZGVNYXBbaWRlbnRpZmllcl07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgICAgIG9wYWNpdHkgPSBudWxsO1xuXG4gICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVycyIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMiLCJtYXAiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwibm9kZSIsImxpbmtNYXJrZG93bk5vZGVzIiwibGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlcyIsImZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwibGlua01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmb290bm90ZU1hcmtkb3duTm9kZXNMZW5ndGgiLCJpZGVudGlmaWVyVG9Gb290bm90ZU1hcmtkb3duTm9kZU1hcCIsImZvckVhY2giLCJmb290bm90ZU1hcmtkb3duTm9kZSIsImxpbmtNYXJrZG93bk5vZGUiLCJGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJmcm9tRm9vdG5vdGVNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyIiwicHVzaCIsInJ1bGVOYW1lIiwiRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkk7bUVBQ1k7eUJBRUk7cUJBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE9BQU87Z0JBQ2pCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyw0QkFBNEJGLFlBQzVCRixjQUFjSSwwQkFBMEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMsYUFBYUQseUJBQXlCQyxVQUFVLENBQUNOO29CQUV2RCxPQUFPTTtnQkFDVDtnQkFFTixPQUFPUDtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVSLE9BQU87Z0JBQzNELElBQUlTLDRCQUE0QjtnQkFFaEMsSUFBTUMsT0FBT0Ysc0JBQ1BHLG9CQUFvQkMsSUFBQUEsZ0NBQXlCLEVBQUNGLE9BQzlDRyx3QkFBd0JDLElBQUFBLG9DQUE2QixFQUFDSixPQUN0REssMEJBQTBCSixrQkFBa0JLLE1BQU0sRUFDbERDLDhCQUE4Qkosc0JBQXNCRyxNQUFNO2dCQUVoRSxJQUFJLEFBQUNELDBCQUEwQixLQUFPRSw4QkFBOEIsR0FBSTtvQkFDdEUsSUFBTWQsNEJBQTRCLEVBQUUsRUFDOUJlLHNDQUFzQyxDQUFDO29CQUU3Q0wsc0JBQXNCTSxPQUFPLENBQUMsU0FBQ0M7d0JBQzdCLElBQU1kLGFBQWFjLHFCQUFxQmQsVUFBVSxDQUFDTjt3QkFFbkRrQixtQ0FBbUMsQ0FBQ1osV0FBVyxHQUFHYztvQkFDcEQ7b0JBRUFULGtCQUFrQlEsT0FBTyxDQUFDLFNBQUNFO3dCQUN6QixJQUFNZixhQUFhZSxpQkFBaUJmLFVBQVUsQ0FBQ04sVUFDekNvQix1QkFBdUJGLG1DQUFtQyxDQUFDWixXQUFXLElBQUk7d0JBRWhGLElBQUljLHlCQUF5QixNQUFNOzRCQUNqQyxJQUFNZiwyQkFBMkJpQixxQkFBd0IsQ0FBQ0MscUNBQXFDLENBQUNILHNCQUFzQmQ7NEJBRXRISCwwQkFBMEJxQixJQUFJLENBQUNuQjs0QkFFL0IsT0FBT2EsbUNBQW1DLENBQUNaLFdBQVc7d0JBQ3hEO29CQUNGO29CQUVBLElBQU1tQixXQUFXQyxtQ0FBd0IsRUFDbkN6QixhQUFhRSwyQkFDYndCLFVBQVU7b0JBRWhCbEIsNEJBQTRCbUIsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBakQxRC9CLDJCQWlEc0YyQixVQUFVeEIsWUFBWTBCO2dCQUM3SDtnQkFFQSxPQUFPbEI7WUFDVDs7O1dBckRtQlg7RUFBa0M4QixpQkFBWSJ9