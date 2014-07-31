var a = ["азбука", "арбуз", "ахинея"];
var b = ["бомба", "бублик", "бегемот"];
var v = ["вихрь", "Виталя", "вести"];
var g = ["геморрой", "Гуга", "героин"];
var d = ["дом", "дота", "дочь"];
var e = ["ель", "есть", "Егор"];
var j = ["жизнь", "жаркое", "жрать"];
var z = ["зебра", "золото", "зелень"];
var i = ["икра", "импотент", "Италия"];
var k = ["колодец", "компот", "кот"];
var l = ["лодырь", "ложка", "лимон"];
var m = ["мышь", "мамонт", "минипут"];

function translate(what) {
	var translation = "";
	var text = what.split(" ");
	for (var counter=0;counter<text.length;counter++) {
		switch(text[counter].charAt(0)) {
			case "а": var chance = Math.floor(Math.random() * ((a.length-1) - 0 + 1) + 0);
			translation += a[chance]; break
			case "б": var chance = Math.floor(Math.random() * ((b.length-1) - 0 + 1) + 0);
			translation += b[chance]; break
			case "в": var chance = Math.floor(Math.random() * ((v.length-1) - 0 + 1) + 0);
			translation += v[chance]; break
			case "г": var chance = Math.floor(Math.random() * ((g.length-1) - 0 + 1) + 0);
			translation += g[chance]; break
			case "д": var chance = Math.floor(Math.random() * ((d.length-1) - 0 + 1) + 0);
			translation += d[chance]; break
			case "е": var chance = Math.floor(Math.random() * ((e.length-1) - 0 + 1) + 0);
			translation += e[chance]; break
			case "ж": var chance = Math.floor(Math.random() * ((j.length-1) - 0 + 1) + 0);
			translation += j[chance]; break
			case "з": var chance = Math.floor(Math.random() * ((z.length-1) - 0 + 1) + 0);
			translation += z[chance]; break
			case "и": var chance = Math.floor(Math.random() * ((i.length-1) - 0 + 1) + 0);
			translation += i[chance]; break
			case "к": var chance = Math.floor(Math.random() * ((k.length-1) - 0 + 1) + 0);
			translation += k[chance]; break
			case "л": var chance = Math.floor(Math.random() * ((l.length-1) - 0 + 1) + 0);
			translation += l[chance]; break
			case "м": var chance = Math.floor(Math.random() * ((m.length-1) - 0 + 1) + 0);
			translation += m[chance]; break
		}
	}
	console.log(translation);
	console.log(chance);
	return translation;
}

exports.translate = translate;