/*!
 * Extra Selectors - Script fork do jQuery Browser Selector
 * Não depende do jQuery e é mais rápido!
 */
(function(){

	var userAgent = navigator.userAgent.toLowerCase(),
		html = document.getElementsByTagName('html')[0],
		os = /(mac|win|linux|freebsd|mobile|iphone|ipod|ipad|android|blackberry|j2me|webtv)/.exec(userAgent),
		ua = /(ie|firefox|chrome|safari|opera)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent);

	var addClass = function(name){
		html.className += ' ' + name;
	};

	addClass(os[1] + ' ' + ua[1]);

	/**
	 * Fix Safari
	 */
	if(ua[1] == 'safari')
		addClass(ua[1] + '-' + ua[2].substring(0, 1));
	else
		addClass(ua[1] + '-' + parseInt(ua[2]));

	/**
	 * IE conditional
	 */
	if(ua[1] == 'ie'){

		for(var ver = 3; ver < 10; ver++) {
			if(parseInt(ua[2]) < ver)
				addClass('lt-ie-' + ver);
		}

	}

})();

/*!
 * jQuery Acord 1.3
 */
(function(a){a.acord={padrao:{fx:"default",extend:{},pai:"h2",filho:"div",classeAjax:"ajax",atributoUrl:"url",evento:"click",hash:!1,inicial:1,sempreUm:!0,autoHeight:!1,tempoIn:"fast",tempoOut:"fast",easingIn:"swing",easingOut:"swing",onAnima:null,live:!1,liveTempo:150},init:function(){var b=a(this).data("acord"),c=a(this).find(b.filho).addClass("acord-filho"),d=a(this).find(b.pai).addClass("acord-pai"),e=window.location.hash;c.each(function(){a(this).css("height",a(this).height()+"px")}),b.hash&&e!==""&&a(e).is(".acord-filho")&&(b.inicial=a(e).prevAll(".acord-filho").length+1),b.sempreUm&&c.eq(b.inicial-1).addClass("acord-filho-atual").show().prev(b.pai).addClass("acord-pai-atual");if(b.autoHeight){var f=0;c.each(function(){f=Math.max(f,a(this).outerHeight())}).height(f),a(this).height(a(this).height()).css({overflow:"hidden"})}b.extend[b.fx+"-init"]&&b.extend[b.fx+"-init"].apply(this),a(this).addClass("acord-"+b.fx),a.acord.bind.apply(this)},bind:function(){var b=a(this).data("acord"),c=a(this);a(".acord-pai",this).bind(b.evento,function(){if(a(this).hasClass("acord-pai-atual"))return!1;this.hash&&(window.location.hash=this.hash);return a(this).hasClass(b.classeAjax)?a.acord.ajax.apply(c,[a(this),a(this).next(".acord-filho")]):a.acord.anima.apply(c,[a(this),a(this).next(".acord-filho")])}),b.sempreUm&&a(".acord-pai-atual",this).hasClass(b.classeAjax)&&a(".acord-pai-atual",this).trigger(b.evento)},destroy:function(){var b=a(this).data("acord");a(".acord-pai",this).unbind(b.evento),a(this).removeData("acord")},fx:{"default":function(b,c){var d=a(this).data("acord");a(d.filho,this).not(c).slideUp(d.tempoIn,d.easingIn),d.sempreUm?c.slideDown(d.tempoOut,d.easingOut):c.slideToggle(d.tempoIn,d.easingIn)}},ajax:function(b,c){var d=a(this).data("acord"),e=this;a.ajax({url:b.attr(d.atributoUrl),success:function(a){c.html(a)},complete:function(){c.height("auto"),a(e).height("auto");return a.acord.anima.apply(e,[b,c])}})},anima:function(b,c){var d=a(this).data("acord");a(".acord-filho-atual",this).removeClass("acord-filho-atual"),a(".acord-pai-atual",this).removeClass("acord-pai-atual"),b.addClass("acord-pai-atual"),c.addClass("acord-filho-atual"),a.isFunction(d.onAnima)&&d.onAnima.apply(this,[b,c]),a.acord.fx[d.fx].apply(this,[b,c]);return!1}},a.fn.acord=function(b){if(a.acord[b])a.acord[b].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof b=="object"||!b){var c=a.extend(!0,{},a.acord.padrao,b);if(c.live){var d=[],e=this.selector;setInterval(function(){var b=a(e).not(d);d=a(e),b.each(function(){a(this).data("acord",c),a.acord.init.apply(this,arguments)})},c.liveTempo)}else this.each(function(){a(this).data("acord",c),a.acord.init.apply(this,arguments)})}return this}})(jQuery);

