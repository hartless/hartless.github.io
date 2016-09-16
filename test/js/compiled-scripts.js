Analytics.EnableHashTracking();
Analytics.AddProperty("UA-26457421-2");
Analytics.TrackAll();


jQuery(document).ready(function($) {

 /*PRODUCTION*/
 if(document.location.href.toLowerCase().indexOf('home') !== -1) {
  // execute home page only code
   $('body').append('<footer class="footer" role="contentinfo"> <div class="footer-logo"> <img src="http://www.ey.com/ecimages/careers/careers_EY.png" alt="EY Logo"> </div> <div class="footer-links"> <div class="container"> <ul> <li> <h3></h3></li> <li><a href="http://www.ey.com/US/en/home/privacy">Privacy</a></li> <li><a href="http://www.ey.com/GL/en/Home/EY-Data-Protection-Binding-Corporate-Rules-Program"">BCR</a></li> <li><a href="/US/en/Home/Ernst_Young_Global_Accessibility_statement">Accessibility</a></li> <li><a href="http://www.ey.com/GL/en/home/legal">Legal</a></li> </ul> <ul> <li> <h3></h3></li> <li><a href="/US/en/SiteMap">Site map</a></li> <li><a href="http://www.ey.com/US/en/ourlocations">Our locations</a></li> <li class="last"><a href="http://www.ey.com/US/en/Home/Home-ContactUs">Contact us</a></li> <li><a href="http://www.ey.com/US/en/home/Global-Code-of-Conduct">Global Code of Conduct</a></li> </ul> <ul> <li> <h3></h3></li> <li><a href="https://www.facebook.com/EY-195665063800329/">Facebook</a></li> <li><a href="https://www.linkedin.com/company/ernstandyoung">LinkedIn</a></li> <li><a href="http://twitter.com/EYnews">Twitter</a></li> <li><a href="https://www.youtube.com/user/ErnstandYoungGlobal/">YouTube</a></li> </ul> </div> </div> <hr> <p>© 2015 Ernst &amp; Young. All rights reserved.</p> <p class="details">EY refers to the global organization, and may refer to one or more, of the member firms of Ernst &amp; Young Global Limited, each of which is a separate legal entity. Ernst &amp; Young Global Limited, a UK company limited by guarantee, does not provide services to clients.</p> </footer>');
 }
 else {
  // execute for pages other than home
   $('body').prepend('<header class="navigation" role="banner"> <div class="navigation-wrapper"> <a href="http://www.ey.com" class="logo"></a> <div class="modal main-nav"> <div class="bg"></div> <div class="menucontainer"> <input id="openmenu" name="exit" type="checkbox" /> <label for="openmenu"><span class="abacus modal-trigger"></span><span class="menu">ey.com</span></label> </div> <div class="modal-fade-screen"> <div class="modal-inner"> <div class="eynavigation"> <nav role="navigation"> <div class="group"> <h3><a href="http://www.ey.com">EY Home</a><br></h3> <h3><a href="/GL/en/Issues">Insights</a></h3> <ul> <li><a href="/GL/en/Issues/Insights#browse-by-role">Browse by role</a></li> <li><a href="/GL/en/Issues/Insights#browse-by-topic">Browse by topic</a></li> <li><a href="/GL/en/Issues/Insights#browse-by-megatrends">Browse by megatrends</a></li> </ul> </div> <div class="group"> <h3><a href="/GL/en/Industries">Industries</a></h3> <ul> <li><a href="/GL/en/Industries/Automotive">Automotive &amp; Transportation</a></li> <li><a href="/GL/en/Industries/Consumer-Products">Consumer Products &amp; Retail</a></li> <li><a href="/GL/en/Industries/Financial-Services">Financial Services</a></li> <li><a href="/GL/en/Industries/Government---Public-Sector">Government &amp; Public Sector</a></li> <li><a href="/GL/en/Industries/Health">Health</a></li> <li><a href="/GL/en/Industries/Life-Sciences">Life Sciences</a></li> <li><a href="/GL/en/Industries/Media---Entertainment">Media &amp; Entertainment </a></li> <li><a href="/GL/en/Industries/Mining---Metals">Mining &amp; Metals</a></li> <li><a href="/GL/en/Industries/Oil---Gas">Oil &amp; Gas</a></li> <li><a href="/GL/en/Industries/Power---Utilities">Power &amp; Utilities</a></li> <li><a href="/GL/en/Industries/Private-Equity">Private Equity</a></li> <li><a href="/GL/en/Industries/Real-Estate">Real Estate, Hospitality &amp; Construction</a></li> <li><a href="/GL/en/Industries/Technology">Technology</a></li> <li><a href="/GL/en/Industries/Telecommunications">Telecommunications</a></li> </ul> </div> <div class="group"> <h3><a href="/GL/en/Services">Services</a></h3> <ul> <li><a href="/GL/en/Services/Advisory">Advisory</a></li> <li><a href="/GL/en/Services/Assurance">Assurance</a></li> <li><a href="/GL/en/Services/Tax">Tax</a></li> <li><a href="/GL/en/Services/Transactions">Transactions</a></li> <li><a href="/GL/en/Services/Strategic-Growth-Markets">Strategic Growth Markets</a></li> <li><a href="/GL/en/Services/Specialty-Services">Specialty Services</a></li> </ul> <h3><a href="/GL/en/Newsroom">Newsroom</a></h3> <ul> <li><a href="/GL/en/Newsroom/PR-contacts">PR contacts</a></li> <li><a href="/GL/en/Newsroom/PR-activities">PR activities</a></li> <li><a href="/GL/en/Newsroom/Analyst-Relations">Analyst relations</a></li> <li><a href="/GL/en/Newsroom/Facts-and-figures">Facts and figures</a></li> </ul> </div> <div class="group last"> <h3><a href="/GL/en/Careers">Careers</a></h3> <ul> <li><a href="/GL/en/Careers/Students">Students</a></li> <li><a href="/GL/en/Careers/Experienced">Experienced</a></li> </ul> <h3><a href="/GL/en/About-us">About us</a></h3> <ul> <li><a href="/GL/en/About-us/Our-values">Our values</a></li> <li><a href="/GL/en/About-us/Our-global-approach">Our global approach</a></li> <li><a href="/GL/en/About-us/Entrepreneurship">Entrepreneurship</a></li> <li><a href="/GL/en/About-us/Our-people-and-culture">Our people and culture</a></li> <li><a href="/GL/en/About-us/Corporate-Responsibility">Corporate responsibility</a></li> <li><a href="/GL/en/About-us/EY-Ethics-hotline">EY/Ethics hotline</a></li> </ul> <h3><a href="/GL/en/Alumni">Alumni</a></h3> </div> <div class="clear"></div> </nav> </div> </div> </div> </div> </div> </header>');
   // Jan 17, 2016 - INCLUDES LOCATION SELECTOR
   // $('body').prepend('<header class="navigation" role="banner"> <div class="navigation-wrapper"> <a href="http://www.ey.com" class="logo"></a> <div class="modal main-nav"> <div class="bg"></div> <div class="menucontainer"> <input id="openmenu" name="exit" type="checkbox" /> <label for="openmenu"><span class="abacus modal-trigger"></span><span class="menu">ey.com</span></label> </div> <div class="modal-fade-screen"> <div class="modal-inner"> <div class="eynavigation"> <div class="country-picker"> <div class="country-picker-header"> <div class="country-picker-title">Location selector</div> <form action="/Home" method="post" id="rememberme"> <input type="checkbox" id="persist" name="pt" checked="checked">Remember my selection <input type="hidden" name="pc"> <input type="hidden" name="pl"> </form> </div> <ul class="country-picker-list"> <li class="country-picker-selected-country is-active">Global</li> <li><a href="">A</a></li> <li><a href="">B</a></li> <li><a href="">C</a></li> <li><a href="">D</a></li> <li><a href="">E</a></li> <li><a href="">F</a></li> <li><a href="">G</a></li> <li><a href="">H</a></li> <li><a href="">I</a></li> <li><a href="">J</a></li> <li><a href="">K</a></li> <li><a href="">L</a></li> <li><a href="">M</a></li> <li><a href="">N</a></li> <li><a href="">O</a></li> <li><a href="">P</a></li> <li><a href="">Q</a></li> <li><a href="">R</a></li> <li><a href="" class="is-active">S</a></li> <li><a href="">T</a></li> <li><a href="">U</a></li> <li><a href="">V</a></li> <li><a href="">Z</a></li> </ul> <div class="country-list"> <ul> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("LC","en");return false;">Saint Lucia (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SP","en");return false;">Saipan (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SA","en");return false;">Saudi Arabia (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SN","en");return false;">Senegal (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("CS","en");return false;">Serbia (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SC","en");return false;">Seychelles (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SG","en");return false;">Singapore (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SK","en");return false;">Slovak Republic (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SK","sk");return false;">Slovak Republic (Slovak)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SI","en");return false;">Slovenia (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("ZA","en");return false;">South Africa (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SS","en");return false;">South Sudan (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("ES","es");return false;">Spain (Spanish)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("LK","en");return false;">Sri Lanka (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("SE","sv");return false;">Sweden (Swedish)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("CH","de");return false;">Switzerland (German)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("CH","en");return false;">Switzerland (English)</a></li> <li><a class="countryMenu" href="/Home" onclick="javascript:setCC("CH","fr");return false;">Switzerland (French)</a></li> </ul> </div> </div> <nav role="navigation"> <div class="group"> <h3><a href="http://www.ey.com">EY Home</a><br></h3> <h3><a href="http://www.ey.com/GL/en/Issues">Insights</a></h3> <ul> <li><a href="http://www.ey.com/GL/en/Issues/Business-environment">Business environment</a></li> <li><a href="http://www.ey.com/GL/en/Issues/Driving-growth">Driving growth</a></li> <li><a href="http://www.ey.com/GL/en/Issues/Governance-and-reporting">Governance and reporting</a></li> <li><a href="http://www.ey.com/GL/en/Issues/IFRS">IFRS</a></li> <li><a href="http://www.ey.com/GL/en/Issues/Managing-finance">Managing finance</a></li> <li><a href="http://www.ey.com/GL/en/Issues/Managing-risk">Managing risk</a></li> <li><a href="http://www.ey.com/GL/en/Issues/Operational-effectiveness">Operational effectiveness</a></li> <li><a href="http://www.ey.com/GL/en/Issues/Talent-management">Talent management</a></li> <li><a href="http://www.ey.com/GL/en/Issues/Capital-and-transactions">Capital and transactions</a></li> </ul> </div> <div class="group"> <h3><a href="http://www.ey.com/GL/en/Industries">Industries</a></h3> <ul> <li><a href="http://www.ey.com/GL/en/Industries/Automotive">Automotive &amp; Transportation</a></li> <li><a href="http://www.ey.com/GL/en/Industries/Consumer-Products">Consumer Products &amp; Retail</a></li> <li><a href="/GL/en/Industries/Financial-Services">Financial Services</a></li> <li><a href="/GL/en/Industries/Government---Public-Sector">Government &amp; Public Sector</a></li> <li><a href="/GL/en/Industries/Health">Health</a></li> <li><a href="/GL/en/Industries/Life-Sciences">Life Sciences</a></li> <li><a href="/GL/en/Industries/Media---Entertainment">Media &amp; Entertainment </a></li> <li><a href="/GL/en/Industries/Mining---Metals">Mining &amp; Metals</a></li> <li><a href="/GL/en/Industries/Oil---Gas">Oil &amp; Gas</a></li> <li><a href="/GL/en/Industries/Power---Utilities">Power &amp; Utilities</a></li> <li><a href="/GL/en/Industries/Private-Equity">Private Equity</a></li> <li><a href="/GL/en/Industries/Real-Estate">Real Estate, Hospitality &amp; Construction</a></li> <li><a href="/GL/en/Industries/Technology">Technology</a></li> <li><a href="/GL/en/Industries/Telecommunications">Telecommunications</a></li> </ul> </div> <div class="group"> <h3><a href="/GL/en/Services">Services</a></h3> <ul> <li><a href="/GL/en/Services/Advisory">Advisory</a></li> <li><a href="/GL/en/Services/Assurance">Assurance</a></li> <li><a href="/GL/en/Services/Tax">Tax</a></li> <li><a href="/GL/en/Services/Transactions">Transactions</a></li> <li><a href="/GL/en/Services/Strategic-Growth-Markets">Strategic Growth Markets</a></li> <li><a href="/GL/en/Services/Specialty-Services">Specialty Services</a></li> </ul> <h3><a href="/GL/en/Newsroom">Newsroom</a></h3> <ul> <li><a href="/GL/en/Newsroom/PR-contacts">PR contacts</a></li> <li><a href="/GL/en/Newsroom/PR-activities">PR activities</a></li> <li><a href="/GL/en/Newsroom/Analyst-Relations">Analyst relations</a></li> <li><a href="/GL/en/Newsroom/Facts-and-figures">Facts and figures</a></li> </ul> </div> <div class="group last"> <h3><a href="/GL/en/Careers">Careers</a></h3> <ul> <li><a href="/GL/en/Careers/Students">Students</a></li> <li><a href="/GL/en/Careers/Experienced">Experienced</a></li> </ul> <h3><a href="/GL/en/About-us">About us</a></h3> <ul> <li><a href="/GL/en/About-us/Our-values">Our values</a></li> <li><a href="/GL/en/About-us/Our-global-approach">Our global approach</a></li> <li><a href="/GL/en/About-us/Entrepreneurship">Entrepreneurship</a></li> <li><a href="/GL/en/About-us/Our-people-and-culture">Our people and culture</a></li> <li><a href="/GL/en/About-us/Corporate-Responsibility">Corporate responsibility</a></li> <li><a href="/GL/en/About-us/EY-Ethics-hotline">EY/Ethics hotline</a></li> </ul> </div> <div class="clear"></div> </nav> </div> </div> </div> </div> </div> </header>');
   $('body').append('<footer class="footer" role="contentinfo"> <div class="footer-logo"> <img src="http://cdn.ey.com/branding/svg_logos/EY_Logo-w.svg" alt="EY Logo"> </div> <div class="footer-links"> <div class="container"> <ul> <li> <h3></h3></li> <li><a href="/US/en/home/privacy">Privacy</a></li> <li><a href="http://www.ey.com/GL/en/Home/EY-Data-Protection-Binding-Corporate-Rules-Program">BCR</a></li> <li><a href="/US/en/Home/Ernst_Young_Global_Accessibility_statement">Accessibility</a></li> <li><a href="http://www.ey.com/GL/en/home/legal">Legal</a></li> </ul> <ul> <li> <h3></h3></li> <li><a href="/US/en/SiteMap">Site map</a></li> <li><a href="http://www.ey.com/US/en/ourlocations">Our locations</a></li> <li class="last"><a href="/US/en/Home/Home-ContactUs">Contact us</a></li> <li><a href="/US/en/home/Global-Code-of-Conduct">Global Code of Conduct</a></li> </ul> <ul> <li> <h3></h3></li> <li><a href="https://www.facebook.com/EY-195665063800329/">Facebook</a></li> <li><a href="https://www.linkedin.com/company/ernstandyoung">LinkedIn</a></li> <li><a href="http://twitter.com/EYnews">Twitter</a></li> <li><a href="https://www.youtube.com/user/ErnstandYoungGlobal/">YouTube</a></li> </ul> </div> </div> <hr> <p>© 2015 Ernst &amp; Young. All rights reserved.</p> <p class="details">EY refers to the global organization, and may refer to one or more, of the member firms of Ernst &amp; Young Global Limited, each of which is a separate legal entity. Ernst &amp; Young Global Limited, a UK company limited by guarantee, does not provide services to clients.</p> </footer>');
 }
});



