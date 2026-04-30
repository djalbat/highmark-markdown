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
        if (this.domElement !== null) {
            siblingDOMElement !== null ? (0, _dom.insertAfter)(this.domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(this.domElement, parentDOMElement);
            parentDOMElement = this.domElement; ///
            siblingDOMElement = null;
            this.childNodes.forEach((childNode)=>{
                siblingDOMElement = childNode.mount(parentDOMElement, siblingDOMElement, context);
            });
            siblingDOMElement = this.domElement; ///
        }
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
        if (this.domElement !== null) {
            {
                const parentDOMElement = this.domElement; ///
                this.childNodes.forEach((childNode)=>{
                    childNode.unmount(parentDOMElement);
                });
            }
            (0, _dom.remove)(this.domElement, parentDOMElement);
            this.domElement = null;
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBub2RlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZWhhbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5jbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICByZXNldERPTUVsZW1lbnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBtYXJrZG93bk5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50SFRNTE5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50SFRNTE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZEhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRBbmNlc3RvckhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCksXG4gICAgICAgICAgYW5jZXN0b3JIVE1MTm9kZXMgPSBhbmNlc3Rvck5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jZXN0b3JIVE1MTm9kZXM7XG4gIH1cblxuICByZWR1Y2VDaGlsZEhUTUxOb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMucmVkdWNlQ2hpbGROb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgc29tZUFuY2VzdG9ySFRNTE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUFuY2VzdG9yTm9kZShjYWxsYmFjayk7IH1cblxuICBzb21lQ2hpbGRIVE1MTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lQ2hpbGROb2RlKGNhbGxiYWNrKTsgfVxuXG4gIHJldHJpZXZlSFRNTE5vZGUoY2FsbGJhY2spIHtcbiAgICBsZXQgaHRtbE5vZGUgPSBudWxsO1xuXG4gICAgaWYgKGh0bWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHRoaXMuZ2V0Q2hpbGRIVE1MTm9kZXMoKTtcblxuICAgICAgY2hpbGRIVE1MTm9kZXMuc29tZSgoY2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICBodG1sTm9kZSA9IGNoaWxkSFRNTE5vZGUucmV0cmlldmVIVE1MTm9kZShjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKGh0bWxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChodG1sTm9kZSA9PT0gbnVsbCkge1xuICAgICAgaHRtbE5vZGUgPSB0aGlzO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhodG1sTm9kZSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGh0bWxOb2RlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cblxuICByZW1vdmVDaGlsZEhUTUxOb2RlcyhyZW1vdmVkQ2hpbGRIVE1MTm9kZXMgPSBudWxsKSB7XG4gICAgbGV0IGNoaWxkSFRNTE5vZGVzO1xuXG4gICAgY2hpbGRIVE1MTm9kZXMgPSB0aGlzLmdldENoaWxkSFRNTE5vZGVzKCk7XG5cbiAgICBpZiAocmVtb3ZlZENoaWxkSFRNTE5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjaGlsZEhUTUxOb2RlcyA9IGNoaWxkSFRNTE5vZGVzLmZpbHRlcigoY2hpbGRIVE1MTm9kZSkgPT4geyAvLy9cbiAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGRIVE1MTm9kZS5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgICAgaW5kZXggPSByZW1vdmVkQ2hpbGRIVE1MTm9kZXMuZmluZEluZGV4KChyZW1vdmVkQ2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZU1hdGNoZXMgPSByZW1vdmVkQ2hpbGRIVE1MTm9kZS5tYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtkb3duTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlZENoaWxkTm9kZXMgPSBjaGlsZEhUTUxOb2RlczsgIC8vL1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgcmVtb3ZlZENoaWxkSFRNTE5vZGVzID0gcmVtb3ZlZENoaWxkTm9kZXM7ICAvLy9cblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBtYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBvdXRlck5vZGUgPSBtYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIG91dGVyTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlTWF0Y2hlcyA9IG91dGVyTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZU1hdGNoZXM7XG4gIH1cblxuICBhZGRDaGlsZEhUTUxOb2RlcyhhZGRlZENoaWxkSFRNTE5vZGVzLCBzdGFydEhUTkxJbmRleCkge1xuICAgIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IGFkZGVkQ2hpbGRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBzdGFydEluZGV4ID0gc3RhcnRIVE5MSW5kZXg7ICAvLy9cblxuICAgIHRoaXMuYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGlmIChpbmRlbnQgIT09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IGAke0RPVUJMRV9TUEFDRX0ke2luZGVudH1gO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgbGV0IGxpbmVzO1xuXG4gICAgKHsgbGluZXMgPSBudWxsIH0gPSB0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgIGlmIChsaW5lcyA9PT0gbnVsbCkge1xuICAgICAgbGluZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgobGluZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVMaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcblxuICAgICAgICBsaW5lcyArPSBjaGlsZE5vZGVMaW5lcztcblxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICB0YWdOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIGRlcHRoKCkge1xuICAgIGNvbnN0IHsgZGVwdGggPSBudWxsIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkge1xuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgaW5zZXJ0QWZ0ZXIodGhpcy5kb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCkgOlxuICAgICAgICAgIGluc2VydEJlZm9yZWhhbmQodGhpcy5kb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGNoaWxkTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjaGlsZE5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlbW92ZSh0aGlzLmRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gaW5kZW50OyAvLy9cblxuICAgICAgaW5kZW50ID0gRU1QVFlfU1RSSU5HO1xuICAgIH1cblxuICAgIGxldCBodG1sO1xuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmICgoY2hpbGROb2Rlc0hUTUwgIT09IEVNUFRZX1NUUklORykgfHwgKGNsYXNzTmFtZSAhPT0gbnVsbCkgfHwgKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YCA6XG4gICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IHRoaXMuc2VsZkNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBgJHtzZWxmQ2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLmNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHQgPSBjaGlsZE5vZGVzUGxhaW5UZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfSR7Y2hpbGROb2RlSFRNTH1gO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9XG4ke2NoaWxkTm9kZVBsYWluVGV4dH1gO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IEhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBodG1sTm9kZSA9IE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIGh0bWxOb2RlID0gTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChkb21FbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvbUVsZW1lbnQgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWxOb2RlID0gTm9kZS5mcm9tTm90aGluZyhDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGRIVE1MTm9kZXMoQ2xhc3MsIGNoaWxkSFRNTE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY2hpbGRIVE1MTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGRIVE1MTm9kZXMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBodG1sTm9kZSA9IE5vZGUuZnJvbUNoaWxkTm9kZXMoQ2xhc3MsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihIVE1MTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBIVE1MTm9kZTtcbiJdLCJuYW1lcyI6WyJIVE1MTm9kZSIsIk5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsInJlc2V0RE9NRWxlbWVudCIsImdldFJ1bGVOYW1lIiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0T3V0ZXJOb2RlIiwiZ2V0UGFyZW50SFRNTE5vZGUiLCJnZXRQYXJlbnROb2RlIiwicGFyZW50SFRNTE5vZGUiLCJnZXRDaGlsZEhUTUxOb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZEhUTUxOb2RlcyIsImdldEFuY2VzdG9ySFRNTE5vZGVzIiwiYW5jZXN0b3JOb2RlcyIsImdldEFuY2VzdG9yTm9kZXMiLCJhbmNlc3RvckhUTUxOb2RlcyIsInJlZHVjZUNoaWxkSFRNTE5vZGUiLCJjYWxsYmFjayIsImluaXRpYWxWYWx1ZSIsInJlZHVjZUNoaWxkTm9kZSIsInNvbWVBbmNlc3RvckhUTUxOb2RlIiwic29tZUFuY2VzdG9yTm9kZSIsInNvbWVDaGlsZEhUTUxOb2RlIiwic29tZUNoaWxkTm9kZSIsInJldHJpZXZlSFRNTE5vZGUiLCJodG1sTm9kZSIsInNvbWUiLCJjaGlsZEhUTUxOb2RlIiwicmVzdWx0IiwicmVtb3ZlQ2hpbGRIVE1MTm9kZXMiLCJyZW1vdmVkQ2hpbGRIVE1MTm9kZXMiLCJmaWx0ZXIiLCJpbmRleCIsImZpbmRJbmRleCIsInJlbW92ZWRDaGlsZEhUTUxOb2RlIiwibWFya2Rvd25Ob2RlTWF0Y2hlcyIsIm1hdGNoTWFya2Rvd25Ob2RlIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwib3V0ZXJOb2RlTWF0Y2hlcyIsIm1hdGNoT3V0ZXJOb2RlIiwiYWRkQ2hpbGRIVE1MTm9kZXMiLCJhZGRlZENoaWxkSFRNTE5vZGVzIiwic3RhcnRIVE5MSW5kZXgiLCJhZGRlZENoaWxkTm9kZXMiLCJzdGFydEluZGV4IiwiYWRkQ2hpbGROb2RlcyIsImFkanVzdEluZGVudCIsImluZGVudCIsIkRPVUJMRV9TUEFDRSIsImxpbmVzIiwiY29udGV4dCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUxpbmVzIiwidGFnTmFtZSIsImRlcHRoIiwiY2xhc3NOYW1lIiwiY2xvc2luZ1RhZyIsInN0YXJ0aW5nVGFnIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xhc3NIVE1MIiwiRU1QVFlfU1RSSU5HIiwiYXR0cmlidXRlSFRNTCIsInNlbGZDbG9zaW5nVGFnIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInNldEF0dHJpYnV0ZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRCZWZvcmVoYW5kIiwiZm9yRWFjaCIsInVubW91bnQiLCJyZW1vdmUiLCJhc0hUTUwiLCJ1bmRlZmluZWQiLCJodG1sIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwiYXNQbGFpblRleHQiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiY2hpbGROb2RlSFRNTCIsImNoaWxkTm9kZVBsYWluVGV4dCIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmcm9tT3V0ZXJOb2RlIiwiZnJvbURPTUVsZW1lbnQiLCJmcm9tQ2hpbGRIVE1MTm9kZXMiLCJmcm9tQ2hpbGROb2RlcyIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdhQTs7O2VBQUE7OzswQkF0YXFCOzZEQUVFOzJCQUVvQjtxQkFDVzs7Ozs7O0FBRXRELE1BQU1BLGlCQUFpQkMsY0FBSTtJQUN6QixZQUFZQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLENBQUU7UUFDekQsS0FBSyxDQUFDSCxXQUFXQyxZQUFZQztRQUU3QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsY0FBY0Ys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