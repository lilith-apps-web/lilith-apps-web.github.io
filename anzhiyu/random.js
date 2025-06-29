var posts=["apps/StartAllBack/","apps/windows-iso/","apps/vlc-player/","apps/ycwin11/","apps/PasteBar/","apps/zTasker/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };