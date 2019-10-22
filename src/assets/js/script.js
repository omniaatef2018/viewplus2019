
$(document).ready(function(){
    //   start local storage
    document.getElementById('darkbutton').addEventListener('click',function(){
    let  darkThemeEnabled = document.body.classList.toggle('dark-mood');
    localStorage.setItem('dark-theme-enabled',darkThemeEnabled);
    });
    if (localStorage.getItem('dark-theme-enabled') == "true")
    {
        document.body.classList.add("dark-mood");
    }
    if (localStorage.getItem('dark-theme-enabled') == "false") {
        document.body.classList.remove("dark-mood");
    }
    $(".toggle-img .in-active img").hover(function(){
        $(this).hide();
        $(this).parent().parent().children(".active-img").show(1000);
        $(this).parent().siblings(".active-img").hide(1000);
    });
    $("#package-btn").click(function(){
        $("#services-btn").css({"background":"#e8e8e8","color":"#000"});
        $("#services-btn").removeClass("animationClass");
        $(this).addClass("animationClass");
    });
    $("#services-btn").click(function(){
        $("#package-btn").css({"background":"#e8e8e8","color":"#000"});
        $("#package-btn").removeClass("animationClass");
        $(this).addClass("animationClass");
    });
    $(".dark-mood #package-btn").click(function(){
        $("#services-btn").css({"background":"#35383f","color":"#fff"});
        $("#services-btn").removeClass("animationClass");
        $(this).addClass("animationClass");
    });
    $(".dark-mood #services-btn").click(function(){
        $("#package-btn").css({"background":"#35383f","color":"#fff"});
        $("#package-btn").removeClass("animationClass");
        $(this).addClass("animationClass");
    });
// start animate scroll to section
$('button.web-btn').click(function() {
    $('html, body').animate({
      scrollTop: $(".web-develope").offset().top
    }, 1000)
});
$('button.ux-btn').click(function() {
    $('html, body').animate({
      scrollTop: $("div.ux-section").offset().top
    }, 1000)
});
$('button.app-btn').click(function() {
    $('html, body').animate({
      scrollTop: $(".app-develope").offset().top
    }, 1000)
});
// end animate scroll to section
// start top arrow
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
       $(".top-arrow img").fadeIn(500);
    } else {
        $(".top-arrow img").fadeOut(500);
    }
 });
 $(".top-arrow img").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
 });
