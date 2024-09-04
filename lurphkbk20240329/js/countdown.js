const countdown = ()=>{
    const now = new Date();
    const target = new Date('2023/8/31 23:59:59'); //対象日時
    const differ = target.getTime() - now.getTime();
    if(differ > 0){
      $("#countdown").show();
    }else{
      $("#countdown").hide();
    } 
  
    const ms = Math.floor(differ);
    const sec = Math.floor(differ / 1000 % 60);
    const min = Math.floor(differ / 1000 / 60 % 60);
    const hour = Math.floor(differ / 1000 / 60 / 60 % 24);
    const day = Math.floor(differ / 1000 / 60 / 60 / 24);
  
    // document.querySelector('#countdown .miriseconds').textContent = String(ms).slice(-3, -1);
    document.querySelector('#countdown .seconds').textContent = String(sec).padStart(2, '0');
    document.querySelector('#countdown .minutes').textContent = String(min).padStart(2, '0');
    document.querySelector('#countdown .hours').textContent = String(hour).padStart(2, '0');
    // document.querySelector('#countdown .day').textCntent =o String(day).padStart(2, '0');
  }
  setInterval(countdown, 1);