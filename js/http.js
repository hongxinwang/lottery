var http={
	url:{
		get:__uri('/manage/getnum?activetyid='),
		post:__uri('/admin/setting/')
	},
	ajax:function(opt){
		_y.mixin(opt.data||(opt.data={}),{
			_token:$('meta[name="csrf-token"]').attr('content')
		});
		_y.mixin(opt,{
			dataType:'json'
		});
		return $.ajax(opt);
	},
	getUrl:function(){
		return http.ajax({
			url:http.url.get+config.activityid,
			type:'get',
			data:{
				_method:'get'
			}
		})
	},
	postUrl:function(){
		return http.ajax({
			type:'post',
			url:http.url.post+config.roundid,
			_method:'put',
			action:'off',
			activityid:config.activityid
		})
	}
};