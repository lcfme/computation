const cat = () => {
    var self = {};
    self.meow = () => {
        return 'MEOW';
    }
    return self;
}

const blackcat = (self, options) => {
    Object.keys(options).forEach((k) => {
        self[k] = options[k];
    });
    return self;
}

const newblackcat = blackcat(cat(), {
	color: 'black',
	meow: (sound) => {
		return sound ? sound : 'MEOW';
	},
	Q_DAMAGE: () => {
		return 100;
	},
	W_DAMAGE: () => {
		return 80;
	},
	E_DAMAGE: () => {
		return 50; 
	},
	R_DAMAGE: () => {
		return 500;
	},
});