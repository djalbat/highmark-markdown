"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSetCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
const _selectorsList = /*#__PURE__*/ _interop_require_default(require("../../transform/css/selectorsList"));
const _constants = require("../../constants");
const _css1 = require("../../utilities/css");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RuleSetCSSNode extends _css.default {
    getSelectorsListCSSNode() {
        const selectorsListCSSNode = this.fromFirstChildNode((firstChildNode)=>{
            const selectorsListCSSNode = firstChildNode; ///
            return selectorsListCSSNode;
        });
        return selectorsListCSSNode;
    }
    resolveSelectors(context) {
        const node = this, ruleSetCSSNodes = (0, _css1.ruleSetCSSNodesFromNode)(node);
        ruleSetCSSNodes.forEach((ruleSetCSSNode)=>{
            ruleSetCSSNode.resolveSelectors(context);
        });
        const ruleSetCSSNode = this, selectorsListCSSNodes = (0, _css1.selectorsListCSSNodesFromNode)(node), selectorsListCSSTransform = _selectorsList.default.fromRuleSetCSSNode(ruleSetCSSNode);
        selectorsListCSSNodes.forEach((selectorsListCSSNode)=>{
            selectorsListCSSTransform.mergeWithSelectorsListCSSNode(selectorsListCSSNode);
        });
    }
    asCSS(context) {
        let css;
        const multiplicity = this.getMultiplicity(), firstIndex = 0, lastIndex = multiplicity - 1;
        css = this.reduceChildNode((css, childNode, index)=>{
            const childNodeCSS = childNode.asCSS(context);
            css = `${css}${childNodeCSS}`;
            if (index === firstIndex) {
                css = `${css} {
`;
            }
            if (index === lastIndex) {
                css = `${css}}

`;
            }
            return css;
        }, _constants.EMPTY_STRING);
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(RuleSetCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(RuleSetCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcbmltcG9ydCBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZVNldENTU05vZGVzRnJvbU5vZGUsIHNlbGVjdG9yc0xpc3RDU1NOb2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldENTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzTGlzdENTU05vZGUgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yc0xpc3RDU1NOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmV0dXJuIHNlbGVjdG9yc0xpc3RDU1NOb2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3RDU1NOb2RlO1xuICB9XG5cbiAgcmVzb2x2ZVNlbGVjdG9ycyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgcnVsZVNldENTU05vZGVzID0gcnVsZVNldENTU05vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBydWxlU2V0Q1NTTm9kZXMuZm9yRWFjaCgocnVsZVNldENTU05vZGUpID0+IHtcbiAgICAgIHJ1bGVTZXRDU1NOb2RlLnJlc29sdmVTZWxlY3RvcnMoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBydWxlU2V0Q1NTTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTTm9kZXMgPSBzZWxlY3RvcnNMaXN0Q1NTTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtID0gU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybS5mcm9tUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpO1xuXG4gICAgc2VsZWN0b3JzTGlzdENTU05vZGVzLmZvckVhY2goKHNlbGVjdG9yc0xpc3RDU1NOb2RlKSA9PiB7XG4gICAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLm1lcmdlV2l0aFNlbGVjdG9yc0xpc3RDU1NOb2RlKHNlbGVjdG9yc0xpc3RDU1NOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBsZXQgY3NzO1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gICAgY3NzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNzcywgY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlQ1NTID0gY2hpbGROb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgICBjc3MgPSBgJHtjc3N9JHtjaGlsZE5vZGVDU1N9YDtcblxuICAgICAgaWYgKGluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICAgIGNzcyA9IGAke2Nzc30ge1xuYDtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgY3NzID0gYCR7Y3NzfX1cblxuYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoUnVsZVNldENTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoUnVsZVNldENTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0Q1NTTm9kZSIsIkNTU05vZGUiLCJnZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NOb2RlIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJyZXNvbHZlU2VsZWN0b3JzIiwiY29udGV4dCIsIm5vZGUiLCJydWxlU2V0Q1NTTm9kZXMiLCJydWxlU2V0Q1NTTm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJydWxlU2V0Q1NTTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NOb2RlcyIsInNlbGVjdG9yc0xpc3RDU1NOb2Rlc0Zyb21Ob2RlIiwic2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSIsIlNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0iLCJmcm9tUnVsZVNldENTU05vZGUiLCJtZXJnZVdpdGhTZWxlY3RvcnNMaXN0Q1NTTm9kZSIsImFzQ1NTIiwiY3NzIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwiZmlyc3RJbmRleCIsImxhc3RJbmRleCIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwiY2hpbGROb2RlQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7OzREQU5EO3NFQUNrQjsyQkFFVDtzQkFDMEM7Ozs7OztBQUV4RCxNQUFNQSx1QkFBdUJDLFlBQU87SUFDakRDLDBCQUEwQjtRQUN4QixNQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxDQUFDQztZQUNwRCxNQUFNRix1QkFBdUJFLGdCQUFpQixHQUFHO1lBRWpELE9BQU9GO1FBQ1Q7UUFFQSxPQUFPQTtJQUNUO0lBRUFHLGlCQUFpQkMsT0FBTyxFQUFFO1FBQ3hCLE1BQU1DLE9BQU8sSUFBSSxFQUNYQyxrQkFBa0JDLElBQUFBLDZCQUF1QixFQUFDRjtRQUVoREMsZ0JBQWdCRSxPQUFPLENBQUMsQ0FBQ0M7WUFDdkJBLGVBQWVOLGdCQUFnQixDQUFDQztRQUNsQztRQUVBLE1BQU1LLGlCQUFpQixJQUFJLEVBQ3JCQyx3QkFBd0JDLElBQUFBLG1DQUE2QixFQUFDTixPQUN0RE8sNEJBQTRCQyxzQkFBeUIsQ0FBQ0Msa0JBQWtCLENBQUNMO1FBRS9FQyxzQkFBc0JGLE9BQU8sQ0FBQyxDQUFDUjtZQUM3QlksMEJBQTBCRyw2QkFBNkIsQ0FBQ2Y7UUFDMUQ7SUFDRjtJQUVBZ0IsTUFBTVosT0FBTyxFQUFFO1FBQ2IsSUFBSWE7UUFFSixNQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0MsYUFBYSxHQUNiQyxZQUFZSCxlQUFlO1FBRWpDRCxNQUFNLElBQUksQ0FBQ0ssZUFBZSxDQUFDLENBQUNMLEtBQUtNLFdBQVdDO1lBQzFDLE1BQU1DLGVBQWVGLFVBQVVQLEtBQUssQ0FBQ1o7WUFFckNhLE1BQU0sR0FBR0EsTUFBTVEsY0FBYztZQUU3QixJQUFJRCxVQUFVSixZQUFZO2dCQUN4QkgsTUFBTSxHQUFHQSxJQUFJO0FBQ3JCLENBQUM7WUFDSztZQUVBLElBQUlPLFVBQVVILFdBQVc7Z0JBQ3ZCSixNQUFNLEdBQUdBLElBQUk7O0FBRXJCLENBQUM7WUFDSztZQUVBLE9BQU9BO1FBQ1QsR0FBR1MsdUJBQVk7UUFFZixPQUFPVDtJQUNUO0lBRUEsT0FBT1UsY0FBYztRQUFFLE9BQU83QixZQUFPLENBQUM2QixXQUFXLENBQUM5QjtJQUFpQjtJQUVuRSxPQUFPK0IsY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBTy9CLFlBQU8sQ0FBQzhCLGFBQWEsQ0FBQy9CLGdCQUFnQmdDO0lBQVk7QUFDN0YifQ==