/*!
 * jQuery Modal 1.2
 */
(function(a){a.fn.modal=function(b){function g(){i.fundo&&(k.fundo=a("<div/>").addClass(i.classeFundo).css({width:"100%",height:"100%",opacity:i.fundoOpacidade,position:"fixed",top:0,left:0,zIndex:i.zIndex-1,backgroundColor:"#000",display:"none"}).appendTo("body").fadeIn(i.tempoFundo)),k.load=a("<div/>").addClass(i.classeLoad).css({position:"fixed",top:"50%",left:"50%",zIndex:i.zIndex}),k.modal=a("<div/>").addClass(i.classeModal).css({width:l.largura,height:l.altura,position:"absolute",zIndex:i.zIndex,display:"none"}),i.autoPosiciona&&k.modal.css({position:"fixed",top:"50%",left:"50%"}),k.fecha=a("<span>x</span>").addClass(i.classeFecha),i.classeTitulo!=null&&i.classeTitulo&&(k.titulo=a("<div/>").addClass(i.classeTitulo)),k.conteudo=a("<div/>").addClass(i.classeConteudo),i.fecha&&k.fundo&&k.fundo[i.eventoFundo](function(){return c()}),a.isFunction(i.onCria)&&i.onCria.apply(k.modal,[k,l,n,i])}function f(){k.titulo&&k.titulo.html(i.titulo).append(l.titulo),(n.hasClass(i.seletorAjax)||n.hasClass(i.seletorImagem))&&k.load.appendTo("body").css({marginTop:-(k.load.outerHeight()/2),marginLeft:-(k.load.outerWidth()/2)});if(n.hasClass(i.seletorVideo)){l.link=l.link.replace(new RegExp("watch\\?v=","i"),"v/");var b='<object width="'+l.videoLargura+'" height="'+l.videoAltura+'" classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" style="display: block">';b+='<param name="movie" value="'+l.link+'"></param>',b+='<embed type="application/x-shockwave-flash" src="'+l.link+'" width="'+l.videoLargura+'" height="'+l.videoAltura+'"></embed>',b+="</object>",k.conteudo.append(b)}else if(n.hasClass(i.seletorIframe)){var b='<iframe src="'+l.link+'" height="'+l.iframeAltura+'" width="'+l.iframeLargura+'" style="border:0; display: block" frameBorder="0"></iframe>';k.conteudo.append(b)}else{if(n.hasClass(i.seletorAjax)){k.conteudo.load(l.link,function(b,c,e){if(e){c=="error"&&k.conteudo.append("Ocorreu algum erro ou esta url não existe..."),k.load.fadeOut(i.tempoFundo,function(){a(this).remove()});return d()}});return}if(n.hasClass(i.seletorImagem)){var c=new Image;a(c).load(function(){a(this).css({display:"none",height:this.height,width:this.width}),k.load.fadeOut(i.tempoFundo,function(){a(this).remove()}),k.conteudo.append(c),a(this).fadeIn();return e(this.width,this.height)}).attr("src",l.link);return}k.conteudo.append(l.conteudo)}return d()}function e(a,b){k.conteudo.css({height:b,width:a}),d()}function d(){i.conteudoAntes?k.conteudo.prepend(i.conteudo):k.conteudo.append(i.conteudo),k.titulo&&k.titulo.html()!==undefined&&k.modal.append(k.titulo),k.modal.append(k.conteudo).append(k.fecha).appendTo("body").hide(),i.autoPosiciona?k.modal.css({marginTop:-(k.modal.outerHeight()/2),marginLeft:-(k.modal.outerWidth()/2)}):(m.w=j.width(),m.h=j.height(),m.sl=j.scrollLeft(),m.st=j.scrollTop(),k.modal.css({top:m.h/2+m.st-k.modal.outerHeight()/2,left:m.w/2+m.sl-k.modal.outerWidth()/2})),k.modal.fadeIn(i.tempo),k.fecha[i.eventoFecha](function(){return c()}),a("."+i.seletorCancela)[i.eventoCancela](function(){a.isFunction(i.onCancela)&&i.onCancela.apply(this,[k,l,n,i]);return c()}),a("."+i.seletorConfirma)[i.eventoConfirma](function(){a.isFunction(i.onConfirma)&&i.onConfirma.apply(this,[k,l,n,i]);return c()}),a.isFunction(i.onExibe)&&i.onExibe.apply(k.modal,[k,l,n,i])}function c(){k.fundo&&k.fundo.fadeOut(i.tempo,function(){a(this).remove()}),k.load&&k.load.length&&k.load.remove(),k.modal&&k.modal.remove(),a.isFunction(i.onFecha)&&i.onFecha.apply(k.modal,[k,l,n,i]),k=[];return!1}var h={seletorImagem:"imagem",seletorAjax:"ajax",seletorIframe:"iframe",seletorVideo:"video",seletorCancela:"fecha",seletorConfirma:"confirma",classeModal:"modal-area",classeTitulo:"modal-titulo",classeConteudo:"modal-conteudo",classeFecha:"modal-fecha",classeLoad:"modal-load",classeFundo:"modal-fundo",fundoOpacidade:.7,zIndex:1e3,evento:"click",eventoFecha:"click",eventoFundo:"click",eventoConfirma:"click",eventoCancela:"click",tempo:"fast",tempoFundo:"fast",tempoLoad:"fast",fundo:!0,fecha:!0,titulo:null,conteudo:null,conteudoAntes:!1,autoPosiciona:!1,atributoLink:"href",atributoTitulo:"titulo",atributoConteudo:"conteudo",atributoAltura:"altura",atributoLargura:"largura",atributoIframeLargura:"iframelargura",atributoIframeAltura:"iframealtura",atributoVideoLargura:"videolargura",atributoVideoAltura:"videoaltura",onInicia:null,onCria:null,onExibe:null,onFecha:null,onConfirma:null,onCancela:null},i=a.extend(h,b),j=a(window),k=[],l=[],m=[],n;a(document).delegate(this.selector,i.evento,function(){if(a("."+i.classeModal).length)return!1;n=a(this),l.titulo=n.attr(i.atributoTitulo),l.conteudo=n.attr(i.atributoConteudo),l.altura=n.attr(i.atributoAltura),l.largura=n.attr(i.atributoLargura),l.link=n.attr(i.atributoLink),l.iframeLargura=n.attr(i.atributoIframeLargura),l.iframeAltura=n.attr(i.atributoIframeAltura),l.videoLargura=n.attr(i.atributoVideoLargura),l.videoAltura=n.attr(i.atributoVideoAltura),a.isFunction(i.onInicia)&&i.onInicia.apply(n,[l,n,i]),g(),f();return!1})}})(jQuery);

