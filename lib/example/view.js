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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../index");
var _easylayout = require("easy-layout");
var _xmp = /*#__PURE__*/ _interop_require_default(require("./view/xmp"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/textarea/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/textarea/markdownStyle"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), content = markdown, lexer = markdownLexer, parser = markdownParser, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node !== null) {
                    var divisionMarkdownNode = node, parentNode = null, context = {
                        tokens: tokens,
                        importer: importer
                    };
                    divisionMarkdownNode.resolveImports(parentNode, context);
                    divisionMarkdownNode.createContents(context);
                    divisionMarkdownNode.createFootnotes(context);
                    var html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                    this.xmpHTML(html);
                    this.updatePreviewDiv(domElement);
                } else {
                    this.clearXMP();
                    this.clearPreviewDiv();
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Markdown"), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Markdown style"), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onKeyUp: this.keyUpHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_xmp.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdownStyle", "\nmin-height: initial;\n\ndivision {\n  colour: red;\n}\n\n");
_define_property(View, "initialMarkdown", "Occam [^occam]\n  \n@contents 2\n    \n# Title\n\n## Subtitle\n\n[^occam]: Footnote\n\n@footnotes\n\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "\nOccam.[^occam]\n\n[^another]: Occam footnote.\n        \n        ", className = "introduction", tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens);
    Object.assign(context, {
        node: node,
        tokens: tokens,
        className: className
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWE1QIGZyb20gXCIuL3ZpZXcveG1wXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgTWFya2Rvd25UZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL21hcmtkb3duXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbWFya2Rvd25TdHlsZVwiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgY3NzID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93bkxleGVyLFxuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlcixcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgICAgaW1wb3J0ZXJcbiAgICAgICAgICAgIH07XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbXBvcnRzKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5jcmVhdGVDb250ZW50cyhjb250ZXh0KTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBodG1sID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNIVE1MKGNvbnRleHQpLFxuICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIHRoaXMueG1wSFRNTChodG1sKTtcblxuICAgICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBNYXJrZG93blxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8TWFya2Rvd25UZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIE1hcmtkb3duIHN0eWxlXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgSFRNTFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFhNUC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ1NTXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q1NTVGV4dGFyZWEvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQcmV2aWV3RGl2Lz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgXG5taW4taGVpZ2h0OiBpbml0aWFsO1xuXG5kaXZpc2lvbiB7XG4gIGNvbG91cjogcmVkO1xufVxuXG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgT2NjYW0gW15vY2NhbV1cbiAgXG5AY29udGVudHMgMlxuICAgIFxuIyBUaXRsZVxuXG4jIyBTdWJ0aXRsZVxuXG5bXm9jY2FtXTogRm9vdG5vdGVcblxuQGZvb3Rub3Rlc1xuXG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudCA9IGBcbk9jY2FtLlteb2NjYW1dXG5cblteYW5vdGhlcl06IE9jY2FtIGZvb3Rub3RlLlxuICAgICAgICBcbiAgICAgICAgYCxcbiAgICAgICAgY2xhc3NOYW1lID0gXCJpbnRyb2R1Y3Rpb25cIixcbiAgICAgICAgdG9rZW5zID0gbWFya2Rvd25MZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgbm9kZSA9IG1hcmtkb3duUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgbm9kZSxcbiAgICB0b2tlbnMsXG4gICAgY2xhc3NOYW1lXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsInByb3BlcnRpZXMiLCJtYXJrZG93blN0eWxlIiwiZ2V0TWFya2Rvd25TdHlsZSIsImNzcyIsInNldENTUyIsInVwZGF0ZU1hcmtkb3duIiwibWFya2Rvd24iLCJnZXRNYXJrZG93biIsImNvbnRlbnQiLCJsZXhlciIsInBhcnNlciIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJwYXJlbnROb2RlIiwiY29udGV4dCIsImltcG9ydGVyIiwicmVzb2x2ZUltcG9ydHMiLCJjcmVhdGVDb250ZW50cyIsImNyZWF0ZUZvb3Rub3RlcyIsImh0bWwiLCJhc0hUTUwiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInhtcEhUTUwiLCJ1cGRhdGVQcmV2aWV3RGl2IiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIlN1YkhlYWRpbmciLCJNYXJrZG93blRleHRhcmVhIiwib25LZXlVcCIsIk1hcmtkb3duU3R5bGVUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiWE1QIiwiQ1NTVGV4dGFyZWEiLCJQcmV2aWV3RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJzZXRNYXJrZG93blN0eWxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZmlsZVBhdGgiLCJPYmplY3QiLCJhc3NpZ24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJB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