"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHTMLTransform;
    }
});
var _letters = /*#__PURE__*/ _interop_require_default(require("../../letters"));
var _list = /*#__PURE__*/ _interop_require_default(require("../../index/list"));
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/index"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/heading/index"));
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
var IndexHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(IndexHTMLTransform, HTMLTransform);
    function IndexHTMLTransform(htmlNode, htmlNodes) {
        _class_call_check(this, IndexHTMLTransform);
        var _this;
        _this = _call_super(this, IndexHTMLTransform, [
            htmlNode
        ]);
        _this.htmlNodes = htmlNodes;
        return _this;
    }
    _create_class(IndexHTMLTransform, [
        {
            key: "getHTMLNodes",
            value: function getHTMLNodes() {
                return this.htmlNodes;
            }
        },
        {
            key: "addAfter",
            value: function addAfter(siblingHTMLNode) {
                var childNode = siblingHTMLNode, parentNode = childNode.getParentNode(), index = parentNode.indexOfChildNode(childNode), startIndex = index + 1, addedChildNodes = this.htmlNodes; ///
                parentNode.addChildNodes(addedChildNodes, startIndex);
            }
        },
        {
            key: "addAfterIndexDirectiveHTMLNode",
            value: function addAfterIndexDirectiveHTMLNode(indexDirectiveHTMLNode) {
                var siblingHTMLNode = indexDirectiveHTMLNode; ///
                this.addAfter(siblingHTMLNode);
            }
        }
    ], [
        {
            key: "fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes",
            value: function fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context) {
                var indexHTMLTransform = null;
                var indexList = _list.default.fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context), indexHTMLTransforms = [];
                _letters.default.forEach(function(letter) {
                    var indexListHTMLTransform = _index.default.fromIndexListAndLetter(indexList, letter);
                    if (indexListHTMLTransform !== null) {
                        var indexHTMLTransform;
                        var indexHeadingHTMLTransform = _index1.default.fromLetter(letter);
                        indexHTMLTransform = indexHeadingHTMLTransform; ///
                        indexHTMLTransforms.push(indexHTMLTransform);
                        indexHTMLTransform = indexListHTMLTransform; ///
                        indexHTMLTransforms.push(indexHTMLTransform);
                    }
                });
                var indexListHTMLTransformsLength = indexHTMLTransforms.length;
                if (indexListHTMLTransformsLength > 0) {
                    var htmlNode = null, htmlNodes = [];
                    indexHTMLTransforms.forEach(function(indexHTMLTransform) {
                        var htmlNode = indexHTMLTransform.getHTMLNode();
                        htmlNodes.push(htmlNode);
                    });
                    indexHTMLTransform = _html.default.fromHTMLNode(IndexHTMLTransform, htmlNode, htmlNodes);
                }
                return indexHTMLTransform;
            }
        }
    ]);
    return IndexHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxldHRlcnMgZnJvbSBcIi4uLy4uL2xldHRlcnNcIjtcbmltcG9ydCBJbmRleExpc3QgZnJvbSBcIi4uLy4uL2luZGV4L2xpc3RcIjtcbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbFwiO1xuaW1wb3J0IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvaW5kZXhcIjtcbmltcG9ydCBJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9oZWFkaW5nL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihodG1sTm9kZSwgaHRtbE5vZGVzKSB7XG4gICAgc3VwZXIoaHRtbE5vZGUpO1xuXG4gICAgdGhpcy5odG1sTm9kZXMgPSBodG1sTm9kZXM7XG4gIH1cblxuICBnZXRIVE1MTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGVzO1xuICB9XG5cbiAgYWRkQWZ0ZXIoc2libGluZ0hUTUxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gc2libGluZ0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgaW5kZXggPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlcyA9IHRoaXMuaHRtbE5vZGVzOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBzdGFydEluZGV4KTtcbiAgfVxuXG4gIGFkZEFmdGVySW5kZXhEaXJlY3RpdmVIVE1MTm9kZShpbmRleERpcmVjdGl2ZUhUTUxOb2RlKSB7XG4gICAgY29uc3Qgc2libGluZ0hUTUxOb2RlID0gaW5kZXhEaXJlY3RpdmVIVE1MTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5hZGRBZnRlcihzaWJsaW5nSFRNTE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhIVE1MVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGV4TGlzdCA9IEluZGV4TGlzdC5mcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zID0gW107XG5cbiAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSA9IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4TGlzdEFuZExldHRlcihpbmRleExpc3QsIGxldHRlcik7XG5cbiAgICAgIGlmIChpbmRleExpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBpbmRleEhUTUxUcmFuc2Zvcm07XG5cbiAgICAgICAgY29uc3QgaW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSA9IEluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0uZnJvbUxldHRlcihsZXR0ZXIpO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm07IC8vL1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybXMucHVzaChpbmRleEhUTUxUcmFuc2Zvcm0pO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm07ICAvLy9cblxuICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zLnB1c2goaW5kZXhIVE1MVHJhbnNmb3JtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gaW5kZXhIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhMaXN0SFRNTFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBodG1sTm9kZSA9IG51bGwsXG4gICAgICAgICAgICBodG1sTm9kZXMgPSBbXTtcblxuICAgICAgaW5kZXhIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChpbmRleEhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgY29uc3QgaHRtbE5vZGUgPSBpbmRleEhUTUxUcmFuc2Zvcm0uZ2V0SFRNTE5vZGUoKTtcblxuICAgICAgICBodG1sTm9kZXMucHVzaChodG1sTm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgaW5kZXhIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoSW5kZXhIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSwgaHRtbE5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJodG1sTm9kZXMiLCJnZXRIVE1MTm9kZXMiLCJhZGRBZnRlciIsInNpYmxpbmdIVE1MTm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiaW5kZXgiLCJpbmRleE9mQ2hpbGROb2RlIiwic3RhcnRJbmRleCIsImFkZGVkQ2hpbGROb2RlcyIsImFkZENoaWxkTm9kZXMiLCJhZGRBZnRlckluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGVBbmREaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTE5vZGVzIiwiY29udGV4dCIsImluZGV4SFRNTFRyYW5zZm9ybSIsImluZGV4TGlzdCIsIkluZGV4TGlzdCIsImluZGV4SFRNTFRyYW5zZm9ybXMiLCJsZXR0ZXJzIiwiZm9yRWFjaCIsImxldHRlciIsImluZGV4TGlzdEhUTUxUcmFuc2Zvcm0iLCJJbmRleExpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4TGlzdEFuZExldHRlciIsImluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0iLCJJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIiwiZnJvbUxldHRlciIsInB1c2giLCJpbmRleExpc3RIVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsImdldEhUTUxOb2RlIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7OERBTkQ7MkRBQ0U7MkRBQ0k7NERBQ1M7NkRBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQSxtQkFDUEMsUUFBUSxFQUFFQyxTQUFTO2dDQURaRjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7O1FBRU4sTUFBS0MsU0FBUyxHQUFHQTs7O2tCQUpBRjs7WUFPbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxlQUFlO2dCQUN0QixJQUFNQyxZQUFZRCxpQkFDWkUsYUFBYUQsVUFBVUUsYUFBYSxJQUNwQ0MsUUFBUUYsV0FBV0csZ0JBQWdCLENBQUNKLFlBQ3BDSyxhQUFhRixRQUFRLEdBQ3JCRyxrQkFBa0IsSUFBSSxDQUFDVixTQUFTLEVBQUcsR0FBRztnQkFFNUNLLFdBQVdNLGFBQWEsQ0FBQ0QsaUJBQWlCRDtZQUM1Qzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0JDLHNCQUFzQjtnQkFDbkQsSUFBTVYsa0JBQWtCVSx3QkFBeUIsR0FBRztnQkFFcEQsSUFBSSxDQUFDWCxRQUFRLENBQUNDO1lBQ2hCOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLCtDQUErQ0Qsc0JBQXNCLEVBQUVFLGlCQUFpQixFQUFFQyxPQUFPO2dCQUN0RyxJQUFJQyxxQkFBcUI7Z0JBRXpCLElBQU1DLFlBQVlDLGFBQVMsQ0FBQ0wsOENBQThDLENBQUNELHdCQUF3QkUsbUJBQW1CQyxVQUNoSEksc0JBQXNCLEVBQUU7Z0JBRTlCQyxnQkFBTyxDQUFDQyxPQUFPLENBQUMsU0FBQ0M7b0JBQ2YsSUFBTUMseUJBQXlCQyxjQUFzQixDQUFDQyxzQkFBc0IsQ0FBQ1IsV0FBV0s7b0JBRXhGLElBQUlDLDJCQUEyQixNQUFNO3dCQUNuQyxJQUFJUDt3QkFFSixJQUFNVSw0QkFBNEJDLGVBQXlCLENBQUNDLFVBQVUsQ0FBQ047d0JBRXZFTixxQkFBcUJVLDJCQUEyQixHQUFHO3dCQUVuRFAsb0JBQW9CVSxJQUFJLENBQUNiO3dCQUV6QkEscUJBQXFCTyx3QkFBeUIsR0FBRzt3QkFFakRKLG9CQUFvQlUsSUFBSSxDQUFDYjtvQkFDM0I7Z0JBQ0Y7Z0JBRUEsSUFBTWMsZ0NBQWdDWCxvQkFBb0JZLE1BQU07Z0JBRWhFLElBQUlELGdDQUFnQyxHQUFHO29CQUNyQyxJQUFNaEMsV0FBVyxNQUNYQyxZQUFZLEVBQUU7b0JBRXBCb0Isb0JBQW9CRSxPQUFPLENBQUMsU0FBQ0w7d0JBQzNCLElBQU1sQixXQUFXa0IsbUJBQW1CZ0IsV0FBVzt3QkFFL0NqQyxVQUFVOEIsSUFBSSxDQUFDL0I7b0JBQ2pCO29CQUVBa0IscUJBQXFCaUIsYUFBYSxDQUFDQyxZQUFZLENBL0RoQ3JDLG9CQStEcURDLFVBQVVDO2dCQUNoRjtnQkFFQSxPQUFPaUI7WUFDVDs7O1dBbkVtQm5CO0VBQTJCb0MsYUFBYSJ9