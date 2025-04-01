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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter;
var DivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DivisionMarkdownNode, MarkdownNode);
    function DivisionMarkdownNode(ruleName, childNodes, precedence, opacity, domElement, divisionClassName) {
        _class_call_check(this, DivisionMarkdownNode);
        var _this;
        _this = _call_super(this, DivisionMarkdownNode, [
            ruleName,
            childNodes,
            precedence,
            opacity,
            domElement
        ]);
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
            key: "isDivisionMarkdownNode",
            value: function isDivisionMarkdownNode() {
                var divisionMarkdownNode = true;
                return divisionMarkdownNode;
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
            key: "getPageNumber",
            value: function getPageNumber() {
                var pageNumber = null;
                var pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
                if (pageNumberDirectiveMarkdownNode !== null) {
                    pageNumber = pageNumberDirectiveMarkdownNode.getPageNumber();
                }
                return pageNumber;
            }
        },
        {
            key: "setPageNumber",
            value: function setPageNumber(pageNumber) {
                var pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
                if (pageNumberDirectiveMarkdownNode !== null) {
                    pageNumberDirectiveMarkdownNode.setPageNumber(pageNumber);
                }
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
                var linesPerPage = context.linesPerPage, paginatedChildNodes = [];
                var pageNumber = context.pageNumber, totalLines = 0;
                this.forEachChildNode(function(childNode) {
                    var lines = childNode.lines(context);
                    if (totalLines + lines > linesPerPage) {
                        paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionReplacements, _this.divisionClassName, markdownNodes, pageNumber, context);
                        pageNumber++;
                        totalLines = 0;
                        clear(paginatedChildNodes);
                    }
                    var paginatedChildNode = childNode; ///
                    paginatedChildNodes.push(paginatedChildNode);
                    totalLines += lines;
                });
                if (totalLines > 0) {
                    paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionReplacements, this.divisionClassName, markdownNodes, pageNumber, context);
                    pageNumber++;
                }
                Object.assign(context, {
                    pageNumber: pageNumber
                });
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
                    (0, _footnotes.renumberFootnoteLinkMarkdownNodes)(divisionMarkdownNode, footnoteReplacementMap, context);
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
            key: "findPageNumberDirectiveMarkdownNode",
            value: function findPageNumberDirectiveMarkdownNode() {
                var pageNumberDirectiveMarkdownNode = null;
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    var node = subDivisionMarkdownNode; ///
                    pageNumberDirectiveMarkdownNode = (0, _query.pageNumberDirectiveMarkdownNodeFromNode)(node);
                    if (pageNumberDirectiveMarkdownNode !== null) {
                        return true;
                    }
                });
                return pageNumberDirectiveMarkdownNode;
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
            key: "fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName",
            value: function fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, divisionClassName, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(paginatedChildNodes), opacity = null, divisionMarkdownNode = DivisionMarkdownNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);
                divisionMarkdownNode.setDivisionClassName(divisionClassName);
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
    var indexAnchorReplacement = _indexAnchor.default.fromPageNumber(pageNumber, context), divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, divisionClassName, context), anchorMarkdownNode = indexAnchorReplacement.getAnchorMarkdownNode();
    divisionMarkdownNode.setPageNumber(pageNumber);
    markdownNode = anchorMarkdownNode; ///
    markdownNodes.push(markdownNode);
    markdownNode = divisionMarkdownNode; ///
    markdownNodes.push(markdownNode);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEluZGV4UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2luZGV4XCI7XG5pbXBvcnQgRm9vdG5vdGVSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVcIjtcbmltcG9ydCBJbmRleEFuY2hvclJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9pbmRleEFuY2hvclwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2Zvb3Rub3Rlc0xpc3RcIjtcbmltcG9ydCBGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9pbmRleERpcmVjdGl2ZVwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZXNEaXJlY3RpdmVcIjtcbmltcG9ydCBQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vcGFnZU51bWJlckRpcmVjdGl2ZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Zvb3Rub3Rlc1wiO1xuaW1wb3J0IHsgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUsIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgY2xlYXIsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBzZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzRGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIGdldFBhZ2VOdW1iZXIoKSB7XG4gICAgbGV0IHBhZ2VOdW1iZXIgPSBudWxsO1xuXG4gICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKTtcblxuICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5maW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbiAgICB9XG4gIH1cblxuICBwYWdpbmF0ZShtYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKFBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IFtcbiAgICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsXG4gICAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudFxuICAgICAgICAgIF07XG5cbiAgICBmaWx0ZXIoc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIChzdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHsgbGluZXNQZXJQYWdlIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMgPSBbXTtcblxuICAgIGxldCB7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQsXG4gICAgICAgIHRvdGFsTGluZXMgPSAwO1xuXG4gICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpO1xuXG4gICAgICBpZiAoKHRvdGFsTGluZXMgKyBsaW5lcykgPiBsaW5lc1BlclBhZ2UpIHtcbiAgICAgICAgcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG5cbiAgICAgICAgcGFnZU51bWJlcisrO1xuXG4gICAgICAgIHRvdGFsTGluZXMgPSAwO1xuXG4gICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYWdpbmF0ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcGFnaW5hdGVkQ2hpbGROb2Rlcy5wdXNoKHBhZ2luYXRlZENoaWxkTm9kZSk7XG5cbiAgICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG4gICAgfSk7XG5cbiAgICBpZiAodG90YWxMaW5lcyA+IDApIHtcbiAgICAgIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpO1xuXG4gICAgICBwYWdlTnVtYmVyKys7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBwYWdlTnVtYmVyXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVJbmRleChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhDcmVhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KEluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGluZGV4UmVwbGFjZW1lbnQgPSBJbmRleFJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGluZGV4UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgaW5kZXhSZXBsYWNlbWVudC5yZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGluZGV4Q3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4Q3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBDb250ZW50c0xpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb250ZW50c0xpc3RSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudC5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZXNMaXN0U3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVJlcGxhY2VtZW50TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZvb3Rub3Rlc0xpc3RTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZvb3Rub3Rlc0xpc3RTdWJEaXZpc2lvblJlcGxhY2VtZW50LnJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50KGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50ID0gRm9vdG5vdGVSZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVJlcGxhY2VtZW50O1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUluY2x1ZGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5yZWR1Y2UoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMucHVzaChzdWJEaXZpc2lvblJlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpIHtcbiAgICBsZXQgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50KGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50ID0gRm9vdG5vdGVSZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVJlcGxhY2VtZW50O1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVSZXBsYWNlbWVudE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBhc0hUTUwoY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGVudCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZGl2aXNpb25DbGFzc05hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25SZXBsYWNlbWVudHNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERJVklTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgLi4ucGFnaW5hdGVkQ2hpbGROb2Rlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG5cbiAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5mb3JFYWNoKChzdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gc3ViRGl2aXNpb25SZXBsYWNlbWVudC5jbG9uZSgpOyAgLy8vXG5cbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbiAgbGV0IG1hcmtkb3duTm9kZTtcblxuICBjb25zdCBpbmRleEFuY2hvclJlcGxhY2VtZW50ID0gSW5kZXhBbmNob3JSZXBsYWNlbWVudC5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyLCBjb250ZXh0KSxcbiAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KSxcbiAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gaW5kZXhBbmNob3JSZXBsYWNlbWVudC5nZXRBbmNob3JNYXJrZG93bk5vZGUoKTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gIG1hcmtkb3duTm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZTsgIC8vL1xuXG4gIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xuXG4gIG1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICBtYXJrZG93bk5vZGVzLnB1c2gobWFya2Rvd25Ob2RlKTtcbn0iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiaXNEaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImlzSWdub3JlZCIsIm5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImlnbm9yZWQiLCJnZXRQYWdlTnVtYmVyIiwicGFnZU51bWJlciIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInNldFBhZ2VOdW1iZXIiLCJwYWdpbmF0ZSIsIm1hcmtkb3duTm9kZXMiLCJmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwic3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImxpbmVzUGVyUGFnZSIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJ0b3RhbExpbmVzIiwiZm9yRWFjaENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImxpbmVzIiwicGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZSIsInBhZ2luYXRlZENoaWxkTm9kZSIsInB1c2giLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVJbmRleCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4Q3JlYXRlZCIsImluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiaW5kZXhSZXBsYWNlbWVudCIsIkluZGV4UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsIkNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudCIsImNyZWF0ZUZvb3Rub3RlcyIsImZvb3Rub3RlUmVwbGFjZW1lbnRNYXAiLCJmb290bm90ZXNMaXN0U3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIkZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlUmVwbGFjZW1lbnRNYXAiLCJyZXBsYWNlRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInJlbnVtYmVyRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyIsInByZXBhcmVGb290bm90ZXMiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9yRWFjaCIsImZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJGb290bm90ZVJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImlkZW50aWZpZXIiLCJyZXNvbHZlSW5jbHVkZXMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmaW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXNvbHZlRW1iZWRkaW5ncyIsIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJzb21lIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwicmVkdWNlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjcmVhdGVGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25SZXBsYWNlbWVudHNBbmREaXZpc2lvbkNsYXNzTmFtZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGUiLCJpbmRleEFuY2hvclJlcGxhY2VtZW50IiwiSW5kZXhBbmNob3JSZXBsYWNlbWVudCIsImZyb21QYWdlTnVtYmVyIiwiYW5jaG9yTWFya2Rvd25Ob2RlIiwiZ2V0QW5jaG9yTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXVCcUJBOzs7eUJBckJVOytEQUVOOzREQUNJOytEQUNHO2tFQUNHO21FQUNDO29FQUNDO2dFQUNNO3FFQUNNO3dFQUNHO3lFQUNDOzBFQUNDO3lCQUV6Qjt5QkFDTTt5QkFDZTtxQkFDNkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0gsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFDQUFOO2NBQU1BO2FBQUFBLHFCQUNQSSxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQURqRVQ7O2dCQUVqQixrQkFGaUJBO1lBRVhJO1lBQVVDO1lBQVlDO1lBQVlDO1lBQVNDOztRQUVqRCxNQUFLQyxpQkFBaUIs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