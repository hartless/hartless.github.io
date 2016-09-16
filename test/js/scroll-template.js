/*
 * Scroll Template JavaScript
 * Last update: 15 August 2016 4:41 PM - JD
 */

var MSG_TECH = 'Sorry, the data feed for this page is temporarily unavailable. You can <a class="feederrormessage" href="javascript:openWebform(\'/PO/en/About/Contact-us\', 580, 800)">help by telling us</a> that you are seeing this message. Often, this is a temporary problem, and if you return to (or refresh) this page in approximately one hour, the data feed will likely be available at that time.';
var MSG_NODOCS = 'Feed is returning no documents.';
var secureHostName = 'webforms.ey.com';
var mailTosubject = 'I thought you might be interested in this.';
var waypointSection0, waypointSection1, waypointSection2, waypointSection3, waypointSection4, waypointSection5, waypointSection6, waypointSection7, waypointSection8, waypointSection9, waypointSection10;

var scrollTemplate = scrollTemplate || {};

scrollTemplate.init = function(contentSection, contentSubSection) {

    /* $('<div id="debugit">').prependTo('.maincolumn'); */

    scrollTemplate.renderModals();

    if(contentSubSection === undefined){contentSubSection = ''}
    scrollTemplate.processFeedData(contentSection, contentSubSection);

}

scrollTemplate.debugIt = function(debuggery) {
    /* console.log(debuggery); */
    $('#debugit').append(debuggery + '<br />');
}

scrollTemplate.displayError = function(errorMessage) {

    $('.error_message').html(errorMessage);
    $('.error_querying').show();
    $('.loader_querying').hide();

}

scrollTemplate.displayModal = function(modalName) {
    $('#' + modalName + '-trigger').click();
}

scrollTemplate.getDateNumber = function(str) {

    if (typeof(str) == "string" && str.charAt(0) == "0") str = str.substring(1);
    return (parseInt(str));

}

scrollTemplate.getDescription = function(doc) {

    try {

        var description;
        var descriptionOtherLang;
        var descriptionOtherCountryLang;

        if (doc !== null) {

            if (contentCountry === 'GL') {

                description = doc['description'];

            } else {

                descriptionOtherCountryLang = doc['description-lang-' + contentCountry.toLowerCase() + '-' + contentLang.toLowerCase()];

                if (descriptionOtherCountryLang === '' || descriptionOtherCountryLang === undefined) {

                    descriptionOtherLang = doc['description-lang-' + contentLang.toLowerCase()];

                    if (descriptionOtherLang === '' || descriptionOtherLang === undefined) {
                        description = doc['description'];
                    } else {
                        description = descriptionOtherLang;
                    }

                } else {

                    description = descriptionOtherCountryLang;

                }

            }

        } else {
            description = '';
        }

        return description;

    } catch (e) {
        return (null);
    }

}

scrollTemplate.getReleaseDateNumber = function(releaseDate) {

    try {

        if (releaseDate === undefined) {
            releaseDate = 'Jan 1 2013';
        }

        releaseDate = releaseDate.trim();
        releaseDate = releaseDate.replace('  ', ' ');

        var releaseDateMonth;
        var releaseDateMonthNum;
        var releaseDateDay;
        var releaseDateYear;

        if (this.isInteger(releaseDate) === true) {

            releaseDateMonthNum = releaseDate.substring(4, 6);
            releaseDateDay = releaseDate.substring(6, 8);
            releaseDateYear = releaseDate.substring(0, 4);

        } else {

            releaseDateMonth = releaseDate.substring(0, releaseDate.indexOf(' '));
            releaseDateDay = releaseDate.substring(releaseDate.indexOf(' ') + 1, releaseDate.lastIndexOf(' '));
            releaseDateYear = releaseDate.substring(releaseDate.lastIndexOf(' ') + 1, releaseDate.length);

            monthsAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            monthsFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            monthsNum = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

            releaseDateMonthNum = '';

            for (var i = 0; i < monthsAbbr.length; i++) {
                if (releaseDateMonth === monthsAbbr[i] || releaseDateMonth === monthsFull[i]) {
                    releaseDateMonthNum = monthsNum[i];
                }
            }

        }

        var year = releaseDateYear;
        var month = releaseDateMonthNum;
        var day = releaseDateDay;

        if (day.length === 1) {
            day = "0" + day.toString();
        }

        var d = year + month + day;

        if (isNaN(d)) {
            return (null);
        } else {
            return (d);
        }

    } catch (e) {
        return (null);
    }

}

