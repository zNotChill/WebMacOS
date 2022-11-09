
		async function translate() {
			const language = "english"
			let lang = "";
			fetch(`https://znotchill.github.io/WebMacOS/languages/${language}.json`).then(res => res.json()).then(data => { 
				lang = data
				for (const r in lang) {
					for (const v in lang[r]) {
						// Key to text (KEYBOARD_BRIGHTNESS to "Keyboard Brightness" etc)
						const key = `${r}_${v}`;
						try {
							document.querySelectorAll(`#${key}`).forEach((a) => {
								a.innerText = lang[r][v]
							})
						} catch (error) {
							
						}
					}
				}
			})
		}
		translate()
