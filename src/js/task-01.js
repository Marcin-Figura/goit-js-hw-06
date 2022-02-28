const headings = document.querySelectorAll("li h2");
const countCategory = headings.length;

console.log(`Number of categories: ${countCategory}`);

for (const headerItem of headings) {
	const itemsFromCategory = headerItem.nextElementSibling.children;

	console.log(`Category: ${headerItem.textContent}`);

	console.log(`Elements: ${itemsFromCategory.length}`);
}
