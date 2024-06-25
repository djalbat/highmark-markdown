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
var _indexList = /*#__PURE__*/ _interop_require_default(require("../../replacement/indexList"));
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
            key: "paginate",
            value: function paginate(paginatedDivisionMarkdownNodes, context) {
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
                var totalLines = 0;
                childNodes.forEach(function(childNode) {
                    var lines = childNode.lines(context), paginatedChildNode = childNode; ///
                    totalLines += lines;
                    paginatedChildNodes.push(paginatedChildNode);
                    if (totalLines > linesPerPage) {
                        var divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, _this.divisionClassName, context), paginatedDivisionMarkdownNode = divisionMarkdownNode; ///
                        paginatedDivisionMarkdownNodes.push(paginatedDivisionMarkdownNode);
                        clear(paginatedChildNodes);
                        totalLines = 0;
                    }
                });
                if (totalLines > 0) {
                    var divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, this.divisionClassName, context), paginatedDivisionMarkdownNode = divisionMarkdownNode; ///
                    paginatedDivisionMarkdownNodes.push(paginatedDivisionMarkdownNode);
                }
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
            key: "createIndex",
            value: function createIndex(divisionMarkdownNodes, indexEntries, context) {
                var indexCreated = false;
                var indexDirectiveSubDivisionReplacement = this.findSubDivisionReplacement(_indexDirective.default, context);
                if (indexDirectiveSubDivisionReplacement !== null) {
                    var divisionMarkdownNode = this, indexListReplacement = _indexList.default.fromDivisionMarkdownNodesDivisionMarkdownNodeAndIndexEntries(divisionMarkdownNodes, divisionMarkdownNode, indexEntries, context);
                    if (indexListReplacement !== null) {
                        indexListReplacement.replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context);
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
            key: "fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName",
            value: function fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, divisionClassName, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(paginatedChildNodes), opacity = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEZvb3Rub3RlUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2luZGV4TGlzdFwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2Zvb3Rub3Rlc0xpc3RcIjtcbmltcG9ydCBGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9pbmRleERpcmVjdGl2ZVwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZXNEaXJlY3RpdmVcIjtcbmltcG9ydCBQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vcGFnZU51bWJlckRpcmVjdGl2ZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Zvb3Rub3Rlc1wiO1xuaW1wb3J0IHsgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUsIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgY2xlYXIsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBzZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgaXNJZ25vcmVkKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBwYWdpbmF0ZShwYWdpbmF0ZWREaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gW1xuICAgICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50XG4gICAgICAgICAgXTtcblxuICAgIGZpbHRlcihzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGxldCB0b3RhbExpbmVzID0gMDtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBsaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KSxcbiAgICAgICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICB0b3RhbExpbmVzICs9IGxpbmVzO1xuXG4gICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzLnB1c2gocGFnaW5hdGVkQ2hpbGROb2RlKTtcblxuICAgICAgaWYgKHRvdGFsTGluZXMgPiBsaW5lc1BlclBhZ2UpIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBwYWdpbmF0ZWREaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICBwYWdpbmF0ZWREaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChwYWdpbmF0ZWREaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgY2xlYXIocGFnaW5hdGVkQ2hpbGROb2Rlcyk7XG5cbiAgICAgICAgdG90YWxMaW5lcyA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodG90YWxMaW5lcyA+IDApIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50c0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICBwYWdpbmF0ZWREaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChwYWdpbmF0ZWREaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVJbmRleChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGluZGV4RW50cmllcywgY29udGV4dCkge1xuICAgIGxldCBpbmRleENyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgaW5kZXhMaXN0UmVwbGFjZW1lbnQgPSBJbmRleExpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzRGl2aXNpb25NYXJrZG93bk5vZGVBbmRJbmRleEVudHJpZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgaW5kZXhFbnRyaWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGluZGV4TGlzdFJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGluZGV4TGlzdFJlcGxhY2VtZW50LnJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQoaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgaW5kZXhDcmVhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhDcmVhdGVkO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudChDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudCA9IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50LnJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQoY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGVudHNDcmVhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNDcmVhdGVkO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudChGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3Rlc0xpc3RTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlUmVwbGFjZW1lbnRNYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsYmFjayhmb290bm90ZUxpbmtNYXJrZG93bk5vZGUpIHtcbiAgICAgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cy5mb3JFYWNoKChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBGb290bm90ZVJlcGxhY2VtZW50LmZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudE1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQ7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlSW5jbHVkZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudChTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnJlZHVjZSgoc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5wdXNoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50KGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50ID0gRm9vdG5vdGVSZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVJlcGxhY2VtZW50O1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVSZXBsYWNlbWVudE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBhc0hUTUwoY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGVudCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZGl2aXNpb25DbGFzc05hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25SZXBsYWNlbWVudHNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERJVklTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgLi4ucGFnaW5hdGVkQ2hpbGROb2Rlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5mb3JFYWNoKChzdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gc3ViRGl2aXNpb25SZXBsYWNlbWVudC5jbG9uZSgpOyAgLy8vXG5cbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsInBhZ2luYXRlIiwicGFnaW5hdGVkRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJsaW5lc1BlclBhZ2UiLCJwYWdpbmF0ZWRDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInRvdGFsTGluZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwibGluZXMiLCJwYWdpbmF0ZWRDaGlsZE5vZGUiLCJwdXNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJwYWdpbmF0ZWREaXZpc2lvbk1hcmtkb3duTm9kZSIsInNldFBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInNvbWUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJjcmVhdGVJbmRleCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4RW50cmllcyIsImluZGV4Q3JlYXRlZCIsImluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiaW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJJbmRleExpc3RSZXBsYWNlbWVudCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNEaXZpc2lvbk1hcmtkb3duTm9kZUFuZEluZGV4RW50cmllcyIsInJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQiLCJjcmVhdGVDb250ZW50cyIsImNvbnRlbnRzQ3JlYXRlZCIsImNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIkNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiQ29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVSZXBsYWNlbWVudE1hcCIsImZvb3Rub3Rlc0xpc3RTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVSZXBsYWNlbWVudE1hcCIsInJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzIiwiY2FsbGJhY2siLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGUiLCJwcmVwYXJlRm9vdG5vdGVzIiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIkZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJGb290bm90ZVJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImlkZW50aWZpZXIiLCJyZXNvbHZlSW5jbHVkZXMiLCJyZXNvbHZlRW1iZWRkaW5ncyIsIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJyZWR1Y2UiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsImFzSFRNTCIsImh0bWwiLCJpbmRlbnQiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiRElWSVNJT05fUlVMRV9OQU1FIiwiYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFzQnFCQTs7O3lCQXBCVTsrREFFTjsrREFDTztnRUFDQzttRUFDRztvRUFDQztnRUFDTTtxRUFDTTt3RUFDRzt5RUFDQzswRUFDQzt5QkFFekI7eUJBQ007eUJBQ2U7cUJBQzZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ILElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEksUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVUOztrQ0FFWEksVUFBVUMsWUFBWUMsWUFBWUMsU0FBU0M7UUFFakQsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJUOztZQU9uQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCRixpQkFBaUI7Z0JBQ3BDLElBQUksQ0FBQ0EsaUJBQWlCLEdBQUdBO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUQsWUFBWSxJQUFJLENBQUNILGlCQUFpQixFQUFFLEdBQUc7Z0JBRTdDLE9BQU9HO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLEVBQ1hDLDhCQUE4QkMsSUFBQUEsMENBQW1DLEVBQUNGLE9BQ2xFRyxVQUFXRixnQ0FBZ0M7Z0JBRWpELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsOEJBQThCLEVBQUVQLE9BQU87O2dCQUM5QyxJQUFNUSwyQ0FBMkMsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQ0MsMkJBQXdDLEVBQUVWLFVBQ3hIVyw0Q0FBNEMsSUFBSSxDQUFDRiw2QkFBNkIsQ0FBQ0csNEJBQXlDLEVBQUVaLFVBQzFIYSwwQkFBMEI7b0JBQ3hCTDtvQkFDQUc7aUJBQ0Q7Z0JBRVByQixPQUFPdUIseUJBQXlCLFNBQUNDO29CQUMvQixJQUFJQSwyQkFBMkIsTUFBTTt3QkFDbkMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFNLEFBQUVDLGVBQWlCZixRQUFqQmUsY0FDRkMsc0JBQXNCLEVBQUUsRUFDeEJ4QixhQUFhLElBQUksQ0FBQ3lCLGFBQWE7Z0JBRXJDLElBQUlDLGFBQWE7Z0JBRWpCMUIsV0FBVzJCLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsUUFBUUQsVUFBVUMsS0FBSyxDQUFDckIsVUFDeEJzQixxQkFBcUJGLFdBQVksR0FBRztvQkFFMUNGLGNBQWNHO29CQUVkTCxvQkFBb0JPLElBQUksQ0FBQ0Q7b0JBRXpCLElBQUlKLGFBQWFILGNBQWM7d0JBQzdCLElBQU1TLHVCQUF1QnJDLEFBMURoQkEscUJBMERxQ3NDLGtFQUFrRSxDQUFDVCxxQkFBcUJILHlCQUF5QixNQUFLakIsaUJBQWlCLEVBQUVJLFVBQ3JMMEIsZ0NBQWdDRixzQkFBc0IsR0FBRzt3QkFFL0RqQiwrQkFBK0JnQixJQUFJLENBQUNHO3dCQUVwQ3RDLE1BQU00Qjt3QkFFTkUsYUFBYTtvQkFDZjtnQkFDRjtnQkFFQSxJQUFJQSxhQUFhLEdBQUc7b0JBQ2xCLElBQU1NLHVCQUF1QnJDLEFBdEVkQSxxQkFzRW1Dc0Msa0VBQWtFLENBQUNULHFCQUFxQkgseUJBQXlCLElBQUksQ0FBQ2pCLGlCQUFpQixFQUFFSSxVQUNyTDBCLGdDQUFnQ0Ysc0JBQXNCLEdBQUc7b0JBRS9EakIsK0JBQStCZ0IsSUFBSSxDQUFDRztnQkFDdEM7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxVQUFVO2dCQUN0QixJQUFNQywyQkFBMkIsSUFBSSxDQUFDQyw0QkFBNEI7Z0JBRWxFRCx5QkFBeUJFLElBQUksQ0FBQyxTQUFDQztvQkFDN0IsSUFBTTlCLE9BQU84Qix5QkFDUEMsc0JBQXNCQyxJQUFBQSw4Q0FBdUMsRUFBQ2hDO29CQUVwRSxJQUFJK0Isd0JBQXdCLE1BQU07d0JBQ2hDQSxvQkFBb0JOLGFBQWEsQ0FBQ0M7d0JBRWxDLE9BQU87b0JBQ1Q7Z0JBQ0Y7WUFDRjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxxQkFBcUIsRUFBRUMsWUFBWSxFQUFFckMsT0FBTztnQkFDdEQsSUFBSXNDLGVBQWU7Z0JBRW5CLElBQU1DLHVDQUF1QyxJQUFJLENBQUNDLDBCQUEwQixDQUFDQyx1QkFBb0MsRUFBRXpDO2dCQUVuSCxJQUFJdUMseUNBQXlDLE1BQU07b0JBQ2pELElBQU1mLHVCQUF1QixJQUFJLEVBQzNCa0IsdUJBQXVCQyxrQkFBb0IsQ0FBQ0MsNERBQTRELENBQUNSLHVCQUF1Qlosc0JBQXNCYSxjQUFjckM7b0JBRTFLLElBQUkwQyx5QkFBeUIsTUFBTTt3QkFDakNBLHFCQUFxQkcsMkNBQTJDLENBQUNOLHNDQUFzQ2Ysc0JBQXNCeEI7d0JBRTdIc0MsZUFBZTtvQkFDakI7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlVixxQkFBcUIsRUFBRXBDLE9BQU87Z0JBQzNDLElBQUkrQyxrQkFBa0I7Z0JBRXRCLElBQU1DLDBDQUEwQyxJQUFJLENBQUNSLDBCQUEwQixDQUFDUywwQkFBdUMsRUFBRWpEO2dCQUV6SCxJQUFJZ0QsNENBQTRDLE1BQU07b0JBQ3BELElBQU14Qix1QkFBdUIsSUFBSSxFQUMzQjBCLDBCQUEwQkMscUJBQXVCLENBQUNDLGdEQUFnRCxDQUFDaEIsdUJBQXVCWixzQkFBc0J4QjtvQkFFdEosSUFBSWtELDRCQUE0QixNQUFNO3dCQUNwQ0Esd0JBQXdCRyw4Q0FBOEMsQ0FBQ0wseUNBQXlDeEIsc0JBQXNCeEI7d0JBRXRJK0Msa0JBQWtCO29CQUNwQjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsc0JBQXNCLEVBQUV2RCxPQUFPO2dCQUM3QyxJQUFNUSwyQ0FBMkMsSUFBSSxDQUFDZ0MsMEJBQTBCLENBQUM5QiwyQkFBd0MsRUFBRVY7Z0JBRTNILElBQUlRLDZDQUE2QyxNQUFNO29CQUNyRCxJQUFNZ0IsdUJBQXVCLElBQUksRUFDM0JnQyxzQ0FBc0NDLHNCQUF3QixDQUFDQyxpREFBaUQsQ0FBQ2xDLHNCQUFzQitCLHdCQUF3QnZEO29CQUVySyxJQUFJd0Qsd0NBQXdDLE1BQU07d0JBQ2hEQSxvQ0FBb0NHLCtDQUErQyxDQUFDbkQsMENBQTBDZ0Isc0JBQXNCeEI7b0JBQ3RKO29CQUVBNEQsSUFBQUEsNENBQWlDLEVBQUNwQyxzQkFBc0IrQix3QkFBd0JNLFVBQVU3RDtnQkFDNUY7Z0JBRUEsU0FBUzZELFNBQVNDLHdCQUF3QjtnQkFDeEMsR0FBRztnQkFDTDtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlIsc0JBQXNCLEVBQUV2RCxPQUFPO2dCQUM5QyxJQUFNZ0Usa0NBQWtDLElBQUksQ0FBQ0MsOEJBQThCLENBQUNDLGtCQUE4QixFQUFFbEU7Z0JBRTVHZ0UsZ0NBQWdDN0MsT0FBTyxDQUFDLFNBQUNnRDtvQkFDdkMsSUFBTUMsc0JBQXNCQyxpQkFBbUIsQ0FBQ0Msa0NBQWtDLENBQUNILGlDQUM3RUksYUFBYUosK0JBQStCSSxVQUFVLENBQUN2RTtvQkFFN0R1RCxzQkFBc0IsQ0FBQ2dCLFdBQVcsR0FBR0g7Z0JBQ3ZDO1lBQ0Y7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCeEUsT0FBTztnQkFDckIsSUFBTXdCLHVCQUF1QixJQUFJLEVBQzNCSywyQkFBMkIsSUFBSSxDQUFDQyw0QkFBNEI7Z0JBRWxFRCx5QkFBeUJWLE9BQU8sQ0FBQyxTQUFDYTtvQkFDaENBLHdCQUF3QndDLGVBQWUsQ0FBQ2hELHNCQUFzQnhCO2dCQUNoRTtZQUNGOzs7WUFFQXlFLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0J6RSxPQUFPO2dCQUN2QixJQUFNd0IsdUJBQXVCLElBQUksRUFDM0JLLDJCQUEyQixJQUFJLENBQUNDLDRCQUE0QjtnQkFFbEVELHlCQUF5QlYsT0FBTyxDQUFDLFNBQUNhO29CQUNoQ0Esd0JBQXdCeUMsaUJBQWlCLENBQUNqRCxzQkFBc0J4QjtnQkFDbEU7WUFDRjs7O1lBRUF3QyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCa0Msc0JBQXNCLEVBQUUxRSxPQUFPO2dCQUN4RCxJQUFJYyx5QkFBeUI7Z0JBRTdCLElBQU1lLDJCQUEyQixJQUFJLENBQUNDLDRCQUE0QjtnQkFFbEVELHlCQUF5QkUsSUFBSSxDQUFDLFNBQUNDO29CQUM3QmxCLHlCQUF5QjRELHVCQUF1QkMsMkJBQTJCLENBQUMzQyx5QkFBeUJoQztvQkFFckcsSUFBSWMsMkJBQTJCLE1BQU07d0JBQ25DLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUE4RCxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCRixzQkFBc0IsRUFBRTFFLE9BQU87Z0JBQ3pELElBQU02QiwyQkFBMkIsSUFBSSxDQUFDQyw0QkFBNEIsSUFDNURqQiwwQkFBMEJnQix5QkFBeUJnRCxNQUFNLENBQUMsU0FBQ2hFLHlCQUF5Qm1CO29CQUNsRixJQUFNbEIseUJBQXlCNEQsdUJBQXVCQywyQkFBMkIsQ0FBQzNDLHlCQUF5QmhDO29CQUUzRyxJQUFJYywyQkFBMkIsTUFBTTt3QkFDbkNELHdCQUF3QlUsSUFBSSxDQUFDVDtvQkFDL0I7b0JBRUEsT0FBT0Q7Z0JBQ1QsR0FBRyxFQUFFO2dCQUVYLE9BQU9BO1lBQ1Q7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU01QixPQUFPLElBQUksRUFDWDJCLDJCQUEyQmlELElBQUFBLHVDQUFnQyxFQUFDNUU7Z0JBRWxFLE9BQU8yQjtZQUNUOzs7WUFFQXBCLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJpRSxzQkFBc0IsRUFBRTFFLE9BQU87Z0JBQzNELElBQU13Qix1QkFBdUIsSUFBSSxFQUMzQlYseUJBQXlCLElBQUksQ0FBQzBCLDBCQUEwQixDQUFDa0Msd0JBQXdCMUU7Z0JBRXZGLElBQUljLDJCQUEyQixNQUFNO29CQUNuQ0EsdUJBQXVCaUUsOEJBQThCLENBQUN2RCxzQkFBc0J4QjtnQkFDOUU7Z0JBRUEsT0FBT2M7WUFDVDs7O1lBRUFtRCxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCUyxzQkFBc0IsRUFBRTFFLE9BQU87Z0JBQzVELElBQU13Qix1QkFBdUIsSUFBSSxFQUMzQlgsMEJBQTBCLElBQUksQ0FBQytELDJCQUEyQixDQUFDRix3QkFBd0IxRTtnQkFFekZhLHdCQUF3Qk0sT0FBTyxDQUFDLFNBQUNMO29CQUMvQkEsdUJBQXVCaUUsOEJBQThCLENBQUN2RCxzQkFBc0J4QjtnQkFDOUU7Z0JBRUEsT0FBT2E7WUFDVDs7O1lBRUFtRSxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCekIsc0JBQXNCLEVBQUV2RCxPQUFPO2dCQUM1RCxJQUFNZ0Usa0NBQWtDLElBQUksQ0FBQ1ksMkJBQTJCLENBQUNWLGtCQUE4QixFQUFFbEU7Z0JBRXpHZ0UsZ0NBQWdDN0MsT0FBTyxDQUFDLFNBQUNnRDtvQkFDdkMsSUFBTUMsc0JBQXNCQyxpQkFBbUIsQ0FBQ0Msa0NBQWtDLENBQUNILGlDQUM3RUksYUFBYUosK0JBQStCSSxVQUFVLENBQUN2RTtvQkFFN0R1RCxzQkFBc0IsQ0FBQ2dCLFdBQVcsR0FBR0g7Z0JBQ3ZDO2dCQUVBLElBQU01Qyx1QkFBdUIsSUFBSSxFQUMzQmdDLHNDQUFzQ0Msc0JBQXdCLENBQUNDLGlEQUFpRCxDQUFDbEMsc0JBQXNCK0Isd0JBQXdCdkQ7Z0JBRXJLLE9BQU93RDtZQUNUOzs7WUFFQXlCLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPakYsT0FBTztnQkFDWixJQUFJa0YsT0FBTztnQkFFWCxJQUFNQyxTQUFTQyx1QkFBWSxFQUNyQkMsaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFFBQVFuRjtnQkFFckQsSUFBSXFGLG1CQUFtQixNQUFNO29CQUMzQixJQUFNRSxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDdkYsVUFDL0J3RixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDeEY7b0JBRW5Da0YsT0FBTyxBQUFDLEdBQVdLLE9BQVRKLFFBQ2RFLE9BRHVCRSxhQUFZLE1BQ2xCSixPQUFqQkUsZ0JBQTBCRyxPQUFUTCxRQUFvQixPQUFYSyxZQUFXO2dCQUVuQztnQkFFQSxPQUFPTjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFVLE9BQU8sdUJBaFJFdEcsaUNBZ1JJc0csU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDN0YsaUJBQWlCO1lBQUc7Ozs7WUFFL0M4RixLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNuRyxRQUFRLEVBQUVDLFVBQVUsRUFBRUUsT0FBTztnQkFDbkUsSUFBTUUsb0JBQW9CLE1BQ3BCNEIsdUJBQXVCbUUsaUJBQVksQ0FBQ0QsZ0NBQWdDLENBcFJ6RHZHLHNCQW9SZ0ZJLFVBQVVDLFlBQVlFLFNBQVNFO2dCQUVoSSxPQUFPNEI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1FQUFtRVQsbUJBQW1CLEVBQUVILHVCQUF1QixFQUFFakIsaUJBQWlCLEVBQUVJLE9BQU87Z0JBQ2hKLElBQU1ULFdBQVdxRyw2QkFBa0IsRUFDN0JwRyxhQUNFLHFCQUFHd0Isc0JBRUx0QixVQUFVLE1BQ1Y4Qix1QkFBdUJtRSxpQkFBWSxDQUFDRCxnQ0FBZ0MsQ0EvUnpEdkcsc0JBK1JnRkksVUFBVUMsWUFBWUUsU0FBU0U7Z0JBRWhJaUIsd0JBQXdCTSxPQUFPLENBQUMsU0FBQ0w7b0JBQy9CQSx5QkFBeUJBLHVCQUF1QjJFLEtBQUssSUFBSyxHQUFHO29CQUU3RDNFLHVCQUF1QitFLDRCQUE0QixDQUFDckUsc0JBQXNCeEI7Z0JBQzVFO2dCQUVBLE9BQU93QjtZQUNUOzs7V0F4U21CckM7RUFBNkJ3RyxpQkFBWSJ9