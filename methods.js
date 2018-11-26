import _ from 'lodash';

const requireParameterCount = ($count, $parameters) => {
	if ($parameters.length < $count) {
		throw new 'Validation rule $rule requires at least $count parameters.';
	}
};

const getSize = (attribute, value) => {
	if (_.isNumber(parseInt(value))) {
		return parseInt(value);
	} else if (_.isArray(value)) {
		return value.length;
	} else if (value instanceof File) {
		return value.size / 1024;
	}

	return value.length;
};

export default {
	required: (attribute, value) => {
		if (_.isNull(value)) {
			return false;
		} else if (_.isString(value) && value == '') {
			return false;
		} else if (_.isArray(value) && value.length < 1) {
			return false;
		} else if (value instanceof File) {
			return value.name !== '';
		}

		return true;
	},
	accepted: () => {
		// TODO: accepted validator  
	},
	activeUrl: () => {
		// TODO: activeUrl validator  
	},
	bail: () => {
		// TODO: bail validator  
	},
	before: () => {
		// TODO: before validator  
	},
	beforeOrEqual: () => {
		// TODO: beforeOrEqual validator  
	},
	after: () => {
		// TODO: after validator  
	},
	afterOrEqual: () => {
		// TODO: afterOrEqual validator  
	},
	alpha: () => {
		// TODO: alpha validator  
	},
	alphaDash: () => {
		// TODO: alphaDash validator  
	},
	alphaNum: () => {
		// TODO: alphaNum validator  
	},
	array: () => {
		// TODO: array validator  
	},
	between: () => {
		// TODO: between validator  
	},
	boolean: () => {
		// TODO: boolean validator  
	},
	confirmed: () => {
		// TODO: confirmed validator  
	},
	date: () => {
		// TODO: date validator  
	},
	dateFormat: () => {
		// TODO: dateFormat validator  
	},
	dateEquals: () => {
		// TODO: dateEquals validator  
	},
	different: () => {
		// TODO: different validator  
	},
	digits: () => {
		// TODO: digits validator  
	},
	digitsBetween: () => {
		// TODO: digitsBetween validator  
	},
	dimensions: () => {
		// TODO: dimensions validator  
	},
	distinct: () => {
		// TODO: distinct validator  
	},
	email: (attribute, value) => {
		// eslint-disable-next-line
		let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		return re.test(value);
	},
	exists: () => {
		// TODO: exists validator  
	},
	unique: () => {
		// TODO: unique validator  
	},
	file: () => {
		// TODO: file validator  
	},
	filled: () => {
		// TODO: filled validator  
	},
	gt: () => {
		// TODO: gt validator  
	},
	lt: () => {
		// TODO: lt validator  
	},
	gte: () => {
		// TODO: gte validator  
	},
	lte: () => {
		// TODO: lte validator  
	},
	image: () => {
		// TODO: image validator  
	},
	in: () => {
		// TODO: in validator  
	},
	inArray: () => {
		// TODO: inArray validator  
	},
	integer: () => {
		// TODO: integer validator  
	},
	ip: () => {
		// TODO: ip validator  
	},
	ipv4: () => {
		// TODO: ipv4 validator  
	},
	ipv6: () => {
		// TODO: ipv6 validator  
	},
	json: () => {
		// TODO: json validator  
	},
	min: (attribute, value, parameters) => {
		// TODO: max validator  
		requireParameterCount(1, parameters, 'max');
		return getSize(attribute, value) >= parseInt(parameters[0]);
	},
	mimes: (attribute, value, parameters) => {
		// TODO: mimes validator  
		if (!(value instanceof File)) {
			return false;
		}

		return value.name !== '' && parameters.indexOf(value.type) !== -1;
	},
	mimetypes: () => {
		// TODO: mimetypes validator  
	},
	max: (attribute, value, parameters) => {
		requireParameterCount(1, parameters, 'max');
    
		return getSize(attribute, value) <= parseInt(parameters[0]);
	},
	nullable: () => {
		// TODO: nullable validator  
	},
	notIn: () => {
		// TODO: notIn validator  
	},
	numeric: (attribute, value) => {
		return _.isNumber(parseInt(value));
	},
	present: () => {
		// TODO: present validator  
	},
	regex: () => {
		// TODO: regex validator  
	},
	notRegex: () => {
		// TODO: notRegex validator  
	},
	requiredIf: () => {
		// TODO: requiredIf validator  
	},
	requiredUnless: () => {
		// TODO: requiredUnless validator  
	},
	requiredWith: () => {
		// TODO: requiredWith validator  
	},
	requiredWithAll: () => {
		// TODO: requiredWithAll validator  
	},
	requiredWithout: () => {
		// TODO: requiredWithout validator  
	},
	requiredWithoutAll: () => {
		// TODO: requiredWithoutAll validator  
	},
	same: () => {
		// TODO: same validator  
	},
	size: () => {
		// TODO: size validator  
	},
	sometimes: () => {
		// TODO: sometimes validator  
	},
	string: (attribute, value) => {
		return _.isString(value);
		// TODO: string validator  
	},
	timezone: () => {
		// TODO: timezone validator  
	},
	url: () => {
		// TODO: url validator  
	},
	uuid: () => {
		// TODO: uuid validator  
	},
};