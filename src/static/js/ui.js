$(function(){
	
	/* ==============================
	 * common
	 * ============================== */
	

	//datepicker
	if($('.datepicker').size() > 0){
		$( '.datepicker' ).datepicker({
			closeText: '닫기',
			prevText: '이전 달',
			nextText: '다음 달',
			currentText: '오늘',			
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dayNames: ['일','월','화','수','목','금','토'],
            dayNamesShort: ['일','월','화','수','목','금','토'],
            dayNamesMin: ['일','월','화','수','목','금','토'],
			dateFormat: 'yy.mm.dd',
			showMonthAfterYear: true,
			changeMonth: true,
      		changeYear: true,
      		yearSuffix: '년',
			showOn: 'button',
			buttonText: '기간조회'
		});
	}

	
	/* ==============================
	 * gnb 
	 * ============================== */
	Gnb();

	/* ==============================
	 * main 
	 * ============================== */


	/* ==============================
	 * content 
	 * ============================== */

	// editor
	if ( $('#editor').length > 0)
	{
		Editor();
	}

	// password api
	$('.pwinp').dPassword();

	// Semantic UI Drop box
	$('.ui.selection.dropdown').dropdown();

	// autocomplete
	$(".autoSch.ty1").easyAutocomplete(Comp_options);
	$(".autoSch.ty2").easyAutocomplete(city_options);
	$(".autoSch.ty3").easyAutocomplete(state_options);

	//gnbList
	GnbList();

	// tab list sorting
	TablistSort();
	$(window).resize(TablistSort);

	// input Number
	PlusMinus();

	//Input Reset
	InputReset();

	// auto complete combobox
	ACC();
	$( ".comboSelect" ).combobox();

});




// functions

// editor
function Editor() {
	var snowQuill = new Quill('#editor', {
		placeholder: '기본 placerholder',
		modules: {
			toolbar: [
			[{ header: [] }],
			['bold', 'italic', 'underline', 'link'],
			[{ color: [] }, { background: [] }],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['clean']
			]
		},
		theme: 'snow'
	});
}

// GNB
function Gnb() {
	cnt = 0;
	$('.allBtn').on('click', function(){
		cnt++;
		if (cnt == 1)
		{
			console.log('접기');
			$(this).addClass('on');
			var Tablist = setInterval(function(){ 
				var LiWidth = 190;
				var tabListWidth = $('.tabList').width();
				var tabObjLng = $('.tabList > li').length;
				var tabObjWidth = (tabObjLng - 1) * LiWidth + 77;
				if (tabObjLng > 1)
				{
					$('.tabList').find('.home').removeClass('single');
				}
				if (tabListWidth > (tabObjWidth + (LiWidth + 2)))
				{
					$('.tabListBox > ul > li').first().appendTo('.tabList');
				}
				$('.fix').html('기준 넓이 : ' + (tabListWidth + (LiWidth + 2)) + ' , 상대 넓이 : ' + tabObjWidth);
			}, 50);
			
			$('nav').stop(true).animate({
				width:0
			}, 500, function(){
				console.log('끝 1');
				setTimeout(function(){
					clearInterval(Tablist);
				}, 100);
			});
		} else if (cnt != 0)
		{
			console.log('펼치기');
			var Tablist = setInterval(function(){ 
				var LiWidth = 190;
				var tabListWidth = $('.tabList').width();
				var tabObjLng = $('.tabList > li').length;
				var tabObjWidth = (tabObjLng - 1) * LiWidth + 77;
				$('.fix').html('기준 넓이 : ' + (tabListWidth + (LiWidth + 2)) + ' , 상대 넓이 : ' + (tabObjWidth - LiWidth) + ' , li 갯수 : ' + tabObjLng);
				if ((tabObjLng - 1) == 0)
				{
					console.log('랭 : ' + tabObjLng);
					$('.tabList').find('.home').addClass('single');
				}
				if ((tabListWidth) < (tabObjWidth))
				{
					console.log('??');
					$('.tabList > li').last().prependTo('.tabListBox > ul');
				}
			}, 50);
			$(this).removeClass('on');
			$('nav').stop(true).animate({
				width:'250px'
			}, 500, function(){
				console.log('끝 2');
				setTimeout(function(){
					clearInterval(Tablist);
				}, 150);
			});
			cnt = 0;
		}
	});
}

//GnbList
function GnbList() {
	var GnbListTit = $('.gnbList').find('.gnbTit');
	$(GnbListTit).each(function(z){
		$(this).on('click', function(){
			console.log(z);
			if ( $(this).next().css('display') == 'none')
			{
				$(this).addClass('on').next().slideDown(500);
			} else {
				$(this).removeClass('on').next().slideUp(500);
			}
		});
	});
}

// tab list sorting
function TablistSort() {
	var LiWidth = 190;
	var tabListWidth = $('.tabList').width();
	var tabObjLng = $('.tabList > li').length;
	var tabObjWidth = (tabObjLng - 1) * LiWidth + 77;

	if ((tabListWidth) <= tabObjWidth)
	{
		tabListIn();
	}
	else if ( tabListWidth > (tabObjWidth + (LiWidth + 2)))
	{
		tabListOut();
	}
}