$(function() {
  // $("#main-nav").on("change", function() {

    $("#openmenu").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
        $(".main-nav .modal-fade-screen").addClass("makevisible");
        $("#openmenu").addClass("modal-close");
      } else {
        $("body").removeClass("modal-open");
        $(".main-nav .modal-fade-screen").removeClass("makevisible");
        $("#openmenu").removeClass("modal-close");
      }
    });

    $(".main-nav .modal-fade-screen, .main-nav input.modal-close, #mobilemenu li").on("click", function() {
      $(".main-nav .modal-fade-screen").removeClass("makevisible");
      $("#openmenu").removeClass("modal-close");
      $("#openmenu:checked").prop("checked", false).change();
    });

    // $(".modal-inner").on("click", function(e) {
    //   e.stopPropagation();
    // });


});

$(window).load(function() {
  $( '<li><a href="/GL/en/Services/Advisory/Advisory---home" class="subnav-link advisory-home-link">Advisory home</a></li>' ).insertBefore( '.article-subnav li:first-child' );
  $('.article-subnav > li').wrapAll('<ul class="localnav" />');

});


$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});

$(document).ready(function () {
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


$(document).ready(function(){
  var expanderTrigger1 = document.getElementById("js-expander-trigger1");
  var expanderContent1 = document.getElementById("js-expander-content1");
  var expanderTrigger2 = document.getElementById("js-expander-trigger2");
  var expanderContent2 = document.getElementById("js-expander-content2");
  var expanderTrigger3 = document.getElementById("js-expander-trigger3");
  var expanderContent3 = document.getElementById("js-expander-content3");

  $('#js-expander-trigger1').click(function(){
    $(this).toggleClass('expander-hidden1');
  });

  $('#js-expander-trigger2').click(function(){
    $(this).toggleClass('expander-hidden2');
  });

  $('#js-expander-trigger3').click(function(){
    $(this).toggleClass('expander-hidden3');
  });
});


$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});


