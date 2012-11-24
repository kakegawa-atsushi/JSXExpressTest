import "js.jsx";
import "js/web.jsx";

class _Main {
    static function main(args: string[]): void {
        var jq = js.global["$"] as __noconvert__ (variant) -> jQueryObject;
        var JQ = js.global["$"] as __noconvert__ jQueryStatic;
        jq((): void -> {
            jq("#button").click((event) -> {
                JQ.get(dom.window.location.href + "data", null, (data: string): void -> {
                    jq("#text-div").append(data);
                });
            });
        });
    }
}

native __fake__ class jQueryObject {
    function constructor(func: (variant) -> variant);
    function click(handler: (variant) -> void): jQueryObject;
    function append(elem: variant): jQueryObject;
}

native __fake__ class jQueryStatic {
    function get(url: string, data: variant, success: (string) -> void): variant;
}