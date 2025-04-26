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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/footnote"));
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/footnotesList"));
var _ignoreDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/ignoreDirective"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/footnote"));
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
var DivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DivisionMarkdownNode, MarkdownNode);
    function DivisionMarkdownNode(ruleName, parentNode, childNodes, opacity, precedence, divisionClassName) {
        _class_call_check(this, DivisionMarkdownNode);
        var _this;
        _this = _call_super(this, DivisionMarkdownNode, [
            ruleName,
            parentNode,
            childNodes,
            opacity,
            precedence
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
            key: "resolveIgnored",
            value: function resolveIgnored(topmostMarkdownNode, context) {
                var ignored = this.isIgnored();
                if (!ignored) {
                    return;
                }
                var divisionMarkdownNode = this, ignoreDirectiveTransform = _ignoreDirective.default.fromDivisionMarkdownNode(divisionMarkdownNode);
                ignoreDirectiveTransform.removeFromTopmostMarkdownNode(topmostMarkdownNode, context);
            }
        },
        {
            key: "resolveIncludes",
            value: function resolveIncludes(topmostMarkdownNode, context) {
                var node = this, includeDirectiveMarkdownNodes = (0, _query.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveTransforms = includeDirectiveMarkdownNodes.reduce(function(includeDirectiveTransforms, includeDirectiveMarkdownNode) {
                    var includeDirectiveTransform = includeDirectiveMarkdownNode.resolveInclude(context);
                    if (includeDirectiveTransform !== null) {
                        includeDirectiveTransforms.push(includeDirectiveTransform);
                    }
                    return includeDirectiveTransforms;
                }, []);
                includeDirectiveTransforms.forEach(function(includeDirectiveTransform) {
                    var divisionMarkdownNode = includeDirectiveTransform.appendToTopmostMarkdownNode(topmostMarkdownNode, context);
                    divisionMarkdownNode.resolveIncludes(topmostMarkdownNode, context);
                });
            }
        },
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(context) {
                var divisionMarkdownNode = this; ///
                this.forEachSubDivisionMarkdownNode(function(subDivisionMarkdownNode) {
                    var embeddingsResolved = subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
                    if (embeddingsResolved) {
                        var subDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode);
                        subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                    }
                });
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
            key: "getSubDivisionMarkdownNodes",
            value: function getSubDivisionMarkdownNodes() {
                var node = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                return subDivisionMarkdownNodes;
            }
        },
        {
            key: "forEachSubDivisionMarkdownNode",
            value: function forEachSubDivisionMarkdownNode(callback) {
                var subDivisionMarkdownNodes = this.getSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.forEach(callback);
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(subDivisionMarkdownNode) {
                var childNode = subDivisionMarkdownNode; ///
                this.removeChildNode(childNode);
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
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
} // function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
 //   let markdownNode;
 //
 //   const indexAnchorTransform = IndexAnchorTransform.fromPageNumber(pageNumber, context),
 //         divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context),
 //         anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();
 //
 //   divisionMarkdownNode.setPageNumber(pageNumber);
 //
 //   markdownNode = anchorMarkdownNode;  ///
 //
 //   markdownNodes.push(markdownNode);
 //
 //   markdownNode = divisionMarkdownNode; ///
 //
 //   markdownNodes.push(markdownNode);
 // }
(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9mb290bm90ZVwiO1xuaW1wb3J0IFN1YkRpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb25cIjtcbmltcG9ydCBGb290bm90ZXNMaXN0VHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vZm9vdG5vdGVzTGlzdFwiO1xuaW1wb3J0IElnbm9yZURpcmVjdGl2ZVRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2lnbm9yZURpcmVjdGl2ZVwiO1xuaW1wb3J0IEZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9mb290bm90ZVwiO1xuXG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLFxuICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIHJlc29sdmVJZ25vcmVkKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5pc0lnbm9yZWQoKTtcblxuICAgIGlmICghaWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlnbm9yZURpcmVjdGl2ZVRyYW5zZm9ybSA9IElnbm9yZURpcmVjdGl2ZVRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgaWdub3JlRGlyZWN0aXZlVHJhbnNmb3JtLnJlbW92ZUZyb21Ub3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmVzb2x2ZUluY2x1ZGVzKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtcyA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLnJlZHVjZSgoaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybXMsIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0gPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3Jtcy5wdXNoKGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybXMuZm9yRWFjaCgoaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtLmFwcGVuZFRvVG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5mb3JFYWNoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBlbWJlZGRpbmdzUmVzb2x2ZWQgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChlbWJlZGRpbmdzUmVzb2x2ZWQpIHtcbiAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBTdWJEaXZpc2lvblRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpXG5cbiAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIGdldFBhZ2VOdW1iZXIoKSB7XG4gIC8vICAgbGV0IHBhZ2VOdW1iZXIgPSBudWxsO1xuICAvL1xuICAvLyAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCk7XG4gIC8vXG4gIC8vICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmdldFBhZ2VOdW1iZXIoKTtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIC8vIH1cbiAgLy9cbiAgLy8gc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gIC8vICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKTtcbiAgLy9cbiAgLy8gICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZS5zZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyBwYWdpbmF0ZShtYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSxcbiAgLy8gICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKFBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCksXG4gIC8vICAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm1zID0gW1xuICAvLyAgICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sXG4gIC8vICAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm1cbiAgLy8gICAgICAgICBdO1xuICAvL1xuICAvLyAgIGZpbHRlcihzdWJEaXZpc2lvblRyYW5zZm9ybXMsIChzdWJEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAvLyAgICAgaWYgKHN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgIHJldHVybiB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGNvbnN0IHsgbGluZXNQZXJQYWdlIH0gPSBjb250ZXh0LFxuICAvLyAgICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMgPSBbXTtcbiAgLy9cbiAgLy8gICBsZXQgeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0LFxuICAvLyAgICAgICB0b3RhbExpbmVzID0gMDtcbiAgLy9cbiAgLy8gICB0aGlzLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAvLyAgICAgY29uc3QgbGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAoKHRvdGFsTGluZXMgKyBsaW5lcykgPiBsaW5lc1BlclBhZ2UpIHtcbiAgLy8gICAgICAgcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgICBwYWdlTnVtYmVyKys7XG4gIC8vXG4gIC8vICAgICAgIHRvdGFsTGluZXMgPSAwO1xuICAvL1xuICAvLyAgICAgICBjbGVhcihwYWdpbmF0ZWRDaGlsZE5vZGVzKTtcbiAgLy8gICAgIH1cbiAgLy9cbiAgLy8gICAgIGNvbnN0IHBhZ2luYXRlZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuICAvL1xuICAvLyAgICAgcGFnaW5hdGVkQ2hpbGROb2Rlcy5wdXNoKHBhZ2luYXRlZENoaWxkTm9kZSk7XG4gIC8vXG4gIC8vICAgICB0b3RhbExpbmVzICs9IGxpbmVzO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGlmICh0b3RhbExpbmVzID4gMCkge1xuICAvLyAgICAgcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgcGFnZU51bWJlcisrO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgLy8gICAgIHBhZ2VOdW1iZXJcbiAgLy8gICB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVJbmRleChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgLy8gICBsZXQgaW5kZXhDcmVhdGVkID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgY29uc3QgaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKEluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICAgIGluZGV4VHJhbnNmb3JtID0gSW5kZXhUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKGluZGV4VHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgIGluZGV4VHJhbnNmb3JtLnJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgaW5kZXhDcmVhdGVkID0gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIGluZGV4Q3JlYXRlZDtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVDb250ZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgLy8gICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgY29uc3QgY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKENvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICAgIGNvbnRlbnRzTGlzdFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAoY29udGVudHNMaXN0VHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgIGNvbnRlbnRzTGlzdFRyYW5zZm9ybS5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybShjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY3JlYXRlRm9vdG5vdGVzKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybShGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICAgIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmIChmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtLnJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgcmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHByZXBhcmVGb290bm90ZXMoZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGVzKEZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgLy8gICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtID0gRm9vdG5vdGVUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSksXG4gIC8vICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgZm9vdG5vdGVUcmFuc2Zvcm1NYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVRyYW5zZm9ybTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGZpbmREaXZpc2lvblRyYW5zZm9ybShEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgIGxldCBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBEaXZpc2lvblRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cblxuICBmaW5kRGl2aXNpb25UcmFuc2Zvcm1zKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kRGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm1zID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnJlZHVjZSgoc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBEaXZpc2lvblRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLnB1c2goc3ViRGl2aXNpb25UcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybXM7XG4gIH1cblxuICBmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpIHtcbiAgICBsZXQgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBmb3JFYWNoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0oZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtcyhGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtID0gRm9vdG5vdGVUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KSB7XG4vLyAgIGxldCBtYXJrZG93bk5vZGU7XG4vL1xuLy8gICBjb25zdCBpbmRleEFuY2hvclRyYW5zZm9ybSA9IEluZGV4QW5jaG9yVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpLFxuLy8gICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzRGl2aXNpb25UcmFuc2Zvcm1zQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4vLyAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IGluZGV4QW5jaG9yVHJhbnNmb3JtLmdldEFuY2hvck1hcmtkb3duTm9kZSgpO1xuLy9cbi8vICAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbi8vXG4vLyAgIG1hcmtkb3duTm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZTsgIC8vL1xuLy9cbi8vICAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG4vL1xuLy8gICBtYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG4vL1xuLy8gICBtYXJrZG93bk5vZGVzLnB1c2gobWFya2Rvd25Ob2RlKTtcbi8vIH0iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsInJlc29sdmVJZ25vcmVkIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlVHJhbnNmb3JtIiwiSWdub3JlRGlyZWN0aXZlVHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVtb3ZlRnJvbVRvcG1vc3RNYXJrZG93bk5vZGUiLCJyZXNvbHZlSW5jbHVkZXMiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtcyIsInJlZHVjZSIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtIiwicmVzb2x2ZUluY2x1ZGUiLCJwdXNoIiwiZm9yRWFjaCIsImFwcGVuZFRvVG9wbW9zdE1hcmtkb3duTm9kZSIsInJlc29sdmVFbWJlZGRpbmdzIiwiZm9yRWFjaFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJlbWJlZGRpbmdzUmVzb2x2ZWQiLCJzdWJEaXZpc2lvblRyYW5zZm9ybSIsIlN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZmluZERpdmlzaW9uVHJhbnNmb3JtIiwiRGl2aXNpb25UcmFuc2Zvcm0iLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmaW5kRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic29tZSIsImZpbmREaXZpc2lvblRyYW5zZm9ybXMiLCJzdWJEaXZpc2lvblRyYW5zZm9ybXMiLCJmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImNhbGxiYWNrIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJjcmVhdGVGb290bm90ZXNMaXN0VHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm1NYXAiLCJmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyIsIkZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm0iLCJGb290bm90ZVRyYW5zZm9ybSIsImZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiaWRlbnRpZmllciIsImZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcCIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGlu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