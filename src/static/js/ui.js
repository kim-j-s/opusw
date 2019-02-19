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

	// util menu display
	UtilMenu();

	
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
	$('.ui.selection.dropdown').dropdown({
		fullTextSearch:true
		/*
		onChange : function(){
			console.log('zzz');
			$(this).find('.search').blur();
		}
		*/
		/*
		onLabelSelect : function (val) {
			alert(val);
		}
		*/
	});

	$('.ui.fluid.dropdown').dropdown({fullTextSearch:true});
	$('.ui.floating.dropdown.labeled').dropdown();

	// autocomplete
	$(".autoSch.ty1").easyAutocomplete(Comp_options);
	$(".autoSch.ty2").easyAutocomplete(city_options);
	$(".autoSch.ty3").easyAutocomplete(state_options);
	$(".autoSch.keyword").easyAutocomplete(state_keyword);
	$(".autoSch.Edit_User").easyAutocomplete(person);
	$(".autoSch.Edit_Organization").easyAutocomplete(company);	


	//gnbList
	GnbList();

	// input Number
	PlusMinus();

	//Input Reset
	InputReset();

	// auto complete combobox
	ACC();
	$( ".comboSelect" ).combobox();

	// time input
	tsChk();
	tsDisplay();


	// date range picker
	$('.daterange').daterangepicker({
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		"locale": {
			"format": "MM/DD/YYYY",
			"separator": " - ",
			"applyLabel": "Apply",
			"cancelLabel": "Cancel",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			"monthNames": [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],
			"firstDay": 1
		},
			"alwaysShowCalendars": false
			//"startDate": "01/22/2019",
			//"endDate": "01/28/2019"
		}, function(start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY/MM/DD') + ' to ' + end.format('YYYY/MM/DD') + ' (predefined range: ' + label + ')');
	});
	$('.daterange').val('');

	$('.datesingle').daterangepicker({
		"singleDatePicker": true,
		"locale": {
			"format": "MM/DD/YYYY",
			"separator": " - ",
			"applyLabel": "Apply",
			"cancelLabel": "Cancel",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			"monthNames": [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],
			"firstDay": 1
		},
			"alwaysShowCalendars": false
		}, function(start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY/MM/DD') + ' to ' + end.format('YYYY/MM/DD') + ' (predefined range: ' + label + ')');
	});

	$('.Edit_date > .inp').on('click', function(){
		$(this).select();
	});


	// images upload
	jQuery('.fileUpload').on('change', function () {
		ext = jQuery(this).val().split('.').pop().toLowerCase();
		if (jQuery.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
			resetFormElement(jQuery(this));
			window.alert('Not an image!');
		} else {
			file = jQuery('.fileUpload').prop("files")[0];
			blobURL = window.URL.createObjectURL(file);
			console.log(blobURL);
			jQuery(this).closest('.imgAdd').find('.imgBox').show();
			jQuery(this).closest('.imgAdd').find('.imgRemove').show();
			jQuery(this).closest('.imgAdd').find('.Image_Logo_Large').attr('src', blobURL);
		}
	});

	$('.imgRemove').on('click', function(){
		resetFormElement(jQuery('.fileUpload'));
		$(this).closest('.imgBox').hide().find('img').attr('src','');
		return false;
	});

	function resetFormElement(e) {
		e.wrap('<form>').closest('form').get(0).reset();
		e.unwrap();
	}
	// images upload


	// input control
	// only Number
	$(".inp.onlyNumber").keyup(function (event) {
		var inputVal = $(this).val();
		$(this).val(inputVal.replace(/[^0-9]/gi,''));
	});

	// only AlphaNum
	
	$(".Edit_AlphaNum > .inp").keyup(function(e) { 
		if (!(e.keyCode >=37 && e.keyCode<=40)) {
			var v = $(this).val();
			$(this).val(v.replace(/[^a-z0-9]/gi,''));
		}
	});


});


