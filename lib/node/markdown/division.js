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
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../../replacement/contentsList"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../replacement/footnotesList"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnote"));
var _indexAnchor = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/indexAnchor"));
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
                        divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                            var pageNumber = divisionMarkdownNode.getPageNumber();
                            if (pageNumber !== null) {
                                var indexAnchorSubDivisionReplacement = _indexAnchor.default.fromPageNumber(pageNumber, context);
                                indexAnchorSubDivisionReplacement.prependToDivisionMarkdownNode(divisionMarkdownNode, context);
                            }
                        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEluZGV4UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2luZGV4XCI7XG5pbXBvcnQgRm9vdG5vdGVSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVcIjtcbmltcG9ydCBDb250ZW50c0xpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvY29udGVudHNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZVwiO1xuaW1wb3J0IEluZGV4QW5jaG9yU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vaW5kZXhBbmNob3JcIjtcbmltcG9ydCBJbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2luZGV4RGlyZWN0aXZlXCI7XG5pbXBvcnQgQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9jb250ZW50c0RpcmVjdGl2ZVwiO1xuaW1wb3J0IEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2Zvb3Rub3Rlc0RpcmVjdGl2ZVwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9wYWdlTnVtYmVyRGlyZWN0aXZlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERJVklTSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJlbnVtYmVyRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSwgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIHBhZ2luYXRlKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSBbXG4gICAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LFxuICAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgZmlsdGVyKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgbGV0IHRvdGFsTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAodG90YWxMaW5lcyA+IGxpbmVzUGVyUGFnZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25SZXBsYWNlbWVudHNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICBjbGVhcihwYWdpbmF0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICB0b3RhbExpbmVzID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0b3RhbExpbmVzID4gMCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkRGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICBnZXRQYWdlTnVtYmVyKCkge1xuICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmUgIT09IG51bGwpIHtcbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJEaXJlY3RpdmUuZ2V0UGFnZU51bWJlcigpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUluZGV4KGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGxldCBpbmRleENyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgaW5kZXhSZXBsYWNlbWVudCA9IEluZGV4UmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW5kZXhSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBpbmRleFJlcGxhY2VtZW50LnJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQoaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgaW5kZXhDcmVhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhDcmVhdGVkO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudChDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudCA9IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50LnJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQoY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGVudHNDcmVhdGVkID0gdHJ1ZTtcblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gZGl2aXNpb25NYXJrZG93bk5vZGUuZ2V0UGFnZU51bWJlcigpO1xuXG4gICAgICAgICAgaWYgKHBhZ2VOdW1iZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4QW5jaG9yU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IEluZGV4QW5jaG9yU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaW5kZXhBbmNob3JTdWJEaXZpc2lvblJlcGxhY2VtZW50LnByZXBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVSZXBsYWNlbWVudE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0U3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBmb290bm90ZXNMaXN0U3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZXBsYWNlRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJlbnVtYmVyRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGZvb3Rub3RlTGlua01hcmtkb3duTm9kZSkge1xuICAgICAgLy8vXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IEZvb3Rub3RlUmVwbGFjZW1lbnQuZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBmb290bm90ZVJlcGxhY2VtZW50TWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVSZXBsYWNlbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMucmVkdWNlKChzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLnB1c2goc3ViRGl2aXNpb25SZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG5cbiAgcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5mb3JFYWNoKChzdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50LnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cy5mb3JFYWNoKChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBGb290bm90ZVJlcGxhY2VtZW50LmZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudE1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0U3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVJlcGxhY2VtZW50TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0U3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50c0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRElWSVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAuLi5wYWdpbmF0ZWRDaGlsZE5vZGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBzdWJEaXZpc2lvblJlcGxhY2VtZW50LmNsb25lKCk7ICAvLy9cblxuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5hcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJpc0lnbm9yZWQiLCJub2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwicGFnaW5hdGUiLCJwYWdpbmF0ZWREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwic3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImxpbmVzUGVyUGFnZSIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwidG90YWxMaW5lcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJsaW5lcyIsInBhZ2luYXRlZENoaWxkTm9kZSIsInB1c2giLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25SZXBsYWNlbWVudHNBbmREaXZpc2lvbkNsYXNzTmFtZSIsInBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0UGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmaW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic29tZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsInNldFBhZ2VOdW1iZXIiLCJjcmVhdGVJbmRleCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4Q3JlYXRlZCIsImluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiaW5kZXhSZXBsYWNlbWVudCIsIkluZGV4UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsIkNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudCIsImluZGV4QW5jaG9yU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIkluZGV4QW5jaG9yU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZyb21QYWdlTnVtYmVyIiwicHJlcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjcmVhdGVGb290bm90ZXMiLCJmb290bm90ZVJlcGxhY2VtZW50TWFwIiwiZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVJlcGxhY2VtZW50TWFwIiwicmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJyZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMiLCJjYWxsYmFjayIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZSIsInByZXBhcmVGb290bm90ZXMiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsIkZvb3Rub3RlUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiaWRlbnRpZmllciIsInJlc29sdmVJbmNsdWRlcyIsInJlc29sdmVFbWJlZGRpbmdzIiwiU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlZHVjZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwicmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiYXNIVE1MIiwiaHRtbCIsImluZGVudCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJhcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXVCcUJBOzs7eUJBckJVOytEQUVOOzREQUNJOytEQUNHO21FQUNJO29FQUNDO2dFQUNNO2tFQUNHO3FFQUNHO3dFQUNHO3lFQUNDOzBFQUNDO3lCQUV6Qjt5QkFDTTt5QkFDZTtxQkFDNkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0gsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHFCQUNQSSxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQURqRVQ7O2tDQUVYSSxVQUFVQyxZQUFZQyxZQUFZQyxTQUFTQztRQUVqRCxNQUFLQyxpQkFBaUIsR0FBR0E7OztrQkFKUlQ7O1lBT25CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJGLGlCQUFpQjtnQkFDcEMsSUFBSSxDQUFDQSxpQkFBaUIsR0FBR0E7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFD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