describe('JQuery Plugin append-in-str',function(){
                it("should return same value with short max", function () {

                        var str = $.append_in_str("moshe is in the house", "yoske", 5, 10);
                        expect(str).toEqual("moshe is in the house");
                });

                it("should add the charachter in 3 position", function () {

                        var str = $.append_in_str("moshe is in the house", "-yoske-", 3, null);
                        expect(str).toEqual("mos-yoske-he is in the house");
                });

                it("should trim the append string in case of max breach", function () {

                        var str = $.append_in_str("moshe is in the house", "-yoske-", 3, 26);
                        expect(str).toEqual("mos-yoshe is in the house");
                });

                it("should should append single charachter", function () {

                        var str = $.append_in_str("moshe is in the house", "1", 5, null);
                        expect(str).toEqual("moshe1 is in the house");
                });

                it("should should append multiple charachter", function () {

                        var str = $.append_in_str("moshe is in the house", "111", 5, null);
                        expect(str).toEqual("moshe111 is in the house");
                });
});