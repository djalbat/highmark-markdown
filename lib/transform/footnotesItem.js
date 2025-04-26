"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesItemTransform;
    }
});
var _occamdom = require("occam-dom");
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../node/markdown/item/footnotes"));
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
var FootnotesItemTransform = /*#__PURE__*/ function(Transform) {
    _inherits(FootnotesItemTransform, Transform);
    function FootnotesItemTransform() {
        _class_call_check(this, FootnotesItemTransform);
        return _call_super(this, FootnotesItemTransform, arguments);
    }
    _create_class(FootnotesItemTransform, [
        {
            key: "getFootnotesItemMarkdownNode",
            value: function getFootnotesItemMarkdownNode() {
                var node = this.getNode(), footnotesItemMarkdownNode = node; ///
                return footnotesItemMarkdownNode;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                return _occamdom.Transform.fromNode(FootnotesItemTransform, node, context);
            }
        },
        {
            key: "fromFootnoteTransformAndIdentifier",
            value: function fromFootnoteTransformAndIdentifier(footnoteTransform, identifier) {
                var footnoteMarkdownNode = footnoteTransform.getFootnoteMarkdownNode(), footnotesItemMarkdownNode = _footnotes.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnotesItemMarkdownNode, footnotesItemTransform = footnoteTransform.expand(FootnotesItemTransform, ascendantNode);
                return footnotesItemTransform;
            }
        }
    ]);
    return FootnotesItemTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGVzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9pdGVtL2Zvb3Rub3Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNJdGVtVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgZ2V0Rm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkgeyByZXR1cm4gVHJhbnNmb3JtLmZyb21Ob2RlKEZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0sIG5vZGUsIGNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZVRyYW5zZm9ybUFuZElkZW50aWZpZXIoZm9vdG5vdGVUcmFuc2Zvcm0sIGlkZW50aWZpZXIpIHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVUcmFuc2Zvcm0uZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZXNNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyKGZvb3Rub3RlTWFya2Rvd25Ob2RlLCBpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGFzY2VuZGFudE5vZGUgPSBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0gPSBmb290bm90ZVRyYW5zZm9ybS5leHBhbmQoRm9vdG5vdGVzSXRlbVRyYW5zZm9ybSwgYXNjZW5kYW50Tm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzSXRlbVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0iLCJnZXRGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbU5vZGUiLCJjb250ZXh0IiwiVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlVHJhbnNmb3JtQW5kSWRlbnRpZmllciIsImZvb3Rub3RlVHJhbnNmb3JtIiwiaWRlbnRpZmllciIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUiLCJGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJhc2NlbmRhbnROb2RlIiwiZm9vdG5vdGVzSXRlbVRyYW5zZm9ybSIsImV4cGFuZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7d0JBSks7Z0VBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsNEJBQTRCRixNQUFNLEdBQUc7Z0JBRTNDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0gsSUFBSSxFQUFFSSxPQUFPO2dCQUFJLE9BQU9DLG1CQUFTLENBQUNGLFFBQVEsQ0FSdkNMLHdCQVFnRUUsTUFBTUk7WUFBVTs7O1lBRTVGRSxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLGlCQUFpQixFQUFFQyxVQUFVO2dCQUNuRSxJQUFNQyx1QkFBdUJGLGtCQUFrQkcsdUJBQXVCLElBQ2hFUiw0QkFBNEJTLGtCQUF5QixDQUFDQyxzQ0FBc0MsQ0FBQ0gsc0JBQXNCRCxhQUNuSEssZ0JBQWdCWCwyQkFDaEJZLHlCQUF5QlAsa0JBQWtCUSxNQUFNLENBZHhDakIsd0JBY2lFZTtnQkFFbEYsT0FBT0M7WUFDVDs7O1dBakJtQmhCO0VBQStCTyxtQkFBUyJ9