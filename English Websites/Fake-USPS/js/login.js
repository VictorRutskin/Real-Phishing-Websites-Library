// Define Variables
var isUserLoggedIn = false;
var first;
var profileLang;

var regHost = "reg.usps.com";
var toolsHost = "tools.usps.com";
var storeHost = "store.usps.com";
var catStore = "";
var lowEnv = false;

if ((document.location.hostname.indexOf("intpx") != -1) || (document.location.hostname.indexOf("qusps") != -1) || (document.location.hostname.indexOf("stage") != -1)) {
	// CAT
	regHost = "catpx-custreg.usps.com";
	toolsHost = "cat-tools.usps.com";
	storeHost = "ecom-cat.usps.com";
	catStore = "-cat";
	lowEnv = true;
} else if (document.location.hostname.indexOf("tusps") != -1) {
	// SIT
	regHost = "sitpx-custreg.usps.com";
	toolsHost = "sit-tools.usps.com";
	storeHost = "ecom-sit-int.usps.com";
	catStore = "-sit";
	lowEnv = true;
} else if (document.location.hostname.indexOf("dusps") != -1) {
	// DEV
	regHost = "devpx-custreg.usps.com";
	toolsHost = "dev-tools.usps.com";
	storeHost = "ecom-dev.usps.com";
	catStore = "-dev";
	lowEnv = true;
}

// Get current URL
var currentPage = cleanURL(document.URL);
var hostname = cleanURL(document.location.hostname);

// Clean URL
function cleanURL(x) {
	x = x.replace("<","%3C");
	x = x.replace(">","%3E");
	if (x.indexOf("?") > -1) {
		x = x.substring(0,x.indexOf("?"));
	}
	if (x.indexOf("#") > -1) {
		x = x.substring(0,x.indexOf("#"));
	}
	return x;
}

// Cookie Functions
function createMyCookie(name,value) {
	document.cookie = name+"="+value+"; path=/; domain=.usps.com";
}

function readMyCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseMyCookie(name) {
	createMyCookie(name,"",-1);
}

// Setup Cookies
var nameCookieName = "EntRegName";
var prefsCookieName = "EntRegPrefs";

// Verify cookie has value
var nameCookie = readMyCookie(nameCookieName);
var prefsCookie = readMyCookie(prefsCookieName);

// If user manually chose to update language; update the cookie value for the session
function updateLangCookie(sLanguage) {
	if (prefsCookie != null && prefsCookie != "") {
		var prevValue = prefsCookie;
		var newValue = prevValue.replace("lang="+profileLang,"lang="+sLanguage)
		eraseMyCookie(prefsCookieName)
		createMyCookie(prefsCookieName,newValue);
	}
}

if (nameCookie) {
	var user = nameCookie.split("|");
	first = user[0];
	
	if (first) {
		isUserLoggedIn = true;
	}
}

if (isUserLoggedIn) {
	// Add updateLangCookie function to language selectors
	if (prefsCookie != null && prefsCookie != "") {
		//var el = document.getElementsByClassName("multi-link");
		var el = document.querySelectorAll('.multi-link');
		if (el[0].addEventListener) {                    // For all major browsers, except IE 8 and earlier
			el[0].addEventListener("click", function () {updateLangCookie('en')}, false);
		} else if (el[0].attachEvent) {                  // For IE 8 and earlier versions
			el[0].attachEvent("onclick", function () {updateLangCookie('en')});
		}
		if (el[1].addEventListener) {                    // For all major browsers, except IE 8 and earlier
			el[1].addEventListener("click", function () {updateLangCookie('es')}, false);
		} else if (el[1].attachEvent) {                  // For IE 8 and earlier versions
			el[1].attachEvent("onclick", function () {updateLangCookie('es')});
		}
		if (el[2].addEventListener) {                    // For all major browsers, except IE 8 and earlier
			el[2].addEventListener("click", function () {updateLangCookie('zh')}, false);
		} else if (el[2].attachEvent) {                  // For IE 8 and earlier versions
			el[2].attachEvent("onclick", function () {updateLangCookie('zh')});
		}
	}
}

var loginAnchor_Onclick="";
var loginSignin_Onclick="";
var loginForgot_Onclick="";
var loginSignup_Onclick="";
var loginProfile_Onclick="";
var loginSignout_Onclick="";

