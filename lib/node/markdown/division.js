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
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(divisionMarkdownNode, context) {
                var divisionMarkdownNode = this, embedDirectivesDivisionTransform = _embedDirectives.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                if (embedDirectivesDivisionTransform !== null) {
                    var subDivisionMarkdownNodes = embedDirectivesDivisionTransform.replaceDivisionMarkdownNode(divisionMarkdownNode, context);
                    subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                        subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
                    });
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEluZGV4VHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaW5kZXhcIjtcbmltcG9ydCBGb290bm90ZVRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhBbmNob3JUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9pbmRleEFuY2hvclwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRW1iZWREaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9lbWJlZERpcmVjdGl2ZXNcIjtcbmltcG9ydCBJbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5jbHVkZURpcmVjdGl2ZXNcIjtcbmltcG9ydCBJbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5kZXhEaXJlY3RpdmVcIjtcbmltcG9ydCBDb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2Zvb3Rub3Rlc0RpcmVjdGl2ZVwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcbmltcG9ydCB7IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLCBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGNsZWFyLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmVJbmNsdWRlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtID0gSW5jbHVkZURpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybSA9IEVtYmVkRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoZW1iZWREaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGVtYmVkRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtLnJlcGxhY2VEaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGlnbm9yZWQgPSAoaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBpZ25vcmVkO1xuICB9XG5cbiAgLy8gZ2V0UGFnZU51bWJlcigpIHtcbiAgLy8gICBsZXQgcGFnZU51bWJlciA9IG51bGw7XG4gIC8vXG4gIC8vICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKTtcbiAgLy9cbiAgLy8gICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUuZ2V0UGFnZU51bWJlcigpO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gcGFnZU51bWJlcjtcbiAgLy8gfVxuICAvL1xuICAvLyBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgLy8gICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5maW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuICAvL1xuICAvLyAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHBhZ2luYXRlKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoRm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpLFxuICAvLyAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSxcbiAgLy8gICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBbXG4gIC8vICAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSxcbiAgLy8gICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybVxuICAvLyAgICAgICAgIF07XG4gIC8vXG4gIC8vICAgZmlsdGVyKHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgKHN1YkRpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4gIC8vICAgICBpZiAoc3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4gIC8vICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlcyA9IFtdO1xuICAvL1xuICAvLyAgIGxldCB7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQsXG4gIC8vICAgICAgIHRvdGFsTGluZXMgPSAwO1xuICAvL1xuICAvLyAgIHRoaXMuZm9yRWFjaENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBsaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmICgodG90YWxMaW5lcyArIGxpbmVzKSA+IGxpbmVzUGVyUGFnZSkge1xuICAvLyAgICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICAgIHBhZ2VOdW1iZXIrKztcbiAgLy9cbiAgLy8gICAgICAgdG90YWxMaW5lcyA9IDA7XG4gIC8vXG4gIC8vICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgY29uc3QgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG4gIC8vXG4gIC8vICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzLnB1c2gocGFnaW5hdGVkQ2hpbGROb2RlKTtcbiAgLy9cbiAgLy8gICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4gIC8vICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBwYWdlTnVtYmVyKys7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAvLyAgICAgcGFnZU51bWJlclxuICAvLyAgIH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNyZWF0ZUluZGV4KGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAvLyAgIGxldCBpbmRleENyZWF0ZWQgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oSW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgICAgaW5kZXhUcmFuc2Zvcm0gPSBJbmRleFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAoaW5kZXhUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgaW5kZXhUcmFuc2Zvcm0ucmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgICBpbmRleENyZWF0ZWQgPSB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gaW5kZXhDcmVhdGVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAvLyAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oQ29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtID0gQ29udGVudHNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmIChjb250ZW50c0xpc3RUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtLnJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgY29udGVudHNDcmVhdGVkID0gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKEZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0ucmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vICAgICB9XG4gIC8vXG4gIC8vICAgICByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gcHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZXMoRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAvLyAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSxcbiAgLy8gICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgZmluZERpdmlzaW9uVHJhbnNmb3JtKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IERpdmlzaW9uVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxuXG4gIGZpbmREaXZpc2lvblRyYW5zZm9ybXMoRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMucmVkdWNlKChzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IERpdmlzaW9uVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMucHVzaChzdWJEaXZpc2lvblRyYW5zZm9ybSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uVHJhbnNmb3JtcztcbiAgfVxuXG4gIGZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpIHtcbiAgICBsZXQgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cblxuICByZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZXMoRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtcyhEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG5cbiAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtLnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdFRyYW5zZm9ybShmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm1zKEZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuXG4gICAgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGZvb3Rub3RlVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVUcmFuc2Zvcm07XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KSB7XG4gIGxldCBtYXJrZG93bk5vZGU7XG5cbiAgY29uc3QgaW5kZXhBbmNob3JUcmFuc2Zvcm0gPSBJbmRleEFuY2hvclRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyLCBjb250ZXh0KSxcbiAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc0RpdmlzaW9uVHJhbnNmb3Jtc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpLFxuICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBpbmRleEFuY2hvclRyYW5zZm9ybS5nZXRBbmNob3JNYXJrZG93bk5vZGUoKTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gIG1hcmtkb3duTm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZTsgIC8vL1xuXG4gIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xuXG4gIG1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICBtYXJrZG93bk5vZGVzLnB1c2gobWFya2Rvd25Ob2RlKTtcbn0iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwicmVzb2x2ZUluY2x1ZGVzIiwiY29udGV4dCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybSIsIkluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlc29sdmVFbWJlZGRpbmdzIiwiZW1iZWREaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0iLCJFbWJlZERpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInJlcGxhY2VEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvckVhY2giLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsYXNzTmFtZSIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImZpbmREaXZpc2lvblRyYW5zZm9ybSIsIkRpdmlzaW9uVHJhbnNmb3JtIiwic3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJmaW5kRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic29tZSIsImZpbmREaXZpc2lvblRyYW5zZm9ybXMiLCJzdWJEaXZpc2lvblRyYW5zZm9ybXMiLCJyZWR1Y2UiLCJwdXNoIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjcmVhdGVGb290bm90ZXNMaXN0VHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm1NYXAiLCJmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyIsIkZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm0iLCJGb290bm90ZVRyYW5zZm9ybSIsImZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiaWRlbnRpZmllciIsImZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcCIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwicGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZSIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJtYXJrZG93bk5vZGVzIiwicGFnZU51bWJlciIsIm1hcmtkb3duTm9kZSIsImluZGV4QW5jaG9yVHJhbnNmb3JtIiwiSW5kZXhBbmNob3JUcmFuc2Zvcm0iLCJmcm9tUGFnZU51bWJlciIsImZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzRGl2aXNpb25UcmFuc2Zvcm1zQW5kRGl2aXNpb25DbGFzc05hbWUiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJnZXRBbmNob3JNYXJrZG93bk5vZGUiLCJzZXRQYWdlTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXdCcUJBOzs7eUJBdEJVOytEQUVOOzREQUNFOytEQUNHO2tFQUNHO21FQUNDO29FQUNDO2dFQUNHO3NFQUNPO3dFQUNFO3FFQUNIO3dFQUNHO3lFQUNDOzBFQUNDO3lCQUVkO3lCQUNlO3FCQUM2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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