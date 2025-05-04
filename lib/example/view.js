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
var _easylayout = require("easy-layout");
var _index = require("../index");
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/html"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _dom = require("../utilities/dom");
var _importer = require("./importer");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.updateMarkdown();
            _this.updateHTML(index);
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
        }), _define_property(_this, "previewCustomHandler", function(event, element) {
            _this.preview();
        }), _define_property(_this, "keyUpCustomHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "htmlCustomHandler", function(event, element) {
            _this.html();
        }), _define_property(_this, "cssCustomHandler", function(event, element) {
            _this.css();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                this.updateMarkdownStyle();
                this.updateMarkdown();
                this.updateHTML();
            }
        },
        {
            key: "updateHTML",
            value: function updateHTML() {
                var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                var topmostHTMLNode = this.getTopmostHTMLNode();
                if (topmostHTMLNode === null) {
                    this.clearXMP();
                    this.clearPreviewDiv();
                    this.clearPlainTextTextarea();
                    this.clearHTMLParseTreeTextarea();
                    this.clearPageButtonsDiv();
                    return;
                }
                var context;
                var tokens = this.getTokens(), divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index), divisionHTMLNOdeParseTree = divisionHTMLNOde.asParseTree(), htmlParseTree = divisionHTMLNOdeParseTree; ///
                context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                };
                this.updateXMP(divisionHTMLNOde, context);
                this.updatePreviewDiv(divisionHTMLNOde, context);
                this.updatePlainTextTextarea(divisionHTMLNOde, context);
                this.updateHTMLParseTreeTextarea(htmlParseTree);
                this.updatePageButtonsDiv(index);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node === null) {
                    this.resetTokens();
                    this.resetTopmostHTMLNode();
                    this.clearMarkdownParseTreeTextarea();
                    return;
                }
                var context;
                var topmostMarkdownNode = node; ///
                context = {
                    tokens: tokens,
                    importer: _importer.importer,
                    nodeFromTokens: nodeFromTokens,
                    tokensFromContent: tokensFromContent
                };
                topmostMarkdownNode.resolve(context);
                var topmostHTMLNode = (0, _dom.htmlNodeFromMarkdownNode)(topmostMarkdownNode);
                context = {
                    tokens: tokens
                };
                topmostHTMLNode.resolve(context);
                var topmostMarkdownNodeParseTree = topmostMarkdownNode.asParseTree(tokens), markdownParseTree = topmostMarkdownNodeParseTree, multiplicity = topmostHTMLNode.getMultiplicity(), length = multiplicity, index = 0;
                this.setTokens(tokens);
                this.setTopmostHTMLNode(topmostHTMLNode);
                this.updatePageButtonsDiv(length, index);
                this.updateMarkdownParseTreeTextarea(markdownParseTree);
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
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
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
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
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "resetTokens",
            value: function resetTokens() {
                var tokens = null;
                this.setTokens(tokens);
            }
        },
        {
            key: "resetTopmostHTMLNode",
            value: function resetTopmostHTMLNode() {
                var topmostHTMLNode = null;
                this.setTopmostHTMLNode(topmostHTMLNode);
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = this.getState().tokens;
                return tokens;
            }
        },
        {
            key: "getTopmostHTMLNode",
            value: function getTopmostHTMLNode() {
                var topmostMHTMLNode = this.getState().topmostMHTMLNode;
                return topmostMHTMLNode;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.updateState({
                    tokens: tokens
                });
            }
        },
        {
            key: "setTopmostHTMLNode",
            value: function setTopmostHTMLNode(topmostMHTMLNode) {
                this.updateState({
                    topmostMHTMLNode: topmostMHTMLNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, topmostHTMLNode = null;
                this.setState({
                    tokens: tokens,
                    topmostHTMLNode: topmostHTMLNode
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_left1.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, {
                    onCustomCSS: this.cssCustomHandler,
                    onCustomHTML: this.htmlCustomHandler,
                    onCustomPreview: this.previewCustomHandler,
                    onCustomPlainText: this.plainTextCustomHandler
                }), /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html1.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, _$initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = _$initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
                this.css();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", _importer.initialMarkdown);
_define_property(View, "initialMarkdownStyle", "width: 100%;\nheight: 100%;\nfont-size: 2rem;\ntext-align: left;  \n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), node = markdownParser.parse(tokens, startRule);
    return node;
}
function pathToURL(path) {
    var url = "https://static.djalbat.com/".concat(path);
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCBNYXJrZG93blBhcnNlciwgTWFya2Rvd25TdHlsZUxleGVyLCBNYXJrZG93blN0eWxlUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgUGxhaW5UZXh0Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wbGFpblRleHRcIjtcbmltcG9ydCBIVE1MUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvaHRtbFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IGltcG9ydGVyLCBpbml0aWFsTWFya2Rvd24gfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoaW5kZXgpO1xuICB9XG5cbiAgcGxhaW5UZXh0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxhaW5UZXh0KCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwcmV2aWV3Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucHJldmlldygpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGh0bWxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5odG1sKCk7XG4gIH1cblxuICBjc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcblxuICAgIHRoaXMudXBkYXRlSFRNTCgpO1xuICB9XG5cbiAgdXBkYXRlSFRNTChpbmRleCA9IDApIHtcbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSB0aGlzLmdldFRvcG1vc3RIVE1MTm9kZSgpO1xuXG4gICAgaWYgKHRvcG1vc3RIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgICAgdGhpcy5jbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOT2RlID0gdG9wbW9zdEhUTUxOb2RlLmdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5PZGUuYXNQYXJzZVRyZWUoKSxcbiAgICAgICAgICBodG1sUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZTsgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgcGF0aFRvVVJMXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlWE1QKGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihpbmRleCk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRUb2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldFRvcG1vc3RIVE1MTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgaW1wb3J0ZXIsXG4gICAgICBub2RlRnJvbVRva2VucyxcbiAgICAgIHRva2Vuc0Zyb21Db250ZW50XG4gICAgfTtcblxuICAgIHRvcG1vc3RNYXJrZG93bk5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IGh0bWxOb2RlRnJvbU1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlKTtcblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnNcbiAgICB9O1xuXG4gICAgdG9wbW9zdEhUTUxOb2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlID0gdG9wbW9zdE1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duUGFyc2VUcmVlID0gdG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSwgLy8vXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gdG9wbW9zdEhUTUxOb2RlLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICAgIGxlbmd0aCA9IG11bHRpcGxpY2l0eSwgIC8vL1xuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShtYXJrZG93blBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgY3NzID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBtYXJrZG93blN0eWxlUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBtYXJrZG93blN0eWxlKCkge1xuICAgIHRoaXMuaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBtYXJrZG93bigpIHtcbiAgICB0aGlzLnNob3dNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHByZXZpZXcoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1ByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIGNzcygpIHtcbiAgICB0aGlzLnNob3dDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcmVzZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG4gIH1cblxuICByZXNldFRvcG1vc3RIVE1MTm9kZSgpIHtcbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFRvcG1vc3RIVE1MTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RNSFRNTE5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TUhUTUxOb2RlO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXRUb3Btb3N0SFRNTE5vZGUodG9wbW9zdE1IVE1MTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1IVE1MTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9rZW5zLFxuICAgICAgdG9wbW9zdEhUTUxOb2RlXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxIVE1MQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQbGFpblRleHRDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPENTU0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gYHdpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xuZm9udC1zaXplOiAycmVtO1xudGV4dC1hbGlnbjogbGVmdDsgIFxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgY29uc3QgdG9rZW5zID0gbWFya2Rvd25MZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBub2RlRnJvbVRva2Vucyh0b2tlbnMsIHN0YXJ0UnVsZU5hbWUgPSBudWxsKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBtYXJrZG93blBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgIHN0YXJ0UnVsZSA9IChzdGFydFJ1bGVOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZG93blBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgbm9kZSA9IG1hcmtkb3duUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcGF0aFRvVVJMKHBhdGgpIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vc3RhdGljLmRqYWxiYXQuY29tLyR7cGF0aH1gO1xuXG4gIHJldHVybiB1cmw7XG59XG4iXSwibmFtZXMiOlsibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJNYXJrZG93blN0eWxlTGV4ZXIiLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsIlZpZXciLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm1hcmtkb3duU3R5bGUiLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImluZGV4IiwidXBkYXRlTWFya2Rvd24iLCJ1cGRhdGVIVE1MIiwicGxhaW5UZXh0Q3VzdG9tSGFuZGxlciIsInBsYWluVGV4dCIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJnZXRUb3Btb3N0SFRNTE5vZGUiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJjbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJjb250ZXh0IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiZGl2aXNpb25IVE1MTk9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsImh0bWxQYXJzZVRyZWUiLCJwYXRoVG9VUkwiLCJ1cGRhdGVYTVAiLCJ1cGRhdGVQcmV2aWV3RGl2IiwidXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEiLCJ1cGRhdGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJ1cGRhdGVQYWdlQnV0dG9uc0RpdiIsImdldE1hcmtkb3duIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZXNldFRva2VucyIsInJlc2V0VG9wbW9zdEhUTUxOb2RlIiwiY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImltcG9ydGVyIiwibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsInJlc29sdmUiLCJodG1sTm9kZUZyb21NYXJrZG93bk5vZGUiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlIiwibWFya2Rvd25QYXJzZVRyZWUiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJsZW5ndGgiLCJzZXRUb2tlbnMiLCJzZXRUb3Btb3N0SFRNTE5vZGUiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsInNldENTUyIsInN0YXJ0UnVsZSIsImdldFN0YXJ0UnVsZSIsInBhcnNlVHJlZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlQ1NTQ29udGFpbmVyRGl2IiwiaGlkZUhUTUxDb250YWluZXJEaXYiLCJoaWRlUHJldmlld0NvbnRhaW5lckRpdiIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsImdldFN0YXRlIiwidG9wbW9zdE1IVE1MTm9kZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIkxlZnRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21NYXJrZG93biIsIm9uQ3VzdG9tTWFya2Rvd25TdHlsZSIsIk1hcmtkb3duQ29udGFpbmVyRGl2Iiwib25DdXN0b21LZXlVcCIsIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIlJpZ2h0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tQ1NTIiwib25DdXN0b21IVE1MIiwib25DdXN0b21QcmV2aWV3Iiwib25DdXN0b21QbGFpblRleHQiLCJQYWdlQnV0dG9uc0RpdiIsIm9uQ3VzdG9tUGFnZVVwZGF0ZSIsIkhUTUxDb250YWluZXJEaXYiLCJQcmV2aWV3Q29udGFpbmVyRGl2IiwiUGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJzZXRNYXJrZG93blN0eWxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwic3RhcnRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicGF0aCIsInVybCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbVZBOzs7ZUFBQTs7O29FQWpWc0I7b0JBRUU7MEJBQzRDO3FCQUNtQjtrRUFFNUQ7MkRBQ0M7MERBQ0E7MkRBQ0M7NERBQ0M7NERBQ0M7OERBQ0M7K0RBQ0M7Z0VBQ0M7NERBQ0E7b0VBQ0k7bUJBRUc7d0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTUEsZ0JBQWdCQyxvQkFBYSxDQUFDQyxXQUFXLElBQ3pDQyxpQkFBaUJDLHFCQUFjLENBQUNGLFdBQVcsSUFDM0NHLHFCQUFxQkMseUJBQWtCLENBQUNKLFdBQVcsSUFDbkRLLHNCQUFzQkMsMEJBQW1CLENBQUNOLFdBQVc7QUFFM0QsSUFBQSxBQUFNTyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDhCQUE2QixTQUFDQyxPQUFPQztZQUNuQyxNQUFLQyxhQUFhO1FBQ3BCLElBRUFDLHdCQUFBQSwyQkFBMEIsU0FBQ0gsT0FBT0MsU0FBU0c7WUFDekMsTUFBS0MsY0FBYztZQUVuQixNQUFLQyxVQUFVLENBQUNGO1FBQ2xCLElBRUFHLHdCQUFBQSwwQkFBeUIsU0FBQ1AsT0FBT0M7WUFDL0IsTUFBS08sU0FBUztRQUNoQixJQUVBQyx3QkFBQUEseUJBQXdCLFNBQUNULE9BQU9DO1lBQzlCLE1BQUtTLFFBQVE7UUFDZixJQUVBQyx3QkFBQUEsd0JBQXVCLFNBQUNYLE9BQU9DO1lBQzdC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