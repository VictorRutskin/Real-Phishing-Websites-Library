function server(t){if("activities"==t){var a=$("#widget_activities").find("li"),e=$("#widget_activities h3 small").text(),i=a.attr("data-id");void 0===i&&(i=0),$.ajax({type:"POST",url:appurl+"/server",data:"request=activities&id="+i+"&token="+token,beforeSend:function(){a.removeClass("new_item"),$("#widget_activities h3 small").html("<img class='loader' src='"+appurl+"/static/loader.gif' style='margin:0 45%;border:0;' />")},complete:function(){$("#widget_activities h3 small").text(e)},success:function(t){$("#widget_activities ul").html(t)}})}return!1}function refreshLinks(){$(".data-holder").length<1||$.ajax({type:"POST",url:appurl+"/server",data:"request=refreshlinks&token="+token,beforeSend:function(){$(".data-holder").html("<div class='data-modal'><img class='loader' src='"+appurl+"/static/loader.gif' style='margin:0 45%;border:0;' /></div>")},complete:function(){$(".data-modal").remove()},success:function(t){$(".data-holder").html(t),loadall()}})}function archive(t){var a=$(".return-ajax"),e="<img class='loader' src='"+appurl+"/static/loader.gif' style='margin:5px 50%;border:0;' />";$.ajax({type:"POST",url:appurl+"/server",data:"request=archive&id="+t+"&token="+token,beforeSend:function(){a.html(e)},complete:function(){loadall(),$("img.loader").fadeOut("fast")},success:function(t){a.hide(),a.html(t),a.fadeIn("fast")}})}function addtobundle(t,a){var e=$(".return-ajax"),i="<img class='loader' src='"+appurl+"/static/loader.gif' style='margin:5px 50%;border:0;' />";$.ajax({type:"POST",url:appurl+"/server",data:"request=bulk_bundle_add&id="+t+"&bundleid="+parseInt(a)+"&token="+token,beforeSend:function(){e.html(i)},complete:function(){$("img.loader").fadeOut("fast").remove()},success:function(t){$(document).modal_destroy(),e.hide(),e.html(t.msg),e.fadeIn("fast"),refreshLinks(),$("#selectall").html('<i class="fa fa-check-square"></i>'),$("input").iCheck("uncheck")}})}$(document).ready((function(){if($(document).on("submit","form#main-form",(function(t){t.preventDefault();var a=$(this);if("1"===$("#multiple-form").val())var e=a.find(".main-textarea");else e=a.find(".main-input");if(!e.val())return $(".ajax").hide().html('<div class="alert alert-danger">'+lang.error+"</div>").fadeIn("slow"),void $(".main-input").addClass("error");a.find("#shortenurl").text();$.ajax({type:"POST",url:appurl+"/shorten",data:$(this).serialize(),dataType:"json",beforeSend:function(){$(".ajax").html("<img class='loader' src='"+appurl+"/static/loader.gif' style='margin:5px 50%;border:0;' />")},complete:function(){$(".ajax").find(".loader").fadeOut("fast")},success:function(t){if(t.error)"captcha"==t.html&&$("#captcha").fadeIn("slow"),$(".ajax").hide().html('<div class="alert alert-danger">'+t.msg+"</div>").fadeIn("slow"),$(".main-input").addClass("error");else{if($(".main-input").removeClass("error"),$(".main-advanced").fadeOut("slow"),$("#captcha").fadeOut("slow"),t.confirm)$(".share-this").slideUp(),$(".ajax").hide().html('<div class="alert alert-success">'+lang.success+"</div>").fadeIn("slow");else{$("#shortenurl").hide(),$("#copyurl").show();var a=t.short.split("#");$(".ajax").hide().html('<div class="alert alert-success no-round">'+lang.success+" <br /><br /> "+lang.stats+" "+a[0]+"+ </div>").fadeIn("slow"),$(".share-this").html('<div class="panel panel-default panel-body"><div class="qr"><img src="'+a[0]+'/qr?size=500x500" alt=""></div><div class="share-message"><p>'+lang.congrats+'</p><div class="share"><a href="'+t.short+'/qr" target="_blank" class="btn btn-primary" data-value="'+t.short+'/qr?size=500x500">'+lang.qr+'</a> <a href="http://www.facebook.com/sharer.php?u='+t.short+'" target="_blank" class="btn btn-inline btn-facebook u_share">'+lang.share+' Facebook</a> <a href="https://twitter.com/share?url='+t.short+'" target="_blank" class="btn btn-inline btn-twitter u_share">'+lang.share+" Twitter</a></div></div></div>").fadeIn("slow"),zClipload(),refreshLinks()}$(".main-advanced").find("input").val(""),e.val(t.short),e.select(),$("#captcha > div").length>0&&recaptcha();var i=new Clipboard("#copyurl");$("#submit").hide(),$("#copyurl").attr("data-clipboard-text",t.short).show(),i.on("success",(function(t){$(".ajax").hide().html('<div class="alert alert-success">'+lang.copy+"</div>").fadeIn("slow"),$("#copyurl").hide(),$("#shortenurl").show(),$("input.main-input").val("")}))}}})})),$("#search").submit((function(t){t.preventDefault();var a=$(this).find("input[type=text]").val(),e=$(this).attr("action");a.length>3?$.ajax({type:"POST",url:e,data:"q="+a+"&token="+token,beforeSend:function(){$(".return-ajax").html("<img class='loader' src='"+appurl+"/static/loader.gif' style='margin:0 45%;border:0;' />")},complete:function(){$("img.loader").fadeOut("fast",(function(){$(this).remove()}))},success:function(t){$(".return-ajax").html(t),$(".url-container").slideUp("fast"),$(".return-ajax").slideDown("fast"),loadall()}}):$(".return-ajax").html('<p class="alert alert-info" style="color:#fff">'+lang.minsearch+"</p><br>").fadeIn()})),$(document).on("click",".ajax_call",(function(t){t.preventDefault();var a=$(this),e=$(this).attr("data-id"),i=$(this).attr("data-action"),r="<img class='loader' src='"+appurl+"/static/loader.gif' style='margin:5px 50%;border:0;' />",l=a.attr("data-title");if(void 0===$(this).attr("data-container"))if(void 0!==$(this).attr("data-class")){var n=$("."+$(this).attr("data-class"));r="<span><i class='glyphicon glyphicon-refresh'></i> Loading</span>"}else{void 0===l&&(l="User Account"),$(this).modal({title:l,content:"Please wait while loading...",confimation:1});n=$("#modal-alert > p")}else n=$("#"+$(this).attr("data-container"));l=$(this).attr("data-title");$.ajax({type:"POST",url:appurl+"/server",data:"request="+i+"&id="+e+"&token="+token,beforeSend:function(){n.html(r)},complete:function(){loadall(),$("img.loader").fadeOut("fast")},success:function(t){void 0!==a.attr("data-active")&&(a.parents("div#user-content").find(".active").removeClass("active"),a.addClass(a.attr("data-active"))),n.hide(),n.html(t),n.fadeIn("fast")}})})),$("#widget_activities").length>0){var t=$("#widget_activities").attr("data-refresh");setInterval((function(){server("activities")}),t)}$("#archiveall").click((function(t){if(t.preventDefault(),$(".url-container input[type=checkbox]:checked").length<1)return $(".return-ajax").html('<div class="alert alert-info" style="color:#fff">'+lang.minurl+"</div><br>").fadeIn();$(".url-container input[type=checkbox]").each((function(t){$(this).prop("checked")&&archive($(this).data("id"))}))})),$(document).on("click","#addtobundle",(function(t){if(t.preventDefault(),$(".url-container input[type=checkbox]:checked").length<1)return $(".return-ajax").html('<div class="alert alert-info" style="color:#fff">'+lang.minurl+"</div><br>").fadeIn();var a=$(this).data("content");$.ajax({type:"POST",url:appurl+"/server",data:"request=bulk_bundle&token="+token,complete:function(){loadall(),$("img.loader").fadeOut("fast")},success:function(t){$(this).modal({title:a,content:"Please wait while loading...",confimation:1});let e=$("#modal-alert > p");e.hide(),e.html(t),e.fadeIn("fast")}})})),$(document).on("submit","[role=bulk-bundle]",(function(t){t.preventDefault();let a=$(this).find("select").val();$(".url-container input[type=checkbox]").each((function(t){$(this).prop("checked")&&addtobundle($(this).data("id"),a)}))})),$(document).on("click",".fetchBundles",(function(t){t.preventDefault();var a=$(this),e=$(this).attr("data-id"),i=$(this).attr("data-action"),r=(appurl,a.attr("data-title"));$.ajax({type:"POST",url:appurl+"/server",data:"request="+i+"&id="+e+"&token="+token,complete:function(){loadall(),$("img.loader").fadeOut("fast")},success:function(t){$(this).modal({title:r,content:t,header:!1,confimation:1})}})}))}));