install: # установить зависимости
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

publish: #выполнит установку publish
	npm publish --dry-run