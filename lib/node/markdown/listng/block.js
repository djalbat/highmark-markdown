"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
var _block = /*#__PURE__*/ _interop_require_default(require("../../html/line/block"));
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
var BlockListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockListingMarkdownNode, MarkdownNode);
    function BlockListingMarkdownNode() {
        _class_call_check(this, BlockListingMarkdownNode);
        return _call_super(this, BlockListingMarkdownNode, arguments);
    }
    _create_class(BlockListingMarkdownNode, [
        {
            key: "content",
            value: function content(context) {
                var content = this.reduceChildMarkdownNode(function(content, childMarkdownNode) {
                    var childMarkdownNodeBlockLineMarkdownNode = _instanceof(childMarkdownNode, _block.default);
                    if (childMarkdownNodeBlockLineMarkdownNode) {
                        var blockLineMarkdownNode = childMarkdownNodeBlockLineMarkdownNode, blockLineMarkdownNodeContent = blockLineMarkdownNode.content(context);
                        content = content !== null ? "".concat(content).concat(blockLineMarkdownNodeContent) : blockLineMarkdownNodeContent; ///
                    }
                    return content;
                }, null);
                return content;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = this.fromFirstChildNode(function(firstChildNode) {
                    var blockStartMarkdownNode = firstChildNode, className = blockStartMarkdownNode.className(context);
                    return className;
                });
                return className;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return BlockListingMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpc3RuZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEJsb2NrTGluZUhUTUxOb2RlIGZyb20gXCIuLi8uLi9odG1sL2xpbmUvYmxvY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMucmVkdWNlQ2hpbGRNYXJrZG93bk5vZGUoKGNvbnRlbnQsIGNoaWxkTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE1hcmtkb3duTm9kZUJsb2NrTGluZU1hcmtkb3duTm9kZSA9IChjaGlsZE1hcmtkb3duTm9kZSBpbnN0YW5jZW9mIEJsb2NrTGluZUhUTUxOb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTWFya2Rvd25Ob2RlQmxvY2tMaW5lTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrTGluZU1hcmtkb3duTm9kZSA9IGNoaWxkTWFya2Rvd25Ob2RlQmxvY2tMaW5lTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgYmxvY2tMaW5lTWFya2Rvd25Ob2RlQ29udGVudCA9IGJsb2NrTGluZU1hcmtkb3duTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRlbnQgPSAoY29udGVudCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBgJHtjb250ZW50fSR7YmxvY2tMaW5lTWFya2Rvd25Ob2RlQ29udGVudH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja0xpbmVNYXJrZG93bk5vZGVDb250ZW50OyAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBibG9ja1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYmxvY2tTdGFydE1hcmtkb3duTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUiLCJjb250ZW50IiwiY29udGV4dCIsInJlZHVjZUNoaWxkTWFya2Rvd25Ob2RlIiwiY2hpbGRNYXJrZG93bk5vZGUiLCJjaGlsZE1hcmtkb3duTm9kZUJsb2NrTGluZU1hcmtkb3duTm9kZSIsIkJsb2NrTGluZUhUTUxOb2RlIiwiYmxvY2tMaW5lTWFya2Rvd25Ob2RlIiwiYmxvY2tMaW5lTWFya2Rvd25Ob2RlQ29udGVudCIsImNsYXNzTmFtZSIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiYmxvY2tTdGFydE1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7K0RBSEk7NERBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSx5Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1ELFVBQVUsSUFBSSxDQUFDRSx1QkFBdUIsQ0FBQyxTQUFDRixTQUFTRztvQkFDckQsSUFBTUMseUNBQTBDRCxBQUFpQixZQUFqQkEsbUJBQTZCRSxjQUFpQjtvQkFFOUYsSUFBSUQsd0NBQXdDO3dCQUMxQyxJQUFNRSx3QkFBd0JGLHdDQUN4QkcsK0JBQStCRCxzQkFBc0JOLE9BQU8sQ0FBQ0M7d0JBRW5FRCxVQUFVLEFBQUNBLFlBQVksT0FDWCxBQUFDLEdBQVlPLE9BQVZQLFNBQXVDLE9BQTdCTyxnQ0FDWEEsOEJBQThCLEdBQUc7b0JBQ2pEO29CQUVBLE9BQU9QO2dCQUNULEdBQUc7Z0JBRUgsT0FBT0E7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUCxPQUFPO2dCQUNmLElBQU1PLFlBQVksSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDekMsSUFBTUMseUJBQXlCRCxnQkFDekJGLFlBQVlHLHVCQUF1QkgsU0FBUyxDQUFDUDtvQkFFbkQsT0FBT087Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQS9CMUdiLDBCQStCcUljLFVBQVVDLFlBQVlDO1lBQVU7OztXQS9CcktoQjtFQUFpQ2lCLGlCQUFZIn0=