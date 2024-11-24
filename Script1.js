

 
	document.addEventListener('DOMContentLOaded', () => {
	const generateButton = document.getElementByID('generateButton');
	const resetButton = document.getElementByID('resetButton');
	const inputScreen = document.getElementByID('inputScreen');
	const outputScreen = document.getElementByID('outputScreen');
	const madLibOutput = document.getElementByID('madLibOutput');
}

generateButton.addEventListener('click', () =>{
	const words = [
		document.getElementByID('word1').value,
		document.getElementByID('word2').value,
		document.getElementByID('word3').value,
		document.getElementByID('word4').value,
		document.getElementByID('word5').value,
		document.getElementByID('word6').value,
		document.getElementByID('word7').value,
		document.getElementByID('word8').value,
		document.getElementByID('word9').value,
		document.getElementByID('word10').value,
		document.getElementByID('word11').value,
		document.getElementByID('word12').value,
		document.getElementByID('word13').value,
		document.getElementByID('word14').value,
		document.getElementByID('word15').value,
	];
	
	const madLib = 'I went to the movies yesterday with ${word1} and ${word2}. We saw ${word3}. It was ${words4}. At one part, I even ${word5} and ran for the ${word6}. During the movie, we ate ${word7} and ${word8}. I got mad because the person behind me kept ${word9} during the movie and would not stop ${word10}. He was asked to leave after he ${word11} across the theatre. It was pretty ${word12}. Overall, I liked the movie beacause it was ${word13} and the main character was super ${word14}. Hopefully next time the people sitting behind me will be more ${word15} ';

		madLibOutput.textContent = madLib;

		inputScreen.classList.add('hidden');
		outputScreen.classList.remove('hidden');

});

	resetButton.addEventListener('click', () => {
		inputScreen.classList.add('hidden');
		outputScreen.classList.remove('hidden');
	});

});
