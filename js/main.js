        let x = '<span class="x"><i class="fa-solid fa-xmark"></i></span>'
        let o = '<span class="o"><i class="fa-solid fa-o"></i></span>' 
        let tie = document.querySelector('.counter-tie')
        let xolist = [x,o]
        let indexturn = 0
        let end = false 
        let counter = 0
        let tiecounter = 0

        let listp1 = document.querySelectorAll('.line1 p')
        let listp2 = document.querySelectorAll('.line2 p')
        let listp3 = document.querySelectorAll('.line3 p')

        let player1 = document.querySelector('.counter-x')
        let player2 = document.querySelector('.counter-o')

        let res1 = 0 , res2 = 0
        player2.innerHTML = 0
        player1.innerHTML = 0

        let boxturni1 = document.querySelector('.box span:first-child i')
        let boxturni2 = document.querySelector('.box span:last-child i')

        let boxturn2 = document.querySelector('.box span:last-child p')
        let boxturn1 = document.querySelector('.box span:first-child p')
        let boxlist = [boxturn1,boxturn2]

        // check if tie
        function checkequal(){
            if (counter == 8 && end != true)
            {
                document.querySelector('.borde').setAttribute('style','animation: scale infinite linear 0.5s;')
                tie.innerHTML = tiecounter += 1
                end = true
            }else{
                counter += 1
            }
        }

        // scale animation
        function scale(l1,l2,l3,one,two,three){
            document.querySelector(`.${l1} p:nth-child(${one}) span`).setAttribute('style','animation: scale infinite linear 0.5s;')
            document.querySelector(`.${l2} p:nth-child(${two}) span`).setAttribute('style','animation: scale infinite linear 0.5s;')
            document.querySelector(`.${l3} p:nth-child(${three}) span`).setAttribute('style','animation: scale infinite linear 0.5s;')
        }
        
        //check if win
        function checkwin(){
            if (listp1[0].innerHTML == o && listp1[1].innerHTML == o && listp1[2].innerHTML == o){
                scale('line1','line1','line1',1,2,3)
                player2.innerHTML = res2 +=1
                end = true
            }
            if (listp1[0].innerHTML == x && listp1[1].innerHTML == x && listp1[2].innerHTML == x){
                scale('line1','line1','line1',1,2,3)
                player1.innerHTML = res1 +=1
                end = true
            }
            
            if (listp2[0].innerHTML == x && listp2[1].innerHTML == x && listp2[2].innerHTML == x){
                scale('line2','line2','line2',1,2,3)
                player1.innerHTML = res1 +=1
                end = true
            }
            if (listp2[0].innerHTML == o && listp2[1].innerHTML == o && listp2[2].innerHTML == o){
                scale('line2','line2','line2',1,2,3)
                player2.innerHTML = res2 +=1
                end = true
            }
            if (listp3[0].innerHTML == x && listp3[1].innerHTML == x && listp3[2].innerHTML == x){
                scale('line3','line3','line3',1,2,3)
                player1.innerHTML = res1 +=1
                end = true
            }
            if (listp3[0].innerHTML == o && listp3[1].innerHTML == o && listp3[2].innerHTML == o){
                scale('line3','line3','line3',1,2,3)
                player2.innerHTML = res2 +=1
                end = true
            }

            // rows 2

            if (listp1[0].innerHTML == o && listp2[0].innerHTML == o && listp3[0].innerHTML == o){
                scale('line1','line2','line3',1,1,1)
                player2.innerHTML = res2 +=1
                end = true
            }
            if (listp1[0].innerHTML == x && listp2[0].innerHTML == x && listp3[0].innerHTML == x){
                scale('line1','line2','line3',1,1,1)
                player1.innerHTML = res1 +=1
                end = true
            }
            if (listp1[1].innerHTML == o && listp2[1].innerHTML == o && listp3[1].innerHTML == o){
                scale('line1','line2','line3',2,2,2)
                player2.innerHTML = res2 +=1
                end = true
                
            }
            if (listp1[1].innerHTML == x && listp2[1].innerHTML == x && listp3[1].innerHTML == x){
                scale('line1','line2','line3',2,2,2)
                player1.innerHTML = res1 +=1
                end = true
                
            }
            if (listp1[2].innerHTML == o && listp2[2].innerHTML == o && listp3[2].innerHTML == o){
                scale('line1','line2','line3',3,3,3)
                player2.innerHTML = res2 +=1
                end = true
                
            }
            if (listp1[2].innerHTML == x && listp2[2].innerHTML == x && listp3[2].innerHTML == x){
                scale('line1','line2','line3',3,3,3)
                player1.innerHTML = res1 +=1
                end = true
                
            }

            // extr

            if (listp1[0].innerHTML == o && listp2[1].innerHTML == o && listp3[2].innerHTML == o){
                scale('line1','line2','line3',1,2,3)
                player2.innerHTML = res2 +=1
                end = true
                

            }
            if (listp1[0].innerHTML == x && listp2[1].innerHTML == x && listp3[2].innerHTML == x){
                scale('line1','line2','line3',1,2,3)
                player1.innerHTML = res1 +=1
                end = true
                
            }

            if (listp1[2].innerHTML == o && listp2[1].innerHTML == o && listp3[0].innerHTML == o){
                scale('line1','line2','line3',3,2,1)
                player2.innerHTML = res2 +=1
                end = true
                
            }
            if (listp1[2].innerHTML == x && listp2[1].innerHTML == x && listp3[0].innerHTML == x){
                scale('line1','line2','line3',3,2,1)
                player1.innerHTML = res1 +=1
                end = true
            }
        }

        //turn show
        boxturni1.style.color = 'white'
        boxlist[0].style.opacity = '1'
        function showturn(){
            if (indexturn == 0){
                boxturni1.style.color = 'white'
                boxturni2.style.color = 'hsl(209deg 65% 53%)'
                boxlist[0].style.opacity = '1'
                boxlist[1].style.opacity = '0'
            }else{
                boxturni1.style.color = 'hsl(189deg 64% 53%)'
                boxturni2.style.color = 'white'
                boxlist[1].style.opacity = '1'
                boxlist[0].style.opacity = '0'
            };
        };

        // game test
        document.querySelectorAll('.borde p').forEach(function(x_o){
            x_o.addEventListener('click' , function(){
                if (end != true){
                    if (x_o.innerHTML != x && x_o.innerHTML != o){
                        x_o.innerHTML =  xolist[indexturn]
                        checkwin()
                        checkequal()
                        if (indexturn == 1){
                            indexturn = 0
                        }else {
                            indexturn = 1
                        }
                        showturn()
                    }
                }
            })
        })
        

        // effect
        let crew = document.querySelector('.gear')
        let i = document.querySelector('.gear > i')
        ,darkmode = document.querySelector('.list-gear')
        let again = document.querySelector('.bottom div:first-child i')

        crew.addEventListener('click' , ()=>{
            i.classList.toggle('rotate')
            darkmode.setAttribute('style','display:block;')
            if (getComputedStyle(darkmode).opacity == '0'){
            darkmode.setAttribute('style','opacity:1;bottom:85px;display:block;')
            }else{
                darkmode.setAttribute('style','opacity:0;')
            }
        })

        again.addEventListener('click' , ()=>{
            again.classList.toggle('rotate')
        })

        // event referusch
        let rotate = document.querySelector('.rotate')
        rotate.addEventListener('click' , ()=>{
            document.querySelectorAll('.borde p span').forEach((x)=>{
                x.remove()
                end = false
                counter = 0
                document.querySelector('.borde').setAttribute('style','animation: ;')
            })
        })

        // dark mode
        darkmode.addEventListener('click',()=>{ 
            document.body.classList.toggle('darkmode')
        ; })

    