scrollTemplate.getPersonTitle = function(doc) {

    try {

        var personTitle;
        var personTitleOtherLang;
        var personTitleOtherCountryLang;

        if (doc !== null) {

            if (contentCountry === 'GL') {
                personTitle = doc['person_title'];
            } else {
                personTitleOtherCountryLang = doc['person-title-lang-' + contentCountry.toLowerCase() + '-' + contentLang.toLowerCase()];

                if (personTitleOtherCountryLang === '' || personTitleOtherCountryLang === undefined) {

                    personTitleOtherLang = doc['person-title-lang-' + contentLang.toLowerCase()];
                    if (personTitleOtherLang === '' || personTitleOtherLang === undefined) {
                        personTitle = doc['person_title'];
                    } else {
                        personTitle = personTitleOtherLang;
                    }

                } else {
                    personTitle = personTitleOtherCountryLang;
                }

            }

        } else {
            personTitle = '';
        }
        personTitle = personTitle ? personTitle.trim() : '';
        return personTitle;

    } catch (e) {
        return (null);
    }

}

scrollTemplate.getOBFContent = function() {

    var OBFContent = $('meta[name=outboundfeed]').attr('content');
    return OBFContent;

}

scrollTemplate.getTitle = function(doc) {

    try {

        var title;
        var titleOtherLang;
        var titleOtherCountryLang;

        if (doc !== null) {

            if (contentCountry === 'GL') {
                title = doc['title'];
            } else {
                titleOtherCountryLang = doc['title-lang-' + contentCountry.toLowerCase() + '-' + contentLang.toLowerCase()];

                if (titleOtherCountryLang === '' || titleOtherCountryLang === undefined) {

                    titleOtherLang = doc['title-lang-' + contentLang.toLowerCase()];
                    if (titleOtherLang === '' || titleOtherLang === undefined) {
                        title = doc['title'];
                    } else {
                        title = titleOtherLang;
                    }

                } else {
                    title = titleOtherCountryLang;
                }

            }

        } else {
            title = '';
        }
        title = title ? title.trim() : '';
        return title;

    } catch (e) {
        return (null);
    }

}