// 페이지 로드 시 탭 포커스
$(window).load(function(){
	$('.tabFocus').focus();	
});
// 페이지 로드 시 탭 포커스


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
		console.log('bng');
		cnt++;
		if (cnt == 1)
		{
			console.log('접기');
			$(this).addClass('on');

			$('nav').stop(true).animate({
				width:0
			}, 500);

			$('.content').stop(true).animate({
				'padding-left':'20px'
			},500);
		} else if (cnt != 0)
		{
			console.log('펼치기');
			$(this).removeClass('on');
			$('nav').stop(true).animate({
				width:'285px'
			}, 500);
			$('.content').stop(true).animate({
				'padding-left':'305px'
			},500);
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

// util menu display
function UtilMenu() {
	$('.util').find('.btn.utilMenu').on('click', function(){
		if ( $('.utilBox').css('display') == 'none')
		{
			$('.utilBox').stop(true,true).slideDown();
		} else {
			$('.utilBox').stop(true,true).slideUp();
		}
	});
	$('.utilBox').find('.btn.close').on('click', function(){
		$(this).closest('.utilBox').stop(true,true).slideUp();
	});
}


// input reset
function InputReset() {
	// input reset
	$('.inpReset').click(function(){
		console.log('active');
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

	$(InpObj).unbind('focusin').focusin(function(){
		if($(this).val().length >= 1) {
			$(this).closest('.inputBox').find('button').css('display','block');
		}
	});

	$('.inpReset').unbind('focusout').focusout(function(){
		$(this).hide();
	});

	$(InpObj).unbind('focusout').focusout(function(){
		obj = this;
		setTimeout(function(){
			if ( !$(obj).closest('.inputBox').find('.inpReset').is(':focus'))
			{
				$(obj).closest('.inputBox').find('.inpReset').hide();
			}
		}, 10);
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
				var value = $( this ).val();
				if (this.value && (!request.term || matcher.test(text)))
				return {
					label: text,
					value: text,
					option: this
				};
				// value search add
				if (this.value && (!request.term || matcher.test(value)))
				return {
					label: text,
					value: text,
					option: this
				};
			})
		);
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

// time select
function tsChk() {
	$(".quantity").keyup(function (event) {
		var inputVal = $(this).val();
		if (inputVal.length > 4)
		{
			$(this).val('');
		}
		$(this).val(inputVal.replace(/[^0-9]/gi,''));
	});
}

// time select close
function tsDisplay() {
	$('.quantity').unbind('focusout').focusout(function(){
		obj = this;
		quantityVal = $(this).val();
		if (quantityVal.length < 5 && !quantityVal == '')
		{
			var timeHour = quantityVal.substring(0,2);
			var timeMinute = quantityVal.substring(2,4);
			Time = this;
			if (timeHour > 11)
			{
				ampm = 'PM'
			} else {
				ampm = 'AM'
			}
			
			///Hour
			if (timeHour.length == 1)
			{
				timeHour = '0' + timeHour;
			}

			// Minute
			if (timeMinute.length == 1)
			{
				timeMinute = timeMinute + '0'
			} else if (timeMinute.length == 0)
			{
				timeMinute = '00';
			}
			$(Time).val(timeHour + ' : ' + timeMinute + ' ' + ampm);

			if (timeHour > 23)
			{
				$(Time).val('');
				$(this).closest('.inputBox').find('.inpReset').hide();
				$(".alertMessage.time").html('Please enter a correct value! - Hour: Between 0 ~ 23').show().fadeOut(4000);
				return false;
			}		
			if (timeMinute > 59)
			{
				$(Time).val('');
				$(this).closest('.inputBox').find('.inpReset').hide();
				$(".alertMessage.time").html('Please enter a correct value! - Minute: Between 0 ~ 59').show().fadeOut(4000);
				return false;
			}
		}
		setTimeout(function(){
			if ( !$(obj).closest('.inputBox').find('.inpReset').is(':focus'))
			{
				$(obj).closest('.inputBox').find('.inpReset').hide();
			}
		}, 10);
	});
}

// input number block
function onlyNumber() {
	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		return false;
	}
}

// GeoLocation
function GeoLocation(e) {
	find = $(e).closest('dd').find('.inp');
	getLocation();
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		}
	}
	function showPosition(position) {
		$(find).val(position.coords.latitude + " , " + position.coords.longitude);
	}
}

// function



