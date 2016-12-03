var user={};

$(function(){
    var currentQuestion=1;

    var marginGroupHeight=$('.question#q'+currentQuestion).height();
    $('.questionOption').css('margin-top', marginGroupHeight+'px');

    var marginItemHeight=$('.questionOptionVariant#qov'+currentQuestion).height()+10;
    $('.questionButton').css('margin-top', marginItemHeight+'px');

    $('.questionNum').text('Питання '+currentQuestion);

    var firstInput=$('.questionOptionVariant#qov'+currentQuestion).children().first().val();
    var lastInput=$('.questionOptionVariant#qov'+currentQuestion).children().last().val();

    $('.questionButton').click(function() {
          $(".pbarItem#pb"+currentQuestion).removeClass('pbarItemCurrent');
          $(".pbarItem#pb"+currentQuestion).addClass('pbarItemVisited');

          firstInput=$('.questionOptionVariant#qov'+currentQuestion).children().first().val();
          lastInput=$('.questionOptionVariant#qov'+currentQuestion).children().last().val();
          switch(currentQuestion) {
            case 1:
            user['rooms']=firstInput;
            break;
            case 2:
            user['roommates']=firstInput;
            break;
            case 3:
            user['electricity']=firstInput;
            break;
            case 4:
            user['gas']=firstInput;
            break;
            case 5:
            user['hotWater']=firstInput;
            break;
            case 6:
            user['carEngineVolume']=firstInput;
            user['carDistance']=lastInput;
            break;
            case 7:
            user['airTravel']=firstInput;
            break;
            case 8:
            user['age']=firstInput;
            break;
            case 9:
            user['gender']=firstInput;
            break;
            case 10:
            user['salary']=firstInput;
            break;
            default:
            break;
          }

          currentQuestion+=1;
          $(".pbarItem#pb"+currentQuestion).addClass('pbarItemCurrent');
          $('.question').each(function() {
            $(this).css('visibility','hidden');
          });
          $('.questionOptionVariant').each(function() {
            $(this).css('visibility','hidden');
          });
          $('.question#q'+currentQuestion).css('visibility','visible');
          $('.questionOptionVariant#qov'+currentQuestion).css('visibility','visible');
          marginGroupHeight=$('.question#q'+currentQuestion).height();
          marginItemHeight=$('.questionOptionVariant#qov'+currentQuestion).height()+10;
          $('.questionOption').css('margin-top', marginGroupHeight+'px');
          $('.questionButton').css('margin-top', marginItemHeight+'px');
          $('.questionNum').text('Питання '+currentQuestion);
    });

});
