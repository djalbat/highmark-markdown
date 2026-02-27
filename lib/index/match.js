"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexMatch;
    }
});
const _constants = require("../constants");
class IndexMatch {
    constructor(regularExpression, transform){
        this.regularExpression = regularExpression;
        this.transform = transform;
    }
    getRegularExpression() {
        return this.regularExpression;
    }
    getReplacement() {
        return this.transform;
    }
    replace(plainText) {
        plainText = plainText.replace(this.regularExpression, this.transform); ///
        return plainText;
    }
    static revert(wordOrPhrase) {
        wordOrPhrase = wordOrPhrase.replace(/_/g, _constants.SINGLE_SPACE);
        return wordOrPhrase;
    }
    static fromPhrase(phrase) {
        const regularExpression = new RegExp(phrase, _constants.GLOBAL_FLAG), transform = phrase.replace(/\s/g, _constants.UNDERSCORE), indexMatch = new IndexMatch(regularExpression, transform);
        return indexMatch;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9tYXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVU5ERVJTQ09SRSwgR0xPQkFMX0ZMQUcsIFNJTkdMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHJlZ3VsYXJFeHByZXNzaW9uLCB0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIHJlcGxhY2UocGxhaW5UZXh0KSB7XG4gICAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UodGhpcy5yZWd1bGFyRXhwcmVzc2lvbiwgdGhpcy50cmFuc2Zvcm0pOyAgLy8vXG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIHJldmVydCh3b3JkT3JQaHJhc2UpIHtcbiAgICB3b3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UucmVwbGFjZSgvXy9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGhyYXNlKHBocmFzZSkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChwaHJhc2UsIEdMT0JBTF9GTEFHKSxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBwaHJhc2UucmVwbGFjZSgvXFxzL2csIFVOREVSU0NPUkUpLFxuICAgICAgICAgIGluZGV4TWF0Y2ggPSBuZXcgSW5kZXhNYXRjaChyZWd1bGFyRXhwcmVzc2lvbiwgdHJhbnNmb3JtKTtcblxuICAgIHJldHVybiBpbmRleE1hdGNoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhNYXRjaCIsInJlZ3VsYXJFeHByZXNzaW9uIiwidHJhbnNmb3JtIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJnZXRSZXBsYWNlbWVudCIsInJlcGxhY2UiLCJwbGFpblRleHQiLCJyZXZlcnQiLCJ3b3JkT3JQaHJhc2UiLCJTSU5HTEVfU1BBQ0UiLCJmcm9tUGhyYXNlIiwicGhyYXNlIiwiUmVnRXhwIiwiR0xPQkFMX0ZMQUciLCJVTkRFUlNDT1JFIiwiaW5kZXhNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OzsyQkFGaUM7QUFFdkMsTUFBTUE7SUFDbkIsWUFBWUMsaUJBQWlCLEVBQUVDLFNBQVMsQ0FBRTtRQUN4QyxJQUFJLENBQUNELGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDRixpQkFBaUI7SUFDL0I7SUFFQUcsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsUUFBUUMsU0FBUyxFQUFFO1FBQ2pCQSxZQUFZQSxVQUFVRCxPQUFPLENBQUMsSUFBSSxDQUFDSixpQkFBaUIsRUFBRSxJQUFJLENBQUNDLFNBQVMsR0FBSSxHQUFHO1FBRTNFLE9BQU9JO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPQyxZQUFZLEVBQUU7UUFDMUJBLGVBQWVBLGFBQWFILE9BQU8sQ0FBQyxNQUFNSSx1QkFBWTtRQUV0RCxPQUFPRDtJQUNUO0lBRUEsT0FBT0UsV0FBV0MsTUFBTSxFQUFFO1FBQ3hCLE1BQU1WLG9CQUFvQixJQUFJVyxPQUFPRCxRQUFRRSxzQkFBVyxHQUNsRFgsWUFBWVMsT0FBT04sT0FBTyxDQUFDLE9BQU9TLHFCQUFVLEdBQzVDQyxhQUFhLElBQUlmLFdBQVdDLG1CQUFtQkM7UUFFckQsT0FBT2E7SUFDVDtBQUNGIn0=