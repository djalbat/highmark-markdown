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
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/html"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
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
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        });
        _define_property(_assert_this_initialized(_this), "markdownCustomHandler", function(event, element) {
            _this.markdown();
        });
        _define_property(_assert_this_initialized(_this), "keyUpCustomHandler", function(event, element) {
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
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
                if (node !== null) {
                    var pageNumber = 1, divisionMarkdownNode = node, divisionMarkdownNodes = [
                        divisionMarkdownNode
                    ], context = {
                        tokens: tokens,
                        importer: importer,
                        pageNumber: pageNumber,
                        divisionMarkdownNodes: divisionMarkdownNodes
                    };
                    divisionMarkdownNode.resolveIncludes(context);
                    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                        divisionMarkdownNode.resolveEmbeddings(context);
                        divisionMarkdownNode.createFootnotes(context);
                    });
                    divisionMarkdownNodes.some(function(divisionMarkdownNode) {
                        var contentsCreated = divisionMarkdownNode.createContents(context);
                        if (contentsCreated) {
                            return true;
                        }
                    });
                    var htmls = [], domElements = [];
                    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                        var html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                        htmls.push(html);
                        domElements.push(domElement);
                    });
                    this.updateXMP(htmls);
                    this.updatePreviewDiv(domElements);
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownParseTreeTextarea(parseTree);
                } else {
                    this.clearXMP();
                    this.clearPreviewDiv();
                    this.clearMarkdownParseTreeTextarea();
                }
            }
        },
        {
            key: "markdownStyle",
            value: function markdownStyle() {
                this.hideMarkdownContainerDiv();
                this.showMarkdownStyleContainerDiv();
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                this.showMarkdownContainerDiv();
                this.hideMarkdownStyleContainerDiv();
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
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_tabButtons.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_html.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, null))))));
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
_define_property(View, "initialMarkdownStyle", "pageNumber {\n  colour: red;\n}\n");
_define_property(View, "initialMarkdown", "* Occam [^occam].\n\n[^occam]: Occam.\n\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "# Primary heading\n", startOfContent = true, startRule = markdownParser.getStartRule(), tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens, startRule, startOfContent), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlRWxlbWVudCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBtYXJrZG93blN0eWxlRWxlbWVudC51cGRhdGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTWFya2Rvd24oKSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93bkxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gIG1hcmtkb3duUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd24sIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICBzdGFydE9mQ29udGVudCA9IHRydWUsXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSwgc3RhcnRPZkNvbnRlbnQpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSAxLFxuICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBbXG4gICAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgICBpbXBvcnRlcixcbiAgICAgICAgICAgICAgcGFnZU51bWJlcixcbiAgICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgICAgICAgICB9O1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoY29udGV4dCk7XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KTtcblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5jcmVhdGVGb290bm90ZXMoY29udGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzQ3JlYXRlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZW50c0NyZWF0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGh0bWxzID0gW10sXG4gICAgICAgICAgICBkb21FbGVtZW50cyA9IFtdO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzSFRNTChjb250ZXh0KSxcbiAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbHMucHVzaChodG1sKTtcblxuICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudXBkYXRlWE1QKGh0bWxzKTtcblxuICAgICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRvbUVsZW1lbnRzKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtkb3duU3R5bGUoKSB7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBtYXJrZG93bigpIHtcbiAgICB0aGlzLnNob3dNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIEhUTUxcbiAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICA8SFRNTERpdi8+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgQ1NTXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxDU1NUZXh0YXJlYS8+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxQcmV2aWV3RGl2Lz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gYHBhZ2VOdW1iZXIge1xuICBjb2xvdXI6IHJlZDtcbn1cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGAqIE9jY2FtIFteb2NjYW1dLlxuXG5bXm9jY2FtXTogT2NjYW0uXG5cbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCkge1xuICBjb25zdCBjb250ZW50ID0gYCMgUHJpbWFyeSBoZWFkaW5nXG5gLFxuICAgICAgICBzdGFydE9mQ29udGVudCA9IHRydWUsXG4gICAgICAgIHN0YXJ0UnVsZSA9IG1hcmtkb3duUGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gbWFya2Rvd25QYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KSxcbiAgICAgICAgaW1wb3J0ZWROb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICBpbXBvcnRlZFRva2VucyA9IHRva2VucyxcbiAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBcImludHJvZHVjdGlvblwiO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGltcG9ydGVkTm9kZSxcbiAgICBpbXBvcnRlZFRva2VucyxcbiAgICBpbXBvcnRlZENsYXNzTmFtZVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwicHJvcGVydGllcyIsImdldE1hcmtkb3duU3R5bGUiLCJjc3MiLCJzZXRDU1MiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInN0YXJ0UnVsZSIsImdldFN0YXJ0UnVsZSIsInN0YXJ0T2ZDb250ZW50Iiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJ1cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZU1hcmtkb3duIiwiZ2V0TWFya2Rvd24iLCJwYWdlTnVtYmVyIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb250ZXh0IiwiaW1wb3J0ZXIiLCJyZXNvbHZlSW5jbHVkZXMiLCJmb3JFYWNoIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJjcmVhdGVGb290bm90ZXMiLCJzb21lIiwiY29udGVudHNDcmVhdGVkIiwiY3JlYXRlQ29udGVudHMiLCJodG1scyIsImRvbUVsZW1lbnRzIiwiaHRtbCIsImFzSFRNTCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwicHVzaCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJUYWJCdXR0b25zRGl2Iiwib25DdXN0b21NYXJrZG93biIsIm9uQ3VzdG9tTWFya2Rvd25TdHlsZSIsIk1hcmtkb3duQ29udGFpbmVyRGl2Iiwib25DdXN0b21LZXlVcCIsIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIlJpZ2h0U2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiSFRNTERpdiIsIkhvcml6b250YWxTcGxpdHRlckRpdiIsIlJvd0RpdiIsIkNTU1RleHRhcmVhIiwiUHJldmlld0RpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duIiwic2V0TWFya2Rvd25TdHlsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImZpbGVQYXRoIiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJpbXBvcnRlZENsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdOQTs7O2VBQUE7OztvRUF0TnNCO29CQUVFO3FCQUMrRDswQkFDWTsyREFFL0U7OERBQ0c7aUVBQ0E7MERBQ0M7aUVBQ0U7MkRBQ0U7NERBQ0M7K0RBQ0k7b0VBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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