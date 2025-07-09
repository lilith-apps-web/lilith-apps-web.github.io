var posts=["apps/rufus/","apps/StartAllBack/","apps/vlc-player/","apps/windows-iso/","apps/ycwin11/","apps/zTasker/","apps/PasteBar/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };