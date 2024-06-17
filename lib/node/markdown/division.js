"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../replacement/footnote"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../../replacement/contentsList"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../replacement/footnotesList"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnote"));
var _contentsDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/contentsDirective"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnotesDirective"));
var _pageNumberDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/pageNumberDirective"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
var _footnotes = require("../../utilities/footnotes");
var _query = require("../../utilities/query");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var clear = _necessary.arrayUtilities.clear;
var DivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DivisionMarkdownNode, MarkdownNode);
    var _super = _create_super(DivisionMarkdownNode);
    function DivisionMarkdownNode(ruleName, childNodes, precedence, opacity, domElement, divisionClassName) {
        _class_call_check(this, DivisionMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, opacity, domElement);
        _this.divisionClassName = divisionClassName;
        return _this;
    }
    _create_class(DivisionMarkdownNode, [
        {
            key: "getDivisionClassName",
            value: function getDivisionClassName() {
                return this.divisionClassName;
            }
        },
        {
            key: "setDivisionClassName",
            value: function setDivisionClassName(divisionClassName) {
                this.divisionClassName = divisionClassName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = this.divisionClassName; ///
                return className;
            }
        },
        {
            key: "isIgnored",
            value: function isIgnored() {
                var node = this, ignoreDirectiveMarkdownNode = (0, _query.ignoreDirectiveMarkdownNodeFromNode)(node), ignored = ignoreDirectiveMarkdownNode !== null;
                return ignored;
            }
        },
        {
            key: "paginate",
            value: function paginate(context) {
                var _this = this;
                var linesPerPage = context.linesPerPage, childNodes = this.getChildNodes(), paginatedChildNodes = [], divisionMarkdownNodes = [], pageNumberDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_pageNumberDirective.default, context);
                var totalLines = 0;
                childNodes.forEach(function(childNode) {
                    var lines = childNode.lines(context), paginatedChildNode = childNode; ///
                    totalLines += lines;
                    paginatedChildNodes.push(paginatedChildNode);
                    if (totalLines > linesPerPage) {
                        var divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, _this.divisionClassName, context);
                        divisionMarkdownNodes.push(divisionMarkdownNode);
                        clear(paginatedChildNodes);
                        totalLines = 0;
                    }
                });
                if (totalLines > 0) {
                    var divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, this.divisionClassName, context);
                    divisionMarkdownNodes.push(divisionMarkdownNode);
                }
                return divisionMarkdownNodes;
            }
        },
        {
            key: "setPageNumber",
            value: function setPageNumber(pageNumber) {
                var node = this, pageNumberDirective = (0, _query.pageNumberDirectiveMarkdownNodeFromNode)(node);
                if (pageNumberDirective !== null) {
                    pageNumberDirective.setPageNumber(pageNumber);
                }
            }
        },
        {
            key: "createContents",
            value: function createContents(divisionMarkdownNodes, context) {
                var contentsCreated = false;
                var contentsDirectiveSubDivisionReplacement = this.findSubDivisionReplacement(_contentsDirective.default, context);
                if (contentsDirectiveSubDivisionReplacement !== null) {
                    var divisionMarkdownNode = this, contentsListReplacement = _contentsList.default.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
                    if (contentsListReplacement !== null) {
                        contentsListReplacement.replaceContentsDirectiveSubdivisionReplacement(contentsDirectiveSubDivisionReplacement, divisionMarkdownNode, context);
                        contentsCreated = true;
                    }
                }
                return contentsCreated;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(footnoteReplacements, context) {
                if (footnoteReplacements !== null) {
                    var divisionMarkdownNode = this, footnotesListReplacement = _footnotesList.default.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);
                    if (footnotesListReplacement !== null) {
                        (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, callback, context);
                        footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                    }
                }
                function callback() {
                ///
                }
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(context) {
                var footnoteSubDivisionReplacements = this.removeSubDivisionMarkdownNodes(_footnote1.default, context);
                var footnoteReplacements = footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements);
                var footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_footnotesDirective.default, context);
                if (footnotesDirectiveSubDivisionReplacement === null) {
                    footnoteReplacements = null;
                }
                return footnoteReplacements;
            }
        },
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(context) {
                var _this = this;
                var node = this, embedDirectiveMarkdownNodes = (0, _query.embedDirectiveMarkdownNodesFromNode)(node);
                embedDirectiveMarkdownNodes.map(function(embedDirectiveMarkdownNode) {
                    var importedReplacement = embedDirectiveMarkdownNode.import(context);
                    if (importedReplacement !== null) {
                        var childNode = embedDirectiveMarkdownNode, parentNode = _this.findParentNode(childNode);
                        importedReplacement.replaceEmbedDirectiveMarkdownNode(embedDirectiveMarkdownNode, parentNode, context);
                    }
                });
            }
        },
        {
            key: "findSubDivisionReplacement",
            value: function findSubDivisionReplacement(SubDivisionReplacement, context) {
                var subDivisionReplacement = null;
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionReplacement !== null) {
                        return true;
                    }
                });
                return subDivisionReplacement;
            }
        },
        {
            key: "findSubDivisionReplacements",
            value: function findSubDivisionReplacements(SubDivisionReplacement, context) {
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes(), subDivisionReplacements = subDivisionMarkdownNodes.reduce(function(subDivisionReplacements, subDivisionMarkdownNode) {
                    var subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionReplacement !== null) {
                        subDivisionReplacements.push(subDivisionReplacement);
                    }
                    return subDivisionReplacements;
                }, []);
                return subDivisionReplacements;
            }
        },
        {
            key: "findSubDivisionMarkdownNodes",
            value: function findSubDivisionMarkdownNodes() {
                var node = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                return subDivisionMarkdownNodes;
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(SubDivisionReplacement, context) {
                var divisionMarkdownNode = this, subDivisionReplacement = this.findSubDivisionReplacement(SubDivisionReplacement, context);
                if (subDivisionReplacement !== null) {
                    subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                }
                return subDivisionReplacement;
            }
        },
        {
            key: "removeSubDivisionMarkdownNodes",
            value: function removeSubDivisionMarkdownNodes(SubDivisionReplacement, context) {
                var divisionMarkdownNode = this, subDivisionReplacements = this.findSubDivisionReplacements(SubDivisionReplacement, context);
                subDivisionReplacements.forEach(function(subDivisionReplacement) {
                    subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                });
                return subDivisionReplacements;
            }
        },
        {
            key: "createFootnotesListReplacement",
            value: function createFootnotesListReplacement(context) {
                var footnoteSubDivisionReplacements = this.findSubDivisionReplacements(_footnote1.default, context), footnoteReplacements = footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements), divisionMarkdownNode = this, footnotesListReplacement = _footnotesList.default.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);
                return footnotesListReplacement;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(context) {
                var html = null;
                var indent = _constants.EMPTY_STRING, childNodesHTML = this.childNodesAsHTML(indent, context);
                if (childNodesHTML !== null) {
                    var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                    html = "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                }
                return html;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(DivisionMarkdownNode.prototype), "clone", this).call(this, this.divisionClassName);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        },
        {
            key: "fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName",
            value: function fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, divisionClassName, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(paginatedChildNodes), opacity = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                if (pageNumberDirectiveSubDivisionReplacement !== null) {
                    pageNumberDirectiveSubDivisionReplacement = pageNumberDirectiveSubDivisionReplacement.clone(); ///
                    pageNumberDirectiveSubDivisionReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                }
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);
function footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements) {
    var footnoteReplacements = footnoteSubDivisionReplacements.map(function(footnoteSubDivisionReplacement) {
        var footnoteReplacement = _footnote.default.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement);
        return footnoteReplacement;
    });
    return footnoteReplacements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEZvb3Rub3RlUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2Zvb3Rub3RlXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVcIjtcbmltcG9ydCBDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2NvbnRlbnRzRGlyZWN0aXZlXCI7XG5pbXBvcnQgRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVzRGlyZWN0aXZlXCI7XG5pbXBvcnQgUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgY2xlYXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBsZXQgdG90YWxMaW5lcyA9IDA7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCksXG4gICAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgdG90YWxMaW5lcyArPSBsaW5lcztcblxuICAgICAgcGFnaW5hdGVkQ2hpbGROb2Rlcy5wdXNoKHBhZ2luYXRlZENoaWxkTm9kZSk7XG5cbiAgICAgIGlmICh0b3RhbExpbmVzID4gbGluZXNQZXJQYWdlKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KTtcblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgY2xlYXIocGFnaW5hdGVkQ2hpbGROb2Rlcyk7XG5cbiAgICAgICAgdG90YWxMaW5lcyA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodG90YWxMaW5lcyA+IDApIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmUgIT09IG51bGwpIHtcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KENvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gQ29udGVudHNMaXN0UmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29udGVudHNMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQucmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudChjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGNvbnRleHQpIHtcbiAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudHMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuXG4gICAgICAgIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudC5hcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgbGV0IGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gZm9vdG5vdGVSZXBsYWNlbWVudHNGcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKTtcblxuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudHM7XG4gIH1cblxuICByZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcy5tYXAoKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpbXBvcnRlZFJlcGxhY2VtZW50ID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUuaW1wb3J0KGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW1wb3J0ZWRSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgIGltcG9ydGVkUmVwbGFjZW1lbnQucmVwbGFjZUVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMucmVkdWNlKChzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLnB1c2goc3ViRGl2aXNpb25SZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBmb290bm90ZVJlcGxhY2VtZW50c0Zyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShmb290bm90ZVJlcGxhY2VtZW50cywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudDtcbiAgfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRElWSVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAuLi5wYWdpbmF0ZWRDaGlsZE5vZGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5jbG9uZSgpOyAgLy8vXG5cbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb290bm90ZVJlcGxhY2VtZW50c0Zyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMpIHtcbiAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLm1hcCgoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IEZvb3Rub3RlUmVwbGFjZW1lbnQuZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsInBhZ2luYXRlIiwibGluZXNQZXJQYWdlIiwiZ2V0Q2hpbGROb2RlcyIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJ0b3RhbExpbmVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImxpbmVzIiwicGFnaW5hdGVkQ2hpbGROb2RlIiwicHVzaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0UGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyRGlyZWN0aXZlIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIkNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiQ29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVSZXBsYWNlbWVudHMiLCJmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMiLCJjYWxsYmFjayIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJwcmVwYXJlRm9vdG5vdGVzIiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIkZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInJlc29sdmVFbWJlZGRpbmdzIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJtYXAiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImltcG9ydGVkUmVwbGFjZW1lbnQiLCJpbXBvcnQiLCJwYXJlbnROb2RlIiwiZmluZFBhcmVudE5vZGUiLCJyZXBsYWNlRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJTdWJEaXZpc2lvblJlcGxhY2VtZW50Iiwic3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzb21lIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlZHVjZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwicmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiYXNIVE1MIiwiaHRtbCIsImluZGVudCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiRm9vdG5vdGVSZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBdUJxQkE7Ozt5QkFyQlU7K0RBRU47K0RBQ087bUVBQ0k7b0VBQ0M7Z0VBQ007d0VBQ1M7eUVBQ0M7MEVBQ0M7eUJBRXpCO3lCQUNNO3lCQUNPO3FCQUljOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEcsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVSOztrQ0FFWEcsVUFBVUMsWUFBWUMsWUFBWUMsU0FBU0M7UUFFakQsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJSOztZQU9uQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCRixpQkFBaUI7Z0JBQ3BDLElBQUksQ0FBQ0EsaUJBQWlCLEdBQUdBO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUQsWUFBWSxJQUFJLENBQUNILGlCQUFpQixFQUFFLEdBQUc7Z0JBRTdDLE9BQU9HO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLEVBQ1hDLDhCQUE4QkMsSUFBQUEsMENBQW1DLEVBQUNGLE9BQ2xFRyxVQUFXRixnQ0FBZ0M7Z0JBRWpELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU04sT0FBTzs7Z0JBQ2QsSUFBTSxBQUFFTyxlQUFpQlAsUUFBakJPLGNBQ0ZmLGFBQWEsSUFBSSxDQUFDZ0IsYUFBYSxJQUMvQkMsc0JBQXNCLEVBQUUsRUFDeEJDLHdCQUF3QixFQUFFLEVBQzFCQyw0Q0FBNEMsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQ0MsNEJBQXlDLEVBQUViO2dCQUVoSSxJQUFJYyxhQUFhO2dCQUVqQnRCLFdBQVd1QixPQUFPLENBQUMsU0FBQ0M7b0JBQ2xCLElBQU1DLFFBQVFELFVBQVVDLEtBQUssQ0FBQ2pCLFVBQ3hCa0IscUJBQXFCRixXQUFZLEdBQUc7b0JBRTFDRixjQUFjRztvQkFFZFIsb0JBQW9CVSxJQUFJLENBQUNEO29CQUV6QixJQUFJSixhQUFhUCxjQUFjO3dCQUM3QixJQUFNYSx1QkFBdUJoQyxBQS9DaEJBLHFCQStDcUNpQyxvRkFBb0YsQ0FBQ1YsMkNBQTJDRixxQkFBcUIsTUFBS2IsaUJBQWlCLEVBQUVJO3dCQUUvTlUsc0JBQXNCUyxJQUFJLENBQUNDO3dCQUUzQi9CLE1BQU1vQjt3QkFFTkssYUFBYTtvQkFDZjtnQkFDRjtnQkFFQSxJQUFJQSxhQUFhLEdBQUc7b0JBQ2xCLElBQU1NLHVCQUF1QmhDLEFBMURkQSxxQkEwRG1DaUMsb0ZBQW9GLENBQUNWLDJDQUEyQ0YscUJBQXFCLElBQUksQ0FBQ2IsaUJBQWlCLEVBQUVJO29CQUUvTlUsc0JBQXNCUyxJQUFJLENBQUNDO2dCQUM3QjtnQkFFQSxPQUFPVjtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFVBQVU7Z0JBQ3RCLElBQU1yQixPQUFPLElBQUksRUFDWHNCLHNCQUFzQkMsSUFBQUEsOENBQXVDLEVBQUN2QjtnQkFFcEUsSUFBSXNCLHdCQUF3QixNQUFNO29CQUNoQ0Esb0JBQW9CRixhQUFhLENBQUNDO2dCQUNwQztZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVoQixxQkFBcUIsRUFBRVYsT0FBTztnQkFDM0MsSUFBSTJCLGtCQUFrQjtnQkFFdEIsSUFBTUMsMENBQTBDLElBQUksQ0FBQ0MsMEJBQTBCLENBQUNDLDBCQUF1QyxFQUFFOUI7Z0JBRXpILElBQUk0Qiw0Q0FBNEMsTUFBTTtvQkFDcEQsSUFBTVIsdUJBQXVCLElBQUksRUFDM0JXLDBCQUEwQkMscUJBQXVCLENBQUNDLGdEQUFnRCxDQUFDdkIsdUJBQXVCVSxzQkFBc0JwQjtvQkFFdEosSUFBSStCLDRCQUE0QixNQUFNO3dCQUNwQ0Esd0JBQXdCRyw4Q0FBOEMsQ0FBQ04seUNBQXlDUixzQkFBc0JwQjt3QkFFdEkyQixrQkFBa0I7b0JBQ3BCO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxvQkFBb0IsRUFBRXBDLE9BQU87Z0JBQzNDLElBQUlvQyx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTWhCLHVCQUF1QixJQUFJLEVBQzNCaUIsMkJBQTJCQyxzQkFBd0IsQ0FBQ0MsK0NBQStDLENBQUNILHNCQUFzQmhCLHNCQUFzQnBCO29CQUV0SixJQUFJcUMsNkJBQTZCLE1BQU07d0JBQ3JDRyxJQUFBQSxvQ0FBeUIsRUFBQ3BCLHNCQUFzQnFCLFVBQVV6Qzt3QkFFMURxQyx5QkFBeUJLLDRCQUE0QixDQUFDdEIsc0JBQXNCcEI7b0JBQzlFO2dCQUNGO2dCQUVBLFNBQVN5QztnQkFDUCxHQUFHO2dCQUNMO1lBQ0Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCM0MsT0FBTztnQkFDdEIsSUFBTTRDLGtDQUFrQyxJQUFJLENBQUNDLDhCQUE4QixDQUFDQyxrQkFBOEIsRUFBRTlDO2dCQUU1RyxJQUFJb0MsdUJBQXVCVyx3REFBd0RIO2dCQUVuRixJQUFNSSwyQ0FBMkMsSUFBSSxDQUFDcEMsNkJBQTZCLENBQUNxQywyQkFBd0MsRUFBRWpEO2dCQUU5SCxJQUFJZ0QsNkNBQTZDLE1BQU07b0JBQ3JEWix1QkFBdUI7Z0JBQ3pCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCbEQsT0FBTzs7Z0JBQ3ZCLElBQU1FLE9BQU8sSUFBSSxFQUNYaUQsOEJBQThCQyxJQUFBQSwwQ0FBbUMsRUFBQ2xEO2dCQUV4RWlELDRCQUE0QkUsR0FBRyxDQUFDLFNBQUNDO29CQUMvQixJQUFNQyxzQkFBc0JELDJCQUEyQkUsTUFBTSxDQUFDeEQ7b0JBRTlELElBQUl1RCx3QkFBd0IsTUFBTTt3QkFDaEMsSUFBTXZDLFlBQVlzQyw0QkFDWkcsYUFBYSxNQUFLQyxjQUFjLENBQUMxQzt3QkFFdkN1QyxvQkFBb0JJLGlDQUFpQyxDQUFDTCw0QkFBNEJHLFlBQVl6RDtvQkFDaEc7Z0JBQ0Y7WUFDRjs7O1lBRUE2QixLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCK0Isc0JBQXNCLEVBQUU1RCxPQUFPO2dCQUN4RCxJQUFJNkQseUJBQXlCO2dCQUU3QixJQUFNQywyQkFBMkIsSUFBSSxDQUFDQyw0QkFBNEI7Z0JBRWxFRCx5QkFBeUJFLElBQUksQ0FBQyxTQUFDQztvQkFDN0JKLHlCQUF5QkQsdUJBQXVCTSwyQkFBMkIsQ0FBQ0QseUJBQXlCakU7b0JBRXJHLElBQUk2RCwyQkFBMkIsTUFBTTt3QkFDbkMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QlAsc0JBQXNCLEVBQUU1RCxPQUFPO2dCQUN6RCxJQUFNOEQsMkJBQTJCLElBQUksQ0FBQ0MsNEJBQTRCLElBQzVESywwQkFBMEJOLHlCQUF5Qk8sTUFBTSxDQUFDLFNBQUNELHlCQUF5Qkg7b0JBQ2xGLElBQU1KLHlCQUF5QkQsdUJBQXVCTSwyQkFBMkIsQ0FBQ0QseUJBQXlCakU7b0JBRTNHLElBQUk2RCwyQkFBMkIsTUFBTTt3QkFDbkNPLHdCQUF3QmpELElBQUksQ0FBQzBDO29CQUMvQjtvQkFFQSxPQUFPTztnQkFDVCxHQUFHLEVBQUU7Z0JBRVgsT0FBT0E7WUFDVDs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNN0QsT0FBTyxJQUFJLEVBQ1g0RCwyQkFBMkJRLElBQUFBLHVDQUFnQyxFQUFDcEU7Z0JBRWxFLE9BQU80RDtZQUNUOzs7WUFFQWxELEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJnRCxzQkFBc0IsRUFBRTVELE9BQU87Z0JBQzNELElBQU1vQix1QkFBdUIsSUFBSSxFQUMzQnlDLHlCQUF5QixJQUFJLENBQUNoQywwQkFBMEIsQ0FBQytCLHdCQUF3QjVEO2dCQUV2RixJQUFJNkQsMkJBQTJCLE1BQU07b0JBQ25DQSx1QkFBdUJVLDhCQUE4QixDQUFDbkQsc0JBQXNCcEI7Z0JBQzlFO2dCQUVBLE9BQU82RDtZQUNUOzs7WUFFQWhCLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0JlLHNCQUFzQixFQUFFNUQsT0FBTztnQkFDNUQsSUFBTW9CLHVCQUF1QixJQUFJLEVBQzNCZ0QsMEJBQTBCLElBQUksQ0FBQ0QsMkJBQTJCLENBQUNQLHdCQUF3QjVEO2dCQUV6Rm9FLHdCQUF3QnJELE9BQU8sQ0FBQyxTQUFDOEM7b0JBQy9CQSx1QkFBdUJVLDhCQUE4QixDQUFDbkQsc0JBQXNCcEI7Z0JBQzlFO2dCQUVBLE9BQU9vRTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQnhFLE9BQU87Z0JBQ3BDLElBQU00QyxrQ0FBa0MsSUFBSSxDQUFDdUIsMkJBQTJCLENBQUNyQixrQkFBOEIsRUFBRTlDLFVBQ25Hb0MsdUJBQXVCVyx3REFBd0RILGtDQUMvRXhCLHVCQUF1QixJQUFJLEVBQzNCaUIsMkJBQTJCQyxzQkFBd0IsQ0FBQ0MsK0NBQStDLENBQUNILHNCQUFzQmhCLHNCQUFzQnBCO2dCQUV0SixPQUFPcUM7WUFDVDs7O1lBRUFvQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT3pFLE9BQU87Z0JBQ1osSUFBSTBFLE9BQU87Z0JBRVgsSUFBTUMsU0FBU0MsdUJBQVksRUFDckJDLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSCxRQUFRM0U7Z0JBRXJELElBQUk2RSxtQkFBbUIsTUFBTTtvQkFDM0IsSUFBTUUsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQy9FLFVBQy9CZ0YsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ2hGO29CQUVuQzBFLE9BQU8sQUFBQyxHQUFXSyxPQUFUSixRQUNkRSxPQUR1QkUsYUFBWSxNQUNsQkosT0FBakJFLGdCQUEwQkcsT0FBVEwsUUFBb0IsT0FBWEssWUFBVztnQkFFbkM7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVSxPQUFPLHVCQXBPRTdGLGlDQW9PSTZGLFNBQU4sSUFBSyxhQUFPLElBQUksQ0FBQ3JGLGlCQUFpQjtZQUFHOzs7O1lBRS9Dc0YsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDM0YsUUFBUSxFQUFFQyxVQUFVLEVBQUVFLE9BQU87Z0JBQ25FLElBQU1FLG9CQUFvQixNQUNwQndCLHVCQUF1QitELGlCQUFZLENBQUNELGdDQUFnQyxDQXhPekQ5RixzQkF3T2dGRyxVQUFVQyxZQUFZRSxTQUFTRTtnQkFFaEksT0FBT3dCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxRkFBcUZWLHlDQUF5QyxFQUFFRixtQkFBbUIsRUFBRWIsaUJBQWlCLEVBQUVJLE9BQU87Z0JBQ3BMLElBQU1ULFdBQVc2Riw2QkFBa0IsRUFDN0I1RixhQUNFLHFCQUFHaUIsc0JBRUxmLFVBQVUsTUFDVjBCLHVCQUF1QitELGlCQUFZLENBQUNELGdDQUFnQyxDQW5QekQ5RixzQkFtUGdGRyxVQUFVQyxZQUFZRSxTQUFTRTtnQkFFaEksSUFBSWUsOENBQThDLE1BQU07b0JBQ3REQSw0Q0FBNENBLDBDQUEwQ3NFLEtBQUssSUFBSyxHQUFHO29CQUVuR3RFLDBDQUEwQytCLDRCQUE0QixDQUFDdEIsc0JBQXNCcEI7Z0JBQy9GO2dCQUVBLE9BQU9vQjtZQUNUOzs7V0E1UG1CaEM7RUFBNkIrRixpQkFBWTtBQStQOUQsU0FBU3BDLHdEQUF3REgsK0JBQStCO0lBQzlGLElBQU1SLHVCQUF1QlEsZ0NBQWdDUyxHQUFHLENBQUMsU0FBQ2dDO1FBQ2hFLElBQU1DLHNCQUFzQkMsaUJBQW1CLENBQUNDLGtDQUFrQyxDQUFDSDtRQUVuRixPQUFPQztJQUNUO0lBRUEsT0FBT2xEO0FBQ1QifQ==