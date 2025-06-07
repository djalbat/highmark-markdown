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
    get groupHTMLNodes () {
        return groupHTMLNodes;
    },
    get paginateGroupedHTMLNodes () {
        return paginateGroupedHTMLNodes;
    },
    get removeHTMLNodes () {
        return removeHTMLNodes;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../transform/html"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../node/html/footnote"));
var _html1 = require("../utilities/html");
var _constants = require("../constants");
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
    if (groupedHTMLNodeLength > 0) {
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
function paginateGroupedHTMLNodes(groupedHTMLNodesArray, context) {
    var paginatedHTMLNodesArray = [];
    var _context_maximumPageLines = context.maximumPageLines, maximumPageLines = _context_maximumPageLines === void 0 ? _constants.DEFAULT_MAXIMUM_PAGE_LINES : _context_maximumPageLines;
    var pageLines = 0, paginatedHTMLNodes = [];
    groupedHTMLNodesArray.forEach(function(groupedHTMLNodes) {
        var _paginatedHTMLNodes;
        var groupedLines = groupedHTMLNodes.reduce(function(groupedLines, groupedHTMLNode) {
            var lines = groupedHTMLNode.lines(context);
            groupedLines += lines;
            return groupedLines;
        }, 0);
        var paginatedHTMLNodesLength = paginatedHTMLNodes.length;
        if (paginatedHTMLNodesLength > 0) {
            if (pageLines + groupedLines > maximumPageLines) {
                paginatedHTMLNodesArray.push(paginatedHTMLNodes);
                pageLines = 0;
                paginatedHTMLNodes = [];
            }
        }
        (_paginatedHTMLNodes = paginatedHTMLNodes).push.apply(_paginatedHTMLNodes, _to_consumable_array(groupedHTMLNodes));
        pageLines += groupedLines;
    });
    var paginatedHTMLNodesLength = paginatedHTMLNodes.length;
    if (paginatedHTMLNodesLength > 0) {
        paginatedHTMLNodesArray.push(paginatedHTMLNodes);
    }
    return paginatedHTMLNodesArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi90cmFuc2Zvcm0vaHRtbFwiO1xuaW1wb3J0IEZvb3Rub3RlSFRNTE5vZGUgZnJvbSBcIi4uL25vZGUvaHRtbC9mb290bm90ZVwiO1xuXG5pbXBvcnQgeyBodG1sTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvaHRtbFwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX1BBR0VfTElORVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpIHtcbiAgY29uc3QgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5ID0gW107XG5cbiAgbGV0IGdyb3VwZWRIVE1MTm9kZXMgPSBbXTtcblxuICBodG1sTm9kZXMuZm9yRWFjaCgoaHRtbE5vZGUpID0+IHtcbiAgICBjb25zdCBodG1sTm9kZUZvb3Rub3RlSFRNTE5vZGUgPSAoaHRtbE5vZGUgaW5zdGFuY2VvZiBGb290bm90ZUhUTUxOb2RlKTtcblxuICAgIGlmICghaHRtbE5vZGVGb290bm90ZUhUTUxOb2RlKSB7XG4gICAgICBjb25zdCBncm91cGVkSFRNTE5vZGVMZW5ndGggPSBncm91cGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGdyb3VwZWRIVE1MTm9kZUxlbmd0aCA+IDApIHtcbiAgICAgICAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LnB1c2goZ3JvdXBlZEhUTUxOb2Rlcyk7XG5cbiAgICAgICAgZ3JvdXBlZEhUTUxOb2RlcyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwZWRIVE1MTm9kZSA9IGh0bWxOb2RlOyAvLy9cblxuICAgIGdyb3VwZWRIVE1MTm9kZXMucHVzaChncm91cGVkSFRNTE5vZGUpO1xuICB9KTtcblxuICBjb25zdCBncm91cGVkSFRNTE5vZGVMZW5ndGggPSBncm91cGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICBpZiAoZ3JvdXBlZEhUTUxOb2RlTGVuZ3RoID4gMCkge1xuICAgIGdyb3VwZWRIVE1MTm9kZXNBcnJheS5wdXNoKGdyb3VwZWRIVE1MTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIGdyb3VwZWRIVE1MTm9kZXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhUTUxOb2Rlcyhub2RlKSB7XG4gIGNvbnN0IGh0bWxOb2RlcyA9IGh0bWxOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gIGh0bWxOb2Rlcy5mb3JFYWNoKChodG1sTm9kZSkgPT4ge1xuICAgIGNvbnN0IGh0bWxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21IVE1MTm9kZShodG1sTm9kZSk7XG5cbiAgICBodG1sVHJhbnNmb3JtLnJlbW92ZSgpO1xuICB9KTtcblxuICByZXR1cm4gaHRtbE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCkge1xuICBjb25zdCBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheSA9IFtdO1xuXG4gIGNvbnN0IHsgbWF4aW11bVBhZ2VMaW5lcyA9IERFRkFVTFRfTUFYSU1VTV9QQUdFX0xJTkVTIH0gPSBjb250ZXh0O1xuXG4gIGxldCBwYWdlTGluZXMgPSAwLFxuICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzID0gW107XG5cbiAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LmZvckVhY2goKGdyb3VwZWRIVE1MTm9kZXMpID0+IHtcbiAgICBjb25zdCBncm91cGVkTGluZXMgPSBncm91cGVkSFRNTE5vZGVzLnJlZHVjZSgoZ3JvdXBlZExpbmVzLCBncm91cGVkSFRNTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gZ3JvdXBlZEhUTUxOb2RlLmxpbmVzKGNvbnRleHQpO1xuXG4gICAgICBncm91cGVkTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHJldHVybiBncm91cGVkTGluZXM7XG4gICAgfSwgMCk7XG5cbiAgICBjb25zdCBwYWdpbmF0ZWRIVE1MTm9kZXNMZW5ndGggPSBwYWdpbmF0ZWRIVE1MTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKHBhZ2luYXRlZEhUTUxOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGlmIChwYWdlTGluZXMgKyBncm91cGVkTGluZXMgPiBtYXhpbXVtUGFnZUxpbmVzKSB7XG4gICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5LnB1c2gocGFnaW5hdGVkSFRNTE5vZGVzKTtcblxuICAgICAgICBwYWdlTGluZXMgPSAwO1xuXG4gICAgICAgIHBhZ2luYXRlZEhUTUxOb2RlcyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhZ2luYXRlZEhUTUxOb2Rlcy5wdXNoKC4uLmdyb3VwZWRIVE1MTm9kZXMpO1xuXG4gICAgcGFnZUxpbmVzICs9IGdyb3VwZWRMaW5lcztcbiAgfSk7XG5cbiAgY29uc3QgcGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoID0gcGFnaW5hdGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICBpZiAocGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoID4gMCkge1xuICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5LnB1c2gocGFnaW5hdGVkSFRNTE5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJncm91cEhUTUxOb2RlcyIsInBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImh0bWxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwZWRIVE1MTm9kZXMiLCJmb3JFYWNoIiwiaHRtbE5vZGUiLCJodG1sTm9kZUZvb3Rub3RlSFRNTE5vZGUiLCJGb290bm90ZUhUTUxOb2RlIiwiZ3JvdXBlZEhUTUxOb2RlTGVuZ3RoIiwibGVuZ3RoIiwicHVzaCIsImdyb3VwZWRIVE1MTm9kZSIsIm5vZGUiLCJodG1sTm9kZXNGcm9tTm9kZSIsImh0bWxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIiwicmVtb3ZlIiwiY29udGV4dCIsInBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5IiwibWF4aW11bVBhZ2VMaW5lcyIsIkRFRkFVTFRfTUFYSU1VTV9QQUdFX0xJTkVTIiwicGFnZUxpbmVzIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwiZ3JvdXBlZExpbmVzIiwicmVkdWNlIiwibGluZXMiLCJwYWdpbmF0ZWRIVE1MTm9kZXNMZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVFnQkE7ZUFBQUE7O1FBNENBQztlQUFBQTs7UUFaQUM7ZUFBQUE7OzsyREF0Q1U7K0RBQ0c7cUJBRUs7eUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLFNBQVNGLGVBQWVHLFNBQVM7SUFDdEMsSUFBTUMsd0JBQXdCLEVBQUU7SUFFaEMsSUFBSUMsbUJBQW1CLEVBQUU7SUFFekJGLFVBQVVHLE9BQU8sQ0FBQyxTQUFDQztRQUNqQixJQUFNQywyQkFBNEJELEFBQVEsWUFBUkEsVUFBb0JFLGlCQUFnQjtRQUV0RSxJQUFJLENBQUNELDBCQUEwQjtZQUM3QixJQUFNRSx3QkFBd0JMLGlCQUFpQk0sTUFBTTtZQUVyRCxJQUFJRCx3QkFBd0IsR0FBRztnQkFDN0JOLHNCQUFzQlEsSUFBSSxDQUFDUDtnQkFFM0JBLG1CQUFtQixFQUFFO1lBQ3ZCO1FBQ0Y7UUFFQSxJQUFNUSxrQkFBa0JOLFVBQVUsR0FBRztRQUVyQ0YsaUJBQWlCTyxJQUFJLENBQUNDO0lBQ3hCO0lBRUEsSUFBTUgsd0JBQXdCTCxpQkFBaUJNLE1BQU07SUFFckQsSUFBSUQsd0JBQXdCLEdBQUc7UUFDN0JOLHNCQUFzQlEsSUFBSSxDQUFDUDtJQUM3QjtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTRixnQkFBZ0JZLElBQUk7SUFDbEMsSUFBTVgsWUFBWVksSUFBQUEsd0JBQWlCLEVBQUNEO0lBRXBDWCxVQUFVRyxPQUFPLENBQUMsU0FBQ0M7UUFDakIsSUFBTVMsZ0JBQWdCQyxhQUFhLENBQUNDLFlBQVksQ0FBQ1g7UUFFakRTLGNBQWNHLE1BQU07SUFDdEI7SUFFQSxPQUFPaEI7QUFDVDtBQUVPLFNBQVNGLHlCQUF5QkcscUJBQXFCLEVBQUVnQixPQUFPO0lBQ3JFLElBQU1DLDBCQUEwQixFQUFFO0lBRWxDLGdDQUEwREQsUUFBbERFLGtCQUFBQSwwREFBbUJDLHFDQUEwQjtJQUVyRCxJQUFJQyxZQUFZLEdBQ1pDLHFCQUFxQixFQUFFO0lBRTNCckIsc0JBQXNCRSxPQUFPLENBQUMsU0FBQ0Q7WUFxQjdCb0I7UUFwQkEsSUFBTUMsZUFBZXJCLGlCQUFpQnNCLE1BQU0sQ0FBQyxTQUFDRCxjQUFjYjtZQUMxRCxJQUFNZSxRQUFRZixnQkFBZ0JlLEtBQUssQ0FBQ1I7WUFFcENNLGdCQUFnQkU7WUFFaEIsT0FBT0Y7UUFDVCxHQUFHO1FBRUgsSUFBTUcsMkJBQTJCSixtQkFBbUJkLE1BQU07UUFFMUQsSUFBSWtCLDJCQUEyQixHQUFHO1lBQ2hDLElBQUlMLFlBQVlFLGVBQWVKLGtCQUFrQjtnQkFDL0NELHdCQUF3QlQsSUFBSSxDQUFDYTtnQkFFN0JELFlBQVk7Z0JBRVpDLHFCQUFxQixFQUFFO1lBQ3pCO1FBQ0Y7UUFFQUEsQ0FBQUEsc0JBQUFBLG9CQUFtQmIsSUFBSSxPQUF2QmEscUJBQXdCLHFCQUFHcEI7UUFFM0JtQixhQUFhRTtJQUNmO0lBRUEsSUFBTUcsMkJBQTJCSixtQkFBbUJkLE1BQU07SUFFMUQsSUFBSWtCLDJCQUEyQixHQUFHO1FBQ2hDUix3QkFBd0JULElBQUksQ0FBQ2E7SUFDL0I7SUFFQSxPQUFPSjtBQUNUIn0=