// end top arrow
    //////////////////////////////////////////////////////////////////////////
    $(".in-active-xd").hover(function(){
        $(".active-xd,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,in-active-kotline,.in-active-xml,.in-active-java,.in-active-wireframe,.in-active-prototype,.in-active-css,.in-active-js,.in-active-angular,.in-active-php,.in-active-laravel").show();
        $(".in-active-xd,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php,.active-laravel").hide();
    });
    $(".in-active-wireframe").hover(function(){
        $(".active-wireframe,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,in-active-kotline,.in-active-java,.in-active-xd,.in-active-prototype,.in-active-css,.in-active-js,.in-active-angular,.in-active-php,.in-active-laravel").show();
        $(".in-active-wireframe,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-xd,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php,.active-laravel").hide();
    });
    $(".in-active-prototype").hover(function(){
        $(".active-prototype,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,in-active-kotline,.in-active-java,.in-active-wireframe,.in-active-xd,.in-active-css,.in-active-js,.in-active-angular,.in-active-php,.in-active-laravel").show();
        $(".in-active-prototype,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-xd,.active-wireframe,.active-html,.active-css,.active-js,.in-active-angular,.active-angular,.active-php,.active-laravel").hide();
    });
    $(".in-active-html").hover(function(){
        $(".active-html,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,in-active-kotline,.in-active-java,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-css,.in-active-js,.in-active-angular,.in-active-php,.in-active-laravel").show();
        $(".in-active-html,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-xd,.active-wireframe,.active-prototype,.active-css,.active-js,.active-angular,.active-php,.active-laravel").hide();
    });
    $(".in-active-css").hover(function(){
        $(".active-css,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,in-active-kotline,.in-active-java,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-js,.in-active-angular,.in-active-php,.in-active-laravel").show();
        $(".in-active-css,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-js,.active-angular,.active-php,.active-laravel").hide();
    });
    $(".in-active-js").hover(function(){
        $(".active-js,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-sqlite,.in-active-firebase,.in-active-xml,in-active-kotline,.in-active-java,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-angular,.in-active-php,.in-active-laravel").show();
        $(".in-active-js,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-angular,.active-php,.active-laravel").hide();
    });
    $(".in-active-angular").hover(function(){
        $(".active-angular,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,in-active-kotline,.in-active-java,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-php,.in-active-laravel").show();
        $(".in-active-angular,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-php,.active-laravel").hide();
    });
    $(".in-active-php").hover(function(){
        $(".active-php,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,in-active-kotline,.in-active-java,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-angular,.in-active-laravel").show();
        $(".in-active-php,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-laravel").hide();
    });
    $(".in-active-laravel").hover(function(){
        $(".active-laravel,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,in-active-kotline,.in-active-java,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-angular,.in-active-php").show();
        $(".in-active-laravel,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php").hide();
    });
    $(".in-active-java").hover(function(){
        $(".active-java,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,.in-active-kotline,.in-active-laravel,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-angular,.in-active-php").show();
        $(".in-active-java,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-laravel,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php").hide();
    });
    $(".in-active-kotline").hover(function(){
        $(".active-kotline,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,.in-active-java,.in-active-laravel,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-angular,.in-active-php").show();
        $(".in-active-kotline,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-java,.active-laravel,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php").hide();
    });
    $(".in-active-xml").hover(function(){
        $(".active-xml,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-kotline,.in-active-java,.in-active-laravel,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-angular,.in-active-php").show();
        $(".in-active-xml,.active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-kotline,.active-java,.active-laravel,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php").hide();
    });
    $(".in-active-firebase").hover(function(){
        $(".active-firebase,.in-active-rest,.in-active-google-api,.in-active-sqlite,.in-active-xml,.in-active-kotline,.in-active-java,.in-active-laravel,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-angular,.in-active-php").show();
        $(".in-active-firebase,.active-rest,.active-google-api,.active-sqlite,.active-xml,.active-kotline,.active-java,.active-laravel,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php").hide();
    });
    $(".in-active-sqlite").hover(function(){
        $(".active-sqlite,.in-active-rest,.in-active-google-api,.in-active-firebase,.in-active-xml,.in-active-kotline,.in-active-java,.in-active-laravel,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-angular,.in-active-php").show();
        $(".in-active-sqlite,.active-rest,.active-google-api,.active-firebase,.active-xml,.active-kotline,.active-java,.active-laravel,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php").hide();
    });
    $(".in-active-google-api").hover(function(){
        $(".active-google-api,.in-active-rest,.in-active-sqlite,.in-active-firebase,.in-active-xml,.in-active-kotline,.in-active-java,.in-active-laravel,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-angular,.in-active-php").show();
        $(".in-active-google-api,.active-rest,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-laravel,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php").hide();
    });
    $(".in-active-rest").hover(function(){
        $(".active-rest,.in-active-google-api,.in-active-sqlite,.in-active-firebase,.in-active-xml,.in-active-kotline,.in-active-java,.in-active-laravel,.in-active-xd,.in-active-wireframe,.in-active-prototype,.in-active-html,.in-active-css,.in-active-js,.in-active-angular,.in-active-php").show();
        $(".in-active-rest,.active-google-api,.active-sqlite,.active-firebase,.active-xml,.active-kotline,.active-java,.active-laravel,.active-xd,.active-wireframe,.active-prototype,.active-html,.active-css,.active-js,.active-angular,.active-php").hide();
    });
    ///////////////////////////////////////////////////////////////////////////


    var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    $("#myInput").autocomplete({
      source:[country_list]
    }); 
    var city_names = ["cairo","Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
    $("#city-personal").autocomplete({
      source:[city_names]
    });
    // 

    $(".login-page form input,.register-page input,.contact-us input,.contact-us textarea").click(function(){
        $(this).siblings("label").css("opacity","1");
    });
   $(".add-email h4").click(function(){
        $(".add-email .fa-minus-circle").toggle();
        $(".add-email .fa-plus-circle").toggle();
    });
    $(".company-info h4").click(function(){
        $(".company-info .fa-minus-circle").toggle();
        $(".company-info .fa-plus-circle").toggle();
    });
    $(".personal-radio label").click(function(){
        $(".personal-radio input").attr("checked",true);
        $(".company-radio  input").attr("checked",false);
        $(".company-form").hide();
        $(".personal-form").show();
    });
    $(".company-radio label").click(function(){
        $(".company-radio input").attr("checked",true);
        $(".personal-radio input").attr("checked",false);
        $(".company-form").show();
        $(".personal-form").hide();
    });
    $(".company-radio input").click(function(){
        $(".company-radio input").attr("checked",true);
        $(".personal-radio  input").attr("checked",false);
        $(".company-form").show();
        $(".personal-form").hide();
    });
    $(".personal-radio input").click(function(){
        $(".personal-radio input").attr("checked",true);
        $(".company-radio input").attr("checked",false);
        $(".company-form").hide();
        $(".personal-form").show();
    });
    $('#lightSlider').lightSlider({
        adaptiveHeight:false,
        item:1,
        slideMargin:0,
        loop:true,
        auto:true,
        prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
    });
    $('#ourclient').lightSlider({
        adaptiveHeight:false,
        item:1,
        slideMargin:0,
        loop:true,
        auto:true,
        prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
    });
    $(".pricing-btn button").click(function(){
        $(".pricing").toggle();
        $(".package").toggle();
    });
    $(".package-btn button").click(function(){
        $(".package").toggle();
        $(".pricing").toggle();
    });
    $(".links-profile .profile-btn button").click(function(){
        $(".personal-info-sec").show(2000);
        $(".project-info-sec").hide(2000);
        $(this).css({"background-color":"#fff","color":"#009bdb","margin-top":"-60px","box-shadow":"none"});
        $(".links-profile .info-btn button").css({"background-color":"transparent","color":"#fff","margin-top":"-70px","box-shadow":"none"});

    });
    $(".links-profile .info-btn button").click(function(){
        $(".personal-info-sec").hide(2000);
        $(".project-info-sec").show(2000);
        $(this).css({"background-color":"#fff","color":"#009bdb","margin-top":"-60px","box-shadow":"none"});
        $(".links-profile .profile-btn button").css({"background-color":"transparent","color":"#fff","margin-top":"-70px","box-shadow":"none"});
    });
    $(".dark-mood .links-profile .profile-btn button").click(function(){
        $(".personal-info-sec").show(2000);
        $(".project-info-sec").hide(2000);
        $(this).css({"background-color":"#2c2f36","color":"#fff","margin-top":"-60px","box-shadow":"none"});
        $(".links-profile .info-btn button").css({"background-color":"transparent","color":"#fff","margin-top":"-62px","box-shadow":"none"});

    });
    $(".dark-mood .links-profile .info-btn button").click(function(){
        $(".personal-info-sec").hide(2000);
        $(".project-info-sec").show(2000);
        $(this).css({"background-color":"#2c2f36","color":"#fff","margin-top":"-60px","box-shadow":"none"});
        $(".links-profile .profile-btn button").css({"background-color":"transparent","color":"#fff","margin-top":"-62px","box-shadow":"none"});
    });
    // start service scroll animation 
    $(".ux-btn").click(function(){
        $('html, body').animate({
            scrollTop: $("div.ux-section").offset().top
          }, 1000)
    });
});

  //   $('.one').on('click', function() {
  //     //this scroll withour animations in chrome
  //     $('p').get(0).scrollIntoView({
  //       block: "start",
  //       behavior: "smooth"
  //     });
 
  //   //this scroll WITH animations in all browsers 
  //   //taken from: http://praveenlobo.com/techblog/how-to-scroll-elements-smoothly-in-javascript-jquery-without-plugins/
  //   function scrollToElement(element, parent) {
  //     $(parent)[0].scrollIntoView(true);
  //     $(parent).animate({
  //       scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top
  //     }, {
  //       duration: 'slow',
  //       easing: 'swing'
  //     });
  //   }
  
  //   //call animated scroll script on click of 2nd button
  //   $('.two').on('click', function() {
  //     var paretq = $('.ui-service');
  //     var elemq = $('#h6-end');
  //     scrollToElement(elemq, paretq);
  //   })
  // })