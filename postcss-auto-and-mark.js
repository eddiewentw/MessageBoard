const postcss = require('postcss');

const selectors = (parent, node) => {
	let result = [];
	parent.selectors.forEach((i) => {
		node.selectors.forEach((j) => {
			result.push( j.indexOf('&') === -1 ? `${i} ${j}` : j.replace(/&/g, i));
		});
	});

	return result;
}

const processRule = (rule) => {
	let unwrapped = false;
	let after = rule;
	rule.each((child) => {
		if( child.type === 'rule' ) {
			unwrapped = true;
			child.selectors = selectors(rule, child);
			after = child.moveAfter(after);
		}
	});
	if( unwrapped ) {
		rule.raws.semicolon = true;
		if( rule.nodes.length === 0 ) {
			rule.remove();
		}
	}
}

module.exports = postcss.plugin('postcss-auto-and-mark', () => {
	const process = (node) => {
		node.each((child) => {
			if( child.type === 'rule' ) {
				processRule(child);
			}
			else if( child.type === 'atrule' ) {
				process(child);
			}
		});
	};

	return process;
});
