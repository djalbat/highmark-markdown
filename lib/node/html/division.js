"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionHTMLNode;
    }
});
var _necessary = require("necessary");
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _line = /*#__PURE__*/ _interop_require_default(require("../../transform/html/line"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnote"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnoteItem"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesList"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesDirective"));
var _html1 = require("../../utilities/html");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var filter = _necessary.arrayUtilities.filter;
var DivisionHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(DivisionHTMLNode, HTMLNode);
    function DivisionHTMLNode() {
        _class_call_check(this, DivisionHTMLNode);
        return _call_super(this, DivisionHTMLNode, arguments);
    }
    _create_class(DivisionHTMLNode, [
        {
            key: "className",
            value: function className(context) {
                return this.outerNode.className(context);
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var footnoteHTMLNodes = this.getFootnoteHTMLNodes(), footnoteHTMLTransforms = footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes);
                footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform) {
                    footnoteHTMLTransform.remove();
                });
                var footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();
                if (footnotesDirectiveHTMLNode === null) {
                    return;
                }
                var footnotesDirectiveHTMLTransform = _footnotesDirective.default.fromFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);
                footnotesDirectiveHTMLTransform.remove();
                var footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
                if (footnoteHTMLTransformsLength === 0) {
                    return;
                }
                var node = this, footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node);
                filterAndSortFootnoteHTMLTransforms(footnoteHTMLTransforms, footnoteLinkHTMLNodes, context);
                var start = 1, divisionHTMLNode = this, lineHTMLTransforms = lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms), footnoteItemHTMLTransforms = footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms), footnotesListHTMLTransform = _footnotesList.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
            }
        },
        {
            key: "getFootnoteHTMLNodes",
            value: function getFootnoteHTMLNodes() {
                var node = this, footnoteHTMLNodes = (0, _html1.footnoteHTMLNodesFromNode)(node);
                return footnoteHTMLNodes;
            }
        },
        {
            key: "getFootnotesDirectiveHTMLNode",
            value: function getFootnotesDirectiveHTMLNode() {
                var node = this, footnotesDirectiveHTMLNode = (0, _html1.footnotesDirectiveHTMLNodeFromNode)(node);
                return footnotesDirectiveHTMLNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(DivisionHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(DivisionHTMLNode, outerNode);
            }
        }
    ]);
    return DivisionHTMLNode;
}(_html.default);
_define_property(DivisionHTMLNode, "tagName", "div");
_define_property(DivisionHTMLNode, "className", null);
function filterAndSortFootnoteHTMLTransforms(footnoteHTMLTransforms, footnoteLinkHTMLNodes, context) {
    var identifiers = identifiersFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes, context);
    filter(footnoteHTMLTransforms, function(footnoteHTMLTransform) {
        var identifier = footnoteHTMLTransform.identifier(context), identifiersIncludesIdentifier = identifiers.includes(identifier);
        if (identifiersIncludesIdentifier) {
            return true;
        }
    });
    footnoteHTMLTransforms.sort(function(footnoteHTMLTransformA, footnoteHTMLTransformsB) {
        var footnoteHTMLTransformAIdentifier = footnoteHTMLTransformA.identifier(context), footnoteHTMLTransformBIdentifier = footnoteHTMLTransformsB.identifier(context), identifierA = footnoteHTMLTransformAIdentifier, identifierB = footnoteHTMLTransformBIdentifier, indexA = identifiers.indexOf(identifierA), indexB = identifiers.indexOf(identifierB), difference = indexA - indexB;
        return difference;
    });
}
function identifiersFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes, context) {
    var identifiers = footnoteLinkHTMLNodes.map(function(footnoteHTMLNode) {
        var identifier = footnoteHTMLNode.identifier(context);
        return identifier;
    });
    return identifiers;
}
function footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes) {
    var footnoteHTMLTransforms = footnoteHTMLNodes.map(function(footnoteHTMLNode) {
        var footnoteHTMLTransform = _footnote.default.fromFootnoteHTMLNode(footnoteHTMLNode);
        return footnoteHTMLTransform;
    });
    return footnoteHTMLTransforms;
}
function lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms) {
    var lineHTMLTransforms = footnoteHTMLTransforms.map(function(footnoteHTMLTransform) {
        var lineHTMLTransform = _line.default.fromFootnoteHTMLTransform(footnoteHTMLTransform);
        return lineHTMLTransform;
    });
    return lineHTMLTransforms;
}
function footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms) {
    var footnoteItemHTMLTransforms = lineHTMLTransforms.map(function(lineHTMLTransform) {
        var identifier = null, footnoteItemHTMLTransform = _footnoteItem.default.fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier);
        return footnoteItemHTMLTransform;
    });
    return footnoteItemHTMLTransforms;
} // getPageNumber() {
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
 //
 // findPageNumberDirectiveMarkdownNode() {
 //   let pageNumberDirectiveMarkdownNode = null;
 //
 //   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();
 //
 //   subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
 //     const node = subDivisionMarkdownNode; ///
 //
 //     pageNumberDirectiveMarkdownNode = pageNumberDirectiveMarkdownNodeFromNode(node);
 //
 //     if (pageNumberDirectiveMarkdownNode !== null) {
 //       return true;
 //     }
 //   });
 //
 //   return pageNumberDirectiveMarkdownNode;
 // }
 // function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IExpbmVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9saW5lXCI7XG5pbXBvcnQgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZVwiO1xuaW1wb3J0IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3RlSXRlbVwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVzRGlyZWN0aXZlXCI7XG5cbmltcG9ydCB7IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlLCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY2xhc3NOYW1lKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTsgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlSFRNTE5vZGVzID0gdGhpcy5nZXRGb290bm90ZUhUTUxOb2RlcygpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTE5vZGVzKTtcblxuICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IHRoaXMuZ2V0Rm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZShmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSk7XG5cbiAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlcyA9IGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgZmlsdGVyQW5kU29ydEZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gMSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGxpbmVIVE1MVHJhbnNmb3JtcyA9IGxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zKGxpbmVIVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpO1xuXG4gICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICB9XG5cbiAgZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZUhUTUxOb2RlcyA9IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKERpdmlzaW9uSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKERpdmlzaW9uSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQW5kU29ydEZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlkZW50aWZpZXJzID0gaWRlbnRpZmllcnNGcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGVzKGZvb3Rub3RlTGlua0hUTUxOb2RlcywgY29udGV4dCk7XG5cbiAgZmlsdGVyKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgaWRlbnRpZmllcnNJbmNsdWRlc0lkZW50aWZpZXIgPSBpZGVudGlmaWVycy5pbmNsdWRlcyhpZGVudGlmaWVyKTtcblxuICAgIGlmIChpZGVudGlmaWVyc0luY2x1ZGVzSWRlbnRpZmllcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLnNvcnQoKGZvb3Rub3RlSFRNTFRyYW5zZm9ybUEsIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNCKSA9PiB7XG4gICAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtQUlkZW50aWZpZXIgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1BLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtQklkZW50aWZpZXIgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zQi5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGlkZW50aWZpZXJBID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtQUlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJCID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtQklkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGluZGV4QSA9IGlkZW50aWZpZXJzLmluZGV4T2YoaWRlbnRpZmllckEpLFxuICAgICAgICAgIGluZGV4QiA9IGlkZW50aWZpZXJzLmluZGV4T2YoaWRlbnRpZmllckIpLFxuICAgICAgICAgIGRpZmZlcmVuY2UgPSAoaW5kZXhBIC0gaW5kZXhCKTtcblxuICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllcnNGcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGVzKGZvb3Rub3RlTGlua0hUTUxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBpZGVudGlmaWVycyA9IGZvb3Rub3RlTGlua0hUTUxOb2Rlcy5tYXAoKGZvb3Rub3RlSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH0pO1xuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2Rlcykge1xuICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MTm9kZXMubWFwKChmb290bm90ZUhUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUhUTUxOb2RlKGZvb3Rub3RlSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMpIHtcbiAgY29uc3QgbGluZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5tYXAoKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgIGNvbnN0IGxpbmVIVE1MVHJhbnNmb3JtID0gTGluZUhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybShmb290bm90ZUhUTUxUcmFuc2Zvcm0pO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gbGluZUhUTUxUcmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zKSB7XG4gIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zLm1hcCgobGluZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybS5mcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcztcbn1cblxuLy8gZ2V0UGFnZU51bWJlcigpIHtcbi8vICAgbGV0IHBhZ2VOdW1iZXIgPSBudWxsO1xuLy9cbi8vICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKTtcbi8vXG4vLyAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4vLyAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUuZ2V0UGFnZU51bWJlcigpO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gcGFnZU51bWJlcjtcbi8vIH1cbi8vXG4vLyBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbi8vICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKTtcbi8vXG4vLyAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4vLyAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZS5zZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gcGFnaW5hdGUobWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuLy8gICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoRm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpLFxuLy8gICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKFBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCksXG4vLyAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtcyA9IFtcbi8vICAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSxcbi8vICAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm1cbi8vICAgICAgICAgXTtcbi8vXG4vLyAgIGZpbHRlcihzdWJEaXZpc2lvblRyYW5zZm9ybXMsIChzdWJEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuLy8gICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vXG4vLyAgIGNvbnN0IHsgbGluZXNQZXJQYWdlIH0gPSBjb250ZXh0LFxuLy8gICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW107XG4vL1xuLy8gICBsZXQgeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0LFxuLy8gICAgICAgdG90YWxMaW5lcyA9IDA7XG4vL1xuLy8gICB0aGlzLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuLy8gICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoKHRvdGFsTGluZXMgKyBsaW5lcykgPiBsaW5lc1BlclBhZ2UpIHtcbi8vICAgICAgIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgICBwYWdlTnVtYmVyKys7XG4vL1xuLy8gICAgICAgdG90YWxMaW5lcyA9IDA7XG4vL1xuLy8gICAgICAgY2xlYXIocGFnaW5hdGVkQ2hpbGROb2Rlcyk7XG4vLyAgICAgfVxuLy9cbi8vICAgICBjb25zdCBwYWdpbmF0ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cbi8vXG4vLyAgICAgcGFnaW5hdGVkQ2hpbGROb2Rlcy5wdXNoKHBhZ2luYXRlZENoaWxkTm9kZSk7XG4vL1xuLy8gICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG4vLyAgIH0pO1xuLy9cbi8vICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4vLyAgICAgcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpO1xuLy9cbi8vICAgICBwYWdlTnVtYmVyKys7XG4vLyAgIH1cbi8vXG4vLyAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuLy8gICAgIHBhZ2VOdW1iZXJcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gY3JlYXRlSW5kZXgoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGxldCBpbmRleENyZWF0ZWQgPSBmYWxzZTtcbi8vXG4vLyAgIGNvbnN0IGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybShJbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbi8vXG4vLyAgIGlmIChpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4vLyAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4vLyAgICAgICAgICAgaW5kZXhUcmFuc2Zvcm0gPSBJbmRleFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4vL1xuLy8gICAgIGlmIChpbmRleFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuLy8gICAgICAgaW5kZXhUcmFuc2Zvcm0ucmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuLy9cbi8vICAgICAgIGluZGV4Q3JlYXRlZCA9IHRydWU7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gaW5kZXhDcmVhdGVkO1xuLy8gfVxuLy9cbi8vIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuLy8gICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG4vL1xuLy8gICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oQ29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4vL1xuLy8gICBpZiAoY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuLy8gICAgICAgICAgIGNvbnRlbnRzTGlzdFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4vL1xuLy8gICAgIGlmIChjb250ZW50c0xpc3RUcmFuc2Zvcm0gIT09IG51bGwpIHtcbi8vICAgICAgIGNvbnRlbnRzTGlzdFRyYW5zZm9ybS5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybShjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4vL1xuLy8gICAgICAgY29udGVudHNDcmVhdGVkID0gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4vLyB9XG4vL1xuLy8gcHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuLy8gICBjb25zdCBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGVzKEZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuLy9cbi8vICAgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuLy8gICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtID0gRm9vdG5vdGVUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSksXG4vLyAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0uaWRlbnRpZmllcihjb250ZXh0KTtcbi8vXG4vLyAgICAgZm9vdG5vdGVUcmFuc2Zvcm1NYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVRyYW5zZm9ybTtcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKSB7XG4vLyAgIGxldCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gbnVsbDtcbi8vXG4vLyAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuLy9cbi8vICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4vLyAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cbi8vXG4vLyAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcbi8vXG4vLyAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vL1xuLy8gICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KSB7XG4vLyAgIGxldCBtYXJrZG93bk5vZGU7XG4vL1xuLy8gICBjb25zdCBpbmRleEFuY2hvclRyYW5zZm9ybSA9IEluZGV4QW5jaG9yVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpLFxuLy8gICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzRGl2aXNpb25UcmFuc2Zvcm1zQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4vLyAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IGluZGV4QW5jaG9yVHJhbnNmb3JtLmdldEFuY2hvck1hcmtkb3duTm9kZSgpO1xuLy9cbi8vICAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbi8vXG4vLyAgIG1hcmtkb3duTm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZTsgIC8vL1xuLy9cbi8vICAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG4vL1xuLy8gICBtYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG4vL1xuLy8gICBtYXJrZG93bk5vZGVzLnB1c2gobWFya2Rvd25Ob2RlKTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbkhUTUxOb2RlIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJjbGFzc05hbWUiLCJjb250ZXh0Iiwib3V0ZXJOb2RlIiwicmVzb2x2ZSIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZ2V0Rm9vdG5vdGVIVE1MTm9kZXMiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2RlcyIsImZvckVhY2giLCJmb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJyZW1vdmUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwibm9kZSIsImZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIiwiZmlsdGVyQW5kU29ydEZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJzdGFydCIsImRpdmlzaW9uSFRNTE5vZGUiLCJsaW5lSFRNTFRyYW5zZm9ybXMiLCJsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiLCJpZGVudGlmaWVycyIsImlkZW50aWZpZXJzRnJvbUZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImlkZW50aWZpZXIiLCJpZGVudGlmaWVyc0luY2x1ZGVzSWRlbnRpZmllciIsImluY2x1ZGVzIiwic29ydCIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybUEiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zQiIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybUFJZGVudGlmaWVyIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtQklkZW50aWZpZXIiLCJpZGVudGlmaWVyQSIsImlkZW50aWZpZXJCIiwiaW5kZXhBIiwiaW5kZXhPZiIsImluZGV4QiIsImRpZmZlcmVuY2UiLCJtYXAiLCJmb290bm90ZUhUTUxOb2RlIiwiRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTE5vZGUiLCJsaW5lSFRNTFRyYW5zZm9ybSIsIkxpbmVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiZnJvbUxpbmVUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7Ozt5QkFiVTsyREFFVjsyREFDUzsrREFDSTttRUFDSTtvRUFDQzt5RUFDSztxQkFFaUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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