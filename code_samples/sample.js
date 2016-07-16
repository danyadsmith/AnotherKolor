var storyWriter = function(){
  var story = "";
  var storyBackups = [];
  var backupNo = 0;
  return {
    addWords: function(words) { story += words; },
    erase:    function() { story = ""; },
    read:     function() { alert(story); },
    backup:   function() { storyBackups[backupNo] = story; backupNo++ },
    versions: storyBackups,
    restore:  function(backupNo){ story = storyBackups[backupNo]; }
  };
};

var littleRed = storyWriter();

littleRed.addWords("Once upon a time there lived in a certain village a little country girl, the prettiest creature who was ever seen.");
littleRed.addWords("Her mother was excessively fond of her; and her grandmother doted on her still more.");
littleRed.addWords("This good woman had a little red riding hood made for her.");