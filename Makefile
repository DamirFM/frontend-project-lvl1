install: 
	npm ci

publish: #install publish
	npm publish --dry-run

lint: 
	npx eslint .

fix: 
	npx eslint --fix .

brain-games: #Running the brain-games
	node bin/brain-games.js

brain-even: #Running the brain-even game
	node bin/brain-even.js

brain-calc: #Running the brain-calc game
	node bin/brain-calc.js

brain-gcd: #Running the brain-gcd game
	node bin/brain-gcd.js

brain-progression: #Running the brain-progression game
	node bin/brain-progression.js

brain-prime: #Running the brain-prime game
	node bin/brain-prime.js