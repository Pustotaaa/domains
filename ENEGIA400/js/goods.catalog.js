$(function() {
    var timerSearchActualFilterValues;
    var filterAutoswitch = false;

    $('#_processing').dialog({
        autoOpen: false,
        modal: true,
        height: 'auto',
        width: 'auto',
        resizable: false,
        closeOnEscape: false,
        zIndex: 5000,
        open: function (event, ui) {
            $(this).parent().children().children("a.ui-dialog-titlebar-close").remove();
        }
    });

    if (window.location.search.indexOf('action=search') > 0) {
        disabledFilterValues('');
    }

    // именно тут и происходит магия со сменой фильтра.
    // Этот метод вызывается на все изменения фильтра. То что надо.
    function disabledFilterValues($field) {
        // universalcatalogs-62 Временно отключить подсказку по фильтрам в каталогах
        // return true;

        if (window.location.search.indexOf('action=extended_search') > 0) {
            // на расширенном фильтре НЕ учитываем это
            return true;
        }
        var data = $('#catalog-form').serializeArray();

        if ($field) {
            $field = $field.slice($field.indexOf('[') + 1, $field.indexOf(']'));
            data.push({
                name: 'excluded',
                value: $field
            }); // по какому полю произвели click - НЕ УЧИТЫВАЕМ ЕГО
        }

        $.each(data, function(index,obj) {
            if (obj.name == 'action') {
                obj.value = 'goods_catalog/goods_catalog/getFilters';
            }
        });

        var searchFilterValues = function(data) {
            $.ajax({
                type: 'get',
                data: data,
                url: document.location.pathname,
                dataType: 'json',
                success: function (data) {
                    for (var field in data) {
                        var values = data[field];

                        if ($.isArray(values)) {
                            // закрываем ВЕСЬ раздел фльтра
                            $("#catalog-form input[name=\"property[" + field + "][]\"]").addClass('input-disabled');

                            // открываем то, что нам пришло
                            $.each(values, function (index, value) {
                                var obj = $("#catalog-form input[value=\"" + value + "\"]");
                                if (obj.length) {
                                    obj.removeClass('input-disabled');
                                }
                            });
                        } else {
                            // range
                            $.each(values, function (prop, value) {
                                $("#catalog-form input[name=\"property[" + field + "][" + prop + "]\"]").prop('placeholder', value);
                            });
                        }
                    }
                }
            });
        };

        if (timerSearchActualFilterValues) {
            clearTimeout(timerSearchActualFilterValues);
        }

        timerSearchActualFilterValues = setTimeout(function(){ searchFilterValues(data); }, 250);
    };

    function showFloatingBtn($sourceElement) {
        var $floatBtn = $sourceElement.closest('.filtercol').find('.floatingButton');
        return $floatBtn.css('top', $sourceElement.position().top - ($floatBtn.height() - $sourceElement.height()) / 2).show();
    }

    $('.min,.max').keyup(function() {
        showFloatingBtn($(this).closest('.range'));
        disabledFilterValues($(this).attr("name"));
    });

    $("#catalog-form").submit(function () {
        var action = $(this).find('input[name="action"]').val();
        if (action === 'search') {
            return check_range();
        }
    });

    (function() {
        $('.filter_block').each(function() {
            var $this = $(this);

            if (!$this.is(':visible')) {
                $this.addClass('filter_collapse');
            }
        });

        $('.filter_title').click(function(event) {
            var $this = $(this),
                $filter_block = $this.closest('.filter_block'),
                $filter = $filter_block.find('.filter');

            if ($(event.target).hasClass('faq-link')) {
                return false;
            }

            if ($filter.is(":visible")) {
                $filter.slideUp(100, function() {$filter_block.addClass('filter_collapse')});
            } else {
                $filter.slideDown(100, function() {$filter_block.removeClass('filter_collapse')});
            }
        });

        let $brandsListLi = $('.brandsList').find('li');

        let searchBrandXhr = null;
        $('.searchBrands').on('input', function (event) {
            let inputText = event.target.value;
            let goodsGroup = $('#catalog-form').find('input[name="goods_group"]').val();

            if (searchBrandXhr !== null) {
                searchBrandXhr.abort();
            }
            if (inputText !== '') {
                searchBrandXhr = $.ajax({
                    url: '/ajaxRoute/search_brands_by_group',
                    dataType: 'json',
                    type: 'GET',
                    data: {
                        'search': inputText,
                        'goods_group': goodsGroup
                    },
                    success: function (data) {
                        $brandsListLi.addClass('hidden');
                        if (data.brands !== undefined && data.brands !== null) {
                            let brands = data.brands;
                            for (let i = 0; i < brands.length; i++) {
                                let brand = brands[i];
                                $('.brandsList').find('li[data-search*="' + brand.toLowerCase() + '"]').removeClass('hidden');
                            }
                        }
                    }
                });
                filterAutoswitch = true;
                $(this).closest('.filter').find('.show_all').click();
            } else {
                searchBrandXhr = null;
                $brandsListLi.removeClass('hidden');
            }
        });

        $('.searchModels').on('input', function (event) {
            let $modelsList = $('.models-ul');
            let $modelsListLi = $modelsList.find('li');
            let inputText = event.target.value;
            if (inputText !== '') {
                $modelsListLi.addClass('hidden');
                inputText = inputText.replace(/[-\/\s]/ugm, '');
                $modelsList.find('li[data-search*="'+ inputText.toLowerCase() +'"]').removeClass('hidden');
            } else {
                $modelsListLi.removeClass('hidden');
            }
        });

        $('.searchProperties').on('input', function (event) {
            let $propertiesList = $(this).parent('.filter').find('ul');
            let $propertiesListLi = $propertiesList.find('li');
            let inputText = event.target.value;
            if (inputText !== '') {
                filterAutoswitch = true;
                $(this).closest('.filter').find('.show_all').click();
                $propertiesListLi.addClass('hidden');
                $propertiesList.find('li[data-search*="'+ inputText.toLowerCase() +'"]').removeClass('hidden');
            } else {
                $propertiesListLi.removeClass('hidden');
            }
        });

        countCheckboxChecked();

        $(document).on('click', function (event) {
            // Прячем кнопку, если клик вне фильтра, либо если в фильтр, но не в стилизованные input'ы (для клика по label в IE)
            if (!$(event.target).closest('#filter').length ||
                (!$(event.target).is('[type=checkbox], [type=radio]') && !$(event.target).closest('.remove_selection_container').length)) {
                var $floatBtn = $('.floatingButton');
                if ($floatBtn.is(':visible') && !$(event.target).closest($floatBtn).length) {
                    $floatBtn.hide();
                }
            }
        });

        $('#filter').on('change', '[type=checkbox], [type=radio]', function () {
            var $this = $(this);
            var $name = $(this).attr("name");
            if ($this.closest('.brandsList')) {
                countCheckboxChecked();

                if (typeof isEnableModelFilter != 'undefined' && $this.parents(".brands-ul").length == 1) {
                    var goods_group = $('input[name="goods_group"]').val();
                    var brands = [];
                    $('.brands-ul input[type="checkbox"]').each(function() {
                        if ($(this).is(':checked')) {
                            brands.push($(this).val());
                        }
                    });

                    if (brands.length !== 1) {
                        $('.model-filter').hide();
                        $('.model-filter ul').html('');
                    } else {
                        $.ajax({
                            type: 'get',
                            url: document.location.pathname,
                            data: {
                                'action': 'goods_catalog/goods_catalog/getModels',
                                'goods_group': goods_group,
                                'brand': brands.pop()
                            },
                            dataType: 'json',
                            success: function(resp) {
                                if (!resp || $.isEmptyObject(resp)) {
                                    return;
                                };

                                var html = '';
                                for (var k in resp) {
                                    html += "<li data-search='" + resp[k].toLowerCase() + "'>";
                                    html += "<input name='property[models][]' id='model_" + resp[k] + "' type='checkbox' value='" + resp[k] + "'>";
                                    html += "<label class='brandName' for='model_" + resp[k] + "'><span>" + k + "</span></label>";
                                    html += "</li>";
                                }
                                $('.model-filter ul').html(html);
                                $('.model-filter').show();
                            }
                        });
                    }
                }
            }

            // показываем кнопку всегда если изменили фильтр независимо от того сняли или установили чек
            showFloatingBtn($this.parent('li'));

            disabledFilterValues($name);
        });

        $('.remove_selection').on('click', function () {
            var $selectedBrands = $('.brandsList').find('[type=checkbox]:checked');
            if (!!$selectedBrands.length) {
                $selectedBrands.prop('checked', false);
                $('.models-ul').find('[type=checkbox]:checked').prop('checked', false);
                countCheckboxChecked();
                disabledFilterValues('');
            }
            formSubmit('search');
        });

        function countCheckboxChecked() {
            var quantityCheck = $('.brandsList').find('[type=checkbox]:checked').length;

            if (quantityCheck) {
                $('.remove_selection').removeClass('hidden');
                $('.quantityCheckNum').text(quantityCheck);
            } else {
                $('.remove_selection').addClass('hidden');
            }
        }

        $('.switcher_wrap').on('click', '.item_switch', function() {
            var $this = $(this),
                $filter_block = $this.closest('.filter_block');

            if (!filterAutoswitch) {
                $this.closest('.filter').find('input[type=text]').val('');
            }

            $filter_block.find('.item_switch').removeClass('act_switch');
            $this.addClass('act_switch');

            if ($this.hasClass('show_all')) {
                $filter_block.find('li').removeClass('hidden');
            } else if ($this.hasClass('show_popular')) {
                $filter_block.find('li').removeClass('hidden');
                $filter_block.find('.hidden_filter').addClass('hidden');
            }
            filterAutoswitch = false;
        });

        $('.faq-link').click(function() {
            $('.descr_full').hide();
            $(this).closest('.filter_block').find('.descr_full').show();
        });

        $('.descr_full .close').click(function(e) {
            $(this).closest('.descr_full').hide();
        });

        $(function() {
            $(document).click(function(event) {
                if ($(event.target).closest('.descr_full').length) return;
                if ($(event.target).closest($(".faq-link")).length) return;
                $('.descr_full').hide();
                event.stopPropagation();
            });
        });
    }).call(this);

    $('.onlyComplectCheckbox').change(function(e) {
        var goods_group = $('input[name="goods_group"]').val();
        var onlyComplect = $(this).is(':checked') ? 1 : 0;
        var page = $('input[name="pageForAjax"]').val();
        $.ajax({
            type: 'get',
            url: '' + window.location.pathname,
            data: {
                'page': page,
                'action': 'setOnlyComplect',
                'goods_group': goods_group,
                'onlyComplect': onlyComplect
            },
            dataType: 'json',
            success: function(resp) {
                if (!resp.status) {
                    return;
                };
                location.reload();
            }
        });
    });

    $('#hidePriceIn').change(function() {
        var hidePriceIn = $(this).is(':checked') ? 0 : 1;
        var href = location.href;
        var delimiter = '';

        if (href.match(/&/)) {
            delimiter = '&';
        } else {
            delimiter = '?';
        }

        if (delimiter === '?') {
            href = href.replace(/(\??showPriceIn)|(\??hidePriceIn)/, '');

            if (hidePriceIn) {
                href += '?hidePriceIn';
            } else {
                href += '?showPriceIn';
            }
        } else {
            href = href.replace(/(&?showPriceIn)|(&?hidePriceIn)/, '');

            if (hidePriceIn) {
                href += '&hidePriceIn';
            } else {
                href += '&showPriceIn';
            }
        }

        location.href = href;
    });

    (function() {
        $('.item_filter_checked').each(function() {
            getChecked($(this));
        });
    }).call(this);

    var pack1 = $("input[id='pack_count[1]']"),
        pack2 = $("input[id='pack_count[2]']"),
        pack2_info = $("input[name='property[length2][from]']").closest('.filter_block');

    $("input[id^='pack_count']").on('change', function() {
        if (pack2.is(':checked') || !pack1.is(':checked')) {
            pack2_info.removeClass('disabled');
        } else {
            pack2_info.addClass('disabled');
        }
    });
});

function check_range() {
    var hide = false;
    $('.range').each(function () {
        var min = parseFloat($(this).find('.min').val());
        var max = parseFloat($(this).find('.max').val());
        if (min > max) {
            hide = true;
        }
    });

    return !hide;
}