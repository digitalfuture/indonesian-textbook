# Инструкция по деплою на GitHub Pages

## Шаг 1: Создать GitHub репозиторий

1. Зайдите на GitHub (github.com)
2. Нажмите "New repository" или перейдите по ссылке: https://github.com/new
3. Введите имя репозитория, например: `indonesian-textbook`
4. Сделайте репозиторий публичным (Public)
5. Нажмите "Create repository"

## Шаг 2: Инициализировать Git и запушить код

Откройте терминал в папке проекта и выполните команды:

```bash
cd indonesian-textbook

# Инициализация Git репозитория
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Indonesian textbook app"

# Добавление удалённого репозитория (замените USERNAME на ваш логин GitHub)
git remote add origin https://github.com/USERNAME/indonesian-textbook.git

# Отправка кода на GitHub
git push -u origin main
```

Если у вас другая ветка по умолчанию (например, master), замените `main` на `master`.

## Шаг 3: Настроить GitHub Actions для автоматического деплоя

Создайте файл `.github/workflows/deploy.yml` в корне проекта:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Шаг 4: Включить GitHub Pages

1. Перейдите в ваш репозиторий on GitHub
2. Нажмите "Settings" (Настройки)
3. В левом меню выберите "Pages"
4. В разделе "Build and deployment":
   - Source: выберите "GitHub Actions"
5. Сохраните изменения

## Шаг 5: Проверить деплой

После пуша кода на GitHub:

1. Перейдите во вкладку "Actions" в вашем репозитории
2. Вы увидите запущенный workflow "Deploy to GitHub Pages"
3. Дождитесь завершения сборки (обычно 1-2 минуты)
4. После успешного деплоя ваш сайт будет доступен по адресу:
   `https://USERNAME.github.io/indonesian-textbook/`

## Обновление сайта

После внесения изменений в код:

```bash
# Сохраните изменения
git add .
git commit -m "Описание изменений"
git push
```

GitHub Actions автоматически соберёт и задеплоит обновлённую версию сайта.

## Примечания

1. **Базовый путь**: В vite.config.ts установлен `base: './'`, что позволяет сайту работать в подпапке GitHub Pages.

2. **Кэширование**: После деплоя может потребоваться несколько минут, чтобы сайт стал доступен.

3. **Ошибки**: Если деплой не удался, проверьте вкладку "Actions" для просмотра логов ошибок.

4. **Домен**: По умолчанию сайт доступен на `username.github.io/indonesian-textbook`. Для использования собственного домена настройте его in Settings > Pages > Custom domain.

## Альтернативный способ (без GitHub Actions)

Если вы не хотите использовать GitHub Actions, можно задеплоить вручную:

1. Соберите проект: `npm run build`
2. Создайте ветку `gh-pages`: `git checkout -b gh-pages`
3. Скопируйте содержимое папки `dist` в корень
4. Закоммитьте и запушите: `git add . && git commit -m "Deploy" && git push origin gh-pages`
5. В Settings > Pages выберите источник "Deploy from a branch" и ветку `gh-pages`

Однако способ с GitHub Actions предпочтительнее, так как автоматизирует процесс.