if(typeof loginAnchor_BeaconDoer == 'function') {
	loginAnchor_Onclick=' onclick="loginAnchor_BeaconDoer()" ';
}
if(typeof loginSignin_BeaconDoer == 'function') {
  loginSignin_Onclick=' onclick="loginSignin_BeaconDoer()" ';
}
if(typeof loginForgot_BeaconDoer == 'function') {
  loginForgot_Onclick=' onclick="loginForgot_BeaconDoer()" ';
}
if(typeof loginSignup_BeaconDoer == 'function') {
  loginSignup_Onclick=' onclick="loginSignup_BeaconDoer()" ';
}
if(typeof loginProfile_BeaconDoer == 'function') {
  loginProfile_Onclick=' onclick="loginProfile_BeaconDoer()" ';
}
if(typeof loginSignout_BeaconDoer == 'function') {
  loginSignout_Onclick=' onclick="loginSignout_BeaconDoer()" ';
}

// Non-logged in User


var nonLoggedInUser = '<div class="nav-pipe"></div>'+
'<div id="nav-tool-login" class="nav-tool">'+
 ' <h2>'+
'	<a id="anchor-login" href="https://'+regHost+'/entreg/LoginAction_input?app=Phoenix&amp;appURL='+currentPage+'" class="anchor" tabindex="0" name="anchor-login" '+
loginAnchor_Onclick+
'>Register / Sign In <span class="hide-fromsighted">Use arrow key to access related widget.</span></a><span class="arrow"></span>'+
  '</h2>'+
/*  '<div style="height: 0px; overflow: hidden;" class="nav-window">'+
	'<div class="wrapper col_3 loggedIn">'+
	  '<div style="height: 218px; width: 484px; display: block;" class="background">'+
		'<div style="height: 194px; width: 460px;" class="modal-insider"></div>'+
		'<div class="modal-corner-tl"></div>'+
		'<div class="modal-corner-tr"></div>'+
		'<div class="modal-corner-bl"></div>'+
		'<div class="modal-corner-br"></div>'+
		'<div style="height: 194px;" class="modal-repeat-left"></div>'+
		'<div style="height: 194px;" class="modal-repeat-right"></div>'+
		'<div style="width: 460px;" class="modal-repeat-top"></div>'+
'		<div style="width: 460px;" class="modal-repeat-bottom"></div>'+
	  '</div>'+
	  '<div class="content">'+
		'<div class="unreg clearfix inner">'+
		  '<div id="login-form-div">'+
			'<form id="login-form" name="loginForm" method="post" action="https://'+toolsHost+'/go/LoginAction.action">'+
			  '<input name="successUrl" value="'+currentPage+'" id="login-form_successUrl" type="hidden"><label for="input-username" class="fontStyle9b">Username</label>'+
			  '<div class="input-text-wrapper input-text-lg">'+
			  '<span class="input-cap-left"></span>'+
'				<span class="input-field"><input class="text" value="" name="userName" maxlength="50" id="input-username" type="text" autocomplete="off"></span>'+
			  '<span class="input-cap-right"></span>'+
			  '</div><label for="input-password" class="fontStyle9b">Password</label>'+
			  '<div class="input-text-wrapper input-text-lg">'+
			  '<span class="input-cap-left"></span>'+
'				<span class="input-field"><input class="text" name="password" maxlength="50" id="input-password" type="password" autocomplete="off"></span>'+
			  '<span class="input-cap-right"></span>'+
			  '</div>'+
			  '<p class="error hide" id="login-error-message">'+
'				Username and password<br>must be entered'+
			  '</p>'+
			  '<p class="hint fontStyle8">'+
			  '</p>'+
			  '<div class="clearfix fontStyle9">'+
				'<div id="btn-signin-wrapper" class="left">'+
				  '<div id="btn-signin-inner-wrapper">'+
'					<span id="parent-id" class="button-link button-link btn-reg btn-blue-reg"><span class="hasHover"><a target="_self" id="btn-header-input-signin" class="buttons" href="#" name="btn-header-input-signin" '+
      loginSignin_Onclick+
      '>Sign In</a></span></span>'+
					'<input id="btn-header-hidden-input-signin" value="submit" name="login" style="width: 0px; height: 0px; border: medium none;" type="submit">'+
				  '</div>'+
'				</div><a id="link-forgot" href="https://'+regHost+'/entreg/ForgotPasswordAction_input?app=Phoenix&amp;appURL='+currentPage+'" id="link-forgot" name="link-forgot" '+
      loginForgot_Onclick+
      '>Forgot your password?</a>'+
			  '</div>'+
'			</form>'+
		  '</div>'+
		  '<div id="login-detail" class="fontStyle9">'+
			'<strong>Create a USPS.com account to...</strong>'+
			'<ul>'+
			  '<li>print shipping labels'+
			  '</li>'+
			  '<li>request a package pickup'+
			  '</li>'+
			  '<li>buy stamps and shop'+
			  '</li>'+
			  '<li>manage PO Boxes&trade;'+
			  '</li>'+
			  '<li>file insurance claims'+
			  '</li>'+
				'<li><span style="line-height: 15px;">and manage home deliveries <span style="padding-left: 15px;">with My USPS</span></span></li></ul><p></p><a id="sign-up-link" href="https://'+regHost+'/entreg/RegistrationAction_input?app=Phoenix&amp;appURL='+currentPage+'" name="sign-up-link" '+
       loginSignup_Onclick+
       '>Sign Up Now &rsaquo;</a>'+
		  '</div>'+
'		</div>'+
	  '</div>'+
'	</div>'+
  '</div>'+*/