/**
 * jquery.cbpQTRotator.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function(c, b, e) {
    var d = b.Modernizr;
    c.CBPQTRotator = function(f, g) {
        this.$el = c(g);
        this._init(f)
    };
    c.CBPQTRotator.defaults = {
        speed: 800,
        easing: "ease",
        interval: 8000
    };
    c.CBPQTRotator.prototype = {
        _init: function(f) {
            this.options = c.extend(true, {}, c.CBPQTRotator.defaults, f);
            this._config();
            this.$items.eq(this.current).addClass("cbp-qtcurrent");
            if (this.support) {
                this._setTransition()
            }
            this._startRotator()
        },
        _config: function() {
            this.$items = this.$el.children("div.cbp-qtcontent");
            this.itemsCount = this.$items.length;
            this.current = 0;
            this.support = d.csstransitions;
            if (this.support) {
                this.$progress = c('<span class="cbp-qtprogress"></span>').appendTo(this.$el)
            }
        },
        _setTransition: function() {
            setTimeout(c.proxy(function() {
                this.$items.css("transition", "opacity " + this.options.speed + "ms " + this.options.easing)
            }, this), 25)
        },
        _startRotator: function() {
            if (this.support) {
                this._startProgress()
            }
            setTimeout(c.proxy(function() {
                if (this.support) {
                    this._resetProgress()
                }
                this._next();
                this._startRotator()
            }, this), this.options.interval)
        },
        _next: function() {
            this.$items.eq(this.current).removeClass("cbp-qtcurrent");
            this.current = this.current < this.itemsCount - 1 ? this.current + 1 : 0;
            this.$items.eq(this.current).addClass("cbp-qtcurrent")
        },
        _startProgress: function() {
            setTimeout(c.proxy(function() {
                this.$progress.css({
                    transition: "width " + this.options.interval + "ms linear",
                    width: "100%"
                })
            }, this), 25)
        },
        _resetProgress: function() {
            this.$progress.css({
                transition: "none",
                width: "0%"
            })
        },
        destroy: function() {
            if (this.support) {
                this.$items.css("transition", "none");
                this.$progress.remove()
            }
            this.$items.removeClass("cbp-qtcurrent").css({
                position: "relative",
                "z-index": 100,
                "pointer-events": "auto",
                opacity: 1
            })
        }
    };
    var a = function(f) {
        if (b.console) {
            b.console.error(f)
        }
    };
    c.fn.cbpQTRotator = function(g) {
        if (typeof g === "string") {
            var f = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var h = c.data(this, "cbpQTRotator");
                if (!h) {
                    a("cannot call methods on cbpQTRotator prior to initialization; attempted to call method '" + g + "'");
                    return
                }
                if (!c.isFunction(h[g]) || g.charAt(0) === "_") {
                    a("no such method '" + g + "' for cbpQTRotator instance");
                    return
                }
                h[g].apply(h, f)
            })
        } else {
            this.each(function() {
                var h = c.data(this, "cbpQTRotator");
                if (h) {
                    h._init()
                } else {
                    h = c.data(this, "cbpQTRotator", new c.CBPQTRotator(g, this))
                }
            })
        }
        return this
    }
})(jQuery, window);


/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.0
 */