scrollTemplate.isInteger = function(value) {
    if ((parseFloat(value) == parseInt(value)) && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

scrollTemplate.loadFeedData = function(contentSection, contentSubSection) {

    try {

        var url = this.sourceURLs.getURL('all');

        var backupID = scrollTemplate.sourceURLs.getBackupURL('all');
        backupID = backupID.substring(0, backupID.indexOf('&'));

        var feedData;
        var biosFeedData = [];
        var TLFeedData = [];

        $.ajax({
            type: "GET",
            async: false,
            cache: false,
            url: url,
            dataType: 'json'
        }).done(function(data) {

            if (data !== null && data.results !== null && typeof(data.results) === "object") {

                feedData = data.results;

                if (feedData[0] !== undefined) {
                    if (feedData[0].error) {

                        feedData = backupOutBoundFeed(backupID, '/content/contentitem', 'json');

                        feedData = $.parseJSON(feedData);
                        feedData = feedData.results;

                        scrollTemplate.submitFeedBackupReport('Scroll template', backupID);

                        if (feedData[0].error) {
                            scrollTemplate.displayError(MSG_TECH);
                            $('#errorthrown').html(feedData[0].error);
                        }
                    }
                } else {

                    feedData = backupOutBoundFeed(backupID, '/content/contentitem', 'json');
                    feedData = $.parseJSON(feedData);
                    feedData = feedData.results;

                    scrollTemplate.submitFeedBackupReport('Scroll template', backupID);

                    if (feedData[0] === undefined) {
                        scrollTemplate.displayError(MSG_TECH);
                        $('#errorthrown').html(MSG_NODOCS);
                    }

                }

                /* begin biographies */

                for (var j = 0; j < feedData.length; j++) {

                    var lastName = feedData[j].person_lastname;

                    if (lastName !== undefined) {
                        if (biosFeedData.length === 0) {

                            biosFeedData[0] = feedData[j];

                        } else {

                            biosFeedData.push(feedData[j]);

                        }
                    }

                }

                biosFeedData.sort(function(a, b) {
                    if (a.person_lastname < b.person_lastname) return -1;
                    if (a.person_lastname > b.person_lastname) return 1;
                    return 0;
                });

                $('<div class="modal biography-modal">' +
                    '<label for="modal-1">' +
                    '<div id="triggerBiographyModal" class="modal-trigger" style="display: none">Click for Modal</div>' +
                    '</label>' +
                    '<input class="modal-state" id="modal-1" type="checkbox" />' +
                    '<div class="modal-fade-screen">' +
                    '<div class="modal-inner">' +
                    '<div class="modal-close" for="modal-1"></div>' +
                    '<div class="modal-content biographyModalContents"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>').appendTo('body');

                $("#modal-1").on("change", function() {
                    if ($(this).is(":checked")) {
                        $("body").addClass("modal-open");
                    } else {
                        $("body").removeClass("modal-open");
                    }
                });

                $(".biography-modal .modal-fade-screen, .biography-modal .modal-close").on("click", function() {
                    $(".modal-state:checked").prop("checked", false).change();
                });

                $(".modal-inner").on("click", function(e) {
                    e.stopPropagation();
                });

                /* end biographies */

                /* begin thought leadership */

                for (var j = 0; j < feedData.length; j++) {

                    var contentType = feedData[j]['advisory-content-type'];

                    if (contentType !== undefined) {

                        if (contentType.toLowerCase() === 'tl') {
                            if (TLFeedData.length === 0) {

                                TLFeedData[0] = feedData[j];

                            } else {

                                TLFeedData.push(feedData[j]);

                            }
                        }

                    }

                }

                TLFeedData.sort(function(a, b) {
                    if (scrollTemplate.getReleaseDateNumber(a.releasedate) < scrollTemplate.getReleaseDateNumber(b.releasedate)) return 1;
                    if (scrollTemplate.getReleaseDateNumber(a.releasedate) > scrollTemplate.getReleaseDateNumber(b.releasedate)) return -1;
                    return 0;
                });

                /* end thought leadership */

            }

            $('.loader_querying').hide();

        }).fail(function(jqXHR, textStatus, errorThrown) {

            scrollTemplate.displayError(MSG_TECH);
            $('#errorthrown').html(errorThrown);

        });

        return {
            bios: biosFeedData,
            tl: TLFeedData
        }

    } catch (e) {
        return (null);
    }

}

scrollTemplate.processFeedData = function(contentSection, contentSubSection) {

    try {

        $('.loader_querying').show();

        var docCountryLang = (contentCountry + '/' + contentLang).toLowerCase();

        var feedData = this.loadFeedData(contentSection, contentSubSection);
        var biosFeedData = feedData.bios;
        var biographiesCount = 0;
        var biosSelected = [];

        if(contentSection === 'contacts') {

          biosSelected = $('.selected-bios');

        } else {

          biosSelected = $('#selected-bios');

        }

        $.each( biosSelected, function( p, val) {

          var biosSelectedHTML = $(biosSelected[p]).html();
          var biosSelectedID = $(biosSelected[p]).attr('id');

          var renderTo = biosSelectedID;

          var biosSelectedLU = '';

          if (biosSelectedHTML !== undefined) {

              biosSelectedLU = biosSelectedHTML.toLowerCase().replace(/ /g, '').split(',');

          }

          for (var m = 0; m < biosSelectedLU.length; m++) {

              for (var n = 0; n < biosFeedData.length; n++) {

                  var link = biosFeedData[n].link;

                  var articleKey = link.substring(link.lastIndexOf('/') + 1, link.length).toLowerCase();

                  if (articleKey.indexOf('--working-copy-') !== -1) {
                      articleKey = articleKey.substring(0, articleKey.indexOf('--working-copy-'));
                  }

                  if (biosSelectedLU[m] === articleKey) {

                      var email = biosFeedData[n].person_email;
                      email = email ? email.trim() : '';

                      var firstName = biosFeedData[n].person_firstname;
                      firstName = firstName ? firstName.trim() : '';

                      var imagePath = biosFeedData[n].person_photo;
                      imagePath = imagePath ? imagePath.trim() : '';

                      var lastName = biosFeedData[n].person_lastname;
                      lastName = lastName ? lastName.trim() : '';

                      var location = biosFeedData[n].person_officelocation;
                      location = location ? location.trim() : '';

                      var serviceSector = biosFeedData[n].person_servicesector;
                      serviceSector = serviceSector ? serviceSector.trim() : '';

                      var telephone = biosFeedData[n].person_telephone;
                      telephone = telephone ? telephone.trim() : '';

                      var title = scrollTemplate.getPersonTitle(biosFeedData[n]);

                      var serviceSectorArray = serviceSector.replace(/ /gi, '').split(',');

                      biographiesCount++;
                      scrollTemplate.renderBio(contentSection, contentSubSection, email, firstName, imagePath, lastName, link, renderTo, serviceSectorArray[p], telephone, title);

                  }

              }
          }  // end m for

        }); // end p for

        var TLFeedData = feedData.tl;
        var TLCount = 0;

        for (var j = 0; j < TLFeedData.length; j++) {

            var description = this.getDescription(TLFeedData[j]);

            var imagePath = TLFeedData[j]['hero-image'];
            imagePath = imagePath ? imagePath.trim() : '';

            var link = TLFeedData[j].link;

            var serviceSector = TLFeedData[j]['advisory-category'];
            serviceSector = serviceSector ? serviceSector.trim() : '';

            var share = this.getShare(TLFeedData[j]);

            var title = this.getTitle(TLFeedData[j]);

            if (serviceSector.toLowerCase().indexOf(contentSubSection.toLowerCase()) !== -1) {

                TLCount++;


                if (link.toLowerCase().indexOf('gl/en') !== -1) { // is a global doc

                  scrollTemplate.renderTL(description, imagePath, link, title);

                } else if (link.toLowerCase().indexOf(docCountryLang) !== -1) { //matching country/lang

                  scrollTemplate.renderTL(description, imagePath, link, title);

                } else if (share.indexOf(docCountryLang) !== -1) {

                  scrollTemplate.renderTL(description, imagePath, link, title);

                }

            }

        }

    } catch (e) {
        return (null);
    }

}


scrollTemplate.renderBio = function(contentSection, contentSubSection, email, firstName, imagePath, lastName, link, renderTo, serviceSector, telephone, title) {

    try {

        var wrapperClass = '';

        var bioHTML = '<div class="gallery-cell">' +
            '<a style="cursor: pointer" onclick="scrollTemplate.showBiographyModal($(this).find(\'.caption\'))">' +
            '<div class="thumbnail">' +
            '<img src="' + imagePath + '" />' +
            '<div class="caption">' +
            '<h3>' + firstName + ' ' + lastName + '</h3>' +
            '<p class="h5 title bio-title">' + title + '</p>' +
            '<p class="h5 bio-telephone">' + telephone + '</p>' +
            '<p class="h5 bio-email">' + email + '</p>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</div>';

        // var renderTo;

       if (contentSection === 'contacts') {

            /* renderTo = 'div[data-category="' + serviceSector + '"] + div .accordion-body'; */
            // renderTo = '#section-contact .gallery';
            renderTo = '#section-contact #' + renderTo + '-gallery';


        } else {

            renderTo = '#section-contact .gallery';

        }

        $(bioHTML).appendTo(renderTo);

    } catch (e) {
        return (null);
    }

}

scrollTemplate.renderModals = function() {

    var genericModalCount = $('div[class*="generic-modal-"]').length;
    for (var j = 1; j <= genericModalCount; j++) {

        $('<div class="modal generic-modal">' +
            '<label for="generic-modal-' + j + '">' +
            '<div id="generic-modal-' + j + '-trigger" class="modal-trigger" style="display: none">Click for Modal</div>' +
            '</label>' +
            '<input class="modal-state" id="generic-modal-' + j + '" type="checkbox" />' +
            '<div class="modal-fade-screen">' +
            '<div class="modal-inner">' +
            '<div class="modal-close" for="generic-modal-' + j + '"></div>' +
            '<div class="modal-content generic-modal-content generic-modal-' + j + '-content"></div>' +
            '</div>' +
            '</div>' +
            '</div>').appendTo('body');

        $('#generic-modal-' + j).on("change", function() {
            if ($(this).is(":checked")) {
                $("body").addClass("modal-open");
            } else {
                $("body").removeClass("modal-open");
            }
        });

        if ($('.generic-modal-' + j).html() !== undefined) {
            var thisHTML = $('.generic-modal-' + j).html();
            $(thisHTML).appendTo('.generic-modal-' + j + '-content');
        }

    }

    $(".generic-modal .modal-fade-screen, .generic-modal .modal-close").on("click", function() {
        $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
        e.stopPropagation();
    });

}

scrollTemplate.renderTL = function(description, imagePath, link, title) {

    try {

        var TLHTML = '<a class="tl-item gallery-cell" href="' + link + '">' +

            '<div class="thumbnail">' +
            '<img src="' + imagePath + '" />' +
            '</div>' +
            '<div class="caption">' + title + '</div>' +
            '</a>';

        var renderTo = '.section-latest-thinking .gallery';

        $(TLHTML).appendTo(renderTo);

    } catch (e) {
        return (null);
    }

}

scrollTemplate.contactsPageActions = function() {

  if($('.maincolumn > h1').length === 0) {
    $($('#site-title').html()).insertBefore('.maincolumn > h2');
  }

  $(window).hashchange(function() {

    $('.selected-bios-wrapper').hide();
    $('#featuremenu li').removeClass('nav-current');

    var currentHash = location.hash;
    if (currentHash === '') {

      $('.selected-bios-wrapper').eq(0).show();
      $('#featuremenu li').eq(1).addClass('nav-current');

    } else {

      var selectedBiosTitle = $(currentHash).attr('data-title');
      $('.maincolumn h2').html(selectedBiosTitle);
      $(currentHash).show();

      $('#featuremenu li a[href="' + currentHash + '"]').parent().addClass('nav-current');

    }

  });

  $(window).hashchange();

  $(window).load(function(){
    $('#featuremenu li').eq(0).removeClass('nav-current');
  });

}

scrollTemplate.l2PageActions = function() {

    var header = $(".main-header");
    var hero = $(".eyhero");

    if ($(window).width() > 568) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var menuheight = $(hero).outerHeight() / 2;
            if (scroll >= menuheight) {
                header.addClass("is-smallmenu");
            } else {
                header.removeClass("is-smallmenu");
            }
        });
    }
    // Move socialshare into place
    $('.socialshare').prependTo($('.type-system-ey'));

    // Mobile scripts
    // Default to small, fixed menu
    if ($(window).width() <= 736) {
        header.addClass("is-smallmenu");
        // Move left-hand menu into dropdown menu
        $('#featuremenu').insertBefore('#mainnav');
        // Close menu when selecting a menu item
        $('.fakenav a').click(function() {
            $('.hamburger').click();
        });
    } else {
        header.removeClass("is-smallmenu");
        $('#featuremenu').prependTo('.article-subnav');
        $('.fake').removeClass("smallnav");
        $('.main-header .fakenav').remove();
    }
    /* Level 2 page with no heading or hero */
    if ($('.eyhero').css('display') === 'none') {
        $('.main-header').addClass('is-smallmenuforced');
    }

    // Accordion actions
    $('.accordion-tabs-minimal').each(function(index) {
        $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
    });

    $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {

        if (!$(this).hasClass('is-active')) {
            event.preventDefault();
            var accordionTabs = $(this).closest('.accordion-tabs-minimal');
            accordionTabs.find('.is-open').removeClass('is-open').hide();

            $(this).next().toggleClass('is-open').toggle();
            accordionTabs.find('.is-active').removeClass('is-active');
            $(this).addClass('is-active');
        } else {
            event.preventDefault();
        }

    });

}

