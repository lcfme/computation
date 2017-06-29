const number = (value) => {
	var self = {};
	self.value = value;
	self.toString = () => {
		return `${self.value}`;
	}
	self.can_reducing = () => {
		return false;
	}
	return self;
}



const adds = (left, right) => {
	var self = {};
	self.left = left;
	self.right = right;
	self.toString = () => {
		return `${self.left} + ${self.right}`;
	}
	self.can_reducing = () => {
		return true;
	}
	self.reduce = (env) => {
		if (self.left.can_reducing()) {
			return adds(self.left.reduce(env), self.right);
		} else if (self.right.can_reducing()) {
			return adds(self.left, self.right.reduce(env));
		} else {
			return number(self.left.value + self.right.value);
		}
	}
	return self;
}



const minus = (left, right) => {
	var self = {};
	self.left = left;
	self.right = right;
	self.toString = () => {
		return `${self.left} - ${self.right}`;
	}
	self.can_reducing = () => {
		return true;
	}
	self.reduce = (env) => {
		if (self.left.can_reducing()) {
			return minus(self.left.reduce(env), self.right);
		} else if (self.right.can_reducing()) {
			return minus(self.left, self.right.reduce(env));
		} else {
			return number(self.left.value - self.right.value);
		}
	}
	return self;
}



const times = (left, right) => {
	var self = {};
	self.left = left;
	self.right = right;
	self.toString = () => {
		return `${self.left} * ${self.right}`;
	}
	self.can_reducing = () => {
		return true;
	}
	self.reduce = (env) => {
		if (self.left.can_reducing()) {
			return times(self.left.reduce(env), self.right);
		} else if (self.right.can_reducing()) {
			return times(self.left, self.right.reduce(env));
		} else {
			return number(self.left.value * self.right.value);

		}
	}
	return self;
}



const divides = (left, right) => {
	var self = {};
	self.left = left;
	self.right = right;
	self.toString = () => {
		return `${self.left} / ${self.right}`;
	}
	self.can_reducing = () => {
		return true;
	}
	self.reduce = (env) => {
		if (self.left.can_reducing()) {
			return divides(self.left.reduce(env), self.right);
		} else if (self.right.can_reducing()) {
			return divides(self.left, self.right.reduce(env));
		} else {
			return number(self.left.value / self.right.value);

		}
	}
	return self;
}
const variable = (name) => {
	var self = {};
	self.name = name;
	self.toString = () => {
		return self.name;
	}
	self.can_reducing = () => {
		return true;
	}
	self.reduce = (env) => {
		return env[self.name];
	}
	return self;
}

const asign = (name, right) => {
	var self = {};
	self.name = name;
	self.right = right;
	self.toString = () => {
		return `${left} = ${right}`;
	}
	self.can_reducing = () => {
		return true;
	}
	self.reduce = (env) => {
		if (self.right.can_reducing()) {
			return asign(name, right.reduce());
		} else {
			env[self.name] = self.right;
			return self.right;
		}
	}
	return self;
}


const mac = (exp, env) => {
	var self = {};
	self.exp = exp;
	while (self.exp.can_reducing()) {
		self.exp = self.exp.reduce(env);
	}
	return self.exp;
}