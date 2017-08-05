// builds lunr
var index = lunr(function () {
    this.field('title', { boost: 20 })
    this.field('content')
    this.field('tags', {boost: 10})
  this.ref('id')
});

index.add({
  title: "Stubbed toe",
  content: "\n  Better safe than sorry - call 911\n  If breathing seems faint, begin lung compressions\n  Sometimes the best way to forget about an old injury is to cause a new injury; threaten patient with new injuries if subjective self-reporting of pain continues\n  Note: if patient is p-zombie, do not treat\n\n\nSource: The Googs\n",
  tags: ["primary-care,","temp1"],
  id: 0
});
index.add({
  title: "Myocardial infarction",
  content: "\n  Understanding blood pressure readings\n  Sodium and salt\n  Target heart rates\n  Heart attack symptoms in women\n  How to eat healthy and still have fun\n  What are the symptoms of high blood pressure?\n  It's all about heart rate (pulse)\n  Low blood pressure - when blood pressure is too low (hint: zero)\n  Tachycardia - fast heart rate\n  Warning signs of a heart attack\n\n\nSource: AHA\n",
  tags: ["cardiology,","emergency,","temp1"],
  id: 1
});
index.add({
  title: "Gout",
  content: "\n  Gout is a kind of arthritis caused by a buildup of uric acid crystals in the joints.\n  Gout, get out!\n\n\nSource: WebMD\n",
  tags: ["gout,","temp1"],
  id: 2
});
index.add({
  title: "Goiter",
  content: "(not to be confused with gout )\n\n\n  Goiter is not a kind of arthritis caused by a buildup of uric acid crystals in the joints.\n  Goiter, get out!\n\n\nSource: WebMD\n",
  tags: ["goiter,","temp1"],
  id: 3
});
index.add({
  title: "Diarrhea",
  content: "\n  Don't have it\n  Meat is bad\n\n\nSource: [Mexican food]\n",
  tags: ["primary-care,","cardiology,","AHA,","temp1"],
  id: 4
});
index.add({
  title: "Code brown",
  content: "\n  Code colors vary by hospital, so no general advice can be given\n  Code browns occur when you mix all the other codes together in equal proportions\n\n\nSource: UPS\n",
  tags: ["codes,","temp1"],
  id: 5
});
index.add({
  title: "Aging",
  content: "\n  As of today, there is no cure to aging\n  Aging is a condition that gets old fast\n  Time heals all wounds; but time doesn't heal aging; therefore, aging is not a wound\n\n\nSource: My lived experience\n",
  tags: ["geriatrics,","temp1"],
  id: 6
});
console.log( jQuery.type(index) );
// builds reference data
var store = [{
  "title": "Stubbed toe",
  "link": "/stubbed-toe",
  "date": "July 30, 2017",
  "excerpt": "Better safe than sorry - call 911 If breathing seems faint, begin lung compressions Sometimes the best way to forget…"
},{
  "title": "Myocardial infarction",
  "link": "/myocardial-infarction",
  "excerpt": "Understanding blood pressure readings Sodium and salt Target heart rates Heart attack symptoms in women How to eat healthy and…"
},{
  "title": "Gout",
  "link": "/gout",
  "excerpt": "Gout is a kind of arthritis caused by a buildup of uric acid crystals in the joints. Gout, get out!…"
},{
  "title": "Goiter",
  "link": "/goiter",
  "excerpt": "(not to be confused with gout ) Goiter is not a kind of arthritis caused by a buildup of uric…"
},{
  "title": "Diarrhea",
  "link": "/diarrhea",
  "excerpt": "\n  Don't have it\n  Meat is bad\n\n\nSource: [Mexican food]\n"
},{
  "title": "Code brown",
  "link": "/code-brown",
  "excerpt": "Code colors vary by hospital, so no general advice can be given Code browns occur when you mix all the…"
},{
  "title": "Aging",
  "link": "/aging",
  "excerpt": "As of today, there is no cure to aging Aging is a condition that gets old fast Time heals all…"
}]
// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p>'+result.length+' results found.</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><a href="http://www.tedanders.com' + store[ref].link + '">' + store[ref].title + '</a><p>' + store[ref].excerpt + '</p></div>';
      resultdiv.append(searchitem);
    }
  });
});
