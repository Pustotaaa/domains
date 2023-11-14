/**
 * Привязывает превьюшку/всплывашку изображения товара
 */
function bindArticleImageFancyBox() {
	$('.openImageFancyBox').click(function(e) {
		e.preventDefault();
		$.fancybox({
			type: 'image',
			href: $(this).attr('href'),
			padding: 0,
			closeClick: true
		});
		return false;
	});
}

/**
 * Привязывает событие клика на "Срок поставки"
 */
function bindDistributorDescription() {
	$('body').on('click', '.distributorDescription', function(e) {
		$.fancybox({
			href: $(this).data('link'),
			width: 500,
			height: 200,
			type: 'ajax',
			ajax: {
				dataType: 'jsonp'
			},
			// https://github.com/fancyapps/fancybox/issues?q=is%3Aissue+Maximum+call+stack+size+exceeded+is%3Aclosed
			helpers: {
				overlay: {
					locked: false
				}
			},
		});
		return false;
	});
}

/**
 * abcpFrameModal.updateLinks - метод плагина просмотра информации в iframe, который заново проходится по DOM дереву,
 * находит все элементы с классом 'open-abcp-frame-modal', и привязывает к ним метод открытия информации в iframe по клику.
 * https://gitlab.nodasoft.com/front-end/abcp-iframe-info
 */
function abcpIframeInfoUpdate() {
	if (window.abcpFrameModal && typeof window.abcpFrameModal.updateLinks === 'function') {
		window.abcpFrameModal.updateLinks();
	}
}

/**
 * abcpModalInfo.updateLinks - метод updateLinks, нужен для обновления списка элементов с классом open-abcp-modal-info.
 * https://gitlab.nodasoft.com/front-end/abcp-modal-info-viewer
 */
function abcpModalInfoUpdate() {
	if (window.abcpModalInfo && typeof window.abcpModalInfo.updateLinks === 'function') {
		window.abcpModalInfo.updateLinks();
	}
}

$(function() {
	bindHideShowPriceInColumn();
});

/**
 * Привязывает события клика отображения/скрытия колонок Цена закупки/Поставщик
 */
function bindHideShowPriceInColumn() {
	var $tplData = $('#tplData');
	// делаем через on, т.к. на сайтах может быть асинхронный поиск, который перерисует html и затронет кнопку
	$('body').on('click', '.showPriceIn', function() {
		$('.showPriceIn').addClass('fr-hidden');
		$('.showPriceInMobile').addClass('fr-hidden');
		$('#hidePriceInMobile').removeClass('fr-hidden');
		if ($tplData.data('showColumnMode') === 1) {
			$('#hidePriceInBlockPriceInColumn').removeClass('fr-hidden');
			$('.priceInColumn').removeClass('fr-hidden');
		} else if ($tplData.data('showOnlyDistributorColumn')) {
			$('#hidePriceInBlockPriceColumn').removeClass('fr-hidden');
			$('.distributorColumn').removeClass('fr-hidden');
		} else {
			$('#hidePriceInBlockPriceInColumn').removeClass('fr-hidden');
			$('.priceInColumn').removeClass('fr-hidden');
			$('.distributorColumn').removeClass('fr-hidden');
		}

		// сохраним куки для фронтовой обработки (в частности используется в асинхронном поиске)
		if ($.cookie) {
			$.cookie('hidePriceIn', false);
			$.cookie('showPriceIn', true);
		}
		// Сохраним куки
		$.ajax({
			type: 'POST',
			url: '/ajaxRoute/search/setCookieColumnOption',
			data: {
				isSetRequestShowPriceIn: true
			}
		});
	});

	// делаем через on, т.к. на сайтах может быть асинхронный поиск, который перерисует html и затронет кнопку
	$('body').on('click', '.hidePriceIn', function() {
		$('.showPriceIn').removeClass('fr-hidden');
		$('#showPriceInBlockPriceColumn').removeClass('fr-hidden');
		$('#showPriceInMobile').removeClass('fr-hidden');
		$('#hidePriceInMobile').addClass('fr-hidden');
		if ($tplData.data('showColumnMode') === 1) {
			$('#hidePriceInBlockPriceInColumn').addClass('fr-hidden');
			$('.priceInColumn').addClass('fr-hidden');
		} else if ($tplData.data('showOnlyDistributorColumn')) {
			$('#hidePriceInBlockPriceColumn').addClass('fr-hidden');
			$('.distributorColumn').addClass('fr-hidden');
		} else {
			$('#hidePriceInBlockPriceInColumn').addClass('fr-hidden');
			$('.priceInColumn').addClass('fr-hidden');
			$('.distributorColumn').addClass('fr-hidden');
		}

		// сохраним куки для фронтовой обработки (в частности используется в асинхронном поиске)
		if ($.cookie) {
			$.cookie('showPriceIn', false);
			$.cookie('hidePriceIn', true);
		}
		// Сохраним куки
		$.ajax({
			type: 'POST',
			url: '/ajaxRoute/search/setCookieColumnOption',
			data: {
				isSetRequestHidePriceIn: true
			}
		});
	});
}
