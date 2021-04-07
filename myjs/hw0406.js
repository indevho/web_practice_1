$(document).ready(function(){
    $('body').append('<div id="container"></div>')
    var cont= $('#container')
    var no=0
    function appendtoCont(element,rpt){
        for(var i=0; i<rpt; i++){
        var ttt='<'+element+' id='+element+'_'+no+'></'+element+'>'
        cont.append(ttt)
        no++
        }
    }
    appendtoCont('div',3) 
    cont.css({
        width: '1000px',
        height: '700px',
        'background-image': 'url("../fff/woo01.jpg")',
        'background-size': '1000px 700px'
    })
    var head=$("#div_0")
    var content= $("#div_1")
    var descript1=$("#div_2")
    head.html("Creative jQuery Samle")
    head.css({
        width: '1000px',
        height: '100px',
        color: 'blue',
        fontSize: '20px'
    })
    content.html("Creative jQuery")
    content.css({
        width: '700px',
        height: '300px',
        background: '#222',
        opacity:'0.6',
        color: 'white',
        'text-align': 'center',
        fontSize: '110px',
        'line-height': '130px',
    })
    descript1.html("Creative jQuery Sample")
    descript1.css({
        margin : '30px auto auto auto',
        width: '700px',
        height: '20px',        
        background: '#777',
    })
})