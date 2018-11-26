      
import _ from 'lodash';
import validateAttributes from './methods';
// (function () {
// 	let logger = document.getElementById('root');
// 	console.log = (...message) => {
// 		if (typeof message == 'object') {
// 			logger.innerHTML += '<pre>' + (JSON && JSON.stringify ? JSON.stringify(message, null, 2) : message) + '</pre>';
// 		} else {
// 			logger.innerHTML += message + '<br />';
// 		}
// 	};
// })();
// TODO: Create validate function
const messages = {
	required: 'The ${attribute} field is required',
	min: 'Minimum value of ${attribute} is ${parameters[0]}',
	max: 'Maximum value of ${attribute} is ${parameters[0]}',
	numeric: 'The ${attribute} must be a numeric',
};

export const validate = (data, rules) => {
	const results = {};
	_.forEach(data, (v, attribute) => {
		const value = data[attribute];
		if (!_.isUndefined(rules[attribute])) {
			_.forEach(rules[attribute].split('|'), (va) => {
				if (!_.isUndefined(validateAttributes[va.split(':')[0]])) {
					const parameters = va.split(':')[1] ? va.split(':')[1].split(',') : [];
					const validator = va.split(':')[0];
					const result = validateAttributes[va.split(':')[0]](attribute, value, parameters);
					if (!result) {
						if (!results[attribute]) {
							results[attribute] = [];
						}
						results[attribute].push(_.template(messages[validator])({attribute, parameters}));
					}
				}
			});
		}
	});

	return results;
};

// let f = new File(['asdasdasd'], 'filename.jpg', {type: 'image/jpeg', lastModified: new Date()});
// const attributes = {
// 	'first_name': 'Rizal',
// 	'last_name': 'Zulfikar',
// 	'email': 'rizal.j.zulfikar@gmail.com',
// 	'age': 2,
// 	'photo': f
// };
// const rules = {
// 	'first_name': 'required|string',
// 	'last_name': 'required|string|email',
// 	'email': 'required|email',
// 	'age': 'required|numeric|max:3|min:2',
// 	'photo': 'required|mimes:image/jpeg|max:1'
// };

// validate(attributes, rules);