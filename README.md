# Next.js Route Handlers Demo

Проект демонстрирует работу с Route Handlers в Next.js для создания CRUD API комментариев.

<div align="center">

![NEXT route handlers Interface](screenshots/next-route-handlers.png)
_Интерфейс_

</div>

## Технологии

- Next.js 16.0.4
- React 19.2.0
- TypeScript
- Tailwind CSS

## Особенности реализации

### 1. Маршрутизация API

**Статические обработчики** (`src/app/comments/route.ts`):

- `GET /comments` - получение всех комментариев
- `POST /comments` - создание нового комментария

**Динамические обработчики** (`src/app/comments/[id]/route.ts`):

- `GET /comments/:id` - получение конкретного комментария
- `PATCH /comments/:id` - обновление комментария
- `DELETE /comments/:id` - удаление комментария

### 2. Клиентская часть

Главная страница (`src/app/page.tsx`) содержит:

- Рендеринг всего списка комментариев с возможностью редактирования и удаления
- Форму добавления новых комментариев
- Автоматическое обновление списка после изменений

### 3. Интеграция с внешним API

Проект использует MockAPI сервер для хранения данных:
