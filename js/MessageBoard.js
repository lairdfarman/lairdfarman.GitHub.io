i = 1;

function fnsubmit() {
	var odiv = document.getElementById("box");
	var oem = odiv.getElementsByTagName("em")[0];
	var otext = document.getElementById("text");
	var oli = odiv.getElementsByTagName("li");
	var add_li = document.createElement("li");
	var o_span = document.createElement("span");

	if(otext.value == "") {
		alert("请填写留言内容！");
		return;
	}

	oem.style.display = "none";
	o_span.style.position = "absolute";
	o_span.style.top = "0px";
	o_span.style.right = "20px";
	o_span.style.background = "#cccccc";

	add_li.style.position = "relative";
	add_li.index = i;
	add_li.style.background = "#cccccc";
	add_li.style.marginBottom = "20px";
	var str = document.createTextNode(i + "、" + otext.value);
	var strspan = document.createTextNode("点击删除" + i + "、" + otext.value + "内容");
	add_li.appendChild(o_span);
	o_span.style.display = "block";
	o_span.appendChild(strspan);
	add_li.appendChild(str);

	odiv.appendChild(add_li);
	i++;

	for(j = 0; j < oli.length; j++) {
		var m = j;
		oli[j].onmouseover = function() {
			this.style.background = "#ffff00";
			(this.childNodes(o_span)).style.display = "block";

		};
		oli[j].onmouseout = function() {
			this.style.background = "#cccccc";
			(this.childNodes(o_span)).style.display = "none";
		};
		oli[j].onclick = function() {

			m--;
			odiv.removeChild(this);
			if(m < 0) {
				oem.style.display = "block";
			};
		};
	};
}