function tabListIn() {
	var Tablist = setInterval(function(){ 
		var LiWidth = 190;
		var tabListWidth = $('.tabList').width();
		var tabObjLng = $('.tabList > li').length;
		var tabObjWidth = (tabObjLng - 1) * LiWidth + 77;
		if ((tabObjLng - 1) == 1)
		{
			$('.tabList').find('.home').addClass('single');
		}
		if ((tabListWidth) > (tabObjWidth - LiWidth))
		{
			clearInterval(Tablist);
		}
		$('.tabList > li').last().prependTo('.tabListBox > ul');
	}, 0);
}

function tabListOut() {
	var Tablist = setInterval(function(){ 
		var LiWidth = 190;
		var tabListWidth = $('.tabList').width();
		var tabObjLng = $('.tabList > li').length;
		var tabObjWidth = (tabObjLng - 1) * LiWidth + 77;
		if (tabObjLng > 1)
		{
			$('.tabList').find('.home').removeClass('single');
		}
		if (tabListWidth > (tabObjWidth + (LiWidth + 2)))
		{
			$('.tabListBox > ul > li').first().appendTo('.tabList');
		}
		$('.fix').html('기준 넓이 : ' + (tabListWidth + (LiWidth + 2)) + ' , 상대 넓이 : ' + tabObjWidth);
		setTimeout(function(){
			if (tabListWidth > (tabObjWidth + (LiWidth + 2)))
			{
				clearInterval(Tablist);
				console.log('끝 2');
			}
		}, 200);
	}, 0);
}

// input reset
function InputReset() {
	// input reset
	$('.inpReset').click(function(){
		$(this).closest('.inputBox').find('.inp').val('');
		$(this).hide();
	});

	// input reset button display
	var InpObj = $('input:text, input:password');
	$(InpObj).on('keyup', function(e) {
		if($(this).val().length >= 1) {
			$(this).closest('.inputBox').find('button').css('display','block');
		}
		if ( $(this).val().length == 0 )
		{
			$(this).next('button').css('display','none');
		}
	});
}

// input Number
function PlusMinus() {
	var Plus = $('.inputBox.count').find('.plus');
	var Minus = $('.inputBox.count').find('.minus');

	$(Plus).on('click', function(){
		var inpVal = $(this).next('.inp').val();
		if (inpVal == 0)
		{
			inpVal = 0;
		}
		numVal = Number(inpVal) + 1;
		$(this).next('.inp').val(numVal);
	});

	$(Minus).on('click', function(){
		var inpVal = $(this).prev('.inp').val();
		numVal = Number(inpVal) - 1;
		if (numVal < 0)
		{
			numVal = 0;
		}
		$(this).prev('.inp').val(numVal);
	});
}

// auto complete combobox
function ACC() {
	$.widget("custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
		this.input.attr("placeholder", this.element.attr('placeholder'));
      },
 
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";
 
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
          .tooltip({
            classes: {
              "ui-tooltip": "ui-state-highlight"
            }
          });
 
        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
 
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
 
        $( "<a>" )
          .attr( "tabIndex", -1 )
          //.attr( "title", "Show All Items" )
          .tooltip()
          .appendTo( this.wrapper )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .on( "mousedown", function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .on( "click", function() {
            input.trigger( "focus" );
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
		//var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 
      _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
}



// function








// 자동완성 예시 변수
var Comp_options = {
	url: "../static/json/sample_company.json",
	getValue: function(element) {
		return element.name;
	},
	template: {
		type: "description",
		fields: {
			description: "code"
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onChooseEvent: function() {
			var selectedItemValue = $(".autoSch.ty1.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.ty1.name").getSelectedItemData().code;
			$(".autoSch.ty1.name").val(selectedItemValue);
			$(".autoSch.ty1.code").val(selectedItemValue2);
		},
		match: {
			enabled: true
		}
	}
};

var city_options = {
	url: "../static/json/sample_city.json",
	getValue: function(element) {
		return element.name;
	},
	template: {
		type: "description",
		fields: {
			description: "code"
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onChooseEvent: function() {
			var selectedItemValue = $(".autoSch.ty2.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.ty2.name").getSelectedItemData().code;
			$(".autoSch.ty2.name").val(selectedItemValue);
			$(".autoSch.ty2.code").val(selectedItemValue2);
		},
		match: {
			enabled: true
		}
	}
};

var state_options = {
	url: "../static/json/sample_state.json",
	getValue: function(element) {
		return element.name;
	},
	template: {
		type: "description",
		fields: {
			description: "code"
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onChooseEvent: function() {
			var selectedItemValue = $(".autoSch.ty3.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.ty3.name").getSelectedItemData().code;
			$(".autoSch.ty3.name").val(selectedItemValue);
			$(".autoSch.ty3.code").val(selectedItemValue2);
		},
		match: {
			enabled: true
		}
	}
};
