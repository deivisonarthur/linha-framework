/*!
 * jQuery Nav 1.2
 */
(function($){

	$.fn.nav = function(options){

		var padrao = {
			seletorFilho: 'ul:first', 				//Seletor filho, o que será exibido

			classePaiAtual: 'nav-pai-atual', 		//Classe para pai que está em foque | Adicionado pelo plugin
			classeFilhoAtual: 'nav-filho-atual',	//Classe para o filho que esta visível | Adicionado pelo plugin

			evento : 'mouseenter', 					//Evento para disparar o plugin
			eventoFim : 'mouseleave', 				//Evento para terminar o plugin

			efeitoIn: 'slideDown',					//Efeito inicial
			efeitoOut: 'slideUp',					//Efeito Final
			tempoIn: 'fast',						//Tempo para mostrar o seletor filho (Entrada)
			tempoOut: 'fast',						//Tempo para esconder o seletor filho (Saída)
			tempoDelay: 100, 						//Tempo de espera para esconder o seletor filho(Saida)
			easingIn: 'swing',						//Animação com easing na entrada (IN)...
			easingOut: 'swing',						//Animação com easing na saída (OUT)...
			stopClearQueue: true, 					//(Veja API Stop - clearQueue) e não mexa sem conhecimento
			stopJumpToEnd: true,					//(Veja API Stop - jumpToEnd) e não mexa sem conhecimento

			onExibe : null,							//Callback
			onEsconde: null							//Callback
		};
		var o = $.extend(padrao, options),
			np = o.classePaiAtual,
			nf = o.classeFilhoAtual;

		/**
		 * Delegando evento
		 */
		$(document).delegate(this.selector, o.evento, function(){

			var $f = $(this).children(o.seletorFilho);

			/**
			 * Checa o seletor filho
			 */
			if(!$f.length) return false;

			exibeNav($(this), $f);

			/**
			 * Da o bind no evento final
			 * Não pode ser delegate porque ele tem bug no evento mouseleave...aff
			 */
			$(this).unbind(o.eventoFim).bind(o.eventoFim, function(){
				return escondeNav($(this), $f);
			});
		});

		/**
		 * Exibir o seletor filho
		 * @param {Object} $t - elemento this
		 * @param {Object} $f - elemento filho
		 */
		function exibeNav($t, $f){

			if($f.is(':animated')) return false;

			/**
			 * Adiciona a classe
			 */
			$t.addClass(np);

			/**
			 * Callback
			 */
			if ($.isFunction(o.onExibe)) o.onExibe.apply($t, new Array($t, $f, o));

			/**
			 * Animação
			 */
			$f.stop(o.stopClearQueue, o.stopJumpToEnd).addClass(nf)[o.efeitoIn](o.tempoIn, o.easingIn);

		};

		/**
		 * Esconder o seletor filho
		 * @param {Object} $t - elemento this
		 * @param {Object} $f - elemento filho
		 */
		function escondeNav($t, $f){

			/**
			 * Remove a classe
			 */
			$t.removeClass(np);

			/**
			 * Animação
			 */
			$f.stop(o.stopClearQueue, o.stopJumpToEnd).delay(o.tempoDelay).removeClass(nf)[o.efeitoOut](o.tempoOut, o.easingOut);

			/**
			 * Callback
			 */
			if ($.isFunction(o.onEsconde)) o.onEsconde.apply($t, new Array($t, $f, o));

		};
	};
})(jQuery);