scrollTemplate.landingPageActions = function() {

    var header = $(".main-header");
    var hero = $(".flickity-viewport");
    var menuheight = '385';

    // Desktop scripts
    if ($(window).width() > 668) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= menuheight) {
                // shrink height of top menu
                header.addClass("is-smallmenu");
                // Move nav under hero to top nav and hide original
                $('.fake:not(.smallnav) .fakenav').clone(true).insertAfter('.eyscrollogo');
                $('.fake').addClass("smallnav");
                $('header.fake').css({
                    'opacity': '0',
                    'transform': 'translateY(-65px)'
                });
            } else {
                header.removeClass("is-smallmenu");
                $('.main-header .fakenav').remove();
                $('.fake').removeClass("smallnav");
                $('header.fake').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            }
        });
        $('.serviceslist').prependTo('.article-subnav');
    }
    $('.socialshare').insertAfter($('.fake.navigation'));

    // Mobile scripts
    if ($(window).width() <= 736) {

        // Default to small, fixed menu
        header.addClass("is-smallmenu");

        // Move menu under hero into dropdown menu
        $('.fake > .fakenav div')
            .prependTo('nav[role="navigation"]')
            .addClass('mobilefake')
            .removeClass('fakenav').attr("id", "featuremenu");

        // close menu when clicking a menu item
        $('.mobilefake a').click(function() {

            $('.hamburger').click();
            // from enquire
            $('.eynavigation > nav > *').wrapAll('<div id="eymainmenu">');
            $('.smnt-inner > a').wrapAll('<ul id="mobilemenu">').wrap('<li>');
            $('#mobilemenu').prependTo('nav[role="navigation"]');

        });

    } else {

        header.removeClass("is-smallmenu");
        $('.fake').removeClass("smallnav");
        $('.main-header .fakenav').remove();

    }
}

