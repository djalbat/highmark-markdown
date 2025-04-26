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
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/subDivision"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/footnote"));
var _embedDirectives = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/embedDirectives"));
var _includeDirectives = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/includeDirectives"));
var _indexDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/indexDirective"));
var _contentsDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/contentsDirective"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/footnotesDirective"));
var _pageNumberDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/pageNumberDirective"));
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
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEluZGV4VHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaW5kZXhcIjtcbmltcG9ydCBGb290bm90ZVRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgSW5kZXhBbmNob3JUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9pbmRleEFuY2hvclwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgU3ViRGl2aXNpb25NYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vc3ViRGl2aXNpb25cIjtcbmltcG9ydCBGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vZm9vdG5vdGVcIjtcbmltcG9ydCBFbWJlZERpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uL2VtYmVkRGlyZWN0aXZlc1wiO1xuaW1wb3J0IEluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9pbmNsdWRlRGlyZWN0aXZlc1wiO1xuaW1wb3J0IEluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9pbmRleERpcmVjdGl2ZVwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9jb250ZW50c0RpcmVjdGl2ZVwiO1xuaW1wb3J0IEZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vZm9vdG5vdGVzRGlyZWN0aXZlXCI7XG5pbXBvcnQgUGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vcGFnZU51bWJlckRpcmVjdGl2ZVwiO1xuXG5pbXBvcnQgeyByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Zvb3Rub3Rlc1wiO1xuaW1wb3J0IHsgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLCBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGNsZWFyLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICByZXNvbHZlSW5jbHVkZXModG9wbW9zdE1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm1zID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMucmVkdWNlKChpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtcywgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGUoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm1zLnB1c2goaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3Jtcy5mb3JFYWNoKChpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtKSA9PiB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0uYXBwZW5kVG9Ub3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXModG9wbW9zdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGlnbm9yZWQgPSAoaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBpZ25vcmVkO1xuICB9XG5cbiAgLy8gZ2V0UGFnZU51bWJlcigpIHtcbiAgLy8gICBsZXQgcGFnZU51bWJlciA9IG51bGw7XG4gIC8vXG4gIC8vICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKTtcbiAgLy9cbiAgLy8gICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUuZ2V0UGFnZU51bWJlcigpO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gcGFnZU51bWJlcjtcbiAgLy8gfVxuICAvL1xuICAvLyBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgLy8gICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5maW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuICAvL1xuICAvLyAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHBhZ2luYXRlKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoRm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpLFxuICAvLyAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSxcbiAgLy8gICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBbXG4gIC8vICAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSxcbiAgLy8gICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybVxuICAvLyAgICAgICAgIF07XG4gIC8vXG4gIC8vICAgZmlsdGVyKHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgKHN1YkRpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4gIC8vICAgICBpZiAoc3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4gIC8vICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlcyA9IFtdO1xuICAvL1xuICAvLyAgIGxldCB7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQsXG4gIC8vICAgICAgIHRvdGFsTGluZXMgPSAwO1xuICAvL1xuICAvLyAgIHRoaXMuZm9yRWFjaENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBsaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmICgodG90YWxMaW5lcyArIGxpbmVzKSA+IGxpbmVzUGVyUGFnZSkge1xuICAvLyAgICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICAgIHBhZ2VOdW1iZXIrKztcbiAgLy9cbiAgLy8gICAgICAgdG90YWxMaW5lcyA9IDA7XG4gIC8vXG4gIC8vICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgY29uc3QgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG4gIC8vXG4gIC8vICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzLnB1c2gocGFnaW5hdGVkQ2hpbGROb2RlKTtcbiAgLy9cbiAgLy8gICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4gIC8vICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBwYWdlTnVtYmVyKys7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAvLyAgICAgcGFnZU51bWJlclxuICAvLyAgIH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNyZWF0ZUluZGV4KGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAvLyAgIGxldCBpbmRleENyZWF0ZWQgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oSW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgICAgaW5kZXhUcmFuc2Zvcm0gPSBJbmRleFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAoaW5kZXhUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgaW5kZXhUcmFuc2Zvcm0ucmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgICBpbmRleENyZWF0ZWQgPSB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gaW5kZXhDcmVhdGVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAvLyAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oQ29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtID0gQ29udGVudHNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmIChjb250ZW50c0xpc3RUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtLnJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgY29udGVudHNDcmVhdGVkID0gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKEZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0ucmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vICAgICB9XG4gIC8vXG4gIC8vICAgICByZW51bWJlckZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gcHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZXMoRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAvLyAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSxcbiAgLy8gICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgZmluZERpdmlzaW9uVHJhbnNmb3JtKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IERpdmlzaW9uVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxuXG4gIGZpbmREaXZpc2lvblRyYW5zZm9ybXMoRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMucmVkdWNlKChzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IERpdmlzaW9uVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMucHVzaChzdWJEaXZpc2lvblRyYW5zZm9ybSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uVHJhbnNmb3JtcztcbiAgfVxuXG4gIGZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpIHtcbiAgICBsZXQgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cblxuICByZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZXMoRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtcyhEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG5cbiAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtLnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdFRyYW5zZm9ybShmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm1zKEZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuXG4gICAgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGZvb3Rub3RlVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVUcmFuc2Zvcm07XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbiAgbGV0IG1hcmtkb3duTm9kZTtcblxuICBjb25zdCBpbmRleEFuY2hvclRyYW5zZm9ybSA9IEluZGV4QW5jaG9yVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpLFxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzRGl2aXNpb25UcmFuc2Zvcm1zQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4gICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IGluZGV4QW5jaG9yVHJhbnNmb3JtLmdldEFuY2hvck1hcmtkb3duTm9kZSgpO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgbWFya2Rvd25Ob2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG5cbiAgbWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xufSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJyZXNvbHZlSW5jbHVkZXMiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlIiwiY29udGV4dCIsIm5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtcyIsInJlZHVjZSIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtIiwicmVzb2x2ZUluY2x1ZGUiLCJwdXNoIiwiZm9yRWFjaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYXBwZW5kVG9Ub3Btb3N0TWFya2Rvd25Ob2RlIiwiY2xhc3NOYW1lIiwiaXNJZ25vcmVkIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwiZmluZERpdmlzaW9uVHJhbnNmb3JtIiwiRGl2aXNpb25UcmFuc2Zvcm0iLCJzdWJEaXZpc2lvblRyYW5zZm9ybSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzb21lIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmaW5kRGl2aXNpb25UcmFuc2Zvcm1zIiwic3ViRGl2aXNpb25UcmFuc2Zvcm1zIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJyZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJmb290bm90ZVRyYW5zZm9ybU1hcCIsImZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zIiwiRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSIsImZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJmb290bm90ZVRyYW5zZm9ybSIsIkZvb3Rub3RlVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtIiwiRm9vdG5vdGVzTGlzdFRyYW5zZm9ybSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsInBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUiLCJwYWdpbmF0ZWRDaGlsZE5vZGVzIiwibWFya2Rvd25Ob2RlcyIsInBhZ2VOdW1iZXIiLCJtYXJrZG93bk5vZGUiLCJpbmRleEFuY2hvclRyYW5zZm9ybSIsIkluZGV4QW5jaG9yVHJhbnNmb3JtIiwiZnJvbVBhZ2VOdW1iZXIiLCJmcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc0RpdmlzaW9uVHJhbnNmb3Jtc0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwiYW5jaG9yTWFya2Rvd25Ob2RlIiwiZ2V0QW5jaG9yTWFya2Rvd25Ob2RlIiwic2V0UGFnZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF5QnFCQTs7O3lCQXZCVTsrREFFTjs0REFDRTsrREFDRztrRUFDRzttRUFDQztvRUFDQztrRUFDQztnRUFDRTtzRUFDTzt3RUFDRTtxRUFDSDt3RUFDRzt5RUFDQzswRUFDQzt5QkFFQztxQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3RELElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCxxQ0FBTjtjQUFNQTthQUFBQSxxQkFDUEksUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVUOztnQkFFakIsa0JBRmlCQTtZQUVYSTtZQUFVQztZQUFZQztZQUFZQztZQUFTQzs7UUFFakQsTUFBS0MsaUJBQWlCLEdB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