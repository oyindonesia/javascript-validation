      
import _ from 'lodash';
import methods from './methods';
import messages from './messages';
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
	const results = {};
	_.forEach(data, (v, attribute) => {
		const value = data[attribute];
		results[attribute] = [];
		if (!_.isUndefined(rules[attribute])) {
			_.forEach(rules[attribute].split('|'), (va) => {
				if (!_.isUndefined(methods[va.split(':')[0]])) {
					const parameters = va.split(':')[1] ? va.split(':')[1].split(',') : [];
					const validator = va.split(':')[0];
					const result = methods[va.split(':')[0]](attribute, value, parameters);
					if (!result) {
						results[attribute].push(_.template(messages[validator])({attribute, parameters}));
					}
				}
			});
		}
	});

	return _.transform(results, (r, v, k) => {
		return r[k] = v.join(', ');
	});
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