// 자동완성 예시 변수
var Comp_options = {
	url: "../static/json/sample_company.json",
	getValue: function(element) {
		//return element.name;
		return element.name+", "+element.code+", "+element.keyword;
	},
	template: {
		type: "custom",
		method: function(value, item) {
			return item.name + "<span>" + item.code + "</span>";
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onSelectItemEvent: function() {
			var selectedItemValue = $(".autoSch.ty1.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.ty1.name").getSelectedItemData().code;
			$(".autoSch.ty1.name").val(selectedItemValue);
			$(".autoSch.ty1.code").val(selectedItemValue2);
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
		//return element.name;
		return element.name+", "+element.code+", "+element.keyword;
	},
	minCharNumber : 3,
	template: {
		type: "custom",
		method: function(value, item) {
			return item.name + "<span>" + item.code + "</span>";
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onSelectItemEvent: function() {
			var selectedItemValue = $(".autoSch.ty2.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.ty2.name").getSelectedItemData().code;
			$(".autoSch.ty2.name").val(selectedItemValue);
			$(".autoSch.ty2.code").val(selectedItemValue2);
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
		return element.name+", "+element.code+", "+element.keyword;
	},
	template: {
		type: "custom",
		method: function(value, item) {
			return item.name + "<span>" + item.code + "</span>";
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onSelectItemEvent: function() {
			var selectedItemValue = $(".autoSch.ty3.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.ty3.name").getSelectedItemData().code;
			$(".autoSch.ty3.name").val(selectedItemValue);
			$(".autoSch.ty3.code").val(selectedItemValue2);
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

var state_keyword = {
	url: "../static/json/sample_keyword.json",
	getValue: function(element) {
		return element.name+", "+element.code;
	},
	template: {
		type: "description",
		fields: {
			description: "name"
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onSelectItemEvent: function() {
			var selectedItemValue = $(".autoSch.keyword.name").getSelectedItemData().name;
			$(".autoSch.keyword.name").val(selectedItemValue);
		},
		onChooseEvent: function() {
			//var selectedItemValue = $(".autoSch.keyword.name").getSelectedItemData().name;
			var selectedItemValue = $(".autoSch.keyword.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.keyword.name").getSelectedItemData().code;
			$(".autoSch.keyword.name").val(selectedItemValue);
		},
		match: {
			enabled: true
		}
	}
};

var person = {
	url: "../static/json/person.json",
	getValue: function(element) {
		return element.name+", "+element.code;
	},
	template: {
		type: "description",
		fields: {
			description: "name",
			url: "url"
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onSelectItemEvent: function() {
			var selectedItemValue = $(".autoSch.Edit_User.name").getSelectedItemData().name;
			$(".autoSch.Edit_User.name").val(selectedItemValue);
		},
		onChooseEvent: function() {
			var selectedItemValue = $(".autoSch.Edit_User.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.Edit_User.name").getSelectedItemData().code;
			var selectedItemValue3 = $(".autoSch.Edit_User.name").getSelectedItemData().url;
			$(".autoSch.Edit_User.name").val(selectedItemValue);

			//$(".autoSch.Edit_User.code").val(selectedItemValue2 + ' , ' + selectedItemValue3);
			/* thumbnail image
			$(".autoSch.Edit_User.code").each(function(){
				if ( selectedItemValue3 != null)
				{
					console.log('y ' + selectedItemValue3);
					$(this).closest('.inputBox.Edit_User').find('img').attr('src',selectedItemValue3);
				} else {
					console.log('n');
					$(this).closest('.inputBox.Edit_User').find('img').attr('src','../static/images/common/icon/icon_person_small.png');
				}
			});
			*/
		},
		match: {
			enabled: true
		}
	}
};

var company = {
	url: "../static/json/person.json",
	getValue: function(element) {
		return element.name+", "+element.code;
	},
	template: {
		type: "description",
		fields: {
			description: "name",
			url: "url"
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onSelectItemEvent: function() {
			var selectedItemValue = $(".autoSch.Edit_Organization.name").getSelectedItemData().name;
			$(".autoSch.Edit_Organization.name").val(selectedItemValue);
		},
		onChooseEvent: function() {
			var selectedItemValue = $(".autoSch.Edit_Organization.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.Edit_Organization.name").getSelectedItemData().code;
			var selectedItemValue3 = $(".autoSch.Edit_Organization.name").getSelectedItemData().url;
			$(".autoSch.Edit_Organization.name").val(selectedItemValue);

			//$(".autoSch.Edit_Organization.code").val(selectedItemValue2 + ' , ' + selectedItemValue3);
			/* thumbnail image
			$(".autoSch.Edit_Organization.code").each(function(){
				if ( selectedItemValue3 != null)
				{
					console.log('y ' + selectedItemValue3);
					$(this).closest('.inputBox.Edit_Organization').find('img').attr('src',selectedItemValue3);
				} else {
					console.log('n');
					$(this).closest('.inputBox.Edit_Organization').find('img').attr('src','../static/images/common/icon/icon_logo_small.png');
				}
			});
			*/
		},
		match: {
			enabled: true
		}
	}
};