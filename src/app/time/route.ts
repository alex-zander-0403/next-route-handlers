// force-static кеширует данные на уровне сборки
export const dynamic = "force-static";

// ревалидация кеша без пересборки всего приложения каждые 30 сек
export const revalidate = 30;

export async function GET() {
  // при обращении/обновлении на /time получаем актуальное время
  return Response.json({ time: new Date().toLocaleTimeString() });
}
