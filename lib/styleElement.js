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
    get createDOMElement () {
        return createDOMElement;
    },
    get default () {
        return StyleElement;
    }
});
const _constants = require("./constants");
const _dom = require("./utilities/dom");
const _element = require("./utilities/element");
class StyleElement {
    constructor(domElement){
        const element = this; ///
        (0, _element.constructElement)(element, domElement);
    }
    getDOMElement() {
        return this.domElement;
    }
    getInnerHTML() {
        return this.domElement.innerHTML;
    }
    setInnerHTML(innerHTML) {
        this.domElement.innerHTML = innerHTML;
    }
    setCSS(css) {
        const innerHTML = `
${css}
`;
        this.setInnerHTML(innerHTML);
    }
    remove() {
        this.domElement.remove();
    }
    destroy() {
        const element = this; ///
        (0, _element.destroyElement)(element);
    }
}
function createDOMElement() {
    const headDOMElement = document.querySelector(_constants.HEAD), styleDOMElement = document.createElement(_constants.STYLE), parentDOMElement = headDOMElement, domElement = styleDOMElement; ///
    (0, _dom.insertAfterwards)(domElement, parentDOMElement);
    return domElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhFQUQsIFNUWUxFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RvbVwiO1xuaW1wb3J0IHsgY29uc3RydWN0RWxlbWVudCwgZGVzdHJveUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHsgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyB9XG5cbiAgc2V0SW5uZXJIVE1MKGlubmVySFRNTCkgeyB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MOyB9XG5cbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiR7Y3NzfVxuYDtcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudCgpIHtcbiAgY29uc3QgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEhFQUQpLFxuICAgICAgICBzdHlsZURPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFNUWUxFKSxcbiAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGhlYWRET01FbGVtZW50LCAgLy8vXG4gICAgICAgIGRvbUVsZW1lbnQgPSBzdHlsZURPTUVsZW1lbnQ7IC8vL1xuXG4gIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NRWxlbWVudCIsIlN0eWxlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJlbGVtZW50IiwiY29uc3RydWN0RWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJzZXRJbm5lckhUTUwiLCJzZXRDU1MiLCJjc3MiLCJyZW1vdmUiLCJkZXN0cm95IiwiZGVzdHJveUVsZW1lbnQiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkhFQUQiLCJzdHlsZURPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiU1RZTEUiLCJwYXJlbnRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXJ3YXJkcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd0NnQkE7ZUFBQUE7O1FBbENoQjtlQUFxQkM7OzsyQkFKTztxQkFDSzt5QkFDZ0I7QUFFbEMsTUFBTUE7SUFDbkIsWUFBWUMsVUFBVSxDQUFFO1FBQ3RCLE1BQU1DLFVBQVUsSUFBSSxFQUFFLEdBQUc7UUFFekJDLElBQUFBLHlCQUFnQixFQUFDRCxTQUFTRDtJQUM1QjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVTtJQUN4QjtJQUVBSSxlQUFlO1FBQUcsT0FBTyxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ssU0FBUztJQUFFO0lBRXBEQyxhQUFhRCxTQUFTLEVBQUU7UUFBRSxJQUFJLENBQUNMLFVBQVUsQ0FBQ0ssU0FBUyxHQUFHQTtJQUFXO0lBRWpFRSxPQUFPQyxHQUFHLEVBQUU7UUFDVixNQUFNSCxZQUFZLENBQUM7QUFDdkIsRUFBRUcsSUFBSTtBQUNOLENBQUM7UUFFRyxJQUFJLENBQUNGLFlBQVksQ0FBQ0Q7SUFDcEI7SUFFQUksU0FBUztRQUNQLElBQUksQ0FBQ1QsVUFBVSxDQUFDUyxNQUFNO0lBQ3hCO0lBRUFDLFVBQVU7UUFDUixNQUFNVCxVQUFVLElBQUksRUFBRSxHQUFHO1FBRXpCVSxJQUFBQSx1QkFBYyxFQUFDVjtJQUNqQjtBQUNGO0FBRU8sU0FBU0g7SUFDZCxNQUFNYyxpQkFBaUJDLFNBQVNDLGFBQWEsQ0FBQ0MsZUFBSSxHQUM1Q0Msa0JBQWtCSCxTQUFTSSxhQUFhLENBQUNDLGdCQUFLLEdBQzlDQyxtQkFBbUJQLGdCQUNuQlosYUFBYWdCLGlCQUFpQixHQUFHO0lBRXZDSSxJQUFBQSxxQkFBZ0IsRUFBQ3BCLFlBQVltQjtJQUU3QixPQUFPbkI7QUFDVCJ9