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
var _index = /*#__PURE__*/ _interop_require_default(require("../../replacement/index"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../replacement/footnote"));
var _indexAnchor = /*#__PURE__*/ _interop_require_default(require("../../replacement/indexAnchor"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../../replacement/contentsList"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../replacement/footnotesList"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnote"));
var _indexDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/indexDirective"));
var _contentsDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/contentsDirective"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnotesDirective"));
var _pageNumberDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/pageNumberDirective"));
var _constants = require("../../constants");
var _footnotes = require("../../utilities/footnotes");
var _query = require("../../utilities/query");
var _ruleNames = require("../../ruleNames");
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
var clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter;
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
            key: "isDivisionMarkdownNode",
            value: function isDivisionMarkdownNode() {
                var divisionMarkdownNode = true;
                return divisionMarkdownNode;
            }
        },
        {
            key: "getPageNumber",
            value: function getPageNumber() {
                var pageNumber = null;
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    var node = subDivisionMarkdownNode, pageNumberDirective = (0, _query.pageNumberDirectiveMarkdownNodeFromNode)(node);
                    if (pageNumberDirective !== null) {
                        pageNumber = pageNumberDirective.getPageNumber();
                        return true;
                    }
                });
                return pageNumber;
            }
        },
        {
            key: "setPageNumber",
            value: function setPageNumber(pageNumber) {
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    var node = subDivisionMarkdownNode, pageNumberDirective = (0, _query.pageNumberDirectiveMarkdownNodeFromNode)(node);
                    if (pageNumberDirective !== null) {
                        pageNumberDirective.setPageNumber(pageNumber);
                        return true;
                    }
                });
            }
        },
        {
            key: "paginate",
            value: function paginate(markdownNodes, context) {
                var _this = this;
                var footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_footnotesDirective.default, context), pageNumberDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_pageNumberDirective.default, context), subDivisionReplacements = [
                    footnotesDirectiveSubDivisionReplacement,
                    pageNumberDirectiveSubDivisionReplacement
                ];
                filter(subDivisionReplacements, function(subDivisionReplacement) {
                    if (subDivisionReplacement !== null) {
                        return true;
                    }
                });
                var linesPerPage = context.linesPerPage, paginatedChildNodes = [], childNodes = this.getChildNodes();
                var totalLines = 0, pageNumber = 1;
                childNodes.forEach(function(childNode) {
                    var lines = childNode.lines(context), paginatedChildNode = childNode; ///
                    paginatedChildNodes.push(paginatedChildNode);
                    totalLines += lines;
                    if (totalLines > linesPerPage) {
                        paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionReplacements, _this.divisionClassName, markdownNodes, pageNumber, context);
                        clear(paginatedChildNodes);
                        totalLines = 0;
                        pageNumber++;
                    }
                });
                if (totalLines > 0) {
                    paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionReplacements, this.divisionClassName, markdownNodes, pageNumber, context);
                }
            }
        },
        {
            key: "createIndex",
            value: function createIndex(divisionMarkdownNodes, context) {
                var indexCreated = false;
                var indexDirectiveSubDivisionReplacement = this.findSubDivisionReplacement(_indexDirective.default, context);
                if (indexDirectiveSubDivisionReplacement !== null) {
                    var divisionMarkdownNode = this, indexReplacement = _index.default.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
                    if (indexReplacement !== null) {
                        indexReplacement.replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context);
                        indexCreated = true;
                    }
                }
                return indexCreated;
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
            value: function createFootnotes(footnoteReplacementMap, context) {
                var footnotesDirectiveSubDivisionReplacement = this.findSubDivisionReplacement(_footnotesDirective.default, context);
                if (footnotesDirectiveSubDivisionReplacement !== null) {
                    var divisionMarkdownNode = this, footnotesListSubDivisionReplacement = _footnotesList.default.fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context);
                    if (footnotesListSubDivisionReplacement !== null) {
                        footnotesListSubDivisionReplacement.replaceFootnotesDirectiveSubDivisionReplacement(footnotesDirectiveSubDivisionReplacement, divisionMarkdownNode, context);
                    }
                    (0, _footnotes.renumberFootnoteLinkMarkdownNodes)(divisionMarkdownNode, footnoteReplacementMap, callback, context);
                }
                function callback(footnoteLinkMarkdownNode) {
                ///
                }
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(footnoteReplacementMap, context) {
                var footnoteSubDivisionReplacements = this.removeSubDivisionMarkdownNodes(_footnote1.default, context);
                footnoteSubDivisionReplacements.forEach(function(footnoteSubDivisionReplacement) {
                    var footnoteReplacement = _footnote.default.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement), identifier = footnoteSubDivisionReplacement.identifier(context);
                    footnoteReplacementMap[identifier] = footnoteReplacement;
                });
            }
        },
        {
            key: "resolveIncludes",
            value: function resolveIncludes(context) {
                var divisionMarkdownNode = this, subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                    subDivisionMarkdownNode.resolveIncludes(divisionMarkdownNode, context);
                });
            }
        },
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(context) {
                var divisionMarkdownNode = this, subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                    subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
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
            value: function createFootnotesListReplacement(footnoteReplacementMap, context) {
                var footnoteSubDivisionReplacements = this.findSubDivisionReplacements(_footnote1.default, context);
                footnoteSubDivisionReplacements.forEach(function(footnoteSubDivisionReplacement) {
                    var footnoteReplacement = _footnote.default.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement), identifier = footnoteSubDivisionReplacement.identifier(context);
                    footnoteReplacementMap[identifier] = footnoteReplacement;
                });
                var divisionMarkdownNode = this, footnotesListSubDivisionReplacement = _footnotesList.default.fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context);
                return footnotesListSubDivisionReplacement;
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
            key: "fromPaginatedChildNodesAndSubDivisionReplacements",
            value: function fromPaginatedChildNodesAndSubDivisionReplacements(paginatedChildNodes, subDivisionReplacements, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(paginatedChildNodes), opacity = null, divisionMarkdownNode = DivisionMarkdownNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);
                subDivisionReplacements.forEach(function(subDivisionReplacement) {
                    subDivisionReplacement = subDivisionReplacement.clone(); ///
                    subDivisionReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                });
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);
function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionReplacements, divisionClassName, markdownNodes, pageNumber, context) {
    var markdownNode;
    var indexAnchorReplacement = _indexAnchor.default.fromPageNumber(pageNumber, context), anchorMarkdownNode = indexAnchorReplacement.getAnchorMarkdownNode();
    markdownNode = anchorMarkdownNode; ///
    markdownNodes.push(markdownNode);
    var divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesAndSubDivisionReplacements(paginatedChildNodes, subDivisionReplacements, context);
    divisionMarkdownNode.setDivisionClassName(divisionClassName);
    divisionMarkdownNode.setPageNumber(pageNumber);
    markdownNode = divisionMarkdownNode; ///
    markdownNodes.push(markdownNode);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEluZGV4UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2luZGV4XCI7XG5pbXBvcnQgRm9vdG5vdGVSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVcIjtcbmltcG9ydCBJbmRleEFuY2hvclJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9pbmRleEFuY2hvclwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2Zvb3Rub3Rlc0xpc3RcIjtcbmltcG9ydCBGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9pbmRleERpcmVjdGl2ZVwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZXNEaXJlY3RpdmVcIjtcbmltcG9ydCBQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vcGFnZU51bWJlckRpcmVjdGl2ZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Zvb3Rub3Rlc1wiO1xuaW1wb3J0IHsgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUsIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge0RJVklTSU9OX1JVTEVfTkFNRX0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGNsZWFyLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGlnbm9yZWQgPSAoaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBpZ25vcmVkO1xuICB9XG5cbiAgaXNEaXZpc2lvbk1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRQYWdlTnVtYmVyKCkge1xuICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmUgIT09IG51bGwpIHtcbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJEaXJlY3RpdmUuZ2V0UGFnZU51bWJlcigpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBhZ2luYXRlKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gW1xuICAgICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50XG4gICAgICAgICAgXTtcblxuICAgIGZpbHRlcihzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGxldCB0b3RhbExpbmVzID0gMCxcbiAgICAgICAgcGFnZU51bWJlciA9IDE7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCksXG4gICAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcGFnaW5hdGVkQ2hpbGROb2Rlcy5wdXNoKHBhZ2luYXRlZENoaWxkTm9kZSk7XG5cbiAgICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIGlmICh0b3RhbExpbmVzID4gbGluZXNQZXJQYWdlKSB7XG4gICAgICAgIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpXG5cbiAgICAgICAgY2xlYXIocGFnaW5hdGVkQ2hpbGROb2Rlcyk7XG5cbiAgICAgICAgdG90YWxMaW5lcyA9IDA7XG5cbiAgICAgICAgcGFnZU51bWJlcisrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4gICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJbmRleChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhDcmVhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KEluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGluZGV4UmVwbGFjZW1lbnQgPSBJbmRleFJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGluZGV4UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgaW5kZXhSZXBsYWNlbWVudC5yZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGluZGV4Q3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4Q3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBDb250ZW50c0xpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb250ZW50c0xpc3RSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudC5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZXNMaXN0U3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVJlcGxhY2VtZW50TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZvb3Rub3Rlc0xpc3RTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZvb3Rub3Rlc0xpc3RTdWJEaXZpc2lvblJlcGxhY2VtZW50LnJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50KGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbGJhY2soZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlKSB7XG4gICAgICAvLy9cbiAgICB9XG4gIH1cblxuICBwcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50ID0gRm9vdG5vdGVSZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVJlcGxhY2VtZW50O1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUluY2x1ZGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5yZWR1Y2UoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMucHVzaChzdWJEaXZpc2lvblJlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICByZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudChTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50LnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cblxuICByZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudChmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IEZvb3Rub3RlUmVwbGFjZW1lbnQuZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBmb290bm90ZVJlcGxhY2VtZW50TWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVSZXBsYWNlbWVudDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlUmVwbGFjZW1lbnRNYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RTdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG5cbiAgYXNIVE1MKGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc0FuZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIC4uLnBhZ2luYXRlZENoaWxkTm9kZXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuXG4gICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuY2xvbmUoKTsgIC8vL1xuXG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50LmFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KSB7XG4gIGxldCBtYXJrZG93bk5vZGU7XG5cbiAgY29uc3QgaW5kZXhBbmNob3JSZXBsYWNlbWVudCA9IEluZGV4QW5jaG9yUmVwbGFjZW1lbnQuZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlciwgY29udGV4dCksXG4gICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IGluZGV4QW5jaG9yUmVwbGFjZW1lbnQuZ2V0QW5jaG9yTWFya2Rvd25Ob2RlKCk7XG5cbiAgbWFya2Rvd25Ob2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG5cbiAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc0FuZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBjb250ZXh0KTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICBtYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG59Il0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJpc0lnbm9yZWQiLCJub2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwiaXNEaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0UGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmaW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic29tZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsInNldFBhZ2VOdW1iZXIiLCJwYWdpbmF0ZSIsIm1hcmtkb3duTm9kZXMiLCJmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwic3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImxpbmVzUGVyUGFnZSIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwidG90YWxMaW5lcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJsaW5lcyIsInBhZ2luYXRlZENoaWxkTm9kZSIsInB1c2giLCJwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlSW5kZXgiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJpbmRleENyZWF0ZWQiLCJpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIkluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImluZGV4UmVwbGFjZW1lbnQiLCJJbmRleFJlcGxhY2VtZW50IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudCIsImNyZWF0ZUNvbnRlbnRzIiwiY29udGVudHNDcmVhdGVkIiwiY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiY29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJDb250ZW50c0xpc3RSZXBsYWNlbWVudCIsInJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQiLCJjcmVhdGVGb290bm90ZXMiLCJmb290bm90ZVJlcGxhY2VtZW50TWFwIiwiZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVJlcGxhY2VtZW50TWFwIiwicmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJyZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMiLCJjYWxsYmFjayIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZSIsInByZXBhcmVGb290bm90ZXMiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsIkZvb3Rub3RlUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiaWRlbnRpZmllciIsInJlc29sdmVJbmNsdWRlcyIsInJlc29sdmVFbWJlZGRpbmdzIiwiU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlZHVjZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwicmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiYXNIVE1MIiwiaHRtbCIsImluZGVudCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJmcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc0FuZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwiRElWSVNJT05fUlVMRV9OQU1FIiwiYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZSIsImluZGV4QW5jaG9yUmVwbGFjZW1lbnQiLCJJbmRleEFuY2hvclJlcGxhY2VtZW50IiwiZnJvbVBhZ2VOdW1iZXIiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJnZXRBbmNob3JNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBdUJxQkE7Ozt5QkFyQlU7K0RBRU47NERBQ0k7K0RBQ0c7a0VBQ0c7bUVBQ0M7b0VBQ0M7Z0VBQ007cUVBQ007d0VBQ0c7eUVBQ0M7MEVBQ0M7eUJBRXpCO3lCQUNxQjtxQkFDNkU7eUJBQzlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEksUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVUOztrQ0FFWEksVUFBVUMsWUFBWUMsWUFBWUMsU0FBU0M7UUFFakQsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJUOztZQU9uQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCRixpQkFBaUI7Z0JBQ3BDLElBQUksQ0FBQ0EsaUJBQWlCLEdBQUdBO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUQsWUFBWSxJQUFJLENBQUNI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