;(function(l){'use strict';l(['jquery'],function($){var k=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};k.defaults={axis:'xy',duration:0,limit:true};function isWin(a){return!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1}$.fn.scrollTo=function(f,g,h){if(typeof g==='object'){h=g;g=0}if(typeof h==='function'){h={onAfter:h}}if(f==='max'){f=9e9}h=$.extend({},k.defaults,h);g=g||h.duration;var j=h.queue&&h.axis.length>1;if(j){g/=2}h.offset=both(h.offset);h.over=both(h.over);return this.each(function(){if(f===null)return;var d=isWin(this),elem=d?this.contentWindow||window:this,$elem=$(elem),targ=f,attr={},toff;switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=d?$(targ):$(targ,elem);if(!targ.length)return;case'object':if(targ.is||targ.style){toff=(targ=$(targ)).offset()}}var e=$.isFunction(h.offset)&&h.offset(elem,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a==='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,prev=$elem[key](),max=k.max(elem,a);if(toff){attr[key]=toff[pos]+(d?0:prev-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b),10)||0;attr[key]-=parseInt(targ.css('border'+b+'Width'),10)||0}attr[key]+=e[pos]||0;if(h.over[pos]){attr[key]+=targ[a==='x'?'width':'height']()*h.over[pos]}}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)==='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max)}if(!i&&h.axis.length>1){if(prev===attr[key]){attr={}}else if(j){animate(h.onAfterFirst);attr={}}}});animate(h.onAfter);function animate(a){var b=$.extend({},h,{queue:true,duration:g,complete:a&&function(){a.call(elem,targ,h)}});$elem.animate(attr,b)}})};k.max=function(a,b){var c=b==='x'?'Width':'Height',scroll='scroll'+c;if(!isWin(a))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,doc=a.ownerDocument||a.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var a=this.get(t);if(t.options.interrupt&&t._last&&t._last!==a){return $(t.elem).stop()}var b=Math.round(t.now);if(a!==b){$(t.elem)[t.prop](b);t._last=this.get(t)}}};return k})}(typeof define==='function'&&define.amd?define:function(a,b){'use strict';if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));