/*!
 * jQuery Nav 1.2
 */
(function(a){a.fn.nav=function(b){function d(b,c){if(c.is(":animated"))return!1;b.addClass(g),a.isFunction(f.onExibe)&&f.onExibe.apply(b,[b,c,f]),c.stop(f.stopClearQueue,f.stopJumpToEnd).addClass(h)[f.efeitoIn](f.tempoIn,f.easingIn)}function c(b,c){b.removeClass(g),c.stop(f.stopClearQueue,f.stopJumpToEnd).delay(f.tempoDelay).removeClass(h)[f.efeitoOut](f.tempoOut,f.easingOut),a.isFunction(f.onEsconde)&&f.onEsconde.apply(b,[b,c,f])}var e={seletorFilho:"ul:first",classePaiAtual:"nav-pai-atual",classeFilhoAtual:"nav-filho-atual",evento:"mouseenter",eventoFim:"mouseleave",efeitoIn:"slideDown",efeitoOut:"slideUp",tempoIn:"fast",tempoOut:"fast",tempoDelay:100,easingIn:"swing",easingOut:"swing",stopClearQueue:!0,stopJumpToEnd:!0,onExibe:null,onEsconde:null},f=a.extend(e,b),g=f.classePaiAtual,h=f.classeFilhoAtual;a(document).delegate(this.selector,f.evento,function(){var b=a(this).children(f.seletorFilho);if(!b.length)return!1;d(a(this),b),a(this).unbind(f.eventoFim).bind(f.eventoFim,function(){return c(a(this),b)})})}})(jQuery);

/*!
 * jQuery Slidetabs 1.3
 */
