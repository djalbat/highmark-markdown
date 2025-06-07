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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxldHRlcnMgZnJvbSBcIi4uLy4uL2xldHRlcnNcIjtcbmltcG9ydCBJbmRleExpc3QgZnJvbSBcIi4uLy4uL2luZGV4L2xpc3RcIjtcbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbFwiO1xuaW1wb3J0IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvaW5kZXhcIjtcbmltcG9ydCBJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9oZWFkaW5nL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihodG1sTm9kZSwgaHRtbE5vZGVzKSB7XG4gICAgc3VwZXIoaHRtbE5vZGUpO1xuXG4gICAgdGhpcy5odG1sTm9kZXMgPSBodG1sTm9kZXM7XG4gIH1cblxuICBnZXRIVE1MTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGVzO1xuICB9XG5cbiAgYWRkQWZ0ZXJJbmRleERpcmVjdGl2ZUhUTUxOb2RlKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUpIHtcbiAgICBjb25zdCBzaWJsaW5nSFRNTE5vZGUgPSBpbmRleERpcmVjdGl2ZUhUTUxOb2RlOyAgLy8vXG5cbiAgICB0aGlzLmFkZEFmdGVyKHNpYmxpbmdIVE1MTm9kZSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4SFRNTFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleExpc3QgPSBJbmRleExpc3QuZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGVBbmREaXZpc2lvbkhUTUxOb2RlcyhpbmRleERpcmVjdGl2ZUhUTUxOb2RlLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgaW5kZXhIVE1MVHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgbGV0dGVycy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm0gPSBJbmRleExpc3RIVE1MVHJhbnNmb3JtLmZyb21JbmRleExpc3RBbmRMZXR0ZXIoaW5kZXhMaXN0LCBsZXR0ZXIpO1xuXG4gICAgICBpZiAoaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgaW5kZXhIVE1MVHJhbnNmb3JtO1xuXG4gICAgICAgIGNvbnN0IGluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0gPSBJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtLmZyb21MZXR0ZXIobGV0dGVyKTtcblxuICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm0gPSBpbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtOyAvLy9cblxuICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zLnB1c2goaW5kZXhIVE1MVHJhbnNmb3JtKTtcblxuICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm0gPSBpbmRleExpc3RIVE1MVHJhbnNmb3JtOyAgLy8vXG5cbiAgICAgICAgaW5kZXhIVE1MVHJhbnNmb3Jtcy5wdXNoKGluZGV4SFRNTFRyYW5zZm9ybSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbmRleExpc3RIVE1MVHJhbnNmb3Jtc0xlbmd0aCA9IGluZGV4SFRNTFRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4TGlzdEhUTUxUcmFuc2Zvcm1zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaHRtbE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgaHRtbE5vZGVzID0gW107XG5cbiAgICAgIGluZGV4SFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoaW5kZXhIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWxOb2RlID0gaW5kZXhIVE1MVHJhbnNmb3JtLmdldEhUTUxOb2RlKCk7XG5cbiAgICAgICAgaHRtbE5vZGVzLnB1c2goaHRtbE5vZGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKEluZGV4SFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUsIGh0bWxOb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4SFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SFRNTFRyYW5zZm9ybSIsImh0bWxOb2RlIiwiaHRtbE5vZGVzIiwiZ2V0SFRNTE5vZGVzIiwiYWRkQWZ0ZXJJbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsInNpYmxpbmdIVE1MTm9kZSIsImFkZEFmdGVyIiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGVBbmREaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTE5vZGVzIiwiY29udGV4dCIsImluZGV4SFRNTFRyYW5zZm9ybSIsImluZGV4TGlzdCIsIkluZGV4TGlzdCIsImluZGV4SFRNTFRyYW5zZm9ybXMiLCJsZXR0ZXJzIiwiZm9yRWFjaCIsImxldHRlciIsImluZGV4TGlzdEhUTUxUcmFuc2Zvcm0iLCJJbmRleExpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4TGlzdEFuZExldHRlciIsImluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0iLCJJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIiwiZnJvbUxldHRlciIsInB1c2giLCJpbmRleExpc3RIVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsImdldEhUTUxOb2RlIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7OERBTkQ7MkRBQ0U7MkRBQ0k7NERBQ1M7NkRBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQSxtQkFDUEMsUUFBUSxFQUFFQyxTQUFTO2dDQURaRjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7O1FBRU4sTUFBS0MsU0FBUyxHQUFHQTs7O2tCQUpBRjs7WUFPbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0JDLHNCQUFzQjtnQkFDbkQsSUFBTUMsa0JBQWtCRCx3QkFBeUIsR0FBRztnQkFFcEQsSUFBSSxDQUFDRSxRQUFRLENBQUNEO1lBQ2hCOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLCtDQUErQ0gsc0JBQXNCLEVBQUVJLGlCQUFpQixFQUFFQyxPQUFPO2dCQUN0RyxJQUFJQyxxQkFBcUI7Z0JBRXpCLElBQU1DLFlBQVlDLGFBQVMsQ0FBQ0wsOENBQThDLENBQUNILHdCQUF3QkksbUJBQW1CQyxVQUNoSEksc0JBQXNCLEVBQUU7Z0JBRTlCQyxnQkFBTyxDQUFDQyxPQUFPLENBQUMsU0FBQ0M7b0JBQ2YsSUFBTUMseUJBQXlCQyxjQUFzQixDQUFDQyxzQkFBc0IsQ0FBQ1IsV0FBV0s7b0JBRXhGLElBQUlDLDJCQUEyQixNQUFNO3dCQUNuQyxJQUFJUDt3QkFFSixJQUFNVSw0QkFBNEJDLGVBQXlCLENBQUNDLFVBQVUsQ0FBQ047d0JBRXZFTixxQkFBcUJVLDJCQUEyQixHQUFHO3dCQUVuRFAsb0JBQW9CVSxJQUFJLENBQUNiO3dCQUV6QkEscUJBQXFCTyx3QkFBeUIsR0FBRzt3QkFFakRKLG9CQUFvQlUsSUFBSSxDQUFDYjtvQkFDM0I7Z0JBQ0Y7Z0JBRUEsSUFBTWMsZ0NBQWdDWCxvQkFBb0JZLE1BQU07Z0JBRWhFLElBQUlELGdDQUFnQyxHQUFHO29CQUNyQyxJQUFNeEIsV0FBVyxNQUNYQyxZQUFZLEVBQUU7b0JBRXBCWSxvQkFBb0JFLE9BQU8sQ0FBQyxTQUFDTDt3QkFDM0IsSUFBTVYsV0FBV1UsbUJBQW1CZ0IsV0FBVzt3QkFFL0N6QixVQUFVc0IsSUFBSSxDQUFDdkI7b0JBQ2pCO29CQUVBVSxxQkFBcUJpQixhQUFhLENBQUNDLFlBQVksQ0FyRGhDN0Isb0JBcURxREMsVUFBVUM7Z0JBQ2hGO2dCQUVBLE9BQU9TO1lBQ1Q7OztXQXpEbUJYO0VBQTJCNEIsYUFBYSJ9