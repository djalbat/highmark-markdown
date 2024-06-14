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
var _markdown1 = require("../utilities/markdown");
var _constants = require("./constants");
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
        _define_property(_assert_this_initialized(_this), "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
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
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, startOfContent = true, startRule = parser.getStartRule(), tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule, startOfContent);
                this.setTokens(tokens);
                if (node !== null) {
                    var divisionClassName = _constants.INTRODUCTION_CLASS_NAME, divisionMarkdownNode = node; ///
                    divisionMarkdownNode.setDivisionClassName(divisionClassName);
                    var linesPerPage = _constants.LINES_PER_PAGE, charactersPerLine = _constants.CHARACTERS_PER_LINE, context = {
                        tokens: tokens,
                        importer: importer,
                        linesPerPage: linesPerPage,
                        charactersPerLine: charactersPerLine
                    }, divisionMarkdownNodes = (0, _markdown1.postprocess)(divisionMarkdownNode, context);
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes);
                    var index = 0, length = divisionMarkdownNodes.length, parseTree = divisionMarkdownNode.asParseTree(tokens);
                    this.updatePage(index);
                    this.updatePageButtonsDiv(length);
                    this.updateMarkdownParseTreeTextarea(parseTree);
                } else {
                    this.clearPage();
                    this.clearPageButtonsDiv();
                    this.clearMarkdownParseTreeTextarea();
                    var divisionMarkdownNodes1 = null;
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes1);
                }
            }
        },
        {
            key: "updatePage",
            value: function updatePage(index) {
                var length = null;
                this.updatePageButtonsDiv(length, index);
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], pageNumber = index + 1, tokens = this.getTokens(), context = {
                    tokens: tokens
                };
                Object.assign(context, {
                    pageNumber: pageNumber
                });
                var html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                this.updateXMP(html);
                this.updatePreviewDiv(domElement);
            }
        },
        {
            key: "clearPage",
            value: function clearPage() {
                this.clearXMP();
                this.clearPreviewDiv();
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
            key: "getTokens",
            value: function getTokens() {
                var tokens = this.getState().tokens;
                return tokens;
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
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var divisionMarkdownNodes = this.getState().divisionMarkdownNodes;
                return divisionMarkdownNodes;
            }
        },
        {
            key: "setDivisionMarkdownNodes",
            value: function setDivisionMarkdownNodes(divisionMarkdownNodes) {
                this.updateState({
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, divisionMarkdownNodes = null;
                this.setState({
                    tokens: tokens,
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
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
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_html.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
_define_property(View, "_initialMarkdown", "# Introduction\n  \n@embed paragraph.md  \n\nThis book also goes into considerable detail on the subject of Occam's approach to language, which largely boils down to its use of grammars.\nOccam has its own language, called Florence,[^florence] but it will also support controlled natural languages in the near future.\nIndeed, the verifier cannot distinguish between these languages at all.\nThis book explains how this is possible.\n\nAfter explaining Occam's approach to language this book gives a very detailed explanation of how the verifier works.\nSome may find this nauseating but I maintain that it is essential.\nThe whole idea behind Occam is to facilitate human reasoning and not to supplant it, and it is the verifier that reasons on your behalf.\nSo you must understand how it works.\nIn fact I recommend that you read the introduction together with the first four chapters of the Foundations book before going much further with this one.\nThey are neither very long nor very deep and will provide the necessary background for understanding the verifier in particular.\n\nI hope that the verifier's implenentation is both transparent and readable, and therefore understandable, especially augmented as it is with the explanation here.\nApart from anything else even a partial understanding will likely save a good deal of frustration when you begin to work seriously with Occam.\nThe other reason for understanding the verifier is that it has not been verified itself.\nSo you cannot simply press a button and have confidence in it, that is not the idea at all.\n\nIn fact, at the risk of courting controversy, I would argue that it should not be the idea with any verifier.\nAll are failible regardless of what their proponents may claim and therefore I do not believe that their results should ever be trusted without some level of human oversight.\nIndeed in my opinion verification should be an aid to clarity and rigour and never a substitute for it.\nThe idea of a proof as a black box in particular is anathema to me.\n\nMoving on, the standpoint that software should be an aid to human reasonibg and not a substitute for it must these days be tempered by a consideration of artificial intelligence as a tool for reasoning.\nWhat inspired me over the near decade of work that it took to get Occam to its first viable release was a firm belief in what I call the four elephants, expounded in the four chapters of the aforementioned Foundations book.\nI had not heard of large language models when I started out and they were never a motivating factor, but as I came to my first milestone after those many years, they began to loom large.\n\nThe resurgence of artificial intelligence in recent years has hardly changed my views on automated reasoning, however.\nAdmittedly of late there has been some progress in the direction of coupling artificial intelligence with formal reasoning systems.\nBut for its part Occam only has a bearing on the right hand side of this coupling.\nHowever on the left hand side, it is importtant to note that the output of potentially any large language model or such like can serve as input for Occam.\n\nThus the panacea of using computers as tools for symbolic reasoning, be that devising algorithms or protocols; discovering new mathematics or logic; or whatever, is almost upon us.\nAnd it is worth pointing out that this panacea has been eagerly anticipated for around seventy five years now.\nThere is no doubt that artificial intelligence is on the verge of bringing all of this about, but without tools such as Occam the output of artificial intelligence models will always be clouded in doubt.\n\nFinally I should mention Highmark, wihch is a new document preparation system developed in tandem with Occam.\nIt is a necessary intermediate step in working towards Occam's support for controlled natural languages but I hope that in the long run it will succeed in its own right.\nBoth this book and the Foundations book were written using Highmark and it may well turn out that more people use Occam for working with it than for reasoning.\nThere is therefore a chapter dedicated to it immediately after the chapter on getting to grips with the IDE.\nAnd if you are using Occam to work exclusively with Highmark then please do not be daunted by the formal reasoning side of things, you can safely ignore it, and rest assured that support for Highmark will always be included.\n\nTo conclude, I hope that in the coming years at least some people will come to see Occam as an indespensible tool for symbolic reasoning.\nAmongst other things it will enable them to leverage artificial intelligence to aid their own intellectual enquiries.\nHowever artificial intelligence will not, at least not in the foreseeable future, supplant them.\n\n[^occam]: The word Occam is used somewhat nebulously here.\nIt is most often associated with Occam's IDE but in fact it encompasses a range of software and services.\nThis book explains these divers parts and there is a companion book, called The Foundations of Symbolic Reasoning, that covers the underlying theory.\n\n[^florence]: Occam was originally called Florence but the former seemed more apt.\n\n@footnotes\n\n@pageNumber\n");
_define_property(View, "initialMarkdown", "# Occam [^occam]\n  \nAnother paragraph.\n  \n[^occam]: Footnote.\n\n@footnotes\n\n@pageNumber\n");
_define_property(View, "initialMarkdownStyle", "width: 100%;\nposition: absolute;\nmin-height: 100%;  \npadding-top: 5rem;  \n");
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "\n\nI have tried to make Occam[^occam] as useable as possible but there are limits.\nAt the end of the day it is an expert system and some of its parts, not least the verifier, need detailed explanation.\nIt is the purpose of this book is to provide these explanations.\n  \n", startOfContent = true, startRule = markdownParser.getStartRule(), tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens, startRule, startOfContent), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgcG9zdHByb2Nlc3MgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBMSU5FU19QRVJfUEFHRSwgQ0hBUkFDVEVSU19QRVJfTElORSwgSU5UUk9EVUNUSU9OX0NMQVNTX05BTUUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy5jbGVhclBhZ2UoKTtcblxuICAgIHRoaXMudXBkYXRlUGFnZShpbmRleCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGVFbGVtZW50LnVwZGF0ZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gSU5UUk9EVUNUSU9OX0NMQVNTX05BTUUsXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBsaW5lc1BlclBhZ2UgPSBMSU5FU19QRVJfUEFHRSxcbiAgICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lID0gQ0hBUkFDVEVSU19QRVJfTElORSxcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgICAgaW1wb3J0ZXIsXG4gICAgICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2UoaW5kZXgpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdlKGluZGV4KSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbnVsbDtcblxuICAgIHRoaXMudXBkYXRlUGFnZUJ1dHRvbnNEaXYobGVuZ3RoLCBpbmRleCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGVzW2luZGV4XSxcbiAgICAgICAgICBwYWdlTnVtYmVyID0gaW5kZXggKyAxLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHBhZ2VOdW1iZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IGh0bWwgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc0hUTUwoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sKTtcblxuICAgIHRoaXMudXBkYXRlUHJldmlld0Rpdihkb21FbGVtZW50KTtcbiAgfVxuXG4gIGNsZWFyUGFnZSgpIHtcbiAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2tlbnMsXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgSFRNTFxuICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIDxIVE1MRGl2Lz5cbiAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBDU1NcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPENTU1RleHRhcmVhLz5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFByZXZpZXdEaXYgb25DdXN0b21QYWdlVXBkYXRlPXt0aGlzLnBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBfaW5pdGlhbE1hcmtkb3duID0gYCMgSW50cm9kdWN0aW9uXG4gIFxuQGVtYmVkIHBhcmFncmFwaC5tZCAgXG5cblRoaXMgYm9vayBhbHNvIGdvZXMgaW50byBjb25zaWRlcmFibGUgZGV0YWlsIG9uIHRoZSBzdWJqZWN0IG9mIE9jY2FtJ3MgYXBwcm9hY2ggdG8gbGFuZ3VhZ2UsIHdoaWNoIGxhcmdlbHkgYm9pbHMgZG93biB0byBpdHMgdXNlIG9mIGdyYW1tYXJzLlxuT2NjYW0gaGFzIGl0cyBvd24gbGFuZ3VhZ2UsIGNhbGxlZCBGbG9yZW5jZSxbXmZsb3JlbmNlXSBidXQgaXQgd2lsbCBhbHNvIHN1cHBvcnQgY29udHJvbGxlZCBuYXR1cmFsIGxhbmd1YWdlcyBpbiB0aGUgbmVhciBmdXR1cmUuXG5JbmRlZWQsIHRoZSB2ZXJpZmllciBjYW5ub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVzZSBsYW5ndWFnZXMgYXQgYWxsLlxuVGhpcyBib29rIGV4cGxhaW5zIGhvdyB0aGlzIGlzIHBvc3NpYmxlLlxuXG5BZnRlciBleHBsYWluaW5nIE9jY2FtJ3MgYXBwcm9hY2ggdG8gbGFuZ3VhZ2UgdGhpcyBib29rIGdpdmVzIGEgdmVyeSBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiBob3cgdGhlIHZlcmlmaWVyIHdvcmtzLlxuU29tZSBtYXkgZmluZCB0aGlzIG5hdXNlYXRpbmcgYnV0IEkgbWFpbnRhaW4gdGhhdCBpdCBpcyBlc3NlbnRpYWwuXG5UaGUgd2hvbGUgaWRlYSBiZWhpbmQgT2NjYW0gaXMgdG8gZmFjaWxpdGF0ZSBodW1hbiByZWFzb25pbmcgYW5kIG5vdCB0byBzdXBwbGFudCBpdCwgYW5kIGl0IGlzIHRoZSB2ZXJpZmllciB0aGF0IHJlYXNvbnMgb24geW91ciBiZWhhbGYuXG5TbyB5b3UgbXVzdCB1bmRlcnN0YW5kIGhvdyBpdCB3b3Jrcy5cbkluIGZhY3QgSSByZWNvbW1lbmQgdGhhdCB5b3UgcmVhZCB0aGUgaW50cm9kdWN0aW9uIHRvZ2V0aGVyIHdpdGggdGhlIGZpcnN0IGZvdXIgY2hhcHRlcnMgb2YgdGhlIEZvdW5kYXRpb25zIGJvb2sgYmVmb3JlIGdvaW5nIG11Y2ggZnVydGhlciB3aXRoIHRoaXMgb25lLlxuVGhleSBhcmUgbmVpdGhlciB2ZXJ5IGxvbmcgbm9yIHZlcnkgZGVlcCBhbmQgd2lsbCBwcm92aWRlIHRoZSBuZWNlc3NhcnkgYmFja2dyb3VuZCBmb3IgdW5kZXJzdGFuZGluZyB0aGUgdmVyaWZpZXIgaW4gcGFydGljdWxhci5cblxuSSBob3BlIHRoYXQgdGhlIHZlcmlmaWVyJ3MgaW1wbGVuZW50YXRpb24gaXMgYm90aCB0cmFuc3BhcmVudCBhbmQgcmVhZGFibGUsIGFuZCB0aGVyZWZvcmUgdW5kZXJzdGFuZGFibGUsIGVzcGVjaWFsbHkgYXVnbWVudGVkIGFzIGl0IGlzIHdpdGggdGhlIGV4cGxhbmF0aW9uIGhlcmUuXG5BcGFydCBmcm9tIGFueXRoaW5nIGVsc2UgZXZlbiBhIHBhcnRpYWwgdW5kZXJzdGFuZGluZyB3aWxsIGxpa2VseSBzYXZlIGEgZ29vZCBkZWFsIG9mIGZydXN0cmF0aW9uIHdoZW4geW91IGJlZ2luIHRvIHdvcmsgc2VyaW91c2x5IHdpdGggT2NjYW0uXG5UaGUgb3RoZXIgcmVhc29uIGZvciB1bmRlcnN0YW5kaW5nIHRoZSB2ZXJpZmllciBpcyB0aGF0IGl0IGhhcyBub3QgYmVlbiB2ZXJpZmllZCBpdHNlbGYuXG5TbyB5b3UgY2Fubm90IHNpbXBseSBwcmVzcyBhIGJ1dHRvbiBhbmQgaGF2ZSBjb25maWRlbmNlIGluIGl0LCB0aGF0IGlzIG5vdCB0aGUgaWRlYSBhdCBhbGwuXG5cbkluIGZhY3QsIGF0IHRoZSByaXNrIG9mIGNvdXJ0aW5nIGNvbnRyb3ZlcnN5LCBJIHdvdWxkIGFyZ3VlIHRoYXQgaXQgc2hvdWxkIG5vdCBiZSB0aGUgaWRlYSB3aXRoIGFueSB2ZXJpZmllci5cbkFsbCBhcmUgZmFpbGlibGUgcmVnYXJkbGVzcyBvZiB3aGF0IHRoZWlyIHByb3BvbmVudHMgbWF5IGNsYWltIGFuZCB0aGVyZWZvcmUgSSBkbyBub3QgYmVsaWV2ZSB0aGF0IHRoZWlyIHJlc3VsdHMgc2hvdWxkIGV2ZXIgYmUgdHJ1c3RlZCB3aXRob3V0IHNvbWUgbGV2ZWwgb2YgaHVtYW4gb3ZlcnNpZ2h0LlxuSW5kZWVkIGluIG15IG9waW5pb24gdmVyaWZpY2F0aW9uIHNob3VsZCBiZSBhbiBhaWQgdG8gY2xhcml0eSBhbmQgcmlnb3VyIGFuZCBuZXZlciBhIHN1YnN0aXR1dGUgZm9yIGl0LlxuVGhlIGlkZWEgb2YgYSBwcm9vZiBhcyBhIGJsYWNrIGJveCBpbiBwYXJ0aWN1bGFyIGlzIGFuYXRoZW1hIHRvIG1lLlxuXG5Nb3Zpbmcgb24sIHRoZSBzdGFuZHBvaW50IHRoYXQgc29mdHdhcmUgc2hvdWxkIGJlIGFuIGFpZCB0byBodW1hbiByZWFzb25pYmcgYW5kIG5vdCBhIHN1YnN0aXR1dGUgZm9yIGl0IG11c3QgdGhlc2UgZGF5cyBiZSB0ZW1wZXJlZCBieSBhIGNvbnNpZGVyYXRpb24gb2YgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgYXMgYSB0b29sIGZvciByZWFzb25pbmcuXG5XaGF0IGluc3BpcmVkIG1lIG92ZXIgdGhlIG5lYXIgZGVjYWRlIG9mIHdvcmsgdGhhdCBpdCB0b29rIHRvIGdldCBPY2NhbSB0byBpdHMgZmlyc3QgdmlhYmxlIHJlbGVhc2Ugd2FzIGEgZmlybSBiZWxpZWYgaW4gd2hhdCBJIGNhbGwgdGhlIGZvdXIgZWxlcGhhbnRzLCBleHBvdW5kZWQgaW4gdGhlIGZvdXIgY2hhcHRlcnMgb2YgdGhlIGFmb3JlbWVudGlvbmVkIEZvdW5kYXRpb25zIGJvb2suXG5JIGhhZCBub3QgaGVhcmQgb2YgbGFyZ2UgbGFuZ3VhZ2UgbW9kZWxzIHdoZW4gSSBzdGFydGVkIG91dCBhbmQgdGhleSB3ZXJlIG5ldmVyIGEgbW90aXZhdGluZyBmYWN0b3IsIGJ1dCBhcyBJIGNhbWUgdG8gbXkgZmlyc3QgbWlsZXN0b25lIGFmdGVyIHRob3NlIG1hbnkgeWVhcnMsIHRoZXkgYmVnYW4gdG8gbG9vbSBsYXJnZS5cblxuVGhlIHJlc3VyZ2VuY2Ugb2YgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgaW4gcmVjZW50IHllYXJzIGhhcyBoYXJkbHkgY2hhbmdlZCBteSB2aWV3cyBvbiBhdXRvbWF0ZWQgcmVhc29uaW5nLCBob3dldmVyLlxuQWRtaXR0ZWRseSBvZiBsYXRlIHRoZXJlIGhhcyBiZWVuIHNvbWUgcHJvZ3Jlc3MgaW4gdGhlIGRpcmVjdGlvbiBvZiBjb3VwbGluZyBhcnRpZmljaWFsIGludGVsbGlnZW5jZSB3aXRoIGZvcm1hbCByZWFzb25pbmcgc3lzdGVtcy5cbkJ1dCBmb3IgaXRzIHBhcnQgT2NjYW0gb25seSBoYXMgYSBiZWFyaW5nIG9uIHRoZSByaWdodCBoYW5kIHNpZGUgb2YgdGhpcyBjb3VwbGluZy5cbkhvd2V2ZXIgb24gdGhlIGxlZnQgaGFuZCBzaWRlLCBpdCBpcyBpbXBvcnR0YW50IHRvIG5vdGUgdGhhdCB0aGUgb3V0cHV0IG9mIHBvdGVudGlhbGx5IGFueSBsYXJnZSBsYW5ndWFnZSBtb2RlbCBvciBzdWNoIGxpa2UgY2FuIHNlcnZlIGFzIGlucHV0IGZvciBPY2NhbS5cblxuVGh1cyB0aGUgcGFuYWNlYSBvZiB1c2luZyBjb21wdXRlcnMgYXMgdG9vbHMgZm9yIHN5bWJvbGljIHJlYXNvbmluZywgYmUgdGhhdCBkZXZpc2luZyBhbGdvcml0aG1zIG9yIHByb3RvY29sczsgZGlzY292ZXJpbmcgbmV3IG1hdGhlbWF0aWNzIG9yIGxvZ2ljOyBvciB3aGF0ZXZlciwgaXMgYWxtb3N0IHVwb24gdXMuXG5BbmQgaXQgaXMgd29ydGggcG9pbnRpbmcgb3V0IHRoYXQgdGhpcyBwYW5hY2VhIGhhcyBiZWVuIGVhZ2VybHkgYW50aWNpcGF0ZWQgZm9yIGFyb3VuZCBzZXZlbnR5IGZpdmUgeWVhcnMgbm93LlxuVGhlcmUgaXMgbm8gZG91YnQgdGhhdCBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBpcyBvbiB0aGUgdmVyZ2Ugb2YgYnJpbmdpbmcgYWxsIG9mIHRoaXMgYWJvdXQsIGJ1dCB3aXRob3V0IHRvb2xzIHN1Y2ggYXMgT2NjYW0gdGhlIG91dHB1dCBvZiBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBtb2RlbHMgd2lsbCBhbHdheXMgYmUgY2xvdWRlZCBpbiBkb3VidC5cblxuRmluYWxseSBJIHNob3VsZCBtZW50aW9uIEhpZ2htYXJrLCB3aWhjaCBpcyBhIG5ldyBkb2N1bWVudCBwcmVwYXJhdGlvbiBzeXN0ZW0gZGV2ZWxvcGVkIGluIHRhbmRlbSB3aXRoIE9jY2FtLlxuSXQgaXMgYSBuZWNlc3NhcnkgaW50ZXJtZWRpYXRlIHN0ZXAgaW4gd29ya2luZyB0b3dhcmRzIE9jY2FtJ3Mgc3VwcG9ydCBmb3IgY29udHJvbGxlZCBuYXR1cmFsIGxhbmd1YWdlcyBidXQgSSBob3BlIHRoYXQgaW4gdGhlIGxvbmcgcnVuIGl0IHdpbGwgc3VjY2VlZCBpbiBpdHMgb3duIHJpZ2h0LlxuQm90aCB0aGlzIGJvb2sgYW5kIHRoZSBGb3VuZGF0aW9ucyBib29rIHdlcmUgd3JpdHRlbiB1c2luZyBIaWdobWFyayBhbmQgaXQgbWF5IHdlbGwgdHVybiBvdXQgdGhhdCBtb3JlIHBlb3BsZSB1c2UgT2NjYW0gZm9yIHdvcmtpbmcgd2l0aCBpdCB0aGFuIGZvciByZWFzb25pbmcuXG5UaGVyZSBpcyB0aGVyZWZvcmUgYSBjaGFwdGVyIGRlZGljYXRlZCB0byBpdCBpbW1lZGlhdGVseSBhZnRlciB0aGUgY2hhcHRlciBvbiBnZXR0aW5nIHRvIGdyaXBzIHdpdGggdGhlIElERS5cbkFuZCBpZiB5b3UgYXJlIHVzaW5nIE9jY2FtIHRvIHdvcmsgZXhjbHVzaXZlbHkgd2l0aCBIaWdobWFyayB0aGVuIHBsZWFzZSBkbyBub3QgYmUgZGF1bnRlZCBieSB0aGUgZm9ybWFsIHJlYXNvbmluZyBzaWRlIG9mIHRoaW5ncywgeW91IGNhbiBzYWZlbHkgaWdub3JlIGl0LCBhbmQgcmVzdCBhc3N1cmVkIHRoYXQgc3VwcG9ydCBmb3IgSGlnaG1hcmsgd2lsbCBhbHdheXMgYmUgaW5jbHVkZWQuXG5cblRvIGNvbmNsdWRlLCBJIGhvcGUgdGhhdCBpbiB0aGUgY29taW5nIHllYXJzIGF0IGxlYXN0IHNvbWUgcGVvcGxlIHdpbGwgY29tZSB0byBzZWUgT2NjYW0gYXMgYW4gaW5kZXNwZW5zaWJsZSB0b29sIGZvciBzeW1ib2xpYyByZWFzb25pbmcuXG5BbW9uZ3N0IG90aGVyIHRoaW5ncyBpdCB3aWxsIGVuYWJsZSB0aGVtIHRvIGxldmVyYWdlIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIHRvIGFpZCB0aGVpciBvd24gaW50ZWxsZWN0dWFsIGVucXVpcmllcy5cbkhvd2V2ZXIgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2Ugd2lsbCBub3QsIGF0IGxlYXN0IG5vdCBpbiB0aGUgZm9yZXNlZWFibGUgZnV0dXJlLCBzdXBwbGFudCB0aGVtLlxuXG5bXm9jY2FtXTogVGhlIHdvcmQgT2NjYW0gaXMgdXNlZCBzb21ld2hhdCBuZWJ1bG91c2x5IGhlcmUuXG5JdCBpcyBtb3N0IG9mdGVuIGFzc29jaWF0ZWQgd2l0aCBPY2NhbSdzIElERSBidXQgaW4gZmFjdCBpdCBlbmNvbXBhc3NlcyBhIHJhbmdlIG9mIHNvZnR3YXJlIGFuZCBzZXJ2aWNlcy5cblRoaXMgYm9vayBleHBsYWlucyB0aGVzZSBkaXZlcnMgcGFydHMgYW5kIHRoZXJlIGlzIGEgY29tcGFuaW9uIGJvb2ssIGNhbGxlZCBUaGUgRm91bmRhdGlvbnMgb2YgU3ltYm9saWMgUmVhc29uaW5nLCB0aGF0IGNvdmVycyB0aGUgdW5kZXJseWluZyB0aGVvcnkuXG5cblteZmxvcmVuY2VdOiBPY2NhbSB3YXMgb3JpZ2luYWxseSBjYWxsZWQgRmxvcmVuY2UgYnV0IHRoZSBmb3JtZXIgc2VlbWVkIG1vcmUgYXB0LlxuXG5AZm9vdG5vdGVzXG5cbkBwYWdlTnVtYmVyXG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgIyBPY2NhbSBbXm9jY2FtXVxuICBcbkFub3RoZXIgcGFyYWdyYXBoLlxuICBcblteb2NjYW1dOiBGb290bm90ZS5cblxuQGZvb3Rub3Rlc1xuXG5AcGFnZU51bWJlclxuYDtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgd2lkdGg6IDEwMCU7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5taW4taGVpZ2h0OiAxMDAlOyAgXG5wYWRkaW5nLXRvcDogNXJlbTsgIFxuYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudCA9IGBcblxuSSBoYXZlIHRyaWVkIHRvIG1ha2UgT2NjYW1bXm9jY2FtXSBhcyB1c2VhYmxlIGFzIHBvc3NpYmxlIGJ1dCB0aGVyZSBhcmUgbGltaXRzLlxuQXQgdGhlIGVuZCBvZiB0aGUgZGF5IGl0IGlzIGFuIGV4cGVydCBzeXN0ZW0gYW5kIHNvbWUgb2YgaXRzIHBhcnRzLCBub3QgbGVhc3QgdGhlIHZlcmlmaWVyLCBuZWVkIGRldGFpbGVkIGV4cGxhbmF0aW9uLlxuSXQgaXMgdGhlIHB1cnBvc2Ugb2YgdGhpcyBib29rIGlzIHRvIHByb3ZpZGUgdGhlc2UgZXhwbGFuYXRpb25zLlxuICBcbmAsXG4gICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgc3RhcnRSdWxlID0gbWFya2Rvd25QYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSwgc3RhcnRPZkNvbnRlbnQpLFxuICAgICAgICBpbXBvcnRlZE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgIGltcG9ydGVkVG9rZW5zID0gdG9rZW5zLFxuICAgICAgICBpbXBvcnRlZENsYXNzTmFtZSA9IFwiaW50cm9kdWN0aW9uXCI7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgaW1wb3J0ZWROb2RlLFxuICAgIGltcG9ydGVkVG9rZW5zLFxuICAgIGltcG9ydGVkQ2xhc3NOYW1lXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJWaWV3IiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJtYXJrZG93blN0eWxlIiwicGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIiLCJpbmRleCIsImNsZWFyUGFnZSIsInVwZGF0ZVBhZ2UiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsInByb3BlcnRpZXMiLCJnZXRNYXJrZG93blN0eWxlIiwiY3NzIiwic2V0Q1NTIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJzdGFydE9mQ29udGVudCIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJ1cGRhdGVNYXJrZG93biIsImdldE1hcmtkb3duIiwic2V0VG9rZW5zIiwiZGl2aXNpb25DbGFzc05hbWUiLCJJTlRST0RVQ1RJT05fQ0xBU1NfTkFNRSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJsaW5lc1BlclBhZ2UiLCJMSU5FU19QRVJfUEFHRSIsImNoYXJhY3RlcnNQZXJMaW5lIiwiQ0hBUkFDVEVSU19QRVJfTElORSIsImNvbnRleHQiLCJpbXBvcnRlciIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInBvc3Rwcm9jZXNzIiwic2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwibGVuZ3RoIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInBhZ2VOdW1iZXIiLCJnZXRUb2tlbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJodG1sIiwiYXNIVE1MIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJ1cGRhdGVYTVAiLCJ1cGRhdGVQcmV2aWV3RGl2IiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJUYWJCdXR0b25zRGl2Iiwib25DdXN0b21NYXJrZG93biIsIm9uQ3VzdG9tTWFya2Rvd25TdHlsZSIsIk1hcmtkb3duQ29udGFpbmVyRGl2Iiwib25DdXN0b21LZXlVcCIsIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIlJpZ2h0U2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiSFRNTERpdiIsIkhvcml6b250YWxTcGxpdHRlckRpdiIsIlJvd0RpdiIsIkNTU1RleHRhcmVhIiwiUHJldmlld0RpdiIsIm9uQ3VzdG9tUGFnZVVwZGF0ZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duIiwic2V0TWFya2Rvd25TdHlsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIl9pbml0aWFsTWFya2Rvd24iLCJ3aXRoU3R5bGUiLCJmaWxlUGF0aCIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1VkE7OztlQUFBOzs7b0VBclZzQjtvQkFFRTtxQkFDK0Q7MEJBQ1k7MkRBRS9FOzhEQUNHO2lFQUNBOzBEQUNDO2lFQUNFOzJEQUNFOzREQUNDOytEQUNJO29FQUNLO3lCQUVWO3lCQUNpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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