scrollTemplate.scrollToSection = function() {

    var page = $('.eyhero-home').length;

    /* if page is homepage and set click rules only for homepage, !! don't change page name */
    if (page > 0) {

        $('.smnt-subNavBtn').off('click');

        // target menu links
        $('.smnt-subNavBtn').on('click', function(e) {

            //remove default behavior
            e.preventDefault();

            //get #hash from href
            var str = $(this).attr('href');
            var n = str.lastIndexOf('#');
            var section = str.substring(n + 1);

            if (waypointSection0) {
                waypointSection0.disable();
            }
            if (waypointSection1) {
                waypointSection1.disable();
            }
            if (waypointSection2) {
                waypointSection2.disable();
            }
            if (waypointSection3) {
                waypointSection3.disable();
            }
            if (waypointSection4) {
                waypointSection4.disable();
            }
            if (waypointSection5) {
                waypointSection5.disable();
            }
            if (waypointSection6) {
                waypointSection6.disable();
            }
            if (waypointSection7) {
                waypointSection7.disable();
            }
            if (waypointSection8) {
                waypointSection8.disable();
            }
            if (waypointSection9) {
                waypointSection9.disable();
            }
            if (waypointSection10) {
                waypointSection10.disable();
            }

            $('.smnt-subNavBtn').removeClass('smnt-active');
            $(this).addClass('smnt-active');

            //get section offset top
            var goToSection = $('#' + section).offset().top;

            //animate body to to right section
            $('html, body').animate({

                    scrollTop: goToSection

                }, 800, //you can adjust speed here

                function() {

                    window.location.hash = '#' + section; //callback modify hash after animation

                    if (waypointSection0) {
                        waypointSection0.enable();
                    }
                    if (waypointSection1) {
                        waypointSection1.enable();
                    }
                    if (waypointSection2) {
                        waypointSection2.enable();
                    }
                    if (waypointSection3) {
                        waypointSection3.enable();
                    }
                    if (waypointSection4) {
                        waypointSection4.enable();
                    }
                    if (waypointSection5) {
                        waypointSection5.enable();
                    }
                    if (waypointSection6) {
                        waypointSection6.enable();
                    }
                    if (waypointSection7) {
                        waypointSection7.enable();
                    }
                    if (waypointSection8) {
                        waypointSection8.enable();
                    }
                    if (waypointSection9) {
                        waypointSection9.enable();
                    }
                    if (waypointSection10) {
                        waypointSection10.enable();
                    }

                });
        });

        //get page Hash #
        var anchor = document.location.hash;

        if (anchor !== "" && anchor !== null && anchor !== "undefined") {

            setTimeout(function() {
                var goToSection = $(anchor).offset().top;

                //animate body to right section
                $('html, body').animate({

                        scrollTop: goToSection

                    }, 800 //you can adjust speed here

                );
            }, 500);

        }

    }

}