(function(a){a.slideTabs={options:{seletorPainel:".painel",seletorMiniatura:".miniatura",seletorAnterior:".anterior",seletorProximo:".proximo",eventoMiniatura:"click",eventoSeta:"click",inicial:1,continuo:!0,auto:!1,pausarAuto:!0,pausa:4e3,tempo:"fast",easing:"swing",scroll:1,direcao:"x",onSlide:null,live:!1,liveTempo:100},init:function(){var b=this,c=a(b),d=c.data("slidetabs"),e=c.find(".slidetabs-scroll"),f=c.find(d.seletorPainel),g=c.find(d.seletorMiniatura),h=d.direcao=="x"?f.outerWidth(!0):f.outerHeight(!0);position=d.direcao=="x"?"left":"top",i=d.inicial-1,f.filter(":first").addClass("slidetabs-painel-primeiro"),f.eq(i).addClass("slidetabs-painel-atual"),h=i*h,position=="top"&&f.css("float","none"),e.css(position,-h+"px"),g.eq(i).addClass("slidetabs-miniatura-atual");return a.slideTabs.bind.apply(this)},bind:function(){var b=this,c=a(b),d=c.data("slidetabs");a(d.seletorAnterior,b).bind(d.eventoSeta,function(){return a.slideTabs.animate.apply(b,[-1])}),a(d.seletorMiniatura,b).bind(d.eventoMiniatura,function(){if(a(this).hasClass("slidetabs-miniatura-atual"))return!1;var d=c.find(".slidetabs-miniatura-atual").prevAll().length,e=a(this).prevAll().length-d;return a.slideTabs.animate.apply(b,[e])}),a(d.seletorProximo,b).bind(d.eventoSeta,function(){return a.slideTabs.animate.apply(b,[1])}),d.auto&&(d.pausarAuto&&c.hover(function(){a.slideTabs.stop.apply(b),a(this).data("slideHover","1")},function(){a(this).removeData("slideHover"),a.slideTabs.start.apply(b)}),a.slideTabs.start.apply(b))},unbind:function(){var b=this,c=a(b),d=c.data("slidetabs");a(d.seletorAnterior,b).unbind(d.eventoSeta),a(d.seletorProximo,b).unbind(d.eventoSeta),a(d.seletorMiniatura,b).unbind(d.eventoMiniatura),a.slideTabs.stop.apply(b),d.pausarAuto&&(c.unbind("hover"),c.removeData("slideHover"))},stop:function(){var a=this;return clearInterval(a.timeout)},start:function(){var b=this,c=a(b),d=c.data("slidetabs");a.slideTabs.stop.apply(b),b.timeout=setTimeout(function(){return d.pausarAuto&&c.data("slideHover")?!1:a.slideTabs.animate.apply(b,[1])},d.pausa)},adjustPosition:function(b){var c=this,d=a(c),e=d.data("slidetabs"),f=d.find(".slidetabs-scroll"),g=d.find(e.seletorPainel),h=d.find(".slidetabs-painel-atual"),i=e.direcao=="x"?g.outerWidth(!0):g.outerHeight(!0),j=e.direcao=="x"?"left":"top",k=h.prevAll().length+1,b=k+b;if(!e.continuo)return k;if(b>g.length){var l=b-g.length;e.scroll>1&&(l+=e.scroll-1);var m=g.slice(0,l);m.insertAfter(g.filter(":last")),k-=l,f.css(j,"-"+(k-1)*i+"px")}else if(k>b){var l=k-b;l>0&&!h.prevAll().eq(l-1).length&&($gt=g.slice(g.length-l),$gt.insertBefore(g.filter(":first")),k+=l,f.css(j,"-"+(k-1)*i+"px"))}return k},animate:function(b){if(b==undefined)return!1;var c=this,d=a(c),e=d.data("slidetabs"),f=d.find(".slidetabs-scroll"),g=d.find(e.seletorPainel),h=d.find(".slidetabs-painel-atual"),i=d.find(e.seletorMiniatura),j=h.prevAll().length+1,k=e.direcao=="x"?g.outerWidth(!0):g.outerHeight(!0),l=e.direcao=="x"?"left":"top",m={};e.scroll>1&&(b=b>0?b+e.scroll-1:b-e.scroll+1);if(!e.continuo)if(b<0&&j+b<=0||b>0&&j+b>g.length)return!1;j=a.slideTabs.adjustPosition.apply(this,[b]),m[l]="-="+b*k,f.is(":animated")||f.animate(m,{queue:!1,duration:e.tempo,easing:e.easing,complete:function(){h.removeClass("slidetabs-painel-atual"),h=d.find(e.seletorPainel).eq(j-1+b),h.addClass("slidetabs-painel-atual");var f=d.find(".slidetabs-miniatura-atual").removeClass("slidetabs-miniatura-atual"),g=f.prevAll().length+b;g>=i.length&&(g=0),i.eq(g).addClass("slidetabs-miniatura-atual"),a.isFunction(e.onSlide)&&e.onSlide.apply(c,[d]),e.auto&&a.slideTabs.start.apply(c)}});return!1}},a.fn.slideTabs=function(b){if(a.slideTabs[b])a.slideTabs[b].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof b=="object"||!b){var c=a.extend(!0,{},a.slideTabs.options,b);if(c.live){var d=[],e=this.selector;setInterval(function(){var b=a(e).not(d);d=a(e),b.each(function(){a(this).data("slidetabs",c),a.slideTabs.init.apply(this,arguments)})},c.liveTempo)}else this.each(function(){a(this).data("slidetabs",c),a.slideTabs.init.apply(this,arguments)})}return this}})(jQuery);

