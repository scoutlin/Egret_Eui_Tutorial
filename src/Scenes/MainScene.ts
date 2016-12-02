class MainScene extends eui.Component
{
    public Card00:CardPrototype;
    public Card01:CardPrototype;
    public Card02:CardPrototype;
    public Card03:CardPrototype;
    public Card04:CardPrototype;
    public Card05:CardPrototype;
    public Card06:CardPrototype;
    public Card07:CardPrototype;
    public Card08:CardPrototype;
    public Card09:CardPrototype;
    
    private isComplete:boolean = false;
    private tweenArray:egret.Tween[];
    private cardArray:CardPrototype[];
    private tween0:egret.Tween = egret.Tween.get(this.Card00);
    private tween1:egret.Tween = egret.Tween.get(this.Card01);
    private tween2:egret.Tween = egret.Tween.get(this.Card02);
    private tween3:egret.Tween = egret.Tween.get(this.Card03);
    private tween4:egret.Tween = egret.Tween.get(this.Card04);
    private tween5:egret.Tween = egret.Tween.get(this.Card05);
    private tween6:egret.Tween = egret.Tween.get(this.Card06);
    private tween7:egret.Tween = egret.Tween.get(this.Card07);
    private tween8:egret.Tween = egret.Tween.get(this.Card08);
    private tween9:egret.Tween = egret.Tween.get(this.Card09);
    

    public constructor()
    {
        super();
        this.skinName = "/resource/eui_Scenes/MainScene.exml";
        this.addEventListener(egret.ProgressEvent.COMPLETE, this.OnComplete, this)

    }

    private OnComplete()
    {   
        this.isComplete = true;
        this.tweenArray = [];
        this.cardArray = [];

        this.tweenArray[0] = this.tween0;
        this.tweenArray[1] = this.tween1;
        this.tweenArray[2] = this.tween2;
        this.tweenArray[3] = this.tween3;
        this.tweenArray[4] = this.tween4;
        this.tweenArray[5] = this.tween5;
        this.tweenArray[6] = this.tween6;
        this.tweenArray[7] = this.tween7;
        this.tweenArray[8] = this.tween8;
        this.tweenArray[9] = this.tween9;

        this.cardArray[0] = this.Card00;
        this.cardArray[1] = this.Card01;
        this.cardArray[2] = this.Card02;
        this.cardArray[3] = this.Card03;
        this.cardArray[4] = this.Card04;
        this.cardArray[5] = this.Card05;
        this.cardArray[6] = this.Card06;
        this.cardArray[7] = this.Card07;
        this.cardArray[8] = this.Card08;
        this.cardArray[9] = this.Card09;
    }

    public DoBreathForAllCard()
    {
        //OK---
        //this.Card00.visible = false;
        //-----

        //The get of tween only can affect in local area...................
        //this.tween0 = egret.Tween.get(this.Card00);
        //this.tween0.to({scaleX:10}, 2000);
        //------------------------------------------------------------------

        for(var i:number = 0; i < 10; i++)
        {
            this.tweenArray[i] = egret.Tween.get(this.cardArray[i]);

            this.tweenArray[i].to({scaleX:2},   1000).to
                                 ({scaleY:2},   1000).to
                                 ({scaleX:0.5}, 2000).to
                                 ({scaleY:0.5}, 2000).to
                                 ({scaleX:1},   1000).to
                                 ({scaleY:1},   1000);
        }       
    }
}