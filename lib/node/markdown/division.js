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
var _embedDirectives = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/embedDirectives"));
var _includeDirectives = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/includeDirectives"));
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
var DivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DivisionMarkdownNode, MarkdownNode);
    function DivisionMarkdownNode() {
        _class_call_check(this, DivisionMarkdownNode);
        return _call_super(this, DivisionMarkdownNode, arguments);
    }
    _create_class(DivisionMarkdownNode, [
        {
            key: "resolveIncludes",
            value: function resolveIncludes(context) {
                var divisionMarkdownNode = this, includeDirectivesDivisionTransform = _includeDirectives.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
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
                return _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);
function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
    var markdownNode;
    var indexAnchorTransform = _indexAnchor.default.fromPageNumber(pageNumber, context), divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context), anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();
    divisionMarkdownNode.setPageNumber(pageNumber);
    markdownNode = anchorMarkdownNode; ///
    markdownNodes.push(markdownNode);
    markdownNode = divisionMarkdownNode; ///
    markdownNodes.push(markdownNode);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEluZGV4VHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaW5kZXhcIjtcbmltcG9ydCBGb290bm90ZVRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhBbmNob3JUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9pbmRleEFuY2hvclwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRW1iZWREaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9lbWJlZERpcmVjdGl2ZXNcIjtcbmltcG9ydCBJbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5jbHVkZURpcmVjdGl2ZXNcIjtcbmltcG9ydCBJbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5kZXhEaXJlY3RpdmVcIjtcbmltcG9ydCBDb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2Zvb3Rub3Rlc0RpcmVjdGl2ZVwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcbmltcG9ydCB7IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLCBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGNsZWFyLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmVJbmNsdWRlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtID0gSW5jbHVkZURpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgLy8gICAgICAgICBlbWJlZERpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybSA9IEVtYmVkRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGVtYmVkRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBlbWJlZERpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybS5yZXBsYWNlRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gIC8vICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgaXNJZ25vcmVkKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICAvLyBnZXRQYWdlTnVtYmVyKCkge1xuICAvLyAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcbiAgLy9cbiAgLy8gICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5maW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuICAvL1xuICAvLyAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAvLyB9XG4gIC8vXG4gIC8vIHNldFBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAvLyAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCk7XG4gIC8vXG4gIC8vICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gcGFnaW5hdGUobWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCksXG4gIC8vICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpLFxuICAvLyAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtcyA9IFtcbiAgLy8gICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLFxuICAvLyAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtXG4gIC8vICAgICAgICAgXTtcbiAgLy9cbiAgLy8gICBmaWx0ZXIoc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCAoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgLy8gICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgLy8gICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW107XG4gIC8vXG4gIC8vICAgbGV0IHsgcGFnZU51bWJlciB9ID0gY29udGV4dCxcbiAgLy8gICAgICAgdG90YWxMaW5lcyA9IDA7XG4gIC8vXG4gIC8vICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKCh0b3RhbExpbmVzICsgbGluZXMpID4gbGluZXNQZXJQYWdlKSB7XG4gIC8vICAgICAgIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgcGFnZU51bWJlcisrO1xuICAvL1xuICAvLyAgICAgICB0b3RhbExpbmVzID0gMDtcbiAgLy9cbiAgLy8gICAgICAgY2xlYXIocGFnaW5hdGVkQ2hpbGROb2Rlcyk7XG4gIC8vICAgICB9XG4gIC8vXG4gIC8vICAgICBjb25zdCBwYWdpbmF0ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cbiAgLy9cbiAgLy8gICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuICAvL1xuICAvLyAgICAgdG90YWxMaW5lcyArPSBsaW5lcztcbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICBpZiAodG90YWxMaW5lcyA+IDApIHtcbiAgLy8gICAgIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIHBhZ2VOdW1iZXIrKztcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gIC8vICAgICBwYWdlTnVtYmVyXG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY3JlYXRlSW5kZXgoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIC8vICAgbGV0IGluZGV4Q3JlYXRlZCA9IGZhbHNlO1xuICAvL1xuICAvLyAgIGNvbnN0IGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybShJbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgICBpbmRleFRyYW5zZm9ybSA9IEluZGV4VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmIChpbmRleFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBpbmRleFRyYW5zZm9ybS5yZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybShpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICAgIGluZGV4Q3JlYXRlZCA9IHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBpbmRleENyZWF0ZWQ7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY3JlYXRlQ29udGVudHMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIC8vICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuICAvL1xuICAvLyAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybShDb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0gPSBDb250ZW50c0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKGNvbnRlbnRzTGlzdFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0ucmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gY29udGVudHNDcmVhdGVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oRm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgICBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAoZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybS5yZXBsYWNlRm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy8gICAgIH1cbiAgLy9cbiAgLy8gICAgIHJlbnVtYmVyRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyBwcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMgPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlcyhGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBmb290bm90ZURpdmlzaW9uVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4gIC8vICAgICBjb25zdCBmb290bm90ZVRyYW5zZm9ybSA9IEZvb3Rub3RlVHJhbnNmb3JtLmZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pLFxuICAvLyAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0uaWRlbnRpZmllcihjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGZvb3Rub3RlVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVUcmFuc2Zvcm07XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBmaW5kRGl2aXNpb25UcmFuc2Zvcm0oRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gRGl2aXNpb25UcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uVHJhbnNmb3JtO1xuICB9XG5cbiAgZmluZERpdmlzaW9uVHJhbnNmb3JtcyhEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5yZWR1Y2UoKHN1YkRpdmlzaW9uVHJhbnNmb3Jtcywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gRGl2aXNpb25UcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3Jtcy5wdXNoKHN1YkRpdmlzaW9uVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN1YkRpdmlzaW9uVHJhbnNmb3JtcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuICB9XG5cbiAgZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCkge1xuICAgIGxldCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgcmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybS5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxuXG4gIHJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlcyhEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vXG4gICAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm1zKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIHN1YkRpdmlzaW9uVHJhbnNmb3Jtcy5mb3JFYWNoKChzdWJEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybXM7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0VHJhbnNmb3JtKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMgPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybXMoRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG5cbiAgICBmb290bm90ZURpdmlzaW9uVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4gICAgICBjb25zdCBmb290bm90ZVRyYW5zZm9ybSA9IEZvb3Rub3RlVHJhbnNmb3JtLmZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0uaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgZm9vdG5vdGVUcmFuc2Zvcm1NYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVRyYW5zZm9ybTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZGl2aXNpb25DbGFzc05hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5mdW5jdGlvbiBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbiAgbGV0IG1hcmtkb3duTm9kZTtcblxuICBjb25zdCBpbmRleEFuY2hvclRyYW5zZm9ybSA9IEluZGV4QW5jaG9yVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpLFxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzRGl2aXNpb25UcmFuc2Zvcm1zQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4gICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IGluZGV4QW5jaG9yVHJhbnNmb3JtLmdldEFuY2hvck1hcmtkb3duTm9kZSgpO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgbWFya2Rvd25Ob2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG5cbiAgbWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xufSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJyZXNvbHZlSW5jbHVkZXMiLCJjb250ZXh0IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtIiwiSW5jbHVkZURpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2xhc3NOYW1lIiwiZGl2aXNpb25DbGFzc05hbWUiLCJpc0lnbm9yZWQiLCJub2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwiZmluZERpdmlzaW9uVHJhbnNmb3JtIiwiRGl2aXNpb25UcmFuc2Zvcm0iLCJzdWJEaXZpc2lvblRyYW5zZm9ybSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzb21lIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmaW5kRGl2aXNpb25UcmFuc2Zvcm1zIiwic3ViRGl2aXNpb25UcmFuc2Zvcm1zIiwicmVkdWNlIiwicHVzaCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwicmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJmb290bm90ZVRyYW5zZm9ybU1hcCIsImZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zIiwiRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSIsImZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJmb290bm90ZVRyYW5zZm9ybSIsIkZvb3Rub3RlVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtIiwiRm9vdG5vdGVzTGlzdFRyYW5zZm9ybSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwicGFnaW5hdGVkQ2hpbGROb2RlcyIsIm1hcmtkb3duTm9kZXMiLCJwYWdlTnVtYmVyIiwibWFya2Rvd25Ob2RlIiwiaW5kZXhBbmNob3JUcmFuc2Zvcm0iLCJJbmRleEFuY2hvclRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyIiwiZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNEaXZpc2lvblRyYW5zZm9ybXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsImFuY2hvck1hcmtkb3duTm9kZSIsImdldEFuY2hvck1hcmtkb3duTm9kZSIsInNldFBhZ2VOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBd0JxQkE7Ozt5QkF0QlU7K0RBRU47NERBQ0U7K0RBQ0c7a0VBQ0c7bUVBQ0M7b0VBQ0M7Z0VBQ0c7c0VBQ087d0VBQ0U7cUVBQ0g7d0VBQ0c7eUVBQ0M7MEVBQ0M7eUJBRWQ7eUJBQ2U7cUJBQzZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0gsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkksS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsT0FBTztnQkFDckIsSUFBTUMsdUJBQXVCLElBQUksRUFDM0JDLHFDQUFxQ0MsMEJBQWtDLENBQUNDLHdCQUF3QixDQUFDSCxzQkFBc0JEO2dCQUU3SCxJQUFJRSx1Q0FBdUMsTUFBTTtvQkFDL0NBLG1DQUFtQ0csMEJBQTBCLENBQUNKLHNCQUFzQkQ7Z0JBQ3RGO1lBQ0Y7OztZQUVBLHFEQUFxRDtZQUNyRCwyQ0FBMkM7WUFDM0MsdUlBQXVJO1lBQ3ZJLEVBQUU7WUFDRixxREFBcUQ7WUFDckQsb0lBQW9JO1lBQ3BJLEVBQUU7WUFDRixzRUFBc0U7WUFDdEUsa0ZBQWtGO1lBQ2xGLFVBQVU7WUFDVixNQUFNO1lBQ04sSUFBSTtZQUVKTSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVU4sT0FBTztnQkFDZixJQUFNTSxZQUFZLElBQUksQ0FBQ0MsaUJBQWlCLEVBQUUsR0FBRztnQkFFN0MsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksRUFDWEMsOEJBQThCQyxJQUFBQSwwQ0FBbUMsRUFBQ0YsT0FDbEVHLFVBQVdGLGdDQUFnQztnQkFFakQsT0FBT0U7WUFDVDs7O1lBRUEsb0JBQW9CO1lBQ3BCLDJCQUEyQjtZQUMzQixFQUFFO1lBQ0Ysd0ZBQXdGO1lBQ3hGLEVBQUU7WUFDRixvREFBb0Q7WUFDcEQsb0VBQW9FO1lBQ3BFLE1BQU07WUFDTixFQUFFO1lBQ0YsdUJBQXVCO1lBQ3ZCLElBQUk7WUFDSixFQUFFO1lBQ0YsOEJBQThCO1lBQzlCLHdGQUF3RjtZQUN4RixFQUFFO1lBQ0Ysb0RBQW9EO1lBQ3BELGlFQUFpRTtZQUNqRSxNQUFNO1lBQ04sSUFBSTtZQUNKLEVBQUU7WUFDRixxQ0FBcUM7WUFDckMsK0hBQStIO1lBQy9ILGlJQUFpSTtZQUNqSSxvQ0FBb0M7WUFDcEMsaURBQWlEO1lBQ2pELGlEQUFpRDtZQUNqRCxhQUFhO1lBQ2IsRUFBRTtZQUNGLDhEQUE4RDtZQUM5RCwyQ0FBMkM7WUFDM0MscUJBQXFCO1lBQ3JCLFFBQVE7WUFDUixRQUFRO1lBQ1IsRUFBRTtZQUNGLHNDQUFzQztZQUN0QyxvQ0FBb0M7WUFDcEMsRUFBRTtZQUNGLGtDQUFrQztZQUNsQyx3QkFBd0I7WUFDeEIsRUFBRTtZQUNGLDJDQUEyQztZQUMzQyw4Q0FBOEM7WUFDOUMsRUFBRTtZQUNGLGlEQUFpRDtZQUNqRCw4SUFBOEk7WUFDOUksRUFBRTtZQUNGLHNCQUFzQjtZQUN0QixFQUFFO1lBQ0Ysd0JBQXdCO1lBQ3hCLEVBQUU7WUFDRixvQ0FBb0M7WUFDcEMsUUFBUTtZQUNSLEVBQUU7WUFDRixpREFBaUQ7WUFDakQsRUFBRTtZQUNGLG9EQUFvRDtZQUNwRCxFQUFFO1lBQ0YsMkJBQTJCO1lBQzNCLFFBQVE7WUFDUixFQUFFO1lBQ0YsMEJBQTBCO1lBQzFCLDRJQUE0STtZQUM1SSxFQUFFO1lBQ0Ysb0JBQW9CO1lBQ3BCLE1BQU07WUFDTixFQUFFO1lBQ0YsNkJBQTZCO1lBQzdCLGlCQUFpQjtZQUNqQixRQUFRO1lBQ1IsSUFBSTtZQUNKLEVBQUU7WUFDRixnREFBZ0Q7WUFDaEQsOEJBQThCO1lBQzlCLEVBQUU7WUFDRixrSEFBa0g7WUFDbEgsRUFBRTtZQUNGLG9EQUFvRDtZQUNwRCw4Q0FBOEM7WUFDOUMsb0pBQW9KO1lBQ3BKLEVBQUU7WUFDRixxQ0FBcUM7WUFDckMsa0lBQWtJO1lBQ2xJLEVBQUU7WUFDRiw2QkFBNkI7WUFDN0IsUUFBUTtZQUNSLE1BQU07WUFDTixFQUFFO1lBQ0YseUJBQXlCO1lBQ3pCLElBQUk7WUFDSixFQUFFO1lBQ0YsbURBQW1EO1lBQ25ELGlDQUFpQztZQUNqQyxFQUFFO1lBQ0Ysd0hBQXdIO1lBQ3hILEVBQUU7WUFDRix1REFBdUQ7WUFDdkQsOENBQThDO1lBQzlDLGtLQUFrSztZQUNsSyxFQUFFO1lBQ0YsNENBQTRDO1lBQzVDLCtJQUErSTtZQUMvSSxFQUFFO1lBQ0YsZ0NBQWdDO1lBQ2hDLFFBQVE7WUFDUixNQUFNO1lBQ04sRUFBRTtZQUNGLDRCQUE0QjtZQUM1QixJQUFJO1lBQ0osRUFBRTtZQUNGLG1EQUFtRDtZQUNuRCwwSEFBMEg7WUFDMUgsRUFBRTtZQUNGLHdEQUF3RDtZQUN4RCw4Q0FBOEM7WUFDOUMsMEtBQTBLO1lBQzFLLEVBQUU7WUFDRixxREFBcUQ7WUFDckQsdUpBQXVKO1lBQ3ZKLFFBQVE7WUFDUixFQUFFO1lBQ0YsOEZBQThGO1lBQzlGLE1BQU07WUFDTixJQUFJO1lBQ0osRUFBRTtZQUNGLG9EQUFvRDtZQUNwRCw2R0FBNkc7WUFDN0csRUFBRTtZQUNGLHdFQUF3RTtZQUN4RSw0R0FBNEc7WUFDNUcsd0VBQXdFO1lBQ3hFLEVBQUU7WUFDRiw0REFBNEQ7WUFDNUQsUUFBUTtZQUNSLElBQUk7WUFFSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsaUJBQWlCLEVBQUVkLE9BQU87Z0JBQzlDLElBQUllLHVCQUF1QjtnQkFFM0IsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MseUJBQXlCO2dCQUUvREQseUJBQXlCRSxJQUFJLENBQUMsU0FBQ0M7b0JBQzdCSix1QkFBdUJELGtCQUFrQlYsd0JBQXdCLENBQUNlLHlCQUF5Qm5CO29CQUUzRixJQUFJZSx5QkFBeUIsTUFBTTt3QkFDakMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1Qk4saUJBQWlCLEVBQUVkLE9BQU87Z0JBQy9DLElBQU1nQiwyQkFBMkIsSUFBSSxDQUFDQyx5QkFBeUIsSUFDekRJLHdCQUF3QkwseUJBQXlCTSxNQUFNLENBQUMsU0FBQ0QsdUJBQXVCRjtvQkFDOUUsSUFBTUosdUJBQXVCRCxrQkFBa0JWLHdCQUF3QixDQUFDZSx5QkFBeUJuQjtvQkFFakcsSUFBSWUseUJBQXlCLE1BQU07d0JBQ2pDTSxzQkFBc0JFLElBQUksQ0FBQ1I7b0JBQzdCO29CQUVBLE9BQU9NO2dCQUNULEdBQUcsRUFBRTtnQkFFWCxPQUFPQTtZQUNUOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLE9BQU8sSUFBSSxFQUNYTywyQkFBMkJRLElBQUFBLHVDQUFnQyxFQUFDZjtnQkFFbEUsT0FBT087WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxrQ0FBa0M7Z0JBRXRDLElBQU1WLDJCQUEyQixJQUFJLENBQUNDLHlCQUF5QjtnQkFFL0RELHlCQUF5QkUsSUFBSSxDQUFDLFNBQUNDO29CQUM3QixJQUFNVixPQUFPVSx5QkFBeUIsR0FBRztvQkFFekNPLGtDQUFrQ0MsSUFBQUEsOENBQXVDLEVBQUNsQjtvQkFFMUUsSUFBSWlCLG9DQUFvQyxNQUFNO3dCQUM1QyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBckIsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQlMsaUJBQWlCLEVBQUVkLE9BQU87Z0JBQ25ELElBQU1DLHVCQUF1QixJQUFJLEVBQzNCYyx1QkFBdUIsSUFBSSxDQUFDRixxQkFBcUIsQ0FBQ0MsbUJBQW1CZDtnQkFFM0UsSUFBSWUseUJBQXlCLE1BQU07b0JBQ2pDQSxxQkFBcUJhLDhCQUE4QixDQUFDM0Isc0JBQXNCRDtnQkFDNUU7Z0JBRUEsT0FBT2U7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJmLGlCQUFpQixFQUFFZCxPQUFPO2dCQUNwRCxJQUFNQyx1QkFBdUIsSUFBSSxFQUMzQm9CLHdCQUF3QixJQUFJLENBQUNELHNCQUFzQixDQUFDTixtQkFBbUJkO2dCQUU3RXFCLHNCQUFzQlMsT0FBTyxDQUFDLFNBQUNmO29CQUM3QkEscUJBQXFCYSw4QkFBOEIsQ0FBQzNCLHNCQUFzQkQ7Z0JBQzVFO2dCQUVBLE9BQU9xQjtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkMsb0JBQW9CLEVBQUVoQyxPQUFPO2dCQUN4RCxJQUFNaUMsNkJBQTZCLElBQUksQ0FBQ2Isc0JBQXNCLENBQUNjLGtCQUF5QixFQUFFbEM7Z0JBRTFGaUMsMkJBQTJCSCxPQUFPLENBQUMsU0FBQ0s7b0JBQ2xDLElBQU1DLG9CQUFvQkMsaUJBQWlCLENBQUNDLDZCQUE2QixDQUFDSCw0QkFDcEVJLGFBQWFKLDBCQUEwQkksVUFBVSxDQUFDdkM7b0JBRXhEZ0Msb0JBQW9CLENBQUNPLFdBQVcsR0FBR0g7Z0JBQ3JDO2dCQUVBLElBQU1uQyx1QkFBdUIsSUFBSSxFQUMzQnVDLGlDQUFpQ0Msc0JBQXNCLENBQUNDLCtDQUErQyxDQUFDekMsc0JBQXNCK0Isc0JBQXNCaEM7Z0JBRTFKLE9BQU93QztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFVLE9BQU8sdUJBMVFFaEQsaUNBMFFJZ0QsU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDcEMsaUJBQWlCO1lBQUc7Ozs7WUFFL0NxQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQTVRMUdqRCxzQkE0UWlJa0QsVUFBVUMsWUFBWUM7WUFBVTs7O1dBNVFqS3BEO0VBQTZCcUQsaUJBQVk7QUErUTlELFNBQVNDLDZCQUE2QkMsbUJBQW1CLEVBQUU3QixxQkFBcUIsRUFBRWQsaUJBQWlCLEVBQUU0QyxhQUFhLEVBQUVDLFVBQVUsRUFBRXBELE9BQU87SUFDckksSUFBSXFEO0lBRUosSUFBTUMsdUJBQXVCQyxvQkFBb0IsQ0FBQ0MsY0FBYyxDQUFDSixZQUFZcEQsVUFDdkVDLHVCQUF1Qk4scUJBQXFCOEQsNkRBQTZELENBQUNQLHFCQUFxQjdCLHVCQUF1QmQsbUJBQW1CUCxVQUN6SzBELHFCQUFxQkoscUJBQXFCSyxxQkFBcUI7SUFFckUxRCxxQkFBcUIyRCxhQUFhLENBQUNSO0lBRW5DQyxlQUFlSyxvQkFBcUIsR0FBRztJQUV2Q1AsY0FBYzVCLElBQUksQ0FBQzhCO0lBRW5CQSxlQUFlcEQsc0JBQXNCLEdBQUc7SUFFeENrRCxjQUFjNUIsSUFBSSxDQUFDOEI7QUFDckIifQ==