scrollTemplate.showBiographyModal = function(biographyDetails) {

    $('.biographyModalContents').html('');

    $(biographyDetails).clone().appendTo('.biographyModalContents');

    var phoneElem = $('.biographyModalContents .bio-telephone');
    var phoneNum = phoneElem.html();
    $(phoneElem).html('Phone: <a href="tel:' + phoneNum + '">' + phoneNum + '</a>');

    var emailElem = $('.biographyModalContents .bio-email');
    var email = emailElem.html();
    $(emailElem).html('Email: <a href="mailto:' + email + '">' + email + '</a>');

    $('#triggerBiographyModal').click();

}

scrollTemplate.sourceURLs = {

    "all": {
        id: "OBF-USDD-9SWTU2&mode=json&query=/content/contentitem",
        devid: "/echannel/content.nsf/vwCodeLibraries/OBF-USDD-9SWTU2?OpenDocument",
        local: "advisory-json-data.js"
    }

}

scrollTemplate.sourceURLs.getURL = function(URLKey) {

    var isLocal = location.href.indexOf("localhost") >= 0 || location.href.indexOf("C:/") >= 0 || location.href.indexOf("file:///") >= 0;
    var isDropbox = location.href.indexOf("dl.dropboxusercontent") >= 0;
    var isDev = location.href.indexOf("eycomportaldev.iweb.ey.com") >= 0;
    var isStaging = location.href.indexOf("eycomstg") >= 0;
    var isStagingPreview = location.href.indexOf("eycompreviewstg") >= 0;
    var isPreview = location.href.indexOf("eycompreview") >= 0;
    var isProduction = isLocal === false && isDropbox === false && isStaging === false && isStagingPreview === false && isPreview === false;

    var feedPrefixLocal = "data/";
    var feedPrefixDropbox = "https://dl.dropboxusercontent.com/u/767429/ey/advisory/data/";
    var feedPrefixDev = "http://eycomportaldev.iweb.ey.com/?queryid=";
    var feedPrefixStaging = "http://eycomstg.ey.com/?queryid=";
    var feedPrefixStagingPreview = "http://eycompreviewstg.ey.com/?queryid=";
    var feedPrefixPreview = "http://eycompreview.ey.com/?queryid=";
    var feedPrefixProduction = "/?queryid=";

    if (URLKey === null) return (null);
    else {
        var URLSubKey = this[URLKey];
        if (URLSubKey === null) return (null);
        else if (isLocal) return (feedPrefixLocal + URLSubKey.local);
        else if (isDropbox) return (feedPrefixDropbox + URLSubKey.local);
        else if (isDev) return (feedPrefixDev + URLSubKey.id);
        else if (isStagingPreview) return (feedPrefixStagingPreview + URLSubKey.id);
        else if (isStaging) return (feedPrefixStaging + URLSubKey.id);
        else if (isPreview) return (feedPrefixPreview + URLSubKey.id);
        else if (isProduction) return (feedPrefixProduction + URLSubKey.id);
        else return (null);
    }
}

