const listInputTable = [
	{ name: 'Foundation', items: ['Post Tension', 'Standard Rebars', 'Piers and Beams'] },
	{ name: 'Sheetrock', items: ['Hanging', 'Tape Float', 'Texture'] },
	{ name: 'Expense', items: ['Labor', 'Material', 'Fees'] },
	{ name: 'Flooring', items: ['Carpet', 'Tiles', 'Laminate', 'Wood'] },
	{ name: 'Paint', items: ['Interior', 'Exterior'] },
	{ name: 'Payment', items: ['Cash', 'Check', 'Zelle', 'Wire'] },
	{ name: 'Carpenter', items: ['Sideboard', 'Shelving', 'Doors', 'Trims', 'Cabinets'] },
	{ name: 'Concrete', items: [] },
	{ name: 'Framing', items: [''] },
	{ name: 'Plumbing', items: [''] },
	{ name: 'Electrical', items: [''] },
	{ name: 'Roofing', items: [''] },
	{ name: 'Insulation', items: [''] },
]

const seedDB = async (models) => {
	/* Mandatory Start */
	await models.ListInput.bulkCreate(listInputTable)
	/* Mandatory End */
}

module.exports = seedDB
