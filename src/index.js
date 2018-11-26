      
import _ from 'lodash';
import validateAttributes from './concerns/ValidatesAttributes';
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
export const validate = (data, rules) => {
	_.forEach(data, (v, field) => {
		const value = data[field];
		if (!_.isUndefined(rules[field])) {
			_.forEach(rules[field].split('|'), (va) => {
				if (!_.isUndefined(validateAttributes[va.split(':')[0]])) {
					const result = validateAttributes[va.split(':')[0]](field, value, va.split(':')[1] ? va.split(':')[1].split(',') : []);
					const validator = va.split(':')[0];
					console.log(field, validator, result);
				}
			});
		}
	});
};

let f = new File(['asdasdasd'], 'filename.jpg', {type: 'image/jpeg', lastModified: new Date()});
const fields = {
	'first_name': 'Rizal',
	'last_name': 'Zulfikar',
	'email': 'rizal.j.zulfikar@gmail.com',
	'age': 2,
	'photo': f
};
const rules = {
	'first_name': 'required|string',
	'last_name': 'required|string|email',
	'email': 'required|email',
	'age': 'required|numeric|max:3|min:2',
	'photo': 'required|mimes:image/jpeg|max:1'
};

validate(fields, rules);