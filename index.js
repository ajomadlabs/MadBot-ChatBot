/*-------------------------------------------------------------------
	A simple bot which makes conversational chats with the user
	This bot is made using Howdyai 
--------------------------------------------------------------------*/

//--------------------------------------
//	Calling the Botkit
//--------------------------------------

var Botkit = require('botkit');

//--------------------------------------

//--------------------------------------
//	Calling the slackbot
//--------------------------------------

var controller = Botkit.slackbot();

//--------------------------------------

//--------------------------------------
// Creating a function for Quotes
//--------------------------------------

var Quotation=new Array() 			//A Quotation array is initialised

Quotation[0] = "Chase the vision, not the money; the money will end up following you.";
Quotation[1] = "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.";
Quotation[2] = "Ideas are easy. Implementation is hard.";
Quotation[3] = "Any time is a good time to start a company.";
Quotation[4] = "A person who never made a mistake never tried anything new.";
Quotation[5] = "Stay self-funded as long as possible.";
Quotation[6] = "If you are going through hell, keep going.";
Quotation[7] = "The greater danger for most of us lies not in setting our aim too high and falling short, but in setting our aim too low and achieving our mark.";
Quotation[8] = "Business opportunities are like buses: there’s always another one coming.";
Quotation[9] = "Done is better than perfect.";
Quotation[10] = "When you’re at the end of your rope, tie a knot and hold on.";
Quotation[11] = "If you do what you’ve always done, you’ll get what you’ve always gotten.";
Quotation[12] = "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.";
Quotation[13] = "If you want to build a successful business, make sure you have three things—a big market opportunity, great people, and more than enough capital.";
Quotation[14] = "Winners never quit and quitters never win.";
Quotation[15] = "The secret of getting ahead is getting started.";
Quotation[16] = "Waiting for perfect is never as smart as making progress.";
Quotation[17] = "Early to bed, early to rise, work like hell and advertise.";
Quotation[18] = "The price of inaction is far greater than then cost of a mistake.";
Quotation[19] = "If Plan A doesn’t work, the alphabet has 25 more letters.";
Quotation[20] = "I stand up on my desk to remind myself that we must constantly look at things in a different way.";

var Q = Quotation.length;			//The length of the quotations are taken
var whichQuotation=Math.round(Math.random()*(Q-1)); //This is used for obtaining the random quote

function showQuotation(){			//A function to return the quotation chosen
	var quote = Quotation[whichQuotation];	//A random quote is assigned
	return quote;				//Returning the quote
}

//------------------------------------------

//------------------------------------------
//	Date and Time function
//------------------------------------------

function showDate(){
	var currentdate = new Date(); 
	var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
	return datetime;
}

//-------------------------------------------

//-------------------------------------------
//	Function for greeting
//-------------------------------------------

function wishUS(){
	var myDate = new Date(); 
	if ( myDate.getHours() < 12 )  
	{ 
    		w = "Good Morning!";
		return w; 
	} 
	else
	if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
	{ 
    		w = "Good Afternoon!";
		return w;  
	} 
	else
	if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
	{ 
    		w = "Good Evening!";
		return w;  
	} 
	else
	{ 
    		w = "I'm not sure what time it is!"; 
		return w; 
	} 
}

//--------------------------------------------

//--------------------------------------------
//	This hears the message send by users
//--------------------------------------------

controller.hears(["hey","!Hey, chappie", "!Who is your father","!father", "!quote", "!date", "!time", "!good morning", "!good afternoon", "!good evening", "!change", "!bye", /^.{0,}mad.{0,}$/],					    ["direct_message","direct_mention","mention","ambient"],
		function(bot,message){

  

	console.log(message);
	if(message.text === "!Hey, chappie" || message.text === "hey" || message.text === '!' || message.text === "chappie" || message.text === "CHAPPIE"){
		bot.reply(message,"Hello, May I help you,If you want me to do something call me or command me using !");
	}
	else if(message.text === "!mother" || message.text === "!father"){
		bot.reply(message,"Well, my creator is MadLabs! Its pretty awsome to be with them");}
	else if(message.text === "!quote"){
		bot.reply(message,showQuotation());}
	else if(message.text === "!date" || message.text === "!time"){
		bot.reply(message,showDate());}
	else if(message.text === "!good morning" || message.text === "!good afternoon" || message.text === "!good evening"){
		bot.reply(message,wishUS());}
	else if(message.text === "!bye"){
		bot.reply(message,"Hope we will meet soon");}
	else if(message.text === "!change"){
		bot.reply(message,"Im okey withe any changes that my creators want me to");}
	else{
		bot.reply(message,"!Sorry! My creators are still developing me");}

});

//--------------------------------------------

//--------------------------------------------
//	Adding the configuration
//---------------------------------------------

var bot = controller.spawn({
	token:require('./config').token
});

bot.startRTM(function(err, bot, payload) {
	if(err){
		console.log(err);
		throw new Error('Could not connect to slack');

	}
});

//---------------------------------------------
	
