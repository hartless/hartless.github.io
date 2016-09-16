/*BH - edited main menu*/
/*JFL 01/15/2016*/
// add Analytics once into this file

/*
Analytics class
Updated: 2015-05-27

Includes Google Analytics script
*/
var Analytics={PDF:{Category:"PDFs",Action:"Download"},SHARE:{Category:"Social share",Action:"Share"},VIDEO:{Category:"Video",Action:"Play"},INFOGRAPHIC:{Category:"Infographic",Action:"View"},READMORE:{Category:"ReadMore",Action:"Read"},CONNECT:{Category:"Connect with us",Action:"Connect"},WEBCAST:{Category:"Webcast",DefaultAction:"Register or watch",RegisterAction:"Register",WatchLiveAction:"Watch live",WatchOndemandAction:"Watch on-demand"},LANGUAGE:{Category:"Language",Action:"Switch"},SECTION:{Category:"Section", Action:"Open"},TOPIC:{Category:"Topic",Action:"Select"},SCROLL:{Category:"View",Action:"Scroll"},CONTACTUS:{Category:"ContactUs",Action:"Name"},TWITTERHASH:{Category:"Twitter HashTag",Action:"Hash search"},OUTBOUND:{Category:"Outbound",Action:"click"},IOM:{Category:"IOM",Action:"Navigate"},TEST_PROPERTY:"UA-39529843-6",CLASSIC:"classic",UNIVERSAL:"universal",SOCIAL:{FACEBOOK:"facebook",TWITTER:"twitter",LINKEDIN:"linkedin",GOOGLE:"google",STUMBLEUPON:"stumbleupon",DIGG:"digg"},isProduction:-1==location.href.indexOf("localhost")&& -1==location.href.indexOf("file:///C:")&&-1==location.href.indexOf("echannelprpvw.iweb"),accountType:null,trackHash:!1},_gaq=_gaq||[],ga=null; Analytics.AddProperty=function(a,b,c){b=null==b?null==Analytics.accountType?Analytics.CLASSIC:Analytics.accountType:b;c=null==c?"ey.com":c;if(b==Analytics.CLASSIC)Analytics.isProduction&&null==Analytics.accountType&&(Analytics.accountType=b,_gaq.push(["_setAccount",a]),Analytics.TrackPageView(),ga=document.createElement("script"),ga.type="text/javascript",ga.async=!0,ga.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",b=document.getElementsByTagName("script")[0], b.parentNode.insertBefore(ga,b));else if(b==Analytics.UNIVERSAL&&Analytics.isProduction)if(null==Analytics.accountType){Analytics.accountType=b;window.GoogleAnalyticsObject="ga";ga=function(){(ga.q=ga.q||[]).push(arguments)};ga.l=1*new Date;b=document.createElement("script");var d=document.getElementsByTagName("script")[0];b.async=1;b.src="//www.google-analytics.com/analytics.js";d.parentNode.insertBefore(b,d);ga("create",a,c);Analytics.TrackPageView()}else"function"==typeof ga&&(ga("create",a,c), ga("send","pageview"))};Analytics.AddAccount=function(a,b,c){Analytics.AddProperty(a,b,c)};Analytics.AddToken=function(a,b,c){Analytics.AddProperty(a,b,c)};Analytics.AddUniversalProperty=function(a,b){Analytics.AddProperty(a,Analytics.UNIVERSAL,b)}; Analytics.TrackPageView=function(){Analytics.accountType==Analytics.CLASSIC?Analytics.trackHash?_gaq.push(["_trackPageview",location.pathname+location.search+location.hash]):_gaq.push(["_trackPageview"]):Analytics.accountType==Analytics.UNIVERSAL&&ga&&(Analytics.trackHash?ga("send","pageview",location.pathname+location.search+location.hash):ga("send","pageview"))}; Analytics.TrackEvent=function(a,b,c,d){if(Analytics.isProduction){null==b&&(b="clicked");try{Analytics.accountType==Analytics.CLASSIC?_gaq.push(["_trackEvent",a,b,c,d]):Analytics.accountType==Analytics.UNIVERSAL&&ga("send","event",a,b,c,d)}catch(e){}}};Analytics.TrackSocialInteraction=function(a,b,c){ga("send","social",a,b,c)};Analytics.EnableHashTracking=function(){Analytics.trackHash=!0;try{$(window).hashchange(function(){Analytics.TrackPageView()})}catch(a){window.onhashchange=Analytics.TrackPageView}}; Analytics.TestMode=function(){Analytics.isProduction=!0};Analytics.TrackAll=function(){0==jQuery.isReady?$(document).ready(function(){Analytics.TrackAll()}):(Analytics.TrackPDFs(),Analytics.TrackSocialShare(),Analytics.TrackConnectWithUs())}; Analytics.TrackPDFs=function(){0==jQuery.isReady?$(document).ready(function(){Analytics.TrackPDFs()}):$('a[href*=".pdf"]').click(function(){try{var a=$(this).attr("href"),a=a.substring(Math.max(0,a.lastIndexOf("/")+1));Analytics.TrackEvent(Analytics.PDF.Category,Analytics.PDF.Action,a)}catch(b){}})}; Analytics.TrackSocialShare=function(){0==jQuery.isReady?$(document).ready(function(){Analytics.TrackSocialShare()}):Analytics.accountType==Analytics.CLASSIC?$(".socialshare a").click(function(){Analytics.TrackEvent(Analytics.SHARE.Category,Analytics.SHARE.Action,$(this).attr("title"))}):Analytics.accountType==Analytics.UNIVERSAL&&$(".socialshare a").click(function(){"Facebook"==$(this).attr("title")?Analytics.TrackSocialInteraction(Analytics.SOCIAL.FACEBOOK,Analytics.SHARE.Action,null):"Twitter"== $(this).attr("title")?Analytics.TrackSocialInteraction(Analytics.SOCIAL.TWITTER,Analytics.SHARE.Action,null):"Linkedin"==$(this).attr("title")?Analytics.TrackSocialInteraction(Analytics.SOCIAL.LINKEDIN,Analytics.SHARE.Action,null):"Google+"==$(this).attr("title")?Analytics.TrackSocialInteraction(Analytics.SOCIAL.GOOGLE,Analytics.SHARE.Action,null):"Digg"==$(this).attr("title")?Analytics.TrackSocialInteraction(Analytics.SOCIAL.DIGG,Analytics.SHARE.Action,null):"Stumbleupon"==$(this).attr("title")&& Analytics.TrackSocialInteraction(Analytics.SOCIAL.STUMBLEUPON,Analytics.SHARE.Action,null)})};Analytics.TrackConnectWithUs=function(){0==jQuery.isReady?$(document).ready(function(){Analytics.TrackConnectWithUs()}):$(".connectwithus a").click(function(){Analytics.TrackEvent(Analytics.CONNECT.Category,Analytics.CONNECT.Action,$(this).attr("title"))})};Analytics.TrackAnchorLink=function(a){Analytics.TrackEvent(window.location.hash)}; Analytics.TrackVideoPlay=function(a){Analytics.TrackEvent(Analytics.VIDEO.Category,Analytics.VIDEO.Action,String(a))};Analytics.TrackInfographic=function(a){Analytics.TrackEvent(Analytics.INFOGRAPHIC.Category,Analytics.INFOGRAPHIC.Action,a)};Analytics.TrackReadMore=function(a){Analytics.TrackEvent(Analytics.READMORE.Category,Analytics.READMORE.Action,a)};Analytics.TrackSection=function(a){Analytics.TrackEvent(Analytics.SECTION.Category,Analytics.SECTION.Action,a)}; Analytics.TrackTopic=function(a){Analytics.TrackEvent(Analytics.TOPIC.Category,Analytics.TOPIC.Action,a)};Analytics.TrackWebcast=function(a,b){null==b&&(b=Analytics.WEBCAST.Action);Analytics.TrackEvent(Analytics.WEBCAST.Category,b,a)};Analytics.TrackLanguage=function(a){Analytics.TrackEvent(Analytics.LANGUAGE.Category,Analytics.LANGUAGE.Action,a)};Analytics.TrackContactUs=function(a){Analytics.TrackEvent(Analytics.CONTACTUS.Category,Analytics.CONTACTUS.Action,a)}; Analytics.TrackTwitterHash=function(a){Analytics.TrackEvent(Analytics.TWITTERHASH.Category,Analytics.TWITTERHASH.Action,a)};Analytics.TrackOutboundLink=function(a,b){var c=$(a).attr("href");null!=c&&0==c.indexOf("http")&&(c=$(a).text(),null!=c&&0<c.length&&Analytics.TrackEvent(Analytics.OUTBOUND.Category,"click",(null!=b?b+": ":"")+c))};Analytics.TrackLink=function(a,b,c){}; Analytics.TrackIOMNavigate=function(a,b){var c;if(null!=b)c=b;else{c=null!=a&&null!=a.childNodes&&0<a.childNodes.length?a.childNodes[0].nodeValue:$(a).text();if(null==c||""==c)c=$(a).data("label");if(null==c||""==c)c=$(a).text()}Analytics.TrackEvent(Analytics.IOM.Category,Analytics.IOM.Action,c)};



/* Global Review 2015 JavaScript
 * Last update 28 January 2016 11:20 PM EST - JD
 */

var themeCountry = "GL";
var themeLang = 'en';
var organization = 'Ernst & Young';
var secureHostName = 'webforms.ey.com';
var mailTosubject = 'I thought you might be interested in this.';

$(document).ready(function($) {

  Analytics.AddAccount("UA-57574987-1");
  Analytics.TrackAll();

  $(document).foundation();

  $(function() {
    var header = $('.is-static');
    var firstSection = $('.section1');
    var heroHeight = $('.grcover').outerHeight();
    var menuHeight = $('.is-static').outerHeight();

    $(header).css({
      "position": "absolute",
      "top": heroHeight
    });

    $(window).scroll(function() {

      var scroll = $(window).scrollTop();

      if (scroll >= heroHeight) {
        if (header.hasClass('is-static')) {
          header.removeClass('is-static')
          .addClass('is-fixed')
          .css({
            'position': '',
            'top': ''
          });

        }
      } else {
        if (header.hasClass('is-fixed')) {
          header.removeClass('is-fixed')
          .addClass('is-static');
          $(header).css({
            "position": "absolute",
            "top": heroHeight
          });
        }
      }
    });
  });


  /* fixes z-index issue on Youtube video*/
  $('iframe').each(function() {
    var url = $(this).attr("src");
    $(this).attr("src", url + "?wmode=transparent");
  });

  // when clicking an item in menu, close the overlay
  $('.mainnav a').click(function(event) {
    $('.close-button').click();
  });
});

// os-animation scroll function
// http://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
function onScrollInit(items, trigger) {
  items.each(function() {
    var osElement = $(this),
    osAnimationClass = osElement.attr('data-os-animation'),
    osAnimationDelay = osElement.attr('data-os-animation-delay');

    osElement.css({
      '-webkit-animation-delay': osAnimationDelay,
      '-moz-animation-delay': osAnimationDelay,
      'animation-delay': osAnimationDelay
    });

    var osTrigger = (trigger) ? trigger : osElement;

    osTrigger.waypoint(function() {
      osElement.addClass('animated').toggleClass(osAnimationClass);
      this.destroy()
    }, {
      offset: '90%'
    });
  });
}

jQuery(document).ready(function($) {

  $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">');
  $('body').addClass('l2page').prepend('<div id="mainNav" class="hide-menu">');

  // replace existing local nav with updated menu
  $('.top-bar-right .menu').html('<ul class="menu"> <li><a href="/GL/en/About-us/Our-global-approach/Global-review/Global-Review-2015---home#chairmans-letter">Welcome</a> </li> <li><a href="/GL/en/About-us/Our-global-approach/Global-review/Global-Review-2015---home#megatrends">Global <br>disruptive forces</a></li> <li><a href="/GL/en/About-us/Our-global-approach/Global-review/Global-Review-2015---home#services">Adapting to a<br>world in motion</a></li> <li><a href="/GL/en/About-us/Our-global-approach/Global-review/Global-Review-2015---home#facts">Facts <br>and figures</a></li> </ul>');

  // add link to GR home
  $('.menu-text.gr-logo img').wrap('<a href="/GL/en/About-us/Our-global-approach/Global-review/Global-Review-2015---home" />');

  // insert nav and footer
  // $('#mainNav').html('<nav role="navigation"> <div class="navgroup"> <h3><a href="http://www.ey.com">EY Home</a><br></h3> <h3><a href="/GL/en/Issues">Insights</a></h3> <ul> <li><a href="/GL/en/Issues/Business-environment">Business environment</a></li> <li><a href="/GL/en/Issues/Driving-growth">Driving growth</a></li> <li><a href="/GL/en/Issues/Governance-and-reporting">Governance and reporting</a></li> <li><a href="/GL/en/Issues/IFRS">IFRS</a></li> <li><a href="/GL/en/Issues/Managing-finance">Managing finance</a></li> <li><a href="/GL/en/Issues/Managing-risk">Managing risk</a></li> <li><a href="/GL/en/Issues/Operational-effectiveness">Operational effectiveness</a></li> <li><a href="/GL/en/Issues/Talent-management">Talent management</a></li> <li><a href="/GL/en/Issues/Capital-and-transactions">Capital and transactions</a></li> </ul> </div> <div class="navgroup"> <h3><a href="/GL/en/Industries">Industries</a></h3> <ul> <li><a href="/GL/en/Industries/Automotive">Automotive &amp; Transportation</a></li> <li><a href="/GL/en/Industries/Consumer-Products">Consumer Products &amp; Retail</a></li> <li><a href="/GL/en/Industries/Financial-Services">Financial Services</a></li> <li><a href="/GL/en/Industries/Government---Public-Sector">Government &amp; Public Sector</a></li> <li><a href="/GL/en/Industries/Health">Health</a></li> <li><a href="/GL/en/Industries/Life-Sciences">Life Sciences</a></li> <li><a href="/GL/en/Industries/Media---Entertainment">Media &amp; Entertainment </a></li> <li><a href="/GL/en/Industries/Mining---Metals">Mining &amp; Metals</a></li> <li><a href="/GL/en/Industries/Oil---Gas">Oil &amp; Gas</a></li> <li><a href="/GL/en/Industries/Power---Utilities">Power &amp; Utilities</a></li> <li><a href="/GL/en/Industries/Private-Equity">Private Equity</a></li> <li><a href="/GL/en/Industries/Real-Estate">Real Estate, Hospitality &amp; Construction</a></li> <li><a href="/GL/en/Industries/Technology">Technology</a></li> <li><a href="/GL/en/Industries/Telecommunications">Telecommunications</a></li> </ul> </div> <div class="navgroup"> <h3><a href="/GL/en/Services">Services</a></h3> <ul> <li><a href="/GL/en/Services/Advisory">Advisory</a></li> <li><a href="/GL/en/Services/Assurance">Assurance</a></li> <li><a href="/GL/en/Services/Tax">Tax</a></li> <li><a href="/GL/en/Services/Transactions">Transactions</a></li> <li><a href="/GL/en/Services/Strategic-Growth-Markets">Strategic Growth Markets</a></li> <li><a href="/GL/en/Services/Specialty-Services">Specialty Services</a></li> </ul> <h3><a href="/GL/en/Newsroom">Newsroom</a></h3> <ul> <li><a href="/GL/en/Newsroom/PR-contacts">PR contacts</a></li> <li><a href="/GL/en/Newsroom/PR-activities">PR activities</a></li> <li><a href="/GL/en/Newsroom/Analyst-Relations">Analyst relations</a></li> <li><a href="/GL/en/Newsroom/Facts-and-figures">Facts and figures</a></li> </ul> </div> <div class="navgroup last"> <h3><a href="/GL/en/Careers">Careers</a></h3> <ul> <li><a href="/GL/en/Careers/Students">Students</a></li> <li><a href="/GL/en/Careers/Experienced">Experienced</a></li> </ul> <h3><a href="/GL/en/About-us">About us</a></h3> <ul> <li><a href="/GL/en/About-us/Our-values">Our values</a></li> <li><a href="/GL/en/About-us/Our-global-approach">Our global approach</a></li> <li><a href="/GL/en/About-us/Entrepreneurship">Entrepreneurship</a></li> <li><a href="/GL/en/About-us/Our-people-and-culture">Our people and culture</a></li> <li><a href="/GL/en/About-us/Corporate-Responsibility">Corporate responsibility</a></li> <li><a href="/GL/en/About-us/EY-Ethics-hotline">EY/Ethics hotline</a></li> </ul> </div> <div class="clear"></div> </nav>');
  $('#mainNav').html('<nav role="navigation"> <div class="navgroup"> <h3><a href="http://www.ey.com">EY Home</a><br></h3> <h3><a href="/GL/en/Issues">Insights</a></h3> <ul> <li><a href="/GL/en/Issues/Insights#browse-by-role">Browse by role</a></li> <li><a href="/GL/en/Issues/Insights#browse-by-topic">Browse by topic</a></li> <li><a href="/GL/en/Issues/Insights#browse-by-megatrends">Browse by megatrends</a></li> </ul> </div> <div class="navgroup"> <h3><a href="/GL/en/Industries">Industries</a></h3> <ul> <li><a href="/GL/en/Industries/Automotive">Automotive &amp; Transportation</a></li> <li><a href="/GL/en/Industries/Consumer-Products">Consumer Products &amp; Retail</a></li> <li><a href="/GL/en/Industries/Financial-Services">Financial Services</a></li> <li><a href="/GL/en/Industries/Government---Public-Sector">Government &amp; Public Sector</a></li> <li><a href="/GL/en/Industries/Health">Health</a></li> <li><a href="/GL/en/Industries/Life-Sciences">Life Sciences</a></li> <li><a href="/GL/en/Industries/Media---Entertainment">Media &amp; Entertainment </a></li> <li><a href="/GL/en/Industries/Mining---Metals">Mining &amp; Metals</a></li> <li><a href="/GL/en/Industries/Oil---Gas">Oil &amp; Gas</a></li> <li><a href="/GL/en/Industries/Power---Utilities">Power &amp; Utilities</a></li> <li><a href="/GL/en/Industries/Private-Equity">Private Equity</a></li> <li><a href="/GL/en/Industries/Real-Estate">Real Estate, Hospitality &amp; Construction</a></li> <li><a href="/GL/en/Industries/Technology">Technology</a></li> <li><a href="/GL/en/Industries/Telecommunications">Telecommunications</a></li> </ul> </div> <div class="navgroup"> <h3><a href="/GL/en/Services">Services</a></h3> <ul> <li><a href="/GL/en/Services/Advisory">Advisory</a></li> <li><a href="/GL/en/Services/Assurance">Assurance</a></li> <li><a href="/GL/en/Services/Tax">Tax</a></li> <li><a href="/GL/en/Services/Transactions">Transactions</a></li> <li><a href="/GL/en/Services/Strategic-Growth-Markets">Strategic Growth Markets</a></li> <li><a href="/GL/en/Services/Specialty-Services">Specialty Services</a></li> </ul> <h3><a href="/GL/en/Newsroom">Newsroom</a></h3> <ul> <li><a href="/GL/en/Newsroom/PR-contacts">PR contacts</a></li> <li><a href="/GL/en/Newsroom/PR-activities">PR activities</a></li> <li><a href="/GL/en/Newsroom/Analyst-Relations">Analyst relations</a></li> <li><a href="/GL/en/Newsroom/Facts-and-figures">Facts and figures</a></li> </ul> </div> <div class="navgroup last"> <h3><a href="/GL/en/Careers">Careers</a></h3> <ul> <li><a href="/GL/en/Careers/Students">Students</a></li> <li><a href="/GL/en/Careers/Experienced">Experienced</a></li> </ul> <h3><a href="/GL/en/About-us">About us</a></h3> <ul> <li><a href="/GL/en/About-us/Our-values">Our values</a></li> <li><a href="/GL/en/About-us/Our-global-approach">Our global approach</a></li> <li><a href="/GL/en/About-us/Entrepreneurship">Entrepreneurship</a></li> <li><a href="/GL/en/About-us/Our-people-and-culture">Our people and culture</a></li> <li><a href="/GL/en/About-us/Corporate-Responsibility">Corporate responsibility</a></li> <li><a href="/GL/en/About-us/EY-Ethics-hotline">EY/Ethics hotline</a></li> </ul> <h3><a href="/GL/en/Alumni">Alumni</a></h3> </div> <div class="clear"></div> </nav>');
  $('#footer').html('<footer class="footer" role="contentinfo"> <div class="footer-logo"> <img src="http://cdn.ey.com/branding/svg_logos/EY_Logo-w.svg" alt="EY Logo"> </div> <div class="footer-links"> <div class="container"> <ul> <li> <h3></h3></li> <li><a href="/US/en/home/privacy">Privacy</a></li> <li><a href="http://www.ey.com/GL/en/Home/EY-Data-Protection-Binding-Corporate-Rules-Program">BCR</a></li> <li><a href="/US/en/Home/Ernst_Young_Global_Accessibility_statement">Accessibility</a></li> <li><a href="http://www.ey.com/GL/en/home/legal">Legal</a></li> </ul> <ul> <li> <h3></h3></li> <li><a href="/US/en/SiteMap">Site map</a></li> <li><a href="http://www.ey.com/US/en/ourlocations">Our locations</a></li> <li class="last"><a href="/US/en/Home/Home-ContactUs">Contact us</a></li> <li><a href="/US/en/home/Global-Code-of-Conduct">Global Code of Conduct</a></li> </ul> <ul> <li> <h3></h3></li> <li><a href="https://www.facebook.com/EY-195665063800329/">Facebook</a></li> <li><a href="https://www.linkedin.com/company/ernstandyoung">LinkedIn</a></li> <li><a href="http://twitter.com/EYnews">Twitter</a></li> <li><a href="https://www.youtube.com/user/ErnstandYoungGlobal/">YouTube</a></li> </ul> </div> </div> <hr> <p>©2016 Ernst &amp; Young. All rights reserved.</p> <p class="details">EY refers to the global organization, and may refer to one or more, of the member firms of Ernst &amp; Young Global Limited, each of which is a separate legal entity. Ernst &amp; Young Global Limited, a UK company limited by guarantee, does not provide services to clients.</p> </footer>');

  // menu trigger
  $('.menu-icon').click(function(event) {
    $('#mainNav').toggleClass('show-menu hide-menu');
  });

  $('#mainNav .menu a').click(function(event) {
    console.log('Menu item clicked');
    $('#mainNav').toggleClass('show-menu hide-menu');
  });


// animate sections in using waypoints
$('.l2page > section').addClass('os-animation').attr('data-os-animation','fadeInUp');
//onScrollInit($('.os-animation'));
//onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));
});

// Move menu according to viewport width
function insertNav () {
  if (window.matchMedia("(max-width: 1165px)").matches) {
    $('.top-bar-right .menu').prependTo('#mainNav nav');
    $('.socialshare').prependTo('#mainNav nav');
  } else {
    $('#mainNav .menu').prependTo('.top-bar-right');
    $('.socialshare').prependTo('.top-bar-right');
  }
}

$(window).load(function() {
  insertNav();
});

$(window).resize(function() {
  insertNav();
});

var chartPercent = '';
var chartParentWidth = '';
var chartWidth = '';

function chartsAnimation() {

  chartPercent = 1;
  chartParentWidth = $('.glance-service-line-chart-row-1').parent().width();
  chartWidth = (chartPercent * chartParentWidth)+'px';

  $('.glance-heading-service-line-growth').fadeIn('fast');
  $('.glance-service-line-chart-row-1').show().animate({
    'width': chartWidth}, 800, function() {
      $('.glance-service-line-chart-growth-1').fadeIn('fast');
      chartPercent = .66;
      chartWidth = (chartPercent * chartParentWidth)+'px';
      $('.glance-service-line-chart-row-2').show().animate({
        'width': chartWidth}, 600, function() {
          $('.glance-service-line-chart-growth-2').fadeIn('fast');
          chartPercent = .64;
          chartWidth = (chartPercent * chartParentWidth)+'px';
          $('.glance-service-line-chart-row-3').show().animate({
            'width': chartWidth}, 600, function() {
              $('.glance-service-line-chart-growth-3').fadeIn('fast');
              chartPercent = .24;
              chartWidth = (chartPercent * chartParentWidth)+'px';
              $('.glance-service-line-chart-row-4').show().animate({
                'width': chartWidth}, 400, function() {
                  $('.glance-service-line-chart-growth-4').fadeIn('fast');

                  $('.glance-heading-growth-in-our-areas').fadeIn('fast');
                  chartPercent = 1;
                  chartWidth = (chartPercent * chartParentWidth)+'px';
                  $('.glance-areas-chart-row-1').show().animate({
                    'width': chartWidth}, 800, function() {
                      $('.glance-areas-chart-growth-1').fadeIn('fast');
                      chartPercent = .94;
                      chartWidth = (chartPercent * chartParentWidth)+'px';
                      $('.glance-areas-chart-row-2').show().animate({
                        'width': chartWidth}, 700, function() {
                          $('.glance-areas-chart-growth-2').fadeIn('fast');
                          chartPercent = .24;
                          chartWidth = (chartPercent * chartParentWidth)+'px';
                          $('.glance-areas-chart-row-3').show().animate({
                            'width': chartWidth}, 500, function() {
                              $('.glance-areas-chart-growth-3').fadeIn('fast');
                              chartPercent = .08;
                              chartWidth = (chartPercent * chartParentWidth)+'px';
                              $('.glance-areas-chart-row-4').show().animate({
                                'width': chartWidth}, 300, function() {
                                  $('.glance-areas-chart-growth-4').fadeIn('fast');

                                  //$('.glance-heading-2015-highlights, .highlights-stats-outer-wrapper').fadeIn('slow');

                                });

                            });

                        });

});

});

});

});

});
}

$(document).ready(function(){

  var runOnceChartAnim = false;

  var waypointChart = $('.section-chart').waypoint({
    offset: '20%',
    handler: function(direction) {
      if (runOnceChartAnim === false) {

        chartsAnimation();
        runOnceChartAnim === true;
      }
    }

  });


// From Jean-Francois

//get current page url
var page = $('#homepage').length;

//test if page is homepage and set click rules only for homepage, !! don't change page name
if ( page > 0 ){

  //target menu links
  $('a',$('ul.menu')).on('click', function(e){

    //remove defalult behavior
    e.preventDefault();

    $('#mainNav').removeClass('show-menu').addClass('hide-menu');

    //get #hash from href
    var str = $(this).attr('href');
    var n = str.lastIndexOf('#');
    var section = str.substring(n + 1);

    //get section offset top
    var goToSection = $('#'+section).offset().top;

    goToSection -= 50;

    //animate body to to right section
    $('html, body').animate({

      scrollTop: goToSection

    }, 800, //you can adjust speed here

    function(){ window.location.hash = '#'+section; //callback modify hash after animation

    });
  });

  //get page Hash #
  var anchor = document.location.hash;

  if(anchor !== "" && anchor !== null && anchor !== "undefined"){

    setTimeout(function(){
      var goToSection = $(anchor).offset().top;

      goToSection -= 50;

      //animate body to to right section
      $('html, body').animate({

        scrollTop: goToSection

        }, 800 //you can adjust speed here

      );
    }, 500);

  }

}

});
