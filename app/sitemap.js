// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://devdock-bessonovy2.sl.swteh.ru',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://devdock-bessonovy2.sl.swteh.ru/betonnyy-boy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Когда появятся новые статьи, просто добавляй их сюда по такому же принципу
  ];
}
