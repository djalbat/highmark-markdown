"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get addFootnoteHTMLNodes () {
        return addFootnoteHTMLNodes;
    },
    get footnoteItemHTMLTransformsFromLineHTMLTransforms () {
        return footnoteItemHTMLTransformsFromLineHTMLTransforms;
    },
    get groupHTMLNodes () {
        return groupHTMLNodes;
    },
    get lineHTMLTransformsFromFootnoteHTMLTransforms () {
        return lineHTMLTransformsFromFootnoteHTMLTransforms;
    },
    get numberFootnoteLinkHTMLNodes () {
        return numberFootnoteLinkHTMLNodes;
    },
    get paginateGroupedHTMLNodes () {
        return paginateGroupedHTMLNodes;
    },
    get removeFootnoteHTMLNodes () {
        return removeFootnoteHTMLNodes;
    },
    get removeHTMLNodes () {
        return removeHTMLNodes;
    }
});
var _necessary = require("necessary");
var _html = /*#__PURE__*/ _interop_require_default(require("../transform/html"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../node/html/footnote"));
var _line = /*#__PURE__*/ _interop_require_default(require("../transform/html/line"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../transform/html/footnote"));
var _footnote2 = /*#__PURE__*/ _interop_require_default(require("../transform/html/item/footnote"));
var _footnote3 = /*#__PURE__*/ _interop_require_default(require("../transform/html/link/footnote"));
var _constants = require("../constants");
var _html1 = require("../utilities/html");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
function groupHTMLNodes(htmlNodes) {
    var groupedHTMLNodesArray = [];
    var groupedHTMLNodes = [];
    htmlNodes.forEach(function(htmlNode) {
        var htmlNodeFootnoteHTMLNode = _instanceof(htmlNode, _footnote.default);
        if (!htmlNodeFootnoteHTMLNode) {
            var groupedHTMLNodeLength = groupedHTMLNodes.length;
            if (groupedHTMLNodeLength > 0) {
                groupedHTMLNodesArray.push(groupedHTMLNodes);
                groupedHTMLNodes = [];
            }
        }
        var groupedHTMLNode = htmlNode; ///
        groupedHTMLNodes.push(groupedHTMLNode);
    });
    var groupedHTMLNodeLength = groupedHTMLNodes.length;
    if (groupedHTMLNodeLength) {
        groupedHTMLNodesArray.push(groupedHTMLNodes);
    }
    return groupedHTMLNodesArray;
}
function removeHTMLNodes(node) {
    var htmlNodes = (0, _html1.htmlNodesFromNode)(node);
    htmlNodes.forEach(function(htmlNode) {
        var htmlTransform = _html.default.fromHTMLNode(htmlNode);
        htmlTransform.remove();
    });
    return htmlNodes;
}
function addFootnoteHTMLNodes(footnoteHTMLTransforms, node, context) {
    var footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node), footnoteLinkHTMLTransforms = footnoteLinkHTMLTransformsFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes);
    backwardsForEach(footnoteLinkHTMLTransforms, function(footnoteLinkHTMLTransform) {
        var identifier = footnoteLinkHTMLTransform.identifier(context), footnoteHTMLTransform = footnoteHTMLTransforms.find(function(footnoteHTMLTransform) {
            var identifierMatches = footnoteHTMLTransform.matchIdentifier(identifier, context);
            if (identifierMatches) {
                return true;
            }
        }) || null;
        if (footnoteHTMLTransform !== null) {
            footnoteHTMLTransform.addAfterFootnoteLinkHTMLTransform(footnoteLinkHTMLTransform);
        }
    });
}
function removeFootnoteHTMLNodes(node) {
    var footnoteHTMLNodes = (0, _html1.footnoteHTMLNodesFromNode)(node), footnoteHTMLTransforms = footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes);
    footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform) {
        footnoteHTMLTransform.remove();
    });
    return footnoteHTMLTransforms;
}
function paginateGroupedHTMLNodes(groupedHTMLNodesArray, context) {
    var paginatedHTMLNodesArray = [];
    var _context_maximumPageLines = context.maximumPageLines, maximumPageLines = _context_maximumPageLines === void 0 ? _constants.DEFAULT_MAXIMUM_PAGE_LINES : _context_maximumPageLines;
    var pageLines = 0, paginatedHTMLNodes = [];
    groupedHTMLNodesArray.forEach(function(groupedHTMLNodes) {
        var _paginatedHTMLNodes;
        var groupLines = groupedHTMLNodes.reduce(function(groupLines, groupedHTMLNode) {
            var lines = groupedHTMLNode.lines(context);
            groupLines += lines;
            return groupLines;
        }, 0);
        var paginatedHTMLNodesLength = paginatedHTMLNodes.length;
        if (paginatedHTMLNodesLength > 0) {
            if (pageLines + groupLines > maximumPageLines) {
                paginatedHTMLNodesArray.push(paginatedHTMLNodes);
                pageLines = 0;
                paginatedHTMLNodes = [];
            }
        }
        (_paginatedHTMLNodes = paginatedHTMLNodes).push.apply(_paginatedHTMLNodes, _to_consumable_array(groupedHTMLNodes));
        pageLines += groupLines;
    });
    var paginatedHTMLNodesLength = paginatedHTMLNodes.length;
    if (paginatedHTMLNodesLength) {
        paginatedHTMLNodesArray.push(paginatedHTMLNodes);
    }
    return paginatedHTMLNodesArray;
}
function numberFootnoteLinkHTMLNodes(footnoteHTMLTransforms, identifierMap, node, context) {
    var footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node), identifiers = Object.keys(identifierMap), identifiersLength = identifiers.length, start = identifiersLength + 1;
    footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform, index) {
        var identifier = footnoteHTMLTransform.identifier(context), number = start + index;
        identifierMap[identifier] = number;
    });
    footnoteLinkHTMLNodes.forEach(function(footnoteLinkHTMLNode) {
        var identifier = footnoteLinkHTMLNode.identifier(context), number = identifierMap[identifier];
        footnoteLinkHTMLNode.setNumber(number);
    });
    return start;
}
function lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms) {
    var lineHTMLTransforms = footnoteHTMLTransforms.map(function(footnoteHTMLTransform) {
        var lineHTMLTransform = _line.default.fromFootnoteHTMLTransform(footnoteHTMLTransform);
        return lineHTMLTransform;
    });
    return lineHTMLTransforms;
}
function footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms, identifierMap, start) {
    var numbers = Object.values(identifierMap), identifiers = Object.keys(identifierMap), footnoteItemHTMLTransforms = lineHTMLTransforms.map(function(lineHTMLTransform, index) {
        var number = start + index;
        index = numbers.indexOf(number);
        var identifier = identifiers[index], footnoteItemHTMLTransform = _footnote2.default.fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier);
        return footnoteItemHTMLTransform;
    });
    return footnoteItemHTMLTransforms;
}
function footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes) {
    var footnoteHTMLTransforms = footnoteHTMLNodes.map(function(footnoteHTMLNode) {
        var footnoteHTMLTransform = _footnote1.default.fromFootnoteHTMLNode(footnoteHTMLNode);
        return footnoteHTMLTransform;
    });
    return footnoteHTMLTransforms;
}
function footnoteLinkHTMLTransformsFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes) {
    var footnoteLinkHTMLTransforms = footnoteLinkHTMLNodes.map(function(footnoteLinkHTMLNode) {
        var footnoteLinkHTMLTransform = _footnote3.default.fromFootnoteLinkHTMLNode(footnoteLinkHTMLNode);
        return footnoteLinkHTMLTransform;
    });
    return footnoteLinkHTMLTransforms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBGb290bm90ZUhUTUxOb2RlIGZyb20gXCIuLi9ub2RlL2h0bWwvZm9vdG5vdGVcIjtcbmltcG9ydCBMaW5lSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2h0bWwvbGluZVwiO1xuaW1wb3J0IEZvb3Rub3RlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVcIjtcbmltcG9ydCBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2h0bWwvbGluay9mb290bm90ZVwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01BWElNVU1fUEFHRV9MSU5FUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGh0bWxOb2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpIHtcbiAgY29uc3QgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5ID0gW107XG5cbiAgbGV0IGdyb3VwZWRIVE1MTm9kZXMgPSBbXTtcblxuICBodG1sTm9kZXMuZm9yRWFjaCgoaHRtbE5vZGUpID0+IHtcbiAgICBjb25zdCBodG1sTm9kZUZvb3Rub3RlSFRNTE5vZGUgPSAoaHRtbE5vZGUgaW5zdGFuY2VvZiBGb290bm90ZUhUTUxOb2RlKTtcblxuICAgIGlmICghaHRtbE5vZGVGb290bm90ZUhUTUxOb2RlKSB7XG4gICAgICBjb25zdCBncm91cGVkSFRNTE5vZGVMZW5ndGggPSBncm91cGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGdyb3VwZWRIVE1MTm9kZUxlbmd0aCA+IDApIHtcbiAgICAgICAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LnB1c2goZ3JvdXBlZEhUTUxOb2Rlcyk7XG5cbiAgICAgICAgZ3JvdXBlZEhUTUxOb2RlcyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwZWRIVE1MTm9kZSA9IGh0bWxOb2RlOyAvLy9cblxuICAgIGdyb3VwZWRIVE1MTm9kZXMucHVzaChncm91cGVkSFRNTE5vZGUpO1xuICB9KTtcblxuICBjb25zdCBncm91cGVkSFRNTE5vZGVMZW5ndGggPSBncm91cGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICBpZiAoZ3JvdXBlZEhUTUxOb2RlTGVuZ3RoKSB7XG4gICAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LnB1c2goZ3JvdXBlZEhUTUxOb2Rlcyk7XG4gIH1cblxuICByZXR1cm4gZ3JvdXBlZEhUTUxOb2Rlc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSFRNTE5vZGVzKG5vZGUpIHtcbiAgY29uc3QgaHRtbE5vZGVzID0gaHRtbE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgaHRtbE5vZGVzLmZvckVhY2goKGh0bWxOb2RlKSA9PiB7XG4gICAgY29uc3QgaHRtbFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKGh0bWxOb2RlKTtcblxuICAgIGh0bWxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBodG1sTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBub2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZvb3Rub3RlTGlua0hUTUxOb2RlcyA9IGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUxpbmtIVE1MTm9kZXMpO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXMsIChmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0uaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm0gPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmZpbmQoKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllck1hdGNoZXMgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm0ubWF0Y2hJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoaWRlbnRpZmllck1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChmb290bm90ZUhUTUxUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5hZGRBZnRlckZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0oZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzKG5vZGUpIHtcbiAgY29uc3QgZm9vdG5vdGVIVE1MTm9kZXMgPSBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2Rlcyk7XG5cbiAgZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUhUTUxUcmFuc2Zvcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCkge1xuICBjb25zdCBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheSA9IFtdO1xuXG4gIGNvbnN0IHsgbWF4aW11bVBhZ2VMaW5lcyA9IERFRkFVTFRfTUFYSU1VTV9QQUdFX0xJTkVTIH0gPSBjb250ZXh0O1xuXG4gIGxldCBwYWdlTGluZXMgPSAwLFxuICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzID0gW107XG5cbiAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LmZvckVhY2goKGdyb3VwZWRIVE1MTm9kZXMpID0+IHtcbiAgICBjb25zdCBncm91cExpbmVzID0gZ3JvdXBlZEhUTUxOb2Rlcy5yZWR1Y2UoKGdyb3VwTGluZXMsIGdyb3VwZWRIVE1MTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGluZXMgPSBncm91cGVkSFRNTE5vZGUubGluZXMoY29udGV4dCk7XG5cbiAgICAgIGdyb3VwTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHJldHVybiBncm91cExpbmVzO1xuICAgIH0sIDApO1xuXG4gICAgY29uc3QgcGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoID0gcGFnaW5hdGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChwYWdpbmF0ZWRIVE1MTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBpZiAocGFnZUxpbmVzICsgZ3JvdXBMaW5lcyA+IG1heGltdW1QYWdlTGluZXMpIHtcbiAgICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkucHVzaChwYWdpbmF0ZWRIVE1MTm9kZXMpO1xuXG4gICAgICAgIHBhZ2VMaW5lcyA9IDA7XG5cbiAgICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFnaW5hdGVkSFRNTE5vZGVzLnB1c2goLi4uZ3JvdXBlZEhUTUxOb2Rlcyk7XG5cbiAgICBwYWdlTGluZXMgKz0gZ3JvdXBMaW5lcztcbiAgfSk7XG5cbiAgY29uc3QgcGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoID0gcGFnaW5hdGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICBpZiAocGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoKSB7XG4gICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkucHVzaChwYWdpbmF0ZWRIVE1MTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyRm9vdG5vdGVMaW5rSFRNTE5vZGVzKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIGlkZW50aWZpZXJNYXAsIG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgIGlkZW50aWZpZXJzID0gT2JqZWN0LmtleXMoaWRlbnRpZmllck1hcCksXG4gICAgICAgIGlkZW50aWZpZXJzTGVuZ3RoID0gaWRlbnRpZmllcnMubGVuZ3RoLFxuICAgICAgICBzdGFydCA9IGlkZW50aWZpZXJzTGVuZ3RoICsgMTtcblxuICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgbnVtYmVyID0gc3RhcnQgKyBpbmRleDtcblxuICAgIGlkZW50aWZpZXJNYXBbaWRlbnRpZmllcl0gPSBudW1iZXI7XG4gIH0pO1xuXG4gIGZvb3Rub3RlTGlua0hUTUxOb2Rlcy5mb3JFYWNoKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUxpbmtIVE1MTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIG51bWJlciA9IGlkZW50aWZpZXJNYXBbaWRlbnRpZmllcl07XG5cbiAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcbiAgfSlcblxuICByZXR1cm4gc3RhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zKSB7XG4gIGNvbnN0IGxpbmVIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMubWFwKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBjb25zdCBsaW5lSFRNTFRyYW5zZm9ybSA9IExpbmVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm0oZm9vdG5vdGVIVE1MVHJhbnNmb3JtKTtcblxuICAgIHJldHVybiBsaW5lSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxpbmVIVE1MVHJhbnNmb3Jtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyhsaW5lSFRNTFRyYW5zZm9ybXMsIGlkZW50aWZpZXJNYXAsIHN0YXJ0KSB7XG4gIGNvbnN0IG51bWJlcnMgPSBPYmplY3QudmFsdWVzKGlkZW50aWZpZXJNYXApLFxuICAgICAgICBpZGVudGlmaWVycyA9IE9iamVjdC5rZXlzKGlkZW50aWZpZXJNYXApLFxuICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IGxpbmVIVE1MVHJhbnNmb3Jtcy5tYXAoKGxpbmVIVE1MVHJhbnNmb3JtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG51bWJlciA9IHN0YXJ0ICsgaW5kZXg7XG5cbiAgICAgICAgICBpbmRleCA9IG51bWJlcnMuaW5kZXhPZihudW1iZXIpO1xuXG4gICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGlkZW50aWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybS5mcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgcmV0dXJuIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2Rlcykge1xuICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MTm9kZXMubWFwKChmb290bm90ZUhUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUhUTUxOb2RlKGZvb3Rub3RlSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUxpbmtIVE1MTm9kZXMpIHtcbiAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXMubWFwKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUxpbmtIVE1MTm9kZShmb290bm90ZUxpbmtIVE1MTm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zO1xufVxuIl0sIm5hbWVzIjpbImFkZEZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIiwiZ3JvdXBIVE1MTm9kZXMiLCJsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsIm51bWJlckZvb3Rub3RlTGlua0hUTUxOb2RlcyIsInBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyIsInJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzIiwicmVtb3ZlSFRNTE5vZGVzIiwiYmFja3dhcmRzRm9yRWFjaCIsImFycmF5VXRpbGl0aWVzIiwiaHRtbE5vZGVzIiwiZ3JvdXBlZEhUTUxOb2Rlc0FycmF5IiwiZ3JvdXBlZEhUTUxOb2RlcyIsImZvckVhY2giLCJodG1sTm9kZSIsImh0bWxOb2RlRm9vdG5vdGVIVE1MTm9kZSIsIkZvb3Rub3RlSFRNTE5vZGUiLCJncm91cGVkSFRNTE5vZGVMZW5ndGgiLCJsZW5ndGgiLCJwdXNoIiwiZ3JvdXBlZEhUTUxOb2RlIiwibm9kZSIsImh0bWxOb2Rlc0Zyb21Ob2RlIiwiaHRtbFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiLCJyZW1vdmUiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwiY29udGV4dCIsImZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUxpbmtIVE1MTm9kZXMiLCJmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwiaWRlbnRpZmllciIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImZpbmQiLCJpZGVudGlmaWVyTWF0Y2hlcyIsIm1hdGNoSWRlbnRpZmllciIsImFkZEFmdGVyRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MTm9kZXMiLCJwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheSIsIm1heGltdW1QYWdlTGluZXMiLCJERUZBVUxUX01BWElNVU1fUEFHRV9MSU5FUyIsInBhZ2VMaW5lcyIsInBhZ2luYXRlZEhUTUxOb2RlcyIsImdyb3VwTGluZXMiLCJyZWR1Y2UiLCJsaW5lcyIsInBhZ2luYXRlZEhUTUxOb2Rlc0xlbmd0aCIsImlkZW50aWZpZXJNYXAiLCJpZGVudGlmaWVycyIsIk9iamVjdCIsImtleXMiLCJpZGVudGlmaWVyc0xlbmd0aCIsInN0YXJ0IiwiaW5kZXgiLCJudW1iZXIiLCJmb290bm90ZUxpbmtIVE1MTm9kZSIsInNldE51bWJlciIsImxpbmVIVE1MVHJhbnNmb3JtcyIsIm1hcCIsImxpbmVIVE1MVHJhbnNmb3JtIiwiTGluZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwibnVtYmVycyIsInZhbHVlcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiaW5kZXhPZiIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiZnJvbUxpbmVUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVIVE1MTm9kZSIsIkZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImZyb21Gb290bm90ZUhUTUxOb2RlIiwiRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSIsImZyb21Gb290bm90ZUxpbmtIVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBOERnQkE7ZUFBQUE7O1FBMkdBQztlQUFBQTs7UUF2SkFDO2VBQUFBOztRQTZJQUM7ZUFBQUE7O1FBdkJBQztlQUFBQTs7UUEzQ0FDO2VBQUFBOztRQVhBQztlQUFBQTs7UUFoQ0FDO2VBQUFBOzs7eUJBaERlOzJEQUVMOytEQUNHOzJEQUNDO2dFQUNJO2dFQUNJO2dFQUNBO3lCQUVLO3FCQUdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFNLEFBQUVDLG1CQUFxQkMseUJBQWMsQ0FBbkNEO0FBRUQsU0FBU04sZUFBZVEsU0FBUztJQUN0QyxJQUFNQyx3QkFBd0IsRUFBRTtJQUVoQyxJQUFJQyxtQkFBbUIsRUFBRTtJQUV6QkYsVUFBVUcsT0FBTyxDQUFDLFNBQUNDO1FBQ2pCLElBQU1DLDJCQUE0QkQsQUFBUSxZQUFSQSxVQUFvQkUsaUJBQWdCO1FBRXRFLElBQUksQ0FBQ0QsMEJBQTBCO1lBQzdCLElBQU1FLHdCQUF3QkwsaUJBQWlCTSxNQUFNO1lBRXJELElBQUlELHdCQUF3QixHQUFHO2dCQUM3Qk4sc0JBQXNCUSxJQUFJLENBQUNQO2dCQUUzQkEsbUJBQW1CLEVBQUU7WUFDdkI7UUFDRjtRQUVBLElBQU1RLGtCQUFrQk4sVUFBVSxHQUFHO1FBRXJDRixpQkFBaUJPLElBQUksQ0FBQ0M7SUFDeEI7SUFFQSxJQUFNSCx3QkFBd0JMLGlCQUFpQk0sTUFBTTtJQUVyRCxJQUFJRCx1QkFBdUI7UUFDekJOLHNCQUFzQlEsSUFBSSxDQUFDUDtJQUM3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