'</div>'+
'<div class="nav-pipe"></div>';

// Logged in User
var loggedInUser = 	'<div class="nav-pipe"></div><div id="nav-tool-login" class="nav-tool"><h2><a class="anchor" tabindex="0" id="anchor-login" name="anchor-login" '+
        loginAnchor_Onclick+
        '>Hi, '+first+'<span class="hide-fromsighted"> Use arrow key to access related widget.</span></a><span class="arrow"></span></h2>'+
					'<div class="nav-window" style="height: 0px; overflow: hidden;">'+
						'<div class="wrapper col_3">'+
							'<div class="background" style="height: 125px; width: 484px; display: block;"><div class="modal-insider" style="height: 101px; width: 460px;"></div><div class="modal-corner-tl"></div><div class="modal-corner-tr"></div><div class="modal-corner-bl"></div><div class="modal-corner-br"></div><div class="modal-repeat-left" style="height: 101px;"></div><div class="modal-repeat-right" style="height: 101px;"></div><div class="modal-repeat-top" style="width: 460px;"></div><div class="modal-repeat-bottom" style="width: 460px;"></div></div>'+
							'<div class="content">'+
								'<div class="reg inner">'+
									'<div>'+
										'<p>'+first+',</p>'+
										'<ul class="fontStyle9">'+
											'Thanks for registering for an account. Get started using USPS.com by shopping or shipping.'+
										'</ul>'+
									'</div>'+
									'<div id="accountLinks" class="cta fontStyle7 clearfix">'+
										'<a id="link-activity" href="https://'+storeHost+'/store/myaccount/profile.jsp" '+
										loginProfile_Onclick+
										'>My Profile &rsaquo;</a>'+
										'<a href="https://'+toolsHost+'/go/SignOutAction!execute.action?appURL='+currentPage+'" '+
										loginSignout_Onclick+
										'>Sign Out</a>'+
									'</div>'+
									'<div id="accountSubLinks" class="clearfix">'+
										'<ul>'+
											'<li>'+
												'<a href="/view-activity-history'+catStore+'.htm">Activity History &rsaquo;</a>'+
											'</li>'+
											'<li>'+
												'<a href="/view-stored-payment'+catStore+'.htm">Stored Payments &rsaquo;</a>'+
											'</li>'+
										'</ul>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div></div><div class="nav-pipe"></div>';
					
// Display based on cookie
if (isUserLoggedIn) {
	document.getElementById('login-register').innerHTML = loggedInUser;
	// Check for language cookie
	if (prefsCookie != null && prefsCookie != "") {
		// Parse Cookie for 'lang'
		var tempArray = new Array();
		var prefValues = prefsCookie.split("|");
		for (var c=0; c<prefValues.length; c++) {
			tempArray = prefValues[c].split("=");
			if(tempArray[0]=="lang") {
				profileLang = tempArray[1];
				break;
			}
		}
		// If they aren't already on the translated site, redirect them
		if (hostname.indexOf(profileLang) == -1 && profileLang != null) {
			OneLink(profileLang);
		}
	}
	//Make name fit
	try {
		var obj = document.getElementById('anchor-login');
		if(obj!=null){
			//anything over 96, need to expand it
			var maxLength = 96;
			var length = obj.innerHTML.length;
			if (length > 96) {
				var diff = (length-maxLength)*5;
				document.getElementById('nav-tool-login').style.width = 148+diff+"px";
				document.getElementById('nav-tool-login').lastChild.style.left = -328+diff+"px";
			}
		}
	} catch(e){}
} else {
	document.getElementById('login-register').innerHTML = nonLoggedInUser;
}

// Search Client Hostname
var search_client_hostname = "https://about.usps.com";
if ((document.location.hostname.indexOf("intpx") != -1) || (document.location.hostname.indexOf("tusps") != -1) || (document.location.hostname.indexOf("dusps") != -1)) {
	search_client_hostname = "https://sitpx-about.usps.com";
}