scrollTemplate.sourceURLs.getBackupURL = function(URLKey) {

    if (URLKey === null) return (null);
    else {
        var URLSubKey = this[URLKey];
        if (URLSubKey === null) return (null);
        else return (URLSubKey.id);
    }
}

scrollTemplate.getShare = function(doc) {

    try {

        var share = doc !== null ? doc['advisory-share'] : '';

        if (share === undefined) {
            share = '';
        }

        if (share !== '') {
            share = (share.replace(/-/g, '/')).toLowerCase();
        }

        return share;

    } catch (e) {
        return (null);
    }

}

scrollTemplate.submitFeedBackupReport = function(source, feedID) {

    $('#feed-backup-report').remove();

    $('<form accept-charset="UTF-8" class="eyForm" id="feed-backup-report">' +
        '<input type="hidden" name="Field0" value="">' +
        '<input type="hidden" name="Field1" value="">' +
        '<input type="hidden" name="LField0" value="Source">' +
        '<input type="hidden" name="LField1" value="Feed ID">' +
        '<input type="hidden" name="pCountry" value="Global">' +
        '<input type="hidden" name="pCountryCode" value="GL">' +
        '<input type="hidden" name="Site" value="Global">' +
        /* '<input type="hidden" name="emailformflag" value="1">' +
        '<input type="hidden" name="email" value="xx.xx@ey.com">' + */
        '<input type="hidden" name="pLang" value="English">' +
        '<input type="hidden" name="type" value="feed-backup-report">' +
        '<input type="hidden" name="DbPath" value="echannel/content.nsf">' +
        '<input type="hidden" name="pLiveHost" value="http://www.ey.com">' +
        '<input type="hidden" name="pLiveHost" value="http://www.ey.com/GL/en/Email_Alerts_-_Thank_You">' +
        '</form>').appendTo('body');


    $('#feed-backup-report input[name="Field0"]').val(source);
    $('#feed-backup-report input[name="Field1"]').val(feedID);

    $.ajax({
        type: "POST",
        crossDomain: false,
        url: '/echannel/content.nsf/agtWFReturnURL?OpenAgent',
        data: $('#feed-backup-report').serialize(),
        success: function(data) {},
        error: function(xhr, ajaxOptions, thrownError) { /* console.log(xhr.status); */ /* console.log(thrownError); */ }
    });

}


$(document).ready(function() {

    if ($('.eyhero-home').length) {
        scrollTemplate.landingPageActions();
    }

    if ($('.eyhero').length) {
        scrollTemplate.l2PageActions();
        // $('#cbp-qtrotator').cbpQTRotator();
    }

    if ($('.selected-bios-wrapper').length) {

        scrollTemplate.contactsPageActions();

    }

    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function(e) {
        $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
        e.preventDefault();
    });

    /* Begin JFL's menu script */
    var $mainNav = $('#main-nav') || $('.site-header');

    $('.hamburger').click(function(e) {
        e.preventDefault();
        $this = $(this);
        if ($this.hasClass('is-opened')) {

            $this.addClass('is-closed').removeClass('is-opened');
            $mainNav.removeClass('show-menu').addClass('hide-menu');
            $('body').css({
                'overflow': 'visible'
            });

        } else {

            $this.removeClass('is-closed').addClass('is-opened');
            $mainNav.removeClass('hide-menu').addClass('show-menu');

            $('body').css({
                'overflow': 'hidden'
            });

        }
    });
    /* End JFL's menu script */

    /* BH country selector script */
    $('.cs-current-country').click(function(e) {
        e.stopPropagation();
        $('.cs-countries-list').toggleClass('is-open');
        $('.cs-arrow').toggleClass('is-open');
    });

    /* Close main menu when choosing country - back button functionality */
    $('.cs-countries-list a').click(function() {
        $('.hamburger').click();
    });

    $('html').click(function() {
        if ($(".cs-countries-list").hasClass("is-open")) {
            $(".cs-countries-list").removeClass("is-open");
            $('.cs-arrow').removeClass('is-open');
        }
    });

    /* Find tallest item in rotator and set height using js */
    var maxHeight = -1;

    $('.cbp-qtcontent').each(function() {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    $('.cbp-qtcontent').each(function() {
        $(this).height(maxHeight);
    });

    /* fixes z-index issue on Youtube video */
    $('iframe').each(function() {
        var url = $(this).attr("src");
        $(this).attr("src", url + "?wmode=transparent");
    });

    /*
    check if .light-logo element exists then set .light-logo class on body just add an element <div class="light-logo" /> in the body somewhere used on pages where the readability of the logo suffers
    */
    if ($('.light-logo').length) {
        $('body').addClass('light-logo');
    } else {

    }

    if ($('.accordion').length)
        $(".accordion").accordion({
            collapsible: true,
            active: 'none',
            heightStyle: "content"
        });


    $('.accordion-tabs-minimal').each(function(index) {
        $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
    });

    $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {

        if (!$(this).hasClass('is-active')) {

            event.preventDefault();
            var accordionTabs = $(this).closest('.accordion-tabs-minimal');
            accordionTabs.find('.is-open').removeClass('is-open').hide();

            $(this).next().toggleClass('is-open').toggle();
            accordionTabs.find('.is-active').removeClass('is-active');
            $(this).addClass('is-active');

        } else {
            event.preventDefault();
        }

    });

});


