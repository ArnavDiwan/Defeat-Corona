class Security {

    constructor(){

        this.access1 = createInput("VARIABLE")
        this.access1.position(-200,-200);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Play Level 1');
        this.button1.position(300,430);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code")
        this.access2.position(400,400);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Play Level 2');
        this.button2.position(400,430);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code")
        this.access3.position(500, 400);
        this.access3.style('background', 'white')

        this.button3 = createButton('Play Level 3')
        this.button3.position(500, 430);
        this.button3.style('background', 'lightgrey')

        this.access4 = createInput("Code");
        this.access4.position(600, 400);
        this.access4.style('background', 'white');

        this.button4 = createButton('Play Level 4');
        this.button4.position(600, 430);
        this.button4.style('background', 'lightgrey');
    }

    display(){

        this.button1.mousePressed(() => {
           if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.position(-20, -20);
                gameState = 10;
                object.visible = false;
                this.button2.position(-30, -30)
                this.access2.position(-30, -30)
                this.button3.position(-30, -30)
                this.access3.position(-30, -30)
                this.button4.hide();
                this.access4.hide();
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.position(-30, -30)
                this.access2.position(-30, -30)
                gameState = 20;
                object.visible = false;
                this.button3.position(-30, -30)
                this.access3.position(-30, -30)
                this.button1.position(-30, -30)
                this.access1.position(-30, -30)
                this.button4.hide();
                this.access4.hide();
                back.x = 3000;
            }
        });

        this.button3.mousePressed(()=> {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide()
                this.button2.hide();
                this.access2.hide();
                this.button1.hide();
                this.access1.hide();
                this.button4.hide();
                this.access4.hide();
                back.x = 3000;
                object.visible = false;
                gameState = 30;

            }
        });

        this.button4.mousePressed(()=> {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button3.hide();
                this.access3.hide()
                this.button2.hide();
                this.access2.hide();
                this.button1.hide();
                this.access1.hide();
                this.button4.hide();
                this.access4.hide();
                back.x = 3000;
                object.visible = false;
                gameState = 40;

            }
        });

    }
}