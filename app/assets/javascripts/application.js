// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
var title = "javascriptが使えました";
alert(title);

$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

$(document).ready(function () {
  $("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'slide',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'block',
    // 子要素の種類('div' or 'img')
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 3000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
  });
});

$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

class Main {
  
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("何人分の情報を入力しますか：");
    int n = scanner.nextInt();
    
    int maxAge = 0;
    int totalAge = 0;
    
    for (int i = 0; i < n; i++) {
      System.out.println(i + 1 + "人目");
      
      System.out.print("名前：");
      String firstname = scanner.next();
      
      System.out.print("名字：");
      String lastName = scanner.next();
      
      System.out.print("年齢：");
      int age = scanner.nextInt();
      
      if (age > maxAge){
        maxAge = age;
      }
      
      totalAge += age;
      
      System.out.print("身長(m)：");
      double height = scanner.nextDouble();
      
      System.out.print("体重(kg)：");
      double weight = scanner.nextDouble();
      
      Person.printData(firstname, lastName, age, height, weight);
    }
    
    System.out.println("最高年齢は" + maxAge + "歳です");
    System.out.println("平均年齢は" + totalAge/n + "歳です");
  }
  
}