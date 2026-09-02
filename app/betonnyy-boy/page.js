'use client'

// app/betonnyy-boy/page.js
export default function BetonnyyBoyPage() {
  return (
    <main style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif'
    }}>
      
      <h1 style={{ textAlign: 'center' }}>Как я укреплял участок бетонным боем вместо газона</h1>
      
      {/* ФОТО АВТОРА */}
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img 
          src="https://raw.githubusercontent.com/Bessonina/devdock-site/refs/heads/main/public/video/header.png" 
          alt="Самостройщик с дивана на фоне стройки" 
          style={{ 
            width: '100%', 
            maxWidth: '860px',
            height: 'auto', 
            maxHeight: '450px', 
            objectFit: 'cover', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'block',
            margin: '0 auto'
          }} 
          onClick={(e) => window.open(e.target.src, '_blank')}
        />
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>
          Самостройщик с дивана на фоне стройки. Всё по-честному.
        </figcaption>
      </figure>
      
      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        <strong>Всем привет!</strong> Я самостройщик с дивана. По сути, я — это ты. Потому что всё, что сделал я, сможешь сделать и ты, раз у тебя есть доступ к интернету, голова и руки.
      </p>

      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        У меня уже был участок и дом, и этот опыт я считаю неуспешным. Я строил всё сам по роликам с одного известного видеохостинга имя которого нельзя поминать в суе, по сути, и многое там было сделано с косяками. Именно их я хочу учесть при новом строительстве.
      </p>

      <h2 style={{ textAlign: 'center' }}>Почему я вообще это затеял</h2>
      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Когда я купил участок, он не был болотом, но после дождей и особенно весной вода стояла и никуда не уходила. Позже выяснилось — под тонким слоем земли почти 5 метров глины. Вода просто не могла впитаться.
      </p>

      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        До этого у меня уже был участок, где я мучился с травой. Это был не газон, а так, жидкая травушка с сорняками, которую надо косить. И тут я понял: я не хочу снова проходить через эту историю. Вспашка, посадка, вечная борьба с сорняками — короче, газон — это геморрой, который мне не нужен.
      </p>

      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Поэтому я решил: снимаю весь плодородный слой и засыпаю участок гравийным щебнем. Позже, если захочу газончики или клумбы, просто сделаю локальные "островки": огорожу место и завезу чернозём. А где нужно — вымощу дорожки уже под будущие постройки.
      </p>

      {/* ВИДЕО 1: Снятие плодородного слоя */}
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '860px',
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000',
            display: 'block',
            margin: '0 auto'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/snyatie_plodorodki.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>
          Снятие плодородного слоя трактором-грейдером
        </figcaption>
      </figure>

      <h2 style={{ textAlign: 'center' }}>Почему бетонный бой, а не щебень?</h2>
      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Всё просто: бетонный бой — гораздо дешевле. Мне нужно было 85 кубов на засыпку всего участка. Отдал я за это 240 000 рублей. Из них только 90 000 — сам бой, всё остальное — доставка. Логика была железная.
      </p>

      <h2 style={{ textAlign: 'center' }}>Технология: делаем "пирог"</h2>
      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Чтобы бетонный бой не ушёл в глину, я постелил <a href="https://www.ozon.ru/category/geotekstil-i-georeshetki-14751/bikra-100946032/" target="_blank" rel="noopener noreferrer">геотекстиль «Дорнит» 400-й плотности</a>. Материал очень прочный — по нему свободно ездили КАМАЗы, трактора и краны. Всё выдержал. Я пришпилил его колышками, но они не помогли — нахлесты геотекстиля всё равно разъехались. Тогда я подумал: "Ну, ерунда", и забил. А зря, как оказалось.
      </p>

      {/* ФОТО РУЛОНОВ ДОРНИТА */}
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img 
          src="https://raw.githubusercontent.com/Bessonina/devdock-site/refs/heads/main/public/video/dornit_ruloni.jpg" 
          alt="Рулоны геотекстиля Дорнит на участке" 
          style={{ 
            width: '100%', 
            maxWidth: '860px',
            height: 'auto', 
            maxHeight: '450px', 
            objectFit: 'cover', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'block',
            margin: '0 auto'
          }} 
          onClick={(e) => window.open(e.target.src, '_blank')}
        />
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>
          Рулоны геотекстиля «Дорнит» ждут своего часа на участке
        </figcaption>
      </figure>

      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '860px',
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000',
            display: 'block',
            margin: '0 auto'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/raskataniy_dornit.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>
          Раскатка геотекстиля «Дорнит» по участку
        </figcaption>
      </figure>

      <h2 style={{ textAlign: 'center' }}>Борьба с сорняками: две попытки</h2>
      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Перед укладкой геотекстиля я решил обработать почву, чтобы сорняки и борщевик не пробивались. Сначала я купил в <a href="https://www.leroymerlin.ru/" target="_blank" rel="noopener noreferrer">Лемана Про</a> пестицид для уничтожения семян в почве. Зашёл и сказал: "Дайте то, что убьёт всё, чтобы даже семена не взошли". Обработал землю. Прошла неделя — и на голой земле уже торчали новые ростки борщевика. Этот метод не сработал совсем.
      </p>

      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Тогда я попробовал другой подход. Взял <a href="https://www.ozon.ru/product/ankor-85-sredstvo-ot-sornyakov-borshchevika-sosnovskogo-i-nezhelatelnoy-rastitelnosti-540230109/" target="_blank" rel="noopener noreferrer">гербицид «Анкор-85»</a>, который наносится непосредственно на листья растений. Обработал все листья вокруг участка и те места, где уже пробивались ростки. Через неделю листья начали желтеть, а ещё через неделю — полностью засохли и пожухли. Гербицид сработал отлично. На видео как раз видно оба этапа: и обработка почвы, и обработка по листьям.
      </p>

      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Для работы с химией я использовал <a href="https://www.ozon.ru/product/respirator-polnolitsevoy-fixzilla-ot-pyli-himii-dlya-pokraski-stroitelnyy-professionalnyy-3478285881/" target="_blank" rel="noopener noreferrer">полнолицевой респиратор FixZilla</a> — он защищает от пыли и химии, и <a href="https://www.ozon.ru/product/sapogi-deepdive-dlya-pohoda-ohoty-i-rybalki-1580542290/" target="_blank" rel="noopener noreferrer">сапоги DeepDive</a>, которые я купил специально для этих работ, чтобы было удобно ходить по бетонному бою и не свернуть себе ноги.
      </p>

      {/* ВИДЕО: Обработка гербицидом (почва + листья) */}
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '860px',
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000',
            display: 'block',
            margin: '0 auto'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/gerbicid.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>
          Обработка участка гербицидом: сначала почва (без эффекта), затем по листьям (результат через 2 недели)
        </figcaption>
      </figure>

      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Для распыления я использовал <a href="https://www.ozon.ru/product/opryskivatel-sadovyy-akkumulyatornyy-keelat-20-l-2-batarei-4000-mach-elektricheskiy-raspylitel-3588320491/" target="_blank" rel="noopener noreferrer">аккумуляторный опрыскиватель KEELAT на 20 литров</a>. У него удобная длинная штанга (230 см) и автоматическое перемешивание раствора, чтобы химия не оседала на дно. Две батареи по 4000 мАч позволяют работать без подзарядки весь день. На видео видно, как я обрабатываю участок в белом костюме — это как раз он.
      </p>

      <h2 style={{ textAlign: 'center' }}>Процесс и машины</h2>
      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Бетонный бой засыпали. Трактор разровнял (10 000 рублей), потом я утрамбовал площадку катком (25 000 рублей). Соседи и проезжающие строители постоянно подходили: "Что ты тут делаешь? Мы никогда не видели, чтобы на личном участке так делали". Я шутил: "Парковку делаю". А потом объяснял, что не хочу газон.
      </p>

      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Для работы на участке я купил <a href="https://www.ozon.ru/product/botinki-rabochie-savel-titan-4031759388/" target="_blank" rel="noopener noreferrer">рабочие ботинки SAVEL Титан</a> — они с металлическим мыском, очень качественные, в них безопасно ходить по стройплощадке.
      </p>

      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '860px',
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000',
            display: 'block',
            margin: '0 auto'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/traktor_beton.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>
          Трактор разравнивает бетонный бой
        </figcaption>
      </figure>

      <h2 style={{ textAlign: 'center' }}>А потом пришли кроты</h2>
      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        В местах, где геотекстиль разошёлся, появились кроты. Они каким-то чутьём находили эти дыры, раздвигали бетонный бой и выкидывали наверх кучи земли! Всё моё желание избавиться от земли пошло прахом. Теперь по всему участку горки земли, и в них уже всходят семена.
      </p>

      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Мы заливали в норы дёготь — вроде помогло. Теперь они не выходят на открытое пространство, но зато роют под морским контейнером, который стоит на блоках. Это уже не так критично, но осадочек, конечно, остался.
      </p>

      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '860px',
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000',
            display: 'block',
            margin: '0 auto'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/kroti.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>
          Результат диверсии кротов на участке
        </figcaption>
      </figure>

      <h2 style={{ textAlign: 'center' }}>Что я понял и что посоветую</h2>
      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Если бы я знал про кротов, я бы перед укладкой геотекстиля постелил мелкоячеистую сетку от грызунов. Это бы решило проблему на корню. Так что мой главный совет: если будете повторять мой опыт — не поленитесь, постелите сетку сначала. Потом будет уже поздно, как у меня.
      </p>

      <h2 style={{ textAlign: 'center' }}>Как выглядит сейчас и что в планах</h2>
      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        Сейчас мой участок выглядит как обычная, хорошо сделанная парковка. Декоративный гравийный щебень сверху я пока не клал — нет денег. Но в планах это сделать. Вода уходит нормально, хотя внизу она стоит, и когда раскапываешь бой, чувствуется запах гнилой земли. Для моих свайных фундаментов это не страшно.
      </p>

      <p style={{ textAlign: 'left', maxWidth: '860px', margin: '0 auto' }}>
        В целом, решение было правильным. Но теперь у меня есть для вас один железный совет: <strong>обязательно сетка от кротов!</strong> Не повторяйте мою ошибку.
      </p>

    </main>
  );
}
