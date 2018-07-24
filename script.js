document.querySelector('form').addEventListener('submit', e => {
	e.preventDefault()

	const fileInputs = []

	for (let i = 0; i < e.target.length; i++) {
		if (e.target[i] && e.target[i].type === 'file') {
			fileInputs.push(e.target[i])
		}
	}

	const errors = []

	fileInputs.forEach(input => {
		const files = input.files

		for (let i = 0; i < files.length; i++) {
			const kb = files[i].size / 1024

			if (kb > 4096) {
				errors.push(input.name)
			}
		}
	})

	if (errors.length > 0) {
		errors.forEach(name => {
			document.querySelectorAll(`input[name=${name}]`).forEach(input => {
				input.insertAdjacentHTML(
					'afterend',
					'<p>Размер файла превышает допустимое значение</p>'
				)
			})
		})
	} else {
		e.target.submit()
	}
})