/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});

/*! test */
// @codekit-prepend "../js/imports/_insertnav.js";
// @codekit-prepend "../js/imports/_neat-navigation.js";
// @codekit-prepend "../js/imports/_neat-tabs.js";
// @codekit-prepend "../js/imports/_neat-expander.js";
// @codekit-prepend "../js/imports/_neat-sliding-panel.js";
// !codekit-prepend "../js/imports/flickity.pkgd.js";
// @codekit-prepend "../js/imports/_jquery.cbpQTRotator.min.js";
// @codekit-prepend "../js/imports/_jquery.scrollTo.min.js";
// @codekit-prepend "../js/imports/_enquire.min.js";

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

var themeCountry = 'GL';
var themeLang = 'en';
var organization = 'Ernst & Young';
var mailTosubject = 'I thought you might be interested in this.';
var secureHostName = 'webforms.ey.com';


$(document).ready(function($) {

  if(document.location.href.toLowerCase().indexOf('home') !== -1) {
   // execute home page only code
  //  $('.socialshare').insertAfter($('.navigation-wrapper .logo'));
  //  $('.smnt-inner').clone().appendTo('.fakenav').removeClass('smnt-inner');
 }
 else {
   // execute for pages other than home
  //  $('.socialshare').prependTo($('.type-system-ey'));
 }

 $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');

  // Find tallest item in rotator and set height using js
  var maxHeight = -1;

  $('.cbp-qtcontent').each(function() {
    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
  });

  $('.cbp-qtcontent').each(function() {
    $(this).height(maxHeight);
  });



  /* fixes z-index issue on Youtube video*/
  $('iframe').each(function(){
    var url = $(this).attr("src");
    $(this).attr("src",url+"?wmode=transparent");
  });

     //check if .darklogo element exists then set .darklogo class on body
     //just add an element <div class="darklogo" /> in the body somewhere
     //used on pages where the readability of the logo suffers
     if ($('.darklogo').length) {
      $('body').addClass('darklogo');
    } else {

    }


    $("#accordion").accordion({
      collapsible: true,
      active: 'none',
      heightStyle: "content"
    });

    if(document.location.href.toLowerCase().indexOf('home') !== -1) {
      var bottom = $('.eyhero-home').position().top + $('.eyhero-home').outerHeight(true);
    }



    var scroll = getCurrentScroll();
    if (scroll >= bottom) {
      $('.navigation').addClass('smallnav');
    }
  });

