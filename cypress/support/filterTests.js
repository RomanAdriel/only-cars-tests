const filterTests = (definedTags, runTest) => {
	if (Cypress.env('tags')) {
		const tags = Cypress.env('tags').split(',');
		const isFound = definedTags.some((definedTag) => tags.includes(definedTag));

		if (isFound) {
			runTest();
		}
	} else {
		runTest();
	}
};

export default filterTests;