$(window).load(function() {

    scrollTemplate.scrollToSection();

    /* Check if user is scrolled down and add dark menu if so (L2 page only) */
    var header = $('.main-header');

    if ($('.eyhero').length) {
        if ($(document).scrollTop() >= 50) {
            header.addClass('is-smallmenu');
        }
    }

    var docTitleTrack = document.title.replace(/ - EY - Global/g, '');

    // Tab clicks

    /*
    $('.accordion-tabs-minimal a').on('click', function() {
        Analytics.TrackEvent('Tab', 'Click', docTitleTrack + ' - ' + $(this).html());
    });
    */

    // Expandable section clicks
    $('.ui-accordion .ui-accordion-header').on('click', function() {

        var accordionHeaderState = $(this).attr('aria-expanded');
        var accordionHeaderStateReport = 'Open';

        if (accordionHeaderState === 'false') {
            accordionHeaderStateReport = "Close";
        }

        /* Analytics.TrackEvent('Expandable section - ' + accordionHeaderStateReport, 'Click', docTitleTrack + ' - ' + $(this).children('h3').html()); */

    });

    /*
    $('.ui-accordion-content a').on('click', function() {

        Analytics.TrackEvent('Expandable section - Content', 'Click', docTitleTrack + ' - ' + $(this).html());

    });
    */

    // Remove eylogo as it is hidden and replaced by eyscrollogo
    $('.eylogo').remove();

    // Remove inner div from fakenav as it breaks flexbox
    $('.fakenav div').contents().unwrap();

    if ($(".eyhero-home").length) {

        if ($('#section0').length) {

            waypointSection0 = new Waypoint({
                element: $('#section0'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section0]').addClass('smnt-active');

                }
            });

        }

        if ($('#section1').length) {

            waypointSection1 = new Waypoint({
                element: $('#section1'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section1]').addClass('smnt-active');

                }
            });

        }

        if ($('#section2').length) {

            waypointSection2 = new Waypoint({
                element: $('#section2'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section2]').addClass('smnt-active');

                }
            });

        }

        if ($('#section3').length) {

            waypointSection3 = new Waypoint({
                element: $('#section3'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section3]').addClass('smnt-active');

                }
            });

        }

        if ($('#section4').length) {

            waypointSection4 = new Waypoint({
                element: $('#section4'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section4]').addClass('smnt-active');

                }
            });

        }

        if ($('#section5').length) {

            waypointSection5 = new Waypoint({
                element: $('#section5'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section5]').addClass('smnt-active');

                }
            });

        }

        if ($('#section6').length) {

            waypointSection6 = new Waypoint({
                element: $('#section6'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section6]').addClass('smnt-active');

                }
            });

        }

        if ($('#section7').length) {

            waypointSection7 = new Waypoint({
                element: $('#section7'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section7]').addClass('smnt-active');

                }
            });

        }

        if ($('#section8').length) {

            waypointSection8 = new Waypoint({
                element: $('#section8'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section8]').addClass('smnt-active');

                }
            });

        }

        if ($('#section9').length) {

            waypointSection9 = new Waypoint({
                element: $('#section9'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section9]').addClass('smnt-active');

                }
            });

        }

        if ($('#section10').length) {

            waypointSection10 = new Waypoint({
                element: $('#section10'),
                offset: '25%',
                handler: function(direction) {

                    $('.smnt-subNavBtn').removeClass('smnt-active');
                    $('.fakenav a[href=#section10]').addClass('smnt-active');

                }
            });

        }

    }

});

/* orientationchange not working on some Android devices so using this via https://davidwalsh.name/orientation-change */
window.addEventListener("resize", function() {
    if ($(".eyhero").length) {
        scrollTemplate.l2PageActions();
    }
    if ($(".eyhero-home").length) {
        scrollTemplate.landingPageActions();
    }
}, false);

(function() {
    $('.js body').hide().delay(2000).fadeIn(400);
})();
