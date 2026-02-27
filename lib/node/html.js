"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamdom = require("occam-dom");
const _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
const _constants = require("../constants");
const _dom = require("../utilities/dom");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HTMLNode extends _occamdom.Node {
    constructor(outerNode, parentNode, childNodes, domElement){
        super(outerNode, parentNode, childNodes);
        this.domElement = domElement;
    }
    getDOMElement() {
        return this.domElement;
    }
    setDOMElement(domElement) {
        this.domElement = domElement;
    }
    resetDOMElement() {
        this.domElement = null;
    }
    getRuleName() {
        const markdownNode = this.getMarkdownNode(), ruleName = markdownNode.getRuleName();
        return ruleName;
    }
    isTerminalNode() {
        const terminalNode = false;
        return terminalNode;
    }
    isNonTerminalNode() {
        const nonTerminalNode = true;
        return nonTerminalNode;
    }
    getMarkdownNode() {
        const outerNode = this.getOuterNode(), markdownNode = outerNode; ///
        return markdownNode;
    }
    getParentHTMLNode() {
        const parentNode = this.getParentNode(), parentHTMLNode = parentNode; ///
        return parentHTMLNode;
    }
    getChildHTMLNodes() {
        const childNodes = this.getChildNodes(), childHTMLNodes = childNodes; ///
        return childHTMLNodes;
    }
    getAncestorHTMLNodes() {
        const ancestorNodes = this.getAncestorNodes(), ancestorHTMLNodes = ancestorNodes; ///
        return ancestorHTMLNodes;
    }
    reduceChildHTMLNode(callback, initialValue) {
        return this.reduceChildNode(callback, initialValue);
    }
    someAncestorHTMLNode(callback) {
        return this.someAncestorNode(callback);
    }
    someChildHTMLNode(callback) {
        return this.someChildNode(callback);
    }
    retrieveHTMLNode(callback) {
        let htmlNode = null;
        if (htmlNode === null) {
            const childHTMLNodes = this.getChildHTMLNodes();
            childHTMLNodes.some((childHTMLNode)=>{
                htmlNode = childHTMLNode.retrieveHTMLNode(callback);
                if (htmlNode !== null) {
                    return true;
                }
            });
        }
        if (htmlNode === null) {
            htmlNode = this;
            const result = callback(htmlNode);
            if (!result) {
                htmlNode = null;
            }
        }
        return htmlNode;
    }
    removeChildHTMLNodes(removedChildHTMLNodes = null) {
        let childHTMLNodes;
        childHTMLNodes = this.getChildHTMLNodes();
        if (removedChildHTMLNodes !== null) {
            childHTMLNodes = childHTMLNodes.filter((childHTMLNode)=>{
                const markdownNode = childHTMLNode.getMarkdownNode(), index = removedChildHTMLNodes.findIndex((removedChildHTMLNode)=>{
                    const markdownNodeMatches = removedChildHTMLNode.matchMarkdownNode(markdownNode);
                    if (markdownNodeMatches) {
                        return true;
                    }
                });
                if (index !== -1) {
                    return true;
                }
            });
        }
        let removedChildNodes = childHTMLNodes; ///
        removedChildNodes = this.removeChildNodes(removedChildNodes);
        removedChildHTMLNodes = removedChildNodes; ///
        return removedChildHTMLNodes;
    }
    matchMarkdownNode(markdownNode) {
        const outerNode = markdownNode, outerNodeMatches = this.matchOuterNode(outerNode), markdownNodeMatches = outerNodeMatches; ///
        return markdownNodeMatches;
    }
    addChildHTMLNodes(addedChildHTMLNodes, startHTNLIndex) {
        const addedChildNodes = addedChildHTMLNodes, startIndex = startHTNLIndex; ///
        this.addChildNodes(addedChildNodes, startIndex);
    }
    adjustIndent(indent) {
        if (indent !== null) {
            indent = `${_constants.DOUBLE_SPACE}${indent}`;
        }
        return indent;
    }
    lines(context) {
        let lines;
        ({ lines = null } = this.constructor);
        if (lines === null) {
            lines = this.reduceChildNode((lines, childNode)=>{
                const childNodeLines = childNode.lines(context);
                lines += childNodeLines;
                return lines;
            }, 0);
        }
        return lines;
    }
    tagName(context) {
        const { tagName } = this.constructor;
        return tagName;
    }
    depth() {
        const { depth = null } = this.constructor;
        return depth;
    }
    className(context) {
        const { className } = this.constructor;
        return className;
    }
    closingTag(context) {
        const tagName = this.tagName(context), closingTag = `</${tagName}>`;
        return closingTag;
    }
    startingTag(context) {
        const tagName = this.tagName(context), className = this.className(context), attributeName = this.attributeName(context), attributeValue = this.attributeValue(context), classHTML = className !== null ? ` class="${className}"` : _constants.EMPTY_STRING, attributeHTML = attributeName !== null && attributeValue !== null ? ` ${attributeName}="${attributeValue}"` : _constants.EMPTY_STRING, startingTag = `<${tagName}${classHTML}${attributeHTML}>`;
        return startingTag;
    }
    selfClosingTag(context) {
        const tagName = this.tagName(context), selfClosingTag = `<${tagName}/>`;
        return selfClosingTag;
    }
    attributeName(context) {
        const attributeName = null;
        return attributeName;
    }
    attributeValue(context) {
        const attributeValue = null;
        return attributeValue;
    }
    createDOMElement(context) {
        let domElement;
        const tagName = this.tagName(context);
        domElement = document.createElement(tagName);
        const className = this.className(context), attributeName = this.attributeName(context), attributeValue = this.attributeValue(context);
        if (className !== null) {
            Object.assign(domElement, {
                className
            });
        }
        if (attributeName !== null && attributeValue !== null) {
            domElement.setAttribute(attributeName, attributeValue);
        }
        return domElement;
    }
    mount(parentDOMElement, siblingDOMElement, context) {
        this.domElement = this.createDOMElement(context);
        siblingDOMElement !== null ? (0, _dom.insertAfter)(this.domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(this.domElement, parentDOMElement);
        parentDOMElement = this.domElement; ///
        siblingDOMElement = null;
        this.childNodes.forEach((childNode)=>{
            siblingDOMElement = childNode.mount(parentDOMElement, siblingDOMElement, context);
        });
        siblingDOMElement = this.domElement; ///
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
        {
            const parentDOMElement = this.domElement; ///
            this.childNodes.forEach((childNode)=>{
                childNode.unmount(parentDOMElement);
            });
        }
        (0, _dom.remove)(this.domElement, parentDOMElement);
        this.domElement = null;
    }
    asHTML(indent, context) {
        if (context === undefined) {
            context = indent; ///
            indent = _constants.EMPTY_STRING;
        }
        let html;
        indent = this.adjustIndent(indent);
        const className = this.className(context), attributeName = this.attributeName(context), childNodesHTML = this.childNodesAsHTML(indent, context);
        if (childNodesHTML !== _constants.EMPTY_STRING || className !== null || attributeName !== null) {
            const startingTag = this.startingTag(context), closingTag = this.closingTag(context);
            html = indent === null ? `${startingTag}${childNodesHTML}${closingTag}` : `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;
        } else {
            const selfClosingTag = this.selfClosingTag(context);
            html = indent === null ? `${selfClosingTag}` : `${indent}${selfClosingTag}
`;
        }
        return html;
    }
    asPlainText(context) {
        const childNodesPlainText = this.childNodesAsPlainText(context), plainText = childNodesPlainText; ///
        return plainText;
    }
    childNodesAsHTML(indent, context) {
        const childNodesHTML = this.reduceChildNode((childNodesHTML, childNode)=>{
            const childNodeHTML = childNode.asHTML(indent, context);
            childNodesHTML = `${childNodesHTML}${childNodeHTML}`;
            return childNodesHTML;
        }, _constants.EMPTY_STRING);
        return childNodesHTML;
    }
    childNodesAsPlainText(context) {
        const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode)=>{
            const childNodePlainText = childNode.asPlainText(context);
            childNodesPlainText = `${childNodesPlainText}
${childNodePlainText}`;
            return childNodesPlainText;
        }, _constants.EMPTY_STRING);
        return childNodesPlainText;
    }
    static fromNothing(Class, ...remainingArguments) {
        if (Class === undefined) {
            Class = HTMLNode; ///
        }
        const domElement = null, htmlNode = _occamdom.Node.fromNothing(Class, domElement, ...remainingArguments);
        return htmlNode;
    }
    static fromOuterNode(Class, outerNode, ...remainingArguments) {
        if (outerNode === undefined) {
            outerNode = Class; ///
            Class = HTMLNode; ///
        }
        const domElement = null, htmlNode = _occamdom.Node.fromOuterNode(Class, outerNode, domElement, ...remainingArguments);
        return htmlNode;
    }
    static fromDOMElement(Class, domElement, ...remainingArguments) {
        if (domElement === undefined) {
            domElement = Class; ///
            Class = HTMLNode; ///
        }
        const htmlNode = _occamdom.Node.fromNothing(Class, domElement, ...remainingArguments);
        return htmlNode;
    }
    static fromChildHTMLNodes(Class, childHTMLNodes, ...remainingArguments) {
        if (childHTMLNodes === undefined) {
            childHTMLNodes = Class; ///
            Class = HTMLNode; ///
        }
        const childNodes = childHTMLNodes, domElement = null, htmlNode = _occamdom.Node.fromChildNodes(Class, childNodes, domElement, ...remainingArguments);
        return htmlNode;
    }
}
Object.assign(HTMLNode.prototype, _node.default);
const _default = HTMLNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBub2RlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZWhhbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5jbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICByZXNldERPTUVsZW1lbnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBtYXJrZG93bk5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50SFRNTE5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50SFRNTE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZEhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRBbmNlc3RvckhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCksXG4gICAgICAgICAgYW5jZXN0b3JIVE1MTm9kZXMgPSBhbmNlc3Rvck5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jZXN0b3JIVE1MTm9kZXM7XG4gIH1cblxuICByZWR1Y2VDaGlsZEhUTUxOb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMucmVkdWNlQ2hpbGROb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgc29tZUFuY2VzdG9ySFRNTE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUFuY2VzdG9yTm9kZShjYWxsYmFjayk7IH1cblxuICBzb21lQ2hpbGRIVE1MTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lQ2hpbGROb2RlKGNhbGxiYWNrKTsgfVxuXG4gIHJldHJpZXZlSFRNTE5vZGUoY2FsbGJhY2spIHtcbiAgICBsZXQgaHRtbE5vZGUgPSBudWxsO1xuXG4gICAgaWYgKGh0bWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHRoaXMuZ2V0Q2hpbGRIVE1MTm9kZXMoKTtcblxuICAgICAgY2hpbGRIVE1MTm9kZXMuc29tZSgoY2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICBodG1sTm9kZSA9IGNoaWxkSFRNTE5vZGUucmV0cmlldmVIVE1MTm9kZShjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKGh0bWxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChodG1sTm9kZSA9PT0gbnVsbCkge1xuICAgICAgaHRtbE5vZGUgPSB0aGlzO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhodG1sTm9kZSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGh0bWxOb2RlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cblxuICByZW1vdmVDaGlsZEhUTUxOb2RlcyhyZW1vdmVkQ2hpbGRIVE1MTm9kZXMgPSBudWxsKSB7XG4gICAgbGV0IGNoaWxkSFRNTE5vZGVzO1xuXG4gICAgY2hpbGRIVE1MTm9kZXMgPSB0aGlzLmdldENoaWxkSFRNTE5vZGVzKCk7XG5cbiAgICBpZiAocmVtb3ZlZENoaWxkSFRNTE5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjaGlsZEhUTUxOb2RlcyA9IGNoaWxkSFRNTE5vZGVzLmZpbHRlcigoY2hpbGRIVE1MTm9kZSkgPT4geyAvLy9cbiAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGRIVE1MTm9kZS5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgICAgaW5kZXggPSByZW1vdmVkQ2hpbGRIVE1MTm9kZXMuZmluZEluZGV4KChyZW1vdmVkQ2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZU1hdGNoZXMgPSByZW1vdmVkQ2hpbGRIVE1MTm9kZS5tYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtkb3duTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlZENoaWxkTm9kZXMgPSBjaGlsZEhUTUxOb2RlczsgIC8vL1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgcmVtb3ZlZENoaWxkSFRNTE5vZGVzID0gcmVtb3ZlZENoaWxkTm9kZXM7ICAvLy9cblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBtYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBvdXRlck5vZGUgPSBtYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIG91dGVyTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlTWF0Y2hlcyA9IG91dGVyTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZU1hdGNoZXM7XG4gIH1cblxuICBhZGRDaGlsZEhUTUxOb2RlcyhhZGRlZENoaWxkSFRNTE5vZGVzLCBzdGFydEhUTkxJbmRleCkge1xuICAgIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IGFkZGVkQ2hpbGRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBzdGFydEluZGV4ID0gc3RhcnRIVE5MSW5kZXg7ICAvLy9cblxuICAgIHRoaXMuYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGlmIChpbmRlbnQgIT09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IGAke0RPVUJMRV9TUEFDRX0ke2luZGVudH1gO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgbGV0IGxpbmVzO1xuXG4gICAgKHsgbGluZXMgPSBudWxsIH0gPSB0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgIGlmIChsaW5lcyA9PT0gbnVsbCkge1xuICAgICAgbGluZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgobGluZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVMaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcblxuICAgICAgICBsaW5lcyArPSBjaGlsZE5vZGVMaW5lcztcblxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICB0YWdOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIGRlcHRoKCkge1xuICAgIGNvbnN0IHsgZGVwdGggPSBudWxsIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkge1xuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKHRoaXMuZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgaW5zZXJ0QmVmb3JlaGFuZCh0aGlzLmRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGNoaWxkTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY2hpbGROb2RlLnVubW91bnQocGFyZW50RE9NRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmUodGhpcy5kb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IGluZGVudDsgLy8vXG5cbiAgICAgIGluZGVudCA9IEVNUFRZX1NUUklORztcbiAgICB9XG5cbiAgICBsZXQgaHRtbDtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoKGNoaWxkTm9kZXNIVE1MICE9PSBFTVBUWV9TVFJJTkcpIHx8IChjbGFzc05hbWUgIT09IG51bGwpIHx8IChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSkge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIGAke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfWAgOlxuICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VsZkNsb3NpbmdUYWcgPSB0aGlzLnNlbGZDbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgYCR7c2VsZkNsb3NpbmdUYWd9YCA6XG4gICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3NlbGZDbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgcGxhaW5UZXh0ID0gY2hpbGROb2Rlc1BsYWluVGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc0hUTUwsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlSFRNTCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH0ke2NoaWxkTm9kZUhUTUx9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHQgPSBjaGlsZE5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fVxuJHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgaHRtbE5vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGh0bWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBodG1sTm9kZSA9IE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGh0bWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoZG9tRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb21FbGVtZW50ID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IEhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBodG1sTm9kZSA9IE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNoaWxkSFRNTE5vZGVzKENsYXNzLCBjaGlsZEhUTUxOb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNoaWxkSFRNTE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkSFRNTE5vZGVzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkSFRNTE5vZGVzLCAgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgaHRtbE5vZGUgPSBOb2RlLmZyb21DaGlsZE5vZGVzKENsYXNzLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGh0bWxOb2RlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSFRNTE5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTE5vZGU7XG4iXSwibmFtZXMiOlsiSFRNTE5vZGUiLCJOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJyZXNldERPTUVsZW1lbnQiLCJnZXRSdWxlTmFtZSIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldE91dGVyTm9kZSIsImdldFBhcmVudEhUTUxOb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInBhcmVudEhUTUxOb2RlIiwiZ2V0Q2hpbGRIVE1MTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGRIVE1MTm9kZXMiLCJnZXRBbmNlc3RvckhUTUxOb2RlcyIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JIVE1MTm9kZXMiLCJyZWR1Y2VDaGlsZEhUTUxOb2RlIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2VDaGlsZE5vZGUiLCJzb21lQW5jZXN0b3JIVE1MTm9kZSIsInNvbWVBbmNlc3Rvck5vZGUiLCJzb21lQ2hpbGRIVE1MTm9kZSIsInNvbWVDaGlsZE5vZGUiLCJyZXRyaWV2ZUhUTUxOb2RlIiwiaHRtbE5vZGUiLCJzb21lIiwiY2hpbGRIVE1MTm9kZSIsInJlc3VsdCIsInJlbW92ZUNoaWxkSFRNTE5vZGVzIiwicmVtb3ZlZENoaWxkSFRNTE5vZGVzIiwiZmlsdGVyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJyZW1vdmVkQ2hpbGRIVE1MTm9kZSIsIm1hcmtkb3duTm9kZU1hdGNoZXMiLCJtYXRjaE1hcmtkb3duTm9kZSIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsIm91dGVyTm9kZU1hdGNoZXMiLCJtYXRjaE91dGVyTm9kZSIsImFkZENoaWxkSFRNTE5vZGVzIiwiYWRkZWRDaGlsZEhUTUxOb2RlcyIsInN0YXJ0SFROTEluZGV4IiwiYWRkZWRDaGlsZE5vZGVzIiwic3RhcnRJbmRleCIsImFkZENoaWxkTm9kZXMiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJET1VCTEVfU1BBQ0UiLCJsaW5lcyIsImNvbnRleHQiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVMaW5lcyIsInRhZ05hbWUiLCJkZXB0aCIsImNsYXNzTmFtZSIsImNsb3NpbmdUYWciLCJzdGFydGluZ1RhZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNsYXNzSFRNTCIsIkVNUFRZX1NUUklORyIsImF0dHJpYnV0ZUhUTUwiLCJzZWxmQ2xvc2luZ1RhZyIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRBdHRyaWJ1dGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsImZvckVhY2giLCJ1bm1vdW50IiwicmVtb3ZlIiwiYXNIVE1MIiwidW5kZWZpbmVkIiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsImFzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZUhUTUwiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbU91dGVyTm9kZSIsImZyb21ET01FbGVtZW50IiwiZnJvbUNoaWxkSFRNTE5vZGVzIiwiZnJvbUNoaWxkTm9kZXMiLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvYUE7OztlQUFBOzs7MEJBbGFxQjs2REFFRTsyQkFFb0I7cUJBQ1c7Ozs7OztBQUV0RCxNQUFNQSxpQkFBaUJDLGNBQUk7SUFDekIsWUFBWUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxDQUFFO1FBQ3pELEtBQUssQ0FBQ0gsV0FBV0MsWUFBWUM7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxVQUFVO0lBQ3hCO0lBRUFFLGNBQWNGLFVBQVUsRUFBRTtRQUN4QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUcsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQ0gsVUFBVSxHQUFHO0lBQ3BCO0lBRUFJLGNBQWM7UUFDWixNQUFNQyxlQUFlLElBQUks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