/*!
 * jQuery Tooltip 1.3
 */
(function(a){a.fn.tooltip=function(b){function f(b,c){a("."+h.classeArea).remove(),a.isFunction(h.onInicia)&&h.onInicia.apply(b,[b,c,h]),j=b,i.conteudo=i.data=b.attr(h.atributo),i.largura=b.attr(h.atributoLargura),i.altura=b.attr(h.atributoAltura);if(i.conteudo!=undefined){h.atributo=="title"&&b.attr("title",""),i.area=a("<div/>").addClass(h.classeArea).css({display:"none",position:"absolute",width:i.largura,height:i.altura}),i.tip=a("<div/>").addClass(h.classeConteudo).appendTo(i.area),i.load=a("<div/>").addClass(h.classeLoad).css({display:"none",position:"fixed",left:0});if(b.hasClass(h.seletorImagem)||b.hasClass(h.seletorAjax))i.load.appendTo("body").fadeIn(h.tempo),i.load.css("top",l.height()-i.load.outerHeight());if(b.hasClass(h.seletorImagem)){var d=new Image;a(d).load(function(){a(this).css({display:"none",height:this.height,width:this.width}),i.data=this,a(this).fadeIn(h.tempo);return e(b,c)}).attr("src",i.conteudo);return}if(b.hasClass(h.seletorAjax)){a.ajax({type:"POST",url:i.conteudo,success:function(a){i.data=a;return e(b,c)},error:function(){i.data=h.mensagemErro;return e(b,c)}});return}return e(b,c)}}function e(b,d){i.tip.html(i.data).wrapInner(h.wrapperTooltip),a.isFunction(h.onCria)&&h.onCria.apply(b,[b,i,d,h]),i.load.length&&i.load.fadeOut("fast",function(){a(this).remove()});if(!i.area)return!1;i.area.appendTo("body").fadeIn(h.tempo);return c(b,d)}function d(b){a.isFunction(h.onTermina)&&h.onTermina.apply(b,[b,h]),h.atributo=="title"&&b&&b.attr("title",i.conteudo),i.area.remove(),i.load.remove(),j=null,i={}}function c(b,c){if(!i.area)return!1;var d=l.width(),e=l.height(),f=l.scrollLeft(),g=l.scrollTop(),j=b.outerWidth(),k=b.outerHeight(),m=b.offset(),n=m.left+h.paddingLeft,o=m.top+h.paddingTop,p=i.area.outerWidth(),q=i.area.outerHeight(),r=h.posicao,s=o,t=n,u=h.autoFix,v=h.classePrefixoPosicao;if(h.fixado){switch(r){case"esquerda":case"direita":u&&g+e<=o+q/2+15?(s+=-q-10,v+="-rodape"):u&&o-g<q/2+15?(s+=k+10,v+="-topo"):(s+=-(q/2)+k/2,v+="-centro");break;case"top1":case"top2":case"top3":case"top4":case"top5":u&&o-g<q+15?(s+=k+10,v+="-topo"):(s+=-q-10,v+="-rodape");break;case"rod1":case"rod2":case"rod3":case"rod4":case"rod5":u&&g+e<=o+q+15?(s+=-q-10,v+="-rodape"):(s+=k+10,v+="-topo")}switch(r){case"esquerda":u&&n<=p+35?(t+=j+10,v+="-direita"):(t+=-p-10,v+="-esquerda");break;case"direita":u&&d<=n+p+35?(t+=-p-10,v+="-esquerda"):(t+=j+10,v+="-direita");break;case"top1":case"rod1":u&&n<=p+30?v+="-lateral-esquerda":(t+=-p,v+="-esquerda");break;case"top2":case"rod2":u&&n<=p/2+30?v+="-lateral-esquerda":u&&d<=n+p/2+30?(t+=-p+j,v+="-lateral-direita"):(t+=j/2-p/2,v+="-centro");break;case"top3":case"rod3":u&&d<=n+p+30?(t+=-p+j,v+="-lateral-direita"):(t+=j,v+="-direita");break;case"top4":case"rod4":u&&d<=n+p+30?(t+=-p+j,v+="-lateral-direita"):v+="-lateral-esquerda";break;case"top5":case"rod5":u&&n<=p+30?v+="-lateral-esquerda":(t+=-p+j,v+="-lateral-direita");break;default:s+=-q-5,t+=j/2-p/2}}else c.pageY-q-g-15<=0?(s=c.pageY+15,v+="-rodape"):(s=c.pageY-q-15,v+="-topo"),d+f-c.pageX<=p?(t=c.pageX-p-15,v+="-lateral-esquerda"):(t=c.pageX+15,v+="-lateral-direita");i.area.css({top:s,left:t}),a("."+h.classeSeta,i.area).remove(),i.area.append('<div class="'+h.classeSeta+'"><div class="'+v+'"></div></div>'),a.isFunction(h.onPosiciona)&&h.onPosiciona.apply(i.area,[b,c,h]),c.preventDefault()}var g={seletorImagem:"imagem",seletorAjax:"ajax",classeArea:"tooltip-area",classeConteudo:"tooltip-conteudo",classeLoad:"tooltip-load",classeSeta:"tooltip-seta",classePrefixoPosicao:"tooltip-posicao",paddingTop:0,paddingLeft:0,posicao:"top2",fixado:!0,autoFix:!0,tempo:"fast",evento:"mouseover",eventoFim:"mouseout",atributo:"rel",atributoAltura:"altura",atributoLargura:"largura",wrapperTooltip:null,mensagemErro:"Erro no tooltip",onInicia:null,onCria:null,onPosiciona:null,onTermina:null},h=a.extend(g,b),i={},j,k=a(document),l=a(window);k.delegate(this.selector,h.evento,function(b){return f(a(this),b)}),k.delegate(this.selector,h.eventoFim,function(){return d(a(this))}),h.fixado||k.delegate(this.selector,"mousemove",function(b){return c(a(this),b)}),l.resize(function(a){if(j)return c(j,a)}).scroll(function(a){if(j)return c(j,a)})}})(jQuery);

