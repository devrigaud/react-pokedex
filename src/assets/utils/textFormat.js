function lowercase(str) {
	if (!str) return ''
	return str.toLowerCase()
}

function capitalize(str) {
	if (!str) return ''
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function removeSpace(str) {
	if (!str) return ''
	return str.replace(/\s/g, '')
}

export { lowercase, capitalize, removeSpace }
