

//$('#Wires').trigger( 'show.bs.tab');

$( document ).ready(function() {
    var strikes = 0;

    var ModuleList = [];
    
    //adds the module link when you click the initial button
    $("#ModuleSelection .btn-thumbnail").click(function(event){

        var id = (event.target.id);
        var listId = id.replace('-Button', '');
        if (listId == "All") {
            //highlight all buttons
            console.log("all");
            $(this).toggleClass('btn-primary');
            $('#All-Button').toggleClass('btn-secondary');
             if ($('#All-Button').hasClass('btn-primary')) {
                $('#All-Button')
            $("#ModuleSelection .btn-thumbnail").each(function() {
                
                    var idx = this.id;
        var listIdx = idx.replace('-Button', '');
                if ($(this).hasClass('btn-primary')) {} else {
                $(this).toggleClass('btn-primary');
                $(this).toggleClass('btn-secondary');
             ModuleList.push(listIdx);
        }

                 })} else { 
                    $("#ModuleSelection .btn-thumbnail").each(function() {
                    $(this).toggleClass('btn-primary', false);
                    $(this).toggleClass('btn-secondary', true)
                    
        })
                    ModuleList = [];
    }

            return;}
        
        
        $(this).toggleClass('btn-primary');
        $(this).toggleClass('btn-secondary');
        
        //Just clicked...
        if ($(this).hasClass('btn-primary')) {
            ModuleList.push(listId);
        } else {
            var i = ModuleList.indexOf(listId)
            delete ModuleList[i];
        }
    });

    //opens the module div from the module link
    $('#Wires').on('show.bs.tab', function() {

        $("#wires-panel").load("htmlModules/WiresModule.html", function() {
            $('#refresh').click(function(){$('#Wires').trigger( 'show.bs.tab');});


            //All Wire Code Goes in Here
            $('#moduleToggleDiv').show();
            var wireList = [];
            addWire = function(wire){
                wireList.push(wire);
                $("#currentWireList").text(wireList.join(", "));
            }
            //after selecting wires
            $("#wiresSubmit").click(function(){

                //$("#WiresModule").hide();
                $("#wiresSolution").show();
                $("#wiresSolutionText").append(wires1(wireList));
            });
            // after reading solution, close module
                $("#wiresDone").click(function(){
                $("#wiresSolution").hide();
                $("#WiresModule").hide();
            });
        });
    });

    $('#Button').on('show.bs.tab', function() {
        $("#button-panel").load("./htmlModules/ButtonModule.html", function(response, status, xhr) {
            $('#refresh, #refresh1').click(function(){$('#Button').trigger( 'show.bs.tab');});
            //All button code goes here
            $('#moduleToggleDiv').show();
            $('input[name="color"]').click(function() {
                $('[name=color]').removeClass('btn-primary');
                $(this).addClass('btn-primary');
                $(this).addClass('activated');
             });
            $('[name="text"]').click(function() {
                $('[name=text]').removeClass('btn-primary');
                $(this).addClass('btn-primary');
                $(this).addClass('activated');
            });

            $("#buttonSubmit").click(function(){
            $("#ButtonModule").hide();
            var text = ($('.btn-primary[name=text]').val());
            var color = ($('.btn-primary[name=text]').val());
            var value = button(color, text);
            if (value == "hold") {
                $('#buttonSolution').show();
                $('#buttonSolutionText1').show();
                $('#buttonDoneDiv').show();
            }
            else {

                $('#buttonSolutionText1').append(value);
                $('#buttonSolution').show();
                $('#buttonSolutionText1').show();
                $('#buttonDoneDiv').show();
            }
        });
        $("#buttonDone").click(function(){
            $('#buttonSolution').hide();
            $('#buttonDoneDiv').hide();

        });

        });
    });

    $('#Symbols').on('show.bs.tab click', function() {
        $("#symbols-panel").load("htmlModules/SymbolsModule.html", function() {
            $('#refresh, #refresh1').click(function(){$('#Symbols').trigger('show.bs.tab');});
            //all symbols code goes here
            $('#moduleToggleDiv').show();
            symbolsRows = [[],[],[],[],[],[]]; //no var
            symbolsCount = 0; //no var
            var picsIds = [];

            $('.thumbnail').each(function() {
            $(this).removeClass('selected');
            $(this).removeClass('disappear');
        })
            $('.thumbnail').click(function(event) {
                var src = event.target.src;
                //find 'Symbols' in source
                var x = src.indexOf("Symbols");
                src = src.substring(x, src.length);
                var picsIds = [];
                var pics = $("[src='"+src+"']");
                pics.addClass('selected')
                for (i=0; i<(pics.length); i++) {
                   id = (pics[i].parentNode.id);
                     picsIds.push(id);
                } 
                
                stayRows = symbols(picsIds);
                for (i=1; i<7; i++) {
                    if ($.inArray(i, stayRows) == -1) {
                     var row = i.toString();
                     var gone = $(".thumbnail[name='"+row+"']");
                     gone.addClass('disappear');
                     }
                }
            })
            $('#symbolsDone').click(function() {
                $('#SymbolsModule').hide();
            })
        });
    });

    $('#Complicated').on('show.bs.tab', function() {
        $("#complicated-panel").load("htmlModules/ComplicatedModule.html", function() {
            $('#refresh').click(function(){$('#Complicated').trigger( 'show.bs.tab');});
            //Complicated wires code goes here
            $('#moduleToggleDiv').show();
            $('.btn-toggle').click(function() {
                $(this).find('.btn').toggleClass('active');  
        
                if ($(this).find('.btn-primary').size()>0) {
                    $(this).find('.btn').toggleClass('btn-primary');
                }
        if ($(this).find('.btn-danger').size()>0) {
            $(this).find('.btn').toggleClass('btn-danger');
        }
        if ($(this).find('.btn-success').size()>0) {
            $(this).find('.btn').toggleClass('btn-success');
        }
        if ($(this).find('.btn-info').size()>0) {
            $(this).find('.btn').toggleClass('btn-info');
        }
        
        $(this).find('.btn').toggleClass('btn-default');
           
    });
            $('#complicatedSubmit').click(function() {
                var star = false;
                var blue = ($('.btn-primary[name=complicatedBlue]').val());
                var red = ($('.btn-primary[name=complicatedRed]').val());
                var star = ($('.btn-primary[name=complicatedStar]').val());
                console.log(star);
                var led = ($('.btn-primary[name=complicatedLed]').val());
                var answer = complicatedWires(blue, red, star, led);
                $('#complicatedAnswer').text("");
                setTimeout(function() { $('#complicatedAnswer').text(answer)     },200);
               // $("#complicatedAnswer").text(answer);
            })   

            $('#complicatedDone').click(function() {
                $('#ComplicatedModule').hide();
            })
        });
    });

    $('#Simon').on('show.bs.tab', function() {
        $("#simon-panel").load("htmlModules/SimonModule.html", function() {
            $('#refresh').click(function(){$('#Simon').trigger('show.bs.tab');});
            //Simon says code will go here
            var bombList = [];
            var userList = [];
            bombList = [];
             userList = [];
            $('#moduleToggleDiv').show();
            $('.btnsimon').click(function() {
                var color = $(this).val();
                bombList.push(color);
                userList.push(simon(color, strikes));
                $('#userpattern').text(userList.join(", "));
                $("#bombpattern").text(bombList.join(", "));
            })
        });
    });

    $('#Whos').on('show.bs.tab', function() {
        $("#whos-panel").load("htmlModules/WhosModule.html", function() {
            $('#refresh').click(function(){$('#Whos').trigger('show.bs.tab');});
            //Whos on first code will go here
            $('#moduleToggleDiv').show();
            $("#1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17, #18, #19, #20, #21, #22, #23, #24, #25, #26, #27, #28").click(function(event) {
                var number = (event.target.id);
                number = $(this).attr('id');
                var answer = whos(number);
                $("#whosSolutionText").empty();
                $("#whosSolutionText").append(answer);
            });
            $("#whosDone").click(function() {
                $("#WhosModule").hide();
            });
        });
    });

    $('#Sequences').on('show.bs.tab', function() {
        $("#sequences-panel").load("htmlModules/SequencesModule.html", function() {
            $('#refresh').click(function(){$('#Sequences').trigger('show.bs.tab');});
            //Sequences / ABC Wires code will go here
            var allList = [];
            
            $('#ABCWiresDone').click(function() {
                $('#SequencesModule').hide();
            })
            $('[name=ABCLetter], [name=ABCColor]').click(function() {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            })

            $('#ABCWiresSubmit').click(function() {
                var letter = $("[name=ABCLetter].active").val();
                var color = $("[name=ABCColor].active").val();
                $("[name=ABCColor].active").removeClass('active');
                $("[name=ABCLetter].active").removeClass('active');; 
                var answer = ABCwires(color, letter);
                $('#AbcAnswer').text("");
                setTimeout(function() { $('#AbcAnswer').text(answer)     },200);

                count = redocc+blackocc+blueocc-2;
                $('#AbcCountlist').text(count);
                allList.push(color + letter);
                $('.glyphicon').toggleClass("glyphicon glyphicon-remove", false);
                $('#blacklist').append('<p>'+color + ": " + letter+'<a class="glyphicon glyphicon-remove xxx" id="'+color+letter+'  "></a></p></br>');

                $('.xxx').click(function(event) {
                console.log("clicked");
                id = event.target.id;
                color = id.slice(0, -1);
                letter = id[id.length-1];
                console.log(color+letter);
                removeWire(color, letter);
                allList.pop();
                newid = allList[allList.length-1];
                $('#'+newid).addClass("glyphicon glyphicon-remove");
                count = redocc+blackocc+blueocc-2;
                $('#AbcCountlist').text(count); 
                $(this).closest("p").remove();
                 $('#AbcAnswer').text("");


            });
            });
        });
    });

    $('#Morse').on('show.bs.tab', function() {
        $("#morse-panel").load("htmlModules/MorseModule.html", function() {
            $('#refresh').click(function(){$('#Morse').trigger('show.bs.tab');});
            //Morse code will go here
            $('#moduleToggleDiv').show();
            var wordList = morseList();
            var typeList = [];
            var letterList = [];
             $('#testtest').empty();
            for (i=0; i<wordList.length; i++) {
                    $('#testtest').append('<input type="button" class="btn btn-default word" name="'+wordList[i][1]+'" value="'+wordList[i][0]+'";/>')
                   // <input type="button" class="btn btn-secondary" value="Black";/>
                }
            $('.word').click(function() {
                console.log("button clicked");
                var solution = $(this).attr("name");
                console.log(solution);
                $('#solutiontext').text("Enter " + solution+" MHz");
            })
            $('.morse').click(function(event) {
                console.log("button");
                var type = $(this).val();
                typeList.push(type);
                $('#typeList').text(typeList.join(", "));
            })
            $('#morseSubmit').click(function() {
                var letter = morseLetter(typeList);
                console.log(letter);
                letterList.push(letter);
                wordList = morseReduceWords(letter, wordList);
                console.log(wordList);
                typeList = [];
                $('#typeList').text(typeList.join(", "));
                $('#letterList').text(letterList.join(", "));
                $('#testtest').empty();
                for (i=0; i<wordList.length; i++) {
                    $('#testtest').append('<input type="button" class="btn btn-default word" name="'+wordList[i][1]+'" value="'+wordList[i][0]+'";/>')
                   // <input type="button" class="btn btn-secondary" value="Black";/>
                }
                $('.word').click(function() {
                console.log("button clicked");
                var solution = $(this).attr("name");
                $('#solutiontext').text("Enter " + solution+" MHz");
            })
            })
        });
    });

    $('#Maze').on('show.bs.tab', function() {
        $("#maze-panel").load("htmlModules/MazeModule.html", function() {
            $('#refresh').click(function(){$('#Maze').trigger('show.bs.tab');});
            //Maze code will go here
            $('#moduleToggleDiv').show();
            $('#mazeSubmit').click(function() {
                var start = Number($('#mazeStart').val());
                var end = Number($('#mazeEnd').val());
                var circle = Number($('#mazeCircle').val());
                var result1 = mazeLogic(circle, start, end);
                var result = result1.toString();
                result = result.replace(/,/g, ", ");
                $('#mazeSolution').text(result);
                $('#mazeSubmit').hide();
                $('#mazeFinal').show();
            })

            $('#mazeDone').click(function() {
                $('#MazeModule').hide();
            })
        });
    });

    $('#Password').on('show.bs.tab', function() {
        $("#password-panel").load("htmlModules/PasswordModule.html", function() {
            $('#refresh').click(function(){$('#Password').trigger('show.bs.tab');});
            //Password code will go here
            $('#moduleToggleDiv').show();
             var string = String(passwordWords());
            string = string.replace(/,/g, ", ");
            $('#wordslist').text(string);
            $('#passwordDone').click(function() {
        $('#PasswordModule').hide();
        })
        $('#passwordCol1, #passwordCol2, #passwordCol3, #passwordCol4, #passwordCol5').click(function(event) {
            var button = event.target.id;
            var placement = parseInt(button.replace("passwordCol", "")-1);
            var letters = [];
            letters = $('#'+button+'1').val();
            letters = letters.split("");
            //letters = letters.split(" ");
            var answer = password(letters, placement);
            var string = String(words);
            string = string.replace(/,/g, ", ");
            $('#wordslist').text(string);
        })
        });
    });

    $('#Memory').on('show.bs.tab', function() {
        $("#memory-panel").load("htmlModules/MemoryModule.html", function() {
            $('#refresh').click(function(){$('#Memory').trigger('show.bs.tab');});
            //Memory code will go here
            $('#moduleToggleDiv').show();
            var round = 1;
            round = 1;
            var memoryList = getMemoryList();
            $("#mem1, #mem2, #mem3, #mem4").click(function(event) {
                var number = $(this).attr('name');
                //call memory function in BombLogic
                var answer = memory(number, round, memoryList);
                //display answer
                $('#memoryAnswer').text(answer);
                //If no more rounds
                if (round >= 5) {
                    console.log("rounds over");
                    //show done button, there are no more rounds
                    $('#memoryDonediv').show();
                } else {
                //if the answer was a position
                if (answer.indexOf("position") != -1) {
                    //find out the label for the round
                    $("#memoryLabel").show();
                }
                else {
                    //find out the position for the round
                    $("#memoryPosition ").show(); 
                    }
                }
            });
             
            $("#lab1, #lab2, #lab3, #lab4").click(function(event) {
                var label = parseInt($(this).attr('name'));
                memoryList[round-1].valuee = label;
                $("#memoryLabel").hide();
                round=round+1
                //update the round in html
                $('#memoryRound').text("Round " + round); 
                $("#memoryAnswer").text("");
                });

                $("#pos1, #pos2, #pos3, #pos4").click(function(event) {
                position = parseInt($(this).attr('name'));
                memoryList[round-1].position = position;
                $("#memoryPosition").hide(); 
                round=round+1;
                //update the round in html
                $('#memoryRound').text("Round " + round); 
                $("#memoryAnswer").text("");

            });

            $('#memoryDone').click(function() {
                $('#MemoryModule').hide();
            })
        });
    });


    //filling out initial questions
    $("#SubmitModulesButton").click(function(){

        $("#ModuleSelection").hide();
        $("#SubmitModulesButton").hide();

        ConditionsList = initialQuery(ModuleList);

        if (ConditionsList.length > 0) {
            $("#bomb-questions").show();
            for (i=0; i<ConditionsList.length; i++) {
                $("#" + ConditionsList[i]).show();
            }
        }
        else {
            console.log("no conditions needed");
            for (i=0; i<ModuleList.length; i++) {
                var tab = $("#"+ModuleList[i]);
            
            if (i == 0) {
                tab.tab('show');
            }
            
            tab.parent().show();
            $("#modules").show();
        }
        
        $('#strike').show();
        $('#moduleRefresh').show();

    }
        
     //   $('#strike').show();
        });


    //after filling out questions
    $("#SubmitConditionsButton").click(function(){
        $("#bomb-questions").hide();
        for (i=0; i<ModuleList.length; i++) {
            var tab = $("#"+ModuleList[i]);
            
            if (i == 0) {
                tab.tab('show');
            }
            
            tab.parent().show();

        }
        $("#modules").show();
        $('#strike').show();
        $('#moduleRefresh').show();
    });


    //button function rachael did not write  
    $('.btn-toggle').click(function() {
        $(this).find('.btn').toggleClass('active');  
        
        if ($(this).find('.btn-primary').size()>0) {
            $(this).find('.btn').toggleClass('btn-primary');
        }
        if ($(this).find('.btn-danger').size()>0) {
            $(this).find('.btn').toggleClass('btn-danger');
        }
        if ($(this).find('.btn-success').size()>0) {
            $(this).find('.btn').toggleClass('btn-success');
        }
        if ($(this).find('.btn-info').size()>0) {
            $(this).find('.btn').toggleClass('btn-info');
        }
        
        $(this).find('.btn').toggleClass('btn-default');
           
    });
    $('.btn-rachael').click(function(event) {
        $(this).find('.btn').removeClass('btn-primary').addClass('btn-default');
        $(event.target).addClass("btn-primary"); 

    });

    $('#moduleToggle').click(function() {
        $('#moduleToggleDiv').hide();
        $("#loadModule").empty();
    });

    $('.strike').click(function() {
        $('.strike').append("<span class='glyphicon glyphicon-remove strikeicon'></span>");

        if (strikes == 0) { 
            $('.strike').addClass('strikeone');
        }
        else if (strikes == 1) {
           // $('.strike').removeClass('strikeone');
            $('.strike').addClass('striketwo');
        }
        else if (strikes == 2) {
            //$("html").css("background-color", "black");
            $('html').html('<img src="Symbols/bg.png" id="bg" class="img-responsive">');
        }
        strikes = strikes + 1;
    });
    $('#refresh').click(function(event) {
        console.dir($(this));
        console.dir(event);

    });


    $('#ModuleSelection').fadeIn('slow');

 
});