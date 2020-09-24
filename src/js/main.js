$(function () {

////////////////// Каталог
  //////////////// выбрать категорию

  $('.catalog .category-item').click(function(e) {
    e.preventDefault();
    var $catalog = $('.catalog');
    $catalog.find('.category-item').removeClass('active');
    $(this).addClass('active');
    $catalog.removeClass().addClass('catalog').addClass('section');

    var $href = $(this).attr('href');
    $catalog.addClass($href);

  });

  if($(window).width() <= 768) {
    $('.catalog .categories').slick({
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('.filters-btn').click(function(e) {
      e.preventDefault();
      $('.filters').toggleClass('active');
    });

    $('.filters .close').click(function(e) {
      e.preventDefault();
      $('.filters').removeClass('active');
    });
  };

  /////////////// свернуть/раскрыть группу фильтра

  $('.filter__title').click(function(e) {
    e.preventDefault();
    $(this).parents('.filters').find('.active').removeClass('active');
    $(this).parent().addClass('active');
  });

  //////////////// выбрать тип сортировки

  $('.sort__item').click(function(e) {
    e.preventDefault();
    $(this).parents('.sort').find('.active').removeClass('active');
    if ($(this).hasClass('max')) {
      $(this).removeClass('max');
    } else {
      $(this).addClass('max');
    }
    $(this).addClass('active');
  });

////////////////// Карточка товара слайдер

  $('.modal--product').on('shown.bs.modal', function () {
    console.log('shown');

    var $productSlider = $(this).find('.product-slider');
    var $productSliderThumb = $(this).find('.product-slider-thumb');

    $productSlider.slick({
      init: 'slick',
      lazyLoad: 'progressive',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      asNavFor: $productSliderThumb
    });

    $productSliderThumb.slick({
      init: 'slick',
      lazyLoad: 'progressive',
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      asNavFor: $productSlider,
      focusOnSelect: true,
      // centerMode: false,
    });
  });

  $('.modal--product').on('hidden.bs.modal', function () {
    console.log('hidden');
    $(this).find('.product-slider').slick('unslick');
    $(this).find('.product-slider-thumb').slick('unslick');
  });

////////////////// Корзина
  //////////////// поле ввода количества товара https://jqueryui.com/spinner/

  $('.cart-spinner').spinner({
    min: 1,
    max: 10,
  });

  //////////////// удалить товар из корзины

  $('.cart-product-remove').click(function(e) {
    e.preventDefault();
    $(this).parents('.cart-table-item').remove();
  });

//////////////// маска поля для телефона

  $("input[type=tel]").mask("8 (999) 999-9999");

////////////// слайдер с партнерами

  $('.partners-list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      }
    ]
  });

});

//////////////// map

  let map;
  function initMap() {
    
    var styledMapType = new google.maps.StyledMapType(
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],
    {name: 'Styled Map'});
    map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 55.836473,
        lng: 37.529022
      },
      zoom: 15,
      mapTypeControlOptions: {
              mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']
            }
    });
    
    var marker = new google.maps.Marker({
      position: {
          lat: 55.8372913,
          lng: 37.5485852
        },
      map: map
    });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
      
   }