


// A whole bunch of notes in functions to be rendered to ".boo"

function insC() {

    VF = Vex.Flow;
    var div = document.getElementById("boo")
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    
    renderer.resize(500, 500);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
    
    var stave = new VF.Stave(200, 40, 110);
    
    stave.addClef("treble").addTimeSignature("4/4");
    
    stave.setContext(context).draw();
    var notes = [
      new VF.StaveNote({ keys: ["c/4"], duration: "q" })
    ];
    var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
    voice.addTickables(notes);
    
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
    
    voice.draw(context, stave);
}
function insCsharp () {
VF = Vex.Flow;
var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

renderer.resize(500, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

var stave = new VF.Stave(200, 40, 110);

stave.addClef("treble").addTimeSignature("4/4");

stave.setContext(context).draw();
var notes = [
  new VF.StaveNote({ keys: ["c#/4"], duration: "q" })
];
var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
voice.addTickables(notes);

var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

voice.draw(context, stave);
}
function insD () {
  VF = Vex.Flow;
  var div = document.getElementById("boo")
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  
  renderer.resize(500, 500);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
  
  var stave = new VF.Stave(200, 40, 110);
  
  stave.addClef("treble").addTimeSignature("4/4");
  
  stave.setContext(context).draw();
  var notes = [
    new VF.StaveNote({ keys: ["d/4"], duration: "q" })
  ];
  var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
  voice.addTickables(notes);
  
  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
  
  voice.draw(context, stave);
  }
  function insDsharp () {
    VF = Vex.Flow;
    var div = document.getElementById("boo")
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    
    renderer.resize(500, 500);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
    
    var stave = new VF.Stave(200, 40, 110);
    
    stave.addClef("treble").addTimeSignature("4/4");
    
    stave.setContext(context).draw();
    var notes = [
      new VF.StaveNote({ keys: ["d#/4"], duration: "q" })
    ];
    var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
    voice.addTickables(notes);
    
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
    
    voice.draw(context, stave);
    }
    function insE () {
      VF = Vex.Flow;
      var div = document.getElementById("boo")
      var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
      
      renderer.resize(500, 500);
      var context = renderer.getContext();
      context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
      
      var stave = new VF.Stave(200, 40, 110);
      
      stave.addClef("treble").addTimeSignature("4/4");
      
      stave.setContext(context).draw();
      var notes = [
        new VF.StaveNote({ keys: ["e/4"], duration: "q" })
      ];
      var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
      voice.addTickables(notes);
      
      var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
      
      voice.draw(context, stave);
      }
      function insF () {
        VF = Vex.Flow;
        var div = document.getElementById("boo")
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        
        renderer.resize(500, 500);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
        
        var stave = new VF.Stave(200, 40, 110);
        
        stave.addClef("treble").addTimeSignature("4/4");
        
        stave.setContext(context).draw();
        var notes = [
          new VF.StaveNote({ keys: ["f/4"], duration: "q" })
        ];
        var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
        voice.addTickables(notes);
        
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
        
        voice.draw(context, stave);
        }
        function insFsharp () {
          VF = Vex.Flow;
          var div = document.getElementById("boo")
          var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
          
          renderer.resize(500, 500);
          var context = renderer.getContext();
          context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
          
          var stave = new VF.Stave(200, 40, 110);
          
          stave.addClef("treble").addTimeSignature("4/4");
          
          stave.setContext(context).draw();
          var notes = [
            new VF.StaveNote({ keys: ["f#/4"], duration: "q" })
          ];
          var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
          voice.addTickables(notes);
          
          var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
          
          voice.draw(context, stave);
          }
          function insG () {
            VF = Vex.Flow;
            var div = document.getElementById("boo")
            var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
            
            renderer.resize(500, 500);
            var context = renderer.getContext();
            context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
            
            var stave = new VF.Stave(200, 40, 110);
            
            stave.addClef("treble").addTimeSignature("4/4");
            
            stave.setContext(context).draw();
            var notes = [
              new VF.StaveNote({ keys: ["g/4"], duration: "q" })
            ];
            var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
            voice.addTickables(notes);
            
            var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
            
            voice.draw(context, stave);
            }
            function insGsharp () {
              VF = Vex.Flow;
              var div = document.getElementById("boo")
              var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
              
              renderer.resize(500, 500);
              var context = renderer.getContext();
              context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
              
              var stave = new VF.Stave(200, 40, 110);
              
              stave.addClef("treble").addTimeSignature("4/4");
              
              stave.setContext(context).draw();
              var notes = [
                new VF.StaveNote({ keys: ["g#/4"], duration: "q" })
              ];
              var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
              voice.addTickables(notes);
              
              var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
              
              voice.draw(context, stave);
              }
              function insA () {
                VF = Vex.Flow;
                var div = document.getElementById("boo")
                var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
                
                renderer.resize(500, 500);
                var context = renderer.getContext();
                context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
                
                var stave = new VF.Stave(200, 40, 110);
                
                stave.addClef("treble").addTimeSignature("4/4");
                
                stave.setContext(context).draw();
                var notes = [
                  new VF.StaveNote({ keys: ["a/4"], duration: "q" })
                ];
                var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
                voice.addTickables(notes);
                
                var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
                
                voice.draw(context, stave);
                }
$(insE); //call the note function

//TODO insert 4 -6 quiz questions into quiz

//TODO call 4 - 6 functions and insert the note names. 

//TODO take entry from text field and then see if it is true or false
 
//TODO insert another element using javascript that includes "correct" or "incorrect"


//display one by one

// instead of running map function, take first element and render. after answer rm from array and add next one.