var Car = ModelConstructor(),
    bmw = new Car();

bmw.set("make", "Nissan");
bmw.set("model", "XTerra");

$("#make").text(bmw.get("make"));
$("#model").text(bmw.get("model"));