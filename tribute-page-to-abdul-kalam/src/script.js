var arr1=["October 15, 1931","1958","1969","1982","1992","May 1998","2002","2002-2007","2003 and 2006","2007","2011","2012","July 27, 2015","July 30, 2015","July 31, 2015"];
var arr2=["Avul Pakir Jainulabdeen Abdul Kalam was born into a Muslim family"," Kalam joins the Defense Research and Development Organization (DRDO) as a senior scientific assistant","Kalam was named project director of the SLV-III, the first satellite launch vehicle designed and produced on Indian soil after moving to the newly formed Indian Space Research Organization (ISRO).","Returning to the DRDO as director, Kalam implemented the Integrated Guided Missile Development Program.","Kalam becomes the senior scientific adviser to India's defense minister","Kalam is a key figure in the Pokhran-II tests, in which five nuclear devices were detonated in the Rajasthan Desert.", "India's ruling National Democratic Alliance helped Kalam win an election against Lakshmi Sahgal and become India's 11th president, a largely ceremonial post.","Known as the People's President, Kalam set a goal of conducting 500,000 one-on-one meetings with young people over the course of his five-year term.","Kalam's immense popularity led to him being nominated by MTV for a Youth Icon of the Year award","Kalam becomes a visiting professor at several universities.","Kalam forms the 'What Can I Give Movement' with the goal of creating a compassionate society","Kalam's efforts to improve healthcare led to the release of a tablet for medical personnel to use in remote areas","Kalam suffered a massive heart attack while lecturing at the Indian Institute of Management and subsequently died at the age of 83.","Kalam was laid to rest with full state honors in his native Tamil Nadu. The southeast Indian state government of Tamil Nadu created a 'Dr. A.P.J. Abdul Kalam Award,' which recognizes exceptional individuals who promote the sciences, students and humanities.","The government establishes Kalam's birthday as 'Youth Renaissance Day.' Discussion about building a large-scale memorial at his burial site is underway. "];

$(document).ready(function() {

  $(".col-md-2").hover(function(){ 
    if(this.id<=15){
    $("#"+this.id).html(arr1[this.id-1]);                      $("#"+this.id).css("font-size","1.8em");
$("#"+this.id).css("height","10em");} else if(this.id==16){
  $("#"+this.id).empty();
  $("#"+this.id).append("<a target='_blank' href='http://www.biography.com/people/apj-abdul-kalam-39325' class='remove1'>bio</a>");
$("#"+this.id).css("font-size","1.8em");
$("#"+this.id).css("height","10em");
  
} else if(this.id==17){
  $("#"+this.id).empty();
  $("#"+this.id).append("<a target='_blank' href='https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam' class='remove2'>Wiki</a>");
$("#"+this.id).css("font-size","1.8em");
$("#"+this.id).css("height","10em");
} else if(this.id==18){
  $("#"+this.id).empty();
  $("#"+this.id).append("<img src='http://www.thefamouspeople.com/profiles/images/a-p-j-abdul-kalam-4.jpg' alt='Abdul Kalam' class='remove3'>");
$("#"+this.id).css("font-size","1.8em");
$("#"+this.id).css("height","10em");
}
},function(){
    if(this.id<=15){
 $("#"+this.id).html(arr2[this.id-1]);
$("#"+this.id).css("font-size","1.1em");
  $("#"+this.id).css("height","16em");
    } else if(this.id==16){
         $('.remove1').remove();
      $("#"+this.id).html("My source");
      $("#"+this.id).css("font-size","1.1em");
  $("#"+this.id).css("height","16em");
      
    } else if(this.id==17){
      $('.remove2').remove();
      $("#"+this.id).html("For more info");
      $("#"+this.id).css("font-size","1.1em");
  $("#"+this.id).css("height","16em");
    } else if(this.id==18){     
      $("#"+this.id).css("font-size","1.1em");
  $("#"+this.id).css("height","16em");
    }
});
});