initView();

function initView(){
	var locations_name= ["北京市","天津市","上海市","重庆市","河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","海南省","四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省","内蒙古自治区","广西壮族自治区","西藏自治区","宁夏回族自治区","新疆维吾尔自治区","香港特别行政区","澳门特别行政区"];
	var locations_value = ["北京","天津","上海","重庆","河北","山西","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","海南","四川","贵州","云南","陕西","甘肃","青海","台湾","内蒙古","广西壮族自治区","西藏","宁夏","新疆维吾尔","香港","澳门"];
	var locationArray = localStorage.locationArray == null?[]:localStorage.locationArray;
	for(var i in locations_name){
		var checked = locationArray.indexOf(locations_value[i])<0?"":"checked";
		$("#location").append("<li class='aui-list-item'>"+
	           "<div class='aui-list-item-inner'>"+
	               "<label><input class='aui-checkbox' type='checkbox' "+checked+" name='location' value='"+locations_value[i]+"'>　"+locations_name[i]+"</label>"+
	           "</div>"+
	       "</li>");
	}
}

function showIndexUI(){
	var locationArray = $("input[name='location']:checked").toArray();
	for(var i in locationArray){
		locationArray[i] = $(locationArray[i]).val();
	}
	localStorage.locationArray = locationArray;
	window.location.href = "index.html";
}