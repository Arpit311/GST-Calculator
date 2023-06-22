function secpg()
{
    window.location.pathname = "Ggst.html";
}
const addItemBtn = document.getElementById('add-item');
const calculateBtn = document.getElementById('calculate');
const itemTable = document.getElementById('item-table');
const totalGst = document.getElementById('ab');
const pricing = document.getElementById("a");
const tomtal = document.getElementById("ans");

let itemNo = 1;

addItemBtn.addEventListener('click', () => {
	itemNo++;

	const newRow = document.createElement('tr');
	newRow.innerHTML = `
		<td><input type="text" name="item_name[]" placeholder="Enter item name"></td>
		<td><input type="number" name="price[]" placeholder="Enter item price"></td>
		<td><input type="number" name="gst[]" placeholder="Enter GST percentage"></td>
		<td><input type="text" name="gst_amount[]" placeholder="GST amount" readonly></td>
	`;
	itemTable.appendChild(newRow);
});

calculateBtn.addEventListener('click', () => {
	let totalGstAmount = 0;
    let total_value = 0;
	const priceInputs = document.getElementsByName('price[]');
	const gstInputs = document.getElementsByName('gst[]');
	const gstAmountInputs = document.getElementsByName('gst_amount[]');

	for (let i = 0; i < priceInputs.length; i++) {
		const price = parseFloat(priceInputs[i].value);
		const gst = parseFloat(gstInputs[i].value);

		if (!isNaN(price) && !isNaN(gst)) {
			const gstAmount = price * (gst / 100);
			gstAmountInputs[i].value = gstAmount.toFixed(2);
            total_value += price;
			totalGstAmount += gstAmount;
		}
	}
    pricing.innerHTML = total_value.toFixed(2);
	totalGst.innerHTML = totalGstAmount.toFixed(2);
    tomtal.innerHTML = (parseInt(total_value) + parseFloat(totalGstAmount)).toFixed(2);
});
