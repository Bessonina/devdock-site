// app/page.js
export default function HomePage() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <h1 style={{ textAlign: 'center' }}>Стройка Девдок</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Честный опыт самостройщика. Как я строю дом и почти сошёл с ума.
      </p>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Все статьи</h2>
        
        {/* СТАТЬЯ 1 */}
        <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>
            <a href="/betonnyy-boy" style={{ textDecoration: 'none', color: '#0070f3' }}>
              Как я укреплял участок бетонным боем вместо газона
            </a>
          </h3>
          <p style={{ margin: '0', color: '#555' }}>
            Участок тонул в глине, трава достала, а газон — это геморрой. 
            Я снял плодородный слой, засыпал всё бетонным боем, 
            пережил нашествие кротов и теперь делюсь опытом.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '8px' }}>
            Опубликовано: 2 сентября 2026
          </p>
        </div>

        {/* СТАТЬЯ 2 (заглушка) */}
        <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #eee', borderRadius: '8px', opacity: 0.6 }}>
          <h3 style={{ margin: '0 0 10px 0' }}>
            <span style={{ color: '#999' }}>Как я строю хозблок из морского контейнера (скоро)</span>
          </h3>
          <p style={{ margin: '0', color: '#888' }}>
            Скоро здесь появится статья о том, как я превратил морской контейнер в гостевой домик.
          </p>
        </div>

        {/* СТАТЬЯ 3 (заглушка) */}
        <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #eee', borderRadius: '8px', opacity: 0.6 }}>
          <h3 style={{ margin: '0 0 10px 0' }}>
            <span style={{ color: '#999' }}>Как я выбирал фундамент (скоро)</span>
          </h3>
          <p style={{ margin: '0', color: '#888' }}>
            Скоро здесь появится статья о том, почему я остановился на свайном фундаменте.
          </p>
        </div>
      </div>

    </main>
  );
}
