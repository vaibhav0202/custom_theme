(function($j){
    $j(function(){
        $j(".qty-whole select, .qty-fraction select").on("change click keyup", function() {
            var wrapper = $j(this).closest(".qty-wrapper");
            var qtyWhole = wrapper.find(".qty-whole select");
            var qtyFraction = wrapper.find(".qty-fraction select");
            var qtyVal = parseInt(qtyWhole.val(), 10) * 8 + parseInt(qtyFraction.val(), 10);
            wrapper.find(".qty").val(qtyVal);
            $j(this).closest("tr").find(".product-cart-info .sku_failed_qty").val(qtyVal);
            wrapper.find("button").removeProp("disabled").addClass('visible');
            if (validateErrorGrid) validateErrorGrid();
        });
    });
    /* Turn off cycle 2 logging */
    if($j.fn.cycle) $j.fn.cycle.log = $j.noop;
})(jQuery);

/* Filter Nav Expand-Collapse */
(function ($j) {
    $j(function () {
        var filterType = $j('#narrow-by-list dt');
        var filterBox = $j('#narrow-by-list dd');
        var topFilter = $j('#narrow-by-list dt').first();
        var filterIcon = $j('#narrow-by-list dt span');
        var filterBar = filterType.add(filterIcon);
        filterBox.addClass('collapsed');
        topFilter.next().addClass('expanded').removeClass('collapsed').css('display', 'block');
        filterType.prepend('<span>+ </span>');
        topFilter.children('span').replaceWith('<span>- </span>');
        filterBar.click(function (e) {
            if ($j(e.target).is(filterType)) {
                var currentFilter = $j(e.target).next();
                var currentFilterIcon = $j(e.target).children('span');
            } else if ($j(e.target).is('span')) {
                var currentFilter = $j(e.target).parent().next();
                var currentFilterIcon = $j(e.target).parent().children('span');
            }
            if (currentFilter.hasClass('collapsed')) {
                currentFilter.css('display', 'block').removeClass('collapsed').addClass('expanded');
                currentFilterIcon.replaceWith('<span>- </span>');
            } else {
                currentFilter.css('display', 'none').removeClass('expanded').addClass('collapsed');
                currentFilterIcon.replaceWith('<span>+ </span>');
            }
        });
    });
})(jQuery);