$(function() {

  if(document.location.href.toLowerCase().indexOf('home') !== -1) {
    var bottom = $('.eyhero-home').position().top + $('.eyhero-home').outerHeight(true);
  }

  var scrolledAmount = bottom;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if (scroll >= scrolledAmount) {
      $('.navigation').addClass('smallnav');
    } else {
      $('.navigation').removeClass('smallnav');
    }
  });
});



// enquireJS - fire js using media queries
(function(){
 // enquire.register("screen and (min-width: 42em)", {
   enquire.register("screen and (min-width: 48em)", {
     setup : function() {
         // Load in content via AJAX (just the once)
       },
       // Matches Desktop
       match : function() {
         // scrollTo plugin
         $(document).ready(function() {
           $('a[href^="#"]').click(function(e) {
             e.preventDefault();
             $(window).stop(true).scrollTo(this.hash, {axis: 'y', interrupt: false, duration:1000, offset:-50});
           });
         });
       },
       // Matches Mobile
       unmatch : function() {
        if(document.location.href.toLowerCase().indexOf('home') !== -1) {
          $('.eynavigation > nav > *').wrapAll('<div id="eymainmenu">');
          $('.smnt-inner > a').wrapAll('<ul id="mobilemenu">').wrap('<li>');
          $('#mobilemenu').prependTo('nav[role="navigation"]');
        // $('#mobilemenu').before('#eymainmenu');
           // do stuff
         } else {
          $('.eynavigation > nav > *').wrapAll('<div id="eymainmenu">');
          $('.article-subnav').prependTo('nav[role="navigation"]');
          // $('#mobilemenu').prependTo('nav[role="navigation"]');

        }
      }
    });

})();


