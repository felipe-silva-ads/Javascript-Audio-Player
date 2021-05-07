//get the image folder
const coverPath = function(file) {
    return `images/${file}`;
  };
//get the sound folder
  const audioPath = function(file) {
    return `sounds/${file}`;
  };

function secondsToMinutes(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
}

export {coverPath, audioPath, secondsToMinutes};

