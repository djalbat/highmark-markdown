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
var _index = /*#__PURE__*/ _interop_require_default(require("../../transform/index"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/footnote"));
var _indexAnchor = /*#__PURE__*/ _interop_require_default(require("../../transform/indexAnchor"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../../transform/contentsList"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/footnotesList"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/footnote"));
var _indexDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/indexDirective"));
var _contentsDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/contentsDirective"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/footnotesDirective"));
var _pageNumberDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/pageNumberDirective"));
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
                var footnotesDirectiveSubDivisionTransform = this.removeSubDivisionMarkdownNode(_footnotesDirective.default, context), pageNumberDirectiveSubDivisionTransform = this.removeSubDivisionMarkdownNode(_pageNumberDirective.default, context), subDivisionTransforms = [
                    footnotesDirectiveSubDivisionTransform,
                    pageNumberDirectiveSubDivisionTransform
                ];
                filter(subDivisionTransforms, function(subDivisionTransform) {
                    if (subDivisionTransform !== null) {
                        return true;
                    }
                });
                var linesPerPage = context.linesPerPage, paginatedChildNodes = [];
                var pageNumber = context.pageNumber, totalLines = 0;
                this.forEachChildNode(function(childNode) {
                    var lines = childNode.lines(context);
                    if (totalLines + lines > linesPerPage) {
                        paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, _this.divisionClassName, markdownNodes, pageNumber, context);
                        pageNumber++;
                        totalLines = 0;
                        clear(paginatedChildNodes);
                    }
                    var paginatedChildNode = childNode; ///
                    paginatedChildNodes.push(paginatedChildNode);
                    totalLines += lines;
                });
                if (totalLines > 0) {
                    paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);
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
                var indexDirectiveSubDivisionTransform = this.findSubDivisionTransform(_indexDirective.default, context);
                if (indexDirectiveSubDivisionTransform !== null) {
                    var divisionMarkdownNode = this, indexTransform = _index.default.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
                    if (indexTransform !== null) {
                        indexTransform.replaceIndexDirectiveSubdivisionTransform(indexDirectiveSubDivisionTransform, divisionMarkdownNode, context);
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
                var contentsDirectiveSubDivisionTransform = this.findSubDivisionTransform(_contentsDirective.default, context);
                if (contentsDirectiveSubDivisionTransform !== null) {
                    var divisionMarkdownNode = this, contentsListTransform = _contentsList.default.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
                    if (contentsListTransform !== null) {
                        contentsListTransform.replaceContentsDirectiveSubdivisionTransform(contentsDirectiveSubDivisionTransform, divisionMarkdownNode, context);
                        contentsCreated = true;
                    }
                }
                return contentsCreated;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(footnoteTransformMap, context) {
                var footnotesDirectiveSubDivisionTransform = this.findSubDivisionTransform(_footnotesDirective.default, context);
                if (footnotesDirectiveSubDivisionTransform !== null) {
                    var divisionMarkdownNode = this, footnotesListSubDivisionTransform = _footnotesList.default.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
                    if (footnotesListSubDivisionTransform !== null) {
                        footnotesListSubDivisionTransform.replaceFootnotesDirectiveSubDivisionTransform(footnotesDirectiveSubDivisionTransform, divisionMarkdownNode, context);
                    }
                    (0, _footnotes.renumberFootnoteLinkMarkdownNodes)(divisionMarkdownNode, footnoteTransformMap, context);
                }
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(footnoteTransformMap, context) {
                var footnoteSubDivisionTransforms = this.removeSubDivisionMarkdownNodes(_footnote1.default, context);
                footnoteSubDivisionTransforms.forEach(function(footnoteSubDivisionTransform) {
                    var footnoteTransform = _footnote.default.fromFootnoteSubDivisionTransform(footnoteSubDivisionTransform), identifier = footnoteSubDivisionTransform.identifier(context);
                    footnoteTransformMap[identifier] = footnoteTransform;
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
            key: "findSubDivisionTransform",
            value: function findSubDivisionTransform(SubDivisionTransform, context) {
                var subDivisionTransform = null;
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    subDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionTransform !== null) {
                        return true;
                    }
                });
                return subDivisionTransform;
            }
        },
        {
            key: "findSubDivisionTransforms",
            value: function findSubDivisionTransforms(SubDivisionTransform, context) {
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes(), subDivisionTransforms = subDivisionMarkdownNodes.reduce(function(subDivisionTransforms, subDivisionMarkdownNode) {
                    var subDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionTransform !== null) {
                        subDivisionTransforms.push(subDivisionTransform);
                    }
                    return subDivisionTransforms;
                }, []);
                return subDivisionTransforms;
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
            value: function removeSubDivisionMarkdownNode(SubDivisionTransform, context) {
                var divisionMarkdownNode = this, subDivisionTransform = this.findSubDivisionTransform(SubDivisionTransform, context);
                if (subDivisionTransform !== null) {
                    subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                }
                return subDivisionTransform;
            }
        },
        {
            key: "removeSubDivisionMarkdownNodes",
            value: function removeSubDivisionMarkdownNodes(SubDivisionTransform, context) {
                var divisionMarkdownNode = this, subDivisionTransforms = this.findSubDivisionTransforms(SubDivisionTransform, context);
                subDivisionTransforms.forEach(function(subDivisionTransform) {
                    subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                });
                return subDivisionTransforms;
            }
        },
        {
            key: "createFootnotesListTransform",
            value: function createFootnotesListTransform(footnoteTransformMap, context) {
                var footnoteSubDivisionTransforms = this.findSubDivisionTransforms(_footnote1.default, context);
                footnoteSubDivisionTransforms.forEach(function(footnoteSubDivisionTransform) {
                    var footnoteTransform = _footnote.default.fromFootnoteSubDivisionTransform(footnoteSubDivisionTransform), identifier = footnoteSubDivisionTransform.identifier(context);
                    footnoteTransformMap[identifier] = footnoteTransform;
                });
                var divisionMarkdownNode = this, footnotesListSubDivisionTransform = _footnotesList.default.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
                return footnotesListSubDivisionTransform;
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
            key: "fromPaginatedChildNodesSubDivisionTransformsAndDivisionClassName",
            value: function fromPaginatedChildNodesSubDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(paginatedChildNodes), opacity = null, divisionMarkdownNode = DivisionMarkdownNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);
                divisionMarkdownNode.setDivisionClassName(divisionClassName);
                subDivisionTransforms.forEach(function(subDivisionTransform) {
                    subDivisionTransform = subDivisionTransform.clone(); ///
                    subDivisionTransform.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                });
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);
function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
    var markdownNode;
    var indexAnchorTransform = _indexAnchor.default.fromPageNumber(pageNumber, context), divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesSubDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context), anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();
    divisionMarkdownNode.setPageNumber(pageNumber);
    markdownNode = anchorMarkdownNode; ///
    markdownNodes.push(markdownNode);
    markdownNode = divisionMarkdownNode; ///
    markdownNodes.push(markdownNode);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEluZGV4VHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaW5kZXhcIjtcbmltcG9ydCBGb290bm90ZVRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhBbmNob3JUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9pbmRleEFuY2hvclwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2luZGV4RGlyZWN0aXZlXCI7XG5pbXBvcnQgQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2NvbnRlbnRzRGlyZWN0aXZlXCI7XG5pbXBvcnQgRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9mb290bm90ZXNEaXJlY3RpdmVcIjtcbmltcG9ydCBQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9wYWdlTnVtYmVyRGlyZWN0aXZlXCI7XG5cbmltcG9ydCB7IERJVklTSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJlbnVtYmVyRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSwgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgaXNEaXZpc2lvbk1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGlnbm9yZWQgPSAoaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBpZ25vcmVkO1xuICB9XG5cbiAgZ2V0UGFnZU51bWJlcigpIHtcbiAgICBsZXQgcGFnZU51bWJlciA9IG51bGw7XG5cbiAgICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5maW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmdldFBhZ2VOdW1iZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcjtcbiAgfVxuXG4gIHNldFBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCk7XG5cbiAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZS5zZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIHBhZ2luYXRlKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBbXG4gICAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybVxuICAgICAgICAgIF07XG5cbiAgICBmaWx0ZXIoc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCAoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHsgbGluZXNQZXJQYWdlIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMgPSBbXTtcblxuICAgIGxldCB7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQsXG4gICAgICAgIHRvdGFsTGluZXMgPSAwO1xuXG4gICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpO1xuXG4gICAgICBpZiAoKHRvdGFsTGluZXMgKyBsaW5lcykgPiBsaW5lc1BlclBhZ2UpIHtcbiAgICAgICAgcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpO1xuXG4gICAgICAgIHBhZ2VOdW1iZXIrKztcblxuICAgICAgICB0b3RhbExpbmVzID0gMDtcblxuICAgICAgICBjbGVhcihwYWdpbmF0ZWRDaGlsZE5vZGVzKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuXG4gICAgICB0b3RhbExpbmVzICs9IGxpbmVzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4gICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHBhZ2VOdW1iZXJcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUluZGV4KGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGxldCBpbmRleENyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmRTdWJEaXZpc2lvblRyYW5zZm9ybShJbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGlmIChpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGluZGV4VHJhbnNmb3JtID0gSW5kZXhUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW5kZXhUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgaW5kZXhUcmFuc2Zvcm0ucmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGluZGV4Q3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4Q3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmRTdWJEaXZpc2lvblRyYW5zZm9ybShDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb250ZW50c0xpc3RUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtLnJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZFN1YkRpdmlzaW9uVHJhbnNmb3JtKEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZXNMaXN0U3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0U3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uVHJhbnNmb3JtLnJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybXMgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhGb290bm90ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtID0gRm9vdG5vdGVUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybSksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUluY2x1ZGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uVHJhbnNmb3JtKFN1YkRpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IFN1YkRpdmlzaW9uVHJhbnNmb3JtLmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvblRyYW5zZm9ybXMoU3ViRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMucmVkdWNlKChzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IFN1YkRpdmlzaW9uVHJhbnNmb3JtLmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMucHVzaChzdWJEaXZpc2lvblRyYW5zZm9ybSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uVHJhbnNmb3JtcztcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpIHtcbiAgICBsZXQgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKFN1YkRpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZFN1YkRpdmlzaW9uVHJhbnNmb3JtKFN1YkRpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cblxuICByZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoU3ViRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uVHJhbnNmb3JtcyhTdWJEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG5cbiAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtLnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdFRyYW5zZm9ybShmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5maW5kU3ViRGl2aXNpb25UcmFuc2Zvcm1zKEZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuXG4gICAgZm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZVN1YkRpdmlzaW9uVHJhbnNmb3JtKSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGZvb3Rub3RlVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVUcmFuc2Zvcm07XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0U3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFN1YkRpdmlzaW9uVHJhbnNmb3JtO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc1N1YkRpdmlzaW9uVHJhbnNmb3Jtc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERJVklTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgLi4ucGFnaW5hdGVkQ2hpbGROb2Rlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG5cbiAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gc3ViRGl2aXNpb25UcmFuc2Zvcm0uY2xvbmUoKTsgIC8vL1xuXG4gICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbiAgbGV0IG1hcmtkb3duTm9kZTtcblxuICBjb25zdCBpbmRleEFuY2hvclRyYW5zZm9ybSA9IEluZGV4QW5jaG9yVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpLFxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25UcmFuc2Zvcm1zQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4gICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IGluZGV4QW5jaG9yVHJhbnNmb3JtLmdldEFuY2hvck1hcmtkb3duTm9kZSgpO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgbWFya2Rvd25Ob2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG5cbiAgbWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xufSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJpc0RpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImdldFBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwic2V0UGFnZU51bWJlciIsInBhZ2luYXRlIiwibWFya2Rvd25Ob2RlcyIsImZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsIlBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsInN1YkRpdmlzaW9uVHJhbnNmb3JtcyIsInN1YkRpdmlzaW9uVHJhbnNmb3JtIiwibGluZXNQZXJQYWdlIiwicGFnaW5hdGVkQ2hpbGROb2RlcyIsInRvdGFsTGluZXMiLCJmb3JFYWNoQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwibGluZXMiLCJwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwicGFnaW5hdGVkQ2hpbGROb2RlIiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImNyZWF0ZUluZGV4IiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaW5kZXhDcmVhdGVkIiwiaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImZpbmRTdWJEaXZpc2lvblRyYW5zZm9ybSIsIkluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJpbmRleFRyYW5zZm9ybSIsIkluZGV4VHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0iLCJjcmVhdGVDb250ZW50cyIsImNvbnRlbnRzQ3JlYXRlZCIsImNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiY29udGVudHNMaXN0VHJhbnNmb3JtIiwiQ29udGVudHNMaXN0VHJhbnNmb3JtIiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0iLCJjcmVhdGVGb290bm90ZXMiLCJmb290bm90ZVRyYW5zZm9ybU1hcCIsImZvb3Rub3Rlc0xpc3RTdWJEaXZpc2lvblRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcCIsInJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsInJlbnVtYmVyRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyIsInByZXBhcmVGb290bm90ZXMiLCJmb290bm90ZVN1YkRpdmlzaW9uVHJhbnNmb3JtcyIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIkZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJmb3JFYWNoIiwiZm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImZvb3Rub3RlVHJhbnNmb3JtIiwiRm9vdG5vdGVUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImlkZW50aWZpZXIiLCJyZXNvbHZlSW5jbHVkZXMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmaW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXNvbHZlRW1iZWRkaW5ncyIsIlN1YkRpdmlzaW9uVHJhbnNmb3JtIiwic29tZSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbmRTdWJEaXZpc2lvblRyYW5zZm9ybXMiLCJyZWR1Y2UiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNTdWJEaXZpc2lvblRyYW5zZm9ybXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGUiLCJpbmRleEFuY2hvclRyYW5zZm9ybSIsIkluZGV4QW5jaG9yVHJhbnNmb3JtIiwiZnJvbVBhZ2VOdW1iZXIiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJnZXRBbmNob3JNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBc0JxQkE7Ozt5QkFwQlU7K0RBRU47NERBQ0U7K0RBQ0c7a0VBQ0c7bUVBQ0M7b0VBQ0M7Z0VBQ007cUVBQ007d0VBQ0c7eUVBQ0M7MEVBQ0M7eUJBRWpCO3lCQUNlO3FCQUM2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvSCxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgscUNBQU47Y0FBTUE7YUFBQUEscUJBQ1BJLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRGpFVDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEk7WUFBVUM7WUFBWUM7WUFBWUM7WUFBU0M7O1FBRWpELE1BQUtDLGlCQUFpQixHQUFHQTs7O2tCQUpSVDs7WUFPbkJVLEtB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