/*!
 * jQuery Valida 1.1
 */
/*!
 * jQuery Validate 1.2
 */
(function(a){a.validate=[],a.validate.defaults={classError:"error",selectDefaultValue:0,redirect:!0,inline:!1,inlineEvent:"focusout",onItemValidate:null,onItemError:null,onValidate:null,onError:null},a.validate.form=function(b,c){var d=!0;return c||(c=b.data("validate")),b.find("[required]").each(function(){var b=a.validate.item(a(this),c);d=d&&b}),d},a.validate.item=function(b,c){var d=!0;b.removeClass(c.classError);if(b.is(":disabled"))return!0;a.isFunction(c.onItemValidate)&&c.onItemValidate.apply(b,new Array(b,c));if(b.is("select"))d=b.val()&&b.val()!=c.selectDefaultValue?!0:!1;else if(b.is(":checkbox")||b.is(":radio")){var e=b.attr("name"),f=a('input[name="'+e+'"]:checked').length;d=f==0?!1:!0}else{var g,h=b.data("type")||b.attr("type");h&&(h=="email"?g=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/):h=="url"?g=new RegExp(/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/):h=="number"?g=new RegExp(/(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)|(^-?\d*$)/):b.attr("pattern")&&(g=new RegExp(b.attr("pattern")))),g?d=g.test(b.val()):d=a.trim(b.val())!=""}return d==0&&(b.addClass(c.classError),a.isFunction(c.onItemError)&&c.onItemError.apply(b,new Array(b,c))),d},a.fn.validate=function(b){if(!a(this).is("form"))return!1;var b=a.extend(a.validate.defaults,b);a(this).attr("novalidate","novalidate"),a(this).data("validate",b),a(this).on("submit",function(){return a.validate.form(a(this),b)?(a.isFunction(b.onValidate)&&b.onValidate.apply(this,new Array(this,b)),b.redirect?!0:!1):(a.isFunction(b.onError)&&b.onError.apply(this,new Array(this,b)),!1)}),b.inline&&a(this).find("[required]").on(b.inlineEvent,function(){a.validate.item(a(this),b)})}})(jQuery);