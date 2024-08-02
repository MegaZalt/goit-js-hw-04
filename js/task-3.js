const profile = {
  username: "Jacob",
    playTime: 300,
  
    changeUsername(newName) {
        
    }
    
    updatePlayTime(hours) {
        if (typeof hours === 'number' && hours > 0)
            this.playTime += hours;
    }
    
    getInfo() {}

};
