$("section").hide();
$("#home").show();

$("a.nav-link.js-scroll-trigger").click(function(){
  console.log('a element click :' + $(this).attr('href'));
  let sectionName = $(this).attr('href').substring(1);
  console.log('href attr name:' + sectionName);
  $("section").hide();
  $("#"+sectionName).show();
});
