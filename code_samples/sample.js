var storyWriter = function(){
  var story = '';
  var storyBackups = [];
  var backupNo = 0;
  return {
    addWords: function(words) { story += words; },
    erase:    function() { story = ''; },
    read:     function() { console.log(story); },
    backup:   function() { storyBackups[backupNo] = story; backupNo++; },
    versions: storyBackups,
    restore:  function(backupNo){ story = storyBackups[backupNo]; }
  };
};

var littleRed = storyWriter();

littleRed.addWords('Once upon a time there lived in a certain village a little country girl, the prettiest creature who was ever seen. ');
littleRed.addWords('Her mother was excessively fond of her; and her grandmother doted on her still more. ');
littleRed.addWords('This good woman had a little red riding hood made for her. ');
littleRed.read();
littleRed.backup();
littleRed.erase();
littleRed.addWords('Once upon a time there was a dear little girl who was loved by every one who looked at her, but most of all by her grandmother, and there was nothing that she would not have given to the child. ');
littleRed.addWords('Once she gave her a little cap of red velvet, which suited her so well that she would never wear anything else; so she was always called ‘Little Red-Cap.’');
littleRed.backup();
littleRed.read();
console.log(littleRed.versions.length);
console.log(littleRed.versions);
