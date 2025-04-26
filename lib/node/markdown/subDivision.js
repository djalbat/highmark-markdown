"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubDivisionMarkdownNode;
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
var _embedDirectives = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/embedDirectives"));
var _indexDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/indexDirective"));
var _contentsDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/contentsDirective"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/footnotesDirective"));
var _pageNumberDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/pageNumberDirective"));
var _ruleNames = require("../../ruleNames");
var _footnotes = require("../../utilities/footnotes");
var _query = require("../../utilities/query");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter;
var SubDivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(SubDivisionMarkdownNode, MarkdownNode);
    function SubDivisionMarkdownNode() {
        _class_call_check(this, SubDivisionMarkdownNode);
        return _call_super(this, SubDivisionMarkdownNode, arguments);
    }
    _create_class(SubDivisionMarkdownNode, [
        {
            key: "resolveIncludes",
            value: function resolveIncludes(context) {
                var divisionMarkdownNode = this, includeDirectivesDivisionTransform = IncludeDirectivesDivisionTransform.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                if (includeDirectivesDivisionTransform !== null) {
                    includeDirectivesDivisionTransform.removeDivisionMarkdownNode(divisionMarkdownNode, context);
                }
            }
        },
        {
            // resolveEmbeddings(divisionMarkdownNode, context) {
            //   const divisionMarkdownNode = this, ///
            //         embedDirectivesDivisionTransform = EmbedDirectivesDivisionTransform.fromDivisionMarkdownNode(divisionMarkdownNode, context);
            //
            //   if (embedDirectivesDivisionTransform !== null) {
            //     const subDivisionMarkdownNodes = embedDirectivesDivisionTransform.replaceDivisionMarkdownNode(divisionMarkdownNode, context);
            //
            //     subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
            //       subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
            //     });
            //   }
            // }
            key: "isIgnored",
            value: function isIgnored() {
                var node = this, ignoreDirectiveMarkdownNode = (0, _query.ignoreDirectiveMarkdownNodeFromNode)(node), ignored = ignoreDirectiveMarkdownNode !== null;
                return ignored;
            }
        },
        {
            // getPageNumber() {
            //   let pageNumber = null;
            //
            //   const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
            //
            //   if (pageNumberDirectiveMarkdownNode !== null) {
            //     pageNumber = pageNumberDirectiveMarkdownNode.getPageNumber();
            //   }
            //
            //   return pageNumber;
            // }
            //
            // setPageNumber(pageNumber) {
            //   const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
            //
            //   if (pageNumberDirectiveMarkdownNode !== null) {
            //     pageNumberDirectiveMarkdownNode.setPageNumber(pageNumber);
            //   }
            // }
            //
            // paginate(markdownNodes, context) {
            //   const footnotesDirectiveDivisionTransform = this.removeDivisionMarkdownNode(FootnotesDirectiveDivisionTransform, context),
            //         pageNumberDirectiveDivisionTransform = this.removeDivisionMarkdownNode(PageNumberDirectiveDivisionTransform, context),
            //         subDivisionTransforms = [
            //           footnotesDirectiveDivisionTransform,
            //           pageNumberDirectiveDivisionTransform
            //         ];
            //
            //   filter(subDivisionTransforms, (subDivisionTransform) => {
            //     if (subDivisionTransform !== null) {
            //       return true;
            //     }
            //   });
            //
            //   const { linesPerPage } = context,
            //         paginatedChildNodes = [];
            //
            //   let { pageNumber } = context,
            //       totalLines = 0;
            //
            //   this.forEachChildNode((childNode) => {
            //     const lines = childNode.lines(context);
            //
            //     if ((totalLines + lines) > linesPerPage) {
            //       paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);
            //
            //       pageNumber++;
            //
            //       totalLines = 0;
            //
            //       clear(paginatedChildNodes);
            //     }
            //
            //     const paginatedChildNode = childNode;  ///
            //
            //     paginatedChildNodes.push(paginatedChildNode);
            //
            //     totalLines += lines;
            //   });
            //
            //   if (totalLines > 0) {
            //     paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);
            //
            //     pageNumber++;
            //   }
            //
            //   Object.assign(context, {
            //     pageNumber
            //   });
            // }
            //
            // createIndex(divisionMarkdownNodes, context) {
            //   let indexCreated = false;
            //
            //   const indexDirectiveDivisionTransform = this.findDivisionTransform(IndexDirectiveDivisionTransform, context);
            //
            //   if (indexDirectiveDivisionTransform !== null) {
            //     const divisionMarkdownNode = this,  ///
            //           indexTransform = IndexTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
            //
            //     if (indexTransform !== null) {
            //       indexTransform.replaceIndexDirectiveSubdivisionTransform(indexDirectiveDivisionTransform, divisionMarkdownNode, context);
            //
            //       indexCreated = true;
            //     }
            //   }
            //
            //   return indexCreated;
            // }
            //
            // createContents(divisionMarkdownNodes, context) {
            //   let contentsCreated = false;
            //
            //   const contentsDirectiveDivisionTransform = this.findDivisionTransform(ContentsDirectiveDivisionTransform, context);
            //
            //   if (contentsDirectiveDivisionTransform !== null) {
            //     const divisionMarkdownNode = this,  ///
            //           contentsListTransform = ContentsListTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
            //
            //     if (contentsListTransform !== null) {
            //       contentsListTransform.replaceContentsDirectiveSubdivisionTransform(contentsDirectiveDivisionTransform, divisionMarkdownNode, context);
            //
            //       contentsCreated = true;
            //     }
            //   }
            //
            //   return contentsCreated;
            // }
            //
            // createFootnotes(footnoteTransformMap, context) {
            //   const footnotesDirectiveDivisionTransform = this.findDivisionTransform(FootnotesDirectiveDivisionTransform, context);
            //
            //   if (footnotesDirectiveDivisionTransform !== null) {
            //     const divisionMarkdownNode = this,  ///
            //           footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
            //
            //     if (footnotesListDivisionTransform !== null) {
            //       footnotesListDivisionTransform.replaceFootnotesDirectiveDivisionTransform(footnotesDirectiveDivisionTransform, divisionMarkdownNode, context);
            //     }
            //
            //     renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteTransformMap, context);
            //   }
            // }
            //
            // prepareFootnotes(footnoteTransformMap, context) {
            //   const footnoteDivisionTransforms = this.removeDivisionMarkdownNodes(FootnoteDivisionTransform, context);
            //
            //   footnoteDivisionTransforms.forEach((footnoteDivisionTransform) => {
            //     const footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform),
            //           identifier = footnoteDivisionTransform.identifier(context);
            //
            //     footnoteTransformMap[identifier] = footnoteTransform;
            //   });
            // }
            key: "findDivisionTransform",
            value: function findDivisionTransform(DivisionTransform, context) {
                var subDivisionTransform = null;
                var subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionTransform !== null) {
                        return true;
                    }
                });
                return subDivisionTransform;
            }
        },
        {
            key: "findDivisionTransforms",
            value: function findDivisionTransforms(DivisionTransform, context) {
                var subDivisionMarkdownNodes = this.findDivisionMarkdownNodes(), subDivisionTransforms = subDivisionMarkdownNodes.reduce(function(subDivisionTransforms, subDivisionMarkdownNode) {
                    var subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionTransform !== null) {
                        subDivisionTransforms.push(subDivisionTransform);
                    }
                    return subDivisionTransforms;
                }, []);
                return subDivisionTransforms;
            }
        },
        {
            key: "findDivisionMarkdownNodes",
            value: function findDivisionMarkdownNodes() {
                var node = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                return subDivisionMarkdownNodes;
            }
        },
        {
            key: "findPageNumberDirectiveMarkdownNode",
            value: function findPageNumberDirectiveMarkdownNode() {
                var pageNumberDirectiveMarkdownNode = null;
                var subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();
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
            key: "removeDivisionMarkdownNode",
            value: function removeDivisionMarkdownNode(DivisionTransform, context) {
                var divisionMarkdownNode = this, subDivisionTransform = this.findDivisionTransform(DivisionTransform, context);
                if (subDivisionTransform !== null) {
                    subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                }
                return subDivisionTransform;
            }
        },
        {
            key: "removeDivisionMarkdownNodes",
            value: function removeDivisionMarkdownNodes(DivisionTransform, context) {
                var divisionMarkdownNode = this, subDivisionTransforms = this.findDivisionTransforms(DivisionTransform, context);
                subDivisionTransforms.forEach(function(subDivisionTransform) {
                    subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                });
                return subDivisionTransforms;
            }
        },
        {
            key: "createFootnotesListTransform",
            value: function createFootnotesListTransform(footnoteTransformMap, context) {
                var footnoteDivisionTransforms = this.findDivisionTransforms(_footnote1.default, context);
                footnoteDivisionTransforms.forEach(function(footnoteDivisionTransform) {
                    var footnoteTransform = _footnote.default.fromFootnoteDivisionTransform(footnoteDivisionTransform), identifier = footnoteDivisionTransform.identifier(context);
                    footnoteTransformMap[identifier] = footnoteTransform;
                });
                var divisionMarkdownNode = this, footnotesListDivisionTransform = _footnotesList.default.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
                return footnotesListDivisionTransform;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return SubDivisionMarkdownNode;
}(_markdown.default);
function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
    var markdownNode;
    var indexAnchorTransform = _indexAnchor.default.fromPageNumber(pageNumber, context), divisionMarkdownNode = SubDivisionMarkdownNode.fromPaginatedChildNodesDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context), anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();
    divisionMarkdownNode.setPageNumber(pageNumber);
    markdownNode = anchorMarkdownNode; ///
    markdownNodes.push(markdownNode);
    markdownNode = divisionMarkdownNode; ///
    markdownNodes.push(markdownNode);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEluZGV4VHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaW5kZXhcIjtcbmltcG9ydCBGb290bm90ZVRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhBbmNob3JUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9pbmRleEFuY2hvclwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRW1iZWREaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9lbWJlZERpcmVjdGl2ZXNcIjtcbmltcG9ydCBJbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5kZXhEaXJlY3RpdmVcIjtcbmltcG9ydCBDb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2Zvb3Rub3Rlc0RpcmVjdGl2ZVwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcbmltcG9ydCB7IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLCBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGNsZWFyLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmVJbmNsdWRlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtID0gSW5jbHVkZURpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgLy8gICAgICAgICBlbWJlZERpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybSA9IEVtYmVkRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGVtYmVkRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBlbWJlZERpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybS5yZXBsYWNlRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gIC8vICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGlnbm9yZWQgPSAoaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBpZ25vcmVkO1xuICB9XG5cbiAgLy8gZ2V0UGFnZU51bWJlcigpIHtcbiAgLy8gICBsZXQgcGFnZU51bWJlciA9IG51bGw7XG4gIC8vXG4gIC8vICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKTtcbiAgLy9cbiAgLy8gICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUuZ2V0UGFnZU51bWJlcigpO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gcGFnZU51bWJlcjtcbiAgLy8gfVxuICAvL1xuICAvLyBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgLy8gICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5maW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuICAvL1xuICAvLyAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHBhZ2luYXRlKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoRm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpLFxuICAvLyAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSxcbiAgLy8gICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBbXG4gIC8vICAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSxcbiAgLy8gICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybVxuICAvLyAgICAgICAgIF07XG4gIC8vXG4gIC8vICAgZmlsdGVyKHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgKHN1YkRpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4gIC8vICAgICBpZiAoc3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4gIC8vICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlcyA9IFtdO1xuICAvL1xuICAvLyAgIGxldCB7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQsXG4gIC8vICAgICAgIHRvdGFsTGluZXMgPSAwO1xuICAvL1xuICAvLyAgIHRoaXMuZm9yRWFjaENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBsaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmICgodG90YWxMaW5lcyArIGxpbmVzKSA+IGxpbmVzUGVyUGFnZSkge1xuICAvLyAgICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICAgIHBhZ2VOdW1iZXIrKztcbiAgLy9cbiAgLy8gICAgICAgdG90YWxMaW5lcyA9IDA7XG4gIC8vXG4gIC8vICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgY29uc3QgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG4gIC8vXG4gIC8vICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzLnB1c2gocGFnaW5hdGVkQ2hpbGROb2RlKTtcbiAgLy9cbiAgLy8gICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4gIC8vICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBwYWdlTnVtYmVyKys7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAvLyAgICAgcGFnZU51bWJlclxuICAvLyAgIH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNyZWF0ZUluZGV4KGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAvLyAgIGxldCBpbmRleENyZWF0ZWQgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oSW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgICAgaW5kZXhUcmFuc2Zvcm0gPSBJbmRleFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAoaW5kZXhUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgaW5kZXhUcmFuc2Zvcm0ucmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgICBpbmRleENyZWF0ZWQgPSB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gaW5kZXhDcmVhdGVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAvLyAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oQ29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtID0gQ29udGVudHNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmIChjb250ZW50c0xpc3RUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtLnJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgY29udGVudHNDcmVhdGVkID0gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKEZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0ucmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vICAgICB9XG4gIC8vXG4gIC8vICAgICByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gcHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZXMoRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAvLyAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSxcbiAgLy8gICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgZmluZERpdmlzaW9uVHJhbnNmb3JtKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IERpdmlzaW9uVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxuXG4gIGZpbmREaXZpc2lvblRyYW5zZm9ybXMoRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMucmVkdWNlKChzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IERpdmlzaW9uVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMucHVzaChzdWJEaXZpc2lvblRyYW5zZm9ybSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uVHJhbnNmb3JtcztcbiAgfVxuXG4gIGZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpIHtcbiAgICBsZXQgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cblxuICByZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZXMoRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtcyhEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG5cbiAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtLnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdFRyYW5zZm9ybShmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm1zKEZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuXG4gICAgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGZvb3Rub3RlVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVUcmFuc2Zvcm07XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5mdW5jdGlvbiBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbiAgbGV0IG1hcmtkb3duTm9kZTtcblxuICBjb25zdCBpbmRleEFuY2hvclRyYW5zZm9ybSA9IEluZGV4QW5jaG9yVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpLFxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzRGl2aXNpb25UcmFuc2Zvcm1zQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4gICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IGluZGV4QW5jaG9yVHJhbnNmb3JtLmdldEFuY2hvck1hcmtkb3duTm9kZSgpO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgbWFya2Rvd25Ob2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG5cbiAgbWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xufSJdLCJuYW1lcyI6WyJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJyZXNvbHZlSW5jbHVkZXMiLCJjb250ZXh0IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtIiwiSW5jbHVkZURpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImZpbmREaXZpc2lvblRyYW5zZm9ybSIsIkRpdmlzaW9uVHJhbnNmb3JtIiwic3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmaW5kRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic29tZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZmluZERpdmlzaW9uVHJhbnNmb3JtcyIsInN1YkRpdmlzaW9uVHJhbnNmb3JtcyIsInJlZHVjZSIsInB1c2giLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZvckVhY2giLCJjcmVhdGVGb290bm90ZXNMaXN0VHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm1NYXAiLCJmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyIsIkZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm0iLCJGb290bm90ZVRyYW5zZm9ybSIsImZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiaWRlbnRpZmllciIsImZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsInBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUiLCJwYWdpbmF0ZWRDaGlsZE5vZGVzIiwiZGl2aXNpb25DbGFzc05hbWUiLCJtYXJrZG93bk5vZGVzIiwicGFnZU51bWJlciIsIm1hcmtkb3duTm9kZSIsImluZGV4QW5jaG9yVHJhbnNmb3JtIiwiSW5kZXhBbmNob3JUcmFuc2Zvcm0iLCJmcm9tUGFnZU51bWJlciIsImZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzRGl2aXNpb25UcmFuc2Zvcm1zQW5kRGl2aXNpb25DbGFzc05hbWUiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJnZXRBbmNob3JNYXJrZG93bk5vZGUiLCJzZXRQYWdlTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXVCcUJBOzs7eUJBckJVOytEQUVOOzREQUNFOytEQUNHO2tFQUNHO21FQUNDO29FQUNDO2dFQUNHO3NFQUNPO3FFQUNEO3dFQUNHO3lFQUNDOzBFQUNDO3lCQUVkO3lCQUNlO3FCQUM2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvSCxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxPQUFPO2dCQUNyQixJQUFNQyx1QkFBdUIsSUFBSSxFQUMzQkMscUNBQXFDQyxtQ0FBbUNDLHdCQUF3QixDQUFDSCxzQkFBc0JEO2dCQUU3SCxJQUFJRSx1Q0FBdUMsTUFBTTtvQkFDL0NBLG1DQUFtQ0csMEJBQTBCLENBQUNKLHNCQUFzQkQ7Z0JBQ3RGO1lBQ0Y7OztZQUVBLHFEQUFxRDtZQUNyRCwyQ0FBMkM7WUFDM0MsdUlBQXVJO1lBQ3ZJLEVBQUU7WUFDRixx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