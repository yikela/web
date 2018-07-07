
var padDate=function(va){
  va=va<10?'0'+va:va;
  return va
}


export default (a) => {
  var val = new Date(a)
	var year=val.getFullYear();
	var month=padDate(val.getMonth()+1);
	var day=padDate(val.getDate());
	var hour=padDate(val.getHours());
	var minutes=padDate(val.getMinutes());
	var seconds=padDate(val.getSeconds());
	return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
}
