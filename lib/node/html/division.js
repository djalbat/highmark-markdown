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
const _necessary = require("necessary");
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
const _pageNumber = /*#__PURE__*/ _interop_require_default(require("../../node/html/pageNumber"));
const _division = /*#__PURE__*/ _interop_require_default(require("../../transform/html/division"));
const _pageNumber1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/pageNumber"));
const _index = /*#__PURE__*/ _interop_require_default(require("../../transform/html/anchor/index"));
const _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/html/item/footnote"));
const _footnotes = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/footnotes"));
const _markdown = require("../../ruleNames/markdown");
const _html1 = require("../../utilities/html");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { extract } = _necessary.arrayUtilities;
class DivisionHTMLNode extends _html.default {
    constructor(outerNode, parentNode, childNodes, domElement, divisionClassName){
        super(outerNode, parentNode, childNodes, domElement);
        this.divisionClassName = divisionClassName;
    }
    getDivisionClassName() {
        return this.divisionClassName;
    }
    getDivDOMElement() {
        const domElement = this.getDOMElement(), divDOMElement = domElement; ///
        return divDOMElement;
    }
    className(context) {
        const className = this.divisionClassName; ///
        return className;
    }
    getRuleName() {
        const ruleNme = _markdown.DIVISION_MARKDOWN_RULE_NAME;
        return ruleNme;
    }
    isIgnored() {
        const markdownNode = this.getMarkdownNode(), divisionMarkdownNode = markdownNode, ignored = divisionMarkdownNode.isIgnored();
        return ignored;
    }
    pageNumber(context) {
        const pageNumber = this.fromFirstLastChildNode((firstLastChildNode)=>{
            let pageNumber = null;
            const firstLastChildNodePageNumberHTMLNode = firstLastChildNode instanceof _pageNumber.default;
            if (firstLastChildNodePageNumberHTMLNode) {
                const pageNumberHTMLNode = firstLastChildNode; ///
                pageNumber = pageNumberHTMLNode.getPageNumber();
            }
            return pageNumber;
        });
        return pageNumber;
    }
    paginate(htmlTransforms, context) {
        const ignored = this.isIgnored();
        if (ignored) {
            return;
        }
        const node = this, start = 1, divisionHTMLNode = this, footnotesDirectiveHTMLNode = (0, _html1.footnotesDirectiveHTMLNodeFromNode)(node), pageNumberDirectiveHTMLNode = (0, _html1.pageNumberDirectiveHTMLNodeFromNode)(node);
        let { pageNumber } = context;
        Object.assign(context, {
            start
        });
        if (footnotesDirectiveHTMLNode !== null) {
            const footnotesListHTMLTransform = divisionHTMLNode.resolveFootnotes(context);
            if (footnotesListHTMLTransform !== null) {
                footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
            }
        }
        if (pageNumberDirectiveHTMLNode !== null) {
            const pageNumberHTMLTransform = divisionHTMLNode.resolvePageNumber(pageNumber);
            pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
        }
        let htmlTransform;
        const indexAnchorHTMLTransform = _index.default.fromPageNumber(pageNumber);
        htmlTransform = indexAnchorHTMLTransform; ///
        htmlTransforms.push(htmlTransform);
        const divisionHTMLTransform = _division.default.fromDivisionHTMLNode(divisionHTMLNode);
        htmlTransform = divisionHTMLTransform; ///
        htmlTransforms.push(htmlTransform);
        pageNumber++;
        Object.assign(context, {
            pageNumber
        });
        delete context.start;
    }
    resolveFootnotes(context) {
        const node = this, footnoteHTMLNodes = (0, _html1.footnoteHTMLNodesFromNode)(node), footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node);
        let start;
        ({ start = 1 } = context);
        const footnoteItemHTMLTransforms = [];
        let number = start; ///
        footnoteLinkHTMLNodes.forEach((footnoteLinkHTMLNode)=>{
            const identifier = footnoteLinkHTMLNode.identifier(context), footnoteHTMLNode = extract(footnoteHTMLNodes, (footnoteHTMLNode)=>{
                const identifierMatches = footnoteHTMLNode.matchIdentifier(identifier);
                if (identifierMatches) {
                    return true;
                }
            }) || null;
            if (footnoteHTMLNode !== null) {
                const paragraphHTMLNode = footnoteHTMLNode.getParagraphHTMLNode(), footnoteItemHTMLTransform = _footnote.default.fromParagraphHTMLNOdeAndIdentifier(paragraphHTMLNode, identifier);
                footnoteItemHTMLTransforms.push(footnoteItemHTMLTransform);
                footnoteLinkHTMLNode.setNumber(number);
                number++;
            } else {
                footnoteLinkHTMLNode.resetNumber();
            }
        });
        const footnotesListHTMLTransform = _footnotes.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
        start = number; ///
        Object.assign(context, {
            start
        });
        return footnotesListHTMLTransform;
    }
    resolvePageNumber(pageNumber) {
        const pageNumberHTMLTransform = _pageNumber1.default.fromPageNumber(pageNumber);
        return pageNumberHTMLTransform;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "div";
    static className = null;
    static fromNothing() {
        const divisionClassName = null, divisionHTMLNode = _html.default.fromNothing(DivisionHTMLNode, divisionClassName);
        return divisionHTMLNode;
    }
    static fromOuterNode(outerNode) {
        const divisionMarkdownNode = outerNode, divisionClassName = divisionMarkdownNode.getDivisionClassName(), divisionHTMLNode = _html.default.fromOuterNode(DivisionHTMLNode, outerNode, divisionClassName);
        return divisionHTMLNode;
    }
    static fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName) {
        const childHTMLNodes = paginatedHTMLNodes, divisionHTMLNode = _html.default.fromChildHTMLNodes(DivisionHTMLNode, childHTMLNodes, divisionClassName);
        return divisionHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBEaXZpc2lvbkhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpdmlzaW9uXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2FuY2hvci9pbmRleFwiO1xuaW1wb3J0IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2l0ZW0vZm9vdG5vdGVcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGlzdC9mb290bm90ZXNcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuaW1wb3J0IHsgZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZET01FbGVtZW50KCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBkaXZET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRpdkRPTUVsZW1lbnQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVObWUgPSBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5tZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgaWdub3JlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmlzSWdub3JlZCgpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBwYWdlTnVtYmVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhZ2VOdW1iZXJIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJIVE1MTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBwYWdpbmF0ZShodG1sVHJhbnNmb3JtcywgY29udGV4dCkge1xuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLmlzSWdub3JlZCgpO1xuXG4gICAgaWYgKGlnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN0YXJ0ID0gMSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcyxcbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlID0gcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBsZXQgeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0O1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBzdGFydFxuICAgIH0pO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSAgPSBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVGb290bm90ZXMoY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gICAgfVxuXG4gICAgbGV0IGh0bWxUcmFuc2Zvcm07XG5cbiAgICBjb25zdCBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0gPSBJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICBodG1sVHJhbnNmb3JtID0gaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtOyAgLy8vXG5cbiAgICBodG1sVHJhbnNmb3Jtcy5wdXNoKGh0bWxUcmFuc2Zvcm0pO1xuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtID0gRGl2aXNpb25IVE1MVHJhbnNmb3JtLmZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgaHRtbFRyYW5zZm9ybSA9IGRpdmlzaW9uSFRNTFRyYW5zZm9ybTsgIC8vL1xuXG4gICAgaHRtbFRyYW5zZm9ybXMucHVzaChodG1sVHJhbnNmb3JtKTtcblxuICAgIHBhZ2VOdW1iZXIrKztcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcGFnZU51bWJlclxuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQuc3RhcnQ7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGxldCBzdGFydDtcblxuICAgICh7IHN0YXJ0ID0gMSB9ID0gY29udGV4dCk7XG5cbiAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgbGV0IG51bWJlciA9IHN0YXJ0OyAvLy9cblxuICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlcy5mb3JFYWNoKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZUhUTUxOb2RlID0gZXh0cmFjdChmb290bm90ZUhUTUxOb2RlcywgKGZvb3Rub3RlSFRNTE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllck1hdGNoZXMgPSBmb290bm90ZUhUTUxOb2RlLm1hdGNoSWRlbnRpZmllcihpZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgICBpZiAoaWRlbnRpZmllck1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGZvb3Rub3RlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoSFRNTE5vZGUgPSBmb290bm90ZUhUTUxOb2RlLmdldFBhcmFncmFwaEhUTUxOb2RlKCksXG4gICAgICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIocGFyYWdyYXBoSFRNTE5vZGUsIGlkZW50aWZpZXIpXG5cbiAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMucHVzaChmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtKTtcblxuICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgICBudW1iZXIrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlLnJlc2V0TnVtYmVyKClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgIHN0YXJ0ID0gbnVtYmVyOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3RhcnRcbiAgICB9KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIHJlc29sdmVQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSA9IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG91dGVyTm9kZSwgLy8vXG4gICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5nZXREaXZpc2lvbkNsYXNzTmFtZSgpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKERpdmlzaW9uSFRNTE5vZGUsIG91dGVyTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHBhZ2luYXRlZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsIkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdkRPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZGl2RE9NRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJnZXRSdWxlTmFtZSIsInJ1bGVObWUiLCJESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUiLCJpc0lnbm9yZWQiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImlnbm9yZWQiLCJwYWdlTnVtYmVyIiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZVBhZ2VOdW1iZXJIVE1MTm9kZSIsIlBhZ2VOdW1iZXJIVE1MTm9kZSIsInBhZ2VOdW1iZXJIVE1MTm9kZSIsImdldFBhZ2VOdW1iZXIiLCJwYWdpbmF0ZSIsImh0bWxUcmFuc2Zvcm1zIiwibm9kZSIsInN0YXJ0IiwiZGl2aXNpb25IVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJyZXNvbHZlRm9vdG5vdGVzIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwicGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJyZXNvbHZlUGFnZU51bWJlciIsImh0bWxUcmFuc2Zvcm0iLCJpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0iLCJJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0iLCJmcm9tUGFnZU51bWJlciIsInB1c2giLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25IVE1MTm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJudW1iZXIiLCJmb3JFYWNoIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVIVE1MTm9kZSIsImlkZW50aWZpZXJNYXRjaGVzIiwibWF0Y2hJZGVudGlmaWVyIiwicGFyYWdyYXBoSFRNTE5vZGUiLCJnZXRQYXJhZ3JhcGhIVE1MTm9kZSIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiZnJvbVBhcmFncmFwaEhUTUxOT2RlQW5kSWRlbnRpZmllciIsInNldE51bWJlciIsInJlc2V0TnVtYmVyIiwiRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsIlBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIiwiYXNTdHJpbmciLCJydWxlTmFtZSIsInN0cmluZyIsInRhZ05hbWUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJwYWdpbmF0ZWRIVE1MTm9kZXMiLCJjaGlsZEhUTUxOb2RlcyIsImZyb21DaGlsZEhUTUxOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0JBOzs7ZUFBcUJBOzs7MkJBbEJVOzZEQUVWO21FQUNVO2lFQUNHO29FQUNFOzhEQUNDO2lFQUNDO2tFQUNDOzBCQUVLO3VCQUlROzs7Ozs7QUFFcEQsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0MseUJBQWM7QUFFbkIsTUFBTUYseUJBQXlCRyxhQUFRO0lBQ3BELFlBQVlDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCLENBQUU7UUFDNUUsS0FBSyxDQUFDSixXQUFXQyxZQUFZQyxZQUFZQztRQUV6QyxJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtJQUMzQjtJQUVBQyx1QkFBdUI7UUFDckIsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtJQUMvQjtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUgsYUFBYSxJQUFJLENBQUNJLGFBQWEsSUFDL0JDLGdCQUFnQkwsWUFBYSxHQUFHO1FBRXRDLE9BQU9LO0lBQ1Q7SUFFQUMsVUFBVUMsT0FBTyxFQUFFO1FBQ2pCLE1BQU1ELFlBQVksSUFBSSxDQUFDTCxpQkFBaUIsRUFBRSxHQUFHO1FBRTdDLE9BQU9LO0lBQ1Q7SUFFQUUsY0FBYztRQUNaLE1BQU1DLFVBQVVDLHFDQUEyQjtRQUUzQyxPQUFPRDtJQUNUO0lBRUFFLFlBQVk7UUFDVixNQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0MsdUJBQXVCRixjQUN2QkcsVUFBVUQscUJBQXFCSCxTQUFTO1FBRTlDLE9BQU9JO0lBQ1Q7SUFFQUMsV0FBV1QsT0FBTyxFQUFFO1FBQ2xCLE1BQU1TLGFBQWEsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQyxDQUFDQztZQUM5QyxJQUFJRixhQUFhO1lBRWpCLE1BQU1HLHVDQUF3Q0QsOEJBQThCRSxtQkFBa0I7WUFFOUYsSUFBSUQsc0NBQXNDO2dCQUN4QyxNQUFNRSxxQkFBcUJILG9CQUFxQixHQUFHO2dCQUVuREYsYUFBYUssbUJBQW1CQyxhQUFhO1lBQy9DO1lBRUEsT0FBT047UUFDVDtRQUVBLE9BQU9BO0lBQ1Q7SUFFQU8sU0FBU0MsY0FBYyxFQUFFakIsT0FBTyxFQUFFO1FBQ2hDLE1BQU1RLFVBQVUsSUFBSSxDQUFDSixTQUFTO1FBRTlCLElBQUlJLFNBQVM7WUFDWDtRQUNGO1FBRUEsTUFBTVUsT0FBTyxJQUFJLEVBQ1hDLFFBQVEsR0FDUkMsbUJBQW1CLElBQUksRUFDdkJDLDZCQUE2QkMsSUFBQUEseUNBQWtDLEVBQUNKLE9BQ2hFSyw4QkFBOEJDLElBQUFBLDBDQUFtQyxFQUFDTjtRQUV4RSxJQUFJLEVBQUVULFVBQVUsRUFBRSxHQUFHVDtRQUVyQnlCLE9BQU9DLE1BQU0sQ0FBQzFCLFNBQVM7WUFDckJtQjtRQUNGO1FBRUEsSUFBSUUsK0JBQStCLE1BQU07WUFDdkMsTUFBTU0sNkJBQThCUCxpQkFBaUJRLGdCQUFnQixDQUFDNUI7WUFFdEUsSUFBSTJCLCtCQUErQixNQUFNO2dCQUN2Q0EsMkJBQTJCRSx3QkFBd0IsQ0FBQ1Q7WUFDdEQ7UUFDRjtRQUVBLElBQUlHLGdDQUFnQyxNQUFNO1lBQ3hDLE1BQU1PLDBCQUEwQlYsaUJBQWlCVyxpQkFBaUIsQ0FBQ3RCO1lBRW5FcUIsd0JBQXdCRCx3QkFBd0IsQ0FBQ1Q7UUFDbkQ7UUFFQSxJQUFJWTtRQUVKLE1BQU1DLDJCQUEyQkMsY0FBd0IsQ0FBQ0MsY0FBYyxDQUFDMUI7UUFFekV1QixnQkFBZ0JDLDBCQUEyQixHQUFHO1FBRTlDaEIsZUFBZW1CLElBQUksQ0FBQ0o7UUFFcEIsTUFBTUssd0JBQXdCQyxpQkFBcUIsQ0FBQ0Msb0JBQW9CLENBQUNuQjtRQUV6RVksZ0JBQWdCSyx1QkFBd0IsR0FBRztRQUUzQ3BCLGVBQWVtQixJQUFJLENBQUNKO1FBRXBCdkI7UUFFQWdCLE9BQU9DLE1BQU0sQ0FBQzFCLFNBQVM7WUFDckJTO1FBQ0Y7UUFFQSxPQUFPVCxRQUFRbUIsS0FBSztJQUN0QjtJQUVBUyxpQkFBaUI1QixPQUFPLEVBQUU7UUFDeEIsTUFBTWtCLE9BQU8sSUFBSSxFQUNYc0Isb0JBQW9CQyxJQUFBQSxnQ0FBeUIsRUFBQ3ZCLE9BQzlDd0Isd0JBQXdCQyxJQUFBQSxvQ0FBNkIsRUFBQ3pCO1FBRTVELElBQUlDO1FBRUgsQ0FBQSxFQUFFQSxRQUFRLENBQUMsRUFBRSxHQUFHbkIsT0FBTTtRQUV2QixNQUFNNEMsNkJBQTZCLEVBQUU7UUFFckMsSUFBSUMsU0FBUzFCLE9BQU8sR0FBRztRQUV2QnVCLHNCQUFzQkksT0FBTyxDQUFDLENBQUNDO1lBQzdCLE1BQU1DLGFBQWFELHFCQUFxQkMsVUFBVSxDQUFDaEQsVUFDN0NpRCxtQkFBbUI5RCxRQUFRcUQsbUJBQW1CLENBQUNTO2dCQUM3QyxNQUFNQyxvQkFBb0JELGlCQUFpQkUsZUFBZSxDQUFDSDtnQkFFM0QsSUFBSUUsbUJBQW1CO29CQUNyQixPQUFPO2dCQUNUO1lBQ0YsTUFBTTtZQUVaLElBQUlELHFCQUFxQixNQUFNO2dCQUM3QixNQUFNRyxvQkFBb0JILGlCQUFpQkksb0JBQW9CLElBQ3pEQyw0QkFBNEJDLGlCQUF5QixDQUFDQyxrQ0FBa0MsQ0FBQ0osbUJBQW1CSjtnQkFFbEhKLDJCQUEyQlIsSUFBSSxDQUFDa0I7Z0JBRWhDUCxxQkFBcUJVLFNBQVMsQ0FBQ1o7Z0JBRS9CQTtZQUNGLE9BQU87Z0JBQ0xFLHFCQUFxQlcsV0FBVztZQUNsQztRQUNGO1FBRUEsTUFBTS9CLDZCQUE2QmdDLGtCQUEwQixDQUFDQyxzQ0FBc0MsQ0FBQ3pDLE9BQU95QjtRQUU1R3pCLFFBQVEwQixRQUFRLEdBQUc7UUFFbkJwQixPQUFPQyxNQUFNLENBQUMxQixTQUFTO1lBQ3JCbUI7UUFDRjtRQUVBLE9BQU9RO0lBQ1Q7SUFFQUksa0JBQWtCdEIsVUFBVSxFQUFFO1FBQzVCLE1BQU1xQiwwQkFBMEIrQixvQkFBdUIsQ0FBQzFCLGNBQWMsQ0FBQzFCO1FBRXZFLE9BQU9xQjtJQUNUO0lBRUFnQyxXQUFXO1FBQ1QsTUFBTUMsV0FBVyxJQUFJLENBQUM5RCxXQUFXLElBQzNCK0QsU0FBU0QsVUFBVyxHQUFHO1FBRTdCLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT2xFLFlBQVksS0FBSztJQUV4QixPQUFPbUUsY0FBYztRQUNuQixNQUFNeEUsb0JBQW9CLE1BQ3BCMEIsbUJBQW1CL0IsYUFBUSxDQUFDNkUsV0FBVyxDQUFDaEYsa0JBQWtCUTtRQUVoRSxPQUFPMEI7SUFDVDtJQUVBLE9BQU8rQyxjQUFjN0UsU0FBUyxFQUFFO1FBQzlCLE1BQU1pQix1QkFBdUJqQixXQUN2Qkksb0JBQW9CYSxxQkFBcUJaLG9CQUFvQixJQUM3RHlCLG1CQUFtQi9CLGFBQVEsQ0FBQzhFLGFBQWEsQ0FBQ2pGLGtCQUFrQkksV0FBV0k7UUFFN0UsT0FBTzBCO0lBQ1Q7SUFFQSxPQUFPZ0QsMkNBQTJDQyxrQkFBa0IsRUFBRTNFLGlCQUFpQixFQUFFO1FBQ3ZGLE1BQU00RSxpQkFBaUJELG9CQUNqQmpELG1CQUFtQi9CLGFBQVEsQ0FBQ2tGLGtCQUFrQixDQUFDckYsa0JBQWtCb0YsZ0JBQWdCNUU7UUFFdkYsT0FBTzBCO0lBQ1Q7QUFDRiJ9