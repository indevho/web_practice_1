$(function () {
    var movingdiv = $('<div class="movingitem">')
    var movingw = $('<div class="movingwrapper">')
    var body = $("body")
    movingcnt = 0
    nfirstmove = false
    var mdet = $('<div id="menudetail>"')
    body.prepend(mdet)

    menu=['123,123,123,123','456,456,456,456','aaa,aaa,aaa','bbb,bbb,bbb,bbb,bbb']

    body.prepend(movingw)
    movingw.prepend(movingdiv)

    for (i = 1; i <= 5; i++) {
        var a1 = $('<a href="https://www.lottecinema.co.kr/NLCHS#none">')
        var movingimg = $('<img class="formove"' + i + '>')
        if (i == 5) { movingimg.attr('src', '../ppp/headslide' + 1 + '.jpg') } else {
            movingimg.attr('src', '../ppp/headslide' + i + '.jpg')
        }
        movingimg.css('height', '400px')
        movingimg.css('width', '20%')
        movingdiv.append(a1)
        a1.append(movingimg)


    }
    function moving1() {

        if (movingcnt < 5) {
            movingdiv.stop().animate({ left: -100 * movingcnt + '%' }, 200)
            movingcnt++
        } else {
            movingdiv.stop().animate({ left: -4.5+ 'px' }, 0)
            // 4.5냐 왜 4도 5도 아니고.
            movingcnt = 1
            nfirstmove = true
        }
    }
   
    // $(".body").append($())
    var currMain = -1
    $(".main").click(function(){
        console.log("나는 몇번"+$(this).index())
        const titleBasic = {	color:"#000"}
        //클릭함수 내부 basic.
        const def1={ position: 'static',}
        $(".main > .title").stop().animate(titleBasic, 500,'easeOutBounce')


        if($(this).index() == currMain){
            console.log($(this).index()+"::닫히기::"+currMain)
            currMain=-1


        }else{
            console.log($(this).index()+"::열리기::"+currMain)

           
            
            currMain=$(this).index()
            $(this).children(".title").stop().animate( { color:"#fff"}, 500,'easeOutBounce')
        }         
    })






    